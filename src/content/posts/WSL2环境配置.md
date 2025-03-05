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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=eb8b5a3771411ee0faf9dfbbccc5faaad50900388c7dc6a74da27b00af8ef4e9&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=6a89b6b3282d1afd99de37bb702b75bd96c6429f9b17afebd0b1c1609bbe6df2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=4ed2c5bf056046c76bf3fc8a00e76e4152d96aee5b17f22f3b1a892d6d5e668f&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=d46f9eb9583b60f7c19f73127c89a31083d849d8cc95aa4abc3f0e70194db848&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=f1f570926801b300f8bfe5c3189783c4abca5508e1567587f81465f9ca1a98ba&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS6WZTS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T213501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBaH02K0SsiuOwAeoU0O6shpmbWsTxkV4St%2Bu4PAaZAIgROd6S4UuW8h17%2BzsRabo%2BnQzNRdgaB3P7HXtkrEBTXgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFkHDrgr7VDrbRkiXSrcAxUkS4ddOtl%2F5TY1q2e0uhYq%2F%2BTtKHndEWfxT751e7x169NPd1wZAIZrYrIc8%2FkKAbNk3%2FXlq2cWz9TvV6wK5Z9fhuMmny1Fz%2Br3E%2FRV3dm0ci00MiazYqLChp%2FWmE1v2bN5iho%2B0rskon%2FA6YwVsYr3gUmG3mFW2yvTIB0%2BSUuctygcVvHxeqhWa%2FBCCBUwJw%2Fd26iwVYkF8uUv3CHSo9LkKF5EblJFcLdR%2F2my8sgS0PiwkvGShuuod5muB99f%2BTwoYA5%2BSpKgix7hqYy4xIguJb55XCE1ivX7cyBhE8dDFgZFeW6%2FCGtFvkCGVzyZs57Qq%2FKluwFV3DGN3WBn8CRFWB8xcPf%2FE9f9nL6kh5T5rVDw9qB8lkS%2FIAKVXniZO6qUjpb3bN%2F%2FznNJhD8vfTHIJ0fD4kWPCRdv3SpE4dGvlJIYc6hmKwKDPVZEBZHNochTm%2FdvyGz5bYtDE4C66kMehyddguifWWXzH0TdJlYihGag1iOot%2FqYtyIKByKdDCtBDE2QP8Pk4heCE4mNBgbolxY8fZcaYeyIzRZpR89dQZCIk%2FpGfiumzUqTTmuQHeXmiLl%2BSx%2FXSggnztGUrONEEdJMoFuAeUA90CQsvw0EdsQ%2B0NfAiOY7bcxFMM%2BAo74GOqUBdx8FQCmTXE7Lyy7oThyGIXNQL03K9%2B7bT2V6nQrrqoQKQtOZVcNIcLfEXiHihxDfwqywf4ntHwOUpLMtGPSXV70NTL9448X3hUWsfFjVmTVLJIJHzKKZlnv5dAGdklbE%2FrBRfQlQk6SydOAX8%2BH59zLNXajYZHNverAU7jWZYrMfHAW6NMIGs%2B9USJ0CU1m2lIxVdp3fwBZzP9H1wGLL%2Fzl376Se&X-Amz-Signature=80eb686e35cce3e00e80613e44dec287ac6b6994bd8971d1fffc279d2958b903&X-Amz-SignedHeaders=host&x-id=GetObject)

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

