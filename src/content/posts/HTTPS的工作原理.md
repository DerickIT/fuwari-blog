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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/2950c759-0255-4c0a-becc-122aae8c82c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZP4OJLR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T053812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtVSQ3Ee%2B%2B4NFwAFVTyGwqD9f2Xja5iK01D3miqReTTAiEAv7Vlb46HXn%2FaHuA9twwqHNbrBaCRYoJA5ypydY%2FpktQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHpQN1U0dNKGRevblyrcA7Py%2BecOFoLzABC%2FkZSlgTbIxsClwOxDZGRgFwb7PVuUUCwnj84vwqLd22wGQxOctXhPuM9I8AwCp%2FF6mqrIwVoqDszv9qyJgH7RvqPtqkobLORZ4gzcolY2lk0RH%2Bw9DQO1aP78HLbLcW%2FKw53gyu9WtajVJFNPOY9yVzKRtJ%2BCvjP3%2B5xIQV1BagNxU2kyu1LJAPDZtlZlcU0%2Fwv5EyWEiSkp0xJLVB9EzCx0jqlmyNIb0lL60skpA9uOdSP%2F9xxxvUKUawdmKT01ORmF%2BKX2l5SEaB47GuoU5IziAXuT25tiLxZThZH48ewUnCXrAVgexGm1JLNjd%2B%2FXfKnXYglgV7qxkI96SMLQhv35l%2FP23TTTzuLlYXgG%2BuPCmJGqved2l1k8150CZEBFXFGPjRcoQz1unYumx3tRrE9R4RxrPXzYZwXXhkcgoYUnXOX%2BQVJHRd9BXnsqk%2BDhR7N0Vu9wQw8LLhc1%2Fh8FVjMAA2g8DMdgXZ1W5hMLfQBG7K8LzVbQsFtsDlKDMaZyb4AVUAAI7Z6yeUsJQIfiuhe36Od6fasm0%2Bki48Q6rk%2FD8wrh2mu2Wg%2F6lbFlmUJgfcqNIkXzVXxCs91G%2Fc7EAjSFrB69JVRoK%2FuM8406cbulwMNXZ3r4GOqUBJY3HCTVZxUXVxf44%2BxL6zF1Ga0KF5%2BBG3lCM5fGxEg1FyMGkY6nbFkENSLeFlPbxWQPXD4LpdVpGHYN%2FpF2ataB%2BAAOWyfwFepSjj%2FmQQSwaMncTg90nft6487Yr7%2F8PwT9NffzCv1D%2FDjaht8xfXHmO7RxTMsh9kf5ZQmHt55STQk0Kh4jhnJRPQNdJI4P9S8UlVArtmU7G6MYmso8psXxAiK04&X-Amz-Signature=308504da312c988a790715db15b41e19c08d6c879eee473c4f5af6369d7307d1&X-Amz-SignedHeaders=host&x-id=GetObject)


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

