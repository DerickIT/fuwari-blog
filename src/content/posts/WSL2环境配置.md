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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=4ba600ee71115a9721475cc3450fed3636a1932026ce912a5c2843ffd948215c&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=410e65308153ec272a27270c30553bfe2da97b07c8bd3c1d088b2fef4e3c0cd2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=ed3caaf55c2a101ba7e1ebef07ef1be9fb337884c46bd98787a2bb003ab00d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=d2beba7be2a5f9f49ea41b4fdee1f027e8baa38ca4e59e435e5aad73e50ed04e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=922df88dfe85d52fd98d395f25d55f3367a1bde73a0be858da6f4b44644ff4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECS426V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWgcPTGSErGOwMd7t1ClDp2DTSKsJoZKwH1clmAIm5xAiAFboi1qBhK0Ue8agGqYaAy2SaOgUgJFNFELOGa3WEuyir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLw3xqr0BbfALp2rIKtwDit0LlY9hzXn9JrrkN9eoPz41swDSErrQ9%2BZ5NEL3Spkr8fqiBkqSFsInELhxJRlrgapCzhpjC%2Br%2B030kJQVvMgWOsd6XYOaOUPqh%2BPCViWRvRbcTFD7XAsJcuIUbdjTpIQoZrftdP5SM0RGNHFeKs6kdhprsgiFtAZkkEd%2BdQjRJVuZoIzyPXkksjnb3WUFfD97fhs5En5UGRtftu7CC9SdVZrwN8Lncli8WurXObJ0Nup5FltIC%2BAYbruS%2FgRY8y3cNPFkNBpfqbyfs8IMLS0nVLpV5fjFXfThy02VNelYgJWaojokLnjC5d2Mp%2FR1aeW14d39xwMCWLjiBpbwp6bu%2FPolKHvChpANWIXXZX3k8z6rS4koW0g%2FIF127JGtT50RMgJ%2F3q1IJMIv6Jst%2BBDy0A3vp2KpRXKTNDrFOfzgtN29%2FdPAawPZClDD1cuxVlkZ8Tma11snghzje7rSkzoLDOPOhLP%2BgcQfeXRV8l%2FXExxNC0r%2FKKe3C5c3KdXNHsuKOfcNHfFBzLXsfl2IcFuZjbVz11mWlVgIMvt5NnmFdtuHjc6IBw0gp6GUhPO3NIZQb0%2BUR3bO%2FctIvD%2Fx0CKlPPuBQABKceMwMMdkJ%2BBIPyFNSY385DvctGjUwot7FvQY6pgF3dIthIqYBQge3KS7giCWHEjZCvHZu6Dn%2FQrtcGrYuDvjI4RGhm2vCIXPVS9XLCUwElYfJitEDcx49ag3IAA%2B95k0ho6PxEMvuwkclV0FyNUKzpQL9fyyVKibzgBiSwYJzPPhhKzj8rdvZKdGJ9GivwuXHozRZqWw30IB7BCcVjjq4oipw1UrhwBtWvq7UUY5C5SeZiNu9ALXXg3qcmNcEUbXEAz2U&X-Amz-Signature=aaebaa84fc096e56f854adea2b39faec03c8d3b36f63327352bbf09a610bc0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

