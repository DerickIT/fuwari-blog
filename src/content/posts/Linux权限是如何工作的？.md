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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOOMGB5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T213307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBWm0R7AA0Hn7%2BK45ZnII%2BarBVl3TqsBERoSB8SNuwXtAiEAuEWNX3K5ax7Y79erl4U2mm5HnrIMqIPyiKayTplpAXcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlEJTaw7fdpIuk5uircA%2FEyIZHxf%2BtumOI4rcKyZHEVPoqwbnFt%2FtrgWVT5jEz9U3ZVlKgel%2FSR%2B33yH%2Bd6DyYTXOQPDgnAczlC9k3%2Bo%2FvGPMU%2FLENTU3RpJvdJMQLXoqVIcqZZInRQBREenVsCQ2IAmJmsIKOuBrtSRBBJ%2B%2BAF93UCKG0k3qmYN27ZlYbSP%2Fd6Ot10JsDbW5i4Rkw0sVrapiK5Yg1EW8Cg789UjGgj%2FsfIe37i9dI%2FXl212M6R6%2FkQPeBp5amDveV0cUxLFrqfst5ovF0LvJQbRDGy%2FyjoTnMsWGFnxacMXMbGCSC6hnMXnzJgNh5R5TxlK%2FcJxf0Y5Q14p6VWL3Kjp7fzTuglgvBg%2FNrIPdxBAlwCoacmPfSqGXujV7DhQrw6yP4g2WTx2u7c438iXLsa60FmlT6hWMZThlqlCxvKwthgE46%2B14IjUo7sqxpSk%2BauP42oJJGSYebe667uZ6qXOj8mnnC8hE8fwvk%2FLdtQdD82Ek6Rz10JSQh%2FyR4v87C2Lh6aojNbZkqd8l2rdSb9%2FGnhdJq%2BO%2FmtdkArUARe4yfWDswXnihijoXFbIiVuZiA3W5BtaSCXkdYSPZKRBOpA1dc6sfMZj22aziMGVmY3J3Waej61tAHbJLIY5q%2B6OdAMODEjb4GOqUBee2vOMNFpYot%2FlfH7HPe7dmyKJ6XHNqtq4g0FwkktBJsD%2FSGNqoOltPcOUMjk9G5xNjRVcTN68G5PS%2Fu%2FUJLQPBvMcoQrWT8VnP6EkkMyF5z%2FGFhj61ey44SkDrgLE%2F8%2BHfo8HReAJbN57f%2B8cnq%2FOMzb%2BbjXznvOXBv%2FCBXFlUM9pRDBhyjnf14wIPhqEnv6aT%2BOofr2MpdUzHx0atPDsWSO3SN&X-Amz-Signature=1eb481e2f17d932bab2c0aebed4132625a4af924b77045309b53799dd8762cee&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

