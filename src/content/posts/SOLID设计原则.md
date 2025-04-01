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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/6fc4afd3-478b-4aaf-9884-0a3f8e406a71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5X7SD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T213447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDJCgIQeMsxh%2B8WmSOpfDjW6nELaN3kjcrWf9cVbxukVwIgPOBvKptBVZVmxmvk11SUo%2BZyLmMac7AcFUV76t3uzdUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWS67W22FPxZ%2BxQHircAxNZkuIqbVo%2B5tOezmS0ZtyPZea%2Fi4FXvM%2BZOSOnXnmPR4%2FHSnMyvyTUc9iTdwgCGzUueTLG4HGdEDoIMgrjMEQ%2FFHLJbwpN5nQ8MlhO1BR%2FVpP8DdKiJrdPwE8DyLGusUAlRM3hQpDtozFQTtnbw8HxM1UCOTuicrU5oCOs6V18I9vzQpmOVNxNryyhRaCbwLUQImqXX2Kfy%2BrDzIN3XIEcWAiYxV%2BsEEEsYJRUpCj3X8%2BY6dVha2Fg5SavRi2Q2pPMgJzcKS3SZrMiv5ohrsAsvsKVrmb2n4NlGWqO2cHK0YS%2BbwOfhi4ZNwAsqQN5TvNBndd%2Fs%2B2UFzRjWrGQCmXXSlywztUjoIzv2Hdpe%2FXeg5XsnkBFL4q2klXQZjSSWEu3JUMbroaJXlkGJ0eYT%2BWGC2PUjx%2FQYNR3VxUxSH%2BRnxK8rpzFVgonxLemMCCLZg7ZlpPOeOhda4xsGhx2vW8ZsWnzDbxuH59I%2BOBrPC4TTiXscLe4wLCJJTvJ4I3wvQuRZtLzhXSR540F6fPGDf%2Fng2QvsYLBNAOBrCGvnrhinI2DVzNWSMxLRSVDC%2Fsqsr%2Fd57DBH0WB0mpW%2F0Ne%2FqaMJfyoEvPGMVU8oE8qY4GqH9QYIVwC24mVhyi6MLunsb8GOqUB9vKyJhD3PGl57%2BAVhEyQ486ysjogFNIf7FZTRKIRGFwPcxjabLLIKAylpBHXGH09psK1cA7sCru%2Fe10rYrB4tOFl9rGuYIZaGS%2BG9i3vFw2obWC5yy56EbGPEkfNr2x1oKpemTSy12PJXYAXshqXrxwkcOLiI%2FSm3pl%2B9BGV3F7mK%2FLXPhPJZzdXb7QqqdAa3srDF%2BTHWE%2B5%2BDvJwxpNHVD1zW%2F7&X-Amz-Signature=4c887d2a915e4be0eeaf701746da9d42655d80167e9d1f5ff0318982b83ee5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

