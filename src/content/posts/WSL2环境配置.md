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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=59a20bccd6cee5c62a5a286e76cf11b54c57bfddfe0ad0b07e5c2bf4daca53e0&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=42a806a1b7d172e39a88617d38f66c29c0e7d3bb1a0602da0a03401b3f6cbcf0&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=56aeedc7e00ef16843901b0647712fc69c31770877645c3b07643b1d10e76741&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=c4a541bbc1c1ea26abc5806829e671af0248e38e2498cec8490d853fa93fd7f3&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=be5b59aef562760a20e8af3d37fbecbf25739c7627961af1669bd6a55f7aa937&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCWRWQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDSrBS9EDXJBni2%2FDygyeSndYrI2eBTR3Lko%2Fvvc%2FQ0HAIhAOpFCqeKtx11sU3AQCKgH6ECBBzDVclSc2ezKmjE02wnKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4YbmfXagJYVbxsAkq3AO7T8pSlaYLbxKxvyQCqBWOVkM1jUrDZA9wnH2EVzzx1D7OxrWkDf8cgiYS4pQ4Q9DGnJpKngHAOtaMr67M5dsbUpSeXgPCjiuEuC6Xx2dUJceVWdJLK1EXA%2Bcaepti2n1kQC%2BgXa%2B0nhxy0obvhcbcoictKmElCZkQEG0ukt0doEsdQ8I4iKRMBJsJkXoyrhL05MExnw%2BvM7sldJtL4Qk8u8vYbKhoCRPCcJLBwhsqBkRbMCAEV888cMELkItDteLEsjEh7786KW9orFkQqbPaRR6%2FaoQlBR0t38f4au2UYxQfKttwmbmsOzTeMbEHibsRWK7IjsmGcY%2F4V52hCP0dl1STfriOUBJzZCQldttPPLR1rbJiJCyL3Bief8qnQivrSCVdXt5O%2B0a%2FlGb9ktb8fBj4x4yNUiFp0ykFZ1FUdrB2oAPGYYo7hhROGGstWQdfv0BJre73vxdgJjrK8gvRp%2BMAQ3Yrnbsxafmf4QjUEF717%2BDBJsvcvLyuKDxHRofsncVG3urgZBraF5srZGf5H%2BOIIADIkWiPpnUlp5%2FDq1%2BEWDbz4hnZeQbFT7OzHUoZAMcG3AQn6xAz7%2BMThMn3H4fgkVxjuYBU16jSK2%2FiLvF%2FzG683Oqk1elGpzDY1qa%2FBjqkAfSbftb3dGmFXy3fmXTCWJ%2FhCfhctWB8AiibUcdI%2BVCyHFjvj53VoT%2Bmz8vPCirC1Hs%2B1MQfV%2BTKCqZrgY9Rp5TR0wdrTvLLk7twEbytE0xbOfO0Jf%2FZz3lCSu0oj%2F04V3iKLuO9%2FrqfY%2FIhjVvB2EqTpu4fal1NcihC%2BvAQD3LcfDhcuhbKgxfBJgMuRdPfDFK6jNGeKXud32nLbLMNYEwuyBjG&X-Amz-Signature=7b7ef4945747fb130432f0d31867ed1222ab0e85beed6b2f739daf235fe5ddfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

