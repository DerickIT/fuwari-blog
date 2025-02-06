---
category: Web3
tags:
  - Rust
  - Web3
  - Substrate
  - Polkadot
status: 已发布
catalog: []
slug: how-to-run-a-local-substrate-node-tutorial
title: 在本地运行Substrate开发节点
urlname: 152aa09a-108e-8091-9a62-d67fcb6e8118
date: '2024-12-04 16:09:00'
updated: '2024-12-05 00:07:00'
image: 'https://images.unsplash.com/photo-1711181531884-6d342874dad1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-11-30T08:00:00.000Z
---

Substrate是一个强大而灵活的区块链开发框架，由Parity Technologies团队开发，旨在简化和加速区块链的创建过程。它与Polkadot有着密切的关系，但同时也是一个独立的工具。让我们深入了解Substrate及其与Polkadot的联系。


## 什么是Substrate?


Substrate是一个用于构建自定义区块链的开源框架。它具有以下特点：

1. **可扩展性**：Substrate允许开发者根据特定需求创建定制化的区块链。
2. **模块化**：框架采用高度模块化的设计，开发者可以轻松组合和定制各种组件。
3. **灵活性**：支持多种共识机制、加密算法和治理模型。
4. **性能优化**：Substrate经过优化，可以处理高吞吐量和复杂的区块链操作。
5. **跨链兼容性**：原生支持与其他基于Substrate的链进行互操作。

## Substrate与Polkadot的关系


Substrate和Polkadot之间存在密切但可分离的关系：

1. **技术基础**：Polkadot本身就是使用Substrate构建的，这证明了Substrate的强大功能和灵活性。
2. **平行链开发**：Substrate是开发Polkadot生态系统中平行链的首选工具。
3. **互操作性**：基于Substrate构建的链可以轻松地与Polkadot网络集成，成为一条平行链或平行线程。
4. **独立性**：尽管与Polkadot紧密相连，但Substrate构建的链也可以作为独立的区块链运行，不必连接到Polkadot网络。
5. **生态系统共享**：Substrate项目可以利用Polkadot的安全性、跨链通信能力和不断增长的生态系统。

## Substrate的优势

1. **快速开发**：Substrate提供了许多预建模块，大大缩短了区块链开发时间。
2. **定制化**：开发者可以根据特定用例优化其区块链，而不受现有平台的限制。
3. **升级性**：Substrate支持无分叉升级，允许区块链随时间演进而不中断。
4. **互操作性**：原生支持跨链通信，特别是在Polkadot生态系统中。
5. **社区支持**：作为开源项目，Substrate拥有活跃的开发者社区和丰富的资源。

总之，Substrate是一个强大的区块链开发框架，为开发者提供了构建创新区块链解决方案所需的工具。虽然它与Polkadot有着密切的联系，但Substrate的应用范围远不止于此，为区块链技术的未来发展开辟了广阔的可能性。


