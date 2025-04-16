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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/2950c759-0255-4c0a-becc-122aae8c82c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPACFEV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmecNOt6ngnYsDNMcrcb5QlpxnZE024Lxo1cn%2B8ISGJAIgC1tJj0uMhU8iyGTMAs9hYZc7N2vBfTHXOgc6%2BFnXIZAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKK%2FUOt4rvBTgbPQ8ircA6E86XoO8C%2Bej0wXiVsH6XOqPgpHM2RDHBWRGI8UCkAwsrRlaLeEmljMZzrCgNp1jTTrgKS7GMso1%2F4LQuqb2S7Sx5x%2Boi6tt%2BMaOZNQBD3yFiuZNPihXW196kxyH6PAZ%2BfIvN33QyJosPOCE8%2Fzt%2BVHLxfRjLWTtMbzTQAnvpAWuTDhHZjYJ7gnXEeGmT2MFoWlYkO%2BCkVVGgTbI3rb6qmL90AZOyz8G3hdvqcgHagmvkCylFV1NJo%2BfgZ2RZySpBvil%2FfPm1NYnRwkUMhhog3d67O9r7dymK0wnZRyiavRpuBhPq4VfLMjDmWKFBejVRmG5ofi1oCyU0y4p3aMMlE1c4GdLj%2BjWUX2FvE45tihtiiHsGei0cWoQO9Dh%2B5u7VrmA091QY0hjuJTD7wKDRrbCS%2BVpF2z3hg0DklOxggdoBO%2BW%2FFVNhQ4nTsTqxM3XFpFvTIw7RNpzmRjT0vMh9D%2FxAIRDozQRuolJGYD6AcFrhv4w64IgvpA99%2BN8662wsXzBMqOmJGqkF4S6vFK9eiJjRDkkJRQwQwvu7fAFOZ5osWQN4OYUBEQRqAljqcknP1tR5HUj1WQXjjLaG6xvY8Pei4jDour5eu5aNl5BPdgDHQua2mxu1wQLGc1ML3v%2FL8GOqUBl9NTRqTLPlCl%2FwAg8YXLUDT9%2BOGf9VPFp0fNbn8l1GVRv1N73c1VaajwOuLI%2F354ckfV8H%2BoEpNfH6Xl%2BlsbCpgTrj%2F9OczfE%2FQIE1EsR%2F%2BRqHw1HaaTy2TaUz8o9QcaXGvaJrQDJ8Yklb0F3oTjSaaLW6QtIP8EcvImw5WVPlFVHEFTJ3PlBrD04e3zRK0BuSMLAu9o6Y8vADUGzO949aq%2FMYLy&X-Amz-Signature=aa27b95a4aa9190b84576e6310aabd4c1498f62173d663915656162e0625ce0f&X-Amz-SignedHeaders=host&x-id=GetObject)


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

