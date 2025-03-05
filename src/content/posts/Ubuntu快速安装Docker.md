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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=00e6e7c669ad39314fcc64723cddf887cfff80f07f5479cd001816d491568cdc&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=3f6ce09d98d729fcdf0586b1235d4e382d4e0f63f0bdf83ee568b0023329c234&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=e070619a6d38e59698ccf78800343046af1e0735531d4726ae13c7fc77ccd935&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=2603c9bceeca41a107477cd5e2950b7a20791dd049d44c4703aad1a0ea18dcc9&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=6e29ec4ab687310e5d8475396ba94a5bb6142b9eba4740d51b694ffc2e37f69a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=bba0f1ec332d9b8c0a7602856d333fcd5dc0625ed396246b81c5962d67e3ce35&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5PWXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T053948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTlHmqCsRHgWsx%2FA%2FiZyENzL5i0%2BMfUnccj8XE1AeB4AiBCJc3%2Bb7i7Z7oJA6SLAw29rCuuzbMt6O3KHgWbIzpZTyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJ%2BKctSKRFu0fioAKtwDEh9miGa4WDxw%2FhwNqTjRSKRux%2Bix1TsvFk0c3%2BqKKy8ghAcOpCRAYydelLx6ML9G7jCyIMCONzYgSj6Rs1E0FHlvCdQOESq4bzaZQl%2FohjZK8lkW7DvqHVT1BdUZKeTHHOwAxnVD752Q%2Fj3YEp8CFRbu7fSWbhiU0F2sToGUG4klTBD8axVE7CNngJKlJubRC3W99I1iSIGGgJlydj%2Bprv%2FIacPVpbrUoeEv0HWXCUsfDh2WFDydCYbxFieuyUTjpqMicIhAOPIO1cTWHpWZizOJEdE5dHD125%2Bp3d8hH87zHofsfJ3yWdXPHc3NF2F%2BA9HJg3Fz2G7fawlwwiF8zCyvjmt%2BRzPfgjS5jrjrNlPDNZ2lFxkoq9QEC2rUnCUcPPNkYX%2FS6%2BTMwdjifhkczYs1A7h3hWKj6KID5iRsEgMjb2gz48AA5v71YE8AtFmZnzzgk8SuRPIodHZc2La55leHrAYPMwr0yCNa78nljvPxhLKpib5jBXZhGHsbxTBb1i%2BKMS8PWY84Wje9ipWVI7omasUtb6ujU6TLlB6WuPorjd%2BH9YW8cVTHUYlfBKO6%2BvYOmKN0kxVBuXVJO2eKcKddw545Vqh3zJCKU%2FTeez4x41IsXQij2D%2Bnlz8w%2B6efvgY6pgGx08wACw8ZJIWlNLmutL0mquCiQjPTKfmlJh6cdwwTH%2BWRS8oz0mnk30HzliRE5Klitum5U3NgFFFdpCajFOjtUP6vdmNYuoI6ttZDjhgOya5iypdxdAIzD3QGpgp%2B8lt%2Bc%2FHNzJnEJVAAU3PZz2opoisLx7%2FdelF4rL35hGWB1wS3%2B8Angf3ogSemPSGLdHpCZy5E2yMwrhuF7rhaxY1e%2B2fH8G1m&X-Amz-Signature=610f723d0377b0856ebdd95e400bc8d00f2525ca6e6c7c4c36e49203d68c1080&X-Amz-SignedHeaders=host&x-id=GetObject)

