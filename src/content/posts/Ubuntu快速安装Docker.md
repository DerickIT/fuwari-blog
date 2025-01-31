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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=02f39693bd700e6810da9644cbb415e8c260dfa5b796308526eaa4bb9a9036ba&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=29c1c6ec30b8ff2a6b64184f3f60e40035d4aa49561c46f870274e19fceed2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=8c1b6545a8367f022d9dc3e24abb4b4bed6c178e6ac6742daaf6e77c4af7727f&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=32e7d96723669a0b6c603409fc39f7003a1c23e4c2ef1a93edb60f7c85c17bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=3fe697f24cce8105a94ee555307a79e670d359c8a0d8d6a7030cdf06d1019107&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=cf79e6d8b04950b5a8818717b4bad6441b541efda240369b6ba79b82347e4f04&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIF2RUL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNFLatPhafhFIlt2%2F%2FPZjlWLFC9neIJHCkkCgAoNMhAiEAgQiAWLHHslVWOgKGGJl%2BzGvBZ0htGyVpW7bkyh%2Fchd8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOVQUlNVUZxeKRUfircAzu%2FW%2FSem2OK5aUOXe6fTiCJ%2BNUEQknFS8zTWZabMnZ6rBkSuIvNg%2BMTwIx5YTJQGUbYDFwfAGaDtsl2RvpUyAsN2EnyFcGERa6uK%2Bm3b3RgwDiw05YCR78irpScX5HPXMI5%2Fz7clC3HjSiEILqc5UFE%2BvF4xq3GNIbJDzM2SK2%2BEa9aqb3j4a34BPhyOGVPQOR3dXPtjrrnYwU7BQlVVg5nX2eNSVIBLd%2Fc6bNVpRT0pNftxs%2FulWSinii3R7LBZqAdqtLGzXvZsiEZs75iL89TssX6jtgzWEKMyGtrBR%2FEF2ek55%2FiUB%2B4%2BT%2Bj9LF%2BvZOy8fN5lLmD9xy2qFNkaHNrmn8Xy5%2F%2FGtIrHGGyxwU5rDJsGu25Af%2FDDfmZ2w9kP9veET3HoCHIY31UvhT%2Bkn9B62jswf%2FxZAhUGQWOguELabIgMnMpehDsC2iUdjx8QESMka7fCEDEjMDb3PmSb6Z0LyepIzExbddavuC6lL%2FaZ2BR%2BRZzvOvLo%2FaGFl2oUmbaphWSKwrXxMiAqnKO7PkhajmCh9c%2FT2zUIDIr4SeYaesNcpHPWwPlrwBAoBQ%2FyUTMzVnJIKRuI5hkLEe99B5TMSl9IgdJvXbEHcQJRR17qUTrQNwWfcCBLqALMO749LwGOqUBln8F1SUEccKUxwzzZZxWDbARrhXZ6NhjwD6WSyjKRaRiuozY4UFIoyIDh8K%2F88Z0H8sTQ7HLlOrlYYhO48Lhi0843M1mA%2B2JoIBkTiLPwQa%2Bmfc%2BNsiehodxayRq99w7n2NM9LSM7Ccm5zfutKMqjnYbW1E90lsEeF%2B9VilXq%2B%2FMFRZy7aBHpt3zCuJqkPEOusNo%2BKvGSKxNzwInb02q74mIMh19&X-Amz-Signature=7da88b3912365103f532cb5a3fe64e8e003d9f69bbfd4b97a11e0a87e4280673&X-Amz-SignedHeaders=host&x-id=GetObject)

