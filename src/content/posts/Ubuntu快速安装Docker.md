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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=9a542f88e8d15931a3a851a65a12f33bace33376fcd7afa2997f6e09728512eb&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=39d30962892f92252b9e7cb95ded2479cf15b4de28b05f0e111af0c8f91f5c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=5f7cd468bb5a3eb07791761f99e189107deb9461dfccda2b973a633d7829d72f&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=853c74a16b0d38f3282944f72af26a5145cd54d7c4e36da5d5afb9dc209f7eac&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=7638f586c07ef8f0a856a36a400d023356d5d96c54c74d158ad35782dbf75847&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=06e73133d618d9ff5d4bed0d642b1b0d9f8a9c952796037e3c21b5342d031bb6&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MS4KW6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8lZJerKGFsxcvtKS%2BS6NlKi8WPi11e%2BwtuQze7zpjawIhAKxEhMNlXN91cQr4bq1HV35%2BAtDwJdgKDRAzxv8HbhQ2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ewGgVLEhCjoxA%2Boq3AMAF8NVULVVnG78nzCxb47c1kq6EV2K6Weea9zG%2BkM%2FzAK%2FirhDqcMobaKt1zbJFQJAqaRdSz%2FYCsOP748D4aJ%2B8Uc%2BlVB%2Bk%2BPz%2FUPgo%2FxFGqvC09bCqKW%2BNpXfwRr9mjfLqwbApg2xaJBBciLn%2B9%2Fpo3KLuHLVnVOKsNWiPF9FQ2E4kU3Vvcd2txX8rhUrqPiBwOutgoQv1ailjVXV3ODNxbw6s7smMkH5EOmgypVgUrXdkiQojMteJFg9jHERaA4B%2FksGf7QcSjcFXGk0lUjAWJQA%2FnZEjSj%2F3WBOFAmQi%2FV2hRKiPdgqCDx5V9xWYjYu0HGurYIVDxD54YINdQniuPvZDdPBe1FtHgMI8UJtImCxeI9Vple8iVSG2l%2Bwn3nMi9NgA4QXd87ewe4KiJpmFl0MnThPH6VzVF1vIhor3ntrt7Z3QXf2bHn75%2FRGaWOBiRtj6%2BJshinrD3kmwN5lF7chy4KSFB8ay1orBsoq9G513z1yyTecACajGQnpIfztpris3FaIAOMXLj8XCMLPj%2F%2FtFn%2FEIXnrrXDQfiYF37l35cpEgy5FSQKCGvFpWmgBcSF1xS0sJJuYS6MZaWpTsOfpsWWcyHVulR5fYve%2BLqJUW2cDZAbN%2BsgqwDDN9pS%2BBjqkAcWrKl2RckOtqKevi1NKS8sMZ7ruv2si7T5ybOu%2BgwWc70Ws6c9P49nbge5ulAaV4WUU9UyM4zMltaXNfFYmX%2BVL%2F%2Bwj%2BuRCoOxphFW7MUa3dWRFX2HJpRPtT8ypEnmfvsnRH0XQ%2BmaSemuf80NblySw%2FWCf3pEclGDzewROkDYvcNwYOoIcSc4J%2F2k%2BlSlFKQ5ximPcjaoR4QhQI9AO8wxiAgz8&X-Amz-Signature=cd68a8f092787e7ee738b739af7e5c53309486bf7764c944c10a4f57a3620d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

