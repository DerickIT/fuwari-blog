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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=9360bae585800bf030a87b24dc91b6139a3489f35be0ab1dea856fe47ae8a5d7&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=6d82990e768b5d641680abb7f32dd0bead827298a764a76086eca1e10f17b0db&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=2cbfce4edaddcb64b1e1c8af0fbf8632cb07c6d516ca59c79f1257a32c08f86f&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=5dd842956dc53f3f43e6fb42c0572de5dc9c85706b3a66a1ef3785954f900469&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=a031baa1e54599034fe1427826947f93a013cc1e1b8b9eb1c88b6ec9c4a494fe&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OHJXRD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5OEaUUUytDEau%2BUyAbwJxAWDGAXm%2BfzvDavZgCgV5AIhAOgTH7%2BmF98GtnBvdLC2uuT7ymTxuvFjn3PdxAn7ANucKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bt2x%2B9kRA4ufr0AMq3ANoMbZTQsBKm40nHRPJyHuNq3mqOFSiScmwQeI6%2BAUH5QpevgjcX%2FfTKXmkPETbs3P95UF71DPOZHB8n1x4%2B4gL47%2FfK9ockmGRMQ4%2FBZ%2B%2B%2Fw0Hz7VcP5ib0ghCZ12EF0Sga%2FbRe6e%2FCgpPlpL%2ByAtzD8Ij6EEzvBXy4aEGXCZKrKkSM59rpGH%2BhfLWu1%2FSswE8OonHcJVKBr4k1e14S%2BLN3rG4ZiM2MZl4Wxep22MAPdwFxw%2F0mvgTgpu4wPTAvdQVXUKDXCGXaIhkrxSjVJHm17FJYC9Ywj1IGD3g0AMi39wwhnWHZA9bezXXTOGt1n3sal1cbahb0ZEgvr%2FiF0CsFzKTM4lzWv06ryaVBVZalT2JV%2BFW%2BcbxU2mbhX5%2BvjWZBzQrmp8E3nV0KtMtik3O8mCW2dS74P8izBq9sUlPq1gRD6kg0HJOPXnyT6IynpzoaFfxcWRjeU8WRtnIVq1qy2EwiSBkIL9BfWPgeUv2CEg2O%2FILAOWKsaKigoMpL8a1b1FKEPl9GWjQiHfL4Pa%2BaIBEsiW%2F5UmZmzLupqtV8a5QujIOBCKpsZpOQ1CnBtWiMR4cPj2Yoc%2Bd%2FvWLoCSvAv09AhIBf8uRVWoP7qfMadkQVGD5uyrpSvddNjDehuy8BjqkAcTm8OtiTHuxyx9ig5viqdlnR7ymhqE2dYHaI44%2BD2Sh18S%2BEh8WFM6DgP5oyhMiIYedfnOGzehUAQMeaq0TBVZFzNv%2BN43DSP0OeN0L%2BJyPHAw7vGZD0yaqZSHgmXbyAjMxjZUZ%2FeoymCIToyGhFkHTTMuNDbbVEEE55dJyEEtU94jFJmCMeBcsEJ2Zz4bn0ZUt4V05j5ELjlrgD1tno7kKA9bm&X-Amz-Signature=fbd9a86684e147602753709a07f4d98eb4720eb6e94e8f2e683dbff900909713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

