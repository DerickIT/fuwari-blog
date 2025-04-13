---
category: TechKnowledgeShare
tags:
  - CloudNative
  - Docker
  - ProgramEnv
status: 已发布
catalog: []
slug: quick-install-docker-on-ubuntu
title: Ubuntu快速安装Docker
urlname: 3bd3cd5c-012b-418c-93b1-c3d325c3ca3c
date: '2023-11-18 13:06:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_3.jpg'
published: 2020-01-18T08:00:00.000Z
---

Docker是一种流行的容器化平台，它能够简化应用程序的部署和管理。本文将介绍在Ubuntu操作系统上安装Docker的步骤，以便我们可以开始使用Docker来构建和运行容器化应用程序。


系统版本


本文以Ubuntu22.04系统为例安装docker，[Ubuntu官方下载地址](https://link.zhihu.com/?target=https%3A%2F%2Fubuntu.com%2Fdownload)。


检查卸载老版本docker


ubuntu下自带了docker的库，不需要添加新的源。


但是ubuntu自带的docker版本太低，需要先卸载旧的再安装新的。


注：docker的旧版本不一定被称为docker，[http://docker.io](https://link.zhihu.com/?target=http%3A%2F%2Fdocker.io) 或 docker-engine也有可能，所以我们卸载的命令为：


`apt-get remove docker docker-engine docker.io containerd runc`


如果不能正常卸载，出现如下情况，显示无权限时，需要添加管理员权限才可进行卸载：


我们就需要使用`sudo apt-get remove docker docker-engine docker.io containerd runc`命令使用root权限来进行卸载。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=e41ba8ee99dc83c959fb955ec3f231a593622615f6db7b0f7e13476c81069ec0&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=7d9e5e4340a20500461318db06264f15aea6093918288918d6bf7cbf1f514447&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=6e7939fb0ce97f19c6c47c20b3032a993bd04faf5e744693e74afd2ea53621d4&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=c217a159faab0002a73721f98e219dd57c4a7fa0fdc458834130615ec071102f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=71f715aa1fda8e4d411865dc3bc3a29ffff9ad45a3b70a9b8633d47c0bf2d6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=d5ab0a3ec7d7d3c797516e0d854e6673bd7c6c2a36a68e53a42c23054db61ecd&X-Amz-SignedHeaders=host&x-id=GetObject)


**重启docker**


`sudo service docker restart`


**验证是否成功**


`sudo docker run hello-world`


运行命令后，结果如下：


因为我们之前没有拉取过`hello-world`，所以运行命令后会出现本地没有该镜像，并且会自动拉取的操作。


**查看版本**


我们可以通过下面的命令来查看`docker`的版本


`sudo docker version`


结果如下：


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZXA3B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDFPk5Q18%2FYQoOaWVV%2BcMDt40bs9au%2BBPrSpZjTq9hHtQIgLl0dJl8Ihdvbhb8gp6zAk9ZyoR%2Fgb702v5sjXl3CrKEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiryieAudsUF503zSrcA1fMSOkpE9QVqcBPAfXKvsnA3g47v%2Bx8AJsjtVj254SuVW5yjC84a6qtEUsszlxX5OqVuBZq5WveW1g1gb7th8Ulz1oqi%2BxL7aDCT5k8%2BVhwxSJaBn5fq6HCWOirIFZAk4STFSpLozvXQEl%2F9VfAc17%2F1npdwKHgetO7mY%2B%2FELAHtVrMupgm6ikPYwiBmeBx816u%2BR45%2FA931f55FdR%2FPynNuut375aI6xz0Wy%2FSmiYU%2FZz%2FXntAol4nESu5YuD2ym6S0Jc%2BO4BI%2Bitty2Pbc7cc%2FSqyCijYAqpf44e9iN3aPEVg1PPCOyZIfrjxSHLYAnEA34kf6q2mFbQJbMPI4nO2WSweQLLVfkA1m7qxjlcRgkb4eSfOb0er832F3QdT84Tc%2FIuiyVn2SR2Vwz3Y8xqxImyBG%2Bw7igl8nOCeZTnDnNyoU%2FSHM1qhBE%2B0vSYPJMN7q3ZBHC2w17l%2Bzgs%2BkUK6FZHkoBW2jwodfMlYSMa3SMN7Hra1fKKBc6ANc6%2F71G715xVozJ64Tx2hxuIyfDVkHQOH%2FgCMYcFgZokmUZ2PfeT9NyMVgrWpPr3TlNF23mH7O%2FHAr0sMubsgxfC7FYTCUCvxZdEzxh41XDBer6ZZKHN4eNb%2F5MhY05u4MKGM7b8GOqUBHklFOvHZlB%2F40Z0RQvIcPkg8y4E%2BDGgAVFI%2FIAikdK1%2FYvsu1Ltdj76PWf00hX0ETVFPOkbNAjiA1je%2BsqOQbPHukNEve07vpjqm8V2XgZ8Y9XeN43RX%2FKT0HpXQncbSq%2BCPOdkHaiWIsh1kzeOgBigHW3D7ED76XCpmkXyNGsWPOoRhKS%2BLQbkXRrRFPPHdmDvMTUpsw7Dv5oMJdrYYpTIryHnc&X-Amz-Signature=d1e27c5101ff06b2e5a55cdcca1339053a9a02c7692a44e4b949e31341b58e64&X-Amz-SignedHeaders=host&x-id=GetObject)

