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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=6afeef24929a5c57fa993ea1919fb9993a68e16dab6fdc943f5a22e2b49f79b3&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=2f0dc73dd59453d291a09d9df2a82229c6cebb733901813cfba5d1c24ec1a672&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=5eec3e6c314762a7db91fd8b98e7170aadea15b93c892c89acb8e0c309aaf059&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=3172ddc75d74e8e58bf375d04de89d7f57589b6d714bd13d9ea9b5d9c6b3f73b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=27b1fa45ae7f2cf4c3bf6fed2859f21bea47ef8a15c16a546b733b6f0a03c56a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=06e73faae4c51319cdd93cb7fee46fa7814d4b03d7d319040b42a8f472adde21&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVOIJ36%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZBQ57U79Zpagxpoa4N5Fp7oVdNXka7%2BvdYfkw9mX1QIgHPGXcZSF%2BjMt9M7NrXQNiYB8aMvxczlfe6eDhAuoQWsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP932Xi0oKCORAsI%2ByrcA2jQzFlvCAOyNnVGE5PWAadna6jYMQZPPMN9%2BFrL%2BbJYej0I6oQEQcQDbUbzcTTb2Sw3t974icEU0QT%2Fe%2FW7FBj%2Bc82oJqIqVxwXp7HfXhhxJkdtnIOtOR9%2F0gXFXyu%2FRDvXyq7uO6WRvk%2FxXhPimPi1JELy%2Fi8zYgt4XXU0VAl%2FY5vwv8dCGWXBMOuVFw1HhnSECRN6VHissI5Txp0lHDlFt40SLb5RtF%2BxcFiE%2BHc1CJHsGBBa%2BdwhcFkoRQp7xsYgh0QcndjfqeYRrrP4dG2fagO8SxnxHE2G8fYZ4wh1zA3pITZkFGkeP5ALwdmjCdD5pp0o%2Bs%2Bi%2B0ZsPe8OtrKHV35Gb9UYqv76c1en%2FUbSFm3ju0aP%2FlzoC4S0q%2BKhKr4KwQubZaBMJT4X8VvE%2Bu85LJz3ITP2o0u1g0NU0mQNiHWsh2Kadv8nOMHkmOGg0F%2FVzPOUoH8g4EUByejizXv%2FOI7Q7gdf1GchBcqwZ%2FH4ws0oPe5S0SGhoOSD90LcsfE4B%2BM9hrj61i9%2Bs9yuIiOTsGDE2rm8k8hs2d8CknnFpQo6diBgOIxGlqH9fAAuTKKBWsxTWrwyX8JQSs3wGPXG9jEyXRknifL0ziZY9HWyqgdUbkHcKxlNtkssMIiK6L0GOqUBNH49B3W4uwYwcoCQK5IBppwNOA6esRZ%2FtcwV584J%2Fx60U0McvZyg5H6gH5iYDU472XVqT%2BdSvHtwbIi55YRQ1NCQfjLSS%2FsZrGIxj4ax7YHp8w9sFcJgGbN3rcJBsnGWmW5i1MmHIq0hu7or%2B12uOPxj2ga7ixcPYyaW4%2Bp9c2NPNy7joQmn2mZO8mi8Kcces7Do0F1lKH2%2F3fILjWPKBT%2BU7iNO&X-Amz-Signature=2e55c51cdf0ff6425f4a0db44f1d0f26ff82cb57341f5addbe28f033544183aa&X-Amz-SignedHeaders=host&x-id=GetObject)

