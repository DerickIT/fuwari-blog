---
category: QuickTechBites
tags:
  - Linux
status: 已发布
catalog: []
slug: how-does-linux-permissions-work
title: Linux权限是如何工作的？
urlname: a6be9dc6-fec0-430d-9281-3f26d520b332
date: '2023-12-13 23:16:00'
updated: '2024-05-08 23:04:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_1.jpg'
published: 2022-12-13T08:00:00.000Z
---

Linux是一个多用户操作系统，内置了强大的用户和组权限。这些权限提供了限制谁可以访问文件或目录以及他们可以执行的操作（读取，写入或执行）的能力。


每个文件和目录都有三种权限类型：


🔸 读取（r）：允许读取文件或列出目录的内容。
🔸 写入（w）：允许你修改文件的内容或在目录中创建或删除文件。
🔸 执行（x）：允许文件作为程序运行，或者进入目录。


权限被分配给三种类型的用户：


🔸 用户（u）：文件或目录的所有者。
🔸 组（g）：是文件组成员的其他用户。
🔸 其他（o）：不是所有者或组成员的所有其他用户。


要查看权限，你可以使用 `ls -l` 命令，它会显示一个由10个字符组成的字符串。第一个字符表示文件类型；d 表示目录，- 表示常规文件。然后是三组 r，w，x，或者如果该权限未被授予，则为 -。每组分别代表用户，组和其他（按顺序）。


变更文件或目录的权限可以使用 `chmod` 命令（更改模式）进行更改。可以使用符号模式（u/g/o/a +/- r/w/x）或数字模式（八进制表示：读取=4，写入=2，执行=1）来更改权限。


示例：`chmod u+w file` 为用户添加写入权限，`chmod 744 file` 为用户设置读取，写入和执行权限，为组和其他设置读取权限。


文件和目录的所有权也可以使用 `chown` 和 `chgrp` 命令进行更改。


理解 Linux 权限在软件开发的多个方面都是关键，从管理系统安全性到部署和操作。在处理权限时要牢记的一个关键原则是，通常最好从更严格的权限开始，然后根据需要逐渐添加更多权限。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWSDAG2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T213454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID18HPEm688UcOyUSFr4lX%2B6UTXV%2FR8cYIXuAPvnA5kkAiBnOGE8ytVPrOLCmlc9TbgsnYilN3Mq6up9096HBc59Ryr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM%2FIRAQ%2BezIb0q7oerKtwDKEeBb5hIG87NNPknNQC9t5SBksnauQVW8RcSL0JlRG5GfDc3n%2F6DP0AlkExn46hNWsyxNwnhr%2FZSKum0ivSaEniFukTQexZoB54Aq81QkWWa8jiSpzpQJcrOryeiZ30KMoTgrHIkRvLKS6%2BE9P4nOLdCZMnhQ40e8Cqrn7LigYK4W8QiLNPjEaxhZwp5VG%2B%2Fl%2F8mMdCvrqm6x5EewRmck0BPLwlanh5Q4VpVIj1JEHdjavSWT%2Fd1hIX2KM1kfqV43EAHQaWZbBKdRVhBi31huBhQAGlUZMzXwCPGbbGDNjbNR9kErulmqgwaN34Qh84Vqzcj5bY%2BnQq8RYm4q1mbR1WzDEK1XKLJ2Zrdlf7WxAsArCRBlMduoLKSoj2U%2FimzVdPX%2FqwUOcC%2Bwr46CEPnkhgngiC2j76OKmz8CvvpEElnaVBCvwZiQ0CIpZEiSIZ3Z1%2FmwLhRViPLsrIvpJ12LPbS0ooi2KJd6h5aEzIAMLWVwXcLAkK4KvgAVPT28JJ7WjfVfLJn1zwZZfph70bjAVOx1Hfn6LEGHrQit%2FuhiSUG0KzmHkRyesuf7JQqYOiCG%2BTsXSGtUN5rgTD58xBbzPeyiMwdZnOLKqlq597X0l%2B0Ek%2B1UgpphFzLua8wvPyKwAY6pgGgVbFELZcKrY1LzJeQpoP4mbPO9ESVZd0mnpVu71xoJAJPytrAEdd%2FCDk1n6WF%2Bcc2jlAPgqlKLT1uXA5ZT9MXyo9vRZzXow2BZBf7ZgP3kOj0jk0Wjcca4Mac%2BpojjDRjfJmnMwdD81XbRjwhA2w0VIOgfihDIeIQsEuabgcy4FNwohtn3YpnEj2ZjMB3H0Q3cU%2BIwPmpPtn5OoDILruNBSNKdzhy&X-Amz-Signature=ccfca0cbd5c24fda871fd9346f80ed9393f347b5b046bed6dfece8c12b10c441&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

