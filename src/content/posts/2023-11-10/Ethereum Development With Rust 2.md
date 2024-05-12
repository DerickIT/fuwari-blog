---
category: Web3
tags:
  - Rust
  - Golang
  - Web3
  - ethers-rs
status: 已发布
day: '2023-11-10'
catalog: []
slug: ethereum-development-with-rust-2
title: Ethereum Development With Rust 2
urlname: f4872acb-d5b7-418f-8814-7d2168f10acb
date: '2024-05-12 11:50:00'
updated: '2024-05-12 12:08:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_5.jpg'
published: 2023-11-10T08:00:00.000Z
---

This series of articles mainly uses Rust's ethers-rs to replicate the content of the book "Ethereum Development with Go", so the title of this series is called "Ethereum Development with Rust". It can be considered as a quick start tutorial for ethers-rs. Since the original book is already well-written, this series will focus more on replicating the code and will not explain too much about the related basic knowledge.


Last time, we studied how to create various clients (Providers) with ethers-rs. This time, we will replicate the second chapter "Accounts" from "Ethereum Development with Go".


The "Accounts" chapter mainly includes the following content:

1. Account balance
2. Account token balance
3. Generating new wallets
4. Keystore
5. Address verification

The dependencies used in this article are as follows:


```rust
ethers = {version="2.0", features=["rustls", "ws"]}
tokio = {version="1", features=["full"]}
eyre = "0.6"
hex = { package = "const-hex", version = "1.6", features = ["hex"] }
regex = "1.10.2"
```


### Account Balance


The accounts used here are the test accounts from Hardhat.


```rust
use ethers::prelude::*;
use ethers::utils;

const RPC_URL: &str = "https://cloudflare-eth.com";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let balance = provider.get_balance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", None).await?;
    println!("balance: {} ether", utils::format_ether(balance));
    println!("balance: {balance:?} wei");
    Ok(())
}
```


The result type returned by `get_balance` is `U256`, and the default unit is wei. If we need to convert the format, we can use the provided utility library `utils`.


### Account Token Balance


Tokens in Ethereum generally refer to ERC20, so here we also show the code for getting the ERC20 token balance. Getting the balance of an ERC20 token is actually calling the `balanceOf` method of its corresponding contract address.


```rust
use ethers::prelude::*;
use ethers::types::Address;
use ethers::utils;
use std::sync::Arc;

const RPC_URL: &str = "https://cloudflare-eth.com";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let balance = provider.get_balance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", None).await?;
    println!("balance: {} ether", utils::format_ether(balance));
    println!("balance: {balance:?} wei");

    // 通过宏直接生成一个IERC20的对象
    abigen!(
        IERC20,
        r#"[
            function totalSupply() external view returns (uint256)
            function balanceOf(address account) external view returns (uint256)
            function transfer(address recipient, uint256 amount) external returns (bool)
            function allowance(address owner, address spender) external view returns (uint256)
            function approve(address spender, uint256 amount) external returns (bool)
            function transferFrom( address sender, address recipient, uint256 amount) external returns (bool)
            event Transfer(address indexed from, address indexed to, uint256 value)
            event Approval(address indexed owner, address indexed spender, uint256 value)
        ]"#,
    );

    const ERC20_CONTRACT_ADDRESS: &str = "0xEB1774bc66930a417A76Df89885CeE7c1A29f405";

    let erc20_address: Address = ERC20_CONTRACT_ADDRESS.parse()?;
    let erc20_account_address: Address = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199".parse()?;
    let client = Arc::new(provider);
    let contract = IERC20::new(erc20_address, client);

    if let Ok(total_supply) = contract.total_supply().call().await {
        println!("ERC20 total supply is {total_supply:?}");
    }

    if let Ok(balance) = contract.balance_of(erc20_account_address).call().await {
        println!("ERC20 total supply is {balance:?}");
    }

    Ok(())
}
```


Rust has many advantages, one of the most prominent being macro programming. Rust's macros are much more powerful than metaprogramming in other languages. It can complete the compilation of macros at compile-time and generate corresponding code (although not visible), which allows for quick code hints and type safety. For example, the `abigen` macro used here generates an object called `IERC20`, which can create instances through the `new` method, and this instance has methods corresponding to all the interfaces of ERC20.


As for other tokens like ERC721, the method is similar.


### Generating New Wallets


`ethers-rs` supports multiple wallets, such as Private key, Ledger, Trezor, YubiHSM2, AWS KMS, etc., but this article mainly focuses on the first type.


