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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=a6f4330d2f9d43fd79d274f123dd6ff1c606ce5ace50854ffd9e3e3301fb9348&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=ee4a9a25025bc84c03ac40d60e79427dd238ff6ae22d80b4f221a9b2f4ba24d1&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=6da70e740ea4c904cd85a54b599b248f5427a6b77ff7e14c528adbfd7172f5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=1cd02f98de2f0b211384d96077a6b0f5878f711d7946ebaf76b6a00aa24ada2e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=8a0c04c54473c3ef717e888ac4f7b3f225f35e51b20e6bbbc873ebc34596c513&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET7SJBX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T054154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2BTNHTbiikf8V9igxuKeLJ1xpfQSfzPumV2GsREY6QMAiEA291eZTxvXCnWuXxJiusbAdBxZrr5Gc2nYWFzO9kG9F0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzUvg%2FRhZNHxgsaGircA%2F96%2BuJFkG7BJ9kiI2XdL5ZCVlo84rB97HhYJKU2SZqgbKc90dcBXztuphFxQLvHDx8mTpSKsLsHxQ125BuIyaLSjw83FILOIBhjm8YUib2DF3HlLqWL78UrFD%2B0kAZ%2BfIQtibBI4R3fGmpcWDdk9cwEr975UlHwCROvdsC48SENuf7fT3pfbfbst3YJrGi5xmozeATLjp5l4crbxFmfO8siwiMHwNL7m1JG3v0zt2GmEkTrLX2gWKwf9nUuftsQty4qeDEyGNd2c1JDjLD%2FeAfpenIfu6JadlAq2%2B4nP022PYMa3ZoGAqJQU8cSjza1enMVjGrYx9jSbLS4aKM8m7cFzMWqXy475XfkYhQTcdg4P%2B2XzpTdiXZVrAVmCSfnUjUfIumz%2FN0q0zZGQwqT7F%2BtgTikfNoKCPpefNjK4A%2FvZXsGWfwb1GFPBhw3XUQcESeiqN4euoy%2B9fYJMpg7E6X4DyeKWUotzYCWa1eB6uwopW81mDRpOxwtRJ%2Fq2MmRIGRkpaeuIwxtrILn%2BW1hV%2FV6ZztwHkT0mX6uJLTvmeaOnzqANq5JkiD4zDjPrnt0Psr9OO4JFfu%2BC8SXmB6eXe4reAsWz34QgRw%2BcTDsUaTUEfbI4T48c5swVaj3MILC4r8GOqUBEs2g%2B7fud9c8yU99vgZRCY2DPDnI6v3Q49vpxiyB4eIK2C1gyOWRoBBFia68%2FqZdEpCuyFMHZmnQoUWvQSX2J%2Fe8G%2B6a%2BGQ2VoAeMGXHrRSLxkuolNy1zvNaPhl7v3AxEtyEgxKKOTs6NwgB6rUMsrHDuh3PRf7oSV5bI5%2FPTgVsvByP%2FiNTfOGDqU2%2FQHdhpcTUKXJ47oq9Icuc2Hh6oTRWKpeE&X-Amz-Signature=ad9422229ba27c404b51b6bf0b21fc5599bb9f15d0595f476e7e37ffe098ab29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

