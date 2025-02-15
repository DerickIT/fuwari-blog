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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTN5YU7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMMCiySNscPHA9GhR9UN3NS6N9Kgdafej9eoKWtMQ8oAiBMn2bnAmcBRRL8%2FgaScna4lvkev5Lk9UwEGywcrnsYzSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMG53r6mynKMpP1HF%2BKtwDjA0vAuLf%2F3YKx%2F6J1c9omjmJ%2BwsLo1xY5HvajVpLdpm6LWMIzskGz6TWLlLZJV2QQkhBKL45DH6k3zLFJXVXbo89umxb8QF1lGjydmWRzq7gTfJT11hYU8FMzmjjMSut6RwsF%2F9HnMKRC%2BzP116HMnJmRMtFJ4ZgsiTSO4f3WEtAKc%2FAd5kwGSFNCu%2BXr3Vq0xOZdW9TP1jC2dSoyWbXHc2j%2FhvvLYlVZaR%2FEeaZUgVr2%2FalieBv8%2FbAxddnOr0ZacqgCrJbffvTXjS9PmmIrPHhbhtGJT9cWMbn%2BNHbRBPD9JPLK%2FYlOM7TzP6bwIjDHd7jnJnrDaUyvP1w5x4yXzfaj4i2p4rKWUPiiPovq8Pno%2FXYPcAWjSvGGOf89sCU1oRe5r72boR8ryw4r60lVl6beorR36j69tVTuuCdmUGrIlsqwfDeytm0aKouJJTfRRYNVUuyHVtyoNqYBtfH3wpR%2BtzYP79OOSDXsihnuXOGJRTj9FnC8UrJjzVPfy5ewCJ%2F5sr%2BMPlUxjA3XINQhJnArISqhQZPwF1WXFCEzI%2BItyaKoIWoeURqH14Y%2FuOyLtJOqGcWxPc8s0WDw2heZdKbWkFqfq7kOL5UCCbq88HOR6arrvlNl5mIVYswu8vAvQY6pgGxKz%2FJ8lTmTiNMfpgd00EvrAfNBw9uWnARIdZLQ0UrIkRDdly3UecewVx%2FiAUMW2Twu8LvWsrnpZqoaSEtEfzhg0H8GvStn0C1d3PbLaZt04SOMMDSrA%2BGo4WbGsmp15%2BCS0Vt0pQF8nD9JRAZgYPBGfbys0ckKyep2Gag1WTBXbGcPq3MtUlBsYixYyfZ1dDUtVjxryzkyuW3rJu8SkgMVfCVY6l0&X-Amz-Signature=67e89646a4f22e733e399ac69f4bfb3d0cc2ea81c541d861902084cb2a6aca7c&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

