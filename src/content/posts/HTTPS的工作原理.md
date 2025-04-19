---
category: QuickTechBites
tags:
  - FrontEnd
  - ArchitectureDesign
  - Notes
status: 已发布
catalog: []
slug: know-how-is-https-workflow
title: HTTPS的工作原理
urlname: 4984d049-f013-4816-a65c-4b83a09f7b7c
date: '2024-05-31 00:40:00'
updated: '2024-09-07 17:44:00'
image: 'https://images.unsplash.com/photo-1673154548234-6cc96fa9a8a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-03-29T08:00:00.000Z
---

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/2950c759-0255-4c0a-becc-122aae8c82c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAJO5PP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXSMLSBkcPGqBrhNKtlmHUlwo%2FJSlCS%2FQCQ2jT7UygEAiEAng0gkW0PHZSkLjgjJNwm%2F55ASc8nieSXV%2BCDvLNfemcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMFlzlfkRkUynOTKCrcA8d3aALQgj9%2BcakM8QDGMX%2BJ2CJmhwaGNgm1cl0RT7ejOYOAuZB%2F2VIDQmTaVW%2F8Z%2FGgH%2FV9Fym5DJHVWJjDJxse6bKecM9faROeKDcWPFbUuTpJS6t4MIG0md0kc5O5%2F9RA3xYk%2BKjkoKWdkynyu%2B9QmxjvvUX8ya8UdqdFSTbMXD6K4r7IY%2BRgyOfrnLy927Ndvn9UjbSrf8GgH36JcjKA29ccCQVM68yemniv1Hy4kF%2FXH4AOQd7IX5hEZSaYYRzFO984bbOimiWOD8Okxp5GMOKGa0M7PRr6PQePxQXM0tj6On1rewNXGcyQvdK3VxPQYUuyVmOqfOF0N0I4B%2F4LBqLKqhX9dVaz1X2msSrLPIKnFvnDKBwnTaaVF%2BtDpwKflYeErj191iPW%2BvPLHPPmxVSFVQ4fiTcVjNqT9CGRBVT9qpXddeK1g0K%2BjFW3NVLF4U6KtwpAm5%2BQX0MFSNbHg4sPdbcCsTA6rSJZSLY1OQluXsSq%2Byzbp8ZHr%2BlTYLVPxQaadnSXyrTQEhOoO0kmU%2BSo5p8%2B2OHwWPl3uXZWwruzGU%2B2ktj62bKitd5E3s%2FHtYE7fWEncTEYsxFuipEy8JyH2gHWASMCUjunQFj9%2BX7me%2FHVd9gObLpzMMHWjMAGOqUB%2BJYSGI3g3LUJ8Eg4vuYmHaQL7pOeKmzg8XEwt4t4Q14f8oE0lxOautIpXSXE6x6chfvGPeSNY7I3b8uEEcrbD052dTvaNU9zKoiezRJ7bjVeCKLloU%2FqJF%2B2DVAOKCRuNnHnTq3ZDHZxYEOY60BP2MzQzaHArgQz7L8IN3vc%2Fyh0NVd%2BIO6tNITV3EijpTQ0HWW2ATUzWmOV8dSc3NQuy17svkbz&X-Amz-Signature=0d677c9958bd516572f7033b1c39e349b33b25af06d8d3bf7091e5d5ed3a25f7&X-Amz-SignedHeaders=host&x-id=GetObject)


## HTTPS原理教程


HTTPS（HyperText Transfer Protocol Secure）是一种在HTTP基础上增加了加密和认证功能的安全网络传输协议。它通过加密数据传输和验证服务器身份，确保数据在客户端和服务器之间的传输过程中不被窃听和篡改。以下是HTTPS的工作原理及其关键技术的详细解释。


### 1. HTTPS工作流程


HTTPS的工作流程可以分为以下几个步骤：


### 1.1 TCP握手


在HTTPS连接建立之前，首先需要进行TCP握手。TCP握手的过程如下：

- 客户端向服务器发送一个同步（SYN）请求。
- 服务器收到请求后，返回一个同步确认（SYN-ACK）响应。
- 客户端收到响应后，再次发送一个确认（ACK）请求，完成握手。

### 1.2 证书校验


TCP握手完成后，客户端会向服务器发送证书请求，服务器会返回一个数字证书。数字证书包含服务器的公钥和由可信任的证书颁发机构（CA）签名的证书信息。客户端会验证证书的合法性，确保服务器的身份真实可靠。


### 1.3 密钥交换


证书校验通过后，客户端和服务器会进行密钥交换。密钥交换的过程如下：

- 客户端生成一个随机的会话密钥，并使用服务器的公钥对其进行加密。
- 服务器使用自己的私钥解密会话密钥。
- 双方使用这个会话密钥进行后续的数据加密传输。

### 1.4 数据传输


在密钥交换完成后，客户端和服务器使用协商好的会话密钥对数据进行加密传输。加密的数据通过网络传输，确保数据在传输过程中不被窃听和篡改。


### 2. HTTPS的关键技术


HTTPS的安全性依赖于以下几种关键技术：


### 2.1 非对称加密


非对称加密使用一对公钥和私钥进行加密和解密。公钥用于加密数据，私钥用于解密数据。非对称加密确保了只有拥有私钥的服务器才能解密客户端发送的加密数据。


### 2.2 对称加密


对称加密使用相同的密钥进行加密和解密。HTTPS在密钥交换过程中生成的会话密钥就是对称密钥。对称加密速度快，适合大数据量的加密传输。


### 2.3 数字证书


数字证书由可信任的证书颁发机构（CA）签发，包含服务器的公钥和证书信息。客户端通过验证数字证书，确保服务器的身份真实可靠。


### 3. 应用案例


为了更好地理解HTTPS的原理，我们可以举一些实际应用中的例子：


### 3.1 在线购物


在在线购物网站上，用户需要输入信用卡信息进行支付。通过HTTPS协议，用户的信用卡信息在传输过程中被加密，确保信息不被窃听和篡改，保障用户的支付安全。


### 3.2 在线银行


在线银行系统中，用户需要输入账户信息和密码进行登录。通过HTTPS协议，用户的登录信息在传输过程中被加密，确保账户信息的安全，防止黑客攻击。


### 3.3 社交媒体


在社交媒体平台上，用户的个人信息和聊天记录需要保护隐私。通过HTTPS协议，用户的个人信息在传输过程中被加密，确保隐私不被泄露。


### 4. 总结


HTTPS通过TCP握手、证书校验、密钥交换和数据加密传输，确保了数据在客户端和服务器之间的安全传输。其关键技术包括非对称加密、对称加密和数字证书。通过HTTPS协议，用户可以在网络上安全地进行各种敏感操作，如在线购物、在线银行和社交媒体等。

