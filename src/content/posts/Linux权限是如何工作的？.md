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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KLHAGW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T053727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCjhIfIcwOnrFmRY4VDUWjCE8M6%2FjCWsiqED5y2BDFwpQIgBJN%2FocEFvlfd1FOW8c8mo8AOa70aNiJLybAQpabqixMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1wuOv9%2BpINhOWTyCrcA1jVnmEzANc7QtbJFJrxsLtQSuyuwZcW15C3DTf4IWQx%2Bv5yHJqo1iJc2CdVUd2hdkMGhQ%2FOX6sgwXFwBSAitdagfEnKNAYz%2B2L55IIS5JGRh%2FRoJxsd2coUma8YWpOlBIG7tj0QNPOvhLc3z72DEFPlyVO9a70UzyAmACAJYrbcRthRAXNekPUIlVqFbf2fMivqmQYKJBb0bZOzU3vk4csNUjQ4uRHh0FNASvglg7Jdi2hJ6u6kqxm8e%2FGG2XyjsNWa6Ccht8hbJZKfWWZ7nfD0tE0YtaoSUg5ijVWgirFfYZZUpm2QvJjk7Bg7eVkvu7jYho5XwmAilEdrJwUqOv1By6pj30MUENpNxZa3DEIyZTgM411t%2F3k2hR7%2FOahtRzhmkuUFodeoDsoyLPnIl1ChnhvpALlgMlcbIOxcEc22mMC2pwLZWhX3db4FGgRqijavuNl8TteAU0swOfbdJPE6yfVM8oxymOJYgWk9%2BrvTw8x%2B91Il7YK6%2F5vsMGcLWYaZ1Ve4MhglYdXLNamCSCXwIDT%2BosFPuUpE91l%2B67dAwEOP2Wnmcp%2FFtmTH2kzx2MrtDY0F9o5hRnnu1qmOaQhVzvD4A2MYTuEusveXmZiZT6WoRbI%2BhW4bze7qMIrr578GOqUBSdEBb0rTBxzr%2B%2BKdnJy8yUUrecy0DAM%2FrsCUezihEmAecB0TPiNwtybuVDzOBo5dv14%2By1a0l8LDuaWAuYQTynx3ieIt%2F0pXcxNRdjh0t7JssmLIn3lWuJYMcirZDy9GdDblzJvEgECDRCID2vTLs4b7XV7XDHTca%2BM8q0eTbVb1qjMdeg5DDwQws1fg5fXhq8DVyOxuK6oxGjKYmC48r2lf5KUS&X-Amz-Signature=fef1c93703cd4f1897da932ef51997e2e7c060f0cdc91df37dbd0d106024c307&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

