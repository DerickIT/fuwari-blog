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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=fd2f09c112256fa892044fb931008eb2a8a2e753a5546acd5473ea616bd506ce&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=66c557584d4d618afed7ec0e07a361cde2faa1838eba028a71e996b3b56bdf49&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=c1d1a2a6488f3c9dc3acc60d8d71ed052757e6778a612b37ae67edf85f178e05&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=e8cf02a2c3efa63eefa94e91fc6ea69acd26ca3cd6f5a68e9d27e4ceea73cb4e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=4c348ecff7b3097585dc9d4d44782dd68e1b1be16737a1b566a23bf18f104c28&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIGPFQZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T053708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfVrk6aUxPp7Z1EM%2B3BOo%2BPW8jR3P5KGWCctzbnkK7agIhAL%2BXfiTWxDMVEk9xYqCyJEKbsUO3Bj1fpqa4anyR53cMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlVJb1PUDMzHEiYYwq3ANKke8mQLW5JQcucEMxbMqqH4GDBKMZu%2BFXGlqFBch%2BNZ7POOVeCwrf2z7gIuRho6usz2NIBex38WQONWX2NtaxUUIRRU%2FhHABr9Hqffb0HAUBsPmHLUdBzUA73sbFCVz3uFod%2BcGl6RUqbkV8gAz2J6wAI1FQkiYaFgRFeaIZSDje6PeVx8%2BIgY32AZbQF5DcQYUggDTOa%2F0L%2F0L0vCLtmLXcrJnWXut2gr6of40ebwu9nmYRYaeDHsCvWcjz%2B97d46T1WrPvdVT%2BGQiAiFhpBjx3B7sap%2BkGWa%2BsZQxXh9P6kG7sorvtC1aQAV0jvYX3ACqTuJIQNzBujvuDD8aqUBkccOl2abXODBE8jDrM78GJfiCkn9mBWs6Qkb9RwRrT0FBhcKUp%2FX1wpBhQr9hIZ7wO5JCX1VBY%2FJZ7rSL5c9nbZqP7ES2l8g%2Bs0qWmP7b%2BHCdRAAi7GiRPapU0HcWx7fknznaRr1Z4k9ea8ToTPO47CmI2a3hafmNB8cgg9199BZAxXfDT%2BneMxPZHs7LYOhRWkqe%2BLggZQmrCeJLU8V3OGCym0OtZoUVphHuKeuG%2FxaR8nIUKh%2BaVda9hQ0fvbd3CMZSgtBurQiVSRJYhu9mzBil%2FbqICGCBQbLDCe4v2%2BBjqkAXLMQUAmfujhQfcnhsoMi9ZYPp%2FyKJ%2BIHIxDTGsYd9XwtVZ4NFD%2ByBb2VQ4mr3UqhDUDX6hnTaOpXgqihULRykW%2FZHGPQSbcVM8aMSGhYrBjg3pqXxy7H33OksDu87qV7JzaXC%2F%2FJYPaC5w4HXLNOGpCkbyVMNU2UWBA0p2F3XQ%2F2e9IbahRn57IAsAO6NTjkoElC2rvavnXP7Q7DJG5BUpm2rit&X-Amz-Signature=db452f2db24f419c6c985a684f87012396312e301cf473d547a57ad21430bd56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

