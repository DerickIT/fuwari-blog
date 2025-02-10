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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJXRZQH%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8K4T1FcFNsMYCe4JXYq7awngo9zwKi8HEdgDVgwb8mAIhAK3LA1CVmj%2ByxHjLJPgU35kwchC7JIByieE6YzlN5etxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyHqAom1IK48cYX%2BYq3AOewsVGWWuOg1JEwnuOqwn7aE98pwvsQmlevOjPXb32dqezF4ISXqJ8Zs9si6OKLRYE4mQQoWix22gX28fFJmu79nkcm2McAsatUo2gKj5aY7N49oc8SllGiFDgTFuUOlCoi93vqzSbR2gVrY550KgfMDvC4rbxRbIIAyWtZcrR%2BbLW1bokvvV8tXQCvJ9Q0T4Op0JInOXQ6xnge9iBmT43nyr07EHi1L3LfEoggO0qLnRfZW5kUbqsVAUNaDS3WQeBq5fEQAgCl7jtL%2FKUbzhXL%2BYSk2i4uKsyhzcQYxnU4eicceavvYPGG4RhlrHeO%2B4avmqR5q5rxPHl5qbzDJ5R3fWv4cSjOwKLktZDWyL7mz8DTZ0yz2U32C2eryW%2B2a7dtsJXmI8%2FDZ44hIp0UAhX7Yvs6PYskonbvqNyen5%2B3bvUggg8N8%2BqrqobyRsQIRtxboDGbiZ%2Fx5XM1GamYxiqAKcj4ZZdLCJcLeUnDvuFRodeIoHKxBam%2FliUT239jHNn2Lf36Lp76BRCO8lU3SDjoYEpuHL2MLqofu%2FBNI5BCabqjm10eCpXMjX%2BqaPcWKNx1dCkqP05ThLNlFl3alJ8b1wdkZ1I2sl62D7z2hk8v2MsNmJRJZOwfLMHJDDe%2BKW9BjqkAfjbxWId%2FB7CSRlM5vRQtX%2FjiDkwb0oBGQ5CN3n%2FXd5q3efPPZ3m5Nbr7113zZn1cV3J7dgcTqYjQcz5F%2FVsSSFo9qHvr5RzlA0qHADIaLkvPSajPg2CYMbmJjXTibqcqqShbm4eMayMhtVzc5knJ%2Bx4syMKBsrkOvUfDfxTrT0PRGvlRjtaFgF0UOEbHIWQsbtxKTipsZkAuXakljrOAqiKajt7&X-Amz-Signature=bc787e143916ffac35bfa70b60e9b520788bf2b4f0da9aebe9b6ad8d1dbd6a05&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

