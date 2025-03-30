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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOC4GSL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T213237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG7mApobRkOObH%2Fu15uaBEfMS%2BOK1jOyj2TkFSN2vl64AiEA2aAPcQXKclcxXd8nZ58nLi4pLMBlo9XSiqWsdWGFQAoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc8wC9QPG6o6E74ECrcA4ecKu1fwlmsxPGYjtBvzExlUnHbVzWxojg8UtXdwuB7D5Ra3C2isNzzDS1Xh1ULk58pNbySiZn6YAHN90h1ScUhxLTdRxXZLKD4VUU4bdRNpMwu5FZT4atlFVgdfJMUwIM%2BF%2BcRPKwfbdwcVzHhRi5hu38aQjNpXwbMaL12yIUPNMfrXYvTygn0squKh%2BElT%2FgGWMikOm7pf6OkRQBOhVxhg61Oydi8MjOqMEu3ndrk3SPlzh7XofDHOSUHWmqbTnk%2BMZ3w0gQpqWPN8AxmMkSU0PpLd3RFS%2Fn0SBJPh1XOs381fnVUbSdddFdD8tzZhXmbldnKagzdn0KcYC8AeqhwqOOgkOCVYqPLTpx1Y1MjRiQiafk80CrdXxh7kmqX4oUY8SrPrj2QcnSZqd2jeU4TQgaRrhF4yldmb%2BXyuL1nslLyMbMyEBKCyfo3Qh0xOo7gR7sUdGfiKYmqxC%2BrTqRWTpC%2F%2FzDEw04u9qPtTjkSRppm1ww6ep6H3kkgpdzpqseTftQhOCyZPmhwDDLhNMasGgI%2BYtlsIsDjraJVz%2BLdmElGeev%2BirpGFxKRtUt2JIo8kRTIyoKyXie3jQOLQnIdZqjX8HePtil0rRDcS5LyzLfhQpbVIFbh%2BGh%2BMLLWpr8GOqUBNuFrPlU4eojOiKZxk0RJnUT5vfTM0ZlxUSbNmKUtPP97YQrEaUYkucVESVDXLnjF1UuB0NerOXiiG%2FBVuTxJ4KV5K5SGLG1dsj3aqtKeV6620Y%2FI5yDBEr%2BvyXI4mRsIkv7GqleQR9XYINQUpz7DvpIVlhLSuTPhKAIACjhsxXP3ZbLFIO8BuxJQEA37%2Bu%2BkbEvRkS%2BJ1zq1pBoMe1fHfzGE%2B2h2&X-Amz-Signature=8d392e14383f387cb89e9236b3c693dd70808330c10a532845682bdb299b2b91&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

