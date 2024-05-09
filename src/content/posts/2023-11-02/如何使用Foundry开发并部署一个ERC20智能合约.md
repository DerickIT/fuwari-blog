---
category: 技术分享
tags:
  - Web3
  - Smart Contract
  - Foundry
  - Solidity
status: 已发布
day: '2023-11-02'
catalog: []
slug: how-to-develop-and-deploy-an-erc20-smart-contract-using-foundry
title: 如何使用Foundry开发并部署一个ERC20智能合约
urlname: 68c138d5-7b52-4005-8698-e008ef444758
date: '2023-11-26 17:45:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_1.jpg'
published: 2023-11-02T08:00:00.000Z
---

### 引言

- ERC20 是一种基于以太坊的标准代币，它遵循了一组规则，定义了代币的名称，符号，小数位数，总供应量，余额，转账，授权等功能。ERC20 代币可以用来表示各种价值，例如货币，积分，股份，证券等。
- **Foundry** 是一种基于 `Rust` 的智能合约开发工具链，它可以让您用 `Solidity` 语言编写，编译，测试，部署，和交互以太坊上的智能合约。Foundry 提供了三个主要的工具：**forge**，**cast**，和 **anvil**，分别用于合约的编译，交互，和本地网络的构建。
- 下面用一个简单的案例讲解使用 Foundry 开发并部署 ERC20 代币，注意遵循以下步骤：

### 安装Foundry

