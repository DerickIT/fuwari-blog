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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=ef531b6d93fbdc701f1c6f83f1c1b383381d5bd3db6a44a5bfcc72fef0404efe&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=8a1c27819eb1e41a92cf7128590ed274eac57510f4d2495ff5e2a3997c64592b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=b6499fcb727e12ad6943b92007eeeac6ad3d98100b3b6264d356a6ff868f79a3&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=af5f80acf614deddc78a813f0f5095e08f27358aeca32353221bfaed58919d20&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=3cd1b12155e28887761faafda5aba4edce8d95929155e0842169bc78a0b04323&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2HZV57%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwK%2BzrYJ85E3k1AuxX034xgwKw77XDvapJgkNpEWlVAIhAN1RaPde2JslQhhhuVsRw58phIhq5A7rf4B8yeCx81tlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghj1%2FBx%2F74podW4sq3AMgLuITAhO1L%2BUbSn%2Bs9%2BuS3k%2BEeSqyHuQxPSlgF1ukcTyjdhkCn0iIoblxZvheDQYiPTOa3kJ9ynR3AJ8X%2FhV%2BGPxrt2ktWjRLQI2zOEmB7XC77hMAEVxA9c4cXD%2FtJRerFr0XjqxQgzXvl0sDagNsJzL6uWPkyT%2Br9t9En2ESNZNUqKwpWgHvNP9LrRjR2oNjIYC8NKcG%2FiRVkKVxQUkPzbhM6lhC8ZO53F3MWtaMMo1XHn3C7%2FQ5sEB2ln5QJhdk6PIRTmT1rQoWLtxjS3u65bqVnfqboMFZWArNkG4WMFsfpseF%2Br5xKi8D1FivEGOYwluptcyIW5MBHNmjsj49muT6V3%2F7MCoQpotJ7slSf7gQqQCa8ThzSE2XSz9PjctrrgJd2Z53yjd7LvtWVXlT3na4%2FZJO8imm6ohyrA8kY%2FcfyE2Pi8tHKoq2bnT%2FWIbPCfF8JEEzW%2Bws5ZIvXyEExGNOb2PQimJKgOwl%2Bui%2FOPFE1tdDTafiFiTUoHR%2FXBkkglrQq%2F8%2BuI6uG542Fwn8qp7LDarBXjm4pWSmZyVif0NBVBWoBKs0bfI5e8RjNsysCwtH7JejPN%2FO2BOLCc5fO94DT21a9jdDQtNQ92e%2BadtUYykOfIfr5O%2B0HDChi969BjqkATv3%2BmmdW7ig12BGz8aWFFuvZAOYZJTPjlBmr6Ow7R%2BG3%2BGDGFbsamvE%2BGz8Q%2FinxcRvFSA%2F60xNnDtOtlqqd3OjgVVk%2FK4YhUSvwC9dOdJsw3JLxsJmpbbostKtdUpzEzOeUJ4b3N%2Bmj3Pk%2BqjEorrgU795AdVCbBTL1rgVQcT5011OnlmFc%2FFPJ58jLDQOPcvMKLIW%2BtsylFuEWmKPG9BPu0Vv&X-Amz-Signature=2543d37f173e9ad388175cb3a35033212e422d11e59803c058cd71cfca72af53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

