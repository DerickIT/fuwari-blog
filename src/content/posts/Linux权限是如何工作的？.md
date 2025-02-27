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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYHTIKT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T054003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHDW%2FbZ8f7WpPqNf4DK0%2FlHoj0kdlVTj2cLYvG8Vd%2BD5AiA3Jz944KZXkObKXnu%2FwUlFgaXjLGf3fgwLZ7%2FhjN56iSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2BkMWKC7UaqeuIH4NKtwDr7ZnXaFIWliwAvOh6KmwRqyTg5p19n9wQGcQSy2HsYqvdmm96PB%2FwGK967qd4l5TspuJr7RcMR3whR6Bvx8I2UQ9I6SxfsD9LAzke%2Brs%2FBLW3CEtTuwSdN05NQly7PZCrWSqLe6cEcNtIhriesRJ5aDTvFMzvtjBgT0XOfm%2F85MARiruud9hpka8Ezsjej%2B2wpfMwomG%2F0zxAjGxuePlD8AUuj07wriF%2FOh%2FpqbWAZ%2Fc4GJ27lIO96Vb1ej1S0UIpzxoiEklEh1TgT49hD1iU8i7MPVdfYbC2xOMYNRBcSAQE73P%2B5Si7Fr2kGEOYbt5txsg0zXw%2FXY8UNmI7%2F7um%2FYnwlLC2QV1NuxxhlF20o2PBDeQmzyf4H5tYLIU2CKztCfxCmvUgJgWvUXssELQ1tXO9hVro1n%2Br%2FSbTByjcsyDiLeUCrbh%2F8Yv5wB5MGf4dPLFz7W8Ibs4jFx7pFhStfcHeldenkHWCZiV9vw%2FX3Dkv8C2HvCeTonKw4H75sn1MXSWCnCzLKxDXslSzSS0b4Qt%2BsnFU6%2BzdgkJgs4tHdO37IrqrWXNzdyVYKlwHOS62So5%2Fh6e%2Bd0%2B6YFL1PwKPfZQDvd44NngGLYsU0qnW%2FgKmI%2BVVs1B1fL7NF4w8Oz%2FvQY6pgEyi70eOqrLSw7UbsDNIXn%2FhFsIHLj5SBNaYKKsQKBh0MmUkHfO%2B5kprtfugaVnRCwAQNRNluIdY6%2B8HrK%2BCTWLHG9TCF5u1dCGMzkiotCoCzbFS8KX%2BX2FL%2BqBBnyvTP8oUmqVtouKbdjg3EKz4gcgp74083HInSNh%2FqJqH15QrPaWIcdvbMvFIk%2BL5hLLe7gvNt7CNDPr0B5nm52iED7tuiUAPnVx&X-Amz-Signature=f960e2a1ddfb0ac80dd7cf5479e329792bb64f3e1e3dea5b5f8fd966340fa45f&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

