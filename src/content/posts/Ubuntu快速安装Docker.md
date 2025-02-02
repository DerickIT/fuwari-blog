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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=0d0fb7ead8084b84427c05b45d79c3a81ec47250ebb922c0ec04e8abced3677e&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=e067e608d991873fc0f9f97780ee026028e72e291f9192382f8acdf9b6d74d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=a2d46ea04a8e23edcdc3819d1618cb547cc30c00eb6b54f615308d11d9e25855&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=e665de32914eafa0172ebb9e76c799fe51fbf96bfe3736a8a020d6af9958a8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=695640dcc8c75dcc4114aa499f1a7f5cbf0da9c1c995b209f2fe0dbddb0e2729&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=1bce7ba4b1251916423906ec4acf9f83ada1941bee1460006484e3db31049546&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JZOJJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDutGsVoBUQrNl43QAu0P5fihMN0lkykmRJELocAxSoKAiEA2vu1c9vR7Fmp6%2FMx6IjpDZ5Ik4LUTGGEkaKLbWirGLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx4Zadrt9Dfp7punSrcA4irBGTwcirIVFVg3GW%2Fbe7K9bcw0Cz3gWnZ0ImxBkQeCA5CcEUe3OTr9bTegYBAwXh%2Bj58hC%2FCKwWk0v8CsQUOrgQoj9vq6BTC1C4rBijCFhFP6qsp41Ih3WQ3nhZqiz04pL3fp0%2FyLctauZvJXXhxTz%2BC2wPEFEIpP7ZD2OThpyYAyHya4vsH6LZ8xUP6DENB%2BfRN8N7MXSKwfCrPn3hSm3qBu%2Fzjo5ugOF9E%2FGVZQIuT56qgbf%2FqMGKVzA11hysj%2BoE7Xbyba712rbV9plN4CDtRAj6A2bkqiLnFQGeuIANs%2BSz7x0pVYqpUWBa48AsWVlUZL6zw4ESL%2BqX3XLS5L6qTi1%2BrAzu63e9as%2FOVmerU8tC6igA8fVwqX4HEMXdoEv1L9XtKbAEAswmg9sxhEhK8IG70rpS2QiCXcRVGSfL6KKPRXOT8P6D9bQ45BGQlBxMDvg5O0edLoz3OIevwcvUb2DcIzSIvSmZp11ACQuFBX2eYzdyks%2BYH8zl3VR418R0xtBUr%2BHdaetGO1f%2BLILlHIWCKfTB1v5T8r1H%2FohenAXIV7sMMyPy4t3XuLgZ6sw4aPKfnfEWZ320ngFvNFQQZd0mgvOW%2BN57OObM8%2FSSZID5Vc7k%2FD%2FLy9MN3h%2B7wGOqUB%2F8qc%2BLrr61wbZiBM6RvV5Foo5PdpsFHo9pqC%2FJcBVnTuq4Y7rMgSyrOXriLfhlBMWE8ULUDWyq6C8tU8ZfQ%2Bo8L6HqmB8LNhLp4wPUvIpm9qc9aIoiMEawLn45It2Q7LSr3vn%2B%2BaGoNO4QvzZZzYCOhrDFX6xI1HtLPusX5iv4NMOeSRTTEGP2mals4u%2FjyoPcWVwfI72%2FsXth%2BnWmb1hvXbtabN&X-Amz-Signature=7655b56c2be30d2fe8ffa5f24a4f3981d117921ade6f19633d0bab9275b412f4&X-Amz-SignedHeaders=host&x-id=GetObject)

