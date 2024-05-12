---
category: Web3
tags:
  - Rust
  - Golang
  - Web3
  - ethers-rs
status: 已发布
day: '2023-11-19'
catalog: []
slug: ethereum-development-with-rust-3
title: Ethereum Development With Rust 3
urlname: 6cca776e-e4bf-48dc-8723-c70a29dd19c6
date: '2024-05-12 11:52:00'
updated: '2024-05-12 23:01:00'
image: 'https://www.notion.so/images/page-cover/gradients_3.png'
published: 2023-11-19T08:00:00.000Z
---

This series of articles mainly uses Rust's `ethers-rs` to replicate the content of the book "Ethereum Development with Go". Therefore, the title of this series is called "Ethereum Development with Rust". It can be considered as a quick start tutorial for `ethers-rs`. Since the original book is already well-written, this series will focus more on replicating the code and will not explain too much about the related basic knowledge.


This time, we will replicate the third chapter "Transactions" from "Ethereum Development with Go".


The "Transactions" chapter mainly includes the following content:

1. Querying blocks
2. Querying transactions
3. ETH transfer
4. Token transfer
5. Listening for new blocks
6. Creating raw transactions
7. Sending raw transactions

The following dependencies are used in this article:


```rust
ethers = {version="2.0", features=["rustls", "ws"]}
tokio = {version="1", features=["full"]}
eyre = "0.6"
hex = { package = "const-hex", version = "1.6", features = ["hex"] }
regex = "1.10.2"
```


### Query block



`ethers-rs` does not provide a way to get the block header, so just get the corresponding block.


```rust

use ethers::prelude::*;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let block = provider.get_block(1).await?.unwrap();

    println!("{:?}", block.number);
    println!("{:?}", block.time().unwrap());
    println!("{:?}", block.timestamp);
    println!("{:?}", block.difficulty);
    println!("{:?}", block.hash.unwrap());
    println!("{:?}", block.transactions.len());
    Ok(())
}
```


### Query transaction



Unlike `go-ethereum`, the transaction object of `ethers-rs` does not need to construct its own signature object to decode the data to obtain the `from` field.


```rust

use ethers::prelude::*;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let block = provider.get_block_with_txs(1).await?.unwrap();
    for tx in block.transactions {
        println!("{:?}", tx.hash);
        println!("{:?}", tx.value);
        println!("{:?}", tx.gas);
        println!("{:?}", tx.gas_price.unwrap());
        println!("{:?}", tx.nonce);
        println!("{:?}", tx.input);
        // to可能为None, 因为创建合约的交易没有to字段
        println!("{:?}", tx.to.unwrap());
        println!("{:?}", tx.from);

        let recipt = provider.get_transaction_receipt(tx.hash).await?.unwrap();
        println!("{:?}", recipt.status.unwrap());
    }


    Ok(())
}
```


### ETH transfer



`ethers-rs` transfers are slightly easier than `go-ethereum` transfers, mainly because the provider object sets some necessary fields of the transaction object, such as transaction fee, transaction price, etc., if the original transaction is not sent.


```rust
use ethers::prelude::*;
use eyre::Result;
use ethers::signers::{Signer, Wallet};
use ethers::utils::{parse_units, ParseUnits};

const RPC_URL: &str = "http://127.0.0.1:8545";


#[tokio::main]
async fn main() -> Result<()> {
    // 通过私钥创建一个钱包，并用它的公钥作为接受地址
    let prikey = hex::decode("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    // 连接节点
    let provider = Provider::<Http>::try_from(RPC_URL)?;
    let accounts = provider.get_accounts().await?;
    println!("节点账户: {:?}", accounts);

    // 设置from,to两个交易字段
    let from = accounts[0];
    let to = wallet.address();

    // 通过单位来构造交易的数值, 而不需要手动打18个0
    let pu: ParseUnits = parse_units("1.0", "ether").unwrap();
    let value = U256::from(pu);
    let tx = TransactionRequest::new().to(to).value(value).from(from);

    // 通过eth_sendTransaction接口发送(或者说广播)交易
    let balance_before = provider.get_balance(from, None).await?;
    let tx = provider.send_transaction(tx, None).await?.await?;
    println!("{}", serde_json::to_string(&tx)?);

    // 查看交易前后的余额变化
    // 值得注意的是, 交易需要付出手续费，所以不仅仅是减去 1 ether
    let balance_after = provider.get_balance(from, None).await?;
    assert!(balance_after < balance_before);
    println!("Balance before {balance_before}");
    println!("Balance after {balance_after}");
    Ok(())
}
```


