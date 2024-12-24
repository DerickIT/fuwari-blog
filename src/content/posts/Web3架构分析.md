---
category: TechKnowledgeShare
tags:
  - Web3
  - ArchitectureDesign
status: 已发布
catalog: []
slug: web3-architecture-analysis
title: Web3架构分析
summary: The Architecture of a Web 3.0 application --- Web 3.0应用程序的架构 (preethikasireddy.com)
urlname: e9c1a394-9631-4db7-8b9b-f4eb92f30d89
date: '2023-11-17 21:06:00'
updated: '2024-07-29 00:16:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg'
published: 2022-11-16T08:00:00.000Z
---
- Web 3.0应用程序（或“DApps”）的架构与Web 2.0应用程序完全不同。

以Medium为例，它是一个简单的博客网站，允许用户发布自己的内容并与其他人的内容进行交互。


作为一个web 2.0应用程序，这听起来可能很简单，但Medium的架构中有很多东西使这一切成为可能：

1. 首先，必须有一个地方存储必要的数据，如用户，帖子，标签，评论，喜欢等。这需要一个不断更新的数据库。
2. 其次，后端代码（用Node.js、Java或Python等语言编写）必须定义Medium的业务逻辑。例如，当一个新用户注册、发布新博客或在其他人的博客上发表评论时，会发生什么？
3. 第三，前端代码（通常用JavaScript、HTML和CSS编写）必须定义Medium的UI逻辑。例如，网站是什么样子的，当用户与页面上的每个元素交互时会发生什么？

把所有这些放在一起，当你在Medium上写一篇博客文章时，你与它的前端交互，它与它的后端对话，它与它的数据库对话。所有这些代码都托管在集中式服务器上，并通过互联网浏览器发送给用户。这是对当今大多数Web 2.0应用程序如何工作的一个很好的技术概括。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/5459412c-cf51-45e2-8fd5-9296496818d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=54bbaba5dfa3afd26ca114fbee88ddc64e207c07b283629c06abf5fc37be8129&X-Amz-SignedHeaders=host&x-id=GetObject)


区块链技术为Web 3.0应用程序开启了一个令人兴奋的新方向。在本文中，我们将重点关注以太坊区块链带来的东西。


### **是什么让Web 3.0与众不同？**


与Medium等Web 2.0应用程序不同，Web 3.0消除了中间人，没有存储应用程序状态的集中式数据库，也没有后端逻辑所在的集中式Web服务器。


相反，您可以利用区块链在由互联网上的匿名节点维护的分散状态机上构建应用程序。


所谓“状态机”，我指的是一台机器，它维护某些给定的程序状态和该机器上允许的未来状态。区块链是用一些起源状态实例化的状态机，并且具有非常严格的规则（即，共识），定义该状态如何转换。


更好的是，没有单一实体控制这个分散的状态机-它由网络中的每个人共同维护。


那么后端服务器呢？在Web 3.0中，你可以编写智能合约来定义应用程序的逻辑，并将它们部署到分散的状态机上，而不是像Medium那样控制后端。这意味着每个想要构建区块链应用程序的人都将他们的代码部署在这个共享状态机上。


前端呢？它几乎保持不变，除了一些例外，我们将在后面介绍。这是新架构的样子


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/c3745d80-a8a4-4fe6-8457-e36d86083eb3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=1523a2ac6e778adfac5927d8e200677a18146412540d4381e4d2eb06acda2db0&X-Amz-SignedHeaders=host&x-id=GetObject)


#### **1) Blockchain**


以太坊区块链经常被吹捧为“世界计算机”。这是因为它是一个全局可访问的、确定性的状态机，由对等节点网络维护。这个状态机上的状态变化由网络中的对等点遵循的共识规则来控制。


所以，换句话说，它实际上被设计成一个状态机，世界上任何人都可以访问和写入。因此，这台机器不属于任何单一实体，而是由网络中的每个人共同拥有。


还有一件事要知道：数据只能写入以太坊区块链-您永远无法更新现有数据。


#### **2) Smart contracts**


