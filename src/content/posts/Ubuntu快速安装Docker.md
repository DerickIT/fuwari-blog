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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=802d52ccc3dc16541bdea98ce005cdf57132008974067cfb1883b40987d0ae31&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=799ff47ac0eec9e57fa38f661972861d0ceefa4ac15a1b29a5ca58de6911b00c&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=7f11e9af3d00f77a9f2df4e660496b86e291e5a785e4d83cb35e6cc3ad4c8882&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=dd444eeeed636ef064145333898d1d2d0a847db041ee9c6dbce8b62868e47d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=190b30751827045a908c783b10477b9c8bec46b1521250fb30482629bf16e1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=445fe83e67c90e9ead1142b0a0ad5ee82307c16dae79355b2594b04f917e16ee&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWC4FNGM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHNt7mN4vn37SEnsmVpH37tn%2BQezLky4Z%2F2Tw5wNjiuWAiAZiT%2BeZ0%2BEbrY9WihPSEYrh6yidGEqysfM2ChBz16OOCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigHAXz%2B3F6ZqhsZnKtwDAvFojDjtvkAG024oL0hpSbJggdsQN9wJ8RfJISZw0T9iaJt1sIET6snvnmyqkye3plfo7LnVEcKlmxcbvoeYBadsd14A9nCaELGW0E0qN5F0NIkpcS83P9j9bodtgrqZvtVfvwsGNiwrPgmktQfZ%2FMZlxqWmpisHwX%2BNDpfQp2P7ZhTlKAC26dGtjpjA6XESub6o3ShC7kwGywhry881906whTbWzxpGKnGbhoPGxnhRHPcBJQTyOJbtwXvixklOTfPVoUwMP%2BiBbgwcQsgwmVKp9p1mf3L9YStaSwFLAzrAKD5%2Fgn3k0FjsYEhT3%2ByAffYHQm5ILZeJclLd%2FQ4Y8QwTLjsHq9PtiZC7Fr3yeVwwFOXMRyL0Gig4x4atseLbgPcgtv6yKHuwuEHuUzkyRIVYi5udjQSezhH4zarBrsMYIhDOGXBISGpc%2BV5vsU7q2CWtrXt3pf7OYiLhUzl8%2FjSk7F%2FyoQd3U%2FKWAEbBhY2efJHIaIpQ4sThlqMPynKLcQjqh4Aw0wUmdQHEUlTXttY3Q8zlYaOQbya76iEHIBglJfrpp%2BoKrQKNvNsBmjIQsCd9YSUdLFjBOC011eHoYmCNuod6p81d5Ph6Tokl0PEj9uoS7%2F5iTSVOQhgwjMLivwY6pgHklc%2BxD1cTPSV3z%2BbMbZdFheCA6IZgXiMt4yubJQBV9Ydxzq6o7kU%2BO6r2zdOqY8Ks45gl%2BXxJB0Gj5rwWA8V3pFm6IdR74m7NQDQQ%2B3HKVLvTL1hRzRPsf4BrzxajxgO%2Bs9DHmSgM6D%2Bfql5XI9v4m5J%2FFpdONxzcMuBbul0zWI9%2B5dghKSxcQ8F2Ld0%2FtNMHjqmMdJaQKkS82L6eVV4xWdTSLGoy&X-Amz-Signature=f4c5bceae7c56cbe3f3b54ff03399201bc5038976226feeaf36f5d320ae27de7&X-Amz-SignedHeaders=host&x-id=GetObject)

