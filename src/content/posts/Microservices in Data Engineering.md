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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4e0f8d5d-b295-4408-9363-660688d511a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVUX2CS%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T213517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN2xUth%2FfvTmmnJvjmGOVi3DPBbnyKh9tWlqBV90v4lAIhAPm4OPlOVCJMLVDeeho80mJcsukHuJU1Ae%2FWYrtpxsGrKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuqT0iWJ5mdr888EEq3ANY4OBhAU6bI6cXfz98UK2KZosTzi3Dr5C9IXBkObUnGdtdyHDohLlRXskM7lc4oR0vgeFqxj8lJrkzuN01w%2B3UVMjrjJZcBETbmUBk6bRAZFEcmL%2FqRLnRaJBsl9C8stYxatcqnmFihqMtfq3EQj%2Fvij%2FXzRfYH3iFHG%2BHvy22d8aK8puGSrT5pdxoH001Qx4e0278JZbW9GbRiu1zwrNna4ctaQ88vtmhkWtABOL5gfk%2B3%2BJ18IjUWcYEB3ZiirveRw5IL071Bq6vDNVM%2FAMjF7AzbRRfXze690O9H0QMS1XUir%2FygFbzyM2jlylEAaQS5pYjmRwd5hULrCLHjZEadAiG3CrgKk9XPpnWfa0C1%2FjjusnF5N0rhH04ezgIDR%2Fc4nDN%2BjxOM%2FGsenov4Mo3tAVLd9F4HXVt9yATkjd0Fj8zYkeG6XD76eL4zKSAhUdwBkGVaz7NvnBGFhxcVpBl3qP9e%2FDWx0d3groO072ATt0w3mpub5GPIcAR83x%2F0I4%2B7UZQAyJxvB5bElFAmctSZSLRVB6YhcJBqTJez9nq4gFfVxM63G%2BQHfbtruUbM%2BrGHkOlMqG4gGHMj3Ob%2By6LfpdVBZucGjAcgDvjyEYqCzb1I%2BsOr%2BHSG%2B56vTC3sdK%2BBjqkAY0iSQCcWYTbq1yQP%2Bcn4%2FoEDZdF%2Bw1y%2FGuuT01ozbDg96J9QaWlEVg1g9A3CmVzWVpQkg5GVNk%2BY4LEEDqXVpaEbG1XyjHgq8%2FYH%2BOxaFNCUsmRK6351fMDYh4%2FcKkmyyfJAPUUdzqClTE5Br9J6x5JscfSQ3idEyw8YmNaoG5%2Fl%2FBnoPNQosJXt8Qai7hAxEUBDrj1eU4%2BOYxtcn3MkyV7kZHl&X-Amz-Signature=2232c4677b3b9847e1bbf867335b535596bcdac8751b0879163b7fd01ec31d3a&X-Amz-SignedHeaders=host&x-id=GetObject)


正如我们从架构中可以看到,微服务的作用仅仅是原始数据的纯粹摄取,没有其他功能。这个解决方案使我们的团队能够从Eventhub大规模地持续摄取数据,并在ETL执行频率方面给了我们很大的灵活性。我们每分钟都有数据落地到Azure存储,然后我们使用Databricks的Autoloader对其进行增量加载、转换并准备在Power BI中报告。我们可以近乎实时地运行Databricks管道,或者每天运行一次,根据我们的需要而定。但是成本要低得多,否则我们即使不需要,也不得不使用Eventhub capture或Spark streaming。


然后,我们开始从接收来自API网关的所有消息的主题中摄取数据,每天300 GB。微服务甚至没有畏缩,它们工作得非常出色。即使其他从未使用过Golang的团队成员也能在几分钟内创建和部署它们。


### 为什么选择Golang?


数据工程团队的大多数人主要擅长使用`Python`。然而对于这种类型的项目,我认为一种专门为后端和高吞吐量工作负载设计的静态类型语言会是更好的选择。


后端团队的大多数微服务都是用Java和Golang编写的,所以我决定使用Go。在几周内,我学习了该语言的基础知识,并开始在业余时间尝试这些想法。使用Go而不是Python的另一个优势是,后端团队已经有许多DevOps管道用于测试、检查、构件、部署等(而Python没有)。此外,如果我们遇到紧急情况,公司内部会有必要的技能组合。

