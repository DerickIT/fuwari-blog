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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4Z5JJJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T053826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCO8bYMcVfjtbeX6pduupF7%2FGIiLw68I7uzlr6XPobmZgIhAJnSw9xOUx2sj6D4q9jqhN0nIfnOzVBkdLjSt0KYdrRmKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlULCr1CHanbJOuJkq3APoejz03ABs8wgOs91KTJqD8at63X2L%2F78GyLJ9styu3i2nzcCEba7pu0vhFiUfwhbrKbLQhlmlWnRsBaP2GC4pxqsQjl4Dsztn13K%2BxgJvovopnzzWLoBA4MI17MzBj8VNeW2wKOUbk%2BfvWR0%2B09PaYsS7yRZFlcucuNo4pU5PAFkqJZm%2BgvhDq7cXvZg9A%2BawDBDkP6NSLIJbqQt6dkFpgZinWvzLykFPkELGGb%2FC9RpYXsGJ8qJdH%2BYDBv%2BlXvGhQ4sAxVaRQMEnaFQCxg7CYBhi0LJtnVdIpl3VCQn%2BV0rigXDZKxfjLbwBO%2FhzBPMb0KQ3yKF4sYDrxXp%2BKTaJuQZUFXuu7piHRFUGI11xBPLgLTsr%2B57YdY43fAZO9Bx4bdbnKtu%2FYqdQOJipYApxhNDFULwT9TjeW1OjEdJDOOEl4B9dSPobHuz1w58%2F3U9lRHfKPtrLj4YP2XAmUjoiuaKykVU1tQyuyvXovWHAj93j7O91hDAd9kB7KALzo7wMX1UjNuytaehUkibBmo3B4fWDN4lTkNgMeOopaLG%2FXystiIlg2IOYcjTLHhqt%2BSIRwXVg4PXkpAUKVJLJ0KzshoAzX0FlhawtNgeUsw8LTBNLI6IX%2FFZk4%2B9HtTDR1vO%2BBjqkARq%2Fkf3ifj9%2BvXtuukWbAtfkMCULkI05Pi37VJfspsUtnbcINUcR6y5MOK4dFoN5RFzJjHDDPhFPibj99MhvSC0rm7hEtDGBl0tVrZK2TbeZNP%2FW6Ltb4Dc9ENiYVnYZCdVhc3PpDbANs0aGE70zsPhrOXIsjapI9N8tSKmoefgJGK9X6%2Bx7U6vh2r7MjSgQBBiimDyCLRJkkayTEet1D6HSqxD5&X-Amz-Signature=3edeb35c80c8f551ec5a8f1f898d07567638f2d87bfc7b6db5ce0460ca0840d0&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

