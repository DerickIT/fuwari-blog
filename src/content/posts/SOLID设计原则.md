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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33SZ5TK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCID1uuz%2BT8%2F1bmgXzt0Bl7CbtcuYEMH3xHvx3Sjf5%2FUuDAiEA4HQmB00UH2Zhj3ueGO7p6cLNusyE05nh5vfGKbZn4vIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDhW3FSwvtNTLazUJyrcA%2FaOvHxY03tW5mV6YCc%2FMyXqOBsGnfYwICGNGj6MXllax9Dt1ih%2BFk9nAeJBw767IDVrcfA9Fnrb8Ve2t%2BfsZ3E8ozQOxDpmkxHfcKmCkXHNrOxsKEIpn%2B745JAJpd5lAut0fpZSP7GFfGdh5X7GKvspEnLfaV59uIGkQ4P7FzaPNTyJIHPsbpYR94P2VIdop3qOm4b5KdGLmbBNUjLSG0gtTlKipKZYaYQQmXz2it7bGhmWQV%2BVZD8bfpJw38jhhR2LcbJKg7PNES2i0XJsqWU5tCV3bXLcc45mqpXsxUfC3FaRzA7ulNFm5jJgyw2VY90RnxOT1UPY5vPVo5BHiv3ZnIA5ZHy1UJ%2B8BJAa0FnIRu5ydpx9y5oVbEkYHIGUNYXKp3vuajsKk1V5zltGrkzQCTJ34aU9Imqt4rLRacXvAUPkamUZHPCWU%2F%2Bs6RBiyZNUWuRafEj1qd0U%2F5cFKABykWmoWv8AFzXuP62NLbn61tWGmbmq1CI4cc0o6IRcCdUuG9Sp2LU%2BMRu2wGZKWlw3U7fZzUi74xqLhDp%2BbOlhay65OVYzn86zBmSppAa7VgNKnwZ4pUdqn%2FKh%2FqnRixpo8d8MYgESSAG15OlX9feqgEK%2B5SctXTyZoPzpMKK7%2Bb0GOqUBDVLf9iY9JRcy%2BTDPwoffD9y3VX0US4PPVRkUKdYim5AoO11h13Z0PKMzlmqP%2F%2FpD3TkxxMkGIdnbnNFl6G9JvT%2FTqxnayuFfgXLhC%2B8iAkrczS4fmU%2F%2BNjY38K73qLDn625gmHV1Uuwa62QUhH%2FFHqz9VDWVF9nWfQmuS0kUVEVE6B8R1dOq0deeHJhpjxiMNJuHWz13TojgTF068BuSuPtIqygd&X-Amz-Signature=b3dd2b100f889b5ecca6bc2911b586cf6086ffa1f5a24ff6829463d78715841a&X-Amz-SignedHeaders=host&x-id=GetObject)

