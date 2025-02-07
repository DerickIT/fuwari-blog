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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=bab7a6154e8b09a7f2ac845c4565d5bf137c808055f3514b8dd99796bfe47df7&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=ba0ccd4756426509c2f9f75d84d7e80df55f67e88a0599f358b580c1e333942b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=f9ba919b8958e7118671d52c31951d7723efea7c38ce9e68c31efd6dff8bd3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=8a8c3c1b47087e7777bf37745c47b8684a3c4b97573eabdb323e9f15b4479980&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=9d9087b648b840f87980903a3bbda1871d40a56775a9e81f3a8d605fa33ba50f&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2K53FA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T053713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICQw%2FPvcLMreQKgpdrmh9J2b49eA79tjFvPEJDXlW5PnAiB9UQighxRh5kbMf4kuZuFj7VvvyAiHNLxCVe1SGY9l5yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxgxI5O4JBPB3YDRGKtwDyw4lyDNMdETAphSIfcDgjU2mGFwlN88g0PN6F83CocXSyHPEbK8AF%2Bg7k%2FRBICPrlDGM5q5W6ooNZ5hbzGr%2B6dcfvDvoWX5edDldmMksAgE5icxeSt96qT3Jz%2FgE8tk1BmMq8SyoARhxasJ%2F6ss0rkWhc5xj8nQc2JjSdOOCR%2F6ziex3maVE7cLi4v99a1g4ZJHfJ1H9wUiGwIKlsBKwY8wa6pQwU9GJsXHJiASPEN71znCY%2FmXaVWCihMYVsrAVYUX5uq35WvU5LxPkH5VubNrmVjY8h%2BTVYVhzY6%2FceCns20JBGYCjsEwShRqEANVBnpeKMXT3Je4CpuBnLfM7m%2FXHPnOQ%2BRQ541AtkHmhhxFhwy7FaV7vrllWHrpA6hSfHdNvKxm44YKa5geNUMGE4Dkub2zbdzACIjI5JQ%2B03RzRGqjqV0GhDhsCeBVHPL0L4YQQVi4sotmlZNszacF0yHvN%2ByqD3lrVZ7LaZ1C95RCuK3uTw8Ilr5%2Fgsl2EgcJZz%2FXML8MaqPVDOCw%2F0jAKDzHVoa5rbfgGtSRTJ1tkUFypZ3Hoot70SMjyqnx5fhQ23mz0qu8xEnRp1YpfjhvJUs8B%2FVN%2FXZp7odVVDcveiHfwoWQ0Xt1m2xmT74YwhaGWvQY6pgFFx%2BgUMoZbvvC%2BYHOX0ZtlOfnnr2AYnC33n%2F6CG9plCO67lxDaRZsh6d0d33KzGZW8FZR7H9CvCeWYQs17wKUdxTwHNujFcafpj9MxXgjVXQCPZ62t37e48kEMNgKpjbZzMABWE5G0NhyHZZKwD14nL02%2F5YtOjzpDFJqnYWbyZK5tTOWRTiyMjco8wrI%2FTR7Aq2w7qEg83ct9Deq5Yt1sIp%2BFONmz&X-Amz-Signature=98445507cabe56fe07bc967a1649979c3b951be93b6fc13a720360baa666f25e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