智能合约是一个在以太坊区块链上运行的程序，它定义了区块链上发生的状态变化背后的逻辑。智能合约是用高级语言编写的，如Solidity或Vyper。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0529def4-bd79-4d04-9b71-88a6a4916008/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=c6e5526ec4506f1a986f71c779f915e4421e2631adc112e18e287cada38dc851&X-Amz-SignedHeaders=host&x-id=GetObject)


由于智能合约代码存储在以太坊区块链上，任何人都可以检查网络上所有智能合约的应用逻辑。


#### **3) Ethereum Virtual Machine (EVM)**


接下来，你有以太坊虚拟机，它执行智能合约中定义的逻辑，并处理在这个全局可访问的状态机上发生的状态更改。


EVM不理解Solidity和Vyper等用于编写智能合约的高级语言。相反，您必须将高级语言编译成字节码，然后EVM可以执行这些字节码。


#### **4) Front-end**


最后，我们有前端。正如我们之前提到的，它定义了UI逻辑，但前端也与智能合约中定义的应用程序逻辑进行通信。


### **前端代码如何与以太坊上的智能合约通信？**


我们希望我们的前端与我们的智能合约通信，以便它们可以调用函数，但请记住，以太坊是一个去中心化的网络。以太坊网络中的每个节点都保留了以太坊状态机上所有状态的副本，包括与每个智能合约相关的代码和数据。


当我们想要与区块链上的数据和代码进行交互时，我们需要与其中一个节点进行交互。这是因为任何节点都可以广播在EVM上执行事务的请求。然后，矿工将执行交易，并将由此产生的状态变化传播到网络的其余部分。


有两种方法可以广播新交易：

1. **设置您自己的节点，运行以太坊区块链软件**
2. 使用Infura、Alchemy和Quicknode等第三方服务提供的节点

如果您使用第三方服务，则不必自己处理运行完整节点的所有头痛问题。毕竟，在自己的服务器上设置一个新的以太坊节点可能需要几天时间。（有很多数据要同步-它甚至可以占用更多的带宽和存储比典型的笔记本电脑可以处理。


此外，存储完整以太坊区块链的成本随着DApp的扩展而增加，并且您需要添加更多节点来扩展基础设施。这就是为什么随着基础设施变得越来越复杂，您需要全职的DevOps工程师。他们将帮助您维护基础架构，确保可靠的数据传输和快速响应。


总而言之，避免这些令人头痛的问题就是为什么许多DApp选择使用Infura或Alchemy等服务来管理他们的节点基础设施。当然，这是一个权衡，因为这会创建一个集中的阻塞点，但让我们把这个兔子洞留到另一天。;）


接下来，让我们谈谈供应商。当您需要与区块链进行交互时，您连接的节点（无论是您自己设置还是使用第三方服务的现有节点）通常被称为“提供者”。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/89ea8229-f32e-4d39-b205-7fe8d23e2bc8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=420b3d81205118937a5d3705581f296c6481735f96db1ca33cf26a1c85e17f22&X-Amz-SignedHeaders=host&x-id=GetObject)


每个以太坊客户端（即提供者）都实现了JSON-RPC规范。这确保了当前端应用程序想要与区块链交互时，有一组统一的方法。如果您需要了解JSON-RPC，它是一种无状态的轻量级远程过程调用（RPC）协议，定义了几种数据结构及其处理规则。它是与传输无关的，因此这些概念可以在同一进程中、通过套接字、通过HTTP或在许多不同的消息传递环境中使用。它使用JSON（RFC 4627）作为数据格式。


一旦您通过提供程序连接到区块链，您就可以读取存储在区块链上的状态。但是如果你想写状态，在你把交易提交到区块链之前，还有一件事需要做--使用你的私钥对交易进行“签名”。


例如，假设我们有一个DApp，它允许用户阅读或发布博客文章到区块链。你可能在前端有一个按钮，允许任何人查询特定用户写的博客文章。（回想一下，从区块链中阅读并不需要用户签署交易。


