---
category: TechKnowledgeShare
tags:
  - Golang
  - ArchitectureDesign
  - Cache
status: 已发布
catalog: []
slug: microservices-in-data-engineering
title: Microservices in Data Engineering
urlname: 7f279ea0-883d-426a-b803-34c09b27d574
date: '2024-04-12 00:10:00'
updated: '2024-09-07 17:44:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1875.jpg'
published: 2024-04-11T08:00:00.000Z
---

### 介绍


在阅读了Daniel Beach的一篇关于在数据工程领域使用微服务的机会的文章([https://dataengineeringcentral.substack.com/p/microservices-for-data-engineering](https://dataengineeringcentral.substack.com/p/microservices-for-data-engineering))后,我受到启发,分享我在这方面的经验。


去年,我用Golang开发了自己的Kafka Connect实现,以从许多主题中摄取数据。让我们看看是如何做到的。


先前解决方案的问题


技术栈是Azure Eventhub作为消息系统,Kubernetes和Databricks。后端团队有数百个通过Eventhub进行通信的微服务。数据工程团队需要从其中许多微服务中摄取数据。现有的解决方案是使用Eventhub Capture服务,只需几次点击,就可以配置从Eventhub队列到数据湖的数据摄取,并以Avro格式定期存储。


该解决方案运行良好,但成本高昂,整个公司Eventhub成本的一半是由于捕获服务造成的。而我们甚至还没有开始从吞吐量最高的队列(每天300 GB)中捕获事件。


### 项目需求


新的解决方案应该是:

- 更便宜
- 高效
- 标准化且可复制,适用于尽可能多的主题
- 易于部署和配置
- 易于维护

我提出的解决方案是用`Golang`开发两个模块。一个用于管理`Consumer`配置和高级逻辑,另一个用于实现数据摄取逻辑(如将消息批量写入文件,然后确认消息)。然后,我会为每个Eventhub主题部署一个微服务。在每个微服务中,唯一的代码就是导入数据摄取模块并调用摄取启动函数。其余的都是包含Kubernetes、Eventhub、secrets等配置的Yaml文件。因此,要创建和部署一个新的微服务,我只需复制现有的一个,在VS Code中用简单的替换更改配置变量的名称,并在需要时更新Kubernetes的RAM和CPU值。就是这样,在5分钟内我就可以准备好部署它。


微服务创建的文件格式是包含多行json的Txt。原因是没有使用`schema registry`。因此,无法管理模式演化,我们会丢失新字段。将其与`schema registry`和`parquet`文件格式一起使用,并检查性能,这将是很有趣的。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4e0f8d5d-b295-4408-9363-660688d511a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQHVTCC%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDBArPDqQTo6xKD9hIpyELa%2BwPEyEF11n0gBvm91VokJwIhAO4IWFppfsPbvtMGoGvV7YMv9cjatTmdrte5gw2mmyxBKv8DCE4QABoMNjM3NDIzMTgzODA1IgxZ52dt0vwZER8e31kq3ANkU%2BC3%2F5wRTWBt%2FbQxuSinj4WQzYf79lLFeq4Y4EWmW1dNnCXaGHpms9SGfQiKvKfIlGV93QSKlabuJMZVhzdqddidT95Ml1hjLQijFBQ2JaQlysneMBhaTJieJ62RXGOqo5GHf33Qyb830QZf3sIxOkCUS5WVp%2FXCBKOy996P6yR2FSLeG8B7%2BBXRQqZmSCo2e%2BipdnXipH%2FK39LANAYlHU%2FlsJvfwwgF8sJL8AZNk96PK7%2BOV5byOTLSb4rgdaplOuxqIYMrzAEgdapgCoZg3%2Fupl71zjFvn6%2FKK%2FcWhTdb4yDs1dA5UMcWrB3w%2Fllb0zzSpYpNZ6iitmLC8og8fx9nnasZytKsuiUTnyNVR7NELO826BDF5%2B7PKccexasFeb%2BRnphly9dSxzjcjuQKMn%2BfGY7twWLpVxKBPiM4KObFXqk0sEc33Llw0LfbR3q11vlxPG8tEoD8ceJrHyqBhDD1rlyDPk1emVH27CFDa0kOp0e3VuVtwJloInVwZc3jd8rSGV46WsxvHhxFulk7sfvaQvkUh%2F4GPwnExW8OYGhJ81T5zB6nf5utG6M0%2FIM1uIc97XOG%2Be3u3MFgnBj7%2FkU63rq5z69sT%2FEjAb8j9gKSyqj61pCx7s3KMKjDs4vi9BjqkAWD3S92IMrc36Rs6U6uz%2FHul8ucwlIbmjKuiG0jWVwVWEcg4iKyo9QP04mDior9nUjQ00%2Bn3QjDxGNMF%2BJBDvu6l1hYKtN0c8nJjuL2lLr0%2FmIHWGngh5lYoou2eytG3vTuk3D%2F8OMJFXXS%2B9VDhoacJhSstuD0ph3nWBe2zhZKv8N%2B9LYYUOGldeoHUlfPiM3eaHQ%2BlctB6XJpHpdLT%2BPX7Bm%2Fq&X-Amz-Signature=603a58ff5d7004d71d6a2205c5fa3f31ed0f9be17973ed640a67dfb5bdd1382d&X-Amz-SignedHeaders=host&x-id=GetObject)


正如我们从架构中可以看到,微服务的作用仅仅是原始数据的纯粹摄取,没有其他功能。这个解决方案使我们的团队能够从Eventhub大规模地持续摄取数据,并在ETL执行频率方面给了我们很大的灵活性。我们每分钟都有数据落地到Azure存储,然后我们使用Databricks的Autoloader对其进行增量加载、转换并准备在Power BI中报告。我们可以近乎实时地运行Databricks管道,或者每天运行一次,根据我们的需要而定。但是成本要低得多,否则我们即使不需要,也不得不使用Eventhub capture或Spark streaming。


然后,我们开始从接收来自API网关的所有消息的主题中摄取数据,每天300 GB。微服务甚至没有畏缩,它们工作得非常出色。即使其他从未使用过Golang的团队成员也能在几分钟内创建和部署它们。


### 为什么选择Golang?


数据工程团队的大多数人主要擅长使用`Python`。然而对于这种类型的项目,我认为一种专门为后端和高吞吐量工作负载设计的静态类型语言会是更好的选择。


后端团队的大多数微服务都是用Java和Golang编写的,所以我决定使用Go。在几周内,我学习了该语言的基础知识,并开始在业余时间尝试这些想法。使用Go而不是Python的另一个优势是,后端团队已经有许多DevOps管道用于测试、检查、构件、部署等(而Python没有)。此外,如果我们遇到紧急情况,公司内部会有必要的技能组合。

