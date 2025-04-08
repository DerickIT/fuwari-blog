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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEQ7CBG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrhCtbJaAlcqOUNyg%2BxHqFT6sagsRqk3C4OUWc3zKxOAiBN8aYAj4jBjbeo5%2FahQCbCzclrYxdjxEvk0xfIjSfdISr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMwW%2BbuE349ABcfahHKtwD2MoqbAibvwYJuhaZxVQ6U57TNIlgZx%2Fdthx94Ij%2B1vFocAW5zEPDHG3b3Ax3C1gZeWwnR2yT1h87aohNeWIFaYvgmFr0WhEmTaWQO60aYapAq1oxwBcmjcMbhPPxlgeSA5LJuWp3E648209vepzGxN8ogB9JZNASMXEvYvF%2BdEsfITk8aOPwN3Wpj%2FUETAB%2B4DY%2Bj5Kxxvu8x1gWT3iM5UUuVib7ayYDnTNgd4iDs%2B4MzUAyseldXtsY6Rr2zpiR9IKunXj795Pvv2CnhiRMZB7fbte1o%2FBnTHMigCh%2BQqJe2qnhDzDkAXNNbj2FusbmDs69HogjWjpDYxc9k2uPl4ZJ3h1cQI%2Bc36Ti8aO0CSjv%2FpdSP%2F7cXE1w6unWpIsNwKsOJxBeqW%2F7sQLNLK8byjvJIpKSk3gmMIoVv6F8m1mOCc8Ubzcz0K66pbsnc%2FKEwezihzFX%2BXn6aCke2hKsM2EemIHQqqGM8Gw8Wj7oJ90lBcGfO2dHNMAUGCWUO1%2BVKmCceVRfk28fIl1UyyEML8ZTVdqjbGv1nVHsC%2FazIVw5lu9rLDIabiNZdyxUH%2BpIXs4iZ2%2FyaACuxQMbmLzS4zO32f1HwHuHAEjb1UFwlfp7Iy4SISLm%2B9%2B6y9kwx%2BvSvwY6pgF4JDY6owILi8gjzHuZfYpDugh%2FGOBJxJtO8z2adJ6rfTzkGwSXJXhn5WCersS7NYbQzNnJXo8Z%2BGf%2FKj88wgb5Y2FKovdE0wFt7%2Fztae%2Fx8sxYyqMco5FWrmKNq0GAQy%2F90yLdVbjZ5EGb%2Bw4Zru%2F%2F%2BmAdVw1z9lyvfh159ZLGNXe7WzW7y6WRIXeerJcygt9pknnx6qjaHWiG7%2FRms4p7p6h1wluJ&X-Amz-Signature=2eebf7105436c9f80aeffd754e31d0818615ab3449f63e091f766c8faa1cad06&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

