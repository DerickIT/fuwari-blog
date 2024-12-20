---
category: Ethereum
tags:
  - Solidity
  - OP Stack
  - Web3
  - wallet
  - ProgramEnv
status: 已发布
catalog: []
slug: building-l2-blockchain-based-on-op-stack
title: 基于OP Stack搭建L2公链
urlname: 162aa09a-108e-8091-93d3-e540dc0942e3
date: '2024-12-20 22:02:00'
updated: '2024-12-20 22:23:00'
image: 'https://images.unsplash.com/photo-1640575277674-8f0adfca9248?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-07-22T08:00:00.000Z
---

# 使用**OP Stack**从零开始搭建 L2 Rollup 

:::info
请**预留大约一个小时**来确保一切正常运行，并**仔细阅读本指南**。
你不会想错过任何可能导致后续问题的步骤。
:::

本教程是**为希望通过启动 OP Stack 测试网链来了解 OP Stack 的开发人员设计的**。通过本文你将了解完整的部署过程，并学习构成 OP Stack 的所有组件，**最终你将拥有自己的 OP Stack 测试网**。

## 软件依赖

| 依赖                                                          | 版本     | 版本检查命令       |
| ------------------------------------------------------------- | -------- | ------------------ |
| [git](https://git-scm.com/)                                   | `^2`     | `git --version`    |
| [go](https://go.dev/)                                         | `^1.21`  | `go version`       |
| [node](https://nodejs.org/en/)                                | `^20`    | `node --version`   |
| [pnpm](https://pnpm.io/installation)                          | `^8`     | `pnpm --version`   |
| [foundry](https://github.com/foundry-rs/foundry#installation) | `^0.2.0` | `forge --version`  |
| [make](https://linux.die.net/man/1/make)                      | `^3`     | `make --version`   |
| [jq](https://github.com/jqlang/jq)                            | `^1.6`   | `jq --version`     |
| [direnv](https://direnv.net)                                  | `^2`     | `direnv --version` |

### 关于特定依赖的说明

#### `node`

我们建议使用最新 LTS 版本的 Node.js（当前为 v20）。
[`nvm`](https://github.com/nvm-sh/nvm) 是一个有用的工具，可以帮助你管理机器上的多个 Node.js 版本。

#### `foundry`

建议使用 monorepo 的 `package.json` 中的脚本来管理 `foundry`，以确保你始终使用正确的版本。这种方法简化了安装、更新和版本检查过程。在继续之前，请确保在本地克隆 monorepo。

#### `direnv`

本教程的某些部分使用 [`direnv`](https://direnv.net) 作为一种将环境变量从 `.envrc` 文件加载到你的 shell 中的方法。
这意味着你无需每次想使用环境变量时都手动导出它们。
`direnv` 只能访问你明确允许它查看的文件。

在[安装 `direnv`](https://direnv.net/docs/installation.html)之后，你需要**确保 [`direnv` 已连接到你的 shell](https://direnv.net/docs/hook.html)**。
请确保你已按照[ `direnv` 网站上的指南](https://direnv.net/docs/hook.html)进行操作，然后**关闭你的终端并重新打开它**，以便更改生效（或者如果你知道如何操作，则 `source` 你的配置文件）。

:::tip
请确保你已通过修改你的 shell 配置文件（如 `~/.bashrc` 或 `~/.zshrc`）将 `direnv` 正确连接到你的 shell。
如果你没有编辑配置文件，那么你可能没有正确配置 `direnv`（并且稍后可能会出现问题）。
:::

## 获取 Sepolia 节点访问权限

跟随本教程将部署一个 OP Stack Rollup 链，该链使用 Layer 1 区块链来托管和排序交易数据。
OP Stack Rollups 被设计为使用 EVM 等效区块链，如 Ethereum、OP Mainnet 或标准 Ethereum 测试网作为其 L1 链。

**本指南使用 Sepolia 测试网作为 L1 链**。
我们建议你也使用 Sepolia。
你也可以使用其他 EVM 兼容的区块链，但你可能会遇到意外的错误。
如果你想使用其他网络，请务必仔细检查每个命令，并将任何特定于 Sepolia 的值替换为你网络的值。

由于你正在将 OP Stack 链部署到 Sepolia，因此你需要有权访问 Sepolia 节点。
你可以使用 [Alchemy](https://www.alchemy.com/) 等节点提供商（更容易），或者运行你自己的 Sepolia 节点（更难）。

## 构建源代码

你将直接从源代码启动你的 OP Stack 链，而不是使用像 [Docker](https://www.docker.com/) 这样的容器系统。
虽然这增加了一些额外的步骤，但这意味着如果你想修改堆栈的行为，你将更容易做到。
如果你想要你将使用的各种组件的摘要，请再次查看上面的[你将要部署的内容](#what-youre-going-to-deploy)部分。

:::info
为了简单起见，你将使用主目录 `~/` 作为本教程的工作目录。
你可以使用你想要的任何目录，但使用主目录将允许你复制/粘贴本指南中的命令。
如果你选择使用其他目录，请确保你在本教程中的命令中使用了正确的目录。
:::

### 构建 Optimism monorepo

<Steps>

<h4>克隆 Optimism Monorepo</h4>

```bash
cd ~
git clone https://github.com/ethereum-optimism/optimism.git
```

<h4>进入 Optimism Monorepo</h4>

```bash
cd optimism
```

<h4>检出正确的 分支</h4>

<Callout>
在本教程中，你将使用 Optimism Monorepo 的 `tutorials/chain` 分支来部署 OP Stack 测试网链。
这是一个非生产分支，落后于 `develop` 分支。
你**绝不**应该在生产中使用 `develop` 或 `tutorials/chain` 分支。
</Callout>

```bash
git checkout tutorials/chain
```

<h4>检查你的依赖</h4>

<Callout>
不要跳过此步骤！请确保在继续之前安装了所有必需的依赖项。
</Callout>

运行以下脚本并仔细检查你是否安装了所有必需的版本。
如果你没有安装正确的版本，你可能会遇到意外的错误。

```bash
./packages/contracts-bedrock/scripts/getting-started/versions.sh
```

<h4>安装依赖</h4>

```bash
pnpm install
```

<h4>构建 Optimism Monorepo 中的各种包</h4>

```bash
make op-node op-batcher op-proposer
pnpm build
```

</Steps>

### 构建 `op-geth`

<Steps>

<h4>克隆 op-geth</h4>

```bash
cd ~
git clone https://github.com/ethereum-optimism/op-geth.git
```

<h4>进入 op-geth</h4>

```bash
cd op-geth
```

<h4>构建 op-geth</h4>

```bash
make geth
```

</Steps>

## 填写环境变量

在开始部署你的链之前，你需要填写一些环境变量。

<Steps>

<h4>进入 Optimism Monorepo<h4>

```bash
cd ~/optimism
```

<h4>复制示例环境变量文件<h4>

```bash
cp .envrc.example .envrc
```

<h4>填写环境变量文件<h4>

打开环境变量文件并填写以下变量：

| 变量名        | 描述                                                                                             |
| ------------- | --------------------------------------------------------------- |
| `L1_RPC_URL`  | 你的 L1 节点的 URL（在本例中为 Sepolia 节点）。                                                                                                                    |
| `L1_RPC_KIND` | 你正在连接的 L1 RPC 的类型，用于通知最佳交易收据获取。有效选项：`alchemy`、`quicknode`、`infura`、`parity`、`nethermind`、`debug_geth`、`erigon`、`basic`、`any`。 |

</Steps>

## 生成地址

在设置链时，你需要四个地址及其私钥：

*   `Admin` 地址具有升级合约的能力。
*   `Batcher` 地址将 Sequencer 交易数据发布到 L1。
*   `Proposer` 地址将 L2 交易结果（状态根）发布到 L1。
*   `Sequencer` 地址在 p2p 网络上签署区块。

<Steps>

<h4>进入 Optimism Monorepo<h4>

```bash
cd ~/optimism
```

<h4>生成新地址<h4>

:::caution
你**不**应该将 `wallets.sh` 工具用于生产部署。
如果你要将基于 OP Stack 的链部署到生产环境中，你应该使用硬件安全模块和硬件钱包的组合。
:::

```bash
./packages/contracts-bedrock/scripts/getting-started/wallets.sh
```

<h4>检查输出<h4>

确保你看到的输出类似于以下内容：

```text
将以下内容复制到你的 .envrc 文件中：

# Admin 地址
export GS_ADMIN_ADDRESS=0x9625B9aF7C42b4Ab7f2C437dbc4ee749d52E19FC
export GS_ADMIN_PRIVATE_KEY=0xbb93a75f64c57c6f464fd259ea37c2d4694110df57b2e293db8226a502b30a34

# Batcher 地址
export GS_BATCHER_ADDRESS=0xa1AEF4C07AB21E39c37F05466b872094edcf9cB1
export GS_BATCHER_PRIVATE_KEY=0xe4d9cd91a3e53853b7ea0dad275efdb5173666720b1100866fb2d89757ca9c5a

# Proposer 地址
export GS_PROPOSER_ADDRESS=0x40E805e252D0Ee3D587b68736544dEfB419F351b
export GS_PROPOSER_PRIVATE_KEY=0x2d1f265683ebe37d960c67df03a378f79a7859038c6d634a61e40776d561f8a2

# Sequencer 地址
export GS_SEQUENCER_ADDRESS=0xC06566E8Ec6cF81B4B26376880dB620d83d50Dfb
export GS_SEQUENCER_PRIVATE_KEY=0x2a0290473f3838dbd083a5e17783e3cc33c905539c0121f9c76614dda8a38dca
```

<h4>保存地址<h4>

将上一步的输出复制并粘贴到你的 `.envrc` 文件中，如指示。

<h4>为地址提供资金<h4>

**你需要向 `Admin`、`Proposer` 和 `Batcher` 地址发送 ETH。**
所需的 ETH 确切数量取决于所使用的 L1 网络。
**你无需向 `Sequencer` 地址发送任何 ETH，因为它不发送交易。**

建议在使用 Sepolia 时使用以下金额为地址提供资金：

*   `Admin` — 0.5 Sepolia ETH
*   `Proposer` — 0.2 Sepolia ETH
*   `Batcher` — 0.1 Sepolia ETH

**要获取为地址提供资金所需的 Sepolia ETH，我们建议使用 [Superchain Faucet](https://console.optimism.io/faucet?utm_source=docs) 以及 [Coinbase 验证](https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/id-doc-verification)。**

</Steps>

## 加载环境变量

现在你已经填写了环境变量文件，你需要将这些变量加载到你的终端中。

<Steps>

<h4>进入 Optimism Monorepo<h4>

```bash
cd ~/optimism
```

<h4>使用 direnv 加载变量<h4>

:::tip
你即将使用 `direnv` 将环境变量从 `.envrc` 文件加载到你的终端中。
请确保你已[安装 `direnv`](https://direnv.net/docs/installation.html)并且已将 `direnv` 正确[连接到你的 shell](#configuring-direnv)。
:::

接下来，你需要允许 `direnv` 读取此文件并将变量加载到你的终端中，使用以下命令。

```bash
direnv allow
```

:::tip
警告：每当你的 `.envrc` 文件更改时，`direnv` 都会卸载自身。
**每次更改 `.envrc` 文件时，你*必须*重新运行以下命令。**
:::

<h4>确认变量已加载<h4>

运行 `direnv allow` 后，你应该看到类似于以下内容的输出（确切的输出将因你设置的变量而异，如果它看起来不完全像这样，请不要担心）：

```bash
direnv: loading ~/optimism/.envrc
direnv: export +DEPLOYMENT_CONTEXT +ETHERSCAN_API_KEY +GS_ADMIN_ADDRESS +GS_ADMIN_PRIVATE_KEY +GS_BATCHER_ADDRESS +GS_BATCHER_PRIVATE_KEY +GS_PROPOSER_ADDRESS +GS_PROPOSER_PRIVATE_KEY +GS_SEQUENCER_ADDRESS +GS_SEQUENCER_PRIVATE_KEY +IMPL_SALT +L1_RPC_KIND +L1_RPC_URL +PRIVATE_KEY +TENDERLY_PROJECT +TENDERLY_USERNAME
```

**如果你没有看到此输出，则你可能没有[正确配置 `direnv`](#configuring-direnv)。**
请确保你已正确配置 `direnv` 并再次运行 `direnv allow`，以便你看到所需的输出。

</Steps>

## 配置你的网络

构建完两个存储库后，你需要返回 Optimism Monorepo 以设置你的链的配置文件。
目前，链配置以 JSON 文件的形式存在于 [`contracts-bedrock`](https://github.com/ethereum-optimism/optimism/tree/v1.1.4/packages/contracts-bedrock) 包中。

<Steps>

<h4>进入 Optimism Monorepo<h4>

```bash
cd ~/optimism
```

<h4>移动到 contracts-bedrock 包中<h4>

```bash
cd packages/contracts-bedrock
```

<h4>生成配置文件<h4>

运行以下脚本以在 `deploy-config` 目录中生成 `getting-started.json` 配置文件。

```bash
./scripts/getting-started/config.sh
```

<h4>查看配置文件（可选）<h4>

如果你愿意，你可以通过在你喜欢的文本编辑器中打开 `deploy-config/getting-started.json` 来查看刚刚生成的配置文件。
建议暂时保持此文件原样，这样你就不会遇到任何意外的错误。

</Steps>

## 部署 Create2 工厂（可选）

如果你要将 OP Stack 链部署到 Sepolia 以外的网络，你可能需要在 L1 链上部署 Create2 工厂合约。
此工厂合约用于以确定性的方式部署 OP Stack 智能合约。

:::tip
此步骤通常仅在你将 OP Stack 链部署到自定义 L1 链时才需要。
如果你要将 OP Stack 链部署到 Sepolia，则可以安全地跳过此步骤。
:::

<Steps>

<h4>检查工厂是否存在<h4>

Create2 工厂合约将部署在地址 `0x4e59b44847b379578588920cA78FbF26c0B4956C`。
你可以使用区块浏览器或运行以下命令来检查此合约是否已部署到你的 L1 网络：

```bash
cast codesize 0x4e59b44847b379578588920cA78FbF26c0B4956C --rpc-url $L1_RPC_URL
```

如果命令返回 `0`，则表示尚未部署该合约。
如果命令返回 `69`，则表示已部署该合约，你可以安全地跳过此部分。

<h4>为工厂部署者提供资金<h4>

你需要向将用于部署工厂合约的地址 `0x3fAB184622Dc19b6109349B94811493BF2a45362` 发送一些 ETH。
此地址只能用于部署工厂合约，不会用于其他任何用途。
在你的 L1 链上向此地址发送至少 1 ETH。

<h4>部署工厂<h4>

使用 `cast`，将工厂合约部署到你的 L1 链：

```bash
cast publish --rpc-url $L1_RPC_URL 0xf8a58085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222
```

<h4>等待交易被挖掘<h4>

请确保交易包含在你的 L1 链上的区块中，然后再继续。

<h4>验证工厂是否已部署<h4>

再次运行代码大小检查，以确保工厂已正确部署：

```bash
cast codesize 0x4e59b44847b379578588920cA78FbF26c0B4956C --rpc-url $L1_RPC_URL
```

</Steps>

## 部署 L1 合约

配置完你的网络后，就可以部署链功能所需的 L1 合约了。

<Steps>

<h4>部署 L1 合约<h4>

```bash
forge script scripts/Deploy.s.sol:Deploy --private-key $GS_ADMIN_PRIVATE_KEY --broadcast --rpc-url $L1_RPC_URL --slow
```

:::info
如果你看到一个不明确的错误，其中包含 `EvmError: Revert` 和 `Script failed`，那么你可能需要更改 `IMPL_SALT` 环境变量。
此变量确定通过 [CREATE2](https://eips.ethereum.org/EIPS/eip-1014) 部署的各种智能合约的地址。
如果使用相同的 `IMPL_SALT` 两次部署相同的合约，则第二次部署将失败。
**你可以通过在 Optimism Monorepo 中的任何位置运行 `direnv allow` 来生成新的 `IMPL_SALT`。**
:::

</Steps>

## 生成 L2 配置文件

现在你已经设置了 L1 智能合约，你可以自动生成共识客户端和执行客户端中使用的多个配置文件。

你需要生成三个重要文件：

1.  `genesis.json` 包括执行客户端的链的创世状态。
2.  `rollup.json` 包括共识客户端的配置信息。
3.  `jwt.txt` 是一个 [JSON Web Token](https://jwt.io/introduction)，允许共识客户端和执行客户端安全地通信（以太坊客户端中使用相同的机制）。

<Steps>

<h4>导航到 op-node 包<h4>

```bash
cd ~/optimism/op-node
```

<h4>创建创世文件<h4>

现在你将在 `op-node` 文件夹中生成 `genesis.json` 和 `rollup.json` 文件：

```bash
go run cmd/main.go genesis l2 \
  --deploy-config ../packages/contracts-bedrock/deploy-config/getting-started.json \
  --l1-deployments ../packages/contracts-bedrock/deployments/getting-started/.deploy \
  --outfile.l2 genesis.json \
  --outfile.rollup rollup.json \
  --l1-rpc $L1_RPC_URL
```

<h4>创建身份验证密钥<h4>

接下来需要创建一个 [JSON Web Token](https://jwt.io/introduction)，该令牌将用于验证共识客户端和执行客户端。
此令牌用于确保只有共识客户端和执行客户端才能相互通信。
你可以使用以下命令生成 JWT：

```bash
openssl rand -hex 32 > jwt.txt
```

<h4>将创世文件复制到 op-geth 目录中<h4>

最后需要将 `genesis.json` 文件和 `jwt.txt` 文件复制到 `op-geth` 中，以便你可以使用它来初始化和运行 `op-geth`：

```bash
cp genesis.json ~/op-geth
cp jwt.txt ~/op-geth
```

</Steps>

## 初始化 `op-geth`

现在只需要运行几个命令来初始化 `op-geth` 可以运行你的链了！。
你将运行一个 Sequencer 节点，因此你需要导入你之前生成的 `Sequencer` 私钥。
此私钥是你的 Sequencer 将用于签署新区块的密钥。

<Steps>

<h4>导航到 op-geth 目录<h4>

```bash
cd ~/op-geth
```

<h4>创建数据目录文件夹<h4>

```bash
mkdir datadir
```

<h4>构建 op-geth 二进制文件<h4>

```bash
make geth
```

<h4>初始化 op-geth<h4>

```bash
build/bin/geth init --state.scheme=hash --datadir=datadir genesis.json
```

</Steps>

## 启动 `op-geth`

现在你将启动 `op-geth`，你的执行客户端。
请注意，在下一步中启动共识客户端之前，你不会看到任何交易。

<Steps>

<h4>打开一个新的终端<h4>

你需要一个终端窗口来运行 `op-geth`。

<h4>导航到 op-geth 目录<h4>

```bash
cd ~/op-geth
```

<h4>运行 op-geth<h4>

:::info
你在此处使用 `--gcmode=archive` 来运行 `op-geth`，因为此节点将充当你的 Sequencer。
以存档模式运行 Sequencer 很有用，因为 `op-proposer` 需要访问完整状态。
如果你想节省磁盘空间，可以随意以完整模式运行其他（非 Sequencer）节点。只需确保至少存在另一个存档节点，并且 `op-proposer` 指向它。
:::

:::info
重要的是，你此时已按照上一节中的说明初始化了 geth 节点。否则会导致 `op-geth` 和 `op-node` 之间的启动问题。
:::

```bash
./build/bin/geth \
  --datadir ./datadir \
  --http \
  --http.corsdomain="*" \
  --http.vhosts="*" \
  --http.addr=0.0.0.0 \
  --http.api=web3,debug,eth,txpool,net,engine \
  --ws \
  --ws.addr=0.0.0.0 \
  --ws.port=8546 \
  --ws.origins="*" \
  --ws.api=debug,eth,txpool,net,engine \
  --syncmode=full \
  --gcmode=archive \
  --nodiscover \
  --maxpeers=0 \
  --networkid=42069 \
  --authrpc.vhosts="*" \
  --authrpc.addr=0.0.0.0 \
  --authrpc.port=8551 \
  --authrpc.jwtsecret=./jwt.txt \
  --rollup.disabletxpoolgossip=true
```

</Steps>

## 启动 `op-node`

如果已经运行了 `op-geth`，需要同时运行 `op-node`。
与以太坊一样，OP Stack 具有共识客户端 (`op-node`) 和执行客户端 (`op-geth`)。
共识客户端通过 Engine API “驱动”执行客户端。

<Steps>

<h4>打开一个新的终端<h4>

你需要一个终端窗口来运行 `op-node`。

<h4>导航到 op-node 目录<h4>

```bash
cd ~/optimism/op-node
```

<h4>运行 op-node<h4>

```bash
./bin/op-node \
  --l2=http://localhost:8551 \
  --l2.jwt-secret=./jwt.txt \
  --sequencer.enabled \
  --sequencer.l1-confs=5 \
  --verifier.l1-confs=4 \
  --rollup.config=./rollup.json \
  --rpc.addr=0.0.0.0 \
  --p2p.disable \
  --rpc.enable-admin \
  --p2p.sequencer.key=$GS_SEQUENCER_PRIVATE_KEY \
  --l1=$L1_RPC_URL \
  --l1.rpckind=$L1_RPC_KIND
```

运行此命令后，你应该开始看到 `op-node` 开始从 L1 链同步 L2 区块。
一旦 `op-node` 赶上 L1 链的顶端，它将开始向 `op-geth` 发送区块以供执行。
届时，你将开始看到在 `op-geth` 内部创建的区块。

:::info
**默认情况下，你的 `op-node` 将尝试使用对等网络来加速同步过程。**
如果你使用的链 ID 也被其他人使用，例如本教程的默认链 ID (42069)，你的 `op-node` 将收到其他排序器签署的区块。
这些请求将失败并浪费时间和网络资源。
**为了避免这种情况，本教程从禁用对等网络同步开始 (`--p2p.disable`)。**
:::
一旦你有多个节点，你可能需要启用对等网络同步。
你可以将以下选项添加到 `op-node` 命令以启用与特定节点的对等网络同步：

```
  --p2p.static=<nodes> \
  --p2p.listen.ip=0.0.0.0 \
  --p2p.listen.tcp=9003 \
  --p2p.listen.udp=9003 \
```



:::info
你也可以选择删除 [--p2p.static](/builders/node-operators/configuration/consensus-config#p2pstatic) 选项，但你可能会看到来自使用相同链 ID 的其他链的失败请求。
:::

</Steps>

## 启动 `op-batcher`

`op-batcher` 从 Sequencer 获取交易并将这些交易发布到 L1。
一旦这些 Sequencer 交易包含在最终的 L1 区块中，它们就正式成为规范链的一部分。
`op-batcher` 至关重要！

最好为 `Batcher` 地址提供至少 1 个 Sepolia ETH，以确保它可以继续运行而不会耗尽用于 gas 的 ETH。
请密切关注 `Batcher` 地址的余额，因为如果有大量交易要发布，它可能会快速消耗 ETH。

<Steps>

<h4>打开一个新的终端<h4>

你需要一个终端窗口来运行 `op-batcher`。

<h4>导航到 op-batcher 目录<h4>

```bash
cd ~/optimism/op-batcher
```

<h4>运行 op-batcher<h4>

```bash
./bin/op-batcher \
  --l2-eth-rpc=http://localhost:8545 \
  --rollup-rpc=http://localhost:9545 \
  --poll-interval=1s \
  --sub-safety-margin=6 \
  --num-confirmations=1 \
  --safe-abort-nonce-too-low-count=3 \
  --resubmission-timeout=30s \
  --rpc.addr=0.0.0.0 \
  --rpc.port=8548 \
  --rpc.enable-admin \
  --max-channel-duration=25 \
  --l1-eth-rpc=$L1_RPC_URL \
  --private-key=$GS_BATCHER_PRIVATE_KEY
```

:::info
[`--max-channel-duration=n`](/builders/chain-operators/configuration/batcher#set-your--op_batcher_max_channel_duration) 设置告诉 batcher 每 `n` 个 L1 区块将所有数据写入 L1。
当它较低时，交易会频繁写入 L1，其他节点可以从 L1 快速同步。
当它较高时，交易写入 L1 的频率较低，并且 batcher 消耗的 ETH 较少。
如果你想降低成本，请将此值设置为 0 以禁用它，或将其增加到更高的值。
:::

</Steps>

## 启动 `op-proposer`

现在启动 `op-proposer`，它会提出新的状态根。

<Steps>

<h4>打开一个新的终端<h4>

打开一个新终端窗口来运行 `op-proposer`。

<h4>导航到 op-proposer 目录<h4>

```bash
cd ~/optimism/op-proposer
```

<h4>运行 op-proposer<h4>

```bash
./bin/op-proposer \
  --poll-interval=12s \
  --rpc.port=8560 \
  --rollup-rpc=http://localhost:9545 \
  --l2oo-address=$(cat ../packages/contracts-bedrock/deployments/getting-started/.deploy | jq -r .L2OutputOracleProxy) \
  --private-key=$GS_PROPOSER_PRIVATE_KEY \
  --l1-eth-rpc=$L1_RPC_URL
```

</Steps>

## 将你的钱包连接到你的链

现在拥有一个功能齐全的 OP Stack Rollup，其 Sequencer 节点在 `http://localhost:8545` 上运行。
你可以像将钱包连接到任何其他 EVM 链一样将钱包连接到此链。
如果你需要一种连接到你的链的简单方法，只需[单击此处](https://chainid.link?network=opstack-getting-started)。

## 在你的链上获取 ETH

连接钱包后，你可能会注意到你没有任何 ETH 来支付链上的 gas 费用。
将 Sepolia ETH 存入你的链的最简单方法是将 ETH 直接发送到 `L1StandardBridge` 合约。

<Steps>

<h4>导航到 contracts-bedrock 目录<h4>

```bash
cd ~/optimism/packages/contracts-bedrock
```

<h4>获取 L1StandardBridgeProxy 合约的地址<h4>

```bash
cat deployments/getting-started/.deploy | jq -r .L1StandardBridgeProxy
```

<h4>向 L1StandardBridgeProxy 合约发送一些 Sepolia ETH<h4>

获取 L1 桥接代理合约地址，并使用你希望在 Rollup 上拥有 ETH 的钱包，在 Sepolia 上向该地址发送少量 ETH（0.1 或更少即可）。
这将触发存款，从而在 L2 上将 ETH 铸造到你的钱包中。
ETH 可能需要长达 5 分钟才能显示在你在 L2 上的钱包中。

</Steps>

## 查看 rollup 运行情况

现在可以像与任何其他 EVM 链交互一样与你的 Rollup 交互。
发送一些交易，部署一些合约，可以与L1进行交互。