```rust
// use the eyre crate for easy idiomatic error handling
use eyre::Result;
// use the ethers_core rand for rng
use ethers::core::rand::thread_rng;
// use the ethers_signers crate to manage LocalWallet and Signer
use ethers::signers::{LocalWallet, Signer, Wallet};
use ethers::types::H256;

// Use the `tokio::main` macro for using async on the main function
#[tokio::main]
async fn main() -> Result<()> {
    let prikey = [254, 159, 17, 110, 10, 156, 237, 11, 156, 168, 117, 202, 17, 248, 112, 124, 221, 128, 127, 28, 175, 158, 45, 115, 141, 192, 28, 164, 208, 166, 104, 250];

    println!("钱包的私有地址: {:?}", H256::from_slice(&prikey).to_string());
    // 创建随机钱包
    let wallet = LocalWallet::new(&mut thread_rng());
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    // 从指定字节数组中创建
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    let prikey = hex::decode("0xfe9f116e0a9ced0b9ca875ca11f8707cdd807f1caf9e2d738dc01ca4d0a668fa").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    Ok(())
}
```


At its core, a blockchain wallet is just a 256-bit, 32-byte number, so possessing this number means having control over your wallet. However, even when stored in hexadecimal, this long string of 0s and 1s in binary has 64 characters, and there is no correlation between these characters, which is very unfriendly for human memory. Therefore, mnemonic phrases emerged, which can be mapped to your wallet (private key). Although this is an improvement, it is still not user-friendly, at least not in line with years of usage habits, leading to the emergence of various wallets.


These wallets can be hardware or software-based. They encrypt your private key with a password. When you need to use your private key, you only need to use a password you set to recover the private key from the wallet, which is much simpler than remembering mnemonic phrases or the original private key.


### Keystore


Similar to wallets, ethers-rs does not provide a similar feature, but wallets can be used as a substitute.


### Address Verification


Address verification can be divided into two parts: whether the account address is valid and what type the account address belongs to.


### Verifying Account Addresses


One pain point of using Rust is that the standard library is relatively lean, and many basic libraries found in other languages require third-party libraries in Rust, such as the regular expression library. Fortunately, the user experience of the package manager Cargo is good enough to alleviate this situation.


The dependency for regular expressions is as follows:


```rust
regex = "1.10.2”
```


The code for verification is as follows:


```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let re = regex::Regex::new(r"^0x[0-9a-fA-F]{40}$").expect("编译正则表达式失败.");

    // 结果为true
    println!("结果为{}\n", re.is_match("0x323b5d4c32345ced77393b3530b1eed0f346429d"));
    // 结果为false
    println!("结果为{}\n", re.is_match("0xZYXb5d4c32345ced77393b3530b1eed0f346429d"));
    println!("结果为{}\n", re.is_match("youerning.top"));
    Ok(())
}
```


Ethereum's account address is not quite the same as Bitcoin, Bitcoin has certain verification rules, and Ethereum does not, as the above code does, so that this string as long as it is a legal 256-bit hexadecimal representation of the string is a legal account address.


### Verify whether the address is a contract address or a general account address


There are two types of accounts in Ethereum, contract accounts and ordinary accounts (also known as external accounts), and the way to determine whether the account stores code is simple, because the contract saves the compiled code of the contract on its account object when it is created.


```rust
use ethers::prelude::*;

const RPC_URL: &str = "https://cloudflare-eth.com";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    // 地址也能传ens
    let code = provider.get_code("0xEB1774bc66930a417A76Df89885CeE7c1A29f405", None).await.expect("查询失败");
    if code.len() > 1 {
        println!("该地址是一个合约");
    } else {
        println!("该地址不是一个合约");
    }

    Ok(())
}
```


### Summary


This section mainly focuses on account creation and querying. Through ethers-rs, we can read multiple wallet types and create local wallets ourselves. With a wallet, we can sign transactions and messages, allowing other verifiers to confirm the legitimacy of the message by verifying the signature and corresponding account address.


In ethers-rs, a wallet is primarily a wrapper around a signer object. The wallet binds this signer object with the blockchain ID (binding the message with the chain ID can avoid double-spending).


Reference Links

- [https://goethereumbook.org/zh/[1]](https://goethereumbook.org/zh/%5B1%5D)
- [https://goethereumbook.org/en/[3]](https://goethereumbook.org/en/%5B3%5D)
- [https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools[4]](https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools%5B4%5D)
- [https://gakonst.com/ethers-rs](https://gakonst.com/ethers-rs)
- [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)
