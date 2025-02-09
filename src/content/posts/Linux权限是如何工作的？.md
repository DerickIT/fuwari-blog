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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/332b89ee-9c33-4950-8a69-32c3d1ff2c69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHBPNU2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T053458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAS5wu6BtvIBAPz70to1gXA%2FQTZse1l1MiPKGy2q0OLAiBzYFZElhrV12uLW9mnk8mJgiW3n4tS7OhBFEZ54zdtQCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf8Uqx2oUo6KFevjPKtwDhGLz2kSY%2BfnZHeI3CErFSNJWfCCzpvWD4jCjBfa1b9O2d90fheSmcaKJBFMKsxRdVwUJmT3ym0ji1eB4nmTLbP5mX4lk4oyeLN37izgDiGBu3qwl%2F5ete%2BneTLzPTmkwvH2KyWWJjpSkTl6Y1aJSNFXLMeVBhr3uEOHvYNi%2B6FnXT%2FYDFXC5IsSh0TMIUFpWPtQBbeQhq7RC6kaehGdUp%2FLlKkevgSi7isdhq94OLVNPcaWgw3z2y2DyjXwgFSuHcfdZXSBzMRUTs85mz8P538%2BSPMCeIbnofxaBO23TogFmmQRYe%2FCaIYhLELZPM1rDDwbwLBgWlq31DxRAAvpilHyiWDZmHMoOR4QjtA%2FM3h%2F3mAdecskuCN4jDEX2oCYn46alKt4HOHHgTVKNpZ4WhW7DhI67entMaTRODTlev%2B4rUOCHFjIL2VanjXDZlDMS3q18ObA5Dm4fdWAwcM85yj9sn8RhWVfpa%2BeXLDmZFu0ltWtAeaBmeGmqX9eBLKQUVqsph2fSeQ%2BsfHAN8XPwro91IHokFxRn4gZR%2FCQ%2Fsj0d1eNk%2FNFmeOhglJY1G1IxeIc097aKD%2BHks49O3oY4Rxx%2BjqxEssoxN79eg7QbJRWoenKHhG48eY3vQCAwu72gvQY6pgFe4V9q5QQ6Rrp5o9mzrzcgi8X3s9Qs5jlWeyCDSapx8%2BJ6qU%2F70DQD554mVtcjTwBolpEHkbC8WG7biWZBv6WQ0Uace6%2BSf41Zctu16c4s4ZV7SJW25vlkeHj%2B6RSX5AbcCrT6TApSRAlkdG2Q44RIXrT%2B2RlLyPtylmgpnCH3ggzacjfdkElAtjDxd8ik0SDyCHjoeHLGR7RjMAabOpHdLdfjdiUj&X-Amz-Signature=aa2258841b9b212447fe9f0ebbdb764faa5497515614a4ee2cabc4c7298cbb57&X-Amz-SignedHeaders=host&x-id=GetObject)


Citations:
[1] [https://linuxize.com/post/understanding-linux-file-permissions/](https://linuxize.com/post/understanding-linux-file-permissions/)
[2] [https://www.geeksforgeeks.org/permissions-in-linux/](https://www.geeksforgeeks.org/permissions-in-linux/)
[3] [https://www.guru99.com/file-permissions.html](https://www.guru99.com/file-permissions.html)
[4] [https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions)
[5] [https://www.redhat.com/sysadmin/linux-file-permissions-explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

