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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=d452a52f3e2d2689dd27e82323147e11a0e9982c731aa294f69d8ed23ddc663b&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=4b67332899ab1e382a849f5515a07dfe8adbd8f1a5be986aa6476b5f2ed5a19f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=37fd5eccac1f67715fb8c3c87631c42b2d5e1be4e6d1da2e063145d081b5dba6&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=5a59ab4295df486509942808409a9885cbf1a8b559647c2843870ab57893e146&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=1ca45ce52bf19fc988dd428bc98a3729138d5278d9034e917fa3480a24c5ecd4&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=4bdaf052438d5e20ec028b7e6f75ddf893a42dd5fc9e36d2a59046fcb28cf229&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZT73T63%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T053652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVv2ZeaRM5waZ0695y%2FYVJ0X%2BSvRSaurHijeJ5wxXjAIgQG4qN1LxkbfNpis%2F0YjLfHeg3z%2BtqKodzSj2d6pCCIEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuve2YzV7WL2EhS7SrcA%2BwLWfc1ViWjgW56ncGR8go9K9%2FesXBCMhONaNaftCDGHaR3z%2BdDsnLXHtAr9XXYBmHjnKL4n2ZhSiZQHwEwkxEowZCCr98Y%2FpNHi0BNZMPc5chKGuFAetbpD7WbNBxdzaG9Vm3%2BmbBbc8mGLf7F5yd0S9vEL1ADpfN8zup0QTRB%2FyMbff4IzYMc60OhFNS0HFS6pa7V%2F6rHxuToB%2F%2BONfU%2FF4qFxtkq3ld5ZzmhHuWzfUKWgUg%2Bmukg10skuXN9dR9HPDYiSpU8HxKw3FZ3ZIwr7vS7fpJKTo9UoYMtb0G5mTWTy3rsOknMs%2FuL6uxfxqjc3oEvdXSzXNj%2F0kaf%2Fac7AOc%2FNHrSO6ECnVrclmw%2FdjPK7Je%2F73Is16i3uhBety%2Bdy9P8rdISE%2FLdSvAYvA236ZW8hEASNs1QpeI6z3Nm%2Ff22io%2FzfpVeWAGyNe6Wi2qBFmBvZoetZPHi%2FwiCxMAJgsJ%2BN3TuKUWeUYmnRzUl8%2FIAphEDb1TNjk5ypXPOeTOESbb8uystw3nrl6qr3iNFw2ufPM8BGAwDZP8HAO3wsXrCLf1CP5AEmwPWLNW3Zvk1SW5vQg9xVwrKuJ1%2BsfV%2BLaj82OsdYFyW9JdXv8pkNqHkBrBoDct79focMK%2BXtb0GOqUBp4NCo6BcVEQGmCqPG99DpC6H4UI02rY2NkKp1lcwZ%2FCdtK%2FJQ9YzDtNTrUDt0z7MqxL1648DALdlihGL0A%2FW46ai7%2FtQrmeQzqwgQxEhlitp89Qghyhe4xJUXTywYifUHsfyS71jfaOIJrEO816%2BqTaHuhW67ZGuNK87448C3MLhTC6jP%2Fk8wgABXalGGHlB8tuIIyw4ybRiNNHArQ1ZNECnz6Q0&X-Amz-Signature=bcb8256bae7f8f2eff96bfd277fd181b435d8f656726024eabc5b6b926cbc25e&X-Amz-SignedHeaders=host&x-id=GetObject)

