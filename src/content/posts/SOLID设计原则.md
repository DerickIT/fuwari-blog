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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKRWH47%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI18a%2FvJON7wUU0OumKZ1%2FFji1kX7kxWPyyi%2Ftuq2BLAiAaSUzJ6nhEcSScJEFJioRSo07RbuIK5s4wqUhzocJaZCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbDsAXc8HCONjFqOKtwDBMuFLBDEZbUB5guJBJIP8B0pUbYeaHk4xEABMJk%2FXrX7kdZwJjf6Q1kM6yN%2FjlFL1kGJMaDevwWJZXQHVvUpAhM%2BwGNs85vLYgQZlCaSgi1KVWMhpXtrpyTJyY2kR%2F4sY2ytkMGpuq6yCaY0q42yiehwTFlK0eRsu3Mm%2FRGgyKrl8rgGMuAKngFLOLL22Hgbvswc1KDf6%2BKzowJ82LS0fO%2FINvmnrdZK3s%2B2NZ3gCMulST%2FVu0sy0HVW%2F7BDNxCMLa%2BqeqYvIolxenKAyInW2WbbjFVDzVblnW9w8Qf%2FjkGrm2XnFkITP8CugVr3v7daTtzrv96qJiSmMOZ%2BEX%2B5pG8MPpyunGisjyYDAKAtc%2BsYm9hLlmi1vF62jQQQdqMthBPT5EnCD9jQgYYPTrrqnJ%2BJp4bAwqEs9%2BHjy7T7jRQBGvvCJXQoLfgGa5CdWbHrETa7%2B7FfcXXg6aPxyYTY%2BfMEAe%2BVxXO5ZQZjHhzIlQeYg2QPnQW4aullwgjBQ77r66d83r323XJZt%2B00Owyoc6Pnw9dMWENAi7CsOA6im%2BscFJoAqowhNX%2FtmMnQCdwDzc4HD5l6sai76Kz9gHb%2BN29Mxl%2Fy46WmRjJf0REAj3RpIdAIZPC9EeGKT1gw0YzovQY6pgE1Oi4Qr5a0qYcALSmQwfZxJesz3oE2OVedH2eEkwpWNwAnVj0Pr2CQlGg%2BKTUcP%2BjeLOS92GO6drJGhQ%2FeTOIbZ3%2BXqlfsbPNloGPi78z5n6d4X2QsRz7%2B9cQkEU1z1OAFtR9TRdgezyA7Qs3WZ2S3rabrKqL7tZ%2BQmFiQCKnuC8QgUdpMQmvEaO3RcXw3NTAU%2BCizFokI%2B3l3YI3274UbhlMwSSYT&X-Amz-Signature=843dd3275799522ce9cfe843e2362c4038df2222c3a61d6a53c194734c901db5&X-Amz-SignedHeaders=host&x-id=GetObject)

