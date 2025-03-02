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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZNPTJM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGidxAkO1x85v6gjeuQ%2BYnVQKwZaYv20IPgZoZO5xbEZAiEAwocL%2BUHIdJdBpZElxn%2BJwhAS6WIe%2FqfkpBpIqw4wGDMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFYvEPSduYtkqxOiyrcAyPxsgTGmnTQeaA81%2BSFlsZKcoZgECMD2dOL%2BVoqDHm7AtgEQH2HlbSJQ7qmBCckdRfX%2F%2BGNkTJTn3l8gIQlB%2BMqUIlD4DoLHlfrc9mi9VR5k5gX0xo7tLRDxKiEvKtrolpUhSuNFndMlnJ4%2BuUTWXiR%2B1NoPmiez878PGNnD2iFr4LjuA1PRuW%2B7x4ZIlzII3nIYDQIeMSm4nCczoYy27hDLhiUwAsR19mk%2B7zOyJk918IHLVuv4ozncs3TMDV96cvZ3%2BXOsQ4RnNOq%2BtFBZidgjMwWrvjaHKiWvpnPhlUQhDDPYJlNHRULDgQZ%2B6U7QHvv4VDXkjbSmEmPkp3G%2B7oFm7%2FmVRpUTLSTCrcxWg%2Fio1NbftRI56IKuBqVdlLOATdMbQyYvqsFP8g84qhsHg%2BiBR3rz7FsUm3K8UDD1fF8f7nFcwMEAAD5KuO5NqeXBXyja1RttJVeaKI%2FC0bpcBCK8YJ6RlPnnFbPwSOCqPvS9WGFarPztD%2BYh2feI3APr5ziptSTrpl82dEFXWeK7a%2Fj%2Fb73OXYKd4sygeOR9MtTyN6FmuUMmPhQkoLKE3Y%2FGEtRRPwwMp1UKQHeGFpnVwYmFS2oOr%2FQj6hxuOaRzMn%2BSpx97IZ8purJ9vniMPTVj74GOqUBHBqG5AHHS2uixb%2BCvKv2yWPD%2B6PS7en13u12%2BGugXJZmr8lkQCeLAVCuIdNGCYeZQhtsopUWC2qzFDV39eILtNiw4CY%2FiO7nBv3A3TtX8%2B9ZQgwvMtT5LTU5qU7YNUZ3QKkdCM2dpH8XOBbEsewjgr0A8oQ8akA0aV8KVnFxvkN%2BaYoe17ph%2B%2B1xlj%2BbS8SjCEC%2BYgXDcaN5DqNAI0De4F2%2BMmtn&X-Amz-Signature=acccab0d227b177fa49d2af9d459d46cad3dcc6287cd0ab7ec96654f6df6d340&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