:::tip
下面将一步步搭建本地substrate节点并进行转账，查看交易等操作，请提前根据[文档](https://substrate-docs.pages.dev/en/install/macos/?mode=light)配置substrate运行环境
:::


::github{repo="papermoonio/polkadot-sdk-solo-template-dev-courses"}


### 下载仓库并编译


```bash
git clone  https://github.com/papermoonio/polkadot-sdk-solo-template-dev-courses 
cd polkadot-sdk-solo-template-dev-courses
cargo build --release
```


### 查看节点使用帮助说明


```prolog
root@localhost:~/code/substrate/polkadot-sdk-solo-template-dev-courses# ./target/release/solochain-template-node -h
A solochain node template built with Substrate, part of Polkadot Sdk.

Usage: solochain-template-node [OPTIONS]
       solochain-template-node <COMMAND>

Commands:
  key            Key management cli utilities
  build-spec     Build a chain specification
  check-block    Validate blocks
  export-blocks  Export blocks
  export-state   Export the state of a given block into a chain spec
  import-blocks  Import blocks
  purge-chain    Remove the whole chain
  revert         Revert the chain to a previous state
  benchmark      Sub-commands concerned with benchmarking
  try-runtime    Try-runtime has migrated to a standalone CLI (<https://github.com/paritytech/try-runtime-cli>). The subcommand exists as a stub and deprecation notice. It will be removed entirely some time after January 2024
  chain-info     Db meta columns information
  help           Print this message or the help of the given subcommand(s)

Options:
      --validator                                                                                Enable validator mode
      --no-grandpa                                                                               Disable GRANDPA
      --rpc-external                                                                             Listen to all RPC interfaces (default: local)
      --unsafe-rpc-external                                                                      Listen to all RPC interfaces
      --rpc-methods <METHOD SET>                                                                 RPC methods to expose. [default: auto] [possible values: auto, safe, unsafe]
      --rpc-rate-limit <RPC_RATE_LIMIT>                                                          RPC rate limiting (calls/minute) for each connection
      --rpc-max-request-size <RPC_MAX_REQUEST_SIZE>                                              Set the maximum RPC request payload size for both HTTP and WS in megabytes [default: 15]
      --rpc-max-response-size <RPC_MAX_RESPONSE_SIZE>                                            Set the maximum RPC response payload size for both HTTP and WS in megabytes [default: 15]
      --rpc-max-subscriptions-per-connection <RPC_MAX_SUBSCRIPTIONS_PER_CONNECTION>              Set the maximum concurrent subscriptions per connection [default: 1024]
      --rpc-port <PORT>                                                                          Specify JSON-RPC server TCP port
      --rpc-max-connections <COUNT>                                                              Maximum number of RPC server connections [default: 100]
      --rpc-message-buffer-capacity-per-connection <RPC_MESSAGE_BUFFER_CAPACITY_PER_CONNECTION>  The number of messages the RPC server is allowed to keep in memory [default: 64]
      --rpc-disable-batch-requests                                                               Disable RPC batch requests
      --rpc-max-batch-request-len <LEN>                                                          Limit the max length per RPC batch request
      --rpc-cors <ORIGINS>                                                                       Specify browser *origins* allowed to access the HTTP & WS RPC servers
      --name <NAME>                                                                              The human-readable name for this node
      --no-telemetry                                                                             Disable connecting to the Substrate telemetry server
      --telemetry-url <URL VERBOSITY>                                                            The URL of the telemetry server to connect to
      --prometheus-port <PORT>                                                                   Specify Prometheus exporter TCP Port
      --prometheus-external                                                                      Expose Prometheus exporter on all interfaces
      --no-prometheus                                                                            Do not expose a Prometheus exporter endpoint
      --max-runtime-instances <MAX_RUNTIME_INSTANCES>                                            The size of the instances cache for each runtime [max: 32] [default: 8]
      --runtime-cache-size <RUNTIME_CACHE_SIZE>                                                  Maximum number of different runtimes that can be cached [default: 2]
      --offchain-worker <ENABLED>                                                                Execute offchain workers on every block [default: when-authority] [possible values: always, never, when-authority]
      --enable-offchain-indexing <ENABLE_OFFCHAIN_INDEXING>                                      Enable offchain indexing API [default: false] [possible values: true, false]
      --chain <CHAIN_SPEC>                                                                       Specify the chain specification
      --dev                                                                                      Specify the development chain
  -d, --base-path <PATH>                                                                         Specify custom base path
  -l, --log <LOG_PATTERN>...                                                                     Sets a custom logging filter (syntax: `<target>=<level>`)
      --detailed-log-output                                                                      Enable detailed log output
      --disable-log-color                                                                        Disable log color output
      --enable-log-reloading                                                                     Enable feature to dynamically update and reload the log filter
      --tracing-targets <TARGETS>                                                                Sets a custom profiling filter
      --tracing-receiver <RECEIVER>                                                              Receiver to process tracing messages [default: log] [possible values: log]
      --state-pruning <PRUNING_MODE>                                                             Specify the state pruning mode
      --blocks-pruning <PRUNING_MODE>                                                            Specify the blocks pruning mode [default: archive-canonical]
      --database <DB>                                                                            Select database backend to use [possible values: rocksdb, paritydb, auto, paritydb-experimental]
      --db-cache <MiB>                                                                           Limit the memory the database cache can use
      --wasm-execution <METHOD>                                                                  Method for executing Wasm runtime code [default: compiled] [possible values: interpreted-i-know-what-i-do, compiled]
      --wasmtime-instantiation-strategy <STRATEGY>                                               The WASM instantiation method to use [default: pooling-copy-on-write] [possible values: pooling-copy-on-write, recreate-instance-copy-on-write, pooling,
                                                                                                 recreate-instance]
      --wasm-runtime-overrides <PATH>                                                            Specify the path where local WASM runtimes are stored
      --execution-syncing <STRATEGY>                                                             Runtime execution strategy for importing blocks during initial sync [possible values: native, wasm, both, native-else-wasm]
      --execution-import-block <STRATEGY>                                                        Runtime execution strategy for general block import (including locally authored blocks) [possible values: native, wasm, both, native-else-wasm]
      --execution-block-construction <STRATEGY>                                                  Runtime execution strategy for constructing blocks [possible values: native, wasm, both, native-else-wasm]
      --execution-offchain-worker <STRATEGY>                                                     Runtime execution strategy for offchain workers [possible values: native, wasm, both, native-else-wasm]
      --execution-other <STRATEGY>                                                               Runtime execution strategy when not syncing, importing or constructing blocks [possible values: native, wasm, both, native-else-wasm]
      --execution <STRATEGY>                                                                     The execution strategy that should be used by all execution contexts [possible values: native, wasm, both, native-else-wasm]
      --trie-cache-size <Bytes>                                                                  Specify the state cache size [default: 67108864]
      --state-cache-size <STATE_CACHE_SIZE>                                                      DEPRECATED: switch to `--trie-cache-size`
      --bootnodes <ADDR>...                                                                      Specify a list of bootnodes
      --reserved-nodes <ADDR>...                                                                 Specify a list of reserved node addresses
      --reserved-only                                                                            Whether to only synchronize the chain with reserved nodes
      --public-addr <PUBLIC_ADDR>...                                                             Public address that other nodes will use to connect to this node
      --listen-addr <LISTEN_ADDR>...                                                             Listen on this multiaddress
      --port <PORT>                                                                              Specify p2p protocol TCP port
      --no-private-ip                                                                            Always forbid connecting to private IPv4/IPv6 addresses
      --allow-private-ip                                                                         Always accept connecting to private IPv4/IPv6 addresses
      --out-peers <COUNT>                                                                        Number of outgoing connections we're trying to maintain [default: 8]
      --in-peers <COUNT>                                                                         Maximum number of inbound full nodes peers [default: 32]
      --in-peers-light <COUNT>                                                                   Maximum number of inbound light nodes peers [default: 100]
      --no-mdns                                                                                  Disable mDNS discovery (default: true)
      --max-parallel-downloads <COUNT>                                                           Maximum number of peers from which to ask for the same blocks in parallel [default: 5]
      --node-key <KEY>                                                                           Secret key to use for p2p networking
      --node-key-type <TYPE>                                                                     Crypto primitive to use for p2p networking [default: ed25519] [possible values: ed25519]
      --node-key-file <FILE>                                                                     File from which to read the node's secret key to use for p2p networking
      --discover-local                                                                           Enable peer discovery on local networks
      --kademlia-disjoint-query-paths                                                            Require iterative Kademlia DHT queries to use disjoint paths
      --kademlia-replication-factor <KADEMLIA_REPLICATION_FACTOR>                                Kademlia replication factor [default: 20]
      --ipfs-server                                                                              Join the IPFS network and serve transactions over bitswap protocol
      --sync <SYNC_MODE>                                                                         Blockchain syncing mode. [default: full] [possible values: full, fast, fast-unsafe, warp]
      --max-blocks-per-request <COUNT>                                                           Maximum number of blocks per request [default: 64]
      --pool-limit <COUNT>                                                                       Maximum number of transactions in the transaction pool [default: 8192]
      --pool-kbytes <COUNT>                                                                      Maximum number of kilobytes of all transactions stored in the pool [default: 20480]
      --tx-ban-seconds <SECONDS>                                                                 How long a transaction is banned for
      --keystore-path <PATH>                                                                     Specify custom keystore path
      --password-interactive                                                                     Use interactive shell for entering the password used by the keystore
      --password <PASSWORD>                                                                      Password used by the keystore
      --password-filename <PATH>                                                                 File that contains the password used by the keystore
      --alice                                                                                    Shortcut for `--name Alice --validator`
      --bob                                                                                      Shortcut for `--name Bob --validator`
      --charlie                                                                                  Shortcut for `--name Charlie --validator`
      --dave                                                                                     Shortcut for `--name Dave --validator`
      --eve                                                                                      Shortcut for `--name Eve --validator`
      --ferdie                                                                                   Shortcut for `--name Ferdie --validator`
      --one                                                                                      Shortcut for `--name One --validator`
      --two                                                                                      Shortcut for `--name Two --validator`
      --force-authoring                                                                          Enable authoring even when offline
      --tmp                                                                                      Run a temporary node
  -h, --help                                                                                     Print help (see more with '--help')
  -V, --version                                                                                  Print version
```


### 运行本地节点


```bash
./target/release/solochain-template-node --dev --rpc-external  --rpc-cors all
# 运行节点后默认占用9944端口，并且因为这是本地开发节点，只支持本地RPC，ws
```


### 访问[polkadotJS前端](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944)


```prolog
访问前端页面，点击选择development的local node
https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944
```


### 获取内容


![chaininfo.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/89be5adf-5619-4306-be75-45b425e3c446/chaininfo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HG2MVL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T213132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAHOXxG3w09ba7mXGoaogzWo2azRRlM7CdEb1KwPf910AiABZhLjRjNEq54cmQzAHXOPNlRFni1usIhwAULudvp9HSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqIw2g8OTgIDkqVF8KtwDQxqdrdhfSG8Hf%2B%2FWsZKI6biSKRyGoE9insFu3blV%2FGNWZ%2FVWwkLxJvRHf5%2BuKzudmllpluJ0cWQqhZfwuT8MWZkk9rQOK7xdZSDJEfV3XHzQUhQTy8vFd5TLbpk0OcOAU%2F685Qyb56wrqhoxZeX2FHmhtawMh%2B2jHYptgP5eLJ%2Bz44VlRpaQ2%2BqN1vGIL2lz0RKffXakQ4wJgjHWmX1gb3TVYdvSPuv58exaWFa4jyy952dmmyEpgcQOsynN9aHYgAT6n9%2FQEWv2TpUZ6uI7G1F3Ykaluk8fjDQ0HwKkoQvKx1evIyrpGMhJywFNO9JpsR1uj6VB32DIKdyMdBTwL%2BubiEfqmusaPit9NtQKCXYzpPYaPIQuJduNrfG%2BMl5qlzUJTNFmQs6MRu2cw9CMnTTOw7UA18ZjUIJxAISRNmMtOWTXwyCjfLcSazBz6MlXq5OOHf5QhSXQYXS0neukh322%2Fd5cusfKxPC8SQuVcSobPi4a18EA2%2FIi5%2BOO0%2BlyPFNrg3gq4JtJw58Mz1Q0xHGSQJJReVRmQOB6tWQOHF%2FmRmj5F6kpjxRDjMqNBa8HOP0vpNRa8OhJM1sC4RlMsB%2Bm3%2B1OvB%2B1fLvlApKQWeuZjOWmhuwhjP%2FZUisw4reUvQY6pgGq6y2bLuNdari93fbSb4pYPany3%2BDalFZPCOlN0vk7Pl48mD3PEFSEUyBhB6N%2Ft1jQgtHLdZg9y%2F5%2BDi1e%2BzCVNXJpfI6qFDYPmvfyywm%2B%2BY4i1N6NYu3xAOx%2FnKgrlDHPwyjNMbwPmXZO%2F6wnFVqv7ruftclxrradpTOUunLfbs%2BAii65ly%2F5hEHpP%2Byv1ucq9%2F7Q4%2Fy2Ogg8QL8m3CnWWrYGov9X&X-Amz-Signature=8279c040ce29d03629ab8d325f0b5c242fab44424db4b4cb9dab5a88a1926586&X-Amz-SignedHeaders=host&x-id=GetObject)


### 查看账户


![conn-node.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/05964f92-c6d8-42d1-b4a1-b3a852295683/conn-node.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HG2MVL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T213132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAHOXxG3w09ba7mXGoaogzWo2azRRlM7CdEb1KwPf910AiABZhLjRjNEq54cmQzAHXOPNlRFni1usIhwAULudvp9HSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqIw2g8OTgIDkqVF8KtwDQxqdrdhfSG8Hf%2B%2FWsZKI6biSKRyGoE9insFu3blV%2FGNWZ%2FVWwkLxJvRHf5%2BuKzudmllpluJ0cWQqhZfwuT8MWZkk9rQOK7xdZSDJEfV3XHzQUhQTy8vFd5TLbpk0OcOAU%2F685Qyb56wrqhoxZeX2FHmhtawMh%2B2jHYptgP5eLJ%2Bz44VlRpaQ2%2BqN1vGIL2lz0RKffXakQ4wJgjHWmX1gb3TVYdvSPuv58exaWFa4jyy952dmmyEpgcQOsynN9aHYgAT6n9%2FQEWv2TpUZ6uI7G1F3Ykaluk8fjDQ0HwKkoQvKx1evIyrpGMhJywFNO9JpsR1uj6VB32DIKdyMdBTwL%2BubiEfqmusaPit9NtQKCXYzpPYaPIQuJduNrfG%2BMl5qlzUJTNFmQs6MRu2cw9CMnTTOw7UA18ZjUIJxAISRNmMtOWTXwyCjfLcSazBz6MlXq5OOHf5QhSXQYXS0neukh322%2Fd5cusfKxPC8SQuVcSobPi4a18EA2%2FIi5%2BOO0%2BlyPFNrg3gq4JtJw58Mz1Q0xHGSQJJReVRmQOB6tWQOHF%2FmRmj5F6kpjxRDjMqNBa8HOP0vpNRa8OhJM1sC4RlMsB%2Bm3%2B1OvB%2B1fLvlApKQWeuZjOWmhuwhjP%2FZUisw4reUvQY6pgGq6y2bLuNdari93fbSb4pYPany3%2BDalFZPCOlN0vk7Pl48mD3PEFSEUyBhB6N%2Ft1jQgtHLdZg9y%2F5%2BDi1e%2BzCVNXJpfI6qFDYPmvfyywm%2B%2BY4i1N6NYu3xAOx%2FnKgrlDHPwyjNMbwPmXZO%2F6wnFVqv7ruftclxrradpTOUunLfbs%2BAii65ly%2F5hEHpP%2Byv1ucq9%2F7Q4%2Fy2Ogg8QL8m3CnWWrYGov9X&X-Amz-Signature=fec8fe68b6725541b7547a9e06882131dcf57ca00a3335efe47fe7da4e21b015&X-Amz-SignedHeaders=host&x-id=GetObject)


### 转账交易


![transaction.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/65593d3b-9b56-4fbe-a383-1447c903127f/transaction.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HG2MVL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T213132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAHOXxG3w09ba7mXGoaogzWo2azRRlM7CdEb1KwPf910AiABZhLjRjNEq54cmQzAHXOPNlRFni1usIhwAULudvp9HSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqIw2g8OTgIDkqVF8KtwDQxqdrdhfSG8Hf%2B%2FWsZKI6biSKRyGoE9insFu3blV%2FGNWZ%2FVWwkLxJvRHf5%2BuKzudmllpluJ0cWQqhZfwuT8MWZkk9rQOK7xdZSDJEfV3XHzQUhQTy8vFd5TLbpk0OcOAU%2F685Qyb56wrqhoxZeX2FHmhtawMh%2B2jHYptgP5eLJ%2Bz44VlRpaQ2%2BqN1vGIL2lz0RKffXakQ4wJgjHWmX1gb3TVYdvSPuv58exaWFa4jyy952dmmyEpgcQOsynN9aHYgAT6n9%2FQEWv2TpUZ6uI7G1F3Ykaluk8fjDQ0HwKkoQvKx1evIyrpGMhJywFNO9JpsR1uj6VB32DIKdyMdBTwL%2BubiEfqmusaPit9NtQKCXYzpPYaPIQuJduNrfG%2BMl5qlzUJTNFmQs6MRu2cw9CMnTTOw7UA18ZjUIJxAISRNmMtOWTXwyCjfLcSazBz6MlXq5OOHf5QhSXQYXS0neukh322%2Fd5cusfKxPC8SQuVcSobPi4a18EA2%2FIi5%2BOO0%2BlyPFNrg3gq4JtJw58Mz1Q0xHGSQJJReVRmQOB6tWQOHF%2FmRmj5F6kpjxRDjMqNBa8HOP0vpNRa8OhJM1sC4RlMsB%2Bm3%2B1OvB%2B1fLvlApKQWeuZjOWmhuwhjP%2FZUisw4reUvQY6pgGq6y2bLuNdari93fbSb4pYPany3%2BDalFZPCOlN0vk7Pl48mD3PEFSEUyBhB6N%2Ft1jQgtHLdZg9y%2F5%2BDi1e%2BzCVNXJpfI6qFDYPmvfyywm%2B%2BY4i1N6NYu3xAOx%2FnKgrlDHPwyjNMbwPmXZO%2F6wnFVqv7ruftclxrradpTOUunLfbs%2BAii65ly%2F5hEHpP%2Byv1ucq9%2F7Q4%2Fy2Ogg8QL8m3CnWWrYGov9X&X-Amz-Signature=c65f067cd5d1c925075241d6959be6cf793d1265bcb54b5928d764484c8a7eab&X-Amz-SignedHeaders=host&x-id=GetObject)


### 交易信息


![hash-info.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7b9b0ba8-edf2-4998-9e9d-9cde7a64aa23/hash-info.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HG2MVL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T213132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAHOXxG3w09ba7mXGoaogzWo2azRRlM7CdEb1KwPf910AiABZhLjRjNEq54cmQzAHXOPNlRFni1usIhwAULudvp9HSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqIw2g8OTgIDkqVF8KtwDQxqdrdhfSG8Hf%2B%2FWsZKI6biSKRyGoE9insFu3blV%2FGNWZ%2FVWwkLxJvRHf5%2BuKzudmllpluJ0cWQqhZfwuT8MWZkk9rQOK7xdZSDJEfV3XHzQUhQTy8vFd5TLbpk0OcOAU%2F685Qyb56wrqhoxZeX2FHmhtawMh%2B2jHYptgP5eLJ%2Bz44VlRpaQ2%2BqN1vGIL2lz0RKffXakQ4wJgjHWmX1gb3TVYdvSPuv58exaWFa4jyy952dmmyEpgcQOsynN9aHYgAT6n9%2FQEWv2TpUZ6uI7G1F3Ykaluk8fjDQ0HwKkoQvKx1evIyrpGMhJywFNO9JpsR1uj6VB32DIKdyMdBTwL%2BubiEfqmusaPit9NtQKCXYzpPYaPIQuJduNrfG%2BMl5qlzUJTNFmQs6MRu2cw9CMnTTOw7UA18ZjUIJxAISRNmMtOWTXwyCjfLcSazBz6MlXq5OOHf5QhSXQYXS0neukh322%2Fd5cusfKxPC8SQuVcSobPi4a18EA2%2FIi5%2BOO0%2BlyPFNrg3gq4JtJw58Mz1Q0xHGSQJJReVRmQOB6tWQOHF%2FmRmj5F6kpjxRDjMqNBa8HOP0vpNRa8OhJM1sC4RlMsB%2Bm3%2B1OvB%2B1fLvlApKQWeuZjOWmhuwhjP%2FZUisw4reUvQY6pgGq6y2bLuNdari93fbSb4pYPany3%2BDalFZPCOlN0vk7Pl48mD3PEFSEUyBhB6N%2Ft1jQgtHLdZg9y%2F5%2BDi1e%2BzCVNXJpfI6qFDYPmvfyywm%2B%2BY4i1N6NYu3xAOx%2FnKgrlDHPwyjNMbwPmXZO%2F6wnFVqv7ruftclxrradpTOUunLfbs%2BAii65ly%2F5hEHpP%2Byv1ucq9%2F7Q4%2Fy2Ogg8QL8m3CnWWrYGov9X&X-Amz-Signature=5b2372cc0977f19286800b3ea55dc6fb47ddb87dd50b15ef5685e39cc04aa37d&X-Amz-SignedHeaders=host&x-id=GetObject)


由于官方提供的文档为英文，且文档中仓库信息发生过变更，我手动将doc.substrate.io翻译为中文了，为不熟悉英文的朋友提供帮助


[ Substrate中文文档(非官方)](https://substrate-docs.pages.dev/en/tutorials/build-a-blockchain/?mode=light)

