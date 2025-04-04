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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNNQF4B%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDhFmmBpYfZTnOV46qXAyONnhoDKt19TIog2vBo6VNWAIgRmxU9xMk28htV%2FR%2B6ekYNCR%2FbWLC4PNYcRiPnDQYL%2B8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIYMokEwx%2F8mpeHsEyrcA6DIlqQc5lG%2FU0Rk5mZzShZHcID4j37fF1LQ8blMgXMAA8wqguV2JnGRffjkrnWXyiCPNogSyfkuQui6HoPXukQCRHCLDNpVb76lvYy%2BQesBKF5IyUgYZO4s2z5Z25l8IXIwowsCJlqVRyiCtxTOqfkvdMhGNphLKQxYl15pgZwG%2B0fvYl%2B7pcD56UKNPW0JhEOJ8XVrkREB0mrJ%2FyD63tu2deDrjYtCklFDOcb7ujOfNvtGOiTirKu96yY9%2FvgicbuTl7y%2BY8e3muFygoQoyqLmFqCgm%2BmuMV77N%2Fy2X%2FkCNKYCphkIoR3FR%2BN%2B%2BcQ1p1VyDSWjbrF3PFdfHZCclt8E3Nmsz61uF0WJDwv4odftsCAX5GeyABP93fFlyZYIodhYRBdvG28c03bViPA8s0wNF%2BUBjAxMsHSC09O9rFyDdM5TlwE5VMU7d%2BxkedsIxyMMg7qcO5CS4RGSwD0UElIdNbdH4ahrI%2FGWEK3eXaDhaE%2B7ux4s2a49tH8%2B9KkUBUOmNbFVSjDLxUWeiyJ0u8q6cVKVCu9ruLOliIkfUCU%2Bg2NjXPBB4aJJ3eMxut3Ze9HeVYJsZeV7Gi9sggcKLxFwdnu9IdCMiaQlv1rYYHCprR1qvci5ew%2BNjJN%2FMIqHwb8GOqUBNJNQOWcczPwwlH2yH%2Bkx9aw5V15FkgQgQjz1zLfZG9b0egDEnTyP6bsJzneOISjYGTl0lw%2F5TySi2R7o4dgnDzd6DR6uGNoALkPuWguwGoTlUyEmZdFP5PBu7LynM%2FDbd9DU0BJXCZjR4aKI9p6j3QOhDkthEDiBaPFK2YXxwbprsvJ%2FMRq%2FuMgwdVYOcuDuIAetx8eec3O3LmBzboJWOEI2LJ0b&X-Amz-Signature=f80c9af3cbfbbf8acf0d05fd7dae73a7e7e4054db84481b5c870351e6a0a960f&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

