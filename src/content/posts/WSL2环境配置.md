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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=e7a3c23385ec4a77236c0d44fb025bb40fb39ed9d7a8538e85a3f93e0bfa5739&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=4daa8c2fd7b00a1bbd2266102ae189389f3332dde17566f71bfd32f350e1ec3e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=a4f78aa3cdff65412086c0648e62306a71a27463acf6633439061aeb537ba85d&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=cf42988ec4d2e837ee001a033563ff484d375e7179912b0ac782a27664e7ef50&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=c2e84b9c626c3fe5dc8390fd444ef789e6fd2e3ab66380c495ab8c55eb6e75e6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SV6G4U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsZBaQPdSlCQxWEh67yAv4U%2BdD91f5wflSMPO%2BPx1rhAiAryuQUwevPiT4h8d22r9ylOjWFq%2BhiwzjHmUNqUX4qRSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM0Qim0oR9sCjemPiWKtwDKzajxhAtq9EMfLCMuzb3ki36agqjRV%2ByP8VV4ec4pHGBI6TD6jeTMovXPWTZEoSDpZyB6lkTqD%2FYMm2O2TEDeT%2BdLiQONlP3gKtklwis2osiUGc2pH1fNOkSfFSw%2Bd2QDgTzo0LGAoFBCKr7BbIQdayUucX%2B9bTdabrPgsT30dQ1YLTkwQhh0i%2BzsLHE7YMrFlUf4lKdEhC3On1Y67Rv%2FUuf%2B9X6FxgIh2tWe3dxQC71C9diONvKuSEc8QDlu448MTgesEcBrqvUAJ6Ks13tX3%2FMeNYfl27xi2mOI6YHf1p4fHlcnxub%2BSKglOuO70H6M8s49BtvM8t3OCb65r%2BiKjXzQMy5zF7At8xzWQ4bNcO6ZaMsK3fRKgGj5eVHMyxQIApzb8b3peyeTGe5DFTLed165ohZIljwheOtQK4f2kmygHMo5tBOGB5kNiZj5NYkdlPdLgIWElDPUp%2BcnAje%2FRwZkDu8XLeklMJ0GhjOWTg9rsB3rDaR33kpojUkAZCvjc3nJlBZEhI05nVf%2Fj9%2BArcxh5Q%2FM7beMkLqRn%2BO7kRGr3Zx%2BoGXGeB7R71t1ADEyrOpz8NuhZo0Q%2Bbd7ZS8hM91jJtZPa5nW6y0nqbF6ag24Ukle3I%2FyhFRK0Mw4YHRvwY6pgHc5h7GAlilPJnLeukztXhkyumoU%2Bc7ZR%2FpGxeOYcD4GvZ1B5XRHsN%2BMxOLJuQQMa0fEnY%2BvXX7R%2BkJD2ui6hOKACnTdsBYUFzozC%2BYx1qsN0XoDRi87wkGjHUi1A3GVKsX7wqgnugrZBQrirwsDLgPQLt6A%2BN%2FYVnniiC%2ByZfwiMCDuxkuWagYn8sc9H%2Ft87aZHHgdzEjXfmRWM%2F%2BLWCFFrNaFsZeV&X-Amz-Signature=43b579da9a44fbe88e2a31e5509790d23d7b38326d113ea0093ddc93b9e5a713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

