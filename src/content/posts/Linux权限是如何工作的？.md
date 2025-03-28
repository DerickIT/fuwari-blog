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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YL3STMF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T054019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6SSQF4OkJP2QEWgA9ctKN1O81zGNjjajoHm60E%2FLC5wIhAMxuUojSkt1iPouTaS72iEuH9HxuDSmklkWNdLTJ%2FKB8Kv8DCFcQABoMNjM3NDIzMTgzODA1Igwufc12hKwLLpJmTQsq3AMyD2Q%2FLdcqzspxdjvRfVhnoLPGwYhG3J%2BnIHyNTeTNaJyJJvc4wl8kEpBi0BjkjWOZnpC5nXKB9iHkwzAxdXucHHiQ4pEcIU72CPWzFinqVuvh0ROVEYikO52CvYfM06n4pfnDXXYsQPmDjkikxKdfxZ48kII9AcRZJQWaYoElG7tkAfQ9SuHc6Pb3bjJrlveREfNWJnRCJKUl753WVYqcgItSq4wqrsoT9jfFVLjFcUTYJqqT639C5ydQTVji7D6%2BUZkACJ7Tnu8D7dgiXoYYhaelxPJuZ%2FTpkIPBw7Gd3ez7FuuAQ0MbqI254iqIHbMlYAuBmAEC3hnwloA7H%2BY45cu9AR5rqrcnynVEQcKDDjsOmVArB3ujPVfDmfkHquNeE9sXN30HLHx%2Brph0xKPySe7cxsUpSXl4tvZePh2W5XuFxmPXKaIr5Fi9IhcdrXj8%2Fw7WtearxhH4ietpDj3PUE2zqce5Jgs0toqLxa%2FQIf%2BbCQUN%2FY1rsB99T%2FIAPSmp%2BxToA8cG%2BuVL5OmlQ2vLucJcs0RUMERVUDg1l6EIInTrsBtUReZaxA6xOH%2BYm7PbBZBRLmr6w3SUQOUKCZvz7f9O8UfVKlTuirV7sxoCBXAr7bchwCIY83RhOzCb55i%2FBjqkAVZZSc6NSYClru4k8f3Qj9AHgrpy3%2BLFr0VSmSv1YLCWfKUHJsGGS9nlh5KcsmepD7jXrMVgudUq40pu5jaRegpmcW7X6RH1TKGiPAvaWEmzeIfhQustcsk1lVoeQxi7bgutL4fy4U%2BtDmGGYWxVSe0TfoPZ60QX63rx%2B90dp4%2FEj8WheS0F1Mw1Ksg46QAgRMdeRtdZNkyLMZEghDKMAx%2BB67Tw&X-Amz-Signature=a01b941f78154fa5bf0063e048816d96d45c90a1a93810212c873c5a66205377&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

