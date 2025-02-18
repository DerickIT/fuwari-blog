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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZWEMGG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T053821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC3JSZdMg9fTuES%2FC0nf%2BN2FItUxosJ62iu5mOCqcqTpwIgS5h%2FwIPVzGv6hUu1CFYECiZxUj8kAWkTqcG7lAPnY7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGMfuDGr2VuhkbMGSrcA%2BFOGY%2FVjAbwH%2FBJLKnaTbgrLWQ2lEc4UsGswMLCQ2sZsEdVfAYwOVjRZn8zl%2FKAh3A37Fkk3yeD906oZuILO9VDOC0cxnqEgDiNNiV7EowUj9cgI2Tr%2Br%2BAvY5uWiiboMEKEguIgJXxWEZGOyTPCkUVK6EmKvBvj6z0cHkzU1vX3c0Je2qLPn9q6kmQEb%2FMy9cXO0XHIh%2Fz9Q4ZV%2Bm%2FMCZQIxGOfodsPyCF1HzgsOcGxGQYG7AWb8MZimFI7mJOHno%2BBAHr3iHW1eQVWgaGu8a64nO6vXiUXjLfsZqrj9osKUw88oZhBi1HWe6k5OT8ZPKf7XgwZRZBinPTnUfJ5hfBmlfEST5hJxnDYNtm5hIZ7%2Ffk1nAZ10d%2BEzdoFbpCAoPv%2FOqKBGM0fsOxmK9yYnnxjZF0XjuuDVPNBmENFZoBwPOeCY%2BNBTVgFCOSZSvQYQ77qbbDScNmL09MbXaQkhuXmMh2IWApZf%2F9Gz3cq%2F4ju9lU3sRyjpZQHyQMcSjjR5o5CQGR4qB9cMc5Z%2FSpysO%2BO5z9jhuTOG86TwH9krCfm4ANMqfsD9mAotpAkpZUX3HFLNxSACog63hIdxGS1ykSbUeKsDVO8ikj0Z%2FPRj7GGIZi0UhXTyHa4nwtMK%2Bo0L0GOqUBUNZJgl6v87kMIMmTwtzU0K8Qv78BTzhvMrLEBdCzBaOGHwBMocB%2BniFGqla%2Fxi%2BzO9eCeBNf6pnGPZhXnicKCCYTvQGOpAZ1ViEZbE0ZNXDe2YaVgPAEtTeDB6G8mF%2BhVfhjgdZU3odfFrtnVm63StxE5ogYMAP72rWQ%2F8y7whXyEpIiJdG1ma6Y%2Bjn%2BTWfIuNJ5j2f6qu2meUH3A0oaFPn8rC7U&X-Amz-Signature=71d78b2e4900d8e023c4f24e6bd23fd91c651c92bbf3c6f9eeb978692e9084bf&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

