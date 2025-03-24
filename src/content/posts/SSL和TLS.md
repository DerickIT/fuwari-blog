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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/8ff987c5-7f31-4b50-83f5-c69ee7578c4a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SELYY2%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYaYs9zBXSEEGrPlrS8PxMFlOvYY14ncLqxqP7dpqo%2FQIgHyDa3JsNpa2i%2BiO%2FYd3P4MnbY2v1sEW70uu9ge4Wt4gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9FLRcYREydYb6S4yrcAxRyWD3egFSUTkX9tT%2Fp1fZYPg%2FLMJR067iyrTDkdxYNbNEuNNSSicr%2Bz7HC20HK1leBDQ3rPWp07JWN98pAHzBVowIL%2FDjXfyWlXpvg7Y306vhfYRPrnH%2Fu%2By2A71etFXkPiq4otQ9qv5Nz%2B3hkZpwihaALc2SiDJB7RB4iwAd9kz2I8zF8vf0KWghT7B9knl9EnCK9Vtfl%2FVjO%2Flta4%2F60pl5gs%2FdYgIuEhszke0EidX3GO6Yu7SMKbEVd2xKuShUXrOFUniwmhfyg2bN7cx%2BpIyNqpUBgYuwrdI5Jz0Dl3UkDLL6%2FYc2mZPg0D4tcfO5yFAgVFXPs6vKk0f3YxqftQJ41EG%2BsrSt59mqNkwt2zf1oDoP2X8fG6k0XJAW4pEorOhFAMBSe0Vo1W6grBMfh7MnVKxMJm4pxCdupgs0%2B4nYlFtDk1J6swX91AE0cvCcIYSFrb9mqcNDGYoO1yJAFvj3A3Iagn4u1eJVsHS9DGmYNMHxj2yS%2BfHJB6oC4o3qVcQo47rW5tPRqLNNXBgmw0ZdCLDhxhAfjg5VJRG6XNbnaTmuvnHdVtjof%2F2RNVbZoSVuGJMXh5kAbb1wvIkc6vRANsKCCk%2FfzX9%2BCYf3a%2FiH91WtiSnfZis2yMOfXg78GOqUBZfEshpQL4Zfl3xWpolHq6np0AZsVVKfw9goF84sRvuxwk5vwfCL6S8N9B83Y8LzmGLMyW2re%2FI6oZHRKlGZlrsftFsCJVQ3wkB293sS3edMgUPQUVwbEnJyJA0YKUZ5NGXL0ZzqJn4LTcuQ64DCTC24kxJfwfs5qqd8r49ktTwqRhGvdfOSiDqVZ1N3VPuAud0VHQtjQI0w5KKikaDfFiY7pf96g&X-Amz-Signature=53b1fc5fd110a25ab5be7e07a3131fc76e9d8bc41a6f742f5a74e888b1065709&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/](https://www.keyfactor.com/blog/ssl-vs-tls-what-are-the-differences/)
[2] [https://www.ssl2buy.com/wiki/ssl-vs-tls](https://www.ssl2buy.com/wiki/ssl-vs-tls)
[3] [https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/](https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/)
[4] [https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https](https://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https)
[5] [https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024](https://www.reddit.com/r/cryptography/comments/alas4q/tls_vs_ssl_difference/?rdt=58024)

