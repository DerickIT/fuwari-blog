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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=a8d500191a4c48c311634dc89f62fcfa2a95093ac58f80528ef46458f85e0b9a&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=8af1c154dc864e1df437544048c6daf4ce63f3d5525953eeb9d67f6c68d1176f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=2fff94f9f467945d1437900dd3de0ddbb4035ab9489e65bc4d18a5ab30913ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=6764a1c52ba1f5efc728829f41f06e6a732928cdf624becfbe8d3eeea528d2f4&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=2a15ad5368d3c758e1fcc63051473e86fce17495ed074169cf26896ed360295f&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3AOGZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4aNFPaPlWF8FC7AG1ifM3%2F4hiUmNIF0DpXLPVYkpIGAiBYQ9eInaZu9SHDwD6WHYfpn5TRgzK9dOJpXaIe3NoyRiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LM%2BVf7dfp1sxnPkKtwDDuLItm5ee4S7R%2BmAkHo73mQuRPIs2rXQVgW5Zpa9Db78z2%2B5C401%2FhsGWHDvNWQmli5PLExGvTrvFLrN%2F09kMLre3UuwEiWWmf8oXpOKsaT%2F2v8GdO%2Bd2ZukZTMZBzGazIV%2B0bgXbmeLLnhCRlmEFQ5pl0cF5ucGlp%2B3D%2BV7qptbTNVlDIfmW5pk%2Bl2y2bGCCEP5o82VwsBpXH6oJY6NoUGSZGOVZB4mJ9YouuePLs76fAEZM9b7TvQYtsXYvZ%2FqGdVfycG1BqUsU55hlGppNE4KSjYSxpEkKHq2hSUaM0mIDiZaPS343GbH0So7lTCtioBffq91QlalVh5tZJPR7fX%2F8Q5CvycCda5epc2VdqwK0xEkmcYd%2Fi%2F%2FJG0ifcu%2BioKgLki1Fn%2B%2B6ycxJprjIYLpSAip3sG8cmRmlZMT5UazZyLhqiGLYmMA7Y2%2BS%2Blf13DrylZ%2F7%2FgqJX7bV8DS7neN6SmTvztpr5Svg%2FXXGjADEbFpwOM%2BG1QZKXQkHwc1U0B%2BVGSHk5RzK%2BLkjD4qSjImBqGdvv%2B9C4lhyaqP1cb5ZuChJbdu3hbUr8bm4tmR3CNLN287k8HR3OhqFjk5SR5lEScrUhedVd84zhCUWGQdc84MWUriDcrC30kwl%2Fn0vAY6pgGDBTF0%2B7wOOKWb%2BFyR5BdCS%2BlXeebT0FTi8J%2B9jXp6z5VUHjWe%2FcAQxdIOmJZzNG8Bg2RwF2ZbPzcUZT1VGhdPe8UuKwkNjd7wX5de%2BO3%2Ba1%2BU3nKAdJYcoIOnW9OZgzXm90kMXjwA%2B3g8QZebD%2FjoH18isKsS8HNjl0xxq460JHoxuAV1vhGMlXOR5wH7oPamV3oPaYvzyL1tJQuGkDA9Ah6iYlVX&X-Amz-Signature=b31c3477f5331c63a6ca54ba7e6b230e0bec4f8092cec02bacf0bd4d671170e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

