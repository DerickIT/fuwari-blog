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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=2d03f85da1b920223f35ebf0ce6e9d1c4dea7f51b6872a80926182a36f356e3a&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=f27a97b1c13e224f278dc45e38bfce477ac8fcd089b86aa0e6151f6c23a69707&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=95f2350ca991644e603da84fa545449d62b030428f6b250450b2b24c9f7756a5&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=12ba3a55cc3bd81cf2d91d2aaa0b0ea8cdf773278ae2644c6b2db219e7fd9d57&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=ef200f6a1a5ae1269fb3c6957f199b369c10a0f0a1cd3ed862481c198c513c62&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=400a5ea83d277db6c6eb17ef1440af0e4facb73f384df40fdeadbeedc388068d&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX5AOJM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGJ6FVPfyRdsKoIgvEtLDILLTexndU%2BjISYXSHAmiUAIgRH8UzGp2a%2BFI6IwPZFtesbxY%2FWkIRcHNuk%2BtXLLH5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx%2FbEq%2BWQOt3I%2BKIircA6q%2Fl1ECsxktuicc8LjIC%2BjnoitC%2FUU7Hdb03vPbPJksU2zwIufpo67XH6G%2FbOuL5Xs5GqlFb%2FZDuFVqbWNqhLg5%2FcLKnJbFEgw97cq3HWyA8m25%2Fig7h4bQ6dQzo7Z5L57MQ2TQNs6K5CdB4KUIIlcr2%2BClVqdQ443Yr62PsuBCeZe9H3RsHRsSLZRvL5v4GdNs77PlHNXWjjLW1dYjlxA4WnLqcWHHEqpZWarE37Q%2BLcgx6MPY%2FKdHGh%2B1u%2Bn5shGK0rJj%2F9NPdZNHTsKdF7Dokig5EGS%2BV1F%2F1%2Foa7OxYZ3MIBES%2F%2BraOSlpMZ5RQOCMS%2FKIQAOXaHGWlQwIdhoF65vQrrHxtLOIfF%2F1MD2o%2FWZMU77yqOhArgfKGF6a%2BFwef3csIq%2B1qQbV3tQt69LtfEAvY9L7Ty1DK2YQ1pG4OxzSAM2hxDjOSKO635UbZtH3L6VnWKb9r%2BHUrwnmvV2%2Fb8f2i7lZY7dITN%2Fz5cL5r%2Fq8sk8q9btd9L9lyKe6E%2BM%2FeIqLKTBpB66wQJRYskN4UAM9Ivd6zzdZW9%2FAXoShK9xWQmOGRKxCRQ%2BMtPIw1jwXSk%2FsIzTpHpL5L5aR4PIz2ji5XF0nOifTzl57%2BEokfbIYmB7xWAyRRkbHVMJT92r0GOqUBxcYdxUlGCeWnbUuqgQJK9pTe1eO4fugKqqpn2GHzKgiHJGRL5E8wWvmSOy2dJY8EjNPFgVwYLZGcRLxgneqU9bNAaSJfXG7w7Sm%2BE4mqgdoRm0zG07Jn1qbOpGmJ9SObLU9bRiAkDdqvXR%2BGXJaOaPKDPoPx%2FohU6BylrVaEyrbXTzgT6%2F3mbxIKV7eddWybiA7MFwWLc3q4CgR9RQT50QWLa4Cx&X-Amz-Signature=ecb2e75e03455a7705bf15827be47b5307c8ef5c7e2f90caa23926aae6abf4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

