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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=c6284e3d0375495f82a2dbb5ec2fc7091078480be6ee1cf2f3c1ef8c0fb74726&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=332a75b793687a8c4350c9808b0817b0ddf999c29be0d0d3de8c5a4783670509&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=23b764a2264f6daa8238b7b6fa28ce93e01724c3c1340387cfff1a2ae086ddda&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=13d2ce7a89b9d7fc5039720153feb046bd8f60f6a82f6c05774fa349372bac45&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=f02278fe97be33f5ddcbabc50b2fd7b5692a0781317bbca78bbf60020367c8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNOV3G5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDVV80445RKRcPsE4QRHQ4YEnyKRyIj6kTfXuRxLhEjoAiBGxbJn%2FYUiTvRcemQGFftHXJ2CAFK7oVDX0ZAgfX3FNSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMN6LOgdV5fFIXoyWvKtwDExtmezRA3XD4si%2FgaM9DHCukvHNdKfah4Dzmrqd2NSjpDaHIxaQu2aeMXkTDyIr%2Bwy1NhHBwmZzJRm4IsL%2FKO6QvL6jVP9p1lTW3vQafUdv8H8UuRWK%2BTKi3%2BM1jCs%2FYaAEU8EIaZ%2FxuXepjYRljHj7PVrYETvAKU6yVKdnQLUUorigTwoYcizsquu03VzFz0lEGNX4NcogmWI7bD54tS5MdGckAMQ4vVLhvS2b5MnA%2F1UWWUNYiTtNMmTXV%2FwQoQiilC2BkGFZ3CgGSDqdBygplVYpueJFeGKSo3Y6y7eIMHV8nv0MuvwhfpE%2F83UftYtAizOl%2B7rA0QN4ZwscDRoTjGuYiC9CU7b6UCLcUeO0Tx9YuQv%2F1kKHdoTDXaJpXDxXTtDJDK32O%2Fpx35w4mEFAH8utobuv%2BBEVDGO6r9ezWyJzUJZj2%2FQFzrksNg6bnf8dzwDL7kjPKubkYLrs6dvGaw%2F06NJznfTCr4GUv5eFQdP%2F0oD8xVYC76Bj15culRRz8bLsHc%2BkTPwBwBXRwJE2oDBMBXc5OdgX%2B3eDbvU%2FhVrvAuZHTPlko4%2FbZWqOz%2FFcpMSD12YvtixiR%2BoCsxWDBLzEwWy105AuIFtVOgAkLOrllK4cncFnEst0w35LLvQY6pgG0slh6seBmtfN%2BM1N4X%2Bnp1waAI9u71oFXrzlN4L5Xox3UT8pICY75owE0XBq7fY4dWIjrcYKKVysntzNuMUvcy6qZo2IHz8xDhzNPK6C5yM4n0arHMkqlYCgXfiFB6iK1H2%2BNPGVfv5GPXaSrVVJMPkx1JYjyOHEM383V0VA0EQAvKlaPyWy0VB%2FelFGqAQTYV%2BhSxT6f32VsW%2FVUnyl%2FcKPX07Cf&X-Amz-Signature=beb94ac94708c11fd49bebeb5a8f558955c2c4028f41d9ddc073c53e3014eb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

