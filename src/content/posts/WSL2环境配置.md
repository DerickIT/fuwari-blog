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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=1937734bcfcd88155cca11f82792557ed303d5d5a70e9daa84db8baf796c280c&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=336be8a473975b4d0810ee8d2c8b232e6faae731b3de3817e91b16b0be60bdcb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=9335c597e78c3e8af28ec5b4b0d343513d6d0ab36ae590f9590ef108a1f6d4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=8b43eb8dc5774b747101ef5fcf1780b3b03ea4bb628ae09949731f4b8d62e819&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=41516a2d2e0d57fad1943ecb5ab4b9ab3205a6e2194da5e48c7d3c0ef53839b6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CTDCDU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCH2g9mx9Yw%2FMLWwR33zThsmItv7XchFsffOYKLtXOkFQIgbVBI9pK%2F6azCmq%2B8hnUJzUH1tiMk%2B9X%2FA6CkQ4ZV4ZsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIJw4HtyvVdQfoMyyrcA%2Ffli1hUyGzEX0ZsVGgrHHVixOsCuA%2F%2BPNnrav55h0c1p8pCDH3tw10ADYPLgJXEiLJzx83dwgw%2FMIYRKi8zjvVkT3P6AF7ITlsY3f454iYnX%2BKwEz6IL8sl7vASx5VSUBBIVP7Ygi3WIQ%2FKbPEsiAarHQzkog8KQbyRO%2FAgaXNgaE0xKx91zz%2FjB9OeLiX2VF2bXLJJQd3ShrGh5bRapF7Kcmz2Cskz8XHE%2FOLxmylVr8DvWscblHfkCZrhHvvZwjnRHF9SEPa3fGTI4zRp6%2BAnQZePDlwc%2FHfeIUFi%2B2iMKKsdNVna9Ub80mnkYkQUamyfGQt3crW6Xxw%2F2y3ngQGvvKKJ6kZjuSE%2F6QEzwXoRxNVPCzQ%2FaR1tmwbf47wv9bj8twAOiJ84eHas7bZ5wSmC9V4yRUbtdntOAFqm8M4P0F%2FlbjbyOQiiCktBauCjLDab7%2FqV4AM3%2F40DU9c%2FerF5AMt86VMkW3rtMH9P8SP64UDSlOkVjEv61Qonrgg9Fl%2B5OqurhAgp%2B%2FIJjoQuuFKYl6VWS90wGRmsgo8vIw%2B3dxzuWfbCKFoeRtR7MJSdhanUje6vZnhN%2BE95l87WAtHV4yxVnvm8YEb0sbNDUTXt%2FQZh%2Bx4xL%2BL7Ab5aMMvW874GOqUBfjzOiK6x0uzx4fD7ecxrQ15rWboSWeUbe6kOdoVv9Pgsy7ZpFznxoYwr10IJU7YN4i7iGXYwJo8gbDS4QROkBcJg3nT7UzEZ4MKrk6O3Yedm2qYmDLlq%2FnY1iGgOGilszzDDojOmlWiPvrBq%2BgZlovMWLfrq0j8eQRCxvsz%2ByvnxLMK0y%2BnDKVh3UYV6VrNfxT2DJwLnzeQ2krNkt14Ln6Q6iyZj&X-Amz-Signature=b00bfdcaf66a69b4f29846e6db9f6a44823448bccd4d6f93c825f0a1519b383f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

