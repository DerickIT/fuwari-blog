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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=010c32d7c8726c7b34dc5ea38c643751e3030c9c8e10dbbc162f80e02b2d1a2b&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=737d064dbc98c88ab1193aecc41b2e5d68c383db8a27851fcb7de119b21a76a3&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=6f635b78ada59eb36c22ae33ffb43c6d73f1bc4b0eb0e032b3ba7a76adc55210&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=8eb5423a4c109b144a8b0df02777029dd5b265b91b0e5d0c27f4c5e7a75d4122&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=afb274bfb73bbfc69f630a2033d55e7969e75b9edd6bac18d7de5d48f85c7206&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=25afaca2ded05c69c3726e9ea9db5c510dd5bf57c454ddfc76aa27997f753d0f&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEEF7B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T053637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJx5JClPMlvioo53FIOqIYVy0Di091wrgwvTxNdvaqAQIgcqKg6bQSL8LcWDSDqOw2DwrlVpjuWe9mkYK5ZW3d1s4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgRuvogO6MM%2BhYXuCrcA%2FoLJu0UeolWvaPHsp6z6TYjRJZWEhB6oDM6wg6BQ34id9kDbY6QV3MfXpwbL7UBfyMAFHasqlDG7l9EzgB8Tip%2FRY9d4zk06OvOGqoF3sWeL5gbft8QGVCvOmWJfToKbyqIBbmzxnrhmrmgWqvuIJcd68GNmvVNZmzUDvs3FcBtKW8ptugHDMLGnQ0zw5wXmFdDnvecA%2FKW8yYx1gyVkZQnWjOwazOw5djZxJp%2FH%2BdzR7WLLW1vmqfJoQtZ4RUwRmXlqr0w96%2BSIAVpo%2Flj8GuXhtd5efpjWqi2xq%2BROJv2dVm9UKwDcU020HCpWsYHIWMHLe2XwVn2w95O%2BkAr1OXnuK4l78ZEduEj8EA5bDbevWjiD%2FYRbs05n334psU7B9jOT3ZIlrc0%2F%2BPeWPlc0VSdp55VpbDgMMO%2FXbnJ6w%2FR5bSZptTCNr8jXgmMdkm6Zmbb%2BozAhJals1oQ3dpHbKP%2BlF2L%2F%2FkUt%2F7hF5ctD5lNtC1tZqLR9UysYBR8ULwDhIpgfrMTntysWfKdAq9yV2%2BUZIv7odzjnhpWKW2%2FXOJCxy%2FXjCo0fDmTy5l3sU%2BFygxji9Gd84CNPDG5TjRqy7cNVvPyvOUVEQo7offNg4UFfQe1u5KGwiOdJhv2MP%2BF1L4GOqUBjWatkfko%2B7p3Dy9rPYA%2BFyscQ1YxbDsImghVnJtUqyox5x5DppNERQG%2Bsu2yzH4Dhu8jkAy4h%2F2H%2BS0nGtmde6KS1oVg5I9cQrUezm9x2bBYzGfWynBT2Q9z6WCELhPg0fmExAF1fMHH6YXVBeKIlkbmXzIo6jE0eZ3QGRdFL7yh48ByktWtT%2BO0oitrasoYHv4FsVRRhZWOLZxyr8oPIfb6Ao52&X-Amz-Signature=042b9c93ed63d35f096cf8fa23a2b4b673ddd4031cb04f3180267e3ecbcfe74e&X-Amz-SignedHeaders=host&x-id=GetObject)

