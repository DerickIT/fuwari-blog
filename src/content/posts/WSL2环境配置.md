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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=d0e3a8d2a65b08849bf5c24cb3262bbeeb5045e8dc76a5dd2c38cc28eeb7a31b&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=f36556f483394d0d18b13d8772bc7b4d90823d3e0dba62b5d6a3131036882170&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=335db674ce4009961935594a67b7503b4eb50e0b628f4831def06c4e1b9c8776&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=719544cdfdf9ffb6372476e6f0aa3203c25183c5af71e86459f11788a1056c1a&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=4c51deeee0758aa0ec3e57d3e0298d1a0e32ea8e48cfaa513e3d24e1948fb7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDGURHG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPGrLh4%2B4qfzCVfGGaf1JU%2BlM0Y8iWphrdxQeHmQIigIgJX%2BUIqxl1TnRmk1IfokiqEYtmBlLaiLG3Dwzf1XPLnUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDH9E7j2wvBmYQ%2BqGiyrcA05%2BE4R%2BuqKsOHkE%2BntI1kJgKRuoiGkXJZKUaFBmcPIeLnqQjcqx69ztSWQ6kJt2uBwSlKxjRtvRkS%2FcPxfGsnOQxOwLQsL%2BRBbRNBNsVK7L8f7ZoSiad4zVsI%2F8TTZvy7MA1qT4uYBu9mIqjHbHgDaHaQsb86XAcKgAkx8SkhB1nRPy7HDGJJWG9HZGb7LKnyHOr5Pj0QUBT%2B5r5NL48i%2FEOy00a1khughCgqj7iDc5GlTGkjRpVDcZ%2BnQhGRVcDOCbV6fXMKeyIWJLTcpqt%2Fn8utZLg%2BuH9OYw6wgDg7HuZJCMHNsfa2yYzteVGAplTCyNpd0FkLRr2tLKGAa14V1R6LzONi6I6pYczKgQWgsKfyJ4E5370w%2FpQ22o3GYQ%2BhbWbXuCl5xQ87S%2F4LAOyPHECW9TBXwZBlJpvjJcMIXBVIL9hF6T60SidtgUbhOvz57ojTPDM9aOaYa4i4WUzi8sUXtYAdkircSPsPLwSVkTz4CoRGKnF68WEBdRinh43QBZ06qZoabIZY7J9HDdpp0f%2FYx7ARKSci3r6oWFDjjJ5d8dMcxsTHCYyf3glu%2Fjal2V5suGZIMKISj%2FSoDF%2BpZp%2FaNPbFsgi6piBWP21%2FqLi5WlSDz0u4dfvUUNMJSgwb8GOqUBq8Jsm8d%2BP0aR2i1nBA%2FXi9Uz2bl6orizdDSJpAiiQUEqeh0Ei86Y%2BcRd01sf7wzykDqLHHhzt5P%2FqjoH7rI%2FwnbFFv%2BQHxjr7SV9KTKcICWbEgsFxZGum%2Fc%2BMb5Xp3x57toG1hda2ghEh0rDti%2BdsRBRyQ4GZ8cxAp52Nh1otNplXe451zO5coGSLPuGVvu6LA2zlBweZq6i9HLn4Ny6TT6Rj0jK&X-Amz-Signature=081e8a74f696be1c069a2cc62dc787a3d1b847d2a83a0efabea992a57c328b99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

