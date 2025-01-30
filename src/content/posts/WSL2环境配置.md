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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=cad14dfa959b21f6bbc431e64b512b5df36bd1a4373cdcef468afbea7f93a9b6&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=c19d0fcd2a4aa6b36bd57763d9b16ad0e881e85a48fa3c722ee890ba335ffa00&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=50d069317238becca249e2ed76b893bfffe897216f835650e759eaecbdf5dc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=aef1c728d94ef1b81cd3722026a9830c2929fd1708303189e9eff1c2716f87ee&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=fa5a2196ce4a8c28c124152f8325966e6d08d7b3543f07b6d13f13d7147ede26&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPZNPXJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDse7bE6rTlaZTLTbaHoXmCBGHiGLKSCgKbd%2BGBAUwzUAIgcQ37piRDfjVAp1emFqyzQJKT8PrC0mifQ03peQpEBS8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPT%2Fqjf4A99XScvyrcA%2BUhyK2kPaEDzBMmdDpC%2F6nit%2F4Sh%2FPWzfxhZl5BrzNLdd5LoYMZF6m%2FUEG6lVT77i%2F4u4OI7bsvWH3u7pHwht3NkRhVjMsQ7aRxMG%2FXaMutQcDSdvrCD2M2kfqBbBpilPQJ3fcGOkQl1zZOek7jsGIqW0qBAovF%2FVAnTEE10GKhljc1X6MyILj9q8Ne5tjNRaINWGUcCu8qWPE9q0rj%2BjQf5Zf0X0tcLEjORqoZ0T%2B9R9SHoOVs34CGG9N6xvAphXwKJAk8XcgjgL%2FdcX%2B1coePc9zvSnczeS5bkN28S2A0crRx1Yhn8oG4Bo1tEy2uwZjFt8xyDtZW3GieOxvT%2FnVC6%2Fk5%2F3bxzeAxgRYb%2BrgCB3mlGpfzZQaPwRPmKmXni%2FDzlOD6SkbPa1YfQ%2FQBU%2FrFmHLTmUOQd92WY5Fd3D6D%2FnWFTj0akjkPubg%2FTSQGrUZhQ0vg7oA7En5%2BALQCs5LZVgq5sg5KDKdX0wPj8vQrEBmcGpc1IvMyOdlDqMLXDRAwsh4nSkm6pPIbLRFoWpBCNCG6HZ%2FjkXr83Blc62MPdEgP3bxoxLB9%2FxotSbK73hlNsiwVuG3lT%2BXA9AFxwF%2FSkac5VNzprhuDv7Es2QypqFC7NEepfbmpVRB7MMHF77wGOqUBMxvQRyKP%2B%2BAgGGX%2FHD03kbpTrSfKE1q6%2BqWJIeKVLda6feerNb7Mzv7akGZfhFb%2F5MOR2sThVDgiUkwvqTz78RLcKYdvVnS2yBy0EkzG0EzrUgeOmxDVY7ePSSUdbuLBTqlH68Om%2BLfW3MXXAaFJNo1QbHqnQ1DtN34GQbH2J4HkIx86Hujwvk%2Bk1V8QlhNZ5dzniM4ZTV9EcT5yeAT3xV1cBks6&X-Amz-Signature=6ee0b25692677e10b4771faa6dfe24a69ce8e02d5bf45808c315656cbb59bad8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

