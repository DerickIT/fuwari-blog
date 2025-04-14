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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=e330e07c956282947f486a6ee809ab1f67b120d61f0f093b60b450ca013d0a5d&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=badbd28ffbf205f4a683d3a99b102c73bfadb461a259e28ff77c749984125121&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=3fca6f56991fe7937860e585b07e076d5e6539df8a8811bee82cdb5875e5c701&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=c0478bda305ee0a57c2e6c0e11ae5ddfc8a83a9a67361c96d0b327f9cd7255f7&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=6dfc7502d1b68bb14bd8ca051210e29967fba48a6bdb15d6a24fd101c9451a80&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KO7MCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ3TQauszLQw%2F0VDPID%2FSyQ3t%2FZN22MITYjE%2BfryRSRgIhAJPWujxBUeG6hFoylQpbtxO8PyCb734hQ44YyYH7L8cTKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbzL%2BJ%2FXGW9elM1kq3AOwRsQvDBKtisVWWtnm9uVDtO%2BnyiFagK4H63N5cSS9Jng%2Fglld0lh8QJNyj0MVmtjf%2B7cSgNqZBBfhzSoPwaPd7ZsFAc5tgw%2FOM%2BTBaUCWsjk2O5M%2F8%2BGlJtZIH036bQ4Ji5F%2Bj5TdfYCVaQHGpJ55xp17zv3%2BVtbCMELSuW3GQhtO%2FPl9kHD70HAeBZ3QkYEsa%2FtUD4fL0hnZ2LdPnSiIgqmFVOZ2C32CjH43gFwU3LIw76ZKTyEhXYtEkjVSaXiDI96QiS9Z%2BTFZZLCPg5K2O5%2Bfb8PJTin%2BqXJSZmdczGzzDncsbn5ixbJINSg3MZl4dytREyg%2BFu%2Bkdef81nE0p0Hr8%2BluBELmg45UK7Cx6vb2tSkHql4zt0TREuKoa2MnHJJG6jRhxeGBNqQiW11A8dBhQEZWi%2FsNkr5S6%2BUVegN1MIht7f8bM9TfP6k%2BqeGy670%2FdxgsNflU0iy7f3TDuIhwZ3CJo9ASjUG2vX9q%2B4KwBIXSmzlqDd4cRgvGFyuGYlafjvzrQs0E%2F3YEpWhi3dW0pnH6Z3%2BQZAAudKibUAJjoAZZKZ3prsfyk%2Fiio5r0nbFLSLYZi58f9Q5d7Rxui0v6FPuvw1%2Bw2JWD8dDVSTjjuTy3aO1wMPwpHDDcrPK%2FBjqkAdZR%2FJ2emN%2F6lXf9bLEE1IWoXJelb8tv0oGMOi7IJPLG15sQ9YG2M6loPOpUbq%2Bqqwdu1er5JSE9zlPKx6Nl9cnkujcVrYc40Inwu00MSzOmWZsd2n%2BKAzbfQ0oR2H4vLzfB5hw84TIGL3eIaIsKfn1aqwS8GaXZEjdDyzY%2FZ2N16i5LvzdFO%2Fu1DzfpqtbOro%2Bnbwrsb%2FHPAG%2FT8ZORpCtqevuv&X-Amz-Signature=ee8332e4cf2ad8ee54da7792d0b0cc30a1a18d613c7fa78b65cfb8ac5c81a041&X-Amz-SignedHeaders=host&x-id=GetObject)

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

