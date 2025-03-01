---
category: QuickTechBites
tags:
  - FrontEnd
  - Blog
  - JavaScript
status: 已发布
catalog: []
slug: how-does-cors-work
title: CORS是如何工作的？
urlname: ccc749ea-0258-4485-b5e8-390113ee81f2
date: '2023-12-29 23:35:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/nasa_carina_nebula.jpg'
published: 2022-12-25T08:00:00.000Z
---

网络浏览器使用跨源资源共享（CORS）来管理对于提供网页的域名不同的其他域名的请求。这是一种浏览器安全机制，用于减轻跨站请求伪造和其他跨站攻击的风险。


为了清晰地理解其工作原理，让我们分解一下 CORS 的工作流程：


#### 1）网页发起请求
过程从一个网页（源 A）试图访问不同源（源 B）的资源开始。


#### 2）“简单”或“非简单”请求检查
在发起实际请求之前，浏览器会检查请求是"简单"还是"非简单"。"简单"请求通常包括像 GET、POST 或 HEAD 这样的方法和一组有限的头部。如果请求是"非简单"的，浏览器会发起一个预检请求。


#### 3）预检请求（针对非简单请求）
在浏览器完成了“非简单”请求检查之后，如果请求是“非简单”的，它将向目标源（源 B）发送一个 OPTIONS 请求。包含的头部将提供它想要进行的实际请求的详细信息。这些头部包括：


🔸 Origin：调用脚本的源。
🔸 Access-Control-Request-Method：实际请求的 HTTP 方法。
🔸 Access-Control-Request-Headers：实际请求将发送的任何自定义头部。


#### 4）服务器对预检请求的响应
一旦服务器（源 B）收到预检请求，它将发送一个响应。如果服务器决定源可以访问资源，它将用以下头部进行响应：


🔹 Access-Control-Allow-Origin：指定哪些源被允许。这可以是一个特定的源，也可以是一个通配符 *。
🔹 Access-Control-Allow-Methods：指定哪些 HTTP 方法被允许。
🔹 Access-Control-Allow-Headers：指定可以使用哪些 HTTP 头部。


如果服务器没有提供正确的头部，或者这些头部与请求本身的详细信息不匹配，浏览器将拒绝实际请求。


#### 5）发送实际请求
现在预检请求已经处理完毕（成功或不需要），浏览器可以向源 B 发送实际请求。请求将包括任何必要的头部、凭证或数据。


6#### ）服务器对实际请求的响应
一旦服务器（源 B）收到请求，它会处理并发送响应。与响应一起，服务器仍然会发送适当的 CORS 相关头部。


#### 7）浏览器执行
最后但同样重要的是，浏览器会最后一次检查响应中的 CORS 头部。如果一切检查都通过，那么浏览器会将响应提供给网页的 JavaScript。如果没有，那么浏览器将阻止对响应的访问，并在控制台中记录一个 CORS 错误。


CORS 确保服务器可以控制谁可以访问他们的资源。浏览器执行这些规则以保护用户免受潜在的安全威胁。虽然 CORS 引入了一个额外的复杂性层，但它提供了一个有效的安全措施，以确保安全的跨源数据共享。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b3deb140-f22b-4520-bcee-759301567801/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUQIWPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T213306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCGbfFRSE3o9iUj8PXgHuv%2FRW1TcXjSywEGYN%2FThfPjsAIhAJjuLo0T8roBjMVyceysd8wULGIeJlle2Kz9Sgth3yVGKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziCdlnOOY6PhWf5u4q3AN4zF2kIIVzSryjQinRoqsx3nw3V2VLvFhbzi9GJ18eVKknpxg8erEF3hs4cLx17CSvNde1OzKr%2Fku1LWxj%2FrFkUZ%2BSPMuXsvf1lxhv8D2cmCPv6a8Cq1ImR3eVpsGzNtn4n6Y486nU1j3OCi1EG5kR0Is5bJkeSdJ5SFkoyXpWswjZiHywbmyt%2B37EIe3W8DxCwwEEibMcvVk3c1i47y2oRne8%2FKuYzlOxBeaV5jbbVVgGnj7MHSJSq8A%2Fk4Mh%2BM%2BB3qpR%2Fn1%2BxRBmwVcwkeKyURgCbT8ezAzgxfun6AyOo1Wz8UgUVESKluCO97YUu0fq%2BUgaZzUjBmX6nZwVBxyfLfc81G2cdSjbi%2Bt71Yxw9q%2FaXT4nZUNnAup1%2F5yFKcXqLDLRddXvVXEFRkk%2B0EPrrMxenxTc%2B03IQWyNWE9hDgNH7KDchSGvwXEZyvaTA4Oa60FgeJC3F6SRI31ee60qU5Uzd%2Fw8pXy0iDvlAlUZXOiXV0hkEIfTZSuRaCpDX%2FbQQ94d3xGqUeGuIyLXDTL4Y7DGmtxbm66QFH%2FcEwUsAslnLGGZExnSDC3mWaSey%2BaeD884kKfXPA%2BUDEeHf6RUd2%2BT2h%2FDgG6ZT7yLaBluHShak3V7xgeHZwU8HzCVxY2%2BBjqkAXMHz0doCFzne5oWtgIgd2EoXL96qcvY1%2B2HN%2FoFmVKqQZKOlam%2FJoE1Tmr%2BasSi5lSpSkf%2FnY%2BORDbrDBqSycv2Th0wbzVUFa2J1aHgndYrmKbDdceuO%2Fxwbfhw7v52uiRxMOnJQjxT%2Bdb6sGWij0%2FTOLoOcANx%2FOxy8Do4SFicLgtoPH2xwo7so1k5dXgiFCJMlNSOaazaXUJzFj%2F4SBGaOvO4&X-Amz-Signature=c12918f14d238cfb5298217d302c47f6eda5bd650026a4a03ed4fd2d4e810014&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://zh.wikipedia.org/zh-cn/跨來源資源共享](https://zh.wikipedia.org/zh-cn/%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E4%BA%AB)
[2] [https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
[3] [https://aws.amazon.com/what-is/cross-origin-resource-sharing/](https://aws.amazon.com/what-is/cross-origin-resource-sharing/)
[4] [https://en.wikipedia.org/wiki/Cross-origin_resource_sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
[5] [https://portswigger.net/web-security/cors](https://portswigger.net/web-security/cors)

