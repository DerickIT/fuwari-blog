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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBSGSRB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZGFlyBw86puOVqeGUhd9a0Civ2qSaNnVXbB9%2FEskzPAiBPi77oSI9QtcLLsYYDco601vVMdm%2Bj%2F0fhqRKEA69%2FrCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAcHR%2FsXyU5qP7cSKtwDjZTlbp5anAja%2F%2BAVicKixj9tJ4BdgKBXTJSyoAv29%2BAjL4WFhgfbpE8DGeBIZIWkMVVmMm%2BZdAyS0eVuqyKyVGs5Iw2CEyzid2KWuFzDT7cSqOyHFZW843%2FJ%2BSsQNUnYYBSmpKD7PPevzSDC%2B72PfSttvkqHb%2FkLY66g65fkXF1bmUEr2ADGnGnxzSiLqGZyeMW2HpB4hfM9QpZPgyKocv3k6cyTRiQtxQNh2n7vKRWTCPSVIu86cs9lsoGxb0deS2mq1vwFB62KVlTeAlj7cgbqHA2sY8rOjqFw0GfXWuohW%2FJO74D4Dthr1IvSM5fWPiUr7fWhPELXZX5ZhSnh%2FXmr2UJzwwxZZr8t32%2F6%2Bz%2B3I5kD8dNBX5XHrfjMkFtQAZh36dFxWzg7WUGRuKra698g2KbuuwXhCZwqji5%2F%2Br%2FLffFDD8NHT9TlryWbaNJqc3egDsa%2BYK9gPmsMM8wwrPlKQ%2FfbGJXNKlKuY3OupdgjYIsPbLZDjyQj4%2B%2FHD4nOK%2B2PlIOsX9R2m0c5y9bHu1BfVSEjKLHi%2FWGGn8EXNbRGIb36ufABjIPvQDalf%2BnMX6pHnqx%2BB105mtrPq8NHZ2zPeWiP%2B72eJEeiTvf%2B0bOJ2ACFSZo91ZpiDT0wzpCSvgY6pgFnlQGX7zh4C9mO5XycecXf2oDoADimugk%2FbGimDQpav4yyI%2FvJjsfQc9hs89el%2BT7J%2FOR1p2g7Izedg%2B%2Fjne%2FliC409jISPwZugztE3nAFmCBJhutDbmqNMOTQR1vKpUzRpEq6fZGal%2B95uSajhW95meTNLV5v7lnZt6%2Bo4Awb6dNLYFs1U8K7t9rf8noNflb%2BFPsZ9exiVB%2Bw%2Fo6o9G1GPl8dbvfz&X-Amz-Signature=d20d4b4d2d19591c55da0b3ee8b88585c98189e98085ef41a635edb4b595bfb4&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

