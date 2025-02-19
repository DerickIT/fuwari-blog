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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=3823b7275befa320f6371040c95f251050e784d1681a7ecd77f7cca48107f82d&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=4cbf0921395e14f6607dc7131e48d53a0be3c377ee98021907bd97b3e545e009&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=f925d79b7fe45170b96ae4af57eaf13693811ed14bde5e1a36a2ebacedf202f0&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=0e43b9ff42c3228cb8b413b1677c272b2356bedf68a9617e051e5ec0ceccfa64&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=5bb920940f5796f9e39d21ebcaaa8603bcded3e6a9894260c0a7fb6b64c44c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=dd901a9a2ef338024d74e766976bb67b01d40084cf9d98c6ea01bc6803a4004e&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPBMSUI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T213251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr3yw%2FPyIAiZ88Pr0CPSuIf%2B8ZJDkfFivihqcgxeI%2BxwIgIW%2F05%2BWjNUaMJJQjRjg7bcw847z5jhGOWkzimEhHBwoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfH0W8FFmWOw2od4SrcA8VBi3OYW2JU0yx4g5X9FsV5GstgHyTJLyY5YW7diVvAvPU7jMjOJyutsb4CZjKx3Xt%2BzX1pIcddcUbdSJ7ATV2AI%2BwmcnKoJufrWqxqOW5DPGQA%2FKsa%2FHGmp%2BgP%2FwhiR7ghXwImzRlN2mG0KLYbiUMKx7%2FTEYGvb0to59RN%2FlXqvGx5CJrZAKwoC2fQJfvUJDA8m0IjbQQD%2Br9CNUqDvQQLe51LF7PE1i6MfA06mj5UYiWeKyuuLgk%2BY41%2BWAj3hXKHcmr6SIAkvjlkWbR8wbtc0uKxzzHAz6y7IixQTWdA7PGN6YDL8JGakHii0Aa6tAa06ZFhbEKdFiqskC1xUsjyexXrMB3KoXN7T79Z2DCpznCtu7mrW0cJbh%2FCeUzbCWnccHUpWbehrCOhZczoVI9CtqIEqTKOGZqnvu65Flm5EVQA7TRSZVLep4FXpuKOpdjB%2Bj0sbelOTKLuen%2FKlYXE84xZaXftuiWsi9zIWFjDnNQNWUONJnpJF9DCvtF1t%2Bbebde7HYuA%2B3zGt916%2Bm2bN6H6zyRSwpovaEE%2BEAGXPULZoVPDGKtz5OtQNG%2B5h%2BcofCmX%2FjyMGL2SuYi%2FvXOnEK9R3%2F97a%2BFNu%2BKp8L8bHu2HByjTWfTwxxetMMTt2L0GOqUBa0SSUgdc6uQzRwvkdLVkEBFlQl0qZrx%2FajuBvAgf4JbZ961fCSA%2B1VY6U%2F5LeEPEXqEnjx%2FItJDFG9oCRhXkRI9yrupPtL1mH%2BJSsBlXruFjiO7E8Za8Vs9YrdBUFQuLVpbiLE%2FIuRGlJa6U%2FE5U1nFEXLf3naTsv81kQeRB%2BYAt6%2BkhNiFRCP5XO4F8OEPcxDvHzlmv6fBN7dG9xovSpuQscXAD&X-Amz-Signature=fab0e896407595ea7576c17dc4c938ddeae461ecda01c2a0086a25930d5f0773&X-Amz-SignedHeaders=host&x-id=GetObject)

