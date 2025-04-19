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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=fa6a8881573a17487231197a0faab3f2ff44c3d03d89205d7471e8a1d3129bb0&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=62a083cf76bcbfefeaadcd2bac218c6bab9dd1c26742fc8e98d580ba71085f70&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=aa1a6cda05aa4c375e41d95f127964f54488aa805d8e7447b3353fb88a7fcf01&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=e3ebf4bb1b66784838c91532f57ae87fb27ac5f291a1a9e94a73aa31f725950c&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=1bf6610ec3b0e008bbf050eb14067173998b6a2dae688f51272ab66370042311&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=5b1a5d2f759a5664374b7b21f0d26cdfa10aa2d77c5ce453657f7d4a52e3ef7b&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LXUNPQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsfUPmhm515u5zBhSBbKEYU2jpWvKxYtmuNjaOBroXAiEA58bLG9CjRfX1KEpJ9doyXBW31%2BYiUYV1xHvo5XXhtNwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmzaATpZ7hM6yCQ9SrcA6XU5mmxRu6Y3%2FA20DBqG67I47TaepmgosWjmzjUc1jmnrSeE1WzNFV5ZK5RQE7lu%2BOfgAgXX1Az5cDQnX%2BffjENbAFfw7I8ZIij7zq7fNGHxLH%2BbG2KX8wI8GOJlvyn6ysnOs4gM63%2FmgKxPDCQNSwHg%2F%2FK%2BWAJU%2BuPEmwkhy70wVn4eLEeyWwrMyR2PMVPeToSi2ZH%2B5ueYDOlIiQVnvxANqAqF1%2BQwW373%2FrGkDaYzjXNn8HqI4Z9pSfKAmW17uAFUlzyf%2BcI6Dm4fZqhiH2FDh8ssrJqmGHBp9IgJbADcluHvJCcrUD8IwUclREuZK%2B4ZetLn6CBVUQnFLYOf5FiEADYMlsd0BO%2Fp0H1XAMqFLmeIiaHun7QmWsFPuSJOq0Xv2qOho586s%2Fhr7yh%2FUYuEaTBTpCLVToUVNtFOhj0%2BWrc3MXOvSgnRwDsd09h55olnnyoc1yHMFkJgyLjTPuEfS9eNdepX6X73Evkv8lWPCXtKa1Xn0FWr9q4tmjbgd3axUoneQ0Pftg01VqFhMac8LGjL9S%2F%2BxZ3ohEXOTLARiAqAtjCuTgHpbk2ciA%2B%2Fla25D6PBa2sk7%2Brz8hjMYHG8buqXEqjemS71QcvOmlze4uWRSu318g4hJlsMNDWjMAGOqUBsLrU3bBQsETLba9Ub42v%2F4BNRHIkEjjA7QbR%2F2ggVRFSTdHqtN4friNMlj2lqGKedLcGTMp9LqKqGYVf1oV0xWdW2lD%2F%2BqyJ1Fxpg1jAhSWNzDzLmIBk7fwShk2A9dA7vXNbfWr0dg3hjSjvgU2mAvCzfjKqBWgTgDD4Ro1zkBPWFadIvy%2BrQp4xCar2IknUMVxlD%2Bvs99t1pYFwdGj%2B3Y6ZpIhY&X-Amz-Signature=e6cdae6d4050ed35e2c2095799b5d3b13f5af7def513dc843511436d77c37b47&X-Amz-SignedHeaders=host&x-id=GetObject)

