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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=25117b1776ddc13636da85515cfe1caea90ec24eb90986a4dd23e863afb550b4&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=8563c2b61db918e02971359020255eb56a04a8152b11080217354a0b915dc482&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=5705cf03e85a29b54ae9862ddfde686526a2e553b9e22a8d5b78c8f9a8e114bb&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=899dfd291c6b914630552d606aa72cfa2d1481b2e5fb1d5ff7d0fc3ae99e29b5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=40ae3503c6dcdccb05e5d3d8da6361d56d92a3d49fbfd1d6be0e7c4e50e99002&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIY5O7C%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHvwJYqjeZ1QBXsAK69dmXrgr2Tqw8T%2ByFboxeCjl9aAiAJD9tfsfewrjSENL2ge3gFN3OrBOYPbVhNtU6XECt4fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNbakD2hpeusdXwCYKtwDxq6zIuMOSy5cPv9qTlaxMkJtMOAgA12Hg1v5aaqXmsJ1KRA4rb5hpLXLLcm4tAdVqmJcn8dgVTmBLhWTJO9tTR6Ua9HsUJZsOoM7Yo0Sl%2BgS3YcUbyCHbgOmO%2F0B0DXnkC4tTcbcRf7Wi4lEjmtzm5jZlWd8rxfZmF8wR7H2LDiYl3P%2BteU76QNPN3Uy1OBhhhckaovHuFrfeiaFGaxv7KYwvxTSX4zVQBVnouhhCifg5PnJTampVhH7td2ezAqJ8FsqH3gEU8eg3Mhto2w%2FC7Og8xWYiChWYKF6s1CJsfk8wY4y7GPPq70tVIkCSDh6oc1vfZJtddxVDpcDJCAgRgql45iTnqi70Lm5saF6fZziJipMEe8tOkJ%2BANqp7%2B8ZJdXP5M5TGnJYBcWq5S%2F9wP7WXILJhvQjdzsqFdjbzJGvOo6eMik36Sz%2BN4QuLrgHwxGD2i24jJ0PwIq0PaEpt6Ax%2FL5pUZkIEHemq0q9j90Mh%2BLAKks7eWxWYI8qeyor%2BNzeiSDBRbEwfmdSUY9wd9I6A8NdRBqeJBxV%2B5tCxLGZCn12ZIr4N5kEsT0frVzc%2FsmZCejc%2BWnXceVR9EAf16u9yQz8m6P1DKsNlX4q8FwSmhEZ7yGGZVGKpZ0wsKq7vQY6pgH9dOEOIxViWZd9geybitz2JixDZlxMqEFxjpey72hpY0ZyZl%2FJllaCJmp2GjdV35ac%2BQGqR8Q3PR%2B01LjuoUDFGC%2BuUP9AOKOymdAkk%2BGSwqtqbyt3oBn2NebHiGT92BJj838rwoINozd9aVeWgm%2Fp4KdM3i%2FdCOospX3OHC1dGXDt%2FH5SOUcxW6SnTpWqwbD4C1C2NB1X5nEMsNZyZ4sm5dz14bg%2F&X-Amz-Signature=4ed90192261de304c1e9df7b54a41f03e528ec3e086d1ada35a1694fd20f4f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

