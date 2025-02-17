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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRVP7DG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBHRAuOFiFF5wZPXvYRjvS%2BhBQHO%2BBHHQOtMc3O%2FaXAjAiB7nSOYJJTVYIzG5chLy4XW6kHXl3FhkHWLlBHzIlqG0Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM%2FvLNeEc8z74ouxf3KtwDLAaY2MTdpT1m0YAEWstWyeQShR9WkHIUoHjcHXFtlYGQ%2BdqXqHY3lvMs934bfIHV7rPD4lZPhGKH1vXNqA5UV%2FizkE%2BCorQGCSgEgHoPifWfHq%2ByiX8vGcF%2FfXVMQ8t4dxLL2e6%2FcXQWGu%2BGIKjcdKe5k8why6RcDKpCCPRXFNZCNwo1RJhs6MN9Mr7rgSTgn%2FBwhTVDYsqM78meekmgaMK3%2FqCvDuMl7%2BpFUidcb7GsZ2nTaqoIf9smTqB2iX6bYmDbCZ4YGKAa71FUMOoaiXWzhpoMzUozNY3cIOUwds1NrnMAym1SpaJJW%2BnocgILewQkma%2Fn1WYYuyJbwJNtQSP81NtAKkK7tKLscpIM3bfwhda5%2BTnxI5Ci2U78LXSECVsPISNSnMMgGUl6wnPx0S3abZLWgmkRBMfzY9pt2JW4EoDz%2FmPmsbnRManWtNuS2w3o2cCvKKR0R%2FW9ZQtwxkQ%2BuPOV3zVrU6rtxe4mIJkZZWEatje3%2FiaqTUj3s8rZHUrjZAlEypeJBlpDi1EE3d8X2%2FsRiALdMwLKKFoVmBcfxN0txdVI1DtPWLEnJ02wOPxv3ybuOjunbLaSjFYru6qWLM46yut26dtSBpVd90CoJ6U%2FpTA%2FPPPF5jYwuMjOvQY6pgGQgiVX6QWNblk7emtQsbvLcPe%2Fv%2BI3Gwyof3OAKKFvFuRk72Xmyf%2BZaedUCzuo6cuN%2B9gFFTYYIVshV4PYso7nZQPHaCmNOLCq57jkKUzzyuvUDPET52t7CDwkK3A5ODOf%2FgaqSBU4neIwUuA2VDp6kavkVSAm7xrqzKHnNZac5dYVMNBjQLU372Ddz8l7FIGdtyULRy7rpXqU0Ps1rQCBh6wKU%2Ftw&X-Amz-Signature=99028a68cc8584fdc194bdbe2b78a9e63bb381c54c1e39d2be02b72034da3934&X-Amz-SignedHeaders=host&x-id=GetObject)

