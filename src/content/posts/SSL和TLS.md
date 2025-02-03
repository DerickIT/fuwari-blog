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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFOEZ7P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T213259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICXmgshMnDvqwa0gL3yio4N1BXyz7a3oMiYqGzfa4Fs9AiBUV6%2BBNjz9wnIuzkkZG394ZJ6x603Kt%2Bqx6ZxAOQUIkyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMSw0tXwVnkucxn15OKtwD33Cz5KEKwM1gQ%2F41cYGfswjKevM4eBflciCOaVyaTR5g%2F%2B0kU985mP8MK8ZNO%2FPhNE6M7oCeqzH%2FkJoMwIHQbO1rYL0q9OgOvvlUufLwlGdAXSJbPtfWmlw38w%2FtG9VfmKX3uKI1mGfzMP6Lxtcf0PBYCXOHX%2Fo%2FStDm3uJsH1LEk0dR5IgVq7%2Bc%2BRasQcIVMGbqzy4LPp8JkWkWmxtV24Bu0SLJd09oDo5J4SXmueJG7LV1vTR68MjbEe3BYu18fB%2BRXHh6XJOtUZfHLVBrOtzbFoP%2FyWr7Yeyx09topLWDVd%2FGRKVeIhR9EbAfpx8ekkvbtci4arEgdfadd8Fg8UgXwd0QXoF6NDraURqCR702c9H9mXaaX8mwuR6ejiOr%2FunrILwnr2QdW12ahT%2F1PKEmUjyqizJV%2FB%2FRMq9x%2Bw74DZG%2FZT6FpwfViP8cowNneS2q%2BnjKf3Sw0TP9XBQpo9N73QIk7q%2FSF3aFpb57HimiDCE1AqWYOR2tzab0dfH4qZN4DN6%2B7VrDj7t1JSjJIyWbr%2FAM3zLUYtZdMCWXu39Y6x8CtulqYAVDCKbChz1V95%2Fl52IQ7GQnpXFiRGXJjXPnre6%2BWdWrhg2MtM4fSKfpVr0X54J0cuHUNUswuNmEvQY6pgExCK4VEvDHRiUBGXQMwARL%2FqAjrjsEXR8YkQeftoyGa9eKOktx5ujbVeX8gIYU1gpzYVpR4jRQThFeYaHcIOIZgT7w%2BkBJb15ZSGrjIuJrGXLXnuHNYgODk2HOatZBrv6PvgilcA69qh2OJm6Ylkw21XPFQ%2Fify5oEZ9tNHQNfaKfzb3XWYXH1GenRvsQOYjl8aGo5JMw3tvDd6za06bfsEyxNMCfV&X-Amz-Signature=4a2de2057f14786c99113a320a06af835c5120ef1445b41eb7f6773d83815c09&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

