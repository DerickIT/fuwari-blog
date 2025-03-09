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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLRJKIL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T053304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCrdKiNKOu3Xed8rAmZF8W%2BI0cWSHo5UhEJPwdg2ZVy5QIhAKgY34fatnK%2B8sR3YBAE38WqPOXbopm4dobZNfIOA7PGKv8DCG4QABoMNjM3NDIzMTgzODA1IgxD%2BfhIVaRJ%2FOGgWSwq3ANL1s1CiggrbQIFLU3Uj6bhV8I1BUHTxhaqoI5bAckwjtx16DkYB6iKXTlPHItdT6EM67%2FB1gUWOFug2l4x3xc%2B1ijEppMhZYvh8a6crt8h4Vptp5CUMdLWKfs7OomMUWUkZDS3RzpgSvCSZu9SLBvxqmofCpoqL9Y4l3ZiJGxvRCdb6mpcjUv0sSSNAp2DJxonEViu0STVgn5RvT0J8GmASooMAZ%2FpUOmVeV6NaGr0VOD4zN6PaiBsAmH4A4vCbPc1fb3qZJHq4%2BFPPhW2qKC%2F9UbwPoCGV1%2F9hl45ggBKvUzrIyiBkjm0UlpxrcWLWvwcLMLNxsMgqzi8MtJ70AUVO2kdmEA%2FZEBqiaeUWKIjyKt8N2fOpkI%2FGxOiBtfnfb%2BLh4de844cNxKSkZAjwtmP6Xia5F2%2Bkqm77i%2B%2FMLgyWL9AAdYxFfRhgbi1HdGu%2B3Moe%2B%2BsOGlxUiszXF2hICI8eWBwtkC74gw4xlZ2WU%2Bhoj6Va%2B2ufh3x259ePmPIkLEjUTRTf4cCGDnyPt71iBfy0nbj5TxfKoj044ha0FCdAI3d09P4eRpkIR9Eu9tI3I6rCMi4oHOE2imIl5R0lwFkQDRL0qa%2FDEXFfil9WZbtMV7o2bGf70Y%2B3niMHzCzxrS%2BBjqkAVAfTmuvdKIRAntxwLRUrdnmwo8sA%2BOUum70%2BO733bIuYsLi1Ox94yzGrAH9z6esS%2B7gAAeT8WOsI9sLoyq%2Ba%2FGTbTdxQgr5mW8mENKH7XYMvL9eLQA5epcot5y0eZ1uFCi5ke3%2BitgXRWNOeXREEFeXbwZKO85wyKEbmVDtJYLwM5sKiWOXaJlgV0AqIS0RpPeR2%2FwWiUHos5Ks03iw%2FfQmxu6u&X-Amz-Signature=54fdb914a291f119b4987212fe7cc1d7c368921e977de0dcd94057c1c35de7b9&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

