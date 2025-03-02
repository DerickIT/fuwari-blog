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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=e56a67b5c4782e42fecdfa3032b56bd27974bd7be75802fd1f505a86073d1553&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=c34e3b6266ef56f8907b84c3be31cf023dfd25a2bcf4741441a4b2f1dcac5bb2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=a42ca14f7e1fb798f049f8997bbd692afe96893b89ddd95b09ed0d2fb446f385&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=ba3f01fedf0f84407a3fa3ca9c77b7d73fec9e26ac78d404fc8d5e855a16aba8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=024f389c604bafff1fa744d3244733a60b6ea2c137c3f957ba7ffcfc43e09689&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMQOGHA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ8DqMM060Pj1eIo4O84MiSpct7aCY7mXDgtQzNRJ6XAiEAhPxmIHHScsnZ9a4as9W%2BqB3I0SjqhwfMy0rrzj3s0lYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU8v0WkSiDFLw9FlCrcA1kZjb%2Buinec5y%2BBHpYcoqAJfzYu75r6dQSl7MZ1V%2BRWJpFQJwEL6crB9e3wfwAr7QkldFbx4TFioHbSnJhvOq7m0w1v5n8K%2FSb6zVR8hqg9IgOTdBvaFtza4TyS75YmTLS9St5cDchTfNnE%2Fy8RSaWpBTqVeQxX%2BwXnxHSlL%2BNTgKfU60l8RoyfQu5smJiYVvJUSI19E4M5uFBjEWzfBWyf%2FYYHbARx%2F%2FFc615CpqDYP8HKw8M%2F%2BgyIqa7jFYlSC9%2FtVwswlG7%2Fg%2B53j2QGRZ6m31s2Yq3y%2FOi50rFu48ffbrqvwRIcgFMjzINQx21VDc7o0jZohuICbhXKGNLsuD3gEpTMxsXW4DkMJACeWc4iOqmuyHrdBKgG4pBLC4xATyQz9TSHXIly0c1AP2%2FxhfwhumqCH7ZAZ1S7ZytCMALwQIpUkI0n%2Fr3%2FWcZTWaKI771wP6nAUbbdAqAOmjHO8BJNbjrTtrWkQ52zoBxMLMvY5ud7vOkDIzpBe8RPYopvG3sCEevb6OCwUTwbv2iZBvK7X2cAbKi1ktcmGDU%2BkSUxb9FIWb3hjhbKQHgV46d5BHsOY0EOfkTiZvQ0c4s9%2BdcFDWTkjvLAlRxfFCV377qKoZaWjIvMfWnEhjmjMIDqkr4GOqUBEfTwobJ%2BddSnjAu6vvx4K0QmpxTErFprIln7uRbV5Zf0AvS01lAnVozLDVJmhVccu%2FQ%2BR%2BALcXuHP4QXoOoZ0BbcFhUZVNShqIWBHbwPYtxCIOUSwmeU24qug%2FyaVOS%2FLKP51dv%2B%2FVfofimxmURJwgsWTXu1fVN1YtQTILs7cZvsXoauPKWXpysHpqhptlP82FUAmwunY42qsUYwZH800aydA6bn&X-Amz-Signature=71ee55c3ebcd61e76c4a1ff7fff54ffbb07cb798841f94efa37ac9a1c383ab16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

