---
category: Web3
tags:
  - Rust
  - Golang
  - Web3
  - ethers-rs
status: 已发布
catalog: []
slug: ethereum-development-with-rust-4
title: Ethereum Development With Rust 4
urlname: d01579f8-b64c-4169-9222-6e9df192b491
date: '2024-05-12 11:53:00'
updated: '2024-05-14 23:04:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_13.jpg'
published: 2023-12-07T08:00:00.000Z
---

:::note


This series of articles mainly uses Rust's ethers-rs to reproduce the content of the book "Ethereum Development with Go", so the title of this series is called "Ethereum Development with Rust". Since the original book is already well-written, this series focuses more on replicating the code and will not explain too much of the related basic knowledge.


:::


This time, we will replicate the fourth chapter "Smart Contracts" from "Ethereum Development with Go".


The "Smart Contracts" chapter mainly includes the following content:

1. Compiling and ABI of Smart Contracts
2. Deploying Smart Contracts
3. Loading Smart Contracts
4. Querying Smart Contracts
5. Writing to Smart Contracts
6. Reading the Bytecode of Smart Contracts
7. Querying ERC20 Token Smart Contracts

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


### Compiling Smart Contracts and ABI


ethers-rs also requires a compiler to compile Solidity code. It looks for the `solc` executable file in the executable path (on Windows, it's `solc.exe`). If you want to specify the path to the `solc` executable file, you can set the environment variable `SOLC_PATH` to specify it.


```rust
use ethers::{prelude::Abigen, solc::Solc};
use eyre::Result;

fn main() -> Result<()> {
    let mut args = std::env::args();
    args.next().unwrap(); // skip program name

    let contract_name = "SimpleStorage";
    let contract: String = args
        .next()
        .unwrap_or_else(|| "simple_contract.sol".to_owned());

    println!("生成合约{contract}的绑定对象\n");

    // ethers-rs的一些默认设定不太好改，比如evm的版本设置，如果需要设置的话，会麻烦很多
    let abi = if contract.ends_with(".sol") {
        let contracts = Solc::default().compile_source(&contract)?;
        let abi = contracts.get(&contract, &contract_name).unwrap().abi.unwrap();
        serde_json::to_string(abi).unwrap()
    } else {
        contract
    };


    let bindings = Abigen::new(&contract_name, abi)?.generate()?;
    // 如果第二个参数指定输出文件就输出到文件中.
    if let Some(output_path) = args.next() {
        bindings.write_to_file(output_path)?;
    } else {
        bindings.write(&mut std::io::stdout())?;
    }

    Ok(())
}
```


The output is a generated Rust version of the object, which can be used to interact with an Ethereum node. The output is as follows:


```rust
pub use simple_storage::*;
/// This module was auto-generated with ethers-rs Abigen.
/// More information at: <https://github.com/gakonst/ethers-rs>
#[allow(
    clippy::enum_variant_names,
    clippy::too_many_arguments,
    clippy::upper_case_acronyms,
    clippy::type_complexity,
    dead_code,
    non_camel_case_types,
)]
pub mod simple_storage {
// 省略其他代码
}
```


This file can be written to an `.rs` file and then referenced in other code. However, this approach may not feel very user-friendly. Compared to this, I think generating an ABI file might be more suitable.


You can use the following command to generate the corresponding ABI file:


```shell
solc --abi SimpleStorage.sol -o ./

```


This command uses the `solc` compiler to generate the ABI file for the `SimpleStorage.sol` contract and saves it in the current directory.


The generated ABI file will have a name like `SimpleStorage.abi` and will contain the JSON representation of the contract's ABI.


Here's an example of how the generated ABI file might look:


```json
[
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

```


The ABI file contains an array of objects, where each object represents a function or event of the contract. It includes information such as the function name, input parameters, output parameters, and the function's stateMutability.


Having the ABI file separately allows you to easily load it into your Rust code using a JSON parsing library like `serde_json`. You can then use the parsed ABI to create an instance of the contract and interact with it using the ethers-rs library.


Using an ABI file provides more flexibility and modularity compared to directly embedding the generated Rust code in your project. It allows you to update the contract's ABI without modifying your Rust code, making it easier to manage and maintain your project.


### Deploying Contracts


Similar to compiling contracts, deploying contracts also requires the corresponding Solidity compiler. In addition, there are requirements for the Ethereum node as well. The default EVM bytecode version generated by ethers-rs 2.0.10 is the Shanghai EVM version, so older Ethereum nodes may not work. The Geth node version I tested is v1.13.1.


```rust
use ethers::{
    contract::{abigen, ContractFactory},
    middleware::SignerMiddleware,
    providers::{Http, Provider, Middleware},
    signers::{Wallet, Signer},
    solc::Solc,
};
use eyre::Result;
use std::{convert::TryFrom, path::Path, sync::Arc};

// 生成类型安全的合约对象
abigen!(
    SimpleContract,
    "simple_contract.json",
    event_derives(serde::Deserialize, serde::Serialize)
);

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<()> {
    let prikey = hex::decode("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    // 指定合约路径并编译
    let source = Path::new(&env!("CARGO_MANIFEST_DIR")).join("simple_contract.sol");
    let compiled = Solc::default().compile_source(source).expect("Could not compile contracts");
    // 获得编译之后的对象，因为solidity里面可以定义接口继承，所以需要使用find方法指定对应的合约名
    let (abi, bytecode, _runtime_bytecode) =
        compiled.find("SimpleStorage").expect("could not find contract").into_parts_or_default();


    // 3. 连接网络
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    // 4. 因为部署合约需要写入数据到链上，所以需要使用钱包对象
    let chain_id = provider.get_chainid().await?.as_u64();
    let client = SignerMiddleware::new(provider, wallet.with_chain_id(chain_id));
    let client = Arc::new(client);

    // 5. 创建一个工厂对象，用于后续部署实例
    let factory = ContractFactory::new(abi, bytecode, client.clone());

    // 6. 部署的时候需要必要的初始值
    let contract = factory.deploy("initial value".to_string())?.send().await?;

    // 7. 获取合约部署后的地址
    let addr = contract.address();
    println!("contract is deployed at: {addr:?}");

    // 8. 创建与合约交互的合约对象
    let contract = SimpleContract::new(addr, client.clone());

    // 9.
    // 第一个await是等待交易返回PendingTransaction，第二个await是等待此交易被提交
    let _receipt = contract.set_value("hi".to_owned()).send().await?.await?;

    // 10. 获取所有事件
    let logs = contract.value_changed_filter().query().await?;

    // 11. 调用get_value方法
    let value = contract.get_value().call().await?;
    println!("Value: {value}. Logs: {}", serde_json::to_string(&logs)?);

    Ok(())
}
```


### Loading/Querying Smart Contracts


If we need to interact with an Ethereum node, we require the corresponding ABI. Therefore, we can use the previously compiled ABI file `SimpleStorage.abi`.


```rust
use ethers::prelude::*;
use ethers::types::Address;
use std::sync::Arc;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    abigen!(
        SimpleContract,
        "SimpleStorage.abi",
    );

    const CONTRACT_ADDRESS: &str = "0x73511669fd4de447fed18bb79bafeac93ab7f31f";

    let contract_address: Address = CONTRACT_ADDRESS.parse()?;
    let client = Arc::new(provider);
    let contract = SimpleContract::new(contract_address, client);

    println!("合约设置的值: {:?}", contract.get_value().call().await?);

    Ok(())
}
```


### Write smart contract


The difference between writing and querying is that the former costs nothing and the latter costs money.


```rust
use ethers::prelude::*;
use ethers::types::Address;
use std::sync::Arc;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let prikey = hex::decode("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e").unwrap();
    let wallet = Wallet::from_bytes(&prikey).unwrap();
    // println!("钱包私钥: {:?}", wallet.signer().to_bytes());
    println!("钱包公钥: {:?}", wallet.address());

    let provider = Provider::<Http>::try_from(RPC_URL)?;

    abigen!(
        SimpleContract,
        "SimpleStorage.abi",
    );

    const CONTRACT_ADDRESS: &str = "0x73511669fd4de447fed18bb79bafeac93ab7f31f";

    let contract_address: Address = CONTRACT_ADDRESS.parse()?;
    let chain_id = provider.get_chainid().await?.as_u64();
    // contract对象实例化的时候需要一个ARC对象
    let signer =
        Arc::new(SignerMiddleware::new(provider, wallet.with_chain_id(chain_id)));

    let contract = SimpleContract::new(contract_address, signer);

    let _receipt = contract.set_value("new value".to_owned()).send().await?.await?;

    println!("合约新设置的值: {:?}", contract.get_value().call().await?);

    Ok(())
}
```


### Read the bytecode of the smart contract


Bytecode is the compiled data of code that requires specialized tools to debug visually.


```rust
use ethers::prelude::*;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;
    let code = provider.get_code("0x73511669fd4de447fed18bb79bafeac93ab7f31f", None).await?;
    println!("合约的合约代码: {:?}", code);
    Ok(())
}
```


### Query ERC20 token smart contract


```rust
use ethers::prelude::*;
use ethers::types::Address;
use ethers::utils;
use std::sync::Arc;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let balance = provider.get_balance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", None).await?;
    println!("balance: {} ether", utils::format_ether(balance));
    println!("balance: {balance:?} wei");

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


If you need to read variables like symbol, decimals, etc., you need to use an ABI file.


```rust
use ethers::prelude::*;
use ethers::types::Address;
use ethers::utils;
use std::sync::Arc;

const RPC_URL: &str = "http://127.0.0.1:8545";

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let provider = Provider::<Http>::try_from(RPC_URL)?;

    let balance = provider.get_balance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", None).await?;
    println!("balance: {} ether", utils::format_ether(balance));
    println!("balance: {balance:?} wei");

    abigen!(
        IERC20,
        "IERC20.json",
    );

    const ERC20_CONTRACT_ADDRESS: &str = "0x92B4FbB1Be8B98b00D643E485075186c3c61bae1";

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

    if let Ok(symbol) = contract.symbol().call().await {
        println!("ERC20 symbol is {symbol:?}");
    }

    if let Ok(decimals) = contract.decimals().call().await {
        println!("ERC20 decimals is {decimals:?}");
    }

    Ok(())
}
```


You can download the `IERC20.json` file from [https://github.com/gakonst/ethers-rs/blob/master/examples/contracts/examples/abi/IERC20.json](https://github.com/gakonst/ethers-rs/blob/master/examples/contracts/examples/abi/IERC20.json).


### Summary


When developing off-chain, the most commonly written code is probably the code that interacts with contracts. The code for interacting with contracts is essentially similar, with the only difference being the methods and events exposed by different contracts. Therefore, it is necessary to know the corresponding contract's ABI for interaction.


Reference Links

- [https://goethereumbook.org/zh/](https://goethereumbook.org/zh/)
- [https://goethereumbook.org/en/](https://goethereumbook.org/en/)
- [https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools](https://ethereum.org/en/developers/docs/programming-languages/rust/#rust-projects-and-tools)
- [https://gakonst.com/ethers-rs](https://gakonst.com/ethers-rs)
- [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)
