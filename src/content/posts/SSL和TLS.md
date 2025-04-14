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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZYSXDI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T054044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbVYqe5alumuZ3bH%2FmZh5LbkJHBYOWUj1iTIEPv%2FjrLQIhANxVJ%2Bw%2Bd8s430q9S3MslYq7zmzzAPZXC18GAKd82lCgKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9m1AuRF1dJsAP47cq3AMRAwqyCm%2FD%2FjiIvU48tbsiCPc%2FTpR6xa4rPqFxRz43XY2TAIUnGlB%2FIPLFVFCfSqwoKa479jix1kguzXS%2BA7Kwcz%2BRyNyzXv16KcyAPLivBK0RmWunMHkbav6XaFZg%2BrojNhZQXXV1%2BV%2BD0vYeeXHXMWCcaP2Vbqu3iI018etcxrEJ6xLE%2Bf74xiNt88wKdi%2F4C7I9Lkjl3RBNBOvckNBXJrkaZtAhCHjG24YdRIrNgA2YMm61nrHJ7IGZZhzNkL7uZsCbvi2prggS36t6HMA4p7SB3PsNG8DcaGQDbjIRJkSzQCugv9QeHZATbIkLV%2B7weprUVzQ6j93gDzjwTEBPAF2FKur6ANR5%2Fndyi1JuR0M%2FtU7R3cmcLilytxeYyp3vUpIsdxqIXNim87%2B65rck8GwF9RNJRIVWEzg1kFT4JBOFZXd8qyeoHp1Xp7Heul6D4anJ1%2Fl1qrPQ9wvHjQbWtk3R6v58zuiOa3q6K44Sc0OqGi1EtO4kL%2BfHlhZqaxjb0d8yhslG9QnVjHFnsrb7%2F434Ec6wCbQ4PetIJHiV1SSc2mMLa0L1h0M2S8EixHmpuZetj5I0rpVTAl5lyrfly6k%2BNNBgkXu1ouSYRAFn13dup%2B0AQ8QRRWx%2FmjDqrPK%2FBjqkAd4QMSjxnduuu4%2FQpsrHDYO0%2FgoVwGnPmyIjs7GVsQoLUxzO%2FPYgSvO6uAO2ne11374LhySyCVPj%2Fm3OJzIalcDU%2B77TSCbOcIu0mB5jk%2BIcHwaB1QhNIUs15q9eIp9cgRBEuA9n123zQGDLGaJWRwAyLmDiShyBGEf21TS3R6Ei5t0S7hHIU0d3X59UBHzSPI8CC3Ucc8FRhHyjp5NxBVOX6ur%2B&X-Amz-Signature=2056dcd8610d4550866428e4f4af594128da613797908fa82dfab14b394c964f&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

