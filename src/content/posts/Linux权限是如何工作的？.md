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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPY2FOLT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T213613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqCgOK0b9CEgKLVxQ7IsnWlPZHKStvmAJ6B9UlAHdazQIhANIK2FmMwEtv8cdoqEEfF4dNHWxV5UuGpo2Lt9MGRIqzKv8DCE8QABoMNjM3NDIzMTgzODA1IgybnMah11Jw8i72plYq3AM4lq%2BoXn6NAEktiN8ca3OsqGbchoa8ca%2FexT8WLL%2FsXyVdbW4rrYAigVIwdN4el%2FYZINtQeaOmcW20nIYtvGQTv%2BmmFkUQl5CmsTreh12f2PXnBGmh8ZEbUFohyCFHSXaiLHyW1WGPlPHXrWvTeqq6laPZCuB18kKiLCpuQ61AmWwGtrO8ydRKb0xWUNznjCBsgFZmt6avgTqJBtnqdvEscD%2FXcBialGY2a%2Fceja5OJx2zu1UR8AAwhj6P22Hi3U7GpJT1v94QKQsM5TWBdBFaB2KZMf0trbUtXvgsEoEW8czTKkMzSGa%2BKXVo9wUqhI6TVBVVJMFZQxNy5XkV6XyokBY6DKzC0%2BPzUX8ary9bW4COB06tevNFvGqXvzKNPbN0SXNm%2BvrAJFli79JhuOZ9AMkDXcq5pqEHnY9Khfinxr0OIc3ikodqPmCrqWW%2FQf0R%2B9RCr4Effk6eifPI046jVJ9GtLMo06RCGBk275EDvvIQ4lCpjjx8jI7n2Z4EGfYIR0jk%2F%2FVX2ycaHB8BRqdPXZypR3vq%2F3ECqFh8w3viXToT2ZZ2YsXnvZlpbgqpQenloI71gH%2FFW%2Fz7BkSa2Aao9SCvJy8UN2umjQKm0GdLtm2nW47OzD68R2n58jCUxYDABjqkAfZIg4D0PzqDAsZ%2F%2FW%2BMi08fiC75r4kI3Komxy68wbsAaxCY%2BbVGIeoqmBqIQUm%2BCq0EnHezPD7CLTdrvJVbONDO5Rhoskb47x5vqV4MzdjWePo5b2%2BWSvdyTb%2FRxYBdqMR3s55IcWh1SxVz%2FiObv9gGl83Ypm9nL7Zl3dtHwz%2FwhSgCPlrMlG8R86Jx6xqyHMHVnRIiCcGtIMErJKfY%2BC4SYKom&X-Amz-Signature=1cad17b2e9a7d85a11c603d4407877b5d45fb16dbff2dfae71be81b11ee5f4ae&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

