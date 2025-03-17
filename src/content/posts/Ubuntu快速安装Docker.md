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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=e28afc7f1d713d2b51f35a8ccf194b8429c0e8143b77c013f44a56687527b990&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=58d33e4223b646aa3b7be2691b284653820ed901fde3bce9ae3728c2da0ded6e&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=520cf281de134e0992df18df7c8b273ee85a8f961b1e914f66451e23418680fd&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=8d5f3b5f871f3080bbd9a575d074d3d139cbe258fa33e52d9e62fd00fb51894b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=907ec735d8e0b83414cbbeefe4d359525ef14e37c339241c25772e97417098be&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=ee12820803eaeee0d384aef4b95e7e28ca4795b89ba1b396431fd3af365223fa&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLIMDRH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClD9GlPbe%2B%2FhGV%2FmrtPwBJn9bIdAEKwfHhCl%2BSptR0PwIgVOlhBZCnMQrvOvKeZdOgNkKKEszGkQ908uYlfiIaD7Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDxmClvA%2BRTXOp0EyrcA%2F%2Fixg2ihRV8WDZW%2FNEqmPrjxA28wyXSPohqfC1UzWdUdRMmj4IFSqQqc90ptH4qhbj8xNgnUxn55Pbtd4wfBtngvkUSzip%2BO%2B1ug6qg4Lw8e%2F%2FVYsSMsYtJKX9DkxQjqntHGhDkQn5Up43A6B%2Fdh98uogvH5wdi5cPk%2FyImZZWitpH7%2BIBqLq3R%2Bc7%2BxOUt6%2FrXsRV1xV5XtmLjYxDZONAoFMN1%2BDDpc0IKXeuERbEyENeaKnol3Y22v3IRNGM1XXgzqqnc4yPbseUuST%2BbL6TRVykub9GSIGkbaoiynD8u9v4JF5%2B8UeJoF27cYhjZWGI7ZLCwtJ%2Bw94gQkHbZt3xy%2F9C9LD7%2FARUcBIwpKMRKAe%2BGvLVifrhU66HUPl5bZJ%2FbKEbLTNf1GGur6rGxt1LwS6%2B0BNVnNDt1WA33ykzrSewHkM59o2KxKflAmXySVkslgaSYedpptlzDaBPnsce13Yuou2CF7VfL2jyRKYtFnoGhHkbVhS10%2F5r%2FZot0kwRVkk27hAgJlo%2Fc4md%2BjFOjFvP%2FtveetsZw239z9xMitWzMDc35BLmupZjJsvlay0RbZQiai5U9ynzKM5ByrmGR7R91DGK1Sd5fZxP8gCNR6RsDH0FSWYIXl35WMN%2Bg4r4GOqUBag3UvwLlZ0EyNQP50XQa7nq98%2FqIVs2CTgFboPdtFo%2FZ1WoAfH9L%2Ff5tm0y39hppWHJYEngEttAQZagtoRkRg%2FyQO%2FMidqRoeicSPdnULSpUSFGgye8SEaTrZopAHPxeSjDOjFZUHtUZyy4VB9gJ%2FTywiIBtp2e4Z0FJTaBXCzUzp4rlK9%2BeaGGZqrISfsKFnFisXbSYEUunqo1b%2BndfOSzBbcBf&X-Amz-Signature=4f164f66fe55e402764d82d5ec828e0b8462f4c27e7a50f64acf98ea12392d93&X-Amz-SignedHeaders=host&x-id=GetObject)

