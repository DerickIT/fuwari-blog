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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQBHI6X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmneWRLEtowzhvAMLsSaHqYF7zTB0goE4IekIqaQ5G0wIhAMyte862EgQl%2F4XiZ6P47F%2FcEe2EmyYkhf%2Fzyp3q0G1PKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw82tjwTZs6Ejv8d6Uq3AMftyKMVOAPmV0pYtMWIUyZ36SmCRj3bZ9w1XPBWQSYvbsvgBpg3VmX0S2L%2BSg4%2Bf1NZhO7RoaYNXBp0F2PHl0Sko6mZSQnJL12%2FegHDV5GYrn62avSf9AMFZR%2BzFLpqiFJA5Yh1zXeNZWuTW4aru9LAAcfa0o4XtkIw5E9KCt69A5SjLxhPKU%2BHaHELluJXF%2BG7JqQ8tJ0dytFC28DHaJbLCl659Aoun2xO5Ok%2BYp7mPdm8iVUEBUhw%2B5ZV6HZ2ytSugEFLViMgjNr%2Fm5cunoUvLNxNa%2FBUAEGUXRv4416s7LnopAaZ1DzXYXSjwl2L6sEw1lMzed5dsR3cNNXhL5ahVDgp%2FXfpUspfJXOteiwbhyJnTJrXGAjQwH%2BiBjiUSlTpGFyB9IakKDM2bJ5BJbuxedr8YAlhIXXyoWZ1ITPDxyhVCK%2FgApLoQrTLoFb%2FTKk3TiggGO9LDjltq313jYeDhcvGHtKR3BbYWlIyzpITvQ7laDxjpJH1TUppgXRraH91EEtImEZ9%2BtNA0Q8ptB0f97Px2n7beGPcPIXdTaINYqigPtxY1A2Cve3Obp%2FC9X5Jm2h9wqfRfYbEubbTM7Ab86qSGTIHDf49%2Bkgr5Ih71B%2Bo%2FU9GGUBBUxHMzCMnZq%2BBjqkAeokly%2B9zFssUIQU%2FyC8Is1wbZaBhEusuQ66niWUoVdAzLZ13zzhkeBEMnkywCixEZ2yoXdmS8yogS5eKju8uiEASSxXFS%2B247Zdc2w1j3qSQq%2Fxi4dWFAU%2Banv7WdJ1B4sg4QYppyMfF%2B7AdtafQtBy2XkniNpw1c9AwVhzUjiKUZ2wf7Wz1Gk8v32J8ov3g4eqrLBLtNvw6sq23ODMF%2Fvc8%2FeS&X-Amz-Signature=19219918b8a06e0ab0a8fac7953b0a17d70098f2a2583c80c2dc2c9693386870&X-Amz-SignedHeaders=host&x-id=GetObject)

