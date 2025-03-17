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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOM2YLN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T053847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiDVjbHE8xU8StHZT6Sw2zzUPsxSFnpJfm%2F2VC%2BFza7AiEA3t3pT78ePX8xKGn%2FgoIpsT97kfL%2FNxuGxtUWHoHbEDkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAnIFjkbHBgCLHwRlyrcA%2B32uz4y1dc6OyTCNIoqntOA%2B4XggyyCEdPn4bOxfO9lLgMMMvTmDtR4yl2wscG2h7mlVxys77rBniN6xGyuUf7zTb2%2Bv6Ml1KTiLEAnquFme7gHlBE5JKOzJTpJBA9a%2BkH3oyQvAqf9yp73K3W7sUQjWQfmmlmHk%2FiJdTLO8nKnm4fevzUj8hIkDHgI9pFHfGELMeTrpqwQZKyJjspZq2qrFVXWeS16eKsduLoZtoRGUa7LEflFi6OXuYvHUYv3gkRFpHaaV4jr99XdSdgVByKBh46TqU3KEyDNUwpOCiv0zqEOwyRwxK49RvooODoKLrAcPfJwKkvB2K4%2B8%2FZQv%2FgTkE8yzYXwf3YcAAKknKf4JdeujRuax%2BvtXqHMSXiTUacPPnYMaR%2FX%2FAkob2QknoxdAPtt3%2FeUTSJ4FIqx6NyEkw4Svt1wGghwbqLoL%2B8gQJJVfcD6IdVeNjrjNJ3sfITd%2F19%2BS3K81xWQLjv0gHxSMC2Gjrsdz93OVRbc%2FP76O9D7dRYldGmAjj%2F43cEWJ3vBTGcJzrr6KwO6gmIiHPDXRxklc%2BDZnfwtT7uFK3PDAIg854hEEjH%2B5mDEBIGO%2FItxf8U1AfVeoyRSPyFK4%2Bt4VHMe7GbUJTsqH%2FJoMKva3r4GOqUB2Bp0HqHcZra5oIVCtbQLrKYRUJSUkV055GIDRWAsRmPLw1xxoXni0yDhzD1oPJlgD3w6oWJdE%2BZtrNIVMscaKrKbtbL3kvzCvuXXv1xDNQu5sfQP2TZXS5sHbbMAKKCQoE%2BFZmki26yY99QINLKeskEnK3moNmJxXFEZMVVTzciwSIqerJZA3B00gxtREXjZyT3%2BSoIKqKh8WzuubBZ%2F1LDPJL6l&X-Amz-Signature=fc055df74911153c648068b7ca5e048c93f94357e9a857a670ed7d140d007f28&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

