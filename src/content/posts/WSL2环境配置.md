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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=9a8791f11a5eedcc472fc9c50bd469086e704e5c8329a85cecbacfe02ce358ef&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=7f0ba43dca4fcc8d1712faaa0593035d54f6850195705847f4239dc8f68e06af&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=00586b2582f102219a938d92054aa5a5c2da754e4973a963eca211c283dc9b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=b46e3a48d7e135b5df3314dceeecdc4ca5087623162f9220ecd12439d5a11101&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=44b15deaebfff6d8f254f1775c634512d398e4c0db0cf39d6594aac746246df6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRIXHGW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T213451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHvGVCVL0T8iBWyFXqL58MCMCRf%2Bn8CT7UcXpAEOHwgIhAMn%2Fg4KDJKpc6prLGAXFo%2BXD%2FnrTgQcLhm839VrNR3CLKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQZk0YsNK%2B4w0qiRMq3AMB3ETJLB1OnzySCjFtgaRj2VWfHeS0B3C7yZ6472IDqwCB2YnclO%2F2nftheM3PZ7fN2QItzamJq2OFlnv8DMKfj3oBPbMGZAlnylozRfJjJs0KoaOjLn%2Fy%2FqvGx10i1I%2Bos2zyJijfbtstQADDPIgBPvenH6Jz2Fi0yy3b4pIcAEmu8SbBrxG6yWxLV%2FQIsDBoTdwqPGjwTAA885EfW7QwCI%2BTq6uAw6kZEKG%2Btd1wp1TAn2CROcQx4dFx8s7WIp7Pj2LwZ%2Fwhl1SNlooYUZ1WXCBzkdmF8n4oPDdBTjWVlx3luCN5lWGimro7TXMWAoPV%2BhOeI1yQRemzlsrvgAUC98NxJXRKv11zTsGyWujVPPRFEEOJO4qIMvd1qPJPar8kZhZGrBF%2BkFlS3KQ2EaK5ZDpw%2FML5oeNcf%2FFwAkmrcgC18%2BiJ%2F7BLe92VQ45p6YG64LhEm4PpIB70%2BLpmzqsctB%2Bv489UAw4I6vJL8Zs%2FJvUJpOosSpO2BJR9gkWppIePR5vWhWxJqUNx17VNkvvmaB8uBQSUhf0I6gDy7q5uvnrScXOObguDIgQzyaBVQYL35IqG%2F2FRhnZEmeoEAcXUohffFsbDwxFwuLA7flXrJ13VJx%2F6zqFUk%2B5iCTD69pa%2FBjqkAWRmLK2ushCFkT%2FG6VVcvzEU0ZbEW2PkIsTmTqMejfGt%2ByovA9mko19KMMIyipWz4YFDnGMS9nuWqcqNG9A7%2BgNSeQLqS8KCC%2BPaQ8iCdMTdo5T%2Fsnj0%2BWw9vEJyqyxgrATMhu9aVPHvZ2eg5bUpi47q6PSEpsUOXeqYHhMjoLKgcRQcZKYkx6r0%2BQ7DFql80%2F7B0nMKIl89HJmc7GGGhbAQ4bpA&X-Amz-Signature=63f988b289c4a5b2df380fdf1fa54d53bb601cc645f574b8d7c5592ed96259f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

