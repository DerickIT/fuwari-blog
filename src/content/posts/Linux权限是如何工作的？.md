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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENJ2LVZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T213324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFnLwhjzZKhsOzToXwCYzzK%2FAYpddW2SVCqM1tHwanzVAiEAkTFpd5TVZae1QzCFy0CU0d35vZscwWIyuqzki9iAvwYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDD1wpDJZi%2Bq0NfVIsCrcA3HNoCEXW%2FvOQp%2BMhPE5ie%2Fzr4bvW16vbYtoGW8c3KXgVvxmkCzwIlWxMjib1c8K%2Fjwemn2O9%2FAPXBCHqILmK9GlHYKpR4qgXFlRCo3eJxJrhmqaqXixhzK8UDpMoDgkksNzXPSDe0THUEoGtLbHO1BBoAiqLNZ2FoucKYdhosViQQKbvX5wwevFseD964UoP2NwFLkIXoAXs0s2QSh%2ByqBKcrX3XDFnW2XBOz1ftdz7eERLmGYVLc5IQf4d7XFE3P%2FcgKCYNdrjcOmDQuqWLZVHw3l2GYbyiXSYgttwuaCNLMpak5yGh5d%2B3JDi9RrVz6PXVMKZYRTJGZ%2FefaJDPsWxGm7%2FpD22%2Bm4AP5EtfYVeTi7W2lcENT7B8uVnak%2F1QyhFhK3hPLAVJwSkPxSUY0HfURqEYqA68VS8Z9cRB3HFntA9e%2FFN9Ggkd%2Fv%2BbqdSIue0zJHiRTeSkevw9O2KgM22GGegrjNmBAdSCTHD%2FqO%2BPlEqoovWeT0Wxys7jUL8FxdoMdRPiGUEel6n39l7x1%2B3Jrs5L2pYIV%2B2ebgKvWCRB%2FGB18ta%2BXBPe3VqtNnzvVp71VTHGh7AuuwIuBma8fngNHo4fUFxoUvVIDNN5Ifxly1oOju1R7CkhtQbMOW9rb4GOqUBhVqkkyXBufWKKJ5UB%2B69CjUr9YaS2n3yQ6HPz3H%2B7usoWOOaa1XgfqZvSDeeQGtQX%2FEognURAqOVxfla1qzNrU2kqI80%2FIAuhN%2BcISW0bqPg7tFr0HH2m8zKPoJJlxWOJjyhx0WYDbe8TdC%2BWZqixpVM18v5vDlM5gMwjJoE1a8OAh%2F2nOs2YrBEUO3lA84H5DgF0otaYD2ac8XoQ7m%2FQr8Z0JXZ&X-Amz-Signature=39213000324f272ca02c4b63283b156eb9e66cfa5e07fa27219a062aa757d6fd&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