### Token transfer



`ethers-rs` token transfer is much easier than `go-ethereum` because of the powerful macro programming support, you can generate code directly at compile time, so you can get code prompts when writing code, which is great for me as a code prompt oriented programmer.


```rust
use ethers::{
    contract::abigen,
    middleware::SignerMiddleware,
    providers::{Http, Provider, Middleware},
    signers::{Signer, Wallet},
    types::{Address, U256}
};
use eyre::Result;
use std::{convert::TryFrom, sync::Arc};


const RPC_URL: &str = "http://127.0.0.1:8545";


#[tokio::main]
async fn main() -> Result<()> {
    // 构造本地钱包，用于创建signer对象
    let prikey = hex::decode("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包公钥: {:?}", wallet.address());
    let from_address = wallet.address();

    // 创建客户端
    let provider = Provider::<Http>::try_from(RPC_URL)?;
    let to_address: Address = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0".parse().unwrap();

    // ERC20合约地址
    const ERC20_CONTRACT_ADDRESS: &str = "0xEB1774bc66930a417A76Df89885CeE7c1A29f405";
    let token_address: Address = ERC20_CONTRACT_ADDRESS.parse()?;
    // 生成合约对象
    abigen!(
        ERC20Contract,
        r#"[
            function balanceOf(address account) external view returns (uint256)
            function decimals() external view returns (uint8)
            function symbol() external view returns (string memory)
            function transfer(address to, uint256 amount) external returns (bool)
            event Transfer(address indexed from, address indexed to, uint256 value)
        ]"#,
    );
    // chain_id在签名验证的时候很重要！！！
    let chain_id = provider.get_chainid().await?.as_u64();
    // contract对象实例化的时候需要一个ARC对象
    let signer =
        Arc::new(SignerMiddleware::new(provider, wallet.with_chain_id(chain_id)));
    let contract = ERC20Contract::new(token_address, signer);

    // 将转账单位设置成 whole_amount * （10^decimals）
    let whole_amount: u64 = 1;
    let decimals = contract.decimals().call().await?;
    let decimal_amount = U256::from(whole_amount) * U256::exp10(decimals as usize);

    // 调用合约transfer接口
    println!("从账户[{:?}]转账到账户[{:?}]: {:?}", from_address, to_address, decimal_amount);
    let tx = contract.transfer(to_address, decimal_amount);
    // 等待交易完成
    let pending_tx = tx.send().await?;
    let _mined_tx = pending_tx.await?;

    // 获取余额
    let balance = contract.balance_of(to_address).call().await?;
    println!("账户[{:?}]当前余额: {:?}", to_address, balance);
    Ok(())
}
```


### Listen for new block


```rust
use ethers::providers::{Middleware, Provider, StreamExt, Ws};
use eyre::Result;

const WEBSOCKET_RPC_URL: &str = "ws://127.0.0.1:8546";

#[tokio::main]
async fn main() -> Result<()> {
    let provider =
        Provider::<Ws>::connect(WEBSOCKET_RPC_URL)
            .await?;

    // take代表最多获取一个监听数据
    let mut stream = provider.subscribe_blocks().await?.take(1);
    println!("开始监听，仅监听最多一个区块事件");
    while let Some(block) = stream.next().await {
        println!(
            "在时间点{:?}, 创建了新的区块号[{}] -> 对应的hash:{:?}",
            block.timestamp,
            block.number.unwrap(),
            block.hash.unwrap()
        );
    }
    println!("监听完毕.");

    // 一直监听
    println!("开始监听，一直监听，直到程序被关闭");
    let mut stream = provider.subscribe_blocks().await?;
    while let Some(block) = stream.next().await {
        println!(
            "在时间点: {:?}, 创建了新的区块号[{}] -> 对应的hash:{:?}",
            block.timestamp,
            block.number.unwrap(),
            block.hash.unwrap()
        );
    }
    println!("监听完毕.");
    Ok(())
}
```


