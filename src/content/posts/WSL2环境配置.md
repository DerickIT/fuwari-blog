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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=477d7f455c631a881888126912e55963d3fed65a2aeb47621c393342f9e3b498&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=ecd32fd6943c50a7f073d18a20e94a18d8dc257f834f95db5c82539fe3ef64cb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=179422c2a3583c5a2705deda55377a7b2abec380fcc53fc9360ffa61c53ddae8&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=3894532e86a4081dfbfc3ba6394b0c12e9293f801b265029b7e39cb86458245e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=a11663b1829246bbd470bdaa1bb1c48633bb419b8fc455a40ad04ffb8782ea49&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ6ZH7B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T053848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe7aUWqeRnBzmCMIw26mzeMPAUHVlHbxGB2rHTj0bTWAiEA0Asv4KnuT7RaJbU32f9sgEyYNiFIhX%2BBix3bhgSyUhcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9s11gg0Bns3IQe5CrcA9x1Q76hpbPJH7DXck8ufIw3HfMf1HzRJJoSVp%2FkBI8PsFjGSR10Y22%2BOvOgZW7Qh6SaSP8ZQscrFPM71EQHjBrGobtCoa7qcUyiOiK01VfQXMInHJGodg9tYS6oOTTLxRd8RS5ebxSsvAeBNCJi%2B4APlJvdCH9RaFI%2F%2Bioqw8Mkf9rYoTCjS4ZAFqBO9nPjhC%2Ba3dqClmhODHs%2FeAum2Lqa3wUy1yyNUIYKFCElPjJGzx%2BczLwxG8ByWJJCaQGnTkKmd%2B9Rf95O25Mj90VzKCMMcoTX%2B%2FouNwCJ5umjHuGBNC1hT%2BSniLv6CxM1nOCzcMD%2BIJH2iJ1eh%2FxoMwtzNELTNGDFKE6Nv0yECT5R%2BlCnnY1bFU7bOQQybYK%2FbFMWvIm3Y2cQhpSr%2B%2FFN%2BwMsF9rTTWMF9rqwEzE3EfozVEVLAxXac%2Fp4smOqdj4pb%2BKeOiOjp2ul1b%2Ffub7X5Z%2FE%2FcDI6pYLG9jgMNswXYlY3Sn3xtP9u%2BekwxHuE0COgsUlzjnFVL5CwvmEtn%2BPgw0J9NkLfTiJYkXALGsdTTzawGhKjMR2abCIwJVSId%2F252fxy6IWbrOvLJffQQilqgQgfA8JA0%2BE6Ox2t3baOMwPsWtC70mrSIyEoMmpnliwMLW6yb4GOqUBYQPse8CX%2F5Wfb4uLHPyEa5tF%2BxXwy5acfqalfHdEk1aNpVAqPNOxdDgLuhkx5mZ4kGvxd9s9Ix3tLiVBFozl7wBAoJ787U9HE9p5cjI0d%2Bx39KPEzcI3TDE%2BB278a9CyzEvrGj7QrY8Ez6H2uyD4re3FbzDungR7HLEoo5LkX8ZGNKk%2BQMqhi1qUjTOG%2BOEpX43qYqGhCfjjE1AhqeUtQzSs3rxv&X-Amz-Signature=178d4ec63b5a7cab0378ffbe6786beb8c62c12970c37f56f88337901a174fc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

