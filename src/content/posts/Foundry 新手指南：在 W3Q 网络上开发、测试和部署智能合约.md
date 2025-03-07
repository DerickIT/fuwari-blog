---
category: Web3
tags:
  - Solidity
  - Foundry
  - Smart Contract
  - Web3
status: 已发布
catalog: []
slug: foundry-beginners-guide-developing-testing-and-deploying-smart-contracts-on-w3q-network
title: Foundry 新手指南：在 W3Q 网络上开发、测试和部署智能合约
summary: '这篇文章将介绍如何使用Foundry开发、测试、部署和与智能合约交互,同时介绍W3Q网络,并提供一些常见问题的解决方案。'
urlname: 15ce44f7-a2fa-4b33-a9ce-dd49c87166ef
date: '2024-07-24 18:07:00'
updated: '2024-07-24 18:13:00'
image: 'https://images.unsplash.com/photo-1676911810199-626fac507ccf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2023-07-23T08:00:00.000Z
---

## 1. 引言


随着区块链技术的不断发展,智能合约开发已成为Web3世界的重要组成部分。本文将指导您如何使用Foundry工具套件在W3Q网络上开发、测试、部署和与智能合约交互。无论您是刚接触智能合约开发的新手,还是寻求提升效率的经验开发者,本文都将为您提供有价值的见解和实用技巧。


## 2. W3Q网络简介


W3Q是一个专注于简化Web3开发的区块链平台。它提供了以下特性:

- 兼容EVM的智能合约执行环境
- 低gas费用
- 快速交易确认
- 开发者友好的工具和文档

W3Q的Galileo测试网络信息:

- 网络ID: 3334
- RPC URL: [https://galileo.web3q.io:8545](https://galileo.web3q.io:8545/)
- 区块浏览器: [https://explorer.galileo.web3q.io/](https://explorer.galileo.web3q.io/)
- 原生代币: W3Q

## 3. Foundry简介


Foundry是一套用Rust编写的快速、可移植和模块化的以太坊开发工具。它主要包含以下组件:

- Forge: 用于测试、构建和部署智能合约
- Cast: 用于与智能合约交互的命令行工具
- Anvil: 本地以太坊节点,用于测试和开发

## 4. 安装Foundry


首先,让我们安装Foundry:


```shell
curl -L <https://foundry.paradigm.xyz> | bash foundryup
```


## 5. 创建项目


创建一个新的Foundry项目:


```shell
forge init my_project
cd my_project
```


## 6. 编写智能合约


让我们创建一个简单的公共留言板合约。在`src`目录下创建`PublicMessageBoard.sol`:


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PublicMessageBoard {
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event NewMessage(address indexed sender, string content, uint256 timestamp);

    function postMessage(string memory _content) public {
        require(bytes(_content).length > 0, "Message cannot be empty");
        require(bytes(_content).length <= 280, "Message too long");

        messages.push(Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        }));

        emit NewMessage(msg.sender, _content, block.timestamp);
    }

    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }

    function getMessageCount() public view returns (uint256) {
        return messages.length;
    }

    function getMessage(uint256 index) public view returns (address, string memory, uint256) {
        require(index < messages.length, "Message index out of bounds");
        Message memory message = messages[index];
        return (message.sender, message.content, message.timestamp);
    }
}
```


## 7. 测试合约


在`test`目录下创建`PublicMessageBoard.t.sol`:


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/PublicMessageBoard.sol";

contract PublicMessageBoardTest is Test {
    PublicMessageBoard public board;

    function setUp() public {
        board = new PublicMessageBoard();
    }

    function testPostMessage() public {
        board.postMessage("Hello, World!");
        assertEq(board.getMessageCount(), 1);

        (address sender, string memory content, ) = board.getMessage(0);
        assertEq(sender, address(this));
        assertEq(content, "Hello, World!");
    }

    function testEmptyMessage() public {
        vm.expectRevert("Message cannot be empty");
        board.postMessage("");
    }

    function testLongMessage() public {
        string memory longMessage = new string(281);
        vm.expectRevert("Message too long");
        board.postMessage(longMessage);
    }
}
```


运行测试:


```shell
forge test
```


## 8. 部署合约


创建一个部署脚本`script/DeployMessageBoard.s.sol`:


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/PublicMessageBoard.sol";

contract DeployMessageBoard is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        PublicMessageBoard messageBoard = new PublicMessageBoard();
        console.log("PublicMessageBoard deployed at:", address(messageBoard));

        vm.stopBroadcast();
    }
}
```


创建`.env`文件并添加以下内容:


```plain text
PRIVATE_KEY=your_private_key_here
W3Q_RPC_URL=https://galileo.web3q.io:8545
```


修改`foundry.toml`:


```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]

[rpc_endpoints]
w3q_galileo = "${W3Q_RPC_URL}"
```


部署合约:


```shell
source .env
forge script script/DeployMessageBoard.s.sol:DeployMessageBoard --rpc-url $W3Q_RPC_URL --broadcast --legacy --chain-id 3334 -vvvv
```


## 9. 验证合约


目前,W3Q网络可能不支持自动合约验证。您可能需要手动在区块浏览器上验证合约。


## 10. 与合约交互


使用Cast与合约交互:


```shell
# 发布消息
cast send $CONTRACT_ADDRESS "postMessage(string)" "Hello, W3Q!" --rpc-url $W3Q_RPC_URL --private-key $PRIVATE_KEY --gas-price 10000000000 --chain-id 3334

# 获取消息数量
cast call $CONTRACT_ADDRESS "getMessageCount()" --rpc-url $W3Q_RPC_URL

# 获取特定消息
cast call $CONTRACT_ADDRESS "getMessage(uint256)" 0 --rpc-url $W3Q_RPC_URL
```


## 11. 常见问题和解决方案

1. Gas价格问题:
如果交易卡住,可能是因为gas价格设置过低。使用以下命令查询当前gas价格:

    ```shell
    cast gas-price --rpc-url $W3Q_RPC_URL
    ```


    然后相应调整gas价格。

2. Nonce问题:
确保使用正确的nonce。查询当前nonce:

    ```shell
    cast nonce $WALLET_ADDRESS --rpc-url $W3Q_RPC_URL
    ```

3. 余额不足:
确保账户有足够的W3Q代币支付gas费用:

    ```shell
    cast balance $WALLET_ADDRESS --rpc-url $W3Q_RPC_URL
    ```

4. 交易卡住:
如果交易长时间未被确认,可以尝试用相同的nonce发送一个新交易,但提高gas价格:

    ```shell
    cast send $CONTRACT_ADDRESS "postMessage(string)" "New message" --rpc-url $W3Q_RPC_URL --private-key $PRIVATE_KEY --gas-price 15000000000 --nonce <stuck_transaction_nonce> --chain-id 3334
    ```

5. RPC节点响应慢:
排查上面几个步骤，不行就加gas
6. 合约调用失败:
使用`cast estimate`估算所需的gas:

    ```shell
    cast estimate $CONTRACT_ADDRESS "postMessage(string)" "Hello, W3Q!" --rpc-url $W3Q_RPC_URL --from $WALLET_ADDRESS
    ```


    然后在发送交易时使用`--gas-limit`参数指定足够的gas。


## 12. 结论


使用Foundry在W3Q网络上开发和部署智能合约是一个强大而灵活的过程。

