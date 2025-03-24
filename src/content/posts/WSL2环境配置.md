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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=2768823e4b53f79826c74ede1feac6d5977e4c435508012e5aa819de1b03118f&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=dcc1bbc2e8031e9b5d87378dd9bb20bf80fd83fb390e6347b81f0d86893739c2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=35a393e0bfaa298c4c9026e05f3240d31739efcd9b5159d80cd6c7a7d1b30310&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=9b2d2a35cae14d940efa15fde4505f4139fb5c1f0e8947bb2dff22c96a93c076&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=de371d6ed3a17192902e6829defe34ebbefaafa5b4ac2d386140ff3c4f9b296c&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUNDDGJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T053923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDED0Pt1tqQCdu7yHvoPUlSu2vlutFRHPlh9EorSlR5BQIgNFpD9ePzBLSuwgtfgfx4SA470xLmqXAO2nkPFj7TOngqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2QN5GU69D3JsDaACrcA4TPUFbkL30cz1qUPOg04wjVxg5yP7FXkWrJc0zN6DdXJyLc537y8zeQmNaMqTA21znp4k5Sr5TpN4NuhQHBWufQoPAxuTUShhnXYR7NX3K%2FwU5B1sbMNUGxUVfWop3vYRKguWQLrzA%2BP4MT%2B6pkw6eUds0LUoDv19k0uZuBvW%2FaC%2BPisD3e08lBYIwGsVrNzzA8HRtLEYRl1MMnMdKykZnYn8t%2FYIC09mt8kFBmA4fvGprTIw9AyE4uKZUCTBt50QzN6rAQC%2FZoszjk4s6BznXAAINQA42%2BL77rV7tHQ4xU4h%2Fo5FDDJuZ6mqb84lreNS96pulDecmzGhJAydtU2xMQ5hWGg%2BzfZMSWSLE9yw90mzEo%2B8l%2FV%2FaCvBc7L24GOzArl7BiduNF2H%2B9bUEyEiz0qCDzkiQOS1ugn42oBsj%2BNiCrLsveVhUqaDCiq1Ji%2FC3hYKvPcPv2fUfHOJHNKQ541cEK%2BRzOnq6ByFEdQY3DQ4MYFdpu1B9BQyLaBcJvzklGsEaqfKjt4DWhEgA%2ByYSedQUgnDpKpYChvhW0xW7V7ykA%2B2Gx9iDrSf%2Fn%2BVELf3LsH2%2F%2BNrhWGA5iFr5I9Zl34HPiwN%2Flub6TD48nI6JyN83UklYKw%2BSNW%2BaoMO22g78GOqUB%2Bj3aQj28NU08dQEZN0RdMMpKAWcqNtk2VJaTEdSXEzJ1SaiiHPaO9aWCshcNPmKpURt3nSI5ELJDIUbXSd4FiFBUcUadV40F4quqtgonwta%2BmUFJ%2B%2BytTnD8EppwUkzcNHnjNtpiQiFNO8GeZlryCQv5TuxVTYatduJubYkqD9dWgEVLZCu3DjsdFxDLh8Yiba88zx2wQD9gXP%2FQMViD9rwhQkjx&X-Amz-Signature=dc3c0faa05ffe32100733a834260e59b79466a69aae294090a824aee62448055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

