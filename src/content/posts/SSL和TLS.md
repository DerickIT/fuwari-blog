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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLO6K4I%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T213313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeNh0VnlBTeqLXuwjmnka1hJq%2BGYTsYbjh5l%2FcpAKTuAiEAxLp43j84encDF0EcrYgrqYeGkJfHmqn%2BjB%2BJhrEd8L8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ6kyhqiPQVNhLdGCrcAzAnKEuCTC8Ne%2Bpfpas%2FQI2gf6zDsqxjATjF18OuQdYV5krSxvoJRoy%2Fap2Km7OdFErENw9PYyHd%2F%2FLm5KfMz2aN701i%2FqfQIqLybjm49ov8wgayPP64qKBahRazaE%2FhA0nk8ScQ9qI2hKwvLeD%2BKA9S7FgSf1D1H%2BQnKRiTFXFwhdXlDWUpKD5OXlr4yVyUqdfbJmifaX%2B0Pkx%2FfxJ4CpCrEq2ypQa3D7tiYQe30ofErrHt4q0NMdATzayuD9iS47ODQYU90XL212zO4C6R8zDW2zUpSqXryE6HCy6DC65vj2FnHiSca4ci%2B7YMSawLYWqQQS8dIV2aw4sUc53WalG5EMte2L65HrrgsTB61wQdcJIK2G7kJuCYIEUQtNZUvR3q3Mv1yEJXYwGh%2Ff9ND5Ezxf2%2B5oGC6qCGaThdaQwaN%2BX8gTZuroldbuRFbT8j1o2EIqPZOeaeotJW48fk%2BK3yeLmQtyC%2FZkroVQi11k%2FzH%2FbYlhRn9oi2x21e7pglLU49JIIIPETbDblb37z%2F0rm4afO6MuiHEo%2F5Nd2WeEpnI64jcGQP64dTgI3LJfqqDPM12xQm4ybZN%2FSjbYBNUWg0KVbAp9EAcAv1nJEkapZkPXlHsOHoehs268bkMMfIrr0GOqUBkQ9J3SPrXs%2FzQMI09pQq3KfUnlg94foGcemhKlKcMbpaBI8Md2q70Pt8TTiOOq6p3Uj6jXfAkioZoWdFd8%2FaWekdRW%2BUxf8fc79LkpdBQjY%2Fe%2F6Za3%2B4VG0hHmk1eU01HGvS7%2FOsy%2FbqyXDWZD6MZqkW6FHaRWLkMcxvKcxrQ7TxDfPJghYL2bGePYqSgJrsOhGrFkkEUR7BQ5bU3U7%2BX8%2BoHJ7z&X-Amz-Signature=74e86e1fa9afa94331a5ecaec574e1fa29b97068319da336809fe9863109ddcf&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

