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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=a930e7fb76cb05865c3840758726bf18099a369b0f1d7c782eb2d14fb56d5e17&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=82a0b59ff1f7f995c9ac8907e8bd7aaf8b8ec493435e3c3718d290b18920c70e&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=5be3f1408c2427f2ac9ec2eba45e22850e9328673bfef2a04f613541465bbd4e&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=e92eeeb58d99f6ccda56806b753bd39ff9957e63069858eac50901d013f9bbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=d7203b37074b0709666370ac8ff2d43399e51d41a0ff3db232c9837e1e4a7fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=931362c559b6601d558bfe627feeb26ac99bb7dbbbd598ecc14eeecc034ff6c2&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWXVXLMA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWNzvlyiCwQCP5SMooNLVg%2BWaBwOTkhD5rQj9qngkiAiB0Ps5AL1fCj7IMFb9wEBIu2dIxRt%2B%2FBG0aIWzpC5OzcyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTTpzTHVzMs9N4XOKtwDTPUvOGKOi6bZCUBkZ0geqNipf544axBw2By1TMyk1PgysqQE62Piorx4S%2Bh4pE0qPluWqqYU1EEKnUd%2FJTlfZmkuhLuoW1D0fdr7UxvBOu%2By0gzvNGwO6ZtMTy43unAErlpZqYJ%2B7l38IYi2qbEzebXE4uZDA2zWW8jYwaxrq2JLhQlrFdGsIGyHJoj8baRWS2VJ55k7SybaxLaXIbsoS4AsqOPw2W0ecHIZ4Suasgvi%2Bae3nyoLZ%2FZVePhvBe08MR50FBifeIA7AGsAdgjMmou%2BgnIzxLy5LXK9jRo%2FTo%2BUKbnVbnatX0keTorKWxDR3QIfm84WjK%2F%2BNhjCdMVPPwSpRHW6%2BPo467c1xBzowBJHPW02tkBsRLvT09LlMfhl%2FiYjLIZIlU58aumGP2s%2F%2BWq2rMTg7wHVtglo39ptQ33juW4qZ9ow7R3oWMAS190fQxtRD3ufavjoXt9k7%2Fugr0rDjfh5DayAca%2BHlv1WwI9XhNiLNntaXCX8vihoEXX6C2jBUElwzPU1cC%2BN8U8w7qwSibtuAAkENiNkcFw%2B7DwWMv98BarTs3t9IQJDKyX7y5efMvKnc4v5330J5mSKnpPja%2BCoF6FViYGTF%2FrBvnTEdDkBnTGVBKp6bswwqsXvvAY6pgEvU6%2FHXmXKfyKKn811LOEfkp8JWU0hfb97m2%2FZ49717aEnyKchVpK5Xv%2BUg9qr8SkB7jfJHuyBkChnHATtx8qb3YuiRyhX7mefIed3Yfb5UJyZGkTz%2FwVOjWxv%2FtAs0TC4kSL42GN1JDsJedsrJ4o3bei082DM5EQnllDhqhH0lb0KlRibapJ4ysoLZx29o5som7OH%2F74v3NLYCEd%2FiRUnaqpPLH4B&X-Amz-Signature=693c03f742816f8f2d1f52c0e3ae80f9c8ca9dd6293525ea640e8f46f50dee6c&X-Amz-SignedHeaders=host&x-id=GetObject)

