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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNCZB6Z%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T213436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIA4rJL5lApVV2NHiWW%2B%2BsqLOx%2B1s4dhyS3UwlmozvogcAiEA5SmCdWBHc4euQYFVjXqJrh0zcdRsGq7c6sc931X%2FDeMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWt%2BucLjEJrkfdW0SrcAzICqxBL2zNptk6atshAJ59TLZJNJ%2BUnAQo2dl2QK8jnettwwaNa2PY25FkGZ6TBmntSwFqfJbew%2Fx1n0%2Fg%2FsP%2BiKt%2FUVNBEW6TUdyxzDbM07Mkx1JeKvWdZ7n3W4BY9sUjmTWnN3ebIYGkOv8mnXXFbY9jAbZnBOZwMB%2FiuvsvtkDV55842YE6wwZe2PYDH1%2Br2EpRV%2FdSNCGJd2EIq85s7byApD5PjcfQdpgnNGNKhUTpS9m9ekWuQrivBNS2V8iVL6auwoNnGvxuPqFeoNzti5C8gWnUPhGzOqS9VGcx8%2FAGtGXd%2FH520xFyu%2FNlgh3RwUPHw6g4YjiQsjQ0%2BJiGnNpVtplZhI15oF9hiSQ4Wc34A2B9%2Bz1WxG3q5%2FnzpG0H5Robi47TbnL7WQZ%2BRB0k6enp9dk5wz6BS9I33oESljkanjnzo%2BP7eH%2FETxxHRTmIxESjTwXrslhjn%2FgNWpBD%2BKlXo9CmmRaSpR0sBIe%2Fe0rWsXJmzIJVwe9hc7Jh49xu%2BolCXu4%2B9xVtuSgj84upUC8xMSOchvII4e2Rl70A0l2%2BpQ0dgS8yX8DPbxX1SGHwIiESiM52C1mvuwRDg1TybKhN06F3K317GSWQsUjU%2BWtUnhOR08%2BTvezjBMOK1q78GOqUBJR1qGOzr7fpBLtnmBoj9NyWwpk6qfVEEmvLoaMgj%2B1GCff4MQ%2BTliBRuMu58V3aO6WM36ysBvViBiiBxHr1WMw7drlDIEh2R%2F8%2BbnUojy8O%2FslgW141KiE0NCv6UV6EmTznKSLvXSJJYm8gUtcf%2FtGbd4YyD6MAuNa%2BDuTPtI9Qf7izgwYJa4vce6Exrt3C4OyTlTJdTtDpOrdNN3wHDZLz7UInP&X-Amz-Signature=0eb8ba609086a27fc2481b6985ec6cf8d9ea4faa88c78584f528d2dd17cd7d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

