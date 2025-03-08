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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=8be11d7b10b07c71457fd02e34bab4a9c54a249b067c1bccdba45b1773e6c691&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=eb180b8d1a8371633eec6b70e0d733a01556948cc2662b8d37713dfa1ca44af8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=3071926a7aa60d2ae23edbe88be355e8af3341f8b3b4c88aef58772b1ba57014&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=9b20280cd922f889dc6162370024ff1f0fb582d70be7b5e48217ec9f39341aff&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=a1ef1a276da15b05227b27b73a380db8073d3c8612918f0c0d956c257f8771b4&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCC6C4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T053308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFE7TNy2L0xdXpAk2MImxKB4vAcxQ0MylQS3%2BMrIhYXOAiBPyKVla78TcfgRLu81lPMTPd0hjFHKIPAZP45HSAkBeCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMh5sp3uX3Jow%2FUI3kKtwDtfQ%2FAXDXeqxZ%2Ffd4%2F1ICzpNIscIW2r2WsM3Je3%2F8cfPv9nWxaDk4GaYD9t%2FTKUb5wssgtOWJpUL%2Fi85ngzznOMj2AsjJJoKTkxVA7Qe5JqmxcIaO0E%2BcAhHJ8g22FAVgn0aNlpD%2FaA0Jd%2FK20a9aoY0cRZHASKE%2FYawn0UdkxX4%2FnwBu9oLapRAGyOD2jYnzQIfrDNQ6Dey0N6r5h85v0cQa9bF%2Fo4Z8m3VpNgIU9IGo3Qp6ddnjetB2LLawW%2FpwluwSgq0QH1MaanJXsrAh8VT%2Fg136Ojetk%2BI6Knzok0byMsjuoIUo1Y3KSr57xoQaIU3yIwsUId2VCq0C8dX%2FY01o5ROdzv5gVTP3oZeGGnEePCQryEtv2c2ht6yz6%2BZdSBULxnrbgASOP0MyjA%2FVqoYY6pCEWKComgrWwFJIXDFYSiQu7MTBdHbljkMewMdYzYxR8oKXXCLEGgNkD4wRZsAQAGk1cky9JB72GIrIQ5oJMNo18QLn0ziEaTzm0SPGNPm9yPRiPRS0oZ3ujVB8Rse%2FR6qHDHpV0ynWM1taiUiiorMxt90lxf%2BfGOr6pymjXcRcXdoozlcw1waNQMVuQDTdnOB7Q8CxSGcFyLHUY4yr1Z1UbpNzHiGmGh8w1JyvvgY6pgEWH0jLMFhG8JnbybJ1YqjJHxjCxx7vGPvWit2h086EH9nA552ML1ptmuq66thYVzXsrpbo9NdwXezzjLyCUWHX7mnppHvhfuKvgBn5BdK2yh27IjJIbT6Cf3141EZG%2BefuD15478N7AB3ERoZT9bdWGFcWTrF7KF7hR865le9WZgn%2FBSVkGq0r11YtIA8Qr%2FBAS1%2FeDu322MRdzHF4GrKPZ6cVSaL%2F&X-Amz-Signature=d6c9f69b04ef2b512dfa361f2e5626af4f6550d69bde39a6a0b8f9c72dd3be3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

