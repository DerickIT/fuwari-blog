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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=0f1f4f2ad235b6c159fa173906a54f40cbc209ca470588053eab3f7d015b647e&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=014abb8eed1336e3e579bf4c6dd4fd968fdb995776e40e6a4076e7275bc6058e&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=c83452e978b1fc5febe88194632ca295ef2eac85f9a93c3e928c272694afc818&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=8ef8f86ae3af8f6667cff59e1646097f38cde2edf5e9009a41c9f6c5a0f480e6&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=4678a5491ae06d4d41d0cfd53b98499cbac3f0012e44cb41ffbe745eb257ad7b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=35afd5bba55d77234c951d4c08a8a3514486f3d8f7ba12f73c0c818788dd4d39&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKZROM3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVBdoErihCQhmThmZYaF1JlKeijfpOc%2Fzkcmx0PxiPnAiEA%2FkZV1hys75uw%2BZkJJHEsQSp2MDdhnVux7EsaT4K4dS4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNluRMt4YibtcZXqKyrcAy7drKL8eACDstRwPAUQlbdjHpoPk0glQ8vVGlcZCC8L8ZtYtfyDQU%2BpIkJ%2FRQvfhl0BQyDcFlPaOwydaXVxjf%2BnR0BP62UzxPM1sjUVWe%2BHJzrJcNDF9RG5rGwh8Y24UdOnBnevf%2BGPfHVKShQsBaF7ZrR8Osf6j24G9h4GTOjvtzOecQK2pmCNBWL0mDRUTqD9Sq8QHbkbIjGe%2F9RP70DJ5fOm6dIy1d1t%2B3pqX0gtS9f%2FWLLcRbufqT%2FDCgSk3cQj%2BQjA4%2B0NsX%2BdzzFX5O9eN5iD0F%2ByI7y2Ej8c3LjUsIr3z%2FuO4aXJATNoBW%2FE27uch9wjdyRVB27Hg%2F%2ByUhTl9wnk9vR%2Fp3esM17P%2F6d%2B6azt0NYiu8H7VKJSeHxr40y%2BylPKdkXbFlatwl8egZ6BiRmMSMvy%2BRNam9HpfwdbzG%2FBI1ELqDrEt2NHlTmCrftpFKO1pG8IJxOHUI7RhLq%2FG2UVq8Kaj7T%2FsyOHQrTpLA5HWyYGBVtUBH94crmCg%2FMMnJa5bpROPx1BMw8Ttj2c1oQvA%2FSr7MGVLkWgtbS95M5iKf5%2ByTiAzApVwojnJ0WZvzPgu8wm9JR6e0T7MJmv%2FvUvtyst8%2FMNKeAY7g%2BeeRmjhSTWSSZ8RDgFMIa2g78GOqUBEkKbfy1tWYDf%2FTgn9aPif3KNzRKuc6CTeGSKJY%2BzBuY7lSTNG6bnrNEdZxGr7zvgMcIyik5nTuwB0NSTUlwH4lWXHOCgh9Sh1xqjrbfKRWkej%2FZmT6Nu%2BMeH8B%2FnLfJhhTZorsoWQvcWoBW6I7SSKKuU%2FKbOQoEDUNVflQWWwKHxLq5AjO4scUUB7uj0Hz6u62B4i1IvHvjan8%2BjimwBkd%2FMHc4L&X-Amz-Signature=437366332be622b94280f2920c03bdc11ccf4eeb3d829730989535f817f45875&X-Amz-SignedHeaders=host&x-id=GetObject)

