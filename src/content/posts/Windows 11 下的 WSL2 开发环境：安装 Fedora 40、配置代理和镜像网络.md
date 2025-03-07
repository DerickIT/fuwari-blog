---
category: TechSetup&Configuration
tags:
  - DevOps
  - Linux
  - Docker
  - ProgramEnv
  - PowerShell
status: 已发布
catalog: []
slug: setting-up-wsl2-with-fedora-40-on-windows-11-proxy-configuration-and-mirrored-networking
title: Windows 11 下的 WSL2 开发环境：安装 Fedora 40、配置代理和镜像网络
urlname: 35f4cf95-9dce-4071-8c15-d1f6085c9097
date: '2024-07-24 18:18:00'
updated: '2024-07-25 15:16:00'
image: 'https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-07-08T08:00:00.000Z
---

在当今的开发环境中，`Windows Subsystem for Linux (WSL)` 已成为 Windows 用户进行 Linux 开发的首选工具。本文将指导您如何在 Windows 11 上快速设置 `WSL2` 环境，安装 `Fedora 40`，配置代理，并解释镜像网络的概念及其优势。


## 1. 安装 WSL2


首先，我们需要在 `Windows 11` 上安装 `WSL2`。以管理员身份打开 `PowerShell`，然后运行以下命令：


```powershell
wsl --install
```


这个命令会自动安装 WSL2 和默认的 Ubuntu 发行版。安装完成后重启电脑。


## 2. 安装 Fedora 40


虽然 WSL 默认安装 `Ubuntu`，但我们可以轻松切换到 `Fedora 40`。

1. 首先，在 `Microsoft Store` 中搜索并安装 "`Fedora Remix for WSL`"。
2. 安装完成后，打开 `PowerShell` 并运行：

    ```powershell
    wsl --set-default Fedora-40
    ```

3. 启动 Fedora：

    ```powershell
    wsl -d Fedora-40
    ```


## 3. 配置代理


在 WSL2 中配置代理可以让您的 `Linux` 环境使用 `Windows` 主机的网络设置。


在旧的版本还需要手动配置`http/https`代理，现在最新版支持**镜像网络**模式，在后文有介绍


## 4. 验证代理设置


要验证 `WSL2` 是否正在使用 `Windows` 主机的代理，可以执行以下步骤：

1. 在 Fedora 终端中运行：

    ```shell
    curl -I <https://www.google.com>
    ```

2. 如果看到成功的 HTTP 响应（状态码 200），说明代理配置正确。

    ```shell
    HTTP/1.1 200 Connection established
    
    HTTP/2 200
    content-type: text/html; charset=ISO-8859-1
    content-security-policy-report-only: object-src 'none';base-uri 'self';script-src 'nonce-VlovGaKtTZ0GQAslKYYBEQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
    p3p: CP="This is not a P3P policy! See g.co/p3phelp for more info."
    date: Wed, 24 Jul 2024 10:20:18 GMT
    server: gws
    x-xss-protection: 0
    x-frame-options: SAMEORIGIN
    expires: Wed, 24 Jul 2024 10:20:18 GMT
    cache-control: private
    set-cookie: AEC=AVYB7cpAJfuhUWhRO2oYW8hMAEubSO2uQHYMMifnY0QwTyqMWWCr_PHYLNk; expires=Mon, 20-Jan-2025 10:20:18 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax
    set-cookie: NID=516=h8MC0Bu7dJuDZqd8V5IUIsvUbzDV3WUZ7kVdutb4iFbLOC0oAe8TyOzBmN5DS_aMYq6lPBvxnAH2jn8aE3v9Fun5Vr4824hW3X44bs6XQIifmiK0TDYzWQufzqWdDLbC-oaa45SHKfktYbMHEHRUU-KHv8m8r7r93bMc5MDOGns; expires=Thu, 23-Jan-2025 10:20:18 GMT; path=/; domain=.google.com; HttpOnly
    alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
    ```

3. 您还可以检查环境变量：

    ```shell
    echo $http_proxy
    echo $https_proxy
    ```


## 5. 配置开发环境


接下来，让我们设置一个基本的开发环境：

1. 更新系统：

    ```shell
    sudo dnf update -y
    ```

2. 安装常用开发工具：

    ```shell
    sudo dnf install -y git vim nodejs npm python3 python3-pip
    ```

3. 安装 `Visual Studio Code WSL` 扩展（在 Windows 中的 VS Code 里安装）。

## 6. 镜像网络模式


`WSL2` 的镜像网络模式是 `Windows 11` 中引入的新功能，它提供了更好的网络集成和性能。


### 什么是镜像网络？


镜像网络模式使 WSL2 实例能够与 Windows 主机共享相同的网络命名空间。这意味着：

- `WSL2` 和 `Windows` 使用相同的 IP 地址
- 端口转发变得更加简单
- 网络性能得到提升

### 启用镜像网络

1. 在 Windows 中创建或编辑 `%UserProfile%\\.wslconfig` 文件：

    ```plain text
    [wsl2]
    networkingMode=mirrored
    dnsTunneling=true
    ```

2. 在 PowerShell 中重启 WSL：

    ```powershell
    wsl --shutdown
    wsl
    ```


### 验证镜像网络


在 Fedora 终端中运行：


```shell
ip addr
----------------------------------------------------------------------------------------
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet 10.255.255.254/32 brd 10.255.255.254 scope global lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: loopback0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:0f:9c:1c brd ff:ff:ff:ff:ff:ff
3: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether e0:0a:f6:a3:77:ba brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.102/24 brd 192.168.1.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet6 2409:8a04:1023:6cc0:f87d:79c6:ca07:bd68/128 scope global nodad noprefixroute
       valid_lft forever preferred_lft forever
    inet6 2409:8a04:1023:6cc0:a5c5:dc9e:7ac7:2ccf/64 scope global nodad deprecated noprefixroute
       valid_lft forever preferred_lft 0sec
    inet6 fe80::4a29:8c9a:c6c9:e529/64 scope link nodad noprefixroute
       valid_lft forever preferred_lft forever
 -----------------------------------------------------------------------
 可以看到fedora与宿主机共用一个IP地址，如果要和宿主机互相通信，就直接用localhost/127.1访问，非常方便
```


如果看到与 Windows 主机相同的 IP 地址，说明镜像网络已成功启用。


## 7. 常见问题及解决方案

1. WSL2 安装失败
    - 确保 Windows 11 已更新到最新版本
    - 在 `BIOS` 中启用虚拟化
2. 代理设置不生效
    - 检查代理 IP 和端口是否正确
    - 尝试使用 `Windows` 主机的 IP 地址（通常是 172.x.x.1）
3. 镜像网络模式不工作
    - 确保 Windows 11 版本支持此功能（需要 22H2 或更高版本）
    - 检查 `.wslconfig` 文件的语法
4. 性能问题
    - 在 `.wslconfig` 文件中限制 `WSL2` 的资源使用：

        ```plain text
        [wsl2]
        memory=4GB
        processors=2
        ```

5. 文件系统性能
    - 将项目文件存储在 `Linux` 文件系统中（`/home/your_username/`）而不是 Windows 文件系统（`/mnt/c/`）
    - 如果系统盘空间不够，还可以将wsl2的系统镜像存储位置转移到其他盘符，已验证可行

## 结论


通过遵循本指南，您应该能够在 Windows 11 上快速设置 WSL2 环境，安装 Fedora 40，配置代理，并利用镜像网络模式的优势。这种设置为开发人员提供了 Windows 和 Linux 的最佳组合，使得跨平台开发变得更加便捷和高效。

