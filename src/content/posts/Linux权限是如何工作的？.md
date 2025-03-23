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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAESQJQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T213311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSllhEksdrTGnfibnkrvOyznmqyBr8rLfH02SUHdrVgQIhAOJ40aLf7e2%2FA%2BVeAN90Or8hFGUh6NvYdqSo0Hp1ZthUKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlcZ2bDhPrt9jkNMq3AP7S6Uy8JoTNHvsJmp9Xahb0NDh3UO9DCNL9Z6RP1Qc1vhkP51HWxzqayEa75qs8WYZQ14vdvlH5ipwhlgTSw2HYawj1452hBlUwMxlIAMzyRdrZ%2BSP5PbzXYnMLxxJ6t8CsyCwP%2FTO9WiGA40lVTGgvkEwHvRknQAj%2FOixorEv9V3kXCEF4%2BFP1GMSEd6fILk%2Fc3HHAYt4wP6acL%2FxNiL%2F9yPRPPWpuEEF1YpGIPfmCD5s8ArIDF%2Fumf4k6P27UJBN6jUgzORwWGogb675NSn6tC5IkWKFPqe9Uypersyu54HyG4Gwfojc6a2FD9MfHfJnVqfK9%2FH5BiNKt%2FuIgwuxGtgfr8d8C%2FSdadFSmsFL6uinWrctyJUCDfxAoRBo1FqC5L4JvWIePpcFc8rZeKJimwvjyPXh3X7%2F1mouz4otT09g%2BoOBWbr9Hm3Oq7y1q8mPsbSEPxMjNe6za0FgAinJ0FpmgTZ1YCCeQSu67qRVMqDQUib4EZyDEmdk2QHVxMNIeW3%2Fb%2BKz%2FneY%2FziGCBzXEwRVqxtUP2%2BAm1A12iQEH4HUQTlq9%2BRVmuKVpNmVh8X68QwhqmyO0jdNQsgrN7gk5Cg1eiXbw7kD0YwmpUfh%2B8t2C2%2FWdhmoVl6%2BRDDXyYG%2FBjqkAbXnhu3Pb1t7MWt7bfXZx7l9wRAt7wBIWkunS7piWb8sFiI%2BZG8AJ3dlMkYU9UXGte9YRS%2BQLZ8b1ZKoVyuomt8ed9356UZKyo8EyK7QuzLBulddPW0VF36C0%2Bd6Z4FAhOSlsfiegD%2BNqR3c5d1IUwq5SGR0qJssCvMLuSFv%2F2ChGWTCFmfc2eAeyOh8BhQRI0e%2F%2Bu08o9BSUlNDVt%2BfTlw7LGE3&X-Amz-Signature=3b6cb50f9cfbfc4ec5ec835586448b71f9168885431820e0773cc3079b7b94f0&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

