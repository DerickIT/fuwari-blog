---
category: TechSetup&Configuration
tags:
  - ProgramEnv
  - CloudNative
  - Docker
  - Web3
status: 已发布
catalog: []
slug: wsl2-environment-configuration
title: WSL2环境配置
urlname: bd266599-5cec-40ed-b803-521fe8cccdde
date: '2023-11-27 15:37:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg'
published: 2023-11-01T08:00:00.000Z
---

### 引言


WSL2是Windows系统上的Linux子系统的一个新版本，它可以让用户在Windows上运行Linux环境和应用程序，而不需要安装虚拟机或双系统。WSL2使用虚拟化技术在轻量级虚拟机中运行Linux内核，提供了更好的文件系统性能和更完全的系统调用兼容性。WSL2还支持运行图形应用程序和GPU加速等功能。WSL2可以实现文件、指令和网络的互通，方便用户在Windows和Linux之间切换和操作。WSL2是一个非常强大和灵活的工具，可以让用户享受Linux的优势，同时保留了Windows的体验。


### 启用Hyper-V和适用于Linux的Windows子系统


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=24c6494b29267b1231cd11f845a7d5c55df03c822753eb35da633bbd52f9d1c9&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=7e035c818ee72a566580e38a4320abbb3b987e3213bd980f2ce6c0a80b8bf012&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=a287a0819316126316dc312fd2feac024d4ae4a71dd155202af948ca5b784d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=0d8935b09aa03e07f29904d872aa81bf23df7a13cb494638e8882a97dd544200&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=4013ef3d15baeb9c4593311559ab95100c32b738aeeb6cf0baf8d9e79b64d379&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ5LC2B%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T213443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5tIgCUr76zvVDqWNtoKyJSpgIWddm3AA3qV4eeVl6AiBray3w6AvS2ItNFZTtO%2F2WBIAM3jvJHg6H4NwQAe89Bir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpM0mXAfw8emccAZpKtwDL77wqg02OBNGoQ5JThg7Piduh%2FSzsUKqwB3qljiUxP2VzA7NRypPb4H8apSnHX8UYgeGStcAjD2VaxyWLcRwIAfxMU0nekqLfgvC7m%2F47ORMHAsjHKGWouJ6HyAckr2r6ZPt6P4hwYrgcQl6PUEp5RmmB2tYZ9lInh3lD9fB877GqK2JPEH%2FuRFyphW%2FZ%2BbgcOkCSPgC8rP1WUyeJVAOsHlRU3hr2zZkweseX%2Fr16r5WWvEWY8btshKX3pBU1o1IsJKHGeyn1mxvPqhr%2BWjA688%2BNxtUHq5pdkzd909pFFKNzWMNLDF57pkrMOZunFWo9MLhWBaiK6Wn0Qe79pbQB7incXwnlYfqxxHVKIs8JO8EJBuKe%2BADhQUTJ8AnK3JZ9ma1woAaL1O8oul0rA5Aihue5d27I1v8xCkKOuVexJj%2F4Jzow7z9w5hi3HRWTFX6Pn68pIA2391HSw4wAcSVR5wEm1d0cXJF3E2iN7gPWsSL2I1cBsPOCDJAM1o7bj6mlfTQLl20H5zt%2BjAdsC7EWCPeA3aSFCepV4B06n%2F0Y2FmjYNmlC1DtR%2B6p5q6jd88ChdbGcr6gwQSch8%2FSzqIa6yt7c44e2FskP78Q6%2BEp7RZ3%2FDhAwwmv7Fiq9EwwZiMvwY6pgF2GSCFR8Ck28kMS3D9ECYbxt8gVbOyHNy2H6Yq4RqiJImm7u%2FiXfqrcSo6wPrcEfW3%2F%2FOSdy0EjNX1txxL65%2FTyDK1sS90cQPnobk5VhuxYICK8u1MFruEBO2lSrodhvlrwMKKkhRHSMT3qEVug2xaHjW6QA7mjg%2FmEH3bomsfebdN4%2FsqBEtoMLmjU7av4gkwbErTCPILH3VnbvwimbsT%2FcO8YrMy&X-Amz-Signature=24912062c3e4b1385630430ccd207c46b6c959acbc549cacee515c61bf6029b9&X-Amz-SignedHeaders=host&x-id=GetObject)

- 默认安装Ubuntu发行版，目前时Ubuntu2204
- 若要更改安装的发行版，请输入：`wsl --install -d <Distribution Name>`。 将 `<Distribution Name>` 替换为要安装的发行版的名称。

### Q: 如果安装wsl2时出现error code is 0x8007019e


重新检查是否开启hyper-V和Linux 在Windows的子系统，然后执行如下命令，重装默认系统

> wsl --install
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> wsl --set-default-version 2

## 自定义配置


```shell
# Settings apply across all Linux distros running on WSL 2
[wsl2]
networkingMode=mirrored
dhcp=true
dnsTunneling=true

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=4

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
#kernel=D:\\Drivers\\WSL\\mykernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
#kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=4GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=D:\\Drivers\\WSL\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
#pageReporting=false

# Turn on default connection to bind WSL 2 localhost to Windows localhost
#localhostforwarding=true

# Disables nested virtualization
#nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
#debugConsole=true

# Enable experimental features
[experimental]
autoProxy=true
bestEffortDnsParsing=true
useWindowsDnsCache=false
#   autoMemoryReclaim=gradual
#   networkingMode=mirrored
#   dnsTunneling=true
#   #firewall=false
#   autoProxy=true
#   sparseVhd=true
```


### 设置WSL最佳实践


[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)


[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)


[Work in Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl-tutorial)

