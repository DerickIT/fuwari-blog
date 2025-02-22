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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=a9070add81e2c25f98a8beca7248e361034d4b7057e8ee874d0d017041774989&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=a0ada27f2ac004c8f643ae13aa27a8881764b0aefa526cad6eae5ab6180378b4&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=585f59d658640e2cbe02faae377ce111222a704e8d47607514c3beb27e9985be&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=7e434744e83bfe13c70ac7d93cfe45ea966c1cb36aed8853eead5c02b9eb5a38&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=eaa1891080b490f6244de1fcd662d182e118f578a56a07e4c28726036c6a5597&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=39e14fc0edae8e8ea0fb2d7592468aab6e45a851896b8f165f0c889360a1efa5&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYNSAE4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T053526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5LUW4qcsy8K3s7KuyZ4QqJzoUwmNRO%2Bk%2F87r%2BTGoiAiB0B9vJ99T929L%2FmIQFwomWdGIQ2oeyDSal3t%2FfZ%2Fy5kyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwn79OK%2B%2BbWTADTuKtwDU4hqCtqhRHLxEHpGFqUHAsiAYZmzLGoDOxvsITFOasxPlf9JtYe5Y17t7kppcINlGMEr16P6dkf5n%2FbdH531OXbCWuqbY2fBpfJRo%2BPu4EvoFavMtxqpiNdnJ5DjDueJBd5pmmpAbcgJYcUc0tWgPPqYJQjoDXS4pR2JdMLTg8149PNOEjZQgCcjQIxhldbb3ro6mI21spKz1WnYnemv3MgoRBcooO%2F20NOiMfflnVW7z4YiajaT5QPv3eRWE1EXZ9%2FJAQCUJeZKpCmUQYBGh28N6LBPUssXGpMggCUBr3ckavIMStQu2w9sOO9HTIaUA7iEy8mXi0OJ4Lwn1oCQcE70T%2FhxChALhkcW9aSB4jVNaG6ImClwK9ASyhwBgFCbOyxCdR1w5Nsnngc6%2FGjOQWgPae0DXBFuYZQq5AUBFlS%2FJhu5sQtUi%2BHcCIIdEtL%2BZ%2Bm%2F6YYWC1qqSyhGn%2BVY%2Fo1e7UuEZ9kKKLoBIio50hdbXD2ucRDJ2M5PIYFmigzf81Sgm0lfQS76RMvZbRDLrr72LMRhv%2F%2FN1xN%2BKcSlw9Uo5Hzt6qrOBJa%2BxZxfXW7yQbi1RjVHsJm36Q%2FyQNKbSzGzXgQP0W17GxcAXAUcEmlHCKFYEdj%2FUOOvdawwmqjlvQY6pgEAFFCXNhpo9cFFwpdDGysYj5Qmod5OE2i7dRS14OuFU3l%2BFU1OKBfSWqY0iRnvTudvXk8K2TCeBUd2Qu%2FmDPmTwXeiigRoje%2Fxv5QikP6u5BaPAA4Ic6I7omV1Xc6NJ3adw384cW%2FWWygRchrUgqY%2B%2B%2FMY8Vt%2Fi6B1qmhrB7Qft%2BuS%2FO8yU4%2B2mc3rMyA%2BtvhES3lRSXXp%2Fyh2RZk0imYAqPadTJ9O&X-Amz-Signature=0377dd5e549d8317c26bb4aa6801b05da439ecddcab53e5cb2b8a6953abc71ab&X-Amz-SignedHeaders=host&x-id=GetObject)

