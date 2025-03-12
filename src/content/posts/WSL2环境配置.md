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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=6529a5142d78780137283a766e8fe842fd95b7c8be6cd9ec61842253bb44659b&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=dd0a076715505a3117b40ada6d17ee50dd34bd238ba3bd04154c3e9a3de7472c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=d1b4ea6cb278ed2a5b429dc95d199831ccfe22a60b1a9851c82799d1ba5ca851&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=c4985f98f3a0895d9572da2052c40b880c901dfced5a5c1e76de931fe63dec94&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=81b1d5d1a6caf3b4974378f36faae852d230c37874529d070dba609138cd94c6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DYNVNG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T053851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHn%2F2MPrQCva%2B%2BXchvB%2BSM4NtYIe0JS2goFih5i2bONuAiEAoYy6dpCFwlmq8oATeYRKZyaoJb1lMT4vkkhqAu7vs%2FAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYHNZA1SYgdRYhFgCrcA4I1X55UpqxpcQaFGzGCD7Y2ZRHKz4JVvVB7RgSJv%2BlkssN4KfclkVhUUY0WAIj08MwBBdshIXK9Kc09mnAeoV8JHGwBnVwEVEtDzbu7AYRiTI6F1%2B7QUSutMtNM05zIX1zXX9f%2ByENduzNjllZqKlWLgansNUMMPNMEfoN1%2B2fsWzwfi3NJTz3ifHleHL3J4DVOmiPL1lXpaVRDc%2FwfuPtXjiC3HUkpzhjTxGCw7b2kAfF48erT8ntJGDr3cFTv6Ojvg3c8QjUh0yEcZNoMVMXjn%2BblMFn8Q7sfzS3F9dreyCo6d0nFW1G%2FR8VDhTyKJ2Rs7WftHYuJjdH52Ocrue7ahsGHK8JJnmYxsJxzFv%2FdysLJSmsHoVW3JsU616JCmEtZOu%2FuT8sUQthdHpjoqiGrOS9xEU4Rn%2FpFOMQ7pZx%2BzH9CCTqxKjzPfXwfu3DaPYNDOxupcNlMvZ54bIWM3kKYGYFsScFer03YiWh1lkA1YBVMUH4v34ftH%2F2xsJzJKFNR%2BFedUM%2F7AuZAIAXqWvZ88jhqqv6uDDSUQfFJtunfLYmSv3PvXJy0gfaTuX7Cvx8kjs6eeLiE8fUUJGDA%2Bs5nwO8ePI3nUcouaNz0rfoGHMnmtlxcFl4nZ0%2BRMJ65xL4GOqUBtT1IeXsTx8ALOEO9Y3HrguADajneM%2FShAK0HOtWeCYMEDqr6yrreMvQuyXmR325UE0CkdyK4H5IPdlS%2B5isLv6hyLJvMOZ9qpg8NzwGAAvYMS8ZEg0fzKur1WObz%2BCdgiKw6RqCYydR%2F6ZLXRRpclh9YjcUyqb8m9mC563ix15rZufqVKcJ4oqDIeEpMbn6A8Mt7AtkcZ61uhppfyV26bCw5wZeK&X-Amz-Signature=36174eb3cad718ce878a5b35379031972d14ded61dc77dda0473e8a852b02051&X-Amz-SignedHeaders=host&x-id=GetObject)

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

