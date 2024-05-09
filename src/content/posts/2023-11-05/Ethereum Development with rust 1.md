---
category: Web3
tags:
  - Rust
  - Golang
  - Web3
  - ethers-rs
status: 已发布
day: '2023-11-05'
catalog: []
slug: ethereum-development-with-rust-1
title: Ethereum Development with rust 1
urlname: 39ce5e1e-6413-440c-9721-6ff863b945cf
date: '2024-04-05 10:42:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/solid_red.png'
published: 2023-11-05T08:00:00.000Z
---

The intention is that if you are already somewhat familiar with Ethereum and Rust, but are unsure about how to combine the two, then this book is a good starting point - adapted from "Ethereum Development with Go"


Ethereum development can generally be divided into two categories:

1. On-chain development, which is developing smart contracts, typically using the Solidity programming language.
1. Off-chain development, which involves interacting with the blockchain, such as reading block data, sending transactions, and interacting with contracts.
There is actually a third type, which is sidechain or layer 2 development.

This series of articles will mainly focus on the second type.


The dependencies used in this article are as follows:


```toml
ethers = {version="2.0", features=["rusttls", "ws"]}
tokio = {version="1", features=["full"]}
eyre = "0.6"
```


### Quick Start


The concepts of ethers-rs and go-ethereum are somewhat different; the former uses the term "provider," while the latter uses "client." The concept of a provider is likely inherited from ethers.js, so if you have experience with ethers.js, you should be quite familiar with many of the concepts in ethers-rs.


```rust
use ethers::prelude::*;

const RPC_URL: &str = "https://cloudflare-eth.com";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;
    let block_number = provider.get_block_number().await?;
    println!("当前节点区块高度: {block_number}");
    Ok(())
}
```


### Client/Provider


To interact with the Ethereum network, it's essential to first connect to a node within the network. We have many options for nodes, broadly categorized into public (external) and private. Below are some public free interfaces (all require registration), while private ones naturally require setting up on your own, which won't be elaborated here.

- Etherscan
- INFURA
- Alchemy
- Pocket Gateway
- Ankr

For specific advantages and disadvantages and detailed comparisons, refer to: [https://docs.ethers.org/v5/api-keys/](https://docs.ethers.org/v5/api-keys/)


If the data you're querying is relatively simple, such as basic blockchain data (block hash, transaction list, event list), then you can directly use free public interfaces like:

- [https://cloudflare-eth.com](https://cloudflare-eth.com/)
- wss://cloudflare-eth.com

The main difference above lies in the application protocol used. If we need to perform listening operations, we need to use the wss (Websocket) protocol.


Once we've decided on the node to connect to, we can proceed to connect using code.


```rust
use ethers::prelude::*;

const HTTP_RPC_URL: &str = "https://cloudflare-eth.com";
const WEBSOCKET_RPC_URL: &str = "wss://cloudflare-eth.com";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(HTTP_RPC_URL)?;
    let block_number = provider.get_block_number().await?;
    println!("current block number: {block_number}");
    let provider = Provider::<Ws>::connect(WEBSOCKET_RPC_URL).await?;
    let block_number = provider.get_block_number().await?;
    println!("current block number: {block_number}");
    Ok(())
}
```


For local connections, a more efficient connection method is IPC (Inter-Process Communication) connection.


```rust
use ethers::providers::Provider;

const IPC_RPC_URL: &str = "~/.ethereum/geth.ipc";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::connect_ipc(IPC_RPC_URL)?;
    let block_number = provider.get_block_number().await?;
    println!("current block number: {block_number}");
    Ok(())
}
```


At this point, we have a client that can access the Ethereum network, but the network is not always reliable, such as when there are network outages or reconnections. Therefore, we have to deal with these trivial issues, which are generally annoying to handle. Fortunately, ethers-rs has already done this tedious work for us. It provides many additional wrappers, such as Quorum, Retry, and RW, whose functions are as follows:

- Quorum: When created, it sets multiple request backends, and only returns a result when more than 50% of the outcomes are the same. For example, if three nodes are set during creation and they return, then the Quorum type client will return 1, even if the result 3 is returned first.
- Retry: This should be easy to understand; it's simply retrying. We can set the maximum number of retries and the initial value for fallback.
- RW: This is read-write separation, one for reading and one for writing, which can also improve performance to some extent.

For specific example code, refer to the official documentation:

- [https://gakonst.com/ethers-rs/providers/quorum.html](https://gakonst.com/ethers-rs/providers/quorum.html)
- [https://gakonst.com/ethers-rs/providers/retry.html](https://gakonst.com/ethers-rs/providers/retry.html)
- [https://gakonst.com/ethers-rs/providers/rw.html](https://gakonst.com/ethers-rs/providers/rw.html)

In addition, ethers-rs also provides Mock for testing, as well as custom extensions.


### Summary:


This article simply lists the various ways to build clients with ethers-rs, corresponding to the first chapter of "Ethereum Development with Go". Unlike go-ethereum, ethers-rs provides many additional wrapper types, so you don't have to deal with retries, data consistency (to a certain extent of data consistency, which requires multiple nodes chosen for Quorum), and some other common issues. Through these wrapper types, we can write safer and more efficient code.


Reference Links:

- [https://goethereumbook.org/zh/](https://goethereumbook.org/zh/)
- [https://goethereumbook.org/en/](https://goethereumbook.org/en/)
- [https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools](https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools)
- [https://gakonst.com/ethers-rs](https://gakonst.com/ethers-rs)
- [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)
