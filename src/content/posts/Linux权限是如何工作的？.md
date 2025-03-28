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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTO3IJX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T213422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLJ7lawoeQJSlVjAfeSwpYoXVnG7KYIeAa241pTVFqhQIgaNv2pTCrWQXWu%2F8RXxfHNUo2nqjFJhUBOVUGl5ZvQJsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDE5LktyODOGVgzNYeyrcA4Uq2WftoHe5MNBl9v6d9k3PBQPPIo9LMk56m%2FB95o4LeQcPvoBhLaQq9HfCEaWDCN9NBMWmfnLVGX5dx%2BTMSjMV%2BZTBKS%2BiUNn37w27oFvqXXM1mu6FMnkHE9uAUZUJcgoTgtTssYSE%2BZLr3GJq%2FTL8wadl8jgwhUSVizSUdEwnXTgltigp2cOU%2BmPwgfjwepGgESVmTPTiZ7AjWktAdbs7n3KanR5g9QxQrGGRSL%2FZayB2Wmhc0MGrlbnggvC0UgQf6zj4xCUNo8%2BHL%2BcGa6%2F3ET1Powz%2FKCg2Yzogfg%2BZwkWraM%2F7hViB381NQd%2Fczg9ew29tKhPQbYj%2BogIZUE6bmQrfqo9dXCrzh0Yp8WgMT42vci5%2FQ7QAxfpKwKA%2F43gV2jy9PgpKvZ4zGqG23OeJp7U4eNDOHsumIiuovibYA2xgQRnkdGUvzyBILQUmYmuqg1wbVJn9SjaqQt%2FES0JrP8Lt9nICb8WxJpYA5KEzL8MO2Hu%2FtHOXrIwqcZ0RescBW3RETWCywonRD0W21JZA5V%2FA1Z6gMPa8qzJkpxWUvswHx%2FUFOVIYTiHXWGtHsQujoSdUrA7bY0bCu2kVdPsXbFtCxD9bwTQj%2FsoPRu0QqJk%2BaqthXYWWKVjBMM%2BonL8GOqUBENdJF%2B46YCmKero7crB4YjiUGPYv7wDrN98PNbUWNDMJhcs8CBP9Nq7AyToXhpJ%2FUTWACV2BO5mYxHa1xxGQmJfBB%2FUd7MD1nLmBWl%2FfGzkxqZN7oZtEAMqDdR8TqreoV4Wd5YX7%2Fu%2B%2BIKN%2FLzOGs4q%2BUVSfFlOWFE7bfjKO1peyCbAScHO5XDDT28NQD%2Bo%2FJoZARw1JYs9cT22DbktyYkqCZhsS&X-Amz-Signature=1ca74faf24cb285e83e1feea7d4929e9648ee494a50635a8dc7afd6e58163811&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

