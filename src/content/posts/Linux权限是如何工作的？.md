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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRJKTK3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T213450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0Ylg1MK6t4ep5ZtvBJB7H8lAeMJojKc0bqZOMx2KA1AiEA1Hv77pym2%2BZlMpQ%2FodLI1DJygh96JppOVY%2ByKP9VbXUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGxPQbzs51ZynG3ETCrcAwbo9Bt2lfUfaUVvsA5IDtd6T9Hbv9NUd9nkTV1vxAacZBZuQ233We2i7n9nTlCl%2BESzF9CUY3lq5%2FJbDhhuCkZoETVHw3i%2FCYgM388pA2dQhK1dAv9tHKvmIDbFE865bz0OANOfDcwPAK9uiU3pna%2F5%2FWwZhST36jHT3Wm4BHHdJsDvbeXt3j0NjPsovNJlA%2BFz2xfxf5zs6EW5W5iHu%2FUKuBfh6MjLPGlJkR3MW3bK3WixxIPUDLRq%2BZHa0teeL9CwuLaccvMAUooYq0NwVqLx3s%2FnKAEeueQjNZyOkfPBQ%2BXXo%2B6YUzTMy0Kz2paBRJbJGdKMQMO9LyH4%2FHEW%2FNkvKMlB2DT5t8SnrvzH7XoXD44W9Qvo9qDh7o8QAFE%2FQoCZs4QaCY6VXxfpzT1Y4mSWPnaTjOEftCCpZ3genzjHHlcNGYNoL2vKrZ1tmv1R2l6bC93ZzZrcbbbTyqoQHP4JA3CjUbkpCZODVJTESCgfGaXVkXxZrBsseecwV0ZiM7eU8iBeEmCu2TOq1wEguF62u%2Fcde%2BelSVnc9KcNO6a%2Bb8Ayn9zk8DsJeQ22a63gGCHCx7RJ%2BN0qX%2FGC7v5tVTxtp28ouV45I2z3pwivMeAKhmN8yt%2BW9q3qNVQcMMDRkb8GOqUBBFjbBPkWMrUSYoWXG5mZ6yaCskobL%2FaYcCcSyEyWrYkYloRvZCzj%2FFUj%2FyogTr74HeZgaU%2BGXIFZ%2BSsYy%2BHZv7IrSJbv0Laf8Fr0eJb452M%2BidjWVYN2U%2FhfmrcBuqB%2BktBefiX2KjmM1%2Bjkm30u%2B2P9a4rZvQnbV1y3uMXx6APkfhpk3AO9U0FjDeHOdFdNRnCC4We%2BpIDLswQpO2ek8LgSFrYG&X-Amz-Signature=8f4365d4a3b57df9517c3849701d3b1dbba3a8e6bb64794c2a62d7aea6a42f4d&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

