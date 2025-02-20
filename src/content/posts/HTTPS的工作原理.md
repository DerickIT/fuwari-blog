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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/2950c759-0255-4c0a-becc-122aae8c82c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVJBAAR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T053656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEENcF896xZ4gvBCplJ%2BI%2FR6GmlBFX3gskkK%2FUK7SkqwIgMpFWUEX1nDASNPn7%2BF5QiNA1QTehUg2SW0Q%2BiWEab8kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQSSpaGTVlk6HVoPircA9mG%2BL0vwRK1kp2w%2BbENOBwnzYyXnMpeSp%2FxLuNyj7R3k%2FZ8ZIOx3QfgCiybd4z3CelukX3CogNDSbV0k51EOG3J0zwa9i9H88xJ19IfvsS9in%2BuMggLpuC0KuT3TtgKTBe9ZVzuBwmldE5QKM8P8mTBAVdiu%2F3neg5k0K2Du4QvK2UpXKjW2nNqMLxim8oWCwWYGpiA5fopIBkbHyYynPywltymzM9EDW6DPVnsacqzyf1uZQlTYEcRuQ4zsoL8f260poOdYmdStEHckXpMz1DY2DU20nEGefcY%2BhtIlQnqnRBbS1ib%2B%2BorK9DJV3srbzGyZPE4bl0b9NZbEU3DzZOWSO4XgH0GigYLfyMT15UfGjDib1rMV%2B0llGvzulxNO8JWNOHKu1aIHtbJFmdZdP2t%2BkP%2BLXALIWyG4Xij75c7NVZJYxe897Di0vA7HqONIZTHdE5%2BHhMnpUFAXF45He%2Fh1YVxr4r86%2B1HT3sIsEU9%2BkKAoDY3bi1JjpzFUw0OCql7LsHyqg8ke%2FHQ85Q5dwHHXBWl5SZ7gEsXTutxUDnEIdn5MZj1E%2BfE0lDS2zOdfDVZfvWN2R4FDz5bUD00UZyoMLACvVLoFkFlRG0eio%2F%2B8CkmDe51%2FH%2F4rNZ%2FMNf82r0GOqUBk%2Btfo%2F2EWr70rN%2FsGZkK%2BOqLNzjv9opWGzBaDNRVveuEy2uuh3VA6dwY7iLpbnxAWavaIY8r4LLMlgktQjaFb8XnpUWQ7FpLgYthQxYj%2B4ZqtNWAu8DfUcqH2HHzlNFWXHoUOrl5dvT1x6kpocha0ZlMT%2BHbrpzlCldB43rXOiPsrw92rc%2BL5NpxCxP%2FDpoNfB8z0IkvSTHjXLV65HnFHuyId8z7&X-Amz-Signature=ca647daee49c8b5cc61f732563913f5825b5724f45e8f4dc5e167bde1a343c64&X-Amz-SignedHeaders=host&x-id=GetObject)


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

