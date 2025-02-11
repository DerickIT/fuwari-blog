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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWI4WKOB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T053741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzIcez5%2FjQ%2BehLHjxYVwBF4EjxqavieF%2F0G84jHtEKXQIgPwy5OYIdi5Db0Jq6jUg7fXiuHlvpTf%2FeE09pexUPsFsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAevrtu%2F4pYFtpddOircA1UrpCzd1LeMfWbBMGSYrnsx6H3EDH5x0rix1ohiv1RktLnpP6zwigqO1lwXgh4eG2Pg%2BTwWz9qftHK7jHEfnwujyw%2FN7rHnJ%2B7n9ND%2BGPuJTFsjEQU%2Fbs2YWYaGoPwd7qgkCkex9bn8NrKceeGynwVtiFWxFafA%2B5jr7xkvK%2FX11IonNhilFWMyngF6fXDHYcwLuvIVecwaWVE0CnIsLJLM43L1bLcA18kXs3ZxkjKHI3ODFaFuUzy%2BB%2FCGIkRrhD%2Fby9v1qrEa%2FmFHbSRPwDykHcAm2xAAix2Dtpl%2BhsuUf2Vc7m1A81fmERbuJh8oANdnklRvX8kGsi32ZvhQ6%2ByaA%2FvOWca9Y5PXK%2FlwZ5sq9wpv%2BtDKsS06x9cnE2fKMSsQSe4WHaI%2FjGV8Tr08iL3Jwnb4e08xbhLtkVnje7%2BtDXYxLmO3jQlnqgU%2FWg4mT13qA3I5D85%2B8wJQY0PoPi2735jUgCJZIDJijicTusGnP5ouuiKOhco%2B%2BcbZI7wbIW598ycN3HQFSzXl0uNn416Z3fyMKqB0cYrd7RKTbg6v63ybjiLVFZU3LXd%2BsW3z6aeKYcLi7OTvGzkCtxmVggA3qLXlJHvwiH7MgT7S1WYTUnltzp663xWv%2FpFRMPSrq70GOqUB1%2BL6OylML7eHngLY4mIVtU4EZRYj3hSsgJ1m%2FJphp1KHne5mYkhX%2BVU6%2FgkfcsGP9HyeY%2B36KCOg28U8067%2FlULvJxG8QkV8WlevzIHohQBNQ08CK0CXvskjqnV0Yp7gMjUOrN9onQx799b3I4Cs4ikG%2BFzGhFK2RoHj06zL9uEtzPHHHuF%2FXmZnyjW9HcD0utv9jnVQcnRR8eJI7u7NQr%2Fl6CVd&X-Amz-Signature=0f5ac5bf0603185949e00d5b49ccd3e31dec2938d93baf1e950657c322c56ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

