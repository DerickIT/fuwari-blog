---
category: QuickTechBites
tags:
  - ArchitectureDesign
status: 已发布
catalog: []
slug: solid-design-principles
title: SOLID设计原则
urlname: 2d810f8c-f950-406c-8d0b-faa4a27fd21b
date: '2023-11-12 23:08:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1620.jpg'
published: 2019-11-12T08:00:00.000Z
---

**SOLID** 原则是**面向对象编程(OOP)**的关键. 但每项原则的实际含义是什么？它们为何如此重要？


**SOLID**代表**面向对象编程(OOP)**的五个原则。无论你是否使用OOP，知道这些原则都能让你深入了解干净代码的基础，这些代码可以应用于许多编程领域。

- 𝗦 — 单一职责原则
- 𝗢 — 对扩展开放，对修改关闭原则
- 𝗟 — 里氏替换原则
- 𝗜 — 接口隔离原则
- 𝗗 — 依赖倒置原则

下面分析每个原则 ↓


𝟭. 𝗦𝗶𝗻𝗴𝗹𝗲 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗦𝗥𝗣)


每个代码单元应该只有一个工作或职责。单元可以是类、模块、函数或组件。这使代码保持模块化，并消除了紧密耦合的风险。


𝟮. 𝗢𝗽𝗲𝗻-𝗖𝗹𝗼𝘀𝗲𝗱 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗢𝗖𝗣)


代码单元应该对扩展开放，但对修改关闭。您应该能够使用附加代码扩展功能，而不是修改现有代码。这个原则可以应用于基于组件的系统，比如React前端。


𝟯. 𝗟𝗶𝘀𝗸𝗼𝘃 𝗦𝘂𝗯𝘀𝘁𝗶𝘁𝘂𝘁𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗟𝗦𝗣)


你应该能够用子类的基类替换它。换句话说，基类中的所有功能都应该被它的所有子类利用。如果不能，它就不应该在基类中。


Bird基类就是一个例子。您可能会认为它应该有一个fly方法。但是那些不会飞的鸟呢?像企鹅一样。
在本例中，fly不应该在基类中，因为它并不适用于所有子类。


𝟰. 𝗜𝗻𝘁𝗲𝗿𝗳𝗮𝗰𝗲 𝗦𝗲𝗴𝗿𝗲𝗴𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗜𝗦𝗣)


提供具有特定职责的多个接口，而不是一小组通用接口。客户端不需要知道与他们的用例无关的方法和属性。


复杂性↓
代码灵活性↑


𝟱. 𝗗𝗲𝗽𝗲𝗻𝗱𝗲𝗻𝗰𝘆 𝗜𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗗𝗜𝗣)


你应该依赖抽象类，而不是具体类。使用抽象来解耦系统不同部分之间的依赖关系。代码单元之间不应该直接调用，而应该使用接口或抽象


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677X7Y2CI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCjvH8tU1%2BTHujwDIBbEiz39WGFKcE9zyOin%2BF9FqO2ggIgXqIFW%2BHflTmJA7i3RZpKFxiKk0XI6P%2FpnsCz8Sr91OEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA5PY4th3gQxHwPodSrcA1wfdNdl8ZBLSrDwCMhPxJWV38%2F32kZxNKD1vsjOsF0vU8kbcIKvg2KaamFJjQ%2Fsl5jI4cQh56kXaWyZqzI9yWinmyTia8xCL0J6gvD2BxHhS1%2FphVUpYKt9YD2NzuE1qG%2Bes5S2UTBtwLlgyrzmJhYk8bv1eQAOfIKE3G%2BtvO1Q6quGCEpn43T2IBP3kxPb9uycI1VcHOkejg%2FkuqsCOPZ6o8ow8HyINqwIUheAhUEoymT1inpXf%2BMTS4mMmabBuASR%2BatOlr0eXJLZL%2BMLTOBwcptUSoWEl6GLxYLk1xuTC6bdTIFedyQhLUROWn7DwudbYM1nnELz4BKDUuPfDEXsX82rE6YlJP1yi6vXzRgMFk%2BuwAnjUsF1VEz5hcMXr3mCLbc62SoL99mpzXsolcJUVNLVQmTz1%2FO%2BF7ME4jiPRFeKfKRu7U4EsHtllYWVfZ2a1RhhUxOy49u5GfJ7iocuLILhpjKtim4qCCF3lDSIYb4xhF4xRxCkvmLla3G7IVWuaUKcVhZTKm0a4iCiefnb46Vqd1rhBbrcenJmGL53c8YZklePXo92BbS0BYHm1KxtkpCBuh%2B5fhUYy0s95rzrRmhK5QYnEfLpGzb93qyot%2BNxS1bi9ETNI4t1MOu%2Fob8GOqUBaCvAVSq%2BIood83g4ex7E%2B38vzUw9X%2FwAtmqm60y0I6gM25mpMzNx43djBRDpQcFaapRehsK7PAiKS4leskdT4%2F3DICNPiSwasSFNfmyYyv74Q9q%2BmGBa0vUZzXaaxG2S%2BWNx%2Buottwc2DTUO15H5%2BxfXoZEj%2BxfB%2FuCu70JqyCprrs1V8BfPHLt4GHjxBo%2BlKC155T0YysYq%2BaKioR5S9ueFrxd0&X-Amz-Signature=f487a7daa4dbead39f4068aa96e7e78f57b452d84969f82fb254bec5b07ab455&X-Amz-SignedHeaders=host&x-id=GetObject)

