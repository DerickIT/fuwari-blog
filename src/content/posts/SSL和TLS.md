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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSG56QQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAVKM5KqX%2F2XQiOWg4kM9K%2BZQaKvTp4Jdy1i0XUIv4LYAiEAt4JFerkrvAa4dFRdhGD%2Bzt8T0nDAHguxcU9JKUrsLIcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAm1b9piX2SJ55pGjSrcA4P9oOJMOeEfKHW28Mn66s8pq0aFBPQObxJ8AqWQuy6r3BMMl5vzUve3G9BTzWn0m5gPSPYyA7SGCIJ30umISqmWzcLfCsgPwP5rac3xfrT4EAbKYj9AmbAhDTvL%2FYCvOX22v0Q%2BIddxRNjNc%2FGGuRFlo9WcbD28H0uxR7qmYcjawRJ0%2FL6dN5nqglFg3OnvU6jigGEQbLa4a4ozKpkRpzbA3o8Bcibci6fwkyRtI664H3%2FFzejQrswOxxiqzZax6lH2OCZ9mkwT9Jj68FpN%2B912VsCzJfyyzvuHmUmj3iZc9rmK1IrPg%2FhJy6p8zNxGlcY%2FWrTJ2TB1%2BBwqdc2btlj8QqW2AyKmUVMzjaSIIJpAu7B34YS2Hg5ruje3jD0zha9VQ03WRVYHvCDquMpQ%2B088pF%2FEYpf8FtZ8RRRGWXExwuKVNHcuRYaTGHpK7AU31aMw%2Fj%2BztqmbhGeECXviMHz%2FGgqWBVHBgCSwXDJOpdjdDZ0ghYmQV7bgijdFAGWpY4MP80qyYvkc0pOKzF26TiKgmesVSz1OrXt1ZAmXw3tk3TQymucv4fQvlie3hT4J23%2BHCxeXYdXUG3J7oXLRyeybkx4Jr0blz4BXxZKYr1Pg0gSuOgBv2xP6dkPKMNaqvb4GOqUBeNHe7iui5aL8x3JrZTSE0nRIa07H8eN96%2FjCQxAzSDqpm7G4%2FIs2jam6LlqmKHy4827AX4CK0GuTDRwRmjzUFy1Od%2BpiobqiJrsXT%2Fsc736ycbnuf%2BSZbDT54NfjThy51nK3TPbaeEmNkjFGLXGsY8wfNqGqyMrPHpgEwevuH%2F7tarYTOKKjlXLUUUjk1%2BDYyAHJK98Xzd3Zk83bGHLM9SHG328%2F&X-Amz-Signature=62f89f42b28bd7b1ae52c54a85e075da2f13c6c8401db9ef13efcdb131e0c458&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

