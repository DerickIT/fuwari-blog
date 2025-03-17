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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y3DO7I%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T053845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXOQj0oNlSjFLdSuPL0HyAJKfQPvkHb1gMtcRpQhdGigIgQC4NJYiMAOxAooAUUd7fU0jMZPYGCvymTljOZWHGj0Qq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBiRU5HfPguKWvRLqSrcAzCjQXQj%2BvQnPcdz4N5iKIJskBhldy7R4HbGvWJi5tikwa6oA7vyTUNT6geuI2s3p6RQxJI6%2FhupZr7qGzxC7IRTzN%2FhoyqML1xUQIdd1kxpAO8wObEQ67pjFtpsdLwfzYZnbbo908Do51rs9bEhBRSzp%2FyctY8Zr6bFb9G857zb4KrXhhAjMvhEQsLRlNmlSYTLC%2BzZ%2B%2BncrD%2B5%2BDksFwGC8TTAnBnNL2Y8zpYldU5e%2Bz7qNgl7nDtnvlTv6iqq3JmEO7ZlYJzLVfNcB8V%2BaI9c9Cna8lT%2Fi2mM16X9ALmXRgIs65Ru%2B6OSwmZfK8oGGtbhuDAF3qS4o5axJFjcyFKYW%2FJOJLnmi60sx2bKeU2u5vllwSwXXpK1tg6JmzeQGoMeiDed%2Bcwo12VpkF0QzKiJOCgtC%2BJPaRWoWs1m2UXIrSTB49GzZXC1Tf2UDt7Ew%2FjkVz8o9FTVnoAkbPWJJU0InkxyJTEFQEP1I6aJuq%2Bs6jXC1QAEmsCBrD8YK9OkYQFvKH7bZyYBuXSZhgCpbT%2F92elw1fCTOlTYGl64xKRALnrcFBt12PshUvV9PQ84Zcah%2BwtSN5i6QYLqhReVCWdeFDyUQeJXfLsuLkEDL3edf1gxgvN1IjDuwi4AMN%2FZ3r4GOqUBGSizbXl%2FK3D165LwooVIHNBsU4ux1sj%2FXJdJuzkuD5DoficfcWEbCwZ9dOOkwEGiJPyRhjyvLSTxpZTGpybYgteIwrYiMKKAR5V0hbrHkTOV1JSRma6cKsM4T6EhcjQrql7HN3TkkKVGrFzpQxDzE0yGAABer2lmATrBnmajK5nMtq72z%2FSymo%2BCIb33x1kshTB1btf43ITuAh3r94DZqkMkFr8Z&X-Amz-Signature=85532eb8bfba12ebc8d6b1fecd3b447661ffcaa037fdd32202ba497772fe9950&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