然而，当用户想要在链上发布新帖子时，我们的DApp会要求用户使用他们的私钥“签名”交易-只有这样DApp才会将交易中继到区块链。否则，节点不会接受交易。


这种交易的“签名”是Metamask通常使用的方法。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/abb2b214-098b-4ad3-ac22-fd42b55b4c17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=3f347af5fd99ccb2d6c6e8d5d32c94ec5a4b32cfd40db3ca9470d0188effebb2&X-Amz-SignedHeaders=host&x-id=GetObject)


Metamask是一个工具，可以让应用程序轻松处理密钥管理和事务签名。很简单：Metamask将用户的私钥存储在浏览器中，每当前端需要用户签署交易时，它就会调用Metamask。


Metamask还提供了与区块链的连接（作为“提供者”），因为它已经与Infura提供的节点建立了连接，因为它需要它来签署交易。通过这种方式，Metamask既是提供者又是签名者。🤯


### **区块链上的存储**


如果你正在构建一个所有智能合约和数据都完全位于以太坊区块链上的应用程序，那么这种架构是有意义的。但任何在以太坊上构建应用程序的人都知道，将所有东西存储在区块链上会变得非常昂贵，非常快。


请记住，使用以太坊，用户每次向区块链添加新数据时都要付费。这是因为向去中心化状态机添加状态会增加维护该状态机的节点的成本。


要求用户在每次交易需要添加新状态时为使用DApp支付额外费用并不是最好的用户体验。解决这个问题的一种方法是使用分散的链下存储解决方案，如IPFS或Swarm。


IPFS是一种用于存储和访问数据的分布式文件系统。因此，IPFS系统不是将数据存储在集中式数据库中，而是将数据分发和存储在对等网络中。这使得它很容易为您检索它当你需要的。


IPFS还有一个激励层，称为“Filecoin”。这一层激励世界各地的节点存储和检索这些数据。您可以使用Infura（为您提供IPFS节点）或Pinata（提供易于使用的服务，您可以将文件“固定”到IPFS并将IPFS哈希存储在区块链上）等提供商。


Swarm与之相似，因为它是一个分散的存储网络，但有一个显著的区别。虽然Filecoin是一个独立的系统，但Swarm的激励系统是内置的，并通过以太坊区块链上的智能合约来执行，用于存储和检索数据。


所以现在，使用IPFS或Swarm，我们的应用程序架构看起来像这样：


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d3119dcb-e90c-4e61-b0d4-9af4dda0f0a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=2e8a902dbb3761255033744a464bca6bfa2901b05e382b2755b68713b2c7afb3&X-Amz-SignedHeaders=host&x-id=GetObject)


敏锐的读者可能也注意到下图中的前端代码并没有存储在区块链上。我们可以将这些代码托管在AWS上，就像我们在Web 2.0中通常做的那样，但这会为您的DApp创建一个集中化的瓶颈。如果AWS崩溃了呢？如果它审查你的应用程序怎么办？


这就是为什么，如果你想构建一个真正去中心化的应用程序，你可能会选择在去中心化的存储解决方案上托管你的前端，比如IPFS或Swarm。


所以现在你的应用程序架构看起来更像这样：


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/3bba593e-50bf-43ef-ad41-aafecad7d71e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=1d07de6675ffddb13c32b8761a8189ad5a1aa83d072747d7fc3374849ec612a6&X-Amz-SignedHeaders=host&x-id=GetObject)


### **查询区块链**


到目前为止，我们已经讨论了如何通过签署交易并将其发送到区块链来写入区块链。但是从区块链上的智能合约中阅读数据呢？有两种主要方法可以做到这一点：


#### **1) Smart Contract Events**


您可以使用Web3.js库来查询和侦听智能合约事件。您可以侦听特定的事件，并在每次触发事件时指定回调。例如，如果你有一个智能合约，它在每个区块都从人A向人B发送连续的支付流，那么你可以在每次向人B进行新的支付时发出一个事件。你的前端代码可以监听智能合约触发的事件，并根据它执行特定的操作。


#### **2) The Graph**


