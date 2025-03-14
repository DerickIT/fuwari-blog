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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=f3f30dae97abbf114e6d8c6acaf5442d5ad89d0770eb9edca3a8d2bc81d1556a&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=f26d54e7ea69259fe41a29c5cefa9a177f5b303bef339eea15d6ca3b916aadfc&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=ba349c75193a262f6e2960540d0ecd89814b0b22be5c7b1b8c8e7fb7963a154a&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=4a7ad90a56164e4e7508eca5916b9a2810d7352616b5618fc25750bbf86ca9f7&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=6fcea05e5e38946167e713faeb45268739020e047887cd8f20240b2e5efd6844&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT67DFR7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBw7bsiNhndh5Hng%2FGHtFmW7KxBB%2FYOCOpLmrvLjKvRAiEA2EySNE%2FpuhcUbNZnKSGthAgeoJld5i%2BuOVLCzabKsV0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIURxEpFt9hiibt0VSrcA8TeVigyN1Qs%2FqDHiUwHc7m%2Bu5T3Nmr8myqvi3PchlGj4K5SCaiFwjRnUK%2Fg2FrjiWlZCK6hWjd2klksiJCJKkyVHQjI9WgD1n9stA0wZVh9mG06G%2Fg4qyonH4F5jFVgghrjwSTXE0dcRE0j6ie%2BXi2nVUrfh8saRCigJoSn%2Faia5e3Y8WDjgL4LHQSQgvl5xG59IvHSOm%2F20gOXttAsuj%2Br2kPJA1MghkRvAX6qvTfSHqb%2FUB%2FQZENxfVwGZ%2Fp6Sd64ev4wg%2BaY%2Ft%2FKIlRPJ4CYTstwwFmiiAnYSM4r8LU%2FiD3SEaKsUdE%2FaZJUAX6id08qVBzgzyYP%2BCSGGDav7I7i7WJMsPQiO0NbW75%2F45gsypp%2FO60doabJKpXvUHL7J2%2BN0xARG9LgK6IeZKJY9ratVK%2FbjK5rmXVwrJ2H2o3nM%2Bjy00ebJA%2FzlpIe4%2FNuNui4R0ITCrApRkwnAOLbdchqTxFlRgZsn1dAhFJFMTbKLJxZmBmMGsR7Jj%2Br9lg6YIOEGjaDD8RXI1nLf9CG%2B2ATjcvT%2F1YT1dQhdYq7p4etcs%2BqwrDHwPSlZrr81CizBeaWt3tvn4LFcfmPGT6gKSNBFy4UqLhcZnynAHUP84gTpvHcmGFjOOWXA4sVMMDqzr4GOqUBT97%2FgllVrHinyufH7hKet%2BkoIUkrHozy9h%2FwMuuDUAOw6xKQpFt%2FELSxQHLDqMumyd6JPsBzZkHdapKuNrTqAMFCT%2F1BJ8WwrIQaNci7fXvHESDiB9%2BI67R%2FHCzBYX255f%2BtbsbWxL7MwjX9lLn6uZ7%2F4snJpiuHq55rvgGc%2FKkZv4%2BAGO0NE1rhtSn2obzCXjCLK3ONn2I%2FqGFEYzd2Jv1dUzWV&X-Amz-Signature=7b8f9b57c5cb361fc199ada7241e1dd7dbe9643f52ee34689694bdf24d028399&X-Amz-SignedHeaders=host&x-id=GetObject)

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

