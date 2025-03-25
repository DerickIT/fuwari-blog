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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=c47c5e063b002e2746e4ded54e3489ffea5a899d066207ba9bdab70604d64831&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=3a7c29135c711c7ad18c3e07ca9123d8560b02897385661cbd8b2184d4a2911e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=46adb85c6e76f24328522e69298173c15c2640b4a8910b8330b6e4d12288b865&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=a35c6e18c0567d21a588b6ec021498f6e16624dfa7a63cd06bed062bb0aeac2f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=040a71dba522ace885e775380f7a7615e54af8847dd05b0bbbe08ed444881d24&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWLLORS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHecxszD1D19ahaFK5AHBsziPWKPuA0K3%2BolwJ7NghExAiAIdqYBNWPwgnaUGsT8cI81qR%2FIBejjpPgz9vn7kEv0HSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzwBYD%2BqPN%2FUMWDKtwDL%2FK71txqOaGI7uN9%2BTa67iIkkGw1ve5CwhCgllPKKMXM1ekOwsIHQTvVKn6K1EaSY3Ix5Os6RzHZ%2BP0STe1%2F4yaubatYmmOthMwExG1jgBYaiM2u8pDpPCdWxBP2Qya%2FDe2K77kM%2BL0h3zQAUslkdBSivu1s7ecjOlhbBUoMZZF7pMyKso8Ep9gA3iChAeIVYmXe5f4q64WH4iBVJmyIP4I0YweRNFj9v%2FNc%2FAuN0CwSU%2FOcMjPZ0cmzaEIJRdDT%2FhGFRRgKfO5KzJP9AF7hHrVy6Qo%2BWm9KEWrXbHdntx7vgqdyOzVvcXIEIhtZ0M4COfBm9C5XHGYMwSa5%2FquD1A7t7Qw%2FxYHFMxr80KmPXW7jorB2Jv3m65tfrXBtEoLFcISWdV5YMVk9a7QKwC%2B9j1LSEzV1FYQc1VwLahnLGd6pyj8iwBW5gaT7rlqqlZV1k5nrCWqcOKVSHcV29t4YiTc1W5tJd4ZstElqQuEWYaSMiJ8RWkZ9KWHLLPg2ECBUq6pvm9rvDv4pXdrKJGuUDo98aepc5XzkdVUYWEdlzmT4mwOWLYQvsmLuDfmZgKFCsUg%2BuCwz56pPGmecKiLSoHLRU%2BVVRkzXgt1hwIt0ql8OIXSSsMyjmLkMcdgwp%2B%2BIvwY6pgHg%2BLiY5o%2FGCY0l7%2FDz4aQFiY7%2B%2BaFo0yKk8hJJ%2BfGzxzcOUGnqDwhcPUaKfbp%2BFvrFvRd3Fmza1QmdTfgjTEgmAjn5a0rDKS8kKXpTOfzXgwPb9KP4NEto3s7rUURDjRroiChYV%2BLoY1ShbtcjN73fvhqndvXuCbsYA7dskLxLFWFXID25DOe%2FzaQEuxYXivCZvrWQEnEeUo0PREa4bcnfW314%2FbXr&X-Amz-Signature=d8f6de720e645f0dfa936b56dd3a529435ae42a8a7d738262e213a0fe8f6d59c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

