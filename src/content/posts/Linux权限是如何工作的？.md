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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY73HF2W%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T213656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfaG0h5kuf0Sp3FdR1gwI6gVWt1jWzOvGArmDsXe3mAiEA1ECULHAf27DeBGXJyE5r3bNDMSKgPWp5lgmHy9%2BT%2FEQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKbdR29k5qpxiRtNyrcA89OSG4ZI9T%2BTsldLxUn%2F03G8gYBgsDJ7T%2FseuFSSQ9%2FV5FqQYUbXKMYh0GtgKq9eNYkS59%2FF0M3prhHqiZkLOhpRtftF2n0rg11%2FrmeaYjyCqFOSQPnVi9f%2FWCAPCZE%2BUFBEmRUOrC2LCul2kYI1olLe%2BI9%2BzTuLPkSKS18b4OJBZsLvmy4RpZRgz2QOYnut%2BESLn2ZFug9canUnoQtrqpvSoMCfJzHd%2B3XXbZG0nqxmvVaXA7llpxVIbPdIUtilSOesu3o8I6S8k%2FsJ6CR63W10cTP6qPG8uEJZEvGQ62G%2FpkmUl4WEduKKJ0l4h%2FlNg8Bhhhp3OelVvOmdyKLIV%2Fx77iv4w7ge9aP4veJjos%2BMsyO59LI4nSsxUX9nLIBEuCN7KsORvEu4Rg3Uk4835x9FSMwIfrK8EMbqIukuIX7DvqoQmuQTlJ1WKv1TKBekHmYLwR%2BfUjgRf3BAs5sPZUg3GptNrMP%2Bzb6rhetraU7RCqPre4rEORstUyg8EI9OrfIIdAPT000DmgkOgXoI33rSqP8n6oDDoZ%2FYt5KIkMhqCs6uqWCOhzOSCPPpoaEBoeFmRgUrIhllT6H8ZLcSln%2BZLQkOWB%2FUfJRgvPHGwPq0jCwO%2BXtA2wEQrmFMOi3mL4GOqUBBS2u78sjxaVSSTj7%2F%2FD60I5k2xpa60po9pDpTQd0JohjbqgpJWE0zVdDnjlaoXuOTizMAIxbBXrXFXoSMoKWKtvGTQ6rlI1EUUZbZnbdEumzKYqMcZJf%2Boptaeh2F%2BZHxfBy7YRWMJzPlApQPMTdlZaPdMdER8AnkP%2BvFeCVTzDMZI0zbcU4fK8MUxsiRMnZOrY2Ka9REhzDL1Jx0dTbJHtLB0Aa&X-Amz-Signature=4064173db112c4f3d299b5a9a69fdd2741f6dc628f6e9778134023fbfa04f1c6&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

