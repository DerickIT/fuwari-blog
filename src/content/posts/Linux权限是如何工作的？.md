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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YIMINW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbsefYUiZqAMpSibdPIYrZH3W2lhTZBaXaFTZ7shreLAiEA%2BQ2NW6X8Bh9Wv5B2UzZT4eF5L0CN7cZAfYR4xA9GDKEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEObn3EHo5oW4B%2BAACrcA7TJ%2BN%2Bw8nycocsc9yS8ch7d5Bh8rf6e2EJNWBIevFrIhJd%2FM2RHk11J8KK27V68if%2Be91gsnBGzP0yfBMN32mdpvlSw%2FmQJk%2FFgI582ymXUhsDfdhm5jQAuz21dj16nTRSIrmzgNVptyrN01dZWVB7wwHwwf3IOMl5cEmXAIVXec7rtdZe6jmKPCjjWPtWbxEzTA9mpGQ8Zg%2BjJyThKghxjx3wSeIAKJp3UcSHezS7nHmfnRuUm6Od9WTJ3vqIO7KGnBJziRdtPbzs3h80F63N0uy9vpUORKBZtHVw23Mh3fdXnRl2QO%2BYXR9vn34G%2F4PrCoYjUOGpnjnLmMEECk%2BDx12%2FX1BmmfZ%2BSfhdYCCJKWB7DsfEZgs%2BOcpVTTRfNxHlC9QIbZtPBgalDFpahufK7V4RdfiO2IrMBBEIddIJqOv2m6N5ZVaWSPEbyzKMq74qOZrbOyJ32uQxzbz%2BQJt%2FS1WW75ea%2Bd%2FwiQYey3S8xmxfmyuByBDabxrUigWSpsZjPUKL6jhe6iGvQoqUM7ey8qP57yk2ri0nqRp6e2CV3YXRVsXsFsqj06RctsbH2Q%2BXNO3p4%2B0l%2FNDWq3ZgPqLHFfS3q5ucIetpcMqcIC4ydpPPGDIKC9%2BYYWoTPMIDdvb8GOqUB7kfScElSsAbCvpXkfSfXjZKIAgD1jLMFUNBU9j1SxcDpIckcirqqsZZtulaG9RBsxOvcB9h%2FmPKy3qTMhoAqHmG00cJzfi0OX2ti%2BVQB%2B%2B%2BQa%2Fzt55%2BZA%2BWZjj4hly6KjrQWRlmhtqDZK2c%2FPHjxJU0l3pgs1kqBFbhtvWJXnaPodkppxmDC8KCtMRLnqNxDv9S7nlUayxmt6OmrDr3pvQwT0C4O&X-Amz-Signature=2453fce5a0182feda3843f99395fda2954b5954ab9271b2776971ab7833136eb&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

