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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=d595356e5f2491a7a7676b586395fd53f9fba562dd46ea95c9cc8ae5ec45aec5&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=64776f73e0189e4954fc73e8f72c7f31dffa4132797cb454827989a9057cc89e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=c4feb4594df68cc86c87efc49aa2a72f97b423235ceac01112c19b141c784e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=1d0c5b493d446effef353b1d026973021a296eb545ebfdb812314b82cf3fd585&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=a6e2935359f3523ca58aeea42d9abf58874106fe6668093b3e28c64f58d8d71c&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2XDCEG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjZu7dYXAO3YA4vTtrSK2NUYjbW%2B2sR8SuKGcczdBAfAiBOV%2FCz1SMQ8SfAwHYDT5WtoN%2FveKlabzQOdrF9Od3HQSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVhyFOpmX02tDYMWKtwDfX2otqKE91Zp8Ztmdir1u83%2FqkcTbQEe3pKVGWwu5roua5qLZwK6AUCwpIc3b7mCfjWcOo5ny%2FD1Qkqtc5UA9yhEqO0X%2B9ryU6rhUGjewtpcSW%2FOVIivr49wRB3s1Kk1DBHqPMYfK9T%2F60PXJIL6ZCtWNpzS%2F6VqxUbr%2BAoIIVkC9A8WTgg0VH6JkoPFmC3XmxlxZunler0iDKwj9kLYMWRTj%2FuD62g308PbIZR1vJ0tcv%2FQZhrqr%2F9Oplohy8yt6rDD10ddVCicrvOolgKv5AkO4vLfGtfenGGemlZfMzyS6avUjlc4p8m4HwWsR2FDabsflb5I01p%2Bbi6v3jb0OcFctTjyVep7X%2BfWautl7qo0PdomGsoaH3qwc%2FMa2u0bX7c%2Bxa3tJ%2FxTiO1GySssJeEEjN9bgiPgfXSH78yJGuMlBX8LxoFG3nJcB5TxLaYO1%2FFl0%2FW0RVvY7HJsfRaolBi64Pm4MlvJ5fceio2BUZDJtKp84H9NeneJyhst1Y%2FMtYf2EiTPADz3%2BlNog7zOhBBLM59Nb36N9RdjVegmF%2B%2FgAL9ZjhipJ9H9cVCXUQ7F98RXdpWw9yzj9BK1wV4rMNiYRVgP0j4Nltu3igpWgH3qP%2FtxgI5Egs0kKeMwo%2FzavQY6pgHy3CA4Pzh3WNvUhOu972mu%2FjQbdbI4Aedq%2BK2weM5tks4jPVo5k%2BrcQ5rwPr%2F0r%2FvwW2yTp5Ug7zlDHZSio7CrLE1dNrE9ZsJo%2Bg2W%2BdVBZYRF1M2J6yZd%2BVdDVkdLXpbISiD6PXzv7esy7KTTMcGyvUaGAbnhydGxjonaLl3reQWYj3PmRmqEoQUQpxcUjX10pH4sRjd0Vb3IW7hrTfNq%2BkUpxWzl&X-Amz-Signature=661716cf4b5f8457557da4ca4af3388f551eeeb8ed9cac46a7d3e56376aaabdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

