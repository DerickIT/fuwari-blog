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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=e3688ceaf4c1b9f82a307e50211e7d84ba8d4afbf64adff3f59b2d7d00845819&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=06d7277ba7c066a1de5ae831d86bfa3c8f4b8ce9f6624b0aefd0efbee1e2d44f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=186edca02a30f82289b9f0cd23656c7df20e4929be6f12535d402592f425120f&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=3055308dc297cfa648894acbd36b2928fb58bd98b489179e112462ec39e2d20d&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=214affb16827301dc4f1087eb22798d8e6d8b46d1110b14a77ddc119c58d752c&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYOWA5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T213310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDizrqdWXsZWV%2F7p%2F6uYSlmOZDbugHeqx962Y6L5EYF0AIhAKqArPRap%2FLbN2QZ09Ogag5Lm63BjecExmu07SkBanBPKv8DCGYQABoMNjM3NDIzMTgzODA1Igw0pkVWRCb4v010q%2BMq3AMD9FfJ%2BY6AxmYEJhypo%2F3NVjylknDaWLfS9o4mLCIR9iqFWufcpkey%2F0%2B2YcozB%2BIEC%2BGXzB3p%2B5zdRhfvbDPbQWxMIl%2BlOjsezsmBdCDH2yhX%2B7lCyPq5pv3uy%2FMKLrAXPdwYR5KeLuaB0ej0O9EJmYusN8RebDqVDY9wdNBWEwEV4wDsb28Rz4xVZN23AUTL4%2BfsTQk4lBXUxO1u5mYuSJwLYEr39gtUWRhUtUrZqE62oSJtMB4X9egRt7DORbqtjckX57aPxp%2BnH72H55%2FxDGhlV0PMzVeXJA6yPSEc0zTjiUFTpxSWudPUGn9nVw4bpXs4dxU2K8HP94PgfGi7NT%2B6vJ9ATUrkSqW4dJGXS%2Blp9xFwbct1eJJslBkSuYEefDiAczNcycbNZk5rdNxrxwGEQGrGymTV4n%2FGCBmi3nsKyDlpE%2FMaFzL1uqkvkvhZbF99SPduGbKoKZzYRVi6PGrB1YoaKpmbAuDX8%2FDizu1b0mcM9mRsLZRioG20KkQ21PtvwV%2BicUZgutac6bZ8u1r6BtlLRvZSzi%2FbzSz7M4qff6JM%2BA46cJzlsRD%2BXJH4EWEV24lQTiyK5CNwJJCLBy%2B1lMgJq71KjE9YCJSoltsy39KhCdaAI%2BfX9jDA0rK%2BBjqkAd2ix4em1fa1LSAsPmGUP4XjbvJ3aLxNLThjFBcMz5lBkN4HU14aEduEei7C0%2FWlZN%2BM55XIGKBgUfeImW0YXv5VUgRG1pgjQA9zcZUh9s%2Fxt0tWQTqEp3ww6xKnF962vGHENibF3dEYcWzu20u932fMZojdxk4boJ0DS%2B%2Bb7zZRLo9l8wSG2%2B1zIlo1masaWg%2BM6RVEd9jCCQJLfiaQgrk5lj3x&X-Amz-Signature=3924b0cebfd891bdcf3d22609bc82b95f939f21b6b20f6259898829e1bea67f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

