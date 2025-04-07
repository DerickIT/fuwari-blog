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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTWIA3F%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T213635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNWqrT3%2BieeE30SrJFQYM2n3CWoS31GPhVTF0jdW08gIgKM7DYn1Mpacz8Q5hQ2y1uxRnSW6T91v%2BZ%2Bus7QJ0O8Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLsdxFM6wIzlImhfDCrcA6z%2B%2Bk79H%2BWYuKwpqqM2N5lDKH43ZB9EDDbk%2FCAANgjP1nv7api%2BcBbkle5sY1K8Ina8r7aYllBF1gFxa6FvmLtLxuy27n4TTyOW6%2BNtFEk2gmcfJP61kgU3VqBWXWTSt1u0ffVJbodZNoN6ukbbDDBGyHZtIrhTh6pCHzs0sX%2BV8SJIFRxTm20z%2FIG9CHuEVFWVe8jPbSjb%2FCUHaugfR5HUJqXh6IrAZVuHN3IyunC5TbNOMI7GzHy2d4GwKRmPnq4UAI35azSF0xa1ZqDIbNaKBh9rfa68hXhvl1zuQHFxFc%2BN0qngduoWd1R2lwgoJDfhmyZVT%2BnkL%2BD2sOyKydF19VFUbK1V7bo%2FHCP0eAXyZ06%2BiAQQwkcpKeIiIe2yTdGLW0kCisRZ0kuCSNTuMCrr0D5N7aTFCbBC2WmoYtJ06BMQ8fbHvgXZF0%2BFlqT9S15VEWwk1%2BxpVQPy%2FEytw9jzXgwKc8Ku8RFYav3EG2nG1dU7QoFIMiOvqAVQ%2FefFRsnr7yTVKCLGVtBAo8RZulkyvUVIVJCe8yA9%2BHMVfqF%2FmolFkNxTlu8SJsmGZDoDm8DOxYfmzselOjd4xROZyIHijchkzBFzXj%2BfRaYl7kFTaQMpA7fTnK8hUihvMJWC0b8GOqUBIPq8By5B3R1vzqyAi560BeGNuZ0nHO48YzXuaBIQiWQDJYjVcoiItyEKkJI0tUZ1%2Ba4OFAxnIsmjK%2FbgTBy0LtMRMtfLxzoCXjvy3qrsV3uq6qBR5oJJM9sIcX2cOC43uJoU8GwMW8G1g%2Ft2iCr6OBNCe9d02MF0Z3U1RZQt0tTh%2Bdwjh1f8ZSS9t7kOQk846879I4TKYQd2eYvPgeI0cU9c7ZIE&X-Amz-Signature=6f38c46b432c2490a60af7b494fe8e4213bad1eb475624bc12d9a3b085913e36&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

