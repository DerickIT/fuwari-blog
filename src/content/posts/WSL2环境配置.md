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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=98a8e62685451739efcb8b4f4dccee5282c356fb6ef41c3f5b90bb354cd5f4a4&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=c3cc074691f12e503533d1d61c961036fda9adf90dcdf67bf75f5ea334fe83f5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=ac6fa6e45f7f19caea9cbbf3b6a83e99b45aa852ceed94f34bc0e3aeafe23f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=f57dd0f755b059bdfad8d9c5a36ebfbeb94289798373d0e36cd71186e3da9423&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=e914c753a039943e22b069db4b8b0012b930302281d3acfc45e42f88d1235baf&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAISRLE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T213512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6tG%2FoI9SnBWiKvycxB4hCYhSYr58uwdcH9R1%2B5RnkAIhAMCVRRayd%2FkVDypSXvttWG6Qf6xk6s00HH8hX8q5wY0NKv8DCB4QABoMNjM3NDIzMTgzODA1IgwXgG87hPPMB5Ck0%2Bkq3ANEOp3K9HWIq4zi1dxwXuJ6wX2%2B86OpKN4aKJfuxspqfYlrhNbGF6tY1w8RV6Hy4h8ojIjl8z3z%2FGKIsQ0NyA%2BdFirdMq1IDrqvEg6vEu7MIevN683OH7qkm76bWPeA0cvXrKg4gsPJYfeVPwROqy99O8MejOSbmFHnP8CIsCVcKVx5oOQ3i3p2LDXgUEbOgttxfalrmInyZRxMd0ec%2B1rXjzqmig%2BeAUGDS9S75oUcObW4YLthGoyexjeYQg4MymJJLHg8FUG5KOqg5t%2FbWvFhuBTfa%2BQNzEwjCmbVJD52Dd%2FNEUMQP0XrTGiD8Gt%2FCoVLNQUVHkDFB7bF1u1HUZvUC5VqcSIGkjRthV5R4YEpzLqkobqzP0Wv6UeEHRbqrcBzuxDVANy80blpr6AHvF1CfpyXy0%2FOd9nP9yAU%2B%2BWfkuMIk%2BKZnIjyaVbjR9HYLLbWMlKY0QshBvMQDd4qUIuAflssYZbj5QYWr7vDDMbArBV%2BLuz%2Bu3eheIZdyJ65lY1HjAwR6h3WiduEvqZN5U8o011W%2BNaDg%2FMZZaG9g%2Ftwt0JStxKgoABU4qsdRzaIdX6HkDwcPaNOx1xCoO5OrmiUu8VVOKzm4MZc8iIic1pheB%2BTxo77QWgQi6uT5zDU6PW%2FBjqkATqALhSFwTCeaOesrkD%2FczfX%2FUnetPLTlgDabrKc7ddEJU6xthiH3nfRDuE%2B4XSdtIMx7hv4RSRyoaXCCtXqI%2FVTVSyde%2FVf11PPy%2FMDfFc%2B64bvaTrLVmSU45cK2%2FosUlVET1Gzl0c%2FrkP4VaJcgzrbENoOlVYYl1fpEYl6PhZ4lFBjGBmKEKxHyf4QuwtM8kXPa91z96GsL1Y3LCk3e%2BPhnGNV&X-Amz-Signature=2237e7ea0a6e2ad4be12df5280c345d6c1310a76053e0c827c77601460577e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

