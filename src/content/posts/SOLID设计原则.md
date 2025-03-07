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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFCINE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T213333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCrzfLBfmx7oqepPmQjcCS%2BLVXAoxMbzY58Mbs8lhLNAIhAKDsxLcYJi3dqq08TBqIXzGK9oz1CE96ZL%2FZTQu%2BRc6xKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrdtjOmpZ0C3V%2Fs%2FAq3AOhl1WLJgnaIcfSgRYvSlr59TYN8dvhoKof%2FVQq5xJgLAN%2FWOgyIi%2Fi6D%2FE2bzwXTt60CZD27v1u3RR5mtUl8rXayXZARSLBUN6YQdO0%2Bf%2BY9zPhrrEN5ldqnLShEA0KZoM86B35R%2BtGL797praV0ShIt67L4dhne4ZrUrmcuMZm1z%2BYXQKVgSLUCaPtDYELh9P8yCCy5Uia4br9e7NJ1tGgAi4I96zkEvrrk52wyZgxYvimjttocrJURdFjZxY5JzGscpvRiwi3Mar5G3w0earHYxZOB41HEYWuew5MV1%2BM2CgpzGEFSpl3BVC48wEVBiXWZjtmKLTY2Lk0AJZa37DiQOv%2BFLX%2FJ4R6jEqq2%2Fu6X39IV%2B59rIZl6Pl6NDwV6kP7E4ipj%2Bi9fS%2FsP7EF3s%2FSKznXlYIzMOqhGqIfqYo%2FOfaxpTixFwJcDdhHHdDNZcn%2F%2BpDuMSt0ALb0wedaVYIY1qTFo9LHkBCIMbZECLlq8AS6bxtr2HOUu%2BpT%2FXTHzBND%2Fa7ZWKmtwCmNN6pmo2JBWn1BianfK54VJrOyP25E3oHOyjpBDLcLFD1kR3YXOP%2BCSPDOZhxFOyrBiyC9Q1%2BmMlnRisIZL60zaPmt7henQ0M%2Bhds5qb0tFG%2FUjCkva2%2BBjqkAXUmrLr6hbYmG%2Bt8ZTYNTS4YU43sEtWxJ%2B0IWv0MnLTsyK5EOPZt7%2B9Kaazsr7y%2FhkzDVttXX6jdSI7HqBltB5AynPjznGNTBZGzUxgXtdovGOi%2BKuBp6%2BJV9TupFmD5RCg2zA1nnFjCFhLUCdOg5eFD3AGgcUEV07i%2BPDMqdD24%2FV7eUKdmdAQbo%2BKM9Yxeolc27CczuATQLERI5egm6PmbuWd0&X-Amz-Signature=69921c61a944c18319de53093b3f0f98eb4ae47ebba71e282a5756740a29570f&X-Amz-SignedHeaders=host&x-id=GetObject)

