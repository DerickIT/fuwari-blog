---
category: 环境配置
tags:
  - 编程环境
  - 云原生
  - Docker
  - Web3
status: 已发布
time: '2023-11-01 08:00:00'
day: '2023-11-01'
catalog: []
slug: wsl2-environment-configuration
title: WSL2环境配置
urlname: bd266599-5cec-40ed-b803-521fe8cccdde
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg'
published: 2023-11-27T15:37:00.000Z
---

### 引言


WSL2是Windows系统上的Linux子系统的一个新版本，它可以让用户在Windows上运行Linux环境和应用程序，而不需要安装虚拟机或双系统。WSL2使用虚拟化技术在轻量级虚拟机中运行Linux内核，提供了更好的文件系统性能和更完全的系统调用兼容性。WSL2还支持运行图形应用程序和GPU加速等功能。WSL2可以实现文件、指令和网络的互通，方便用户在Windows和Linux之间切换和操作。WSL2是一个非常强大和灵活的工具，可以让用户享受Linux的优势，同时保留了Windows的体验。


### 启用Hyper-V和适用于Linux的Windows子系统


![Untitled.png](https://r2.ithuo.net/elog-image/958e2c133e897b2967b8dcaf80884469.png)


![Untitled.png](https://r2.ithuo.net/elog-image/2202ae1086f8281fe1dac5ced6c669bd.png)


### 重启电脑


![Untitled.png](https://r2.ithuo.net/elog-image/401e9ddc9124a05308c0f71787170391.png)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://r2.ithuo.net/elog-image/0c4b77409fd9111208ebd51fae270711.png)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://r2.ithuo.net/elog-image/b6f58b3a6f2ffa11571b30fad0f9d8b3.png)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://r2.ithuo.net/elog-image/4db67c17334e455b9664de72a712a3cb.png)

- 默认安装Ubuntu发行版，目前时Ubuntu2204
- 若要更改安装的发行版，请输入：`wsl --install -d <Distribution Name>`。 将 `<Distribution Name>` 替换为要安装的发行版的名称。

### Q: 如果安装wsl2时出现error code is 0x8007019e


重新检查是否开启hyper-V和Linux 在Windows的子系统，然后执行如下命令，重装默认系统


> wsl --install


> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart


> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart


> wsl --set-default-version 2


### 设置WSL最佳实践


[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)


[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)


[Work in Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl-tutorial)


[WSL2配置代理 - Leaos - 博客园 (cnblogs.com)](https://www.cnblogs.com/tuilk/p/16287472.html)

