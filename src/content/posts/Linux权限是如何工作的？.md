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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RIRDBY6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T213357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe9S1eigf4nijiViZ%2FggQygiRqRjgn%2Fx5o9n%2BnLibMAiBniM1FZRikQZliRGYJKgevtMZQACSx5HvVhI93oHDXYSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMuRPLGNh80Aj0LRs5KtwDWyJx81KlsmVLn2EwkamSpvJ3d4wbUqyeXzM3eRieNr1InMsjN1CqGyiLKmO4zYf2v23zkfU0lSQbfw7FQoSZl3bZqCOXSRvXOAAYRRClztJR4vNGlk6kI9Q5qEF3y9zDbIGIlYgQfBTt6toptqwhHchjq3zQeMXBIycy5jwOaFF2lKWLoGk8sMJ37u2HRPGx9Fm78kGO9hRqCsh%2BIT%2BASmzlxTiEWhRtt38l2Ajp0BfszUSzfNsyYa8DhTaEt8hmXC3eZ88Xv1%2BJ5CnL07jVgG%2FPH7u9TEWv7VGaJNnFmNFPslQKt57hWmj6WKmGxbf9X4Ix%2Bz4IKkR9IMV4MEC3o%2FMRhvBgfd3pMLJg%2B03nXqumdUyE71F8ygEY5Jr2%2FVlKKjPw2iRnz3L9nVRvnw8FIqPlfAfq6MG%2FUOsmnsU%2BByGYt5R7yWdkjfbBOeoGGzhLWMZds72tIAuMOoVHQWkRBLXqZAXWNQ6%2BG7qUhzxfTyKNc5BZh8D1DFRE4DjiE5gU1h81Q4fxkWqcHV6N5VHQUMj8%2Fwj1YTt6qe1UnOFXyY0MI%2BJsNNU9krwuDFP%2By8lfniewgDfBl9oKcB%2B3gYUOWnvk%2FO%2BVoW5eXdVuE4s6wTjZKspiS4qzBzvbjxkwgaHivgY6pgHqE7NBaydtUQ2xpQOYZmGQTGQOW%2Bb9GWHDwblKVozssL8cAy5AyHcOTuIJIBPxDSy%2Fg%2F9VuQIm4qYnTfuc35tPUvlrDUTnrbAaLkYgOYk9rieo3eVeUk3W56NAYYiFCr2o8r%2FvGdqHXnV6SXI9U3k9qMWi%2BKd98xNpHg9flIOctgKBmSKD4aXutWYmDZaIl3ZUIKz2zUQc19SUM6LEEPXUWcyVrypp&X-Amz-Signature=1e0403937bef0b081eff9c212a463cd05e5caef1d4375bdb5abbb71b747c8d8f&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

