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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=2143008c201c3203d61e4571c7a827f525c1232bb2f60b44423ec0fb7da04105&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=e7075e9bf2ee15163a1e82d7f586b312fd87f52d77699a399b46dd523f081025&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=ea159b2b478d74e1f5641336298526c27fe392f75bf7f227450674fb8ff51ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=d2ef89d1a3b5d5c27203186c6176a53cd6348dcce8dfb03757eaf659b6f70eb8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=fcc4cbed55b3d77f344279f49b31c024657d8d58943d8a71a6071831d4b1fbda&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTNDHCJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T213423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBPppiQDEWxMejDXuB2B8f2Fz7JLX8tY0FSOoY3811qIAiBe3dKUlA47gPVjxh5e3HIPTdAIUNqG6bdSg3Y08hToByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz6na2srkBfLEldP1KtwD%2BWoo6INoQJP3HMN7vXwwgfJ2xDlkt9KN475FjHsV39kp4q4TMHMeoFZN%2BYLBPiD5WCODH0Asd0lQyMQVOnJdBpSa6%2FJJpuXDpaMUwhxI6rGM0fyGxc3B%2F5BJGcJaaMB5w%2By7C%2FlYquN0gxvdzkwDAZe7yNaNR6AmHHHgiprKc%2Fh2J0oviWbrJ62RDLS7zlnVuNinVkNiJnqhizKgrKWw1wtDYKOZJiQ8gpYWnQU2KIqoRHE5pIst4wg7LHOAi9Ew7m66yaqrXtOMQONpplHn1CYm6utXrtSwaF%2FpoEkpLRQFD%2FP4OH6VrMm5MTsq7yqtdInSGCflSbZgipgV2aJyffJ89c%2BEO9iKjPLZHyktTwEsZ41iuEkZ%2FC%2BUxJfV3RJlu%2BzHn7xDXgk3pcPsq%2FQbs5qn%2BGeE27BVlqMTao6mYdu0R9NbFew9AtMLq3n%2FHPzL31luenRNbJJC5Sw4E8fHXxm5H0cnO6S%2BvdWCclG%2FQlTZhZYYMJ5PbGyNeBPO7xAHKjiNQYzFG55As10fxSJbfhel02v0TWpRepnC5Df6Bevz%2BHQdCTv%2F7hWl6r3gJb4SCAsvWieLQ%2B67lE8Q%2FR6rRU9d4rVciYJNeWb%2F4ZSTqo33k70NOZ7ky%2FB6Ba4wgau9vgY6pgF9WomTtO7zwiTPVVzebdNBkCYp5oBlKbnQJo9vHMs6FtP7hXeHyqQm2a3B7uf%2FL8WeUZCSrCQpbNX3BaJSM4lIpptvOlIPoFrq4N7fCKZAM6SUUk%2BXwhNrJ6LfFAb%2FCbnt00taFOiUoJ1vqaY1QWJlPErDewO5YBpSyCJf5fntftMsLbV%2Bzi%2FU%2BVtSXjYCsPPeY%2F8kJL4uv8fwso7MsaVRQ7vu4F3m&X-Amz-Signature=7a56709ec41acff2d068e8efedf36d0f672cde6cdb9d57902b61efe93c44aa7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

