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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=862bc15a91231f28610896dae6d7c8556cd52d60283902fe5d9545db4bc69656&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=830750cb7d3b03fa85e3794151ee8f727e0a77cee62f7b9c66943e9573b99772&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=168b804b24f9aebbf86a918b62e443ab7b3e664a6803d181ba3b6f19f26943dc&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=c1937c0029af8e80a4c9e663c3310978a623fc50d70262444217058682eb2226&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=e3532b23901b3ed616b41df7b3a2f291db1a4c92762ebdffde54926fbfb92002&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7BGVZK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T053815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDhv36n9JXBGS8HyLJz0vYgiuX%2B59CpDZz9fBTohfCbIgIhAIgzJx8OyzA6HgjQN11HawHhlh5Wb269jbH%2Fu%2FYHnzl4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaU%2B2%2FVKDmqB5MZUUq3ANibUfL2UVl3UN8IFTABmVEdjkhdQe%2Bl47HbBcTZgpbW6JXooGgL4YWE7eXg6T9Hmoa69Co3sjPeiEPderxVk5FTmWkrAjOZqvK7bacOy5cffu5HOPojElK6E4eg%2FfNLuRetU9DL7FGqlyzMjpoiwWIyz9qL00vrykIRyKvGR8GQAlyAHx%2Fywkuu5p%2FAYm9k3%2BqOGZoW9A9KesJus%2FpevYuwyZCq6eI7b9YIntG4AW3C4%2FGv17imw%2FteWi5t6cHoiICN5xWAbcVwQkMx1tZinp1XqUDrZbmxMIO1qDl5aeK3sA9KeunPN09P2s%2FnWPnzvWebqju6mGorAXfDy4WVk94JBbJEW1qhZZczJ6ZYWxFzhr4LVcGZybIlWu4bXHk1vA2WiMXASU3k4bXXBxjUM97U71UyBFDdC2LivG2kETbGYHWEvi00X7oM6uoSzb1aqMn6%2BucARCC2Lsrfks1byY4MSlb5qPX%2BnJ4L3k4Fw6pBQmwUa%2B6%2FtkZaP9aIrhLWTreMrvtSqrUqW2ior3snLpD%2F10PBHHnYowzdYcGcKjNnN%2F9LdUNhv7zy3SiZt7k9JhQp5vOP5m6LzTt8XYKbYP%2BTEAkK4jI8voJefM6QY71LaAhERLC1zwoXZwwSjCPivm%2BBjqkAbYIsP5zPfDE5lhk8Mv32muvooVWNrWIkh3vHnr5kLEJvWTbcFKvgz8iKoiUNAb15g7oz87jWSeQ7koWp9l8HdVJDAOKPvFleyCcg68cT8079s56joiT0hi6FV3HsvfxN85XZcDUeOcqiDhnamuJxLuYSjd00RKZ0UhZ9S2JSiJIInufJywPdLzZtB0BeeJX%2FvGswCm1YCrTyAPvkVJFAGcBNMVO&X-Amz-Signature=3603f3904f85ace26807733c9f64f336d1328ab0846082e8de6201e2817d4b55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

