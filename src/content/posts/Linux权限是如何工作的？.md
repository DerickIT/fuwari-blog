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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRIPDY2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T213257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoy9UNYpIrsZX8RsIIxLbvpvID6VnYtN%2Fin7AS4W0%2F8AiEAyZavHg%2Fb9QnlVAIgKjy6%2BCZ6Q5Sz%2B%2F%2FthOrTvI1I4LcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPRSspv8vIWlCXAQircA23G4PWQw369RosxcKR3Mn72vOVHqhWqGXdFMEnAx525g6mgEm5eRcmR1DQtDCfkl8Kr4hKoWCPGLNEiB8aDGT%2Bncd3XMecgKEhAuTaoHfottGcGNOAVzuLex2ZkYGUSbap%2BfDihvOOOdkhdHknqU4WPI4m0nRplQDG6PHMa%2B%2F8JSW6XPepkOLOen71Q27y2RCTawgyxV%2FfD6iHGZ6Qkgl0ygYQStC37IRXgvRDhKHC0Vz4FbZme5PO0neWlvP%2FIGAyP%2BgVCbc7BRA6Q%2B7HFTm5SHY4LM9sSDxE4d8CKG%2BdPFDaNpc5LD6Q3jMRSGKeUayS32N9MiRxX1%2BGHQGj9%2BKHCptMwkTZuIlaJXeiDxTOAx%2FbnKIXKR%2B8SHDbMIhauUtGWCSVDUkteSUOFY29j5YG%2FTVTb6tD5ngq7sHISrSYBzeCTVp7Ep%2BlHKRI%2FbL7P2Sv4HNie%2F7xJ6auCC6A8gWYCr1zvTDUYBeV%2FFG5SGzCAHc%2F81rGqnp%2BWRii9xsfXHXPlp3gQNn8y6cTwUQe6A26Zv6yHQeR5y3YyjsxPxbaVZvBJcUvZtDm1eJfmmQIXL%2ByL5A48LKqCbsXg4Vr6loYY2PDCSKFDO1WizcfQzz3PqGkHv9iynNAtP6ZdMN%2BL3r0GOqUBJfzYcPquMoYNmUZEyXSxVuoGeYZ7uo10nUCsjLZNWpQO%2B65cGkcTI8sbwGgNqz3FSg9vjIu7XSbVsD5wwKGiNyNckKMKhiXSo7E0l37llnhaKZCn7nPWnCi%2BC0BMjdETaHl9clWkepVmsbX5B9r%2FTOS95qcfuuV4IZzOWvjRqtqiWeS%2Blephw0d%2FawEE%2BKDQLqV6uvMfrw6IO1cP5OwVnuQO6aPa&X-Amz-Signature=5cecbfdd5f046f9ab520d997d96afbbb924f2c202e0c9b1b4cb8f16b83767299&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

