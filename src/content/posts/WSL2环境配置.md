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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=771659b6734f9bbddd3d96ff2c392e65a93f346c0f7cdcfa592abb84ee463871&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=920ae267c39248ccfb7581b5480eec6672f9c4c88b28b6d65d98dad129b7a4eb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=f15eb524b399b7a311dc8e73a8e2fa02dd185178f1365d63644c3161736bf5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=b4c668c6ae6bd7180f8846620879dcd0bd386fbedb6656ba2480e5c540232ad9&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=1098fb27088812847dc9890e7c9f2b972f6f7035207d2401f300377c97fc60bd&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7GFWJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgpOd9mJv%2F0MRBwF2dJTEQDWNmOCEEMdZMTRUkxca%2BgIhAM1bz%2BviL8EnpyX%2BOUwekAKGRQT0GKWRVf36XmQCA1qoKv8DCE8QABoMNjM3NDIzMTgzODA1IgyIsZjCUlsYa%2FvZkEIq3AN%2FjS6rRmQYpx9d0IbWZoJAd6gaDqZYRmy5eRCHTs9LrpcO%2B%2FEuviWtPxaDwajJd3T3i%2BEJSAsmFNFni1kkVT5RDTfUMFqEu%2FuA1M2yHhDxjhJlbCZ3OLalFuBhGY3YMffck4RTntf1yZDY7Pv0t5L6ZieC8YPkfIkvztr87zlLk2RWTemcdZbX2kG8LTb0kuugBI3xxJSZhY80Y7PZZSlRHoO9r5anfciRtYdpG8hECKm3vrpvHabrYySekEZpsf7wFGdgVg2CD3QUKYZZgMagyWXi92joTxqvu%2FmlVfqppvY1O2XSEQipJWGGNvF2DpP1eyp0EElK8YnOHXSnJnWBispxBqTQxlWIL2Lizv%2F4Q036hb8TCkzav%2BSUrr7cMbXMVw5pBzvulVvdAv%2F0oaL6Xr3L7pBSA%2FgYvRnVZaF1R7LbP8NXfS5Lbw%2B9Q%2F4GMoRu73%2Fymjh%2B%2B3DKZQ227LC40XYOnamrAsDI3zAKxwGtoIFtcwC3f%2B7pL15GaVxFyd6MSuOY3oUf5kUPH7P65CcZdCCPL8tDi%2BqW4foM%2BKee4t0VxnjGvUJjcIzcP73jGHh9msbeIzGcn5LDaN%2FX4lsThol1XBTMakm2dQOVFC0Xty6AlCRR%2BAmWJz3DHTDNxIDABjqkAWfAb4KzEwv6HSN48bZ4jRNQWHWQ88JOU6%2FBxfRfHrkzgITLVp%2BluXb1JqIKDIKwkyb5nbT6utpyWhKvaXF8ff1iwkYGeVhmIsIu9JyU4V738ts3vmE6NydtRjLFRF5eGVUHFi4J7Y4%2BiYCYjjBWatO8GysWUivnyV8t8lg0AV7PuHQBSFl6y5PTwnV4CHu50c88AEY%2FZq7IiLbbVd%2F9bDY6zIw7&X-Amz-Signature=cbf3b9f25e62c7389b9b1fd384bd027e1312568f028b957b15f91f97a0c1dec4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

