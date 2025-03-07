---
category: Ethereum
tags:
  - Rust
  - Smart Contract
  - Web3
  - DeFi
  - DEX
status: 已发布
catalog: []
slug: building-evm-transaction-monitoring-system
title: 监控EVM交易数据分析工具设计
urlname: 161aa09a-108e-80eb-9287-fdb40db139a6
date: '2024-12-19 22:39:00'
updated: '2024-12-19 23:20:00'
image: 'https://www.notion.so/images/page-cover/met_arnold_bocklin_1880.jpg'
published: 2024-09-19T08:00:00.000Z
---

:::tip


上个月完成了一个链下数据分析工具，现将详细设计文档记录，工具设计并不复杂，因数据分析对API调用次数较高，建议自建节点。


:::


## 项目介绍


本工具是一个用于分析EVM链中特定区块并行交易执行的工具。监控链上出块数据，存入click house中跟踪交易状态，识别有价值的交易数据，目标是支持所有与EVM兼容的链，帮助交易员快速跟踪交易并监控执行。


## 功能介绍


本工具的主要功能包括：

- **区块数据获取**: 从指定的EVM兼容链获取区块数据，包括区块头和交易列表。
- **交易状态追踪**: 追踪每笔交易的执行状态，包括读取和写入的账户状态。
- **交易依赖分析**: 分析同一区块内交易之间的依赖关系，确定哪些交易可以并行执行。
- **API服务**: 提供API接口，用于查询分析结果，包括交易依赖图和并行分析器状态。

## 架构设计


该项目主要由以下几个模块组成：

- **`config`**: 负责加载和管理配置信息，包括执行API地址、起始区块号、服务器地址和数据库URL。
- **`log`**: 负责初始化日志系统。
- **`main`**: 项目的入口点，负责启动并行分析器和API服务器。
- **`parallel_analyzer`**: 核心模块，负责获取区块数据、追踪交易状态和分析交易依赖关系。
- **`server`**: 使用`axum`框架构建的API服务器，提供查询分析结果的接口。
- **`db`**: 负责与数据库交互，包括区块、交易、交易依赖图和并行分析器状态的存储和查询。
- **`handlers`**: 负责处理API请求，包括健康检查、交易依赖图查询和并行分析器状态查询。
- **`models`**: 定义数据模型，包括区块、交易和交易依赖图。

## `parallel_analyzer` 模块详解


### 功能设计


`parallel_analyzer` 模块是整个项目的核心，负责实现以下功能：

1. **初始化**:
    - 接收数据库连接、执行API地址、起始区块号和链ID作为参数。
    - 创建与执行API的连接客户端。
2. **区块数据获取**:
    - 根据区块号，从执行API获取完整的区块数据，包括区块头和交易列表。
    - 将区块数据和交易数据存储到数据库中。
3. **交易状态追踪**:
    - 使用执行API的`debug_trace_transaction`方法，获取每笔交易的执行状态。
    - 通过`PreStateConfig`配置，分别获取交易执行前的状态和执行后的状态差异。
    - 将账户状态转换为`StateSet`，包括余额、代码和存储的读取和写入集合。
4. **交易依赖分析**:
    - 遍历同一区块内的所有交易，比较每笔交易的读取集合和之前交易的写入集合。
    - 如果存在交集，则认为存在依赖关系，并记录到交易依赖图中。
    - 依赖关系类型包括余额依赖、代码依赖和存储依赖。
5. **运行**:
    - 从起始区块号开始，循环分析每个区块，直到最新区块。
    - 每次分析完一个区块，更新并行分析器状态。

### 详细实现方式

1. **数据结构**:
    - `ParallelAnalyzer`: 主结构体，包含数据库连接、执行API客户端、起始区块号和链ID。
    - `StateSet`: 表示账户状态的集合，包括余额集合、代码集合和存储集合。
    - `TransactionStateSet`: 表示交易的状态集合，包括读取集合和写入集合。
2. **`new`** **方法**:
    - 创建`ParallelAnalyzer`实例，初始化执行API客户端。
3. **`get_block_transactions`** **方法**:
    - 使用`execution_api_client`的`get_block_by_number`方法，获取指定区块的完整数据。
    - 将区块数据存储到数据库的`block`表中。
    - 将交易数据存储到数据库的`transaction`表中。
4. **`trace_transaction_state`** **方法**:
    - 使用`execution_api_client`的`debug_trace_transaction`方法，获取交易的执行状态。
    - 第一次调用`debug_trace_transaction`，使用默认的`PreStateConfig`，获取交易执行前的状态。
    - 第二次调用`debug_trace_transaction`，使用`diff_mode`为`true`的`PreStateConfig`，获取交易执行后的状态差异。
    - 调用`account_state_to_set`方法，将账户状态转换为`StateSet`。
    - 返回包含读取集合和写入集合的`TransactionStateSet`。
