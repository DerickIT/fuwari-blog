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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWFG47L%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfhjgadYMD12uFyqC4uASIz5mVkGGe2AjchHUYS6m2DQIgSeqC8FoZMY5aPwqE%2FG5toa0X8au%2B%2FLYGSPwTPqA%2FDBYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxG1rOnKGi29Dg%2BvyrcAzmoYp3dViqxIsom%2B8J%2FxrtuaiJJBEOJz9H4D1PbgSLPOS8sBZN9nAbNcQz3ZUuMsnL9TH6atDYy9iiGb4a2VfmSRHlGvaUbpdDUjLbLEmMYhE4gV0620JeL4IMobPQF2qKbRagGrn4kHCxpn9nA0Ok5U1JukUzDJJ1Ur2pxWXoXXZ1q%2Fx6Z4gCiyMbDogCG3%2Bk5%2BXBDkmk9PfO262cUKlK%2F5g57fygHUpe%2BK4Nrwf3r30y%2Bjz5vFB6jD%2BzoBwF%2B4zBKYCpGcpdoz10f7obA7lb1ZCXDcFvBZk0OhdskycTS5paZz6yoMK%2B4sDWcGgT2vBsOAJ1ln63WIXTMNjVSXKQekOin8r3tQKBP5%2F4r7fre6rRcGGOpE29at6fw%2B837SWcThnf%2BJbndwD94jACGuHFPQJh6EA3ucY%2FxSG7zdfLv%2BRY1ttzpj6E4vJROXk6CmyuKHOtO02mqu3F0WH5W8SWAjBJFMJ7wa%2FVATCgB4FYiu1dijr2OkARPzERnlFjUBSLDXgr%2BTfRdqYR9iA1pQ2XFvzlzsKOkjxwqc1SWRdQGH9HQlxbU8o90iCsMJ2KucnK1P3RTKnY4OHV6HXMhv8FwZV1M8%2FDB3%2Fwz5TiPHloGNDHakzfN%2Bv3nfJuyMMLWjMAGOqUB9bWWql%2F6OBUSOHxa%2FTYOfMOC9v4YMiEpuG7pXleUh1WcMyZASKE1gZPEGLS60%2FqIRQP63E0xOCKRzCg7bfrWKe%2FPBjvMf9F2dN5InaYm4DQ4HogIvnrE9oMJi3YviVgU2WusGKGVlyt3mPPJqmBqma0tBZM2iA9pMG6dGNpLaK0jhbgK%2F9ACtHL8gQ21W5Q9NytD0gwcma7Y0gzIJ4mKH6xDPI9u&X-Amz-Signature=5a6b330f4438077fa9d670cccc4e7ead100685e9f6f4d91597d539a1291cd117&X-Amz-SignedHeaders=host&x-id=GetObject)

