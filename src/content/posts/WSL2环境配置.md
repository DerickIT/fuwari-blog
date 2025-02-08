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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=c42bffeadff9a715c1bd0a625795971a51cf13ea2c038eb946ad09c987d792d8&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=704e8fd9136b7208d47de85fa7fa54c4a6e9c1af03152b467862b99e0a83659c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=ec231f4a28016bc6ce010db633f00c3f3610e749c81da15c385f4a1813d3eb68&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=1cf6882ba01642ca481a3b433e22d4e01609b215bf111d9c0bc647ff41e904fd&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=8b0cb7351830b834447c6d11d2d15428883540d0d5b710a0a09c6c03294556ba&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2SRR77%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F058Dj%2FZyp8iL6HW8eR6wg2qmIDUcmzRl9a05vMfl5gIgWoBpMwFtdZS58ZPAUl81kCXonbou5kSf0cVUS%2F0n4EYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1S4DzPT4PxTm5HSrcA68nFL6EVmCNJNzMA5J9gSojyHm3j6Ml0uHr5QqZSS7faFY4ADtruw8kHuF2pMzx3%2F%2BKZhQpJbVL%2F1bGeod2mW0s%2F2IyyawEeBHbCr5s%2BGqBtXGqUiBOZb%2FlofNzcYs3OlbhftTdFysj9SLhYfWc%2BuzWYPTCSCQtRPNQt1vC2F5WqC0B%2FBexgVNnXoddCAD8FWv15vKZ%2BHx57%2FreEUDNXRQCCBYJIkou7YTql7kfkcsWpm4k5XP%2BURQuVMgEkmzf7n0KW%2B%2Flo%2F0iHHJuBWwbQTA3eYuUd5z4dcOauIAhXpGWIInM%2FLPIakHH%2B%2Bppz6sJwPsYSKkhL3YIeYAo2%2BrBN4lv9nSQRjEf1ZdF%2FVCZmNOcmf8xs0ya2SK0c7VrZisCjxrOnruvRKa0qImZO7ialUR6peu%2BWstXY2cVoLRDExkqfR0qIYMVclhk2rpZ1ZY%2B74ua100II2pUwTYMt4IJ67KbWatCpBgswN%2FerxOJYgs9Hktpw1ACs30ceZL%2FDvYHZ4NI5rtKh%2FMXR0znf36GRCYfEVpJCIsGAMQgTQnhs1EznrTxq5OL14n2geDG4gROoxZ167bRNdSf4hEPWLPGeD5AWAZjL4OYtqYg3x%2F7uur32eq9r0YOvUBzi%2FYVMImXn70GOqUBP77HFofcqL%2B5PmYvPDck82gZHTUbF0EjlRkGzb5fHa5TwwKqlI4X3etT6iCFPGuz8%2B5EkqmIGDMXOct%2FCaRta6DmcEKRbo1o2159Fzqnd4pEKpyBMHQ945IQz1RNgC06%2Bmr1F0tsG5Tcq2BLieBHAKjR9GMygL1PmPDGRedLAwYCmm67JAFepS3FFbtCR1AiVEzhxCbKFuR0hDdwAIZLc17MgqiW&X-Amz-Signature=350c34b638fcfccd890492e4c75424bb9387bd03035d49519c7c3efd2dd4af59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

