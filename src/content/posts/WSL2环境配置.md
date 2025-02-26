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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=a8bf813f6f3c96b9c08079604930d8f1d8d882e904595d5686303308d009bf37&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=0aaa08c35a342b59893831e440e12a825da0d37f6287d1276c913dc1591162d1&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=f0a059652db349377fb7fb23375b2f1604afef63fe52a3f214ca929ae80257f7&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=1fff0494fc7fd093d9a83e2f3a7e8ca978128d5ca82c0c3f399e56fbb2a6261a&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=209b81b2c14c8a8e8e80d6b45b5efbbbd7fd3ecd64c86ed352aca60160a79b57&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPHWBVR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T053926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHRe587T8mAsiu1YiDA7aXTH38ILN9N2%2BULWqhkzOkKcAiAZKRcv5DBR%2FJo2PpkKL7y0rSWjCB%2BqP%2BD61wpYOaiQ7Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMOORPQV6mDlbozE9IKtwDz4PgaKSRRIa8NjQ8doDZ6zi2Wq9RFzIRpz1tfywhDTV9qJNzNmB2jjwvkGQnDNjrjuAmbFbwMkIq94LsAOCO%2BUO6KM1oRdnjWfieP1ilCsHoz1TdV1VybwIFuvRnJf2YWY42inynjCntMcE1JUnYqiNEVL7n5CYElqtviyRd01YJRjTWu8cL4WHNRJ8LauWX8pzfh0is%2F9b%2BNIXsa41pkbK9ju7n%2Bj7nRgm1bu5V8lebFapd6rhbt%2Ff4MwWeINm9WsusjVbvworwZL1LvY1Yjmvb2H3IU95SiQg9tTZ64ezB1WIz4bGwX%2FzfPa9%2B%2BqT0qv%2FLQ%2FdVJatB1SrO4TBMv2lrp1SEGyjZzT7IW4x7frLsSRkQhK%2FNFZA1EtajB3ghNMJsIxnxpmASV5vh67O%2F8sNA9PMU5K31%2FwZO3mmrABDxRXumLMbwiAxDu8ylVQcjkMy0G2cT6mp6dPBECYWsnxeC8Rzv%2Bj4sG1g8HWxXdMJB7fVG3BCWEvbhKBsToCb%2BIpALB82Xu7zmU0djt%2Fg0ZkIiS0S76SDPuBSlb6Jg8nAQhb9UQkR3B%2Bi3kf28lSaOlOqLKiTP0dAmAjkTCzRxXASw4usWmP7%2BVu0tpUjjBYhxqITistPlzwsO%2BOQwtbv5vQY6pgFRP%2BlEDpQKzC%2B0i7xB1%2FS8H8H5y9Hy9KLwmQ174Anc27Xbu%2Fx800s3qp5FNJ8g8CbQVNJxUL4B7vURbHLp9%2FjoKyMT8AFG83xCbe9NQsH8uOkbLvMeWFpa1vi24l69IPBz7EY3KhgVZ%2FdVEZeQh4Uzax%2BUcnpSaj0mhQ5NQHWYNkdm%2Fpc8Ae5nsukUNUpH%2FIy6qHKCLd2FWXX%2B9FsEfEYlUOY%2FM8f6&X-Amz-Signature=40a0f5b835266660749b0716ae5c0f7e5a6dcf8b26afafabd1e0952d06216d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

