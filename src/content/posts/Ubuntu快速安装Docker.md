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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=32a4eb95ce160bec9d7739f8a431c109550c986fe712e95064a3b02ce12f80c7&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=edc7d944f79046c441b0d7ff84297261dc1235206ab2d3141402d48d4d5e2602&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=57ac494830b463a9beebcfed9f88d7fd89dbd80b185e7bdb640d3c3619da5757&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=85e6cea1221c440a44dd918d4297cc58f78d6ce2ec3cba0fab2fb85c2f8ce04f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=7457dfa005083ec9cb02a9ee2f933fe084576e6fe41793849a7a761a38b7be0d&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=e2894c870f2494f393f2477d132c4ea0dac2fb80ee4190b9bca19a46bbbda0fc&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHDCAVA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgYNZBmAoMhkgQlS93L0StdYn9bntihOlj3xZzpWXeoAIgBZmp1p8n%2FPGkA21gXSr%2FmHi9PhCxuL6E%2BY9YJg67W9MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6LnHY03OANsJtdnCrcA3pjhKND6F5BhIsUB2GfOGuF8LYh%2BteVL4M3lO3Dlhz20uRc5OkNnmUBq3dnw8hYoVTe10bp09e3rzI5fUkls0wvJWRQlmg555HzFstBgfJXlAxYGNX6cvOPHiiE6xL5M0wnHzAXC6EEN0ivHMj27T0QWAsrN6sfBSKrnhPXPri5G%2B05ZKK%2FI0JTCe7CNxyM%2F0o8M0axK8r1ccHNobqYmM7bFrszPP5JKTaY7u8K%2FFINcsOCI2m8Tl4cP6Ly2r4iIJuB6%2F8Rwd0T%2BlkwrCdJHRDPek5Fv0V5bWqmcsYNcpfV%2B7CGE5CeRTJGArdTS%2FR2f3ne0xkuSzOOvCg3XA%2FHVC3L4foX6r52CA60nmjRLk2CLCdT9BMS1mwR657JepDUIGCTJ%2FajRYZNsSNYMoUgTVO3jMM7ENewgQqEg6ywm9Ie6hzrZKP0wJn%2Fo124q9eSaGxyiM%2Bjv0%2Bb9qAHzsatNv%2BMBIdxYapwklfGOoG82PYzZhcn78N6q0Lcmh764%2BsqOFFxnQLpR5h34rWTRm9jpmkil9wfsjnzzuJqFuuAmd521Tm6v%2BuqTm3M1jtYO9BUcIR5NMU2TkdONP%2F5eRYy8%2B6AbHGf%2FwG%2BOTmRO%2FsmjK3FvXKgA3FaIwzuK9eNMPGdmr4GOqUBPaCmbCm4PCEeGtVUYC5gMw%2FlBIT5yDYc9IK08wdAnWLtPIC4ipCNV8cfQoDbxaNj4qfQmIrtfcR8AF5aWNVr6LyJh9vTyUxDBAA5q4xDNHL8iUuymHO6h3eKLj4v82Q2%2BFY8DA%2F%2FI%2BGzf4308bq9QmpDeAQm6iyiTFFF3gkjWUfL7%2F7Kice7zEWhxUl%2F%2BKJHMegaXepRi4786yfoVYDwkwyXYl5C&X-Amz-Signature=931bdcefb11d892d7ef33374fb2b695e068ee61a010fa4151db3b7f84388bc3d&X-Amz-SignedHeaders=host&x-id=GetObject)