### Creating/Sending Raw Transactions


The purpose of sending raw transactions is to customize the signature. Therefore, there is no need to self-sign just for the sake of self-signing. We can use the `SignerMiddleware` object provided by `ethers-rs` to wrap the wallet (or private key, or signer) object. Then, we only need to set up the transaction request simply. Unlike directly calling the `provider` object, we need to handle the transaction fees and transaction prices ourselves.


```rust
use ethers::prelude::*;
use ethers::middleware::{SignerMiddleware};
use eyre::Result;
use ethers::signers::{Signer, Wallet};
use ethers::utils::{parse_units, ParseUnits};

const RPC_URL: &str = "http://127.0.0.1:8545";


#[tokio::main]
async fn main() -> Result<()> {
    // 自定义钱包
    let prikey = hex::decode("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    // 设置收发地址
    let from_address = wallet.address();
    let to_address: Address = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0".parse().unwrap();

    // 创建交易金额
    let pu: ParseUnits = parse_units("1.0", "ether").unwrap();
    let value = U256::from(pu);

    // 构造交易请求
    let provider = Provider::<Http>::try_from(RPC_URL)?;
    let chain_id = provider.get_chainid().await.unwrap();
    let tx = TransactionRequest::new().to(to_address).value(value).from(from_address).chain_id(chain_id.as_u64());
    // 特别要注意chain_id是否正确!!!
    let wallet =  wallet.with_chain_id(chain_id.as_u64());

    let gas_price = provider.get_gas_price().await?;
    let gas = provider.estimate_gas(&tx.clone().into(), None).await?;
    let tx = tx.gas(gas).gas_price(gas_price);

    // 构造SignerMiddleware, 是provider进一步包装
    let new_provider = SignerMiddleware::new(provider, wallet);
    let nonce1 = new_provider.get_transaction_count(from_address, None).await?;
    let balance_before = new_provider.get_balance(from_address, None).await?;

    let tx = new_provider.send_transaction(tx, None).await.unwrap().await.unwrap();

    let nonce2 = new_provider.get_transaction_count(from_address, None).await?;
    assert!(nonce1 < nonce2);
    println!("tx: {}", serde_json::to_string(&tx)?);

    let balance_after = new_provider.get_balance(from_address, None).await?;
    // assert!(balance_after < balance_before);

    println!("Balance before {balance_before}");
    println!("Balance after {balance_after}");
    Ok(())
}
```


### Obtaining the Private Key from a Keystore File


The code tests in this article are all performed using Geth's development mode. Sometimes, you may need to use the private key. In that case, you can use this website to recover the private key:


[https://lab.miguelmota.com/ethereum-keystore/example/](https://lab.miguelmota.com/ethereum-keystore/example/)


The password for the keystore file in development mode is an empty value, so you don't need to fill it in.


### Summary


The content in this part is quite simple to implement using ethers-rs because there is no need to compile Solidity source code to generate the corresponding interface code. This is one of the powerful features of ethers-rs and Rust.


Through these three chapters, we should be able to complete most of the interactions with Ethereum, except for [missing content].


### Reference Links

- [https://goethereumbook.org/zh/](https://goethereumbook.org/zh/)
- [https://goethereumbook.org/en/](https://goethereumbook.org/en/)
- [https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools](https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools)
- [https://gakonst.com/ethers-rs](https://gakonst.com/ethers-rs)
- [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)
