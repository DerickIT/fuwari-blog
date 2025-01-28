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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=9bd7c04fa9a36cc90c95beb7c53a6b0b68b06726b6dc9e0580185041d55c5680&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=78b889e8a868aa8a1c89b5c7fb32805bad1db3276ffb1443b59611fed8c37b0b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=1c33b98c5a5ae9330fca1e6696d7223e059f54aff43dde80e7008a5a3c9a0b13&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=8b718768ee4f566d5839f52f02178e56a71d2ca044929bd1227e0032ec0c1009&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=c2de3d4534df6bb29cea2a5de26ef1700d443066ee429ae59b3c5cad49559f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEMH3G3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDamvAraRGk67AI2veA%2Bfc7bJ8ohMdySRoagjrbludKAIgD2R%2BqsU6RyKEdMVPG8HeptuIs%2FupWpRPQ5F0JsgqNm4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGMiVp9jatptHc6xFyrcAwLqVASziZjOQ1WMZfy1o75494pCpIrEOuTEj85kt9OlyNub5BimxE5JLMVgHp2kormIrj6fQIEa85EGEq4zqyRyMjxvXSn9%2FDizXnA17e3bSentqipxUOfxBnZmy8aW08HA1fpYz8PbdQzcFCk%2FtPbkFGVm2hkT%2F0t5ij58MXnjImz8IWx6lVL5j3OeHHYzAf48lf7aEvBos0L5GgX7nzWdJ0Ij0823Q4oi3mBYqoGNJRXNaZNQExBO9vJyUIwwQELFDsetMrVyVcVOVvaQLb%2FPdgSp3iJ7WcatmXwfxKoWBh%2B%2BxSd7RxRVYnRSv1hgIu%2FG04YSbumun7jGomJ0Ts%2FDa4AdMGCYZUxaGHCTV1sE9RVUlf1I7TStjZiOSmNM%2FlX1oIm6PoUX50vHCkCttDV6nU0%2FD5jWBPMZnAGUZVvZR0SC%2B8nnch%2F%2BVZtF0FR1J%2FRxwaNvODzScEjsDdM83g0pgyFaX%2FYoTxQkATb0YQ8wyup1manjlMG0RzPRu0JqE6%2BTGM%2B%2FO4TYlLyp09ipiTchFWjjJb5gYfWPUtxCEuvRZdZ3TG6u3MwyB3SMYnmREoZzWzBwCm74yZ67IbBKxw6UTcCGGeeqbMAdaLmh5Iqu2URkumk%2Bp3QemgwQMPmU5bwGOqUBboj0khfhQ80Q15T35XiSBM4PP99LTqplOszYfOK2gnm9XMYyiuaesixPrIymZvhBC2lW2RGa8SX12pegW%2F6T5lrxY4nKtYszIyipBkyLDYUkbWiB7P8HL2kTGMg2mOnhDmZ4V7T2JbtUBImf0xUyg6PBTTy%2FE2BqXb4W06QIdMB0PDywVGhvFjoWm6Vox9eFha%2Fd29Pqik%2FPCL188PnkurPugNZy&X-Amz-Signature=928b932de9416b2945fcfb119b650cc33eda070256b9bd4aae97f24b05affd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

