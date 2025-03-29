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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=ce98ad4b7ee2ce89fb57aec91ecd1d0cb027e0ff2441a66c3cdf33d66bc646e9&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=8f54dec74e040673452ac0e017cbab9fdf472a51d432052e8dc220eceed69e91&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=3b8671324f29cdcbe7291bdb2a8828e8f9ce8232d94737ae3445371a9ef6bddc&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=7a0e5c2b71a475d0329487a05d7e05ce8c7b9c034223534d87504608f1e692a0&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=f75250ce6b3806f3b89f27a85167ed06bc9f8ad463774ce7d7b51ebabdc5febe&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654F73JYO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T213228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC7KMCmRtlIqdn49zrgzZy8XdBIJCyYYd5L68AHNX5T6QIgBDgNaykcnV%2BNpgchcIBcqOwJr8N7N95Dmf0j5GFd6twq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNrSlVIsaFTNn2l92SrcA3qFtA48ME%2BuH8LGzJknwL0%2F%2Flz1OpaHcTdkV55BM1uT0EdlYtMZpHEgOlIi3pX9x4AYU62QgrL%2B5vRIhltFKVJCdDCTESt4PaYUBwnkVes82uvzfkGL8N9lMl3LK80lX5Xx%2Bzr0j52bPyrO1Ik3ogwehlTqxBMb5Z6vB2si2dMYb05uH3PchBZbXyX%2FEmCB2CKgVXiIcUyzOn8tihR%2F%2FyQ95UcHoSFgMaXArcM%2BmW8M1b6aBvmcohCgQM45CYHM0Y%2BGL2ARRDv4t%2Bcm29hltJeMaaaHvOYPH0aAIoG0HlGqq9iawovDSUMc6G1W1%2FlK5Layc5VHvEBY7tnq5cvldYU2UgaBZxxXJtvl0JpzhJvMKH7Y42dZOC4GLK1Dp5s5BCYZYQobEgeKsbFkBLmtxwrhCQCGgemPiMusJptpgoHfuu3Yawg94tlW5bUUgNdF8ncyIlk4kD5h0GTU3ZFN5eBptN36jdI3V%2F3Q5dE5nQTC2MltQcJXq5GBIDNQYY5xpUMFFArHHG0M4SaMKABFn8i6MTLblpgxWVTp9QcuOoYvZ7WLn%2Fn44r1j0G1SeRijDnULiAomkAiACvkTsQ0DFpTiRBiHNHbabQCRtg5WSMHZaa80c172qbrAsHRXMOG%2Fob8GOqUBHUXoYpyGVenS8W%2FZA2viNyvk3Nx1LEtCkE8T%2B5%2Br1HcbbJoUtCDu6htonTIf9i6bCVZeQqfrTF2W7u3JpM%2F1gi%2BVuvBIX6mdoP%2Fd3ji56cuEb7OuL9mUDpJA9JMbmEQ1t6ChQF%2BMXlwdPHbPug0QWE3dyTb36dBTiWvyX4lRONsUKKv%2FJzd0lN71iVdub7tcMYThuM9%2BTxq0nON40S95oHmSq%2BRx&X-Amz-Signature=c21ac2cbff0f41f77c8651fba613d7a5fa67bb03c7b5cbb6205f6230984679d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

