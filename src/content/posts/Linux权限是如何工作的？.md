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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBESBK4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDrwQed6coMZF2G83qea%2BCFK5NrFBok82bB3yH9od2%2B3QIhAM4Hf%2BfCsZTIJWp%2Be7tjoa%2Bm%2BUyUkVe44gqBLDGbSn5aKv8DCGYQABoMNjM3NDIzMTgzODA1Igx7WicLgFLUYbv6ZLAq3AM6DQHFhjpV5HoSGsS2Kx1EOdjDfbIuLmpiS4lm6hZ0NMFf6dj2k1qPOryngKonZF%2F%2FJnd6q%2FHTNNalMQhmV1qdyqejYMCW7Du069jFXxqFN02Zjcv%2BSr7zbmwpp05JKJgyKg48M7B5BsCCuQ27r3UPm9%2BGidfM5sq8G8jn5bKRmoPMhRQNTBfHrLpRHjoy7Adza9Txnpu7bsgP95xBti3ITbnCC4S5ICFH41VqGVkCf5UO6z6YG92rC2aW7%2BvQOp0WxwSQ8RU2ToIIqMSEUBlmSkW0pEV%2FcNurj6f6r%2B4f1ub%2BZANJ0uwRky9yPXwMIhlo6aodLTKCyjdAw6tQP3N6N%2F2UDYBjZUIhjjWNteMBD9DmCo0CS2jkJNEyoTtTX8qjLLL4kdpPSEqO%2B91SLZvk%2B5Qj06cB06hx%2BQmg6BYtmvPiCU3sD1LhO4VVXrjl181SaUyNR9LmthTHgbqhfQgg6EkBps7JTpJt1zH5bqpVGcWxSD4XbQQ03v9KffmSaFsaDFdTdQW2O%2B0iDbr%2BvOdLhsrhjOnH1RUOdxt7C2BJHZDqyh6IdEhNk2gQa3bDuwETCP0OdYej47%2Bu%2FnioLxTqm%2F5%2BFiTqphFJxz7uv4fQy7UixQW1aQMW97vkYjCj0rK%2BBjqkAaZvhjqvgNIKuP9PzRwzZhsgVnpW8vnkeCENUAZ8hJi7rDZt6qkX2FNhSzlB8DrEboakK9rURFx0gaujCwwLILICzkJGsi9F1DIq%2BihQZAqEneDCsyi%2BwgwaQdFh6BMPPg%2BJhGDVoKxKOZtToEYrTaudzKr5W3KFYHEczf9%2B4EKWhG41GoLoN47CUw%2F67Gn9dMX805Y%2Fgfvm6K5fR6R%2BmDY8tT3s&X-Amz-Signature=430d04c7530eb2850d8885d400e899c5453e2c2bd1e1b04ddf2e3370a2628c1f&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

