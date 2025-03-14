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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=9f2e786e4e50ca03d0ec45361bdef3634cbc79dd7caafcea3a87a29cd3265676&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=9183be4ae98a48efe30678d1d252b7e9e206680e152bae34eb54461ee65018a0&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=f18ec81c598c5a65ab2c4f2223c301d5a88ad01626e898d298f4a38dff8abeab&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=c0a7e578e7be1c89c11dcebc0a63f0e80f246055fb9867e2ac710d935f1f54dd&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=161ea859f5998456c508bd33431583b16814a7a4c56688c51498fea1918afd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=da5f828fcf545e3c0b12a4b77ddbcb813f977616cb860869fcdfa1a58c1d5c95&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTIHXJ4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r%2BUujuPLL4u%2B0YXQ9XP6rGpwZ%2B2wsI6HURGKgKIkfAIgEE3ZKZBs6GPs2ttySubwPCBH9t47OUOe9%2BCoQCnqrfcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOrmerMBP6jjAAIIircAzV5BXBMTZ4YZa21rqrYsfdSthLAd3%2F9uVUYRy5xE7WJQq0NNwP2scZJ4pvSCik6YtxsDZZCafJ2vxMud45XrQfoYFQtYDXEdx3MDscoYMsPIsOhqQqJsuNZ%2FKaHgWDIYfWGQr2lXw8h0c98TmJmzmpgT%2FEH3LbJEQuwriX89p1RvJJXV1eFZHShj1LpEjtEb2TcsjvA1cQxp6PvcH0615vZMarTQcmk7HqH%2BfvTAnOrfcJW7Y91aZTBMLtjGlG7hLM49W6yGU9Nm66x3MWNoPxcUuzslSIvwfesc84dQCKAF8qhOCHCzKppuasGpv8l%2FWKec429LvzllPUD3TtszbgHf%2Fjrb7AMbuffJLT73MJPAc6nYgVe8x2MBea2K13992bnywPA%2FK%2F%2B5htihEi7%2Fk6SVpMz0v4lHRFX6eqpHVyfbIjYVNIBQfwtWGeqcJZGeVTflti9TpnbkFxTfDT6VXGGPeh7fq5V9U16sgDFtzPf3L%2Fl55AkjjYm0us1V0myug63gaMEwxjE6YJdZb%2BEFqNVVrJ%2FzS6Hzmf%2FrJaqCMNa0WCDZaJ6ieRzoD94CMUbZvQVqwh%2Bar6TtfJ3MJnxofIMv8a8geXOiEnlwPhgBZj9IipIzBoohBlxKjDmMJ%2Fqzr4GOqUBbMmPW1s%2B1PeYVr%2FpSklD89adddBFwTKr7ghSkgLdyR6R%2FbtwVRSxcuHRZSwzcBFYOK7dFEjwnfdlq6GjKgeGoEy6QVIFWpE0%2BYSYDUHcvNEwE2rs7ccw%2FMpAUtERkD4CFlIO%2FxLHbqsd6Za60HalZ%2F1cHHlibuLW%2BBclv7cVD11wB%2BhI9WC%2BZvOyneu5GvcVpbYZFcki2Hr6LAccEAnqDg9Dhsm%2B&X-Amz-Signature=a266669f70648b8aaf1b244d730e3dd2158fecacfd6a43a39a787c41938f2f94&X-Amz-SignedHeaders=host&x-id=GetObject)

