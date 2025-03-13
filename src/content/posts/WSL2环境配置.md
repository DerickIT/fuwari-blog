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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=bc3c4aa9d668be63f2a6d386a61127bc07ed84fa6d96769ad344afaac13bc280&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=56571018bef2212e3388a1c01c95a294dd0e5bea2e7470aee160a024a43c4e5b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=78b8a1d37880251010994a9e148fffd8512e72ffd1834e6a8776b4c47805b70d&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=551fb53381f4431851b8700d80ec3acb61b83a6bf997555fe8748ecab2c2a872&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=97ecd0df63476572dbada14ab017ab4db95fdf899d4af2ed006bf4df9681830e&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNL2RBL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7Vk3qmP5IPIu%2FBPQ%2FaGi0zRvD1YDXW%2B7Iv0kheZOQAiEAi8vt%2F5um5XDbuJr8vOVGg23kJg%2FadMVSQ44cVa0ZnqIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2FW5FiRPA55BtwWCrcAzysYPnMsPC9LVTGxf8%2FfRLMCO4YIOzCI5Hx77isNyA68UuhXoHj6ORA8vXtlsgeDxNElcq9BGNnfqND6%2B8gkOA%2B%2ByLf1qi9ZydwmWluuRyLDGeiA8LF7pzovkJuwWRQYMxtPRXg13hqnDHn2F4iWGXFC6%2BXnucIuQ6CFTAZR3PhwilHSKR0owG3srglRNOyJ1RZyBIBOQdBX16FJ4p716gqU1EMIzHps3dhcyUOr8S7VKK9bV8HwOzsdtP7K8b1uDSWAyyPZu2ZzMmFV5DFIIUMre8kzv1KRpSz%2FZjBRvMGglo4X1uWN2XvV0NG%2BmlU2MlyTEguiIDE%2BbsW2qQnFUkwNCOG1%2BEvDUQ5kM8TbJx9uGKoAZQyEQ2%2B5DD75m4BhD9X5hXBWAWfwroKFJeBxWm1uSjRn5EVn%2FKa7Ol%2FZjidov5EBLvTGEKA32kGNzgigs34mfA7DA%2F4yIGBeYncbFrC5BKCTszZqsa2d2Wen3qH4sHYL9xewZ%2BJaQISR1z0OY9zr3811IKZ%2Bs%2FBD%2B8SwBzNVYcGVezo0U9C9C2gEMrpAno6UKdX9wluEHEhb1EFlItZBGoJ4n%2BQsPI%2FT2JPS8yIkSkiIvQGk2yIgrydLYZSpV7mvYR7eUUPxHSdMK6Szb4GOqUB1D98rE3Ebk3s2RuGXbxnEfcL20bKMhLL8yq741Nf1eZZ%2FubsUJ0kqGiRcZylrVIoMKawbHK95rd%2FX08EAqElIq3vWIl1Co9C4XZXgCq7O6MPkzn95R4YppFayC45E3MgUnkKXPmzWAWWeoGX3mprqz9iOOHgtBudraS%2FJ8ULwOz6FBi1AdWUan5ShL%2BFXUh0dKrBvrCsJtocb7LRG8zcyO4X5sYk&X-Amz-Signature=8269134eb604698145d79c8de9f690c25d3327443543e5eed5c2d0b3a52d452b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

