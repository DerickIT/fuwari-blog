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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORBQVXI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGFYoi8rXBeqmnntRhZS%2FIshlRkSqapMjb4pr7wCvYxOAiAJITrY%2BF7Ppjr5BjOH7bo3YfiWtjhThI9i5D2dTgSeXiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUb33ftDI1gy20l0vKtwD0b9UnABOTOhpbZVkER1sgAu61Pt9enyGX7OsysgUHXlqzrEK%2FcOHjGKbOVG2YJBgz6MTh1fuAWkoAUp%2FVC5gZ9eCPoAL1pYD8e9PJy%2FK%2FJuQA7wlcRP0j8yMtmEjeLLtjf8kcxkC0ib4%2BgLujaehtIydaSnmYvuDn61%2FX7QuucvM1Lw1%2BlnfdbpGsDR7HAMbzUgq30tUrESK%2ByutLexL9d5cT2ny5o0Y3iAO2PuH0cWvCoxb1MUs396DDFIeRWT15msi4JDQFEtvS4m1dmmKk7noaGo%2FGOkaX%2B0Wxk9BG25J3VqxPYkZiHvbI78eKRNY9Gt%2FpaG9V%2B0J5QFM2Wza0UHs2HstZ0tfAnPHH15N1qXoFtMhFAX7a94mAbbamANUjw0jnez6Sd0dhxmXMz47Y4uo7vJgN4W7qmjz0ss6aDdEzL9MisjYpTptPqn%2B4BwW%2FkDIc2sBGrewTe%2B0IwgZQBiI6k19as6DoC8bYMWEaHJ0LGeoyId9jKhUZTmSpzXchLSq5jVUdmtUAFZI2sND4StlyRKsVyMwz8Qi9HyPFk5jWAnJdLyiA7h6p77K2znKN6B0VUTOm2qtirPmjDs2ICQE3rBjIIvnNOvL%2FpcL4m4v3m0NpL9Vu%2BNvAaMw5PDXvwY6pgG3ku3ORq64QHbbWk2UdEWSGlZ126SWv52Wkz%2BKnXpnjrfh0P30Srekgpuiw4gPtbnGYXKbkeMdeVt4rHZ9FYOFtUmvpWPNcrdTK%2B0IeWbNXw5cu0IUokexzy3Oqd%2B7nYA9NH%2F5WIujIUZCF7x%2BweqLpQ%2BHgwJR%2Bx9Nt171%2Fx%2FWK%2BLEs5l%2Fo7HwNg3ejDdP7QNcxHUiPP83KxZaJOEOkz%2FrGfbU7zH8&X-Amz-Signature=f0d84f4881154789c289e49b80815adb74ad72de167bd5ee7c01aae02b40fe1e&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

