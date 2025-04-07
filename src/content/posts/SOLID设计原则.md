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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU4I3LT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTqTABbDwboSyaz6%2FlEmWUnxztck2kQsJO1OF5sgoD2AiBVLi%2FB0gn%2BzIKzllK3COk3uCy5XPcRA3gZYuSbzo0OMyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM2L17MkN3ONpICi52KtwDcFaJ6nfdrto0uiDJ%2FOyaEXFgjkGP1aq9%2FThSpy8fFOPn6KjN%2FuwWyscDO%2BWXTAnIGDZNQTqirgVyJFfom4uvf88CwV3DgKHxySu9O85dX%2BVh1uNlAB0%2B8IQw9VC7%2BDo3LJt%2FUZNYmfgbQ1JxB77bsSdBGU6yfAluknwmyHHlf74tzBmVF6HLm7AKWZaH7VNm05gNIAPe2mTJicqlrgIUSVZ7BzPPutIEPc8KgpAwzov8ZCgZmXNBa9Y5TutVUfKzZuBO5YSY6Ue2SfpMVgThg08EzHMcPW6i4I4%2F2O3YuQ5UJUBPZ0yoXhUofnyieoVv6yWGfXi7rP8Qkr%2Bt5%2B4DzCUJViL4LVo1TMvQXucz%2FGP81G%2BHIkXHVhMOfcyeV5YXTdsKFXOwS8VFSujx3eK2IOJIgnJ1V%2BfKvaTs79GjnTryBOvwvGO4WJkfFkDjEpxboQL0ZD8a3%2B9QQAQuq6nW69MJGpRBjG7qoMiapZlTFuqxuNGx6d1mBWC6nLBIRKBLNmHDFTDGEKl2kVZB3NWAFVkzgIPdf8h6rk5OxpojMf8%2FeoJN5CBfQn7lGpkyd5b0CbQ5lifBZ3qEuhyC70KT9kmyKauSug6v4hXIVQK8XspLDLfZNRo%2F6yLUBHsw%2FLbNvwY6pgE2TN7U1spUMMz3jR0fgS2nAHhWwaxsVeLbsvaARcm%2BrNZRMScZw4REjW9S9yBhw7nUNxaeKrC8z47CpPrk0CrirSFbj%2BM%2BQZKz6FtofAewcxjcGgIEmEdrd%2FJ9Mb8fg5%2Fu%2F1CUUZtS6UFE86gQECuWrnwv9fuQDM5m3cR2n52E8vfPB3HXe8yaxelHB3AdCSpswED2xLOLDUKQPqxdj4qc9XxYPBOs&X-Amz-Signature=aac7d2d549a4d1204cabbbf677b6a58e28274a0aec283bdbaa375c0366ace846&X-Amz-SignedHeaders=host&x-id=GetObject)

