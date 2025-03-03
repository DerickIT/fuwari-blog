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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU5V3IR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T053850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD38OxbDpfupcff3C2c9TEQNIObvPNYF8u6LWBCLE%2B6vwIgYCL%2FnutHV52%2BF8CP5YuHkETliRc5HQAUAK4d1fckyuIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXIZUVK6dnhPwrQBircAwW%2ByNouw5DHNhkbZEnlxN23ydFPMdWpWhED%2B8wcMe97OgkT5z8moFjCTB7Y0Gg5UzgMN9awbVWvfytcbzYG7HH1MZH8ZkYI2mOorWKpZgdPtsW19wzuGYXLAn2gFeCeBzzxCzEJcy6vlv4Tst%2FkvYmYn4bf60OPAU0vvcQmx%2F6kW1Y1IL%2FV3RbI7vGJ0OOCrzjhvPgy7AlHy8uvPSpAkueQ47O%2Fo%2Bd0icamnCtA2OwwUCbiaKSYcve2n3OAB8gCD%2FnQy5a%2FjwmkdLQNU0TZ7Qxl5m%2FZBPnbtfNfqF1%2ByF%2BM3Ap1kkslBcBfRQNOz6MCct7V9AuZ%2BP86UkJg%2FocSMiUuaJx%2B7RvN%2BQBR3UhiK%2BRnmOvdRl12oyZ%2BJa49gDKeWYaWRFp2yORPdLwDvzuy6Av2OHysd%2BR%2F2S9zAfJdlzSTSTS8SCsOyy5TFZ9CZJ8iCFeiOSEcAtGgN8XWIqu%2FyjVxQYxJQwKBFbB6DwTx%2FqUgvN4WfdA%2F3jzzzTTAA63jx0D5xflG1CcokIAsGUjrZJ9IIaKdhrqns26bzLSdcdzkVRGAGEibDxYcMUAvy3UKwRJAD9JieznUqwb0%2BeqxDqyIWVdMimjEvHq%2FdkIaHWt3g%2F8XfT77PDzKgYCxMMD2lL4GOqUB5q4%2Bs0TvKJzrcrx7%2B%2BG78REFdZVXpJOJBkWKUnCvcbP5RtL1l4d2L%2BdzYvos%2Fbf5SNboJs1FVqNl%2FYfhhAJWoSoY33ff8Tc0DfAwtxoVqi7%2FrElB4%2BH%2FvAPI47CdliCqMF3Ip%2BYSUBioothgZpaZLxGFAvpLoe2foJn0N1HmfSVZRot5%2FU6TbspWRZHpxDE8Z7uM8c1vLfque0GsLaliS8Mc%2FQEd&X-Amz-Signature=ab7a51559a943690b02111485cca3cae60567c1517d9d0a22cdd1353e62354f0&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

