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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=8b4ffe77065bf0aa51633a9bc3c8899657e96b27f4de2ac0e1fcf7b97941e560&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=f0355409b167f95c28a82c2a0b9e408a6116539828b00dc039e7f6c6a47447d8&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=cd2b20abd478defcdce7cd77c825555df807db53d9d6f2878d3234ba2d981324&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=0fecc20bf8c90b91736c2ebe1e99aa83ce9adbcac4af75cecfe75aba0db44d18&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=27ea29e46fdbb211a25303769435ead25b875a55e0687bf1561911133a91e348&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=3bf401f7ac4d3d55e67ff277e590e067e5eac2c984a7108b5f278032563da51a&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRV2MU7G%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGXLS5%2BAzfgJ3W5AZfwnORr9lc8bDGoJUusXJv5NUNnZAiEA9E2OV2yW3sPGJUonghsP9CZ5jU5A8cwJCH%2BHKBUN4AwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjUfP3AXPLK%2F2aQRircA2TCp5Ze0WNzqsUkiNfB8P%2FvcyVqi%2FzyxtzVOx5YHS7fZcLUlgvbp6cr4qS%2F7ktiJU6Pn0fJAHtfFl3rEG2ot%2Bjq%2BYUhpzDjiz3LLlyQKKtexJztrJAXpruy0DVrx0s5sZmbxf01z%2FFFOAbdgVfT7bVOqbn1AbEF7Ng2XMGUBFdSixAnRLvJAlFfxTGCWZw9PqkMOYaR2JKPfrBgHln4E8K9%2FBdp9%2BP2QCeZiG7OxVcmEGnmfhS2BMPFGl4uMKA1zVVJSIJN1Ifdz7tNw7XV%2BdOmkc2jHWuoLtwaQQcR%2B7QV1MUVcSC4OH%2Fr%2BwwbJbzXMvHFVo%2BXj6t7ARTDlM%2FCSOiqSSoywLl8B0fqKdf%2BPuIBrwE%2Fn2DiTzuFD8aJ4JiSg4EZoRcA6yXKTrjI9zKVlEmbifQT9AOYikTiGT%2Bp8lElIWN3PzigxiLe9ZDpEz%2FRmOG5fyzSe7s%2F2DzKVKY9%2FHZHt3jey93YLpazkL8FEEozk38PFdTOMwWvLLkNrkTqIOpUgEUUmE07VIsotwVjwR30OjiuJB6ojIxHqK1%2F3Huav%2FikaORTGrW2y7q6beibEDFdc8tj33qRVd9l7vEqPrqddTbKz9tZIn8%2BYOiVWWzja%2Bc1bMBs4A%2BMD53PMKbWpr8GOqUB47AHe8pWw%2F63m%2F1tpzAn%2BDedvWo%2ByW6w0JGAOVCx1oKAOnlj8QUzGKNIudsaZPWEl%2FhhwM62Co5eg832heuInXr%2FoS7l%2B2InQDVnvd7eXSnjcfFcpI3YbpigKc8zBRmb1NDnyav1lnSSTD%2BAyD%2BwosTYsy6%2Bao%2BIGHkzGXKZnIwwlENAevj%2BM66DLsrVPbYgXgNh6sIjwmryCcOx5p63EQgr04W%2B&X-Amz-Signature=a9901b45176b9ee7161a90f6ae0de75825a1ee60294441c386f4038059432df9&X-Amz-SignedHeaders=host&x-id=GetObject)

