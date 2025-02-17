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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=072e4ce51d17d537289fbc3d22dfd9fac91692410aaa428b73f3eaea0f712f96&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=625f3c0078a6e299441daa78a2ef0718ad437ea56e3282c7fbf1040be41573a8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=00d66861efded50c3b5a057427db5d9af4ac18f373ce86afaa79319f87f5eec4&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=bb9297058c91fcdc0da6cb9b65c5c6b1e7c60898b3281d2d9d2dc9fb5b285c1d&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=d62337885a66cc9ebaad938145ad79dc51fa396b1403845660048cac27920b80&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDNWQLV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHOa80wvvQPzEKcSf%2FH1KBJbNn4m8VxaJe%2FIeiTHte4BAiAc4UFfrbgbfgdJZ71gcQxeNyZH36tlRknVYU9rYyS8DCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZY4n2xTV9ElBDn6JKtwDqBshIJ7F6ieFkFXGYS1kZ9i8qZWag6krfMouGQS%2FHNQVzB0%2FJo1WmFzS33JIuqpnkTutJRHQVYhPm88Gncc21lFnIaea0qPyIUwAN0wqZ9zDsY6AvCGIa54fchQEd2ruMNXJKictx4Y29A1rIS0RKtVS9q8sHu3%2FvJNtFbZafHFIf7kDqJSEF2UBZYXc%2FIDyXjws196XAQpWNkZmxuLDdYLzOq4b%2FarQ3mg4byBC8JgmfIR1pbIpq9Lk91TeOXPjywKOsjURcl12%2FZZIapQsemUn41OwyntS%2BYENt1p%2FQG%2F5NV6D7EC7mvzw3mq85JyrOSDyUaFNiFwiQnUJ%2BfGnJcMTMNx1AelhSejQS%2Bd7841SSHS7oe32x8sbtzzFuHUljCo3j5pgXZMBbvNpzdLzoOaYdJgUCPc2zOG%2B%2FoE2JZNhtpX3YlXbmIZJx3eD1Al4DU7tMoqz8XH2MYQUNpZyGYU1XGblUCh%2BFkH77HwXP1hKj4fAVAB6eh7I8nUmajdoBDAEpsbvw2h8mJJetVSGl0tZHSGpRbzoiZJlUbltJaH1guIEM%2B9wS%2FAjzUnBfQpYcrI7aNKif83TUUxUcWPVrCpDrL52jMuR8E41BLUh%2FhKHH4DsA54k1K4kzycwlcjOvQY6pgG20O4Q425LV0DFlH7jpqOMHGFsgrakJohhUYGSPppWeEgCLGC4F7F5x11NSm42ZbEno3gumgI9KkXdRp5E58krHvj7qyDGY8CKkdKBID%2BqEl6HdTeZCn2GU4LQL%2F%2FZOS7cRnt7dNgsABubuvW24j6iSNtmh5tjfmgoQTNzAR5joTAyRetli8WuU%2BTByaV%2FiAnxP8g88ueYSor%2Bcqg0hB3AaKAEO6ST&X-Amz-Signature=3609cfeb75fc517a95c603e8c96bbe22c9b513512e07f358b0b466a0841e63ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

