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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGA3NBRM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZBZR3%2Bkj4BmQIultHmo6jPG4JzjYxdg5Qn1q1VRTK%2BAiEA74FWC25DnGLcChZbzCihE6XONWs8hNd%2FV%2BZ4N6Kpu6EqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJigJAKBneC0zSxtWyrcA%2BIKvsviuJ44WYJ2b2V0Xyuw8rkYqqpUaTYmP0CPocV2GO3IIucB5eWEFA%2FcS6KaJrDT6P4qBr0gYY3pvffNLWzZJcDDc8q6urGULrk%2F5ePh5XXDWgTR1dY%2FhmKD7oYEVtFLQh7T1ZAsKF7ZHFLfK8YpoUPjTWztVMPPFvaum2L4EZOUKylcBkm7ioz6JoJ9XpR2O7cDZxJNPj%2FKcDi%2BPzattt4fYVKnzrIJEWCGVQmhXXUMLUp1SHRPWOC%2Bvp5mSqtmWJmb9fDPRuXuUx8Ot%2FQ7w8Za9f5xjcxiSxDVcJiU%2B8pTbXM5mt%2BOlD%2Fgx2ka7nCr5hq%2Foda9fG4YsDZyW4MFK2Y56bcX5z8MuOHqh74keVf%2FP%2FATEpr6glj93zYGoyUtQet96qU5ktp1hoeONM%2BsWH6Y26Qq6TMutqbeG4bmd0S9bt%2FIsYpbq8wgOmJzCTw7wY20XoSV7KG8HvPfBZeACZ7Z1Ou345R356OpbUBWZjovoXKe1eqh07zbPZ%2FP8e3F%2BTvaWQxtf%2BdkSEowWc3tyC%2FjOqoNsXUawkyqwQJtkCR6i%2BQPiUBjnrgY3xchX8aidjt11b9czjvSJ6YV%2BXKTR068dBE6zxczW6BnpUEEuFYiAQzet3pD47fxMIHX470GOqUBcl7Kh0VXDRTjNtmlN4xCT%2BFshMH%2BS%2Bsc3z2LNc%2BPVvDdgpnGp5n00%2B7ED6TJWHfIJIGQo9stvmpnYX04EW0Ld%2Fk2HRuEQKyEXHpHU%2FUNqqcg%2FwOxEy49btbbkrz3RdFL0h2lWqOErxI9dxcl4pmplt4WxVyDxI8mbWD3hvMawh5R6gw%2Fbd%2B5XplZQApe6CsUlSXOuM26qhpaliBXdm%2BiA3F7oEoH&X-Amz-Signature=6d9cbf9b05ec22cff8faba1b9f8b0cddcf743b7391e88de586e9678fdaa1c0f2&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

