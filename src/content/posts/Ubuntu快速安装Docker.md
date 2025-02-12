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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=6e48c25c344661a63269f41a5c5e471ee90b8022217cd87a460b30ae5c6604f9&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=b0ff7490ff93ab2465fcfd85aae11f95f8b047abd61723314e90a51e6c1876db&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=002464a2b28b7811c6159ec80e718259711cd13dad9c501bc678941ed4879b5a&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=b61f3e5c1f878035f5aedbbacf9ecbcab213a0d23439ed8c21d8d42a50fbbcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=3cf84e05e60407704fc77d2c6ce0a265139222225d6b93c3e4a982faa86dce52&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=80ee61a534e92fdd15f4f3bdbf51c313de05667b6fd4682ca5ebf2f58f4cd87b&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7H3KLQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T213320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk8mrn5FNp%2Bj%2BlXmgIWYidQwBYrrTZC9Agl%2BD%2B5ThZFAiEA9FjzncW4Q8SZVsRSuak0%2FVjoKRCpfo3FYRwTT5AcD2oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBr9UU%2FheReFDJJMCrcA%2FJc%2BZj%2FUhBDfsjjqI4T3Y8zzQQN0DAISCFIAJ6N2%2FgMlDlBAbn9lTJqhBJRo6PAEz09b7mUx8HImgos5tvMq1KwiI3PBaHUx1gLlpiCaY%2BGozYvx7qlZ%2BE457vhjkjTaDYyoMd8U7XXeZVDrzxmO%2Baj6ufSd12%2B3GS5F8DsA31Zbwu%2FRaO9MDo2ROFu5kUrA1lO8s1MQ%2BD9Lc8aLjnnRc%2Blcg%2F5tNPbZw%2BVNoGSag%2FCIRt%2BTBa9xURz2oQVPwQCq1PvdhV9ekHDr59XSLDTnRupaRHB2c7gHJnTJKZN2vo%2Fh8zGSHq%2FrLJJOHVzIctjM06xK2iSOns4d4vetfhnB1iHAqV6bkDOAiCktNnzqXxu1wMQz%2BUyMjJmUjQwfW5XXYqfHhqJKIM4LX5vCH6puEkviPMpW8q5r4G5CNPWmmGKMa%2FKvmr9h7wOayzJQgAaUU25jLdLde1QSkNgkps19rM5pDMQNgOpmbpIT57%2ByMtOFBi%2F64DaEgH21yz9995v7v3SO2HJ4rkqZUv%2BhNAp%2BIvkdRqHtluh%2BZKIwUN8kaeixEp4Hz9P3V4hit%2BXGsfrkcy6alugUF0Sbvz7s4mQRHa%2BeyEaiLKKKZKg8rn5VDmpH6Is3IiJ%2FSnyNHVtMIGMtL0GOqUBCoy5IxTWngAN6js9R71C5R6WQDiqSq8MtGRSTyww0EFF8O4%2B1QEr9Jxo3TA283awKkte1kkk3dEaDidZQqfNOFjjMFxNcVAal3u6Amkh45%2Bm9wL7%2BNl8nSQGTbXUf76BCg2kzTdv0I2Im%2B5tQ8fdMiOaa0jmYX9UZ9mS60eQxW13ZSPm7iJ7rtRKV57k45XxGTeANOFxPbiMlNi1v44hD4fd3MZ8&X-Amz-Signature=4013ab20044d93f4eaacdbe9e53d3b5074c097ad2bdf0f20944e592fe143848c&X-Amz-SignedHeaders=host&x-id=GetObject)

