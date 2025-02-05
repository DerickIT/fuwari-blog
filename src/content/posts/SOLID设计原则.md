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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOYRWYIY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7J3Vin1vHI9B6lvTx%2Fo73D6lNgno94lKyAnqzLgWqrAIhAJKIdAkHzsn2ZSOTe3hwlP4w96YTgrtVBRzz2HrTxB4EKv8DCD4QABoMNjM3NDIzMTgzODA1IgyN1mhRp4%2BUMCAJeDoq3AOo6FadQX5T9BYI0NGGJmnonfmta%2FqkaUU7SC4Km%2BQxfYl3bD54jkz4b%2B%2FME%2FulC7kWP8drV%2BdNOky%2FM6dimojjIYnk8lb81UVZJExECsaCU6ZseACOgnspnn991%2FnKChJG6Ey3xCpggoAYlX9RuSuhfmh6D%2BhICZwDvkKgVpV2WCNWKBc7qOlQf9kpj5%2B94O3WC3qLISpbNVnfKQM%2FQjD%2B3a5u4xf9qA9ND2S8enY%2B%2F4xJh2SYr%2B2hnexeJFmw2fAWOqfgWov4VLAkUPHOWHGLGYBS%2B55vCby8VIKsfLm8%2BgKUB7lM%2FeWmcAKjU8AFmqe52c%2BKLhvZ24fH1aQUqeoV5agZeBf7yqZBr%2FfV8sNUVwBAkqt4zpklcYDw%2Bj4%2FD9MRFGbrTMJk4NhTFixzKZvaGdLWAWXL2INukpblrpq1sgCGSOtupsPIhyf6q6U8Wmy2lq7aGWs74E9PgwW%2FCHqbGvPEKaIetM4LC4pgIT6iYA7s9wtxdwRNozz1JIZI%2FLmpwUdZeLvX1cCywDfKS3biUXchEh9rgqxKuQQ2ddCuHA3j%2F9VIztYT%2FAZ6n%2FYkVXhjAp60TQopn0EbONlSn9CIv5QyxTrW%2BM6%2BxXeTIZHbO3H4hUfSfHvSe6xcETD%2B3Yu9BjqkAep%2BzoqC6Uug0ZmMVSVHrGyFieSC8VNnesTXF8a8IgfM%2Ba3OqzZJKAeheP0oRro0ZGg5bz2o1dcsqOx%2FYeIVoioSQ5agbnAWc%2B4sNj3ZqckvEyLIy%2B%2BNuUsEHfay1sCgTwIOq4puZN8W5IQgMFoKKZEu7c%2FGhKf3z2P%2FV%2FGJQftA1vn8z5Suw3wOuTZ0uDJPYrSK8pLUwKafhJ2kGlGn8%2FTATs%2B2&X-Amz-Signature=0385d55917463ec3eddcdb4d9b3dd27738284a6f578456f38822c1f8ba993383&X-Amz-SignedHeaders=host&x-id=GetObject)

