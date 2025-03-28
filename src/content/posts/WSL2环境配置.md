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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=a2adf282933d8edbb1fae26c2d1453364658203d6882703d053ed2cb64972067&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=814951074c475661e71fe6bc281e42aee8a5850dec3f328fd5b710d571cda4de&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=415dcc428b77bd07164e0f59f69e9ef8a9e2562d380168f108d3327f004279fa&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=f50f57c01fcef70604f9f1fbf36fec0007a4cb84923f7a16f080af6378031bb8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=c9149c4c4be5e3c26f80ea4c2b5ed9742abd602dcec766dc417bef40db209b71&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2ETC2Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpwWBJ2FrPDR6I91WwDwyKdYzfTaBujhoEQcaQQjlh7AiEAnwSDwMaF66SRtn4%2B9hxSB%2FauEeWhEIMpHj%2FqpLwnQMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6P5OELd3tKQqNZByrcAzjNyKWDWB4FVmKtUqwSk%2Bx0b5b%2BEvvHm2KfsyJ7Nl5qdKwA3I0OZZOGf8Kc8tn9v0MRWnSqF%2B9oV0M8aJC34TIObsCLaralgHPINPc3fwyYuXBT1%2FodZjaj%2FB67qrvUgfomRYUULU9w9kOcdIZLdg3R%2FYWr0Yvts7QNUlTU4LIJeHlnqjK1LKWpHgK3WIved39%2BUDmY08Vrj88ldVNROY79dD%2BUZOFWqXNVWJVxXuqBMJHbLY763kC6KtpZyQJ9pGW0%2BjIPH%2FZDXew1Zj5daGliZ9eYTlcqL8gIRYFBiQrlxT2JOvGL%2FsU932lqi%2BmapeyHm7Rlv0Mu9cgzic05gBy%2B81i%2Fep1jYgwOn2YGw9wiO57Km7%2FZfoMFR6MCpkSc48BWTDAH1gQdEdCifQ%2FvjPheNtOdKFxEwICW9rsegfYmcgBgH10toMsqI9gMLNEQULrmdSGndV%2FziERlD9zvpzsUCZkSLR82ZjC6%2F%2F11pyuVZv4meUOt5LN3iNvxuRvlNsGHQ0GGsS8QwOaDP8RGel0BKutAAYz4UCOsjIkQ%2Bc4UmyQPb9wdyD5j92rjmqTgGmUHbQHTRcs%2Fh5IzcCqclqHYX8RdNJaN8iUBO55eVgl2EUCxwl2DCHKZmPUcMLKonL8GOqUB6Qdm4kKZRpl0dx%2FWJLj0zT8fLlPzaWJbsRPFyDuQ69jngRRz9%2BDBGzewCYwSjkdWnxp6FeEJF1LrS1dKXa6tD91ZsscqYHu9217Os6jJnhcAyMawQ3sf%2FBVLGzReDqenL3%2BqrUk7mRGIVBTPRFESJDDIqgHgLsdFTR4KI7JVCK37NA5W5tGcctHwFnCwa7c83D0RtxmZrrtBFFt6pZ4VIy3Z2vVX&X-Amz-Signature=3e026d0d02cbbc194099fcd9c56644b33e2a9d85595d20a8597780ceb4180dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

