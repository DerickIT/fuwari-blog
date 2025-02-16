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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T3TYZM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAiZMhFlvwOiHXpUGL7%2FfdyOFaEBvaYo94hvZcvWhwKVAiA68lD03Th7lVoFv7B%2BTMy8stHUVyIUY1sb%2FjaiagTBtCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgdhbYLcArTGRhxVvKtwD1wanElN6jyTetlYuQdMUH%2BI9bRm8PIIpk6d11wMPvHRRKVgzsEfWjjiQ8k%2BfXWO1hBUXzbArS1OxGJCgjHT97JQONMnh1I2XOKQk7jURR%2B%2F5tAg2BEXkEBw44Rhv%2FGv8HuIWPW3qvcsYfw8%2FTckEzB7rn02z1gBUc0pU4sJ6YhDbNeLCDdCGuo8S8rfqMEHc%2F8aKQ3%2BkwJfG7UHuO5k2Xalgwo31SLLFkMt7MedGCGfFibl7yZegdUW5JYFWvwVlJhB7nwyZEcTMNP7QwMIkwX21gSpaWvAdNiFEGqvraB8NIpXRl23c04NS13bJVvrraNTACOHHUglrtJbFz9hqictlC%2BloW318wzAZDKzI9oZqHcOPE7CvIIS2unJv4iSZ8GiQr%2BaQ%2BluXRRaVqUKGLW4byirOpzMy3QiYFxC8CnPrm34xK5DCRpv97ACqksLPPLjm4uwZVFCTPYLfEhx2zqIKWwO%2Bw24amlYMut3zOenc8xSdfd7FXuzewfSHOfCPZzHAp8bWq%2Boa5vZ3mbNXE68Qu6Ajw0XI7S%2BfKAY2455vzr4dF6mtNx6Q1lmPwTasulJoVOwUKVKkhACzaIrwIAM0%2BKNua%2BdXxFvORptHj68mJ6oLL%2BN5X%2F5JroAwt6PJvQY6pgGAYQL%2BjhSQPpMBSleC9vTWqh1XGVHgPm5zHIwi%2BnVlJNY1BIA6CmRNKdvGWyzO%2Bk48TKin%2Fok3eNSLNR9WJGUHJDnkYOyiYqCWMpH7Jq7WIwiXUX7OCUd0QLTP04%2BJ%2B5nTOJWDN3NHcnoc1PID9yqSfpX%2B983jisZXmSiiPY%2FbxhTUNJBgvInftS%2FXafi3suBAJZybu2OYjX7L4kniXSkQ%2FW2BmKgH&X-Amz-Signature=da20e41a09b4bcdd46b9714daba678afec209434d79904c2eac8ec64428691af&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

