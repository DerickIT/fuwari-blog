---
category: TechSetup&Configuration
tags:
  - ProgramEnv
  - CloudNative
  - Docker
  - Web3
status: 已发布
catalog: []
slug: wsl2-environment-configuration
title: WSL2环境配置
urlname: bd266599-5cec-40ed-b803-521fe8cccdde
date: '2023-11-27 15:37:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg'
published: 2023-11-01T08:00:00.000Z
---

### 引言


WSL2是Windows系统上的Linux子系统的一个新版本，它可以让用户在Windows上运行Linux环境和应用程序，而不需要安装虚拟机或双系统。WSL2使用虚拟化技术在轻量级虚拟机中运行Linux内核，提供了更好的文件系统性能和更完全的系统调用兼容性。WSL2还支持运行图形应用程序和GPU加速等功能。WSL2可以实现文件、指令和网络的互通，方便用户在Windows和Linux之间切换和操作。WSL2是一个非常强大和灵活的工具，可以让用户享受Linux的优势，同时保留了Windows的体验。


### 启用Hyper-V和适用于Linux的Windows子系统


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=9ed59a4f36cac46908fad0d1cb085c7c3efc878dac860fb9e5bf668785d6849f&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=819d04a83fdd207914cf45fb48fc29462347215c4cec6324d20cfbd463e6d417&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=8207095a53702d2f353c2ac2ecfc0a6c62e649dcc7b4ab15c75cb7f8c0384001&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=d505e22f92f04440df5ed051fa069eccfdf75d27dd736976493ef8027a8df70b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=adf649538f9e33a55e8cfa9dcfb77eb50c13576c221d7430e23ca4d69d2103d0&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSFR5IP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T213258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCWFCAewfvj%2F7sHCbcihCvqxyjAwuuTgNgq%2Fepkl0EHpgIgMkIBveSX8xJt2XBt6z77n7KtZlBbNrB%2FZNzqqJSRjYsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9POQTx%2B2SsGGWJircA5tj%2BgF0BUjEtsSIS0G6DQ%2F01YjKYO9dCHPtZx0vOrHVuUzdSfanemv2N5TzriFBtTKR2ONi8Y7f26ueKifbBjsZf8iHwxY%2BpQ4xaoDxakX6Ocj72yeRQ9Nu%2B32uzl%2B1P9n3r1flYI39zGM9qL87CVlCXEaUnBQ6oBLjZPMxd4j6P1cla0%2B0JDeMzSKTJdiVa5Mdiog03O8LKRKkTo1ogP9OK%2BWUyYXgsQ9FbrvRFJU7pE0neJtsM2il78Ao0IaWdjOd%2FvuynVhAbXKIZ7AvJxsZCUK2cz0fKGkhKWvJg%2FBN4fZsLtbOpavp1kOEeJ1zVsXRmCuiZsTgFdGmlkPw7W5LO32xEwmZ%2FUY2%2BXgUwgrIcyKJ9q6R8QG%2FofNTz66BKJ6W8TPa4Wx9Cd%2BWOeVXDbeKC4EawLSUjTZgFQiQfhwTC8zyDXWTKglB6ySXn%2F7QRlRr%2FRZP24BKtRzgtdbVIT%2F0S0vTqfw%2FArNNbeJIPi2l82tXWpXzrcVt4n2RRHlVQI6OS82mXpdhI2vW5UzuNJYc%2B3fgvG%2BfatfShSLqsGB2tBvlUARNHrbmcxbOgrt3K2sSDnMLjxK20dsrbVhchiCXywu6FHYmLIH19jV%2FMwVbKOmKChrrkpksI0m3MIHa9r4GOqUB6IyA8v2AERrP1rkzGMv82Lwnu5CRuNrvOjXFx64ZNBsh7%2BS0tCykZpnzb%2B6hTonIohpsm993ZTnDlKzUJPIdU%2F9wl1snKU213LKK8zO9NL5f0qDAbt9geM0JrMrpB9BC8Lza%2BGQWnSRQPIqBwHMjCoEXNRg6hs%2BQpJd26iXJOQsL1BkxcemKtMci79u4HzPGqwsw5%2BknQyc0DN%2FFHs2BJe768HTL&X-Amz-Signature=23fd61d34147609b5dc46d6c243341283e51ed998d3acaa942d6c52f4c08217a&X-Amz-SignedHeaders=host&x-id=GetObject)

- 默认安装Ubuntu发行版，目前时Ubuntu2204
- 若要更改安装的发行版，请输入：`wsl --install -d <Distribution Name>`。 将 `<Distribution Name>` 替换为要安装的发行版的名称。

### Q: 如果安装wsl2时出现error code is 0x8007019e


重新检查是否开启hyper-V和Linux 在Windows的子系统，然后执行如下命令，重装默认系统

> wsl --install
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> wsl --set-default-version 2

## 自定义配置


```shell
# Settings apply across all Linux distros running on WSL 2
[wsl2]
networkingMode=mirrored
dhcp=true
dnsTunneling=true

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=4

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
#kernel=D:\\Drivers\\WSL\\mykernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
#kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=4GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=D:\\Drivers\\WSL\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
#pageReporting=false

# Turn on default connection to bind WSL 2 localhost to Windows localhost
#localhostforwarding=true

# Disables nested virtualization
#nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
#debugConsole=true

# Enable experimental features
[experimental]
autoProxy=true
bestEffortDnsParsing=true
useWindowsDnsCache=false
#   autoMemoryReclaim=gradual
#   networkingMode=mirrored
#   dnsTunneling=true
#   #firewall=false
#   autoProxy=true
#   sparseVhd=true
```


### 设置WSL最佳实践


[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)


[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)


[Work in Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl-tutorial)

