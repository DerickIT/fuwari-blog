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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=d45010ed25f3bf134d5e3b95810fd979823b76b2791b38b6e0a6badc076d2f3b&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=672099ef21319acdc55c7612772e77c7d6d19040ed3b2f979e2aad8d398a9170&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=b87078881f69012b46a06a1f8d65f530215f51b4a13def2677e619bfdfe1aa88&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=564fd27fe0716c1eaa437083f26a9ce13dedb4a52747af06540e64e59031e367&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=3c39843fc311416db61edfba55699e5ee98194ef25fbe9cd6aacbcef6dfaa475&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=1a9614cc14a4e0854b4a61dff56997a561c87bf7d4b7a2a55b90801cc88558f5&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIO3POO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPDRIfcDxJVo4B8ypmMPu59k%2Bnce3XpBpyh7B%2FISfEQQIhAPiTF6iMJ46s2B123kyb8wUVZAuoLxDAGWN4S6CKcSleKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWskPuE5okwiBpgtMq3ANZ3L9XYWdkn1LUzsV3PO8yqahvWxww0H0m%2B%2FycH%2Bf532fkoAtvi7g0Rq7FY%2B8JzND%2FOLqOnNCh6%2BH8WG7h3JxFxjT5cwKfqGQYcVW1wqaf6xU1qPWUOd%2BdVkMSEOxREOfqSNxCbpvU0FdqDAZ6ul6t1G4yHPWv6kL3ILU%2B%2BuKDrUjocl4tyTd7Bh9O7l0EfcoHQdBXQXKBZ%2FG0JtDdHKV9ldxUw1hNV%2FhqefLhwk5yBmf5wKPxbIq6ktUcCP%2BnqYnp6f6C%2BTtYcTFlYfDM0%2BTWFmVXwrztBODSXvxmGYb9f1xC6gn%2FwyBkWK8Gwbqgzs504pfgdYJyLYXaphKgpbXzYsVp5K7nracz2CvSm8fFGfmUaDd3wkTd0inqt7v7TMQXHnNV6lGrzw6KgDCqFYTcsZCk0i%2FyYDQdl1GicORaQ%2FHzaqnqB2bLW4J1C2LlpRVgZxOKBcPfgfBPL8P8LOtV0Lvv4J0d89E7jGHjGvdSMuAj4VWLrPwSYrrtd2gd%2BuU68c%2BcCj2FGacioljyAm6X1%2F70%2BS2TOOyMWpOS0Dxzum%2FsnMY93xNios6q00%2BCKTMSkTqM0xpdlfIqocPPLCGie7pyx154rK6ePMv89rrwqN5Y1QEUgU%2FUjXFg0DCinZK%2BBjqkAar27ffw715xIkQk28CTUD8zvcgERJBXB3pvkILELV1mrcJA4LQ2CyToRUjqNSLKjHSWeWKG%2BbCH0i1IOvZEVMdYwRS4mtrUYd84l3GqNp3k4lsr%2BBt8nOh8pRiV1y%2FLlrDFU2vAUnc2SmfovgWhH75Yb13hSkcr7ADniOhsHK196kF21G4rPcBy87cf6GynnY93vJW8zEXUziDufICBX0nMhQLM&X-Amz-Signature=7622bd0e3208abf27f43befe1829887e88ddbf5ea58c6e0794d20372b6000257&X-Amz-SignedHeaders=host&x-id=GetObject)

