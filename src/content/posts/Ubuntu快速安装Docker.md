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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=474f9e5d334e3cc8e4be8340573ded787127550bacde89324be2d6c257bdd17a&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=b82b22aefc420cac33d6850f06b28c5f750e072864c203b3bf02c5d8e6cee01d&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=f27411e6489639ace19190e0e0147a02c2d3fde1b2580f2c4e8f97955821397c&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=2f44045627079c8537ecf2878288eb2b4cfa9beef9162fc97b36765cadcd5d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=7316cb62f23e4e87e066bc34ee233c2dc18ef2f18a6b117bc999dd1f952c7618&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=1527d6cdca204cce9ac8c2d75aec68ea7266fff68543f3c7de9d36f1a86877eb&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUZKDDY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T053658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwjQIip1uKfA%2BYOeYsaVOHe49x0XyEjEgkHPCXw3UvrAiA8D0k43q1i9NO%2F8bGx7tJBqSwYue5JFXpkoJ8qDH5GgiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasP3hsLKnmhcFge8KtwDp%2BfQOZe3ffNd1LYB%2BZLSZr8lQul4HpLcAmbElstb6igeth%2F%2FZR%2FR3ERPy0mKuzaUT2uMI3o8rpP1WEPydYP6XvDrmDV63XOR%2Fr8Dbrb2g3i87CXuldULoPpR4XMc%2BmeSwYCTMCodisWKPqJjuBdzRx%2FoKbH%2F48rz5lhXpXPX%2FXrGyQjG%2F%2FONYHEr8WwHHsXItuebAk2cMhrioNkRhGljtlJzcn7J%2F74P0u0V7FhUvaIBb1mdBDuFFoTc5bfgvFyNpr8FWri1AeUZTy6rvcEoBDKOyl%2BbqRK%2Fbdrqcs%2F4VJ122Fr%2B17Fh3oRAxL%2BZe3cnvPUr%2BrzeKbjgL6C7t9sZ95dFITgM2uLkW92c4nT96QtY74ma4LBD5Sy%2B8hcSa6dwifkLJZdhnIdBfwvDSRfUSQcLXMd3ph4KA8brskmMOb00iu0urQnL1VPNa%2BinWNrzoF3%2Fwc0K6YpyGCWtEcPIb0XmC5vygUmpD%2BjOMjHOm3t4MQI4RvUYhyXR%2F3kpCara8bLTL7Iqj%2BzilX4vASpKMh63pdCGb25VAw8lhbeeh104v8hzY4ZPY7OG%2BnwLo95B%2FG3nRMMb3xTINma9IcJdQN8LHGFSer%2B6SpSODUOM12NZYMW7X%2Fz0QwmSukwww7%2BAvQY6pgFtdovUXR4oFf0QAJoUO75uZQWayjsRK60Oe%2F5fyWbNgO3MKq7Xo7MDZ6OQDYFUUl9Ry5hOGwJxqyAc0Va9dDyuCNMU0h49y0eKOxokMiGirQk2aiZMUp5QxGEZF%2FStSWKe5z%2Fxwi5CrIR12%2BeNaxfRqMSZ8fidgtZeZtal%2B0nIeXAlm8byZrTs2w82FfSBB5YtmY2uI02yfpoZZs%2FwxLriEhzRI4k0&X-Amz-Signature=18b633f83528fe3c64eaf2fd30131f9939fdaff54bdf32a7fda8e0e87b66d35a&X-Amz-SignedHeaders=host&x-id=GetObject)

