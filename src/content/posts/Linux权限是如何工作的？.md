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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSND76A6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T054059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCID7%2BsP3dDl26YZolFyV5Hn9ygx8%2FihZgEk2Sr5SLKDBVAiB3XLRUCTchNo9A6Zi2%2FwdoHyoSH1vfhMz6rV9oUUuFMSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYw1TmSWrTnAqsbd8KtwDkWabUmJABdbM515HTf6mQL5btE9PI3Q6zY0qcQieVeaJ%2BbEBXPOgVJVXD5Yknm87w5Yeuw%2FUyFgxIQfKfnVg9Q3t8HSqcQ8nHQPplR%2B2Au5FcUPAVuAAuRffkB6Sc3Z%2F6Chn6yl0FP0jkOhZ4051s5u9NnkNKHJVjkuCr6MSdNFjTXms6doMdeUHuRlIFu07%2FfveIxqqlAPSfnqO8Ofzjtqt9xtoIDgjyqt14jMlP6GkdK27jBGkQmcTxjSrvik7vhrijCpXkUabp8khhcdsS7EBLkm5vw6Z1lfze4gNkUyD7jPk%2Frq5Lpoig1PbyebB501JWREwvk9F92hnPXPt39jJalCNnK01rwF3joSXyyZBN2sNwnqXwkN9tdBRQ8ASFNDU8Z7C4nv9Nf5wMTSApXvcybbF6LpkdHBPmVQJU9GwiKUPggE67Lfbck6Y4%2BT%2BjPKDJou7rVUxNjByeGjnLL7iQt0I21inDpaCZkuszfOJD1y5qaVdoJBhPI71P3av1g3UMhA0rwjNr%2B0K64tHqAWsPKuRGB7G%2FrrpnR%2FHJZi6Srl4WrQGwIIvsDcmK6k0L7c3izqD%2FfA6B%2FQvnsYxSzQ6TZoukZqQdT6v%2Fpr8ETxXXIUOZFNLU8k4K%2BswoIizvwY6pgEQzHG6JppnCzrOzm3GSUMVirfHGQfBKD6j9EDR0OT9OZCFlvhtDuJGiKxFH12XgjMojR12Dd10Jh83BK5I%2FhvTNukiwG%2FWeRNIYsVI25C5scJ7vEwVhyz8EyWYg8XpwNfP1gjXAlWnDi22AARikMHMu1Oje1FhHJvA0cNpKrwMtje42hYLSK4n9Dll8UhKXEWrPDYPpJpsrOD%2BhO08xNOv6%2F9UAtfi&X-Amz-Signature=2725303fd9c51d497852c6324d403606864ae89204b4511654fcb628047245a6&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