5. **`analyse_block`** **方法**:
    - 调用`get_block_transactions`方法，获取区块的交易列表。
    - 遍历交易列表，调用`trace_transaction_state`方法，获取每笔交易的状态集合。
    - 遍历交易状态集合，比较每笔交易的读取集合和之前交易的写入集合，使用`check_tx_dependency`方法判断是否存在依赖关系。
    - 如果存在依赖关系，将依赖关系信息存储到数据库的`transaction_dag`表中。
    - 更新并行分析器状态，包括最新分析的区块号和最新区块号。
6. **`run`** **方法**:
    - 从起始区块号开始，循环分析每个区块。
    - 每次分析完一个区块，将区块号加1。
    - 如果当前区块号大于最新区块号，则等待一段时间后继续分析。
7. **`account_state_to_set`** **函数**:
    - 将账户状态转换为`StateSet`，包括余额集合、代码集合和存储集合。
8. **`check_tx_dependency`** **函数**:
    - 比较两个交易状态集合的读取集合和写入集合，判断是否存在依赖关系。
    - 如果存在余额依赖，则返回`0x1`。
    - 如果存在代码依赖，则返回`0x10`。
    - 如果存在存储依赖，则返回`0x100`。
    - 如果不存在依赖关系，则返回`0`。

## `handlers` 模块详解


### 功能设计


`handlers` 模块负责处理API请求，并将请求转发到相应的处理函数。它主要包含以下功能：

1. **通用处理**:
    - `handle_panic`: 处理服务器内部的panic错误，返回500状态码和错误信息。
    - `handle_404`: 处理找不到资源的请求，返回404状态码和错误信息。
    - `health_check`: 提供健康检查接口，用于检查服务器是否正常运行。
2. **交易依赖图处理**:
    - `handle_transaction_dag`: 处理查询交易依赖图的请求，返回指定区块的交易列表和依赖关系。
3. **并行分析器状态处理**:
    - `handle_parallel_analyzer_state`: 处理查询并行分析器状态的请求，返回当前分析器的状态信息。

### 详细实现方式

1. **`common.rs`**:
    - `handle_panic` 函数：
        - 接收一个 `Box<dyn Any + Send + 'static>` 类型的错误信息。
        - 尝试将错误信息转换为 `String` 或 `&str` 类型，获取详细的错误信息。
        - 记录错误日志，并返回500状态码和错误信息。
    - `handle_404` 函数：
        - 返回404状态码和默认的错误信息。
    - `health_check` 函数：
        - 接收 `ServerState` 作为状态参数。
        - 返回200状态码和空的 `HealthResp` 对象。
2. **`transaction_dag.rs`**:
    - `handle_transaction_dag` 函数：
        - 接收 `ServerState` 作为状态参数，以及 `TransactionDagQuery` 作为查询参数。
        - 如果查询参数中包含 `block_number`，则使用该区块号；否则，使用最新区块号减去10作为默认区块号。
        - 从数据库中获取指定区块号的交易列表和交易依赖图。
        - 将交易数据和依赖关系数据转换为 `TransactionDagResponse` 对象，并返回。
    - `handle_parallel_analyzer_state` 函数：
        - 接收 `ServerState` 作为状态参数。
        - 从数据库中获取当前链ID的并行分析器状态。
        - 将并行分析器状态转换为 `ParallelAnalyzerStateResp` 对象，并返回。
3. **`mod.rs`**:
    - 声明 `common` 和 `transaction_dag` 模块，使其内容可以被其他模块访问。

### 交互逻辑

1. **API请求**:
    - 客户端发送API请求到服务器。
    - `axum` 框架根据请求的路径，将请求路由到相应的处理函数。
2. **数据获取**:
    - 处理函数从 `ServerState` 中获取数据库连接和执行API客户端。
    - 处理函数使用数据库连接查询数据库，获取所需的数据。
    - 处理函数使用执行API客户端查询区块链数据。
3. **数据处理**:
    - 处理函数将从数据库和区块链获取的数据转换为相应的响应对象。
4. **API响应**:
    - 处理函数将响应对象转换为JSON格式，并返回给客户端。

## 功能实现原理

1. **数据获取**:
    - 通过配置的执行API地址，使用`alloy`库获取指定区块的完整数据，包括区块头和交易列表。
    - 将区块数据和交易数据存储到数据库中。
2. **交易状态追踪**:
    - 使用`alloy`库的`debug_trace_transaction`方法，获取每笔交易的执行状态，包括读取和写入的账户状态。
    - 通过`PreStateConfig`配置，分别获取交易执行前的状态和执行后的状态差异。
    - 将账户状态转换为`StateSet`，包括余额、代码和存储的读取和写入集合。
3. **交易依赖分析**:
    - 遍历同一区块内的所有交易，比较每笔交易的读取集合和之前交易的写入集合。
    - 如果存在交集，则认为存在依赖关系，并记录到交易依赖图中。
    - 依赖关系类型包括余额依赖、代码依赖和存储依赖。
4. **API服务**:
    - 使用`axum`框架构建API服务器，提供以下接口：
        - `/health`: 健康检查接口。
        - `/data/evm/transaction-dag`: 查询交易依赖图接口。
        - `/data/evm/parallel-analyzer-state`: 查询并行分析器状态接口。
    - 使用`tower-http`库提供CORS支持和panic处理。
