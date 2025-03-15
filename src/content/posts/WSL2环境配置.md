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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=f00c5119121bd6ae5139f0c20650f830b622f31ec663dc5f85b1de615efc7df2&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=fadeabf4d8a0aeb3ab97d94138167693bb6ebb317e257f4f13891eadc25eb6d9&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=e3009853855a40c88b1a8b709ed23832f69287617933a6030ea9885db0ca3232&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=9c1cf320d9e72b1f705d2a569c31b585fb1d44c40ccc4e03cbc31377ae10f8d8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=ea537292a5a2b1f9b9f3124872b75fa27c8ade1986b24b520dee5ea389fc51f6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3AL2OF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPV%2B26p3Hudekv3LW38dx1zm%2F71dxPPJ%2BHnf57qAaKQwIgG17q6HM1Mpkrwei4Atq1pAoKwNSPXqtDkYvCapoGPhoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGClZ9a2dO1kVQPyGircA8XZoDPhEMA2hjw8GRWZZnZ0FeoBZdkbC4l45o0k5i3OgSzuG5rmqlT5245kU%2F8EdAaN4dFgAk1WZBWsZKCY5nqIgHgYzRL4hiYErjYOeJ4NukCET156aYSPjh%2BuEQE4Hx3p0T5jXGBdOivyFbnurx0bmWtbmudOn28Ewo1SSg89R8YwcXEyxLXzguaZzSlhcyK3FALGTzLDevLQQCXhLx%2FspKqj4w83xrZbTXwKP%2FT4XjseDEPeBu%2BBD7tIveyGdLFPrsmXtRqOLRxdAAKT1%2F6dLk%2FTps2LkXge4N2P3bTiKS4J3ODETujiE26%2B3hGpJfrMTa65rcyaZlSflal%2BI%2BzkoVMeBa5VJkY9dkGEi%2BoaPQN40Pm%2BFWtKxWlyMkf9ZPaDeVsAQrxlvgL%2Fu48%2BGVB8Ohtza1iHpLojeO7MCE34cx1HzjKOK1xishC%2FzKqi5AeB%2F0vUYnYwEg5sW27LdaXjauJD1llfo1weYlpmdQ2LCvDU0Vo0X%2FA%2Bz%2BbsAMXTKvcrbNC7ucxGkEWxXCEaTmH4P27kxsmg9PCWZpZeLDeL0%2BjKUwp8upFLcXtnylYhayUpKZpCs9Pnx%2FUTiJj3FvpYuINFV%2FhzlAh96bCOIwofPYYpDJvFBG1K0auUMN2F1L4GOqUB5UpQwW0H8pbcXQd0mosbgh0r2AF%2F5Ki2%2F0%2FZKWxnYgYEs9UrMElbX3bG3mmOXGZ3B%2FQHR63%2BF%2FHQ15eQc37HA65f90%2BfncMwG4h9VToyhqmeOKAsUD64rIDRhrAedzaSNdJ2%2FbWIcAD08LbSxK2Q5DaLMD9xf2beA0SGTE1ycavScMJzK9hbS%2BJtKheJCQqk0e7ZuaSclQ4MwB52QLCxJNEDYOHW&X-Amz-Signature=1080e560f11cd60c6015e5d75e32a47d2d2316b06aac1cfc1c7a4f057b8b2dae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

