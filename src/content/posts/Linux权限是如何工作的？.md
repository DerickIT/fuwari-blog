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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRA7R4M%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T053654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCCRzayBH2qvJF8CLzOIQaw3MaH9HsH58kmlkLjwJrskwIhAKtUXD9EYTMrhBcUSPf%2B2Ex%2FuLe%2BTYkOBSZszhiJdxfUKv8DCCYQABoMNjM3NDIzMTgzODA1IgzsxlHQQHkfVr%2Fz6ysq3APlj%2ByUU2G5IuUU1x7xorEGhzfijWzxUe4SY1SEBUb5eICBIHew6zqkdXFDnulBMszcpsWkiU7eQxOjYz3VKH5DSeCkuV5WH1tEDKANylUxnf3cgN5ZujdtRx8aGOF4rnF8X2Yvqo2xX84sBg0EbSQQzDJpdavtf8uxs9bz6F83QdjqIOULKL8t%2FC8iHynagDNRRhO4CVTJBMAZ2n6c26fZTpKfO64MkmojXspFyvk%2FG6PpVPT4l1JV%2FcoEnL7VRUtdTdAoIs3xCntzAM%2BUlS0%2FvEmmVSDcHDLnq%2FBD198FSFMxRmOvyDxelW1GM9Wg%2F6IZm1tEZ8RJEi1o2sSAqJcuvKCO%2FxjHoumoa8RCYw380Qci1kCKAfdMJwpuoawDTnTNdHxhwMv%2FTp%2FFO%2B8YonLoXSlUGtW7nSuuE%2FRxVQce454G5WG78CkLR%2FMsBAnpmntVfOeIOrJ1SXjZ1aonKdeehJ4p2GpPiY3Fv8U0qGToB4K9SbwBIQEL29GNmYfP689OxnreZr5eb8CsAD6G4In3KYoZscp3AIQutJtK9VOpf5QcrFRh%2FYokXNpOY9ZGDdJmSUUrxqvVXWmJWvIMoQ6R48NZi9Yx0RqfOciKhmtDC1WXqcYh425ff7F2DDCGv4a9BjqkAS3Ksndl6OO7uOrvWIud0uKePlZ0vuTpevHFUMBXo8tuuxzSUsoiSvMAx5%2BhWpyLeAE64Z4plUuTb46ZbG1631nxtVxOZtRq%2FV0PRTzIN%2Fi0eivq8JNyORn3Q8cPcF%2FYaKeI8hPi2X4ggnbRO%2BULHr5PrkWSWLUxuY7%2Bd%2BZnuobAfuJclNOWIYHKY2nG%2BvhAt7tCiS%2B10T9kRrzqYgXXy6%2FbMMJt&X-Amz-Signature=e4fd9f1d497f89290e3ad253b028593746656b3a9ac9edc19bcab3625abc8c50&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

