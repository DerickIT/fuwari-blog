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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=c064166a49594a2570c7399b7acca915841f6fa9604f0cfec59f38ee50831336&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=96dd5cb7ce97a925876a62e003ffe9c64d1ffe2b06513374a5b503194b96093c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=abadfa883c9011542a05796e1d40759ebc058e50baf2f547dc4034ecb1ff4ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=37c32a8094cf33fddac74cd32421f603a1de76f0d2bfcbde0b0cc5fbab52af80&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=7312a1e621938300c1668ca0e75994ebeecc1cbc48c3adcb34bd891d96e6f648&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OIHHUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCh2kBJIB1uhq66HpLMPBv8fqTj3OkHLQ0H14VxoqhkzgIgWBswSGD2%2F8K3pzsAR%2FYsyRQ5LVBh%2FjTftIqIulql4Usq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjwGLp7NPPkJeg4nircA3M%2F3qYolztaWbW8JiJScO%2B%2B%2B%2Fxw4lUIYCpbJFJpSprNSjW0dhECIvIZJlmwahPaznXh1OC%2Fbyja5WWIA34R%2FdBwB04iouRXSx%2F42YgKqHwZQtltCc4%2FK2b8N4xx7Kybww7z8CHlzF4cm3wgjoOKNr8gLvS1u0Q6ytiKqsHJBKQwg7YNt5%2BKQAsfjT1xjCDIZn1r50C9SHBOko%2BjSAs9VTspf6FYJs4qiLf58o%2B8jwBcPHXgID8TVECx5uPziaJJX1UjSBAEu3NdIT%2B%2F2lhBrXatT3U%2FSnCjDdkAWKi2sf8gCs3n11E08YDVk7HXuBlEfvFj3TDlTPYdX6InKp6eu6%2FtfoBKxvWaDjuVjv%2BO2%2Bocz6FQUVtE5fbgWyQGQLgN6NLrT%2BEyoqekyB%2BTd%2F44z6GEONKKmFkDuhYS4vAodLgr8mNNhy%2BQtJHveo2MIfyfMJhlKVYRb41W3uJoEHrIdH91XFzAb3Xy%2B4fJZgN5QKONM%2BqW6vsw5kt341%2BkwTPLdvEQ4WyOCU862uSL0IcD1S59rWTRpeKNB%2FHbV6e8wPMU7Il6dxYUUvQxkfeZPmsVdqEOXS5xd9UqELAGTEdYJ5GOafWdhuEHUXfsDuhnfOlGoBPdsB767XVnUHWBMOXei70GOqUBYeQtr1pBpNtIOtf2EEnKXaKr%2F4kEzZ7TYhYcQnLS48mBoxCpfExZ51lnqQIX%2BBqCi3w3WKZwH8j091%2Bj%2BNbRtGVHznf5D57HZAE%2FP06b7%2FeVnKUlKPOpHfQZR3q2ZqBegpKiNeqvSWq%2BhPSGviEoLmmZng87SF5dYFHUh7hkZ6x81%2FumsZ%2B8grHVZtHmmidQoba7aLW6NBqlbfdyJWZf1W5PCu1t&X-Amz-Signature=bf3243b1802fcd4c0fabbc189f6f885724977c9a5c264ebf398e468d9df4fe92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

