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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7GMUMO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T053737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIC%2FzMpXq%2FtTymGmctX17kf3BB7bHwLEaX2fYBsJ4dgv%2BAiAS80OQ0vh4K6hUIPwvPrgDrm8gC3nQCLRQOVDeJpldlSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBeJZSTn00LtsSFBLKtwDR%2FdwbRycn4WUXewzGDO1vJuYc7ZUmOZ%2Bl8QwX929qSbzGLI5t1O3tQFuwhUjZf0vWvl%2BN%2BLTAxO8CeWWkCAkJOSLXgd0vEqeL1y5Y0rg95SW3%2Fqr6JECnch0x0u%2FIKHJDiq%2B0KxVWGIUhYneXoHkMEULUUNAwLvu8aMfy%2F8NBVCIssjy8zXKff7x2lF66WIqDXK2U1ZDHIp23VGE3gRz1f1%2FjM%2F%2BHQfcijx60OrBv0dZ1KeNZAG%2FyqymKDPK9p12qNYVOEqCXc%2F%2BGWZdDkG%2FzTd0vJB6TwIH%2B70gMp1s7fmCtuxHM8KTCw4EA1QyiDLioRklQ4lzsOkCzLqECAkMHRfKd6%2BlczGX88WzZy5jUwfnloV%2BDbYFOU%2FttgXE63XwJCQp8SDOMyCqyU12xOxCqwkPT7PnuBCUPqpPMDiISJRJPlYuthudcOXviddBzbNlydXjtbZHqI8fEX30khkbFB2N%2BkHrNx8O%2Fnta2Vu9OJeDRugwzivJniET9HaF4GZ3cuZCB6GbXFOOK2r5Vl7IL9pIOSe8kRH7AS6AHAuDLseDqLpx0bOa0zqzGbee0mIXMos26JF4T5JJE4Eb8imofXufJ%2BaUbR0qzjiCJPD4EFlxCYN0c5ndeoMeL3wwsuvnvwY6pgEOuw2Aux1dxlGH9PbVTg6UZ0ysp1DTHCDuJiOC315TItPduuShVlDXr3qOpmWd%2Bp3rds5d1kEpvk5dZ%2BNzBULOMhPo3O6effS%2BjcXF77TDX%2F1RDbw0vyZjnL3M1Z1XrcJ2F4YvH8%2Bnp%2FxM6T%2B9%2BO45Km8yquKNoBqRr8%2FAVSHNDiH43kLyeUAa56XeWJ85kbfWCYyRhEmySens7busMPq0vMwKK51t&X-Amz-Signature=7bca3ef05cdf64f1dc7643c1654151d8cdbb3b6b7d6e13882a5914932304c7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

