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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7ZIR2F%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBNcLmvW7COqmpxm%2BebuxseTpZk8GX3yDoLruilY07KQAiEA9rdnAWX4BLP2XcHfXsgJg5UEZnZrV6lsEU0wIbqLCbUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBTHBm9Yq9ut810QCrcA69I4%2FGdZny8Qz0HN3AY3%2BABpYcwo3R9v89FnNmpoo2MWpK7urkfPW8gb3AV1lRGRuj3XU20cmkJnUWK%2BL3edSoYbqV60wBZBm6ukwfmw1cM%2F8B9qvfwV3H%2B9%2BDYVITNVNuqIhE1aMtJ5mSAlQvY10KTgW6QDNX143slGhWL0NOSM%2FLhsuMBACi8eE9Ezh8MHVtEnx8DyOoLfpFknK8OZ9t8zjF%2BeA16mmTgjwMwvcFClth%2Bgpy%2B5cR45PXx3sjWjhb4Q2DVHjJAjcIc%2BDcnUoTOmachyx3xhQnEFeRZNJelIqDOASpsZppnED9eTtCZCzNz%2Bn8CRq2dbmOfPRWysK9NvgIi7R3mmB%2FfgSm7qY0CMzYRxnXq5CAbxfbOF8%2FaeyFNnt3szADgGKC%2FcTnieuv0xZZxKvQSBBmlnq7VIeaKdc5EM4LSMSiIYENoemOm%2BbJeX3jVN6XjLgQzSEbNpt0ZAMhwho80YXUTSPvt77isU%2BawZtWGUwcj54FVuh1n0McOMJQDj5au5PPCNNVLXb07hAMQAZ2eYh9x3gI3xbwOEeKBEXoPryT%2BF7Uiu2OMufWsTV9emSA9B%2BzpQbvyHqi1shuF5OdxKGoeCcH1QYoPTQUsZJPif6fO87tuMJaJ%2Bb4GOqUBnfh2MvIgb%2FYck6e8qXKT2kHADx%2FoI6OIw4jv3JSqKC2f9mqCeNGj6ti1llGHtSpl7aN0%2FpUPQczVUHCn9IIF%2FLkZBvFgFO6iN4yeYhtmn8US8RoAphevRgGUN%2FP40%2FpfCRCjTH0ZcotDAIGlyYnFiOK3tyGA0om9%2FyhCp0EWcO60KPIKl78bLVSuxcyd7M68d7bz4yXh3J%2FO0t8hOrF0vpIs6oFo&X-Amz-Signature=ed05c291dcac5bade7b39cd952cc33d96731b53a46b095eeff869391df4991d2&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

