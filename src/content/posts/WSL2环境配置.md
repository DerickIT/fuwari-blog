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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=58e8e0cb38dfe9fed7536c630390d8aa8ba4d571c5e37a4c0c080a6c21e1afe3&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=37cf11b006d39b2732fee24215907c051343a533c3da73770eee5bbf9576f89c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=bda68b8649b314ec6c9e6a2a0202458d7f6bfe812e7292390c8d3ccaa590e2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=f9925cc4ec9545afe34476d0a8461c5e720fa9517efea37ec5107e5ac10b75f7&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=46da1b5553ccf7d69703901a674738c734b5aaddbfda47e084de61b05b8164a0&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNM5GDY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUUmaoZwrbNWVk%2BLlm0iGyHfpCyWIq8Mx8%2FFBeAbMpSAiBOPGVDe01ix7CHb7tzsZqpiHUVFJWAch9zZ2psPv1QJyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM79s9BqDZXk%2BGaqA3KtwDr%2FN5p7UckIisMi8elnw3nHWrmQUXPVp6FWnn%2FDXHeMfNwJvhFIpuSmVekHeeNH7r84fDEgeDt1laxF%2BoBMd%2Fj491IqgSEpX1Idj9ts3fS4vk3UAery%2F2GtXz%2BPxumxMEqKSUJ9mtTYZ7mjfcX9f8cqfGAak1ODa3Hm7vj5dazHZCmqIdUX4NDBAHB7ZLCguwRDVGia0E2niKk1ofd%2FTRwyqv6F72SfwjUEAWs6EYprLc60%2B4uXbcfp1PlTjew3I0dPguBqqKZMNPbQPChuzFPVzwt6x1qXEDRjbZzv%2BKgH3U6zwvi7dGY0KKslizIg7QPh5TWDCtz%2BVLq230zxUFvq2jwnX2PcCWxZkW3Iwfh0hpACwos18TZlzbR%2BZWM91s5xoj%2BaVzb0R%2B0GGAqMXc7KzE33k8UXAyfh15SeJbti%2F0b9ezM0hQN%2F%2FhbGiZ7bnGqjzm1PvJdUvZh0BoJaDslQ7eaTgibR%2FPDrod%2BJtfnTaXzvrabXH7hszHNqNL0Ffftr9n%2F1O6wRONfm97RgvZrYjsEBGOQJreqoxT9XjlW3Sr9RdGCayfSjn%2B1JiWL%2BkvVrDbNSfh8NSnsrsx92XjhMJklnbT7gBVrdD3BU4%2BnQ9vmog7kP4BaLIW9hkw1YWqvgY6pgF8cHoz9lJgEwHbiBnhXG03tk9iKOa%2FLhMf4KXGaTPFea0qMulBFEpefiTWeMj7de7mjDoNUdsIjk8RHn2Spe7HW9%2FrnwD8FppDQGblTNibgOk70il1pXKAMU96rGs2ujqyYnEPoMnjPd8JCPVECr7Mt8u19oHGW8uN1aCdEmhqYOSCBcuTv%2F1s64FE%2F9skwRXJgeI00ix8nqNqIrcuyQ8xA%2FNIUqdm&X-Amz-Signature=81e686e2443aba1b820fd413869ae1ea0bf4d55620bfa98d289adb24fab7e291&X-Amz-SignedHeaders=host&x-id=GetObject)

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

