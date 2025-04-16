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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YETWCLA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T054008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHSkqZUdlYFVzXUv7AAlLVHXwktVg5KLhhkC2VD%2FF5AIgfkob3%2BQUHTZXf6u6mobMLgpMRKu4CE719ZHxQT3%2BGXIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCtbbFEFhXDi5ECFYircAyt0NkWwrDwfCiNqmN9MpwX%2BayQ4DlSu150hBPxyCSLPrtPEEQDlD12jjzJ%2FrKTgDfRCKZqmvX4zzJ%2Fdw79wAo7YiILR7hbD3oAtllWhSS5Fn%2BDxnvyxRZm15OHjx%2FFn5u3SmNTYeMxYoeuxrn0lcJnZlXt6DMvT2GnRwtQch5iptamCz%2BAByj0n%2FThFgKetCvtwILgG7B3T1XMRji7k4DeT%2BsscYfp%2BpttdxyO%2FUqoj77XhAI%2BIBGVRAXduo08gXrM%2BYUdmwy%2FhnNqD2p0redUUG%2FuOqe5NZDXOHCkLW88HCwfbpKkadTKtG220ekG51sSvdopE9wHx8o1UKCUNX1u9ORNRQohhNax7xrjDqS50i9aPN3tCGtAuDk3wRXMZLv3c18adGtvV57yIIMyl2CHkVFEvEtMDl9J7ll3MHGKB7cLvj%2B0ym5HUa28S6%2FfriNBFirqPEnD0POdOFOxT4CtLAwc9QMPNrwpN0VAoaGIguv0syTikXhGKotKG4dq14BVQIwECJYFNetsFpGkQpdgCV%2BDdKLW0I5Vqn5y9R1kAEaEZOL%2F6sUFkKFKIZZuE5l%2Bc%2BRvOsHWTUt8rOh3IDq%2BCFax%2FhRkW0a7awF7hLNGyTkh8YStGR0I4otw3MLHv%2FL8GOqUB8pitHmpiPofSN3vajGVux1bc5bOBaS6omBUPZnvEBD4xaX%2FtiWqXDvVxkX0ch3fCdH7WJpTSZNKJf%2BnLisDBxXK5Mw5KpZCFj1B1c3Tgo3H7Rc2AdtFSbBhJjaYjczjvMGZkE2e4ngGpyzDvpnfp15IE0Oo3JUWqeYxuUXiJLmLdOg39Z7hbd0NJtrApDHhJJVVY3GrQjvhkb8Br4M5pMkR51EHt&X-Amz-Signature=c2a44a1bbd9bad7a2c3a635aad79f6b79cd2305d0efc5d618d7fea16b5aa0537&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

