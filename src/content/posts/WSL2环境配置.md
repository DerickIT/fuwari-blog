---
category: TechSetup&Configuration
tags:
  - ProgramEnv
  - CloudNative
  - Docker
  - Web3
status: 已发布
catalog: []
slug: wsl2-environment-configuration
title: WSL2环境配置
urlname: bd266599-5cec-40ed-b803-521fe8cccdde
date: '2023-11-27 15:37:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg'
published: 2023-11-01T08:00:00.000Z
---

### 引言


WSL2是Windows系统上的Linux子系统的一个新版本，它可以让用户在Windows上运行Linux环境和应用程序，而不需要安装虚拟机或双系统。WSL2使用虚拟化技术在轻量级虚拟机中运行Linux内核，提供了更好的文件系统性能和更完全的系统调用兼容性。WSL2还支持运行图形应用程序和GPU加速等功能。WSL2可以实现文件、指令和网络的互通，方便用户在Windows和Linux之间切换和操作。WSL2是一个非常强大和灵活的工具，可以让用户享受Linux的优势，同时保留了Windows的体验。


### 启用Hyper-V和适用于Linux的Windows子系统


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=b6ede56c5b02c562ed827d21e13bb9d13f1b70dbc30dad134f3ccabb217f135d&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=f0daa0e817571b5388ae7fdaa8dd0428ed35b10e823d4e47cda2fa1cd0cf92e3&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=d09422954305defd93791220746902ad491ba553675817177454562db61af811&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=05deb8547ce72c534834b596dba6774588404fbfd2a8e166470974ca4771586a&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=70355a58061bb62813e90167368f13220d9ae877f96b043dda8e7c2838c00ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWFO4EX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi37xg6ZZpyCqvftoVnZm6v1OOOLHdJp5rcgbUB6KV2AIhAMhk%2FYLukRaYDsqWbVriyW1cRP9vq4PJOfjc9OdCXAReKv8DCE4QABoMNjM3NDIzMTgzODA1IgzEljdMcbffsL2upDEq3AMO%2BOJ8CspPurAiQTmXkImZ%2Fg99KITxQWz9DR%2BAPGglqoQnFrFS9%2F6Ghc8j66iQQrraIOhZOsNxcQZy8hlQ8Ok4ojxx7m8reJEP6ew08sV2DttYyQLA2jHotpgYN7keHcTe1ynqUA8tJeO69%2FChpwRm1qdG19w9jWrjMGZg7D9byrpMQ%2FFFRKVzjcPOuP19nEwoWB%2BALg7xrW30cdbMEpwiS25KC81QXRoCvjhzWyrmVtTva8IWlW7dJiLZEdcv7R%2Bq8Xstsw9Y9LvIvIVWC17bDMYj3VOTjWYpaYjcSKoRxdS0FDx3r8QIc7rhw4jzXhEBl6NB%2FhvqLDG9i%2BhDoB1cnRPepWJws8Em%2Fc%2BfpqMZn1%2Fn2zP%2BIVP8BLS7uuqTQvoxYn2dwvgCPwu1%2BxUE4wMUYglrMmAqxpE5I4Yc73SRI48%2BqsRSRqS0ei6NxMmvok9zZOXQ2kzkC21ad7rpsjcKP88R5IzImz5aaQ0hP7Y7oU3IiTblv5W6DPLuMcfCLLQeHHu8kVYLtqMcKrwrobkY8wQBhmahVZ1gpZRBfZ5nwglNJzjJNebR2CjVkgkyVoci09FN9dFdjQ%2Ba266k4weI6Z4kHCfFxa%2FSRMgqQbY3VSqbBjLu9%2Fzeg8%2F9cDCLoeK%2BBjqkAV2qSv3yhM%2BWUZKhB%2F17A5uAYnjKOPvk4W7kucvQ6R0G2RRiX5nHx%2BbKcBet66V3z1pjG1GOeony4sh2VCVNWR6W8OeIIRAGPfMerQn9XtcjWlmVYaG2Hh6GFt0nS89QGqPQhb%2FWgU4PGAl49Kw%2F9JDEAMa0mNvnAmgBbtXFRU%2BEuxIiMUVt9dSCRwiELCbeJrxCsdrx9cM9zcPzcMLqq55Qmq41&X-Amz-Signature=717552c1ba0f986eeb2b68db2a2f44b91dd6e632da5dd7b5371ad700cc8113b6&X-Amz-SignedHeaders=host&x-id=GetObject)

- 默认安装Ubuntu发行版，目前时Ubuntu2204
- 若要更改安装的发行版，请输入：`wsl --install -d <Distribution Name>`。 将 `<Distribution Name>` 替换为要安装的发行版的名称。

### Q: 如果安装wsl2时出现error code is 0x8007019e


重新检查是否开启hyper-V和Linux 在Windows的子系统，然后执行如下命令，重装默认系统

> wsl --install
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> wsl --set-default-version 2

## 自定义配置


```shell
# Settings apply across all Linux distros running on WSL 2
[wsl2]
networkingMode=mirrored
dhcp=true
dnsTunneling=true

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=4

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
#kernel=D:\\Drivers\\WSL\\mykernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
#kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=4GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=D:\\Drivers\\WSL\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
#pageReporting=false

# Turn on default connection to bind WSL 2 localhost to Windows localhost
#localhostforwarding=true

# Disables nested virtualization
#nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
#debugConsole=true

# Enable experimental features
[experimental]
autoProxy=true
bestEffortDnsParsing=true
useWindowsDnsCache=false
#   autoMemoryReclaim=gradual
#   networkingMode=mirrored
#   dnsTunneling=true
#   #firewall=false
#   autoProxy=true
#   sparseVhd=true
```


### 设置WSL最佳实践


[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)


[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)


[Work in Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl-tutorial)

