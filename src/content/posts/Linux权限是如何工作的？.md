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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJQKYC3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T053902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCL4VmVaE6m8%2Fy8zZYeG3sD7GpBCtah2raeArudEvDXTgIhAITXlVnDFr%2FkW7o8Jk6TiHbqWMeAvJJV9kQzutxdWdsDKv8DCG8QABoMNjM3NDIzMTgzODA1Igzk30z7ckXofpbW0i0q3ANcAQAU8CqVuXtkPep5fUTwIs5ongeX7304rq9MZ%2FrNxMbgegyZMJiNTcDEPRAC6dDadDYh1OYMzAFRfzo0Ud8xfaVdbTU4KqufLhJXgto2GejRWQ1Xwh8AJfYdxiFGTjyOI695n%2FH%2F5hqQ1tRqP4Ncm7DuHUfN5Yeu%2BXquNwJW%2FQjqAYluB%2FFPVlh5oW3TINi%2B3xAkPV27FSZDpxY73NyhgmR%2FT5fFAj%2FWGXnk8kNB%2Byi8Y6KxnQRVt1j%2BvGOizck%2F79fI3t627OQ%2FZHZOIY26mjoMSBLYf16WIsYhpdNxBj5pt3oy5c5a2WLd0z6Xj%2FswXA2mws3S9S72HWmiQoUuCtLBEYWGxTH2mvlMVNJa7eJLQ97SQ1KN5REa6JAgds1bMXXGVDgHFi%2FhhDrupSZS5s4JBR4YOFp%2BlmmFMr2uWc2TNH9GFCEkCJ868W3O8IsrbfGtDGJlmCouYpyQb0o2KX%2FGjCCUMmu%2BpS1h3j8zYPR4QKPOzN1vXU8O7Jx9tWN3pmGWCnsgu9uxpZoNX9cKR3SfpGV5CUg%2FPhStyRQXhS1adiYDHLuQrj%2FqzaUZPXTIXR3SieMuUMdWg988kBSKUoDTjnbo1UyfuKYfS0v%2F2G5xmd5wgQrfYzaFKjDKksu9BjqkAeEdcAl7PGdjv7swma25VcLba2EQ02SUHKTSVSTCXPYRvYRZ57xf%2Bg%2FOMeNVKDMVEzUfSEfggMJgLLK%2BFhua%2BDobWeFGchAfJfGAgoJSCmT7LPvnH%2FRQn%2FLfMQDSUUL8FdAQKYqnuk2xKOuqF6CzYzAMmKiw5UY1%2FMndUV3fI3X17ufNus%2Bl33tl7Erxocut0roA3YnJRJYbO8IiYDzZA8ZlTI28&X-Amz-Signature=e317d0496fe8eb0cbca372681837942ae2e471477d11e6025e3719163eff8a37&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

