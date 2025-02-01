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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=88598c4fd74ad8d4544e07ca71f3872d01e3a7abd7bc40dc379dd09f6863320d&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=7322cf1c217ba482cbad0625624fa313584f076b84242985fe30c8d4e361b727&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=214ab6628a34b8d31f5c51b07de5aa31cbf7397b0a687ab03f335b7509f911c5&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=43d2108dd8014162023bdd3976ca260fee313ace286e3a73a4c2713d90308249&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=97ca49f254372d25cc655e66c3cbcf886df2c6040c78cfb6baa3f246ba1252b6&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=f5decf521758f5cb695bf54d0344bc890f487a63e9feefa23a6d4cd06bfb90c8&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHKTUA6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T213241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlwDWYvMDjBeZu2qesAmPbFCE5OuEbdbmEtXsI1PNcoAIhALHcepR82sgJJuSLaynbAmKsc%2Baf6hWvLTxo7CwHUKAPKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAMxpjhyqcWJUxw0q3ANaRuvhz6ExuQzNhj4PTAxQ%2Bxksqxxqd2VeI0I%2BE49fyx6B2IQl8SMGzRjDTyFh5vVb6ZrpGx4TnXTFFzgkdJ8wd8yIeqBxPRl4EhNWyzwr%2Fg02TMFquTibi3XTol%2F5p8VZMecL9rmkl1o0VVPG6fSYh4TApjxHHlcp5K6pwIF0xnrtHf41WuzhZdZbIndM%2BRU%2BtuWvtf%2BDRC%2FebnEqoXZ01mBAYoVQxdfreeB0TP%2BJIVnjz07zS3wBkYE03R6GdWnFwWQHGsYiSAERYcH6WrrQCFCHsQtogIzDoESlYqMNK296kaSretMQYBMtbxPMTSId4%2BlmwQ4NtmE5e4kcjxf8%2FN%2BljkDdUy09FN0lPblKwq89ZxlzIxnqDpBZjbFA%2Fi23XhIlzDxbimklENRUm7tg5rw5Ln85YJ%2B80DS8ILE%2F86oyoENa4GulKflZTQZRXLYKkLWG9KEH8iptDtOrrKU6tBhxKGpEs9mLXdDwGc%2BagBJC6xXyhoCPlQfT1Kl5h8PI%2BDCqMhqQSAJeQUCzomMpmyMxlHdlrtRtxQMce4xXm%2FcdSHZZIQZ8msOLROBMFGD7u8haI8KrD%2BLkEVG%2FdUx8tYCvO5gZ%2FBrwR06YtcqVoGllMb1em8SsoEOeHzD9k%2Fq8BjqkAYMT5qCQRSHn0pXtzwYrBKY36a0WvUbDNPzG2ZD1cg9V5dOVXnA3n9zf86%2Fs%2BXFfraa1eqszry1wKxGMge7zSlaii37pWfpoCu%2FcaBSWJ4Oz3ZWfBpD%2Bvas%2BMr5NfZlLzkbEJwc8pTFYwW%2FwVtEJZJsncnAuzZc%2FN9J8w33bliVkHDgsduww4%2Fd3okBMiN9FKZCmmW0M9eOk8cA4Dkmhm3vBtUkn&X-Amz-Signature=20c0eb6b4b99735c471baa995bad21214885626cc35371f21d86f1b96c3b5267&X-Amz-SignedHeaders=host&x-id=GetObject)

