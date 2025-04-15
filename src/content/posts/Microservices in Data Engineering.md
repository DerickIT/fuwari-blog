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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4e0f8d5d-b295-4408-9363-660688d511a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IYOBCC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dzuZYODcnmw6lmA06R75hXzvKL1DyS5TZhkasnXwJAIhAPxJc8yIWW04c6aKGdM3lNuB93Ynfo6KuUjjYHbe7u0PKv8DCDQQABoMNjM3NDIzMTgzODA1IgzNFZmW8HmKZb95HCQq3ANY2OIT7h7edmVlVizTLTM6grD7ovWGQ1pnazOGa1c3nY9ymhmo%2FWGK3EJod2Fmy91fJY3dV6181OsOgEGTtXhPj0FjVTf1kUCj3zC0x%2FLqQhK6VUzAoO4btrdi4cp7Tn8s9gPbMbAihFf8kpnF3ZUPMVDntOVD%2FKxmLBY809XpKF%2Femo4dxTx9gq9bpNm9AhH6GwZe4jmZh5c3sPw7Vu6LU7ymMiWQhE3pNcsuVrlroE90S2TDV9kpgvZg1Zw1LdZg8mwa%2FoNvgqgImtuC6ZOX2MSKtszVFGYzf7midEupqx2Y9JvclF0YMShaJT7NiZ334GzpVTV5ZzUV8oIuMWs8WYVfQhtG8c4palzZ0hwA4zf1pSOSTsfIH8NZyzZXBLBp7iWTPTEYsd81oDkpoOYyCoz%2Bx5ETKVmEY2lk2bgZnmPh8yfKOPzUmCsmUFnqQuwhiO0mM7eRZnHhW1EZzCCrbCcjNB7Qm%2F0b6jySnDN1SMZnIALRYfQ%2BjQkGyQNBemqsgLASAm6JcAHr95pQE3TSSvZ4ud9k88b05SwjmAv6vPG0hco%2BmQo9nICBCd1Dr4xS4VCE01x0gCnb2rdwMMaxe8pr5LIeugw%2B35EFjn1sA5Dt%2B%2FFDinSvug%2FC%2BjCW1fq%2FBjqkAUXyvlKrpMsHPLvYGjEarY8Eukn7FBpfe8CBYNUotUVITs6NiBk%2BjzuI7aJRFANo33OTDoGfomqpQ08uKWCiHbWBoC4pdbBGKmgEPYhjHPR4SyFiVnUY4aitKNZ%2Fng%2BnmxcJMog7y4ADNoLtvtjQOp%2By3YfzZbdcrfBkjpsFcxlYbJkdEb2CJfoXoxZg%2FKoQnElTSVlA17iISFB9DRhG%2FH2tvRwG&X-Amz-Signature=817e382e9f9406e7803b465378b2a39c2cb300c564ef4604d4fea5b912ec8398&X-Amz-SignedHeaders=host&x-id=GetObject)


正如我们从架构中可以看到,微服务的作用仅仅是原始数据的纯粹摄取,没有其他功能。这个解决方案使我们的团队能够从Eventhub大规模地持续摄取数据,并在ETL执行频率方面给了我们很大的灵活性。我们每分钟都有数据落地到Azure存储,然后我们使用Databricks的Autoloader对其进行增量加载、转换并准备在Power BI中报告。我们可以近乎实时地运行Databricks管道,或者每天运行一次,根据我们的需要而定。但是成本要低得多,否则我们即使不需要,也不得不使用Eventhub capture或Spark streaming。


然后,我们开始从接收来自API网关的所有消息的主题中摄取数据,每天300 GB。微服务甚至没有畏缩,它们工作得非常出色。即使其他从未使用过Golang的团队成员也能在几分钟内创建和部署它们。


### 为什么选择Golang?


数据工程团队的大多数人主要擅长使用`Python`。然而对于这种类型的项目,我认为一种专门为后端和高吞吐量工作负载设计的静态类型语言会是更好的选择。


后端团队的大多数微服务都是用Java和Golang编写的,所以我决定使用Go。在几周内,我学习了该语言的基础知识,并开始在业余时间尝试这些想法。使用Go而不是Python的另一个优势是,后端团队已经有许多DevOps管道用于测试、检查、构件、部署等(而Python没有)。此外,如果我们遇到紧急情况,公司内部会有必要的技能组合。

