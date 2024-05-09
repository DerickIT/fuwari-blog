---
category: 环境配置
tags:
  - 编程环境
  - NodeJS
status: 已发布
time: '2019-11-16 08:00:00'
day: '2019-11-16'
catalog: []
slug: nodejs-initial-configuration
title: NodeJS初始化配置
urlname: 683b565e-75f1-4d55-a282-f9b3b73503b1
updated: '2024-05-08 23:04:00'
image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2023-11-16T18:08:00.000Z
---

```sql
目录
1. 背景
2. npm
  2.1. 配置镜像源
  2.2. 配置代理
3. yarn
  3.1. 配置镜像源
  3.2. 配置代理
```


### **1. 背景**


众所周知在国内下载npm会很慢，并且阶段性的无法访问，所以需要换npm、yarn的镜像源，或配置npm、yarn的代理，都是为了解决 npm 依赖下载慢的问题。

- 如果你要下载的依赖，都能在“淘宝”或者“cnpm”镜像源上找到，那么就能加速很多。

	<u>_**换镜像源**_</u>

- 如果你必须通过“npm镜像源”下载依赖（例如：你依赖的某特定版本的库，淘宝、cnpm镜像源上还没来得及与 npm 镜像源同步），那么你就需要<u>_**配置代理**_</u>，<u>_**科学上网**_</u>（如果你有[VPN](https://cloud.tencent.com/product/vpn?from_column=20065&from=20065)，那更省事）。

### **2. npm**


#### <u>**2.1. 配置镜像源**</u>

- **方式1：npm 命令**

```typescript
// 查看镜像源
npm config get registry

// 设置镜像源
npm config set registry http://registry.npmmirror.com/
npm config set registry https://registry.npmjs.org/
```


![kr9swdjcl6.png](https://r2.ithuo.net/elog-image/f6168e5ad1d043ca4bdba5c52d37a69c.png)

- **方式2：nrm 工具**
	- nrm can help you easy and fast switch between different npm registries, now include: npm, cnpm, taobao, nj(nodejitsu).

```typescript
npm install -g nrm // 安装
nrm ls // 查看已有的源
nrm use <registry> // 切换源
nrm add <registry> <url> // 添加源
nrm del <registry> // 删除源
nrm test [registry] // 测速
```


![5ufngnd8h5.png](https://r2.ithuo.net/elog-image/0017b48b83a3822404228232b76490ee.png)


![rwryrg9jqn.png](https://r2.ithuo.net/elog-image/33177e82239727fd8b018dd2032308a3.png)


<u>**2.2. 配置代理**</u>


```typescript
// 查看代理
npm config get proxy
npm config get https-proxy

// 设置代理
npm config set proxy http://127.0.0.1:8080
npm config set https-proxy http://127.0.0.1:8080

// 删除代理
npm config delete proxy
npm config delete https-proxy
```


**3. yarn**


<u>**3.1. 配置镜像源**</u>


```typescript
// 查看镜像源
yarn config get registry

// 设置镜像源
yarn config set registry http://registry.npm.taobao.org/
yarn config set registry https://registry.npmjs.org/
```


<u>**3.2. 配置代理**</u>


```typescript
// 查看代理
yarn config get proxy
yarn config get https-proxy

// 设置代理
yarn config set proxy http://127.0.0.1:8080
yarn config set https-proxy http://127.0.0.1:8080

// 删除代理
yarn config delete proxy
yarn config delete https-proxy
```


**参考：**


> NPM registry manager（nrm）：  
> https://github.com/Pana/nrm  
>   
> npm Docs：  
> https://docs.npmjs.com/cli/v6/using-npm/config#proxy  
>   
> https://docs.npmjs.com/cli/v6/using-npm/config#https-proxy

