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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAO2TYBE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGlJ5KeeMLR%2F%2F5EVNVcfEaCMysz7E%2Bn5EtVE1dbkGUm7AiATmZ%2BlLz4k095GELTlrJdjfpLv4vMpfTYtKh9ruVXAoCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhgo9cKoxc6w%2B4GcdKtwDNCml1rH%2Feg7vcq2K7qXw2gTYQOIzVdDjTHGeJaRNfV41yQ31DoTae6eghoS4MWlN%2F1VvBWRW9WJbBJCvYpLrtIFs9YKCe6A5M5XdcCWvXb7twU5t1DS2ECsUd6dMazhApQaNNgTinoBdSgsQof4U9qEyDN54a2mIK08YLeFFIa%2B3icKEn3A7%2BxYaZSWtz7hCnH%2B0VQvCnOo2hUvv1nUMOY%2FtkoqR7Fvzci81NVkXSNJTGxK5xnFhs9X87gMZ5HvLGvqSfESEoHn6tcTMFj1MTOKNQP%2FKDPek7rqpBKdQ0DrZRK54UDeqgBuuZpAnyZSmXBCAI0yv%2FFp0o8E9CDQ0ru%2FIuCE3wPe1Siqx%2FCCLEv8Qsta8xHk7%2B9t6uN5cUmQ7JqYkstZrTiPwDrE7SxX4qAT8v5bMRZa2Rd2l%2BXnszzqnS8hsm%2B01V8Z%2BxSobMEyPUsgKVgrmlKZg575rbaX8gm%2B3nZh3d2eAXkcPKhnJm18yB6A89utdW0kK3kcEPHXh49I17miA6euPqEEdZEp4nZxi0T6LqVH62thgjiaZw1tABzHWm%2FWaGlhs2S44lwm8gY1Ada5mS4oDYs7h62pfCSjsXAph%2FO5mZuyhS%2BEBo%2Fo7nUhkU0De4w0bE8cw56y4vwY6pgFnSoFaGEi%2F%2B2K8CwcsLWGCooDk7tWGr6sPHv786Ur6uy3dHkhq4vsug4FfFGFkuuBoCYEpveV1Qff%2BpEqNVK67P7spBVs3lb6wXkNwT5e5Ps2JIgKTJgMf8TmeZY7vDD0ekdyRZWMmXRR3rYGbz6%2FSHpQILsMtcUzusFhcLkV8WuivcG6llvNWEMeE00R%2F696RZV4KcTdXzqN24R4VUzgHMRg%2BDtSE&X-Amz-Signature=8ece777fc02dc579552b839d1d2c60317d4b3d4f7ddf601230dff91b029bd595&X-Amz-SignedHeaders=host&x-id=GetObject)

