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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=18723d3f395c70cca8c8d78fd45582415b36d2e0a632b144117d5e1a61b1e826&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=930aa2c90269b61cb84939710f439786051699721a9c51ce841ff6fa3374333c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=5d970df2e78ec3032674cb15c27c26f3e4e51ceb1f6f549dbdb63419589d8c20&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=d40ab865d4d302db7f88932d5e5627efeee7cde8c289c163381f5dd3d6d1bcf0&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=be676c9d17978b9cfe9d98cef384d8a69f2fea7a10295b1bc074e8c3a7f633cf&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZTQHVD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T213411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHjoZLZKQLSAD0uWvq%2ByjhJP%2BDjho8BQulnxpVU86NWWAiEAlXqyBB7nTjChk1RgaqS01WCK8SyrSPyXtMVON8oaF%2Fkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDpbb4iLPOacPPryqyrcA9WvvE0KJtFtA7U%2BgQ0I8TyLaZZORpkH%2FNBSSZlrg6T%2Fm1FpEYnoYSxxV20X3cFRi5EbHirscUkYDWmrIDZKJl6EDYwLMfysDrYQzxkSM%2BlwAx17HIPq3q%2BMa6w6fJrBc7RQ7EPmgNrolV%2BzeIHV3OjECIHkd8e%2Fk8%2FEsyNmlri%2FcR9KplT%2FP9WpqpaUIggXXGgJZ3VQAN1XqlKpu8tASigcrhs1nyzAib74EtDs1qSFaXrBiJDOtiUcwQZdKnvGtzCM9pkmkHy%2FJlKzGHUQEQCYyM5dDgoxUzjDqzZVAP5lffLef%2BeL1b8jwGkuqvPS1KJkj1apm3c1FYLk3dZ0ARKKSoibPWGgOZYRYxiNVa8NUgdjrtKVQTwYyFNnPsbj%2BNuBRadCRaA1sC9RoVD9YNVskLw0GfNRrLcm7uS4WUEfFYLxj0m8WQUxY0uUxIh1RQQe7HGn2ryjg7lQ%2BfVE6shM%2FT%2BPFUBRF59DXYHKT1KunTOeJPIvEMty1Vp9R48fawKfJ13ykifvITEKv6Pw%2Ba1yNtRJAZWeTnVyyLpLNRTZ5Btv%2BeZ%2Bh77nb6rNnJYmOU2CNCToYWgWbjKAhPWtw%2FHmT%2BuqmULpKo25jwJum5hiBlNos3rgt2FzXuU3MKX%2F%2Fb0GOqUB0wqAvxvlSkX2NB601UmOLBajH7YgOjO9lzlzz1Wsn79Qkqa5dgBAuVN%2FYQ5wkVwLIczZJLpgd3r%2FLCa4WV%2FUeqKO%2FukMzW30W132Kl3DU8zL8q5nQjYeH9mdjdddxuYC4GHap1rv7n%2BMmGc%2B%2F5uN3mnZNj2U5Uxi6vnyYninbNiILcIQdXYuUczuZtyxt0DGhRPeGx%2BDO%2BGLU5HWh%2B94JdmTpCCC&X-Amz-Signature=a7a85dd3bb62f14d92b333685bd5ecf9d8e60ebfdb33bda097092897eb1a48d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

