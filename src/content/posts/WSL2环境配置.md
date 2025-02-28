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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=ab95b4b94fa7d3349e6f94858cf2a7beee648a7b67c4636abb736ba86755fdaa&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=075f99b365dcd11ca9143ee516ae011e593145138927f90b826c41b1a9e8be73&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=d447bc59036896e7383f2f7dd747e59a56a046eb9ab7b1df7caa89293cde8eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=b053e8110f79a29defeebb8d1494ad23a750d235ca6a576fded9f499561c1997&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=a0a27ce32783cfaa089dd903fc2f393c231cf98b818ec59a0bf473fb9fe3efaa&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKESHIA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDHAwhd1rEOXhPordWGLOKmdQOvipFutAYm7KSUrX6WAiBJgVsoXm0vuj6dZbYRLRA8sy89tO3Ek%2F6DMqap4ZM1RiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8iS55yrihYn8g6qpKtwDsvR66Xx8l3ww0CDMr65A2CCwHRW8d8nb7ztijdqiBTmqjQKsyJQUPzEr1XZEuvlWVePfXVJ03GD%2F8A03qa5UApoAA5qfgURpik6YoZf7%2BMH%2B5sN8tThFUvmzIJUF1A9QA8EeG8Hs8tOvUs1kD2V5zsu5FVGdzLzeLbfXjBtuOTngVIoG5K1EQO13XI1j8KUghObF0IXFzKdfA3ynD1AELuZh5kBc2sFGBNMi5ZwzABJgBp3sOFqO%2Bq29ywCyq%2FTpN9dfsFeUCcY9SisGrcVs2fA2xoagowuFrpa49FjbodyrMwmqI0H21FzN%2FtNIFYyj2f2zwJYUcvsJEhw8eBcgSzgx%2FSJzp591C9hLzg%2FNAFRY%2B3bGkAjm78THo2CjogKO9WxT5dQapkFENmHzGt1OmjMayYF3vbahURElJcLLhg9ZsZsLqeoD%2B5a5gYhNCRfq8hlMiwsPxtdLYeZfcjFCZan8u89ZVv8QKoVDsQNm%2F3HWamsq0X2hC2e0hkp1y0haS5jWdydqEZ6BqEDInuqLF1l%2FJXn5C79ZLJkx99%2FeqL%2FA4DoX%2BIToIEcZoKAhBUiO%2B7crJN%2BndH4fgRIN%2FEW3OHB%2FhDWOOdUCZ1Qp7qhh4vn0dznhUVWpxJOsFdow3YqIvgY6pgEBFR0WnJha6CSExTtTuTcLhKDREL3GyMNpLo4xAohZbN075l0%2Be6rzejLZcs0HK%2FaVwyX9OBy8NPSjyWnOhN8y7KMfrZFLoH%2F9pbzzahdk6J25Q0zq5QiByXqA81TItMq0xBV3FA7FGdrfKTxu0AkCiq%2BtMub75T7s8aI9RlNDST3qDsEz4yioStSX4kQHngeSJ35TlX%2FVr7Pe44m9NTmDORTCUk0a&X-Amz-Signature=23c27f66ee8ab28ea2f67c6459d19892ad454ad9ddf12bde68a31618286a4c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

