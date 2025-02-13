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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VZX77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYqGaEEefuQWZLzffwYQlJtkDCb%2FE10r6q5pWJByyUBAiEAr4nl8At2%2FfyAdZ81qpvTpTGvaN2JTsjGnzgv9ntvhAgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGLxnq5T%2Fwpt2PZhMCrcA6zeX9o%2BOq9Fd%2Bhp6scP3hjNZLdt2UGwnEdEBU7C253Zi6ZlwsVhivg%2FkownaX8tjTwaZSEfy%2F6GLGhRmkIL9yh0U7aNrjjpAs7DOzxuNSKNFLvyPi0WdhaWQ8hAAnCWfPeuK3ypM%2FNdmDiHisEJDoeo5CTxdiywIaNN9UPG8QDnBEnCcDyMW8Wh%2BtaHURdUvNxn%2FY0bHUQyXRM9HYnRmSxZzLSFeoTvLmszNjb8QRNmU%2FtMLZncW6%2FPXQfNLTZKuw4kQwGdikKTxI3ZkEghmbC%2FY%2Bh1YIOpYcZwX%2FijyRjmTlf191E3gAh3Z1j3toNJvqdWkui2FPaLIs5Hm730DK66vz9Q4%2FCXQfDTNlW%2F5sxKt1NhOFTxHU%2ByB5TquE2jZkMdivW%2Bw95aDLSrpohGp7W%2Bko6dQBUT%2FWZxN57nNEJyeXBz0JjlYWWKhnN2U9UPCi2M6ZPotK2iIONiIDDiin3BaM1dEUlJtADG1eX4ARFFxTXJV4ND7J4amU7eZY%2FEzeN7JkNlWg95gOq4Tycej0Zip4xO0NC8PjpBocmmHm332S1wLAwvjIlEu3vT8NfCxX75P2miBqQo%2FNQZrzpStOQcH0v0Ojdx%2BeblsdL65Po9yjhjen55W5CXsQiRMNGqub0GOqUBDc6rMSBG3UC2UfNr17Nw3%2FYZ9%2B0C8XhAhhwHJZlo0bfMaYweWwkgJRWlDximK4Ae1375%2FLfibRm6w63GDHQsJo4atPa7wWjqlrPXAwZhQXM%2Fn%2B98ji79k0avKck7UXqEwFFNF5K29A78UZwml8igbaXfX1siocPl2LfRFIAuvnbM%2B41gpcL%2Bu0YvhABX%2FyPbMbMrHUjJeZwkDmVD%2BQh4LCNxX8Nd&X-Amz-Signature=668cbfd9e160eaaf726bf5089b65132ca25dfc13c5d4c5a431908e4483bfbcd4&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

