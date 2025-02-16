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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPHYBTW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T053556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFUDU7Z%2FX6fWzZqRqPadW5Xx1jOWwDTT%2F6feqv8cHGLnAiEAjKXxW3eBrUhqY2xz%2FJncE0xPdxVeTF%2FojChg11XlO7Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMeJqBeaG5Y28pkXqyrcA7WmutwGKG0KAhSKQCABXfAcFv%2BL2YNHxr255acns9in1QqPlFj43Hj1ES6er43DqDADavhMHRujNMcwCawQGIYRO0JxIgjaxgzTBwJd0BcQ935m4raMnVqu9m3teJQUQWDP6abCPeD%2FP9P%2FzLJ1luXQHV%2B0LcQ0Y4o8yFfsV5AniBhu9XBax%2BAUME9FOLMSe%2FzS97fnzd8ie0ugczMzU7vjM3RKSi5cZ7Ox8bnQgmFpzFZZn%2FhugtYiyBn%2B28jULupeGqz%2Fryp%2BhnKamgdSHBde8mVkToBkQsNB2BqCqV9DNmS9BW4Tgehw7EdjauPwOCmBwk74O8t2TYhw2uzV1jndHr6aZCmJNYr%2BO23sLCd7g1smU1Nm%2BSp6pQwQ4a%2B0oCGMfqbx0s6mVNOwO1RrL2NtmllKJaAA2rCdhwYZILrFu0KHlo62urzD78X4OTw7bo8KR5SnLQbSOM0CEmbA46TfeApuFAvy3P27PWt4EI86w3i01SGxTkfCkpTESrtwogfeKZ4XXanpRi5uKAGy5vFUInEoHwG14yrAEGFxNTa4PCi7maQy%2BLwTVO55V6B%2F9XLJ%2Fj%2BKiMSHE7CzBXp1jKg8O%2F8T42%2Bh6TKtZ%2FgbchQJYRCPXxMbZbDAkvAbMNjdxb0GOqUBbKDs2K41akXXAk7lLwBdGwbvrR2u%2Fs2jnW%2Fn8Dg79j7WAyM9KJDCD%2Fo9qxWRZP40Diw5ZEOnfSvY95%2FFP4X7uYUTVKK4XnwJpE1crK%2B2imXtZiFSpWpq0foez%2F3ALHC4mpOmo8OPDY19qQFcff%2F0JKXf8EGiVunraYVqT76TxihceWCywRJdLT6YnEd3tZHS%2B14CbRR1o9LZwxwU38N%2BipA02QN3&X-Amz-Signature=4e00627a525c6cf77c5891f11b29831ab084c005c0c6d61b1d1659881da135e8&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

