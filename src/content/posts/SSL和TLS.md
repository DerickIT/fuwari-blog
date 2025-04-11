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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMINMTKH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T213436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDJB01Y1GZncnVhGniqiTwKpAvPOs7WMGABCwY6%2F%2BvMJAiAibYMlxkDerlzHvHmFZkBJJcX09fqJP%2F03lYW75niUqCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2UyWJroH7iifmgvcKtwD2Q6F1JPDY%2Fxj23GKidanlDjeYt%2Fp1MsjFUiHngfvDqqUe69OYz68rGniIh8snr8FLJgpgYjwsOQ83CJnbFpaD7Fz%2Bgg9NioKyNsHydzI9b8ySQ1jbUsdzv0AehlcpqFOxUwEY1kiqMrtLeWjbM%2Fv41szJND9bAbDc32evTlk0YtiM3KOqCnG8udj1driRHwzN4p4H0SeLgITquWQdkyyeuD%2FXRqLwWYaRswKkmX%2Fi0dbfeuA5eBBmC%2Fi71g2yBuqKGMPzQO1bZYo3UMg5cXeI55RAVF3l53RjbLo4Tjdo4%2B1kmvFrynivw%2BxJr12v1vrIzL1erzuqHKIKKtNxaqepFOe5XsT5hFbRCU7HQl0GwBWmLr1cFCKPdJJa07sEqLM3swGwM3JNmN%2BiyHVTCF%2B7cUyEgpW1cHTWLUspolZuWzq8L42HuUOv5Lsw25SmMr5Oswtk%2FVBTLRZXdUjRGKgCfuelG9G%2BL9M%2FRk48AxlGacRkNhWPN7KZ9R2XvCHs50guUDHINa0HdF5gF8qkMUbk7W%2B0WgXEnVfK7nPpfksELqx3x5lKu4wfjSkLixywdGw0SbUlu%2BkytKezM1ZUS25Z7T5Hi7SjLKb2irZVo%2F2GgT3gVpCCUCErpip%2BPcw1O%2FlvwY6pgH0oasjN2I9l9HodpebILp%2FRLnlNAFCx2W5qujYihYAiJ7zsYcjVKTR4jmHdPn5H0dc%2FeUkRSqocAxIKJhn5EGQ5Jn%2BKfH88zS90urM96UBhsTO0nJWuN0p07c0g86UyWyGRb5Oc%2BWvYiXTFeRw6ckNgmXKnK%2F3KjUJF0gOyNQj81wC%2BxQSsOdgBuUCIjVHB86Sx5EMSbHCTNAz7GKhzzJzSnVAipak&X-Amz-Signature=f9c9bf4c2a0775c1db31570538869a100af746d27be6d7ed20846c33fb28de61&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

