---
category: Web3
tags:
  - Rust
  - Golang
  - Web3
  - ethers-rs
status: 已发布
catalog: []
slug: ethereum-development-with-rust-5
title: Ethereum Development With Rust 5
urlname: 8cb249e5-e5f5-4302-b296-085cf531ca1b
date: '2024-05-12 12:25:00'
updated: '2024-05-14 23:02:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_5.jpg'
published: 2023-12-11T08:00:00.000Z
---

:::note[提示]


This series of articles mainly uses Rust's ethers-rs to reproduce the content of the book "Ethereum Development with Go", so the title of this series is called "Ethereum Development with Rust". Since the original book is already well-written, this series focuses more on replicating the code and will not explain too much of the related basic knowledge.


:::


This time, we will reproduce the fifth chapter on event logs and the sixth chapter on account signatures from "Ethereum Development with Go".


This chapter mainly includes the following content:

- Subscribing to event logs
- Reading event logs
- Reading event logs of ERC-20 tokens
- Reading 0x Protocol event logs
- Generating and verifying signatures

```solidity
pragma solidity >=0.9.0;

contract SimpleStorage {

    event ValueChanged(address indexed author, string oldValue, string newValue);

    string _value;

    constructor(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }

    function getValue() view public returns (string memory) {
        return _value;
    }

    function setValue(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }
}
```


### Subscribing to Event Logs


In addition to generating structs bound to contracts, the `abigen` macro in `ethers-rs` also generates a struct ending with Filter for each event, such as `ValueChangedFilter` in the following text.


```rust
use ethers::prelude::*;
use ethers::types::Address;
use std::sync::Arc;

const RPC_URL: &str = "ws://127.0.0.1:8546";

abigen!(
    SimpleContract,
    "SimpleStorage.abi"
);


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Ws>::connect(RPC_URL).await?;

    const CONTRACT_ADDRESS: &str = "0x73511669fd4de447fed18bb79bafeac93ab7f31f";

    let contract_address: Address = CONTRACT_ADDRESS.parse()?;
    let client = Arc::new(provider);
    let contract = SimpleContract::new(contract_address, client);

    println!("合约设置的值: {:?}", contract.get_value().call().await?);
    let events = contract.events();
    let mut stream = events.stream().await?;

    println!("开始监听....");
    while let Some(Ok(evt)) = stream.next().await {
        println!("{evt:?}");
        // 因为只有一种类型的事件，match看起来有点鸡肋
        match evt {
            ValueChangedFilter { author, old_value, new_value } => println!("{author:?} {old_value:?} {new_value:?}"),
        }
    }

    Ok(())
}
```


### Reading Event Logs


Unlike `go-ethereum`, `ethers-rs` does not require additional processing. It can be used directly, just like the code above.


### Reading Event Logs of ERC-20 Tokens


There is no essential difference between `ERC-20` and ordinary events. The following two methods can be used for reference:


```rust
use ethers::{
    core::{
        abi::AbiDecode,
        types::{Address, Filter, U256},
    },
    providers::{Middleware, Provider, StreamExt, Ws},
};
use eyre::Result;
use std::sync::Arc;

const RPC_URL: &str = "ws://127.0.0.1:8546";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Ws>::connect(RPC_URL).await?;
    let client = Arc::new(provider);

    let erc20_transfer_filter =
        Filter::new().event("Transfer(address,address,uint256)");

    let mut stream = client.subscribe_logs(&erc20_transfer_filter).await?.take(2);

    println!("开始监听转账事件...");
    while let Some(log) = stream.next().await {
        println!(
            "block: {:?}, tx: {:?}, token: {:?}, from: {:?}, to: {:?}, amount: {:?}",
            log.block_number,
            log.transaction_hash,
            log.address,
            Address::from(log.topics[1]),
            Address::from(log.topics[2]),
            U256::decode(log.data)
        );
    }

    Ok(())
}
```


This method is relatively simple for a single event and does not require additional code generation using macros.


The code below uses macros and is directly copied from the official examples.


```rust
use ethers::{
    contract::abigen,
    core::types::Address,
    providers::{Provider, StreamExt, Ws},
};
use eyre::Result;
use std::sync::Arc;

abigen!(
    IERC20,
    r#"[
        event Transfer(address indexed from, address indexed to, uint256 value)
        event Approval(address indexed owner, address indexed spender, uint256 value)
    ]"#,
);

const WSS_URL: &str = "wss://mainnet.infura.io/ws/v3/c60b0bb42f8a4c6481ecd229eddaca27";
const WETH_ADDRESS: &str = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

#[tokio::main]
async fn main() -> Result<()> {
    // 监听方法一般使用websocket协议
    let provider = Provider::<Ws>::connect(WSS_URL).await?;
    let client = Arc::new(provider);
    let address: Address = WETH_ADDRESS.parse()?;
    let contract = IERC20::new(address, client);

    listen_all_events(&contract).await?;
    listen_specific_events(&contract).await?;

    Ok(())
}

// 监听所有事件
async fn listen_all_events(contract: &IERC20<Provider<Ws>>) -> Result<()> {
    let events = contract.events().from_block(16232696);
    let mut stream = events.stream().await?.take(1);

    while let Some(Ok(evt)) = stream.next().await {
        match evt {
            IERC20Events::ApprovalFilter(f) => println!("{f:?}"),
            IERC20Events::TransferFilter(f) => println!("{f:?}"),
        }
    }

    Ok(())
}

/// 监听单一事件
async fn listen_specific_events(contract: &IERC20<Provider<Ws>>) -> Result<()> {
    let events = contract.event::<ApprovalFilter>().from_block(16232696);
    let mut stream = events.stream().await?.take(1);

    while let Some(Ok(f)) = stream.next().await {
        println!("ApprovalFilter event: {f:?}");
    }

    Ok(())
}
```


### Generate and verify signatures


```rust
use eyre::Result;
use ethers::core::rand::thread_rng;
use ethers::signers::{LocalWallet, Signer};

#[tokio::main]
async fn main() -> Result<()> {
    // 创建随机钱包
    let wallet = LocalWallet::new(&mut thread_rng());

    // 说明要签名的数据
    let message = "Some data";

    // 生成签名对象
    let signature = wallet.sign_message(message).await?;
    println!("Produced signature {signature}");

    // 通过公钥验证
    signature.verify(message, wallet.address()).unwrap();
    println!("Verified signature produced by {:?}!", wallet.address());

    Ok(())
}
```


### Summary


At this point, I feel the code in this series is sufficient for Ethereum development (and also enough for me to come back and copy the code later), so I won't post the Rust implementation for `Swarm` and `Whisper` in the later parts. This series is complete.


However, it's really sad that `ethers-rs` is going to be deprecated.


Reference Links


[https://goethereumbook.org/zh/](https://goethereumbook.org/zh/)


[https://goethereumbook.org/en/](https://goethereumbook.org/en/)


[https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools](https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools)


[https://gakonst.com/ethers-rs](https://gakonst.com/ethers-rs)


[https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)

