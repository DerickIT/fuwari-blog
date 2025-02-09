---
category: QuickTechBites
tags:
  - BackEnd
  - ArchitectureDesign
status: 已发布
catalog: []
slug: ssl-and-tls
title: SSL和TLS
urlname: dcb1e1b3-1e18-4610-a4f4-3f9dfca4de6c
date: '2023-12-30 12:53:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1620.jpg'
published: 2022-12-30T08:00:00.000Z
---

SSL（安全套接字层）和 TLS（传输层安全）是为了在网络上提供安全通信而设计的加密协议。TLS 是 SSL 的后继者，解决了 SSL 中存在的漏洞。


为了理解它们的区别，让我们来看看使用这些协议发送数据的工作流程：


### 𝟭) 初始化通信


SSL 和 TLS：在数据可以发送之前，必须首先建立连接。在这个阶段，两种协议的工作方式非常相似。客户端和服务器建立连接，通常在端口 443 上进行网络流量（HTTPS 的默认端口）。


### 𝟮) ClientHello 和 ServerHello 消息


在建立连接后，客户端和服务器需要就安全设置达成一致。
SSL：客户端发送支持的密码套件列表和其他设置。然后，服务器发送响应，选择 SSL 版本、密码套件和其他设置。
TLS：除了支持的密码套件和其他设置外，客户端还可以发送 Diffie-Hellman（DH）或椭圆曲线 Diffie-Hellman（ECDH）的 "key share"（如果支持）。然后，服务器发送响应，选择 TLS 版本、密码套件和其他设置。


### 𝟯) 服务器证书


SSL 和 TLS：在 "ClientHello" 和 "ServerHello" 消息通信后，服务器将其数字证书发送给客户端。


### 𝟰) 密钥交换


在这个阶段，两种协议有显著的不同。
- SSL：主要使用 RSA 进行密钥交换。
- TLS：使用其他机制，如 DH 和 ECDH。


### 𝟱) 客户端证书（可选）


SSL 和 TLS：在交换密钥后，如果服务器需要验证客户端的身份，可以请求客户端证书。


### 𝟲) 客户端和服务器完成消息


SSL 和 TLS：一旦认证阶段完成，就会发送 "Finished" 消息。这两种协议在这里的唯一区别是，消息背后的加密计算可能会有所不同。


### 𝟳) 加密数据传输


已经建立了连接，达成了设置协议，完成了认证 — 数据传输终于可以开始了。
SSL：使用较旧的加密算法，其中一些是易受攻击的。
TLS：使用更新和更强大的加密算法。


### 𝟴) 终止


SSL 和 TLS：在数据传输完成后，客户端和服务器可以发送警报消息以终止连接。


虽然 SSL 和 TLS 协议有许多相似之处，但 TLS 已经克服了 SSL 带来的漏洞。TLS 中使用的精细数字握手、密钥交换机制和加密方法，使得加密更强大，安全性更高，可扩展性更好。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNVQEJP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6kW0PRMd0bSETmGrjag%2BYdZmcMCsAxwEVB59njM9tuAiEAxrgOgUt%2Fk4uxRozrpARudelOhSnsMtnQglyw%2BJciykkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8iTmcfs6CndXmBySrcA7H5nnDEGlsUlEnumPQ8s%2BeJ3JSobM5h5wTUJmQNyKSO0BwU2MNJ0Z1n1TNWCs6CGjyy4hJIuNnKiMeNb2E1%2F32f5TWnf4QkE%2B1AMSOUAQCpf9Az5qimKbMdzJaqnozwHSz3Eu%2F%2FtAoWs5dQ%2BNOQZmqnIpvh3iiPIfbUxCJX6%2BcmBnh8mddAXiD%2BqR7aaBxbkXiu8yA4h3yXJR%2FOopie04%2Ffxg5wwdb68er2xN7GsujpgBVZSEkczKi50fMLDAUdybicgJAwfjv%2F5VP04Jc2ZQBrMolhyHD1B1J6li3kPl2XKBXavdIRtUbCEUKNeRKYkq3zD%2FC70CeYEhi7CnBd9%2BhexeMkNf8FubpE2IzzeyCPB4OYrNstY6DotZRseCyCMy%2FEMw3oxcnE1lI7n5zKljv1LdktAURGX8S9I4D7VGBN8vwAdviq7LV7LawK11fK5u3Z6acEqp%2B4O7m0678a9ZxlLQnKgASyuSSAVs9ExnkoF6vUpe7XVqHerPQ%2FHxZnOI1DuoltdwvbX%2BE5ZfSTRDZ58I8O%2BybIsUqqwkuvWk2AYCb9C2EYEaoM%2BpWugQE1gkfmLnB9EnqvYKIMX4NMvsIFCKTxvSyYrP80M2uQNIyP%2BXQiYpwzfCchwbqVMIiPpL0GOqUBxul7RkGIQUvgQoec9r6zD4Gw2wTwBMvbpxo8maO%2BL15n5yQ7LXcbM8Bvv1TJv7PjGk2894fccKUnha1ZfuvLp9lF9bOug41xfdhWb08jEne4%2F%2BQAgRdqkj17rJbfKxVD9A9qMWn85AUmdKraHrvtt7BxVWNV96bs5Hz1a7psj1j8qbFG3B%2FjnxxBUP1PPRsnNMuNLxLjjWw5szDQeBwn7AY0F5eT&X-Amz-Signature=b9a2bb3a3a83751f44ce8c980cd383c3da995caf6a7a4f5713da9731a77eac0b&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