1. 执行下面命令安装 Foundry。不要直接使用Windows开发，Windows用户必须使用WSL2，参考 Foundry 的[官方文档](https://book.getfoundry.sh/getting-started/installation)来安装 。

```shell
// 下载安装Foundry
curl -L https://foundry.paradigm.xyz | bash
// 更新Foundry
foundryup
```

1. 使用Foundry创建一个新的项目

使用 `forge init` 命令来创建一个新的项目，指定项目的名称和模板。


例如，您可以运行以下命令来创建一个名为 `MyERC20` 的项目，使用一个包含了 ERC20 合约的模板：


```shell
forge init --template https://github.com/FrankieIsLost/forge-template MyERC20
```


 这样就可以在 `MyERC20` 文件夹中找到一个名为 `MyERC20.sol` 的合约文件，以及一个名为 `MyERC20.t.sol` 的测试文件。


 3.  编写 ERC20 合约


可以根据需求，修改 `MyERC20.sol` 文件中的合约代码，设置代币的名称，符号，小数位数，总供应量等参数。您也可以添加一些自定义的逻辑或事件，只要保证您的合约遵循了 ERC20 的标准接口。可以参考以下代码来编写一个简单的 ERC20 合约：


```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {ERC20} from "openzeppelin-contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    // 设置代币的名称，符号，和小数位数
    constructor() ERC20("My Token", "MYT") {
        // 设置代币的总供应量为 10000 个，并分配给部署者
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    // 添加一个自定义的事件，用于记录代币的销毁
    event Burn(address indexed from, uint256 amount);

    // 添加一个自定义的函数，用于销毁代币
    function burn(uint256 amount) public {
        // 调用内部的 _burn 函数，从发送者的地址中销毁指定数量的代币
        _burn(msg.sender, amount);
        // 触发 Burn 事件
        emit Burn(msg.sender, amount);
    }
}
```

1. 测试 ERC20 合约

您可以使用 `forge test` 命令来运行 `MyERC20.t.sol` 文件中的测试代码，检查您的合约是否符合预期的功能和性能。您可以使用 Solidity 语言来编写测试代码，使用 `DSTest` 库来提供断言和异常处理，使用 `console` 库来打印日志，使用 `vm` 库来操作 EVM 的状态。您也可以使用 `forge fuzz` 命令来进行模糊测试，检查您的合约是否存在潜在的漏洞或错误。


例如，您可以参考以下代码来编写一个简单的测试用例，检查代币的转账和销毁功能：


```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {console} from "forge-std/console.sol";
import {stdStorage, StdStorage, Test} from "forge-std/Test.sol";

import {MyERC20} from "../MyERC20.sol";

contract MyERC20Test is MyERC20, Test {
    // 设置两个测试账户
    address alice = address(0x123);
    address bob = address(0x456);

    // 在每个测试用例之前，给测试账户分配一些代币
    function setUp() public override {
        _mint(alice, 1000 * 10 ** decimals());
        _mint(bob, 500 * 10 ** decimals());
    }

    // 测试代币的转账功能
    function testTransfer() public {
        // 打印日志
        console.log("Testing transfer");
        // 记录转账前的余额
        uint256 aliceBalanceBefore = balanceOf(alice);
        uint256 bobBalanceBefore = balanceOf(bob);
        // 以 Alice 的身份，向 Bob 转账 100 个代币
        vm.prank(alice);
        transfer(bob, 100 * 10 ** decimals());
        // 记录转账后的余额
        uint256 aliceBalanceAfter = balanceOf(alice);
        uint256 bobBalanceAfter = balanceOf(bob);
        // 检查余额是否正确变化
        assertEq(aliceBalanceAfter, aliceBalanceBefore - 100 * 10 ** decimals(), "Alice balance should decrease");
        assertEq(bobBalanceAfter, bobBalanceBefore + 100 * 10 ** decimals(), "Bob balance should increase");
    }

    // 测试代币的销毁功能
    function testBurn() public {
        // 打印日志
        console.log("Testing burn");
        // 记录销毁前的余额和总供应量
        uint256 aliceBalanceBefore = balanceOf(alice);
        uint256 totalSupplyBefore = totalSupply();
        // 以 Alice 的身份，销毁 50 个代币
        vm.prank(alice);
        burn(50 * 10 ** decimals());
        // 记录销毁后的余额和总供应量
        uint256 aliceBalanceAfter = balanceOf(alice);
        uint256 totalSupplyAfter = totalSupply();
        // 检查余额和总供应量是否正确变化
        assertEq(aliceBalanceAfter, aliceBalanceBefore - 50 * 10 ** decimals(), "Alice balance should decrease");
        assertEq(totalSupplyAfter, totalSupplyBefore - 50 * 10 ** decimals(), "Total supply should decrease");
    }
}

```

1. 部署 ERC20 合约

您可以使用 `forge create` 命令来将您的合约部署到指定的网络，例如主网或测试网。您需要配置部署网络的 RPC URL，以及部署合约的账户的私钥。您也可以使用 `cast` 工具来与部署后的合约进行交互，调用它的函数或查询它的状态。


运行以下命令来将您的合约部署到 Goerli 测试网：


```shell
forge create --rpc-url <your_rpc_url> --private-key <your_private_key> src/MyERC20.sol:MyERC20
```


这样就可以得到合约的部署者地址，合约的地址，和交易的哈希。您可以使用以下命令来与合约进行交互：


```shell
cast call --rpc-url <your_rpc_url> --private-key <your_private_key> <contract_address> balanceOf <account_address>
cast send --rpc-url <your_rpc_url> --private-key <your_private_key> <contract_address> transfer <recipient_address> <amount>
cast send --rpc-url <your_rpc_url> --private-key <your_private_key> <contract_address> burn <amount>
```

- 部署在本地环境

在合约正式部署前通常需要在本地进行充分的测试，交互验证，需要启动`anvil` 服务，默认RPC-URL地址为`127.0.0.1:8545` ,开启后可以将合约部署在本地进行测试验证。


### 备注：

- RPC_URL可以去[infura](https://www.infura.io/zh)或者[alchemy](https://www.alchemy.com/) 申请
- **private-key**是钱包地址的私钥
- [etherscan.io](http://etherscan.io/) 申请key，方便校验合约
- [[测试网] sepolia](https://sepolia.dev/)  领取测试水龙头(代币)
- [[测试网] goerli](https://goerli.net/)   领取测试水龙头(代币)
- 血泪教训：Windows用户一定直接开启WSL2，通过**VS Code** 进行Remote开发，不然你将浪费大量时间踩坑。
- [WSL2环境配置 | Think Blog (ithuo.net)](https://blog.ithuo.net/post/2023-11-01%2FWSL2%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)
