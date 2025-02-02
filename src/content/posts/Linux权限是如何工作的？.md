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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZJG6HI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzcOY0%2FDJ3heo1VcVbjHTY5Gcw0kVPKmlJn2Ut%2BlD3wIhAI6DhPB9Ykplg19Pn2F%2FE%2B7iHV9tzPJ59CF6qfpRM4g2KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY1ina2TJTwmzB4koq3AOMw0QFeMAJTfdsS8N7HjlK%2BrBGhyU9DEdKX0q9xBae8pQzeZy5Ic%2Fl8FUZ3%2B75toviP%2Bs7EwhaVXRNCUm1W1MJyHZWAu5fyctbWlmVyY98iOxL05EA0Qo%2F6yvRXL5z2dLgSwsinRsrW0ePycyxKCgREXZNKjyNVvzmrgrEBHXGnyZPET%2BGi6u37wZuR0lAJfA%2FTR5T8Um3iZZR7dlg%2B0qmmdvGb%2FkzXPwtR3CuhrLOvQ%2BmtXi06mNRynmt18KE3HDrvwcQOuEImYeX8GKS1AgcXGpEmOpUK%2FtNlxBdvahbLpulVzAENbGceFw4vWml3Yt67CTsfVHEBun76J2jJgA9KKy6Yy8LyDlyh%2BD9NwVtTIG5VmfD2c2SFJHd9YsRk5icOxkDkAUVp02%2FOEtbh%2BrphWci7CQPnLv5f9pENTp%2FMseolmGZtk7VOpIhrCt2wztROq97lJD%2FDCl17PS2ea6pG5JBO%2FHPzsm7He7Eym43iBNlk5du5Wc63cL6UbCg5VlA3ExWMGQUwSgZMzY7PXwQKUISo2RcUrt4RsvOc%2BBoUwIybHXEvBdDzTaPWnY%2BKLlsXEaVHHhGk8OJe%2Fkq3HCWOqK%2FVq11%2FmJvKflmXR%2Fg2WKXuYhdRb8Pxz608zDytf%2B8BjqkAbe2hTrJ3OrrP2TCoJ9hsondp%2BI9ZJ6%2F2nwAwzBZnx9nkJraYFbwwraVDMTNbQVPEYxSMcQBRdtzbWKlk6ErngQHYwwZLt%2F2GKPDtzj%2B%2F%2Fpmx514DcrS3ZjDQU7oLW9Jna3Gt1aZ4kYzp86iOpPnreTkEQOJjutYuTgCKMBpRQyWHTlAuLMP27KfsfQgi50g5Z1xpFb9ykLj0p%2FjRWu8NsNZlTZa&X-Amz-Signature=b861855b75ce4a7a78521dcf94ba35c9a4aff720d066187d1582eff5da1e28a9&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

