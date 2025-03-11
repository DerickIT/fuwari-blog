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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=f4fda61e3ecee12fa552a9a57a0d05fbde0a36a5262c48a699a89853e13bc4e0&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=d0e97f0f7ad7ed4bfeae1fd5bd810b2629af386488ca7f7bcf580e7dbf978b91&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=4cdc277743ed2d1e0a4c6db78776935604a1c4f919874ad9211fa919b21baafb&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=77129e362ed4585f8e97f9f4cb5758f5f21a1bef415f86e1e123265fa3c7e14d&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=f14f78109438866723ca55e50b34c58292d418f71704855800bf0ac81a3237a7&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULJ66AW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T053920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHwDwCnEiFAYSsZP%2Bc8y9L6PsDr%2Fp6dkOwL23FRVlPYSAiB19HuAQUyrJDoKurUygixLFII18wIKDL4r6Kq9WEHb4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1k9bnHlHtmW4Pb0KtwD5Kygl0CC8khDqcYNPPI1zSxFnZnVaWCuC9KckurYkvezGFlWhhNeAWLkk%2FAWDAOMqf7k8VICEplTDh6ZXMc0Svos0IY%2FRCPHEnD7kgSJem4EoDyaDgrC1mAyWgq%2BSRNgfGX%2BxVs4f88tDxTbC6st09i%2FP62s3MEVH5pI0eUI%2BVstNAqMYyr3MQjE0%2FwkuKfPPnGL0Kszi36GdjaPt9TQkK8LZbh%2BR3BcVfIGRFaFefT3k84oUt5%2B9GzRqCsEXCDsIshgAzYeyHTS48aRXiQlTb1%2B9za5lLZNxmPIO6diLgQXMzKFtFxtM0BnYgybjrOBLHzjNV6l5dZr6cQjJY3LbDHAh7P%2F8tdiV9FjDx4Y9VnIGOACJ0FdXxpCmo5G%2F23HDY85DHCS%2ByRh4XVktW38U0vMGhgMLvgN1cgQ%2BXt62AgmbLlH90EYGpRNoZiKXJKssIyGwmMsZ9K5DOeEJRpjliGqFcBGXFgDJEbE7ajJE%2F0YM%2BaftTNTA8%2FYFLXI6KhQKFHDRhxhBFuLyp0UoZET3OxMs2pMXxlC00aGJ7JjFQdivbMZX%2FN%2FK6yJRmCO%2FWXXn0H6lqOPHUHcZ63dYwN%2BALAb9Nibo22xUT1kE5xe2j9JZO0lmBvGTuTGURsw%2BY2%2FvgY6pgHAbBdg4L1V%2F1b5EwgY3d5iGEis%2BMm%2Ffpq7G5sWdNNNrZsyLep%2BdhKEMU3CGwFbw%2B659v1xZvO2WJi8BIHwcfla0NM%2FJdTKShpXjX6v%2F64YjVw9Ex4GwpXNznIPa%2BKp3%2FOQcGEmPOvbZdR%2FGK5xIqhNVYSDF7kcDUkb348pKS3abBQoOYshQHkn8eAdleX79JptaPU9%2FUuNNgY%2BPs6F0nL7gMLXwd3X&X-Amz-Signature=17250d70edf88e5b9629969f2a90f7ec1407b22809d7162b0374e64fb3caa390&X-Amz-SignedHeaders=host&x-id=GetObject)

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

