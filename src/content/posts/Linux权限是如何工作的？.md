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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJD7JONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiACmbb1QQe2cpVlAU3GiHxv23GSFfovpRfI0PsXPXywIgPN9pHMJLwZ%2FmQow%2Bw4A9CQvWALQw9SnKwPQ4LaZ29Sgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCV32HQyX1GEH9Wx3SrcA8U4GHU8kb0Ik9szbm0aheOQ%2BCV4k5JSXmL8onb0tD85REjhoXmN%2Btg%2BzM%2BINnJCc2Pdsc0OZ3N6%2Butj3diTZifymX3wVPeH5qKVvCwKlQuipiFEiF0s%2BT%2FDFeZa%2Bs%2BfC8u09YHxS44uPsVw30TyBwMy%2FvnS2SYYjQUJ%2FApWGPSut1DtZCgh4QP6KEgXDbTs6Ht0YAp%2BRW9rkrlLOBGpLWRzkaNcBpvvaHhsnxwBMM0A6XpmAbWE9lj77txccKT001NTFo5pdntWbTDlBYZiJQK%2BpVcm%2FLqtwYdq9o26n%2BhcVOpn%2BoKLubOCcCCDG%2FP2CplzodNXzDBv2R1SP8A8Bu1RwMGQbbz6Pzp5CiZR1vIWtaHL%2FIkwKLFPzHCRIy30NDFhN9VnpHbXGMjP5a%2BrY6F95Lof2H3wDMWJrJk4RyyC1smdYzpuYuEi4fzr26X91qam0YhG486ErvLcFg92epX8%2B%2FMBfj1Ed%2BrJdkL1uGiZQ%2B8I7jhdd4LZ6gJVEx9nmZ4ry%2FXwIIX%2FMyJgZTEgmvA7jrD8JBxadEbop6b9%2FnbZSz8A7vVvBB2%2FJHn2nrRWzUU0oD%2BZRiAxM8d3D4JKnAk4y2iMf00weZ1XJpNT67uMMuBywuCf6ZnlIjwDMLbXpL4GOqUB1foLaVG8S5IO%2BKwK5hcIpbE%2BKok3bDGMxN7AYRmg5u6%2B4bOF6lzZHSMWvN9dwyWDMdIAaYFOnZpUs2F4oWVtogILdT7pZhDEdMb1Nuooh2PqRwdOLPDBJ9ZwnChDIXnZeq1ElGCiZk8AXU28ZRdeqqFJtB91jeSXPxjKGXIDsWZfDYzTCsKdjhWfdlq9ybvEJ5%2FX5%2FLd67uFQ2QqQ2RSHtYtbzvu&X-Amz-Signature=7e6d677e9227e72dd2bf844ba31fb7ed35a6e41396b84b5d82b36a33729133fd&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