上述方法有效，但有一些局限性。例如，如果你部署了一个智能合约，后来意识到你需要一个你最初没有包含的事件，那该怎么办？不幸的是，你必须重新部署一个包含该事件和数据的新智能合约。此外，使用回调来处理各种UI逻辑很快就会变得非常复杂。


Graph是一种链下索引解决方案，可以更轻松地查询以太坊区块链上的数据。Graph允许您定义要索引哪些智能合约，要侦听哪些事件和函数调用，以及如何将传入事件转换为前端逻辑（或任何使用API的内容）可以使用的实体。它使用GraphQL作为查询语言，许多前端工程师喜欢它，因为与传统的REST API相比，它的表现力更强。


通过对区块链数据进行索引，The Graph让我们可以在应用程序逻辑中以低延迟查询链上数据。


现在，你的DApp架构看起来像这样：


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/a3fead90-4adf-47b9-b5a4-859778fa3670/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241224T053736Z&X-Amz-Expires=3600&X-Amz-Signature=17ca335f301b1440d66f5a2cc92e1f31a0f33ae0663140faaca3afa2eabcdf2d&X-Amz-SignedHeaders=host&x-id=GetObject)


### **扩展您的DApp**


![614bb01a6931be1460c09ea1_Screen%20Shot%202021-09-22%20at%206.35.40%20PM.png](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bb01a6931be1460c09ea1_Screen%20Shot%202021-09-22%20at%206.35.40%20PM.png)


以太坊平均天然气价格


![614bb025db602667fe148215_Screen%20Shot%202021-09-22%20at%206.36.22%20PM.png](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bb025db602667fe148215_Screen%20Shot%202021-09-22%20at%206.36.22%20PM.png)


平均交易费


![614bb0800062b65784ec410a_Screen%20Shot%202021-09-22%20at%206.38.41%20PM.png](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bb0800062b65784ec410a_Screen%20Shot%202021-09-22%20at%206.38.41%20PM.png)


平均数据块大小


在以太坊上构建一个DApp，使用高额的天然气费用和完整的区块会导致非常糟糕的用户体验。幸运的是，有一些解决方案正在开发中。


一种流行的缩放解决方案是Polygon，一种L2缩放解决方案。Polygon不是在主区块链上执行交易，而是拥有处理和执行交易的“侧链”。侧链是与主链连接的二级区块链。每隔一段时间，侧链就会将其最近区块的聚合提交回主链。


![614bb0df53dcfec13ea9f668_Screen%20Shot%202021-09-22%20at%206.40.09%20PM.png](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bb0df53dcfec13ea9f668_Screen%20Shot%202021-09-22%20at%206.40.09%20PM.png)


L2解决方案的其他示例是乐观Rollup和zkRollup。这里的想法是类似的：我们使用“汇总”智能合约在链下批量处理交易，然后定期将这些交易提交到主链。想法是这样的：L2解决方案执行事务（即，慢的部分）是链下的，只有交易数据存储在链上。这让我们可以扩展区块链，因为我们不必在链上执行每一笔交易。这也使得交易更快，更便宜-并且在必要时仍然可以与主以太坊区块链进行通信。


![614bb2efff06e818e12a57f2_Screen%20Shot%202021-09-22%20at%206.49.04%20PM.png](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bb2efff06e818e12a57f2_Screen%20Shot%202021-09-22%20at%206.49.04%20PM.png)


### 组合在一起


例如，Hardhat是一个开发者框架，使以太坊开发者更容易构建、部署和测试他们的智能合约。Hardhat提供了“Hardhat Network”，开发人员可以使用它将智能合约部署到本地网络上，而无需处理实时环境。更好的是，它提供了一个伟大的插件生态系统，使开发人员的生活更容易。Hardhat还提供了 `console.log()`  功能，类似于JavaScript，用于调试目的。


### 结论


大多数人花了几个月的时间来弄清楚工具链是如何工作的，所以如果你是一个新的DApp开发人员，我希望这篇文章能为你节省一些时间。是时候开始建造了！

