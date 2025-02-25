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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635F35RVD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T213340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAkMxRkCa0WKEo91iBleZ%2FJvzxqs%2BW3MHMWwzxZ9N3fTAiEAv4yDGTLjGFyOqlBkRcTztmpU4YSb7QQUJIbuYu3aG1Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCRvP5EJGVL9fL0C6SrcAwwHSvnIcdDfFS4XmRuZNMuLUXQS%2BWzb11xe1M%2FpdQWVytTiEUCprQcfx4NeazNwDlvo%2B62Snp2kZW5emcyG9VszZNhaxiaLFTQyqIbT4xhMS%2BYNiebJ3KlTk7tRnpRzqn%2FR1riPCNeVCLRN%2BZIvIcgUl35%2Bk0HAQuw25F8Rpx5%2BjCwYt7wdgTdzEgKy7Tikcww0xtwQIc0ccMxU2z%2BBwa1f2asHMb35GpxRF2L9LMb3DPVyYyPBt9%2B967GKdEIztnrwS0yySfcwkgAjdNIPGJVQXOGUApayp24XXNLssyXajDh0K8JBRRBykMN0j8wz%2BBz6g541Jgcv6nWrH0n3Hct%2Bc8S8KQRVFU%2FqohUV7ucSinH4NCzbnrTChpC5cbAf7E3cukTnGacS64MVSCwXOBd5qizoFp5fSm9UywkK11HscBB6WHNNwkk%2B3d6b989liMZdSOR7amPd0lVy4Mn%2BUJ9x4IdyXj3hdhbjhk19EaeuglO9cjdd2oI%2BTPw7NwyvDv136BFMCoKAMouVBMYhFyFZoVWW2Uv%2BD3Cxl980W9nQR7Ey9JUqDWpWHToR0nJIN6SIsQod22iPdHBuQ5J7cUdVgr%2FPsDK%2FahhYqm35o7wFG3q9MPeA2Zu0CB0fMOPi%2BL0GOqUBPV17y18D03acV8cXR%2FnlrOVwDHyn7Oe%2B68aS2lhDIb1BIItdjOQQpKt5fAsxoSksg9B9gNe4vE54e9AVGOb%2FSvyYJG3ezkzXtj0ot5gVRhaB3TRer7nDR93UoDCdJvwyOiFsYFRXQrRX2uFckQOwBLWXURYfb%2B%2BapRlNLOuJxBIGOwigWiWPKw4Cdz8Bl3jyYKkyTpa9%2F4EyPXjqOWfmMbvTbTjb&X-Amz-Signature=4bcfa7c4568ab082414ac765c2d19f6645254acc4442a0c4ae6ecf013548b777&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

