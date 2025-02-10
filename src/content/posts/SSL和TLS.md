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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCMDYEO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Bb0Bnyi6TZ5X7HkRMsG45faU2fBnHb4mWfhKHp8VKKAiEA%2FzgutBheHOeT%2FqvttlXWStXvw0n%2B1Z4JKiSGD%2Bad%2FNkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHFDxumylR0pYtIMyrcA8QE3%2BlBBg%2Bn1%2BNsPvYP5vZGX4f66EkeDAkrt2MvPVwsYkXy1yem8L%2B%2FWubfE5IdjrWzq9wI5I2BA1l7CJAQS1Q1PEAzbhQsuJ7iw%2BiXRrp5LLmj1%2Bgaw1ubUcK8rzVCn6Qvf%2FtrGK3P8P5cmkPPURYqZgnLevIVhhucXph10VxBrIcg2OG79Fih5EbctMQQx4xHxpIRdAh7mas7cAHUwVIaJxEvLc4p6WbqVH570GtGPzWAWeij2heb6Nct0wO5B8F31fKfEN6Nwifj6rnydsdLYjVeUhVfA2ehv904Hm4p2Np5BEFnY%2FHEUUGBL1nBnB8JP6OQE8pvbv1J0xk%2Fn3d2e4g7Dtd7omslFg5B%2Fag5bs4Wo7XlqXMT89TOJ%2BWjp9zEihkp6O0R3XAH0oIAH2psoabVB0aoLMLt1l2AbBVshdliJ4sxen0xUCM1lDmRkfW6GuHWDmh1RNZeT88hdHVP47HRGTqpXWwPg8r4vIc1ghKtIncxc7XJfx%2Fhp%2BtYyS6OlR3VrMYAGjMlB4bFILtccBRmFvNRyIxBEfugUJYmMzzE2YcZTYY0rG6bf2iuPJOEP1TLjXPNbAl1X8gBCj6RhXKe96ItOobvriBp1Pi%2B0WKvigtpzMK3JoeHMLH5pb0GOqUBpylJdR%2BqIX2xmrnQfC%2BZ3hGQdKgfouhrZEUbGHP%2BqKlKdRsLK1iN032%2FveVB67Hj%2FepFqfBQjrcQQY62oI3wFaXI6%2B6N%2B1JhXvQJM74eIUAuIhCyAUWYMWGka0J84GhvIE5UBi%2BY9IWzO0CbBS3%2FG9jEXqW4zj1GK8N5Kxc1sGWjNqsZBQY2p0YkqoxlFNSTGiXKzW6bzv1DCtNe5Pb3BnOjhbp%2F&X-Amz-Signature=9711b346e5b3aa494ac9468ea11f0db631393f2f656ce58c5ed90568abab0173&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

