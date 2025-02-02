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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=8707bfa4eef6ce5bb412b6ab83712cd24300810609b7d6afcf1d63df7aa9d58e&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=50449841594eb9ace43891c6c562eda09b6136d54b8f11b011748f3b9d664b40&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=c0cc512f4ef9ba8f9b6507062c0c9f6375a771d6484a96ee1fa7185ff351b70b&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=3800c8578bd73896b00b463e0dc2d3c30fbdae0a2c0e37df082a45537bb74720&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=e7406b9d0cf801e418d7eb6fce2145a09a83aaa194a5730402debdf4b87f901c&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZSLHJH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbyz2ZaSA9LzlEX6JRp8ribyUGHL1W40YvBfNE4%2BGTxAiBYYMisOecY6IejiJytI%2BsgE2zzf%2Be4m0%2BgGXVNLJChayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2v76rxWLVzGSQm7fKtwDuoqhZU%2BEOCgFLiCN2Ue8xGeTtQ%2BZEsff23p%2Fg%2F4H0L3M5gK%2BXP%2BUXNXGuaXO0%2F5AWKmTG5UdSZHYcV0TO77esWdv9Ia2ijY%2BoGNFdqoNtMasK45IEodLrwpsQe5dI1UeHWwlLKj8L8LlJUsrhzf5ADZCkUoCS8PHyLduhtrd5AjwHoWnQCunFbm5w5XkHUDw5D4zaFWiID%2Fi5LO4HoIRUoRfSoemt8OE0lH93f4H6bbFUbWfhdRXSoFhUyjqQOtg%2FmYo8Q00%2Fdv8oIZQkUPRTqlx%2F8Nt9V1G6DWAXTpBxjVrV3ADJfZ%2BY212yzHaoRAMduy4HiuLqDiYhU3NfyFXwaQzYvDUQM5W2er%2BujgOhsEI1YWhbBfb7pHfNccB33Q4dFe4xVK4Wp6cqPoEF0FNR0Rj%2ByL2qQ6BLNSvx1KNictcZqkdhCs26hl1l200ec6%2BXeHreW%2FEYfxFYOfhuxPDEKFz2ivvQVPpmgBe1DCW%2BFtY4pC3svD2G%2FusuLLdCfxMHDTZOyWzABa%2FIfNU6lmptA9P7O6oL7Ix9m3pVGOdWn%2BbOj%2BHvGSZCNJ3%2F92IzeBBCTqE%2FsX8VhB5xq7WiekmSlTzpiDN61WqCeehjGwi10FRiCnNiAmNq8VJg4ww1%2BH7vAY6pgFORx%2BwGUxxAIK2tidQ8BW3N7gm0Cp1XEG9dyDCOG%2BwNib9d4nzPMjdleRQkcHcpwwIYXu1RDwrSEFMDNM8ndpehmLftvn60VQbq3H5LrmhHOdvmG%2FSlMwpQtlgiOCrhIrZi%2FrLZ9Er%2FoMG%2Fju4Cp9Ff4w3RHfPyg%2BEl3KZT%2B%2F7PUtx%2F9B9OFashJhxmBPZwk7Z8MOFout0DacvJ4IaPss3y7vsfyLi&X-Amz-Signature=65ca3e372e7c66fcbbd95d3143ac5db7618a97f5ae2c95a5712d4c15a9136552&X-Amz-SignedHeaders=host&x-id=GetObject)

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

