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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZORPLL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB1nKeH%2B8jUs1fTcu8NlclK84KZ%2BJGVmrdBDXg1fFgMpAiAID%2FqWfqI%2BZz6AOnNPaDRochLCwbMibNNLKpYjpDgflyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM40YZdPj2aBB7hSyvKtwDXLNMv8J0BSfm3%2BCbjIzK0tTAT3DYYcLerfeu4%2B20V18PG9cTzCkEct8ea%2BHErJk7T1PLz8gwb1jgRU7%2Bw%2BQ4cqRDQ%2FLN%2F8rxc6HgVMRrDCw7Bdejd0kcM2AHA7y3n%2BLWHAkqalITiQ2vYP4VJmBLpQYoQBh%2FjfujFJVZJ%2F%2B46LdSV57PrtcxmvfjUtraI4VQPXg0shyISE9dZJ64S8cy5%2B1bHbB%2BwZwd%2BMqw8LbGbzCRWOB9oeqSOz8WbsrEgncLQm4GFYzUtuWwHzaBXplbGTuiFgLqhG%2FsTRfIEM1db62yv%2BahHtV%2FEbeDYv7YhJ8OysAablTPkkkkiKR08o7BWpdeNljTY8KObDT4n0Wf328XFIU%2FR2T5IhKjEjzFku48F2i55O7XSbKhJMWyvolIUQ6KjIYBltIYBonzSBLXXDWuPm4H851d8u43wD66xWsdTOBgzB7rRVriC%2Fvr20SQE7jX5EQAX%2FhsaZeHPw8JbBHxjUOBOVapeI7J3QEOUNI8oumrZtC71EMjyMvL4hmomwnLbe5WV82wMIMUzV50CM1H6E3xKcztdQTgryPD%2BAfa%2BxWDlM0Gl4EkDLpVgSXWxEKBhaDVzQcSo%2F1vs7R8V3s0Rr4ZvbYPgGfTDSEwyY2%2FvgY6pgF4NFI%2FAT0mJF%2BSILbYw%2Fa1qtiTwnbgw04jJUyfX3Xl9Z%2FzdvZJSpNmBLMAqpVcgz5wRAVjhOZWVXUtrnBlgQO1cv9SL%2BCmJ15%2FJcz9yd1JDNbstRfmz94UgnXJ8yLs%2BGJ%2FzVbjtLeC6DXa7o6xOfBlXkGIIo5BxI6YYfEcE0DyUl1DMJFzXHsMu6KKTkaxvSg2x7g1U%2BL51zqLcASDXWwGb%2BAAikPu&X-Amz-Signature=fb442284793501aec1d68a7b4c7df70e476a12eb1c2ebff310a1dfa84db7a9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

