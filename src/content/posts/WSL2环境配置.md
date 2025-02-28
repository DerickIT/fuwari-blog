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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=b341d11c9d85f86ae1ef593c4ab18ea3277bee6d1a1b36b3b6bc9a507ce6fdce&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=91432c56cd287301423f5bed3a89d1378314d7a3a67163858949435ab9cb40e2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=9098f5c4a58cba9577eea3e5a4d9b76c01aba9c714f4c86ee05ec69f8b6110c6&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=ce3c0dacf472b9a879222933d6c5bee28c57ac7d03a403465335228c13be343a&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=a30dbb7abfb785a804e858a6e28ba7afa1f311645d0ba81dcee1f1f988edd43e&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7QM6AM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCB%2BWAncg8aP0J6covp22bISkwFL3Iy6tz9xpWCICJxVgIhAPm%2BnxAWBL6AOALS2PMsf2dRlwOwQOkeITRDv9QnmSaoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpj6gMMktXC5jT2Z4q3AMP6uI3U7WrFPui98ReFYf01G4GLSc4lMADHuoU736rt7Fa47%2F4BGSkTmUA7zSLAIWM2EeXBWelxXOUGUAlcwA%2BDCy7zyRYxfPUMLL8FoO694kDLvn%2FdLpEOj34ZhWj%2FhzuWyhliGct4b%2B3rVBIp6zqwylMqX23oFyWCLCig%2B%2Br9xdOGfDC58gcvhgg4jwNEIYtT9qHnjBX5ST2StNa50OijvYikv%2F7kqIjA%2F4BOB5F0oJ8pIhb7lsgLvc0%2FGqADMrH7fmhWCxr13bmlia2mLHF6budKgJBUcm8J8u0GHLsqsH4ciTERIO2ws%2Fg4wYZ5%2BxpUl%2B2XxTU7Kom%2B7hCC4JTFv1eq%2Fe9l2i%2BZKLX4pr%2FWnXegNvoNE2%2Feqn04MddB93AWvTSZolz8NpmAbgxt1RbYJ07QqP8%2BT722mY2MOa1WXfrmbQbOAQtMKDCH0m8vwiV4gBM94eQ5YVsXn1SKaeV4sbxGyCCLFOAfWqdpPuXbHLMPx8TyvjIV1fKABp2eRI%2FJzWnoT%2F1OBZD%2BDK3ziRIRBe8hXu3FLSerAgrJM3m4n6y%2FwQMgbVmfNjiVhS9NvWDZ87PAH4cXQNT3mfwhLSSMmYFxDBomHi9KKMC%2BJq95%2Fyb4fx8mPNxW%2BSh%2FzDWj4W%2BBjqkAZsdzfup8u5vQsxnskkox7E3Yqf6qE15%2FzEiZbM3JfNt6bWYGU8stpQfz3WP91zhAk0UwrOlZeuODqGxkTy35ARce2pG1oEDLLTh35DE3iPF87pAagGdlI6L%2FY%2BDNlfVQ9KOEEYz2zs%2Ft7Tdbaj8KQVP7PwIUAi0bYElf4lPrQM4Aw%2FXlej6Cau0NLhhtiG5jYZP8pPM8CsHzZO%2FasQjZzHXNP7m&X-Amz-Signature=7297120b19e8f67ab6389fa87e14bab844893d3c88557cca070bd294c55c4ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

