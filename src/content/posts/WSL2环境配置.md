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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=e22dfdc22978395681c2679c61b1b70b7bc4ec47800f900613b8b0890f77dc90&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=1b364f09d55826812b7bf2e5e2f0426c10b446e472d3dc586c7ee566279712f8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=4015eb6e445bbc2f02562af04f588c11fe7fd5ada91f20895df4eadaab37941c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=166705b532835d4755723c6c3c835f005db372d883695a694b3a00d6f86913c2&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=f57515029188accd44474ccbfaccd8ae995ff9095b22db190e0e405f865fab46&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FL6PMJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQChJ%2FYZPu8ASuVZIVo4CHufd3h4Uds9bUu2RlGOr%2Bpn1QIhAOF97FnKCgVIX%2FVtEpRJFKaYzbNNwDGjfnm5P1NtZ08HKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0oWD%2Bx%2B356qNgU08q3ANC%2FPXQ1o689nsWJ1ZADiXy16jNzfb3fEsiO%2F1g7ISXlu7bBj%2FM2odXCB2%2BIEwUF9j8pVLZRIV3Aua%2F4bM9b7CUejwP2OFQzbZaqootIluIajzIpQOjRPPlY1%2FzORS8Fy7LiUS5sPorNx7goYc9U6znBOGj1lI6mvQQO4wi6uakgImvPafkCXyvnxgHjoHYH4qQeK%2B1EAUGOIdj6M%2FQyDu7HDcX5np1u6NkM4TLPJWf9A6wyHKd8aEcbLdZjnJ6LWC5j9x8zgcw8Lv20uca9OyqSoTytjjrME9Zunwi2u3uGebUkUwqx53JqtZ%2BQvXFTyopP5CXzN7Fxzc4NQlEBqDufeb7Yu%2Bd%2FuWnwGXcZex8BLGXt9Y7AWSI0zPmYjP44i5PIgwyPzcRJKpc77D0885bgIkAblVDCjIvCJQhayZDpkoFjre6PH6QxR2OehQlZedaP%2B186HH4tOBLrEVbNbD9hoZ%2B4AuSrj1jD%2BeIcKBXF0niTmxp74G%2BnH54wdAiKbkuT6OT4atqhDPyyPoD5OPzYwrZqbYXBLTo%2BgE2TJ4DGDAVSNYx5hN3n0ybSSYeyBG5Tpe8N4lkLk6i0lNYLpJPQvsbUXyQD4vSWwsniPP2texQX5p6sXihNWzohzCOrPW9BjqkAfN%2BtN5scqiAQccMxVCP%2FsWpF1m1JHGEqhQL7EhgsPj4zRZqGb3nv34fGrwPXW0ABo0JtJ4Gr44PeWGwM%2Bz9JPU%2Fcc5AoBGMnd%2B1Wkt7WwhoNpIOXy8Ae1yAlW1ioXzHtwvd0LD8WDPIpS9fWxvAp6BZ7nE29AmSxcT3OCwbmYm9KvPWhJUbpFjm%2BvU8ZbO%2BufMhgK57ew8dbE5RLbtPrQI1hXAr&X-Amz-Signature=0a22af22b30124b8b6d247e872f8aab4a304941b906572bd2a2d1024ff5a0275&X-Amz-SignedHeaders=host&x-id=GetObject)

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

