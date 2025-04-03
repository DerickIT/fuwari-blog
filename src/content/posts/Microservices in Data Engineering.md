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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4e0f8d5d-b295-4408-9363-660688d511a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNZABWN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T053845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDdPsj3DBRyulm1GCGP5dO6x%2BK1m8Xwk1eZtGIA0NlhfQIgE7CPtSDjEte9p2f4qafrbrWckyGqwBiD1er4fyJ%2FkXwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgllvaTodFWKz2LtyrcA0sAM%2FlhbqwtfsrGkUqgMYhKyf5wjVQxerndn9olhKuJyy6vOUlvB3NmRK3J0%2BGgKWhpthqvU12cttNFV17OvYVhhY%2B6syrn3TiOrnT%2FHFeh0hQC8B4oqc%2Fw3BdlNgE3oPW%2F3jRS3U8YGSvkvAd4V7YiO5KYSi4%2B%2B5%2B30CpnPOFhzcsdJ7yfCQf1b9BQQmGechp71j8dbjb3La%2BGPHsNKqjZdfJQGUQAeqvxC%2BGsDaLA%2F7hf9jib4YhALMVpOX7Munswho3rL4N0Cb0TFazDYP%2FRttgqm6eWMoExEoPyyK99uDHDQZsGdQx464p5lewIv7COTiRhF0Nzb9WnIuZzR5XjbVP3wxZNkAJ5ZLzWtp0SQYQt%2Bs5BSRQnFMO5Mg8FIFiENDteR8RFhRn5dsVsEBMJn86xnG2AwpSDFAVlDFLWrovqzzM8ac8gcQeZGgAtejMXc39DdhoHVk3MuM3KmvS10zapUCzEVk7wN8zl%2Ft%2B7bD6CPPg%2B%2BtBuodnxWk8WmMrWdCLclQQwIUEG2ixMa1wd0lbhR6UCf9N%2BkblsueL2Ryh%2FvAvOQm6nEwUCiiUtRATIldR8s0lVECwntvm0poKxwt%2BbtkSVngPUXpxk7Ke98w8FfueZcS11YfM0MPysuL8GOqUBntY%2F2FNlyAMIw%2FR5Y65tkbqaD49je9vTHSVEieyNv5rSYmaY6udlxuhuH%2B7%2BsXeNVK9nxIzsidLzk54AdnenTaXQfph%2F0T5TGDp15rQuOAG9ACynAnU%2BpBArfq2M6bggRU4X85hjHgHA2%2FZL3dWy7Y3xCMSQzYOUreDhb9A5Z7PDtIBMrgaR7PvqWOZp3aFV5xjnBPHHRVbua%2FHFPZobXNXGoklS&X-Amz-Signature=aa549ea7a7bea11645723113d8e74071b0b89f3d6c19940a1e2fcbac3f202042&X-Amz-SignedHeaders=host&x-id=GetObject)


正如我们从架构中可以看到,微服务的作用仅仅是原始数据的纯粹摄取,没有其他功能。这个解决方案使我们的团队能够从Eventhub大规模地持续摄取数据,并在ETL执行频率方面给了我们很大的灵活性。我们每分钟都有数据落地到Azure存储,然后我们使用Databricks的Autoloader对其进行增量加载、转换并准备在Power BI中报告。我们可以近乎实时地运行Databricks管道,或者每天运行一次,根据我们的需要而定。但是成本要低得多,否则我们即使不需要,也不得不使用Eventhub capture或Spark streaming。


然后,我们开始从接收来自API网关的所有消息的主题中摄取数据,每天300 GB。微服务甚至没有畏缩,它们工作得非常出色。即使其他从未使用过Golang的团队成员也能在几分钟内创建和部署它们。


### 为什么选择Golang?


数据工程团队的大多数人主要擅长使用`Python`。然而对于这种类型的项目,我认为一种专门为后端和高吞吐量工作负载设计的静态类型语言会是更好的选择。


后端团队的大多数微服务都是用Java和Golang编写的,所以我决定使用Go。在几周内,我学习了该语言的基础知识,并开始在业余时间尝试这些想法。使用Go而不是Python的另一个优势是,后端团队已经有许多DevOps管道用于测试、检查、构件、部署等(而Python没有)。此外,如果我们遇到紧急情况,公司内部会有必要的技能组合。

