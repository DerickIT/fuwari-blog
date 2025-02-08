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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UPO5KX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T053442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBAf2zKj20Aykpmx0I2zv3paG%2BdyQgj7xEkH9fPfXGqnAiA1UZsjN40j2T1BYoQVkTNy3LVNaC7p3RRCunaBr4lyoiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDF4by1Lo9vPYnZQKtwDh%2BaVkE9rN21hWRVgOqewvBgcqwjO69PH3HODw2d421MSZXddyZDt%2FXuI6Dsn4zXEZQcwUYMwS4GYLRLW5ZNMd1PjmGNhvZhB%2BR8AzNHQMRv67cgR%2BOIKnM33ujEGUXLyjuEVCUm7y46SJkTpDL94xg4pNONWAQmnHSlC6d8ncqCC9ldatnwrr9sG57QGDQ4BfR9QhhYqmyduOxVnnI3kqbvsdFSxtHuU0HdWxVKpWqUY42YoJQOExZqwFVeS05m2xRw6SxsRq9B96md2HUZAac1DD%2Bo%2B6kbtlKxm1nG%2BI2SrnHpLKlWA1kei1kqcnURlr2u9KheAmG9EGvV7P4%2BQ6OEbmFWfnD8rNb%2FBpTJLBYuvZOL4Q0mND2EI4rm39DPSkW%2B3nbKqYZBlr8%2Barub3VL2zFPsMjTy%2Bi652G2axWHgCgE%2BtgGXenQRAwPjcYye0bxM7hzvpbZfqBs2Nsf8olsKhW0cd9YeRGeSXgWABExujDh0h%2BvXOMLYPW3vOUtBOu04JjXnfnoldFEr2xvM0CHTsyfEBCrzA24KKZ%2Fjl0pQMNIICia5SK8Hxo0faYTrEfiYVxw28R3Oc8s%2BjZ7qkPaqrXAJM72B5nBmjlGFCRZZFRnF3X0C%2BR3%2FJWP8wldSbvQY6pgFZmqnc22BgftDa%2B%2F%2BR4FDWQfQSDWy595gzIYDLYF1SGaSt6gSkvK6UuI8rQcvDbP2Y6HmTTCu2CwkzGdkTQg0vqQa2PT4KJLp1mwN9iln1IEUXxhtkaweaPN%2Bw8Yle7%2BZimeiI%2FyFX%2BuAq%2BrzqkPo8kCVSbigWLgwO7OTaePaWrQ8QZkOv7mqX%2BEJ2zpZcm9%2Bn4AWZLwwFkCoFZc8RAPGQyojbPTW6&X-Amz-Signature=a404a3bc171fffdbe8e801b7152e0e2165ec2b451be91f3acb2fef9f650ad1bf&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

