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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=6cf0cc5c04ec771ee73b54c295a1774cb89489a9c0c83cea1960ca64a9fd96f4&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=5ddaf9e8e6c5d39551c6ba544d12b59ebda52ac61052a688a03f8815eee155ac&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=62a4c19e2c08b58bec5f95df4d9c26e836e9fb8708017ae8e5bea80cef5c740e&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=d8b38a1c85314485ecfe942a4af71c7556bec4d51c6c04d9a4c19d220db6ba60&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=d21c166d019b504f250b87c3457f40e81f8ba616f1317616a0590617fd773567&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=843e830df95554375146f5f94de895a1b8da0daabcc043e8f631a6425af81992&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SKFYUQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNBiIr1mcpAMpH1Vvmtm4iqfzx%2FbGbr0mUHQtG2NOlHAiEAmv3jmmuGA15naZM2gprKdxEBK4%2BUYi%2Fbz9Sm6yZ6OXAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDhOlUKFh%2FPpWX7yrcA9ND2XfVpl%2BamYOm%2FlSFEtQiUYxR2fM5nKvt1HBK6lYDFef8mZ5ujMJRRMc42N%2F7O97FdW%2B5lY9qYj7Ck7cXmlRccairZ%2FJNjnJ%2FsQ4zbkTw6Vn0dAR6Z%2Fma%2FTNSxc%2BQA3o1gbYzlHYtoG2S0qRCBM27KF5jsTmX4KsgOxSfLDgYSyC8f%2FKxEuN6wDWVR2ZfdhmEpQT18pLzqUA9W8fU%2B7oXWiVpfBvVzxDqSYzamHSyp8GQLa1r7YvY%2FEFTtkaMCXOTJyn3VgRolUDjDVqHDO%2FWeXrNy6fMGR7Tz%2FHiFcRFylrnp1J2UZhqjuuGcO5Lx9XSF6dlrBH6e3OFwuLbREhYExEhnXYaLSdMVO%2FUEXb2KxZy76WGrOOI%2F%2BQu%2F9VJ4mhljXmemH28lkMW2tW3mD%2ByWLvRgS%2FJkwAmb8czabgrYK9mcbLDrP3cmwG9bmZc15lkvEn63SDFscYk1TvAc3fq2R9bAZm5UTr3kCkuz19hFwakhnGfEVSLX44Kar1ydOPm0s3hNdaAsK042yF2LVLaPT4UOcYmT03Gh3yEBV8UMgh6IL6gzniLFD0FCdUwdDZ9i5BBZ4XeJdv5v6SPAjwQqxqlIybvTSnFPDcWx4iAZJ8zX6kH8Uwg4LmOML%2BG7LwGOqUBmVQkxl41Bpbmsx9w7GbzY49Z7JWpPrlfyL6cAgze%2Bg8qHIGDL7%2B5BL1wAvsXDjNvVmkpiHGgZ8u3h2LGjLwK4L5QOkwA9YmBYudJaIvvsuqmSZBrNm%2B%2Bsq2NfevYlj9vckGY6wrEb6jzRW4a3OBqhwbMBAH%2FwOk7CYRXuUkCfe5JHSTjzdxZ92y1IFn4Ya4NRomp8EAAUYTYoTIiRSFJW%2B5Uydvb&X-Amz-Signature=c149c881915e90a625ca2e1f3046d383414b39d52fdadfbaa69f7ddcb8a69dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

