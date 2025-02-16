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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=d4a567d42013e1dac63e05855f1a9bc003c81bcf18ce0c2108d7466dd2d0b4a2&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=1341ded7bacea65330ce83b40baa08b3a6f566c35b02fe0e576f56954d2eb877&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=eb1c7f0223dac6873448745dfbb9dc8ec78165db65c514f2a2a961d86aaa2167&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=3ffb5e397007e3c8932d973b178f9f5ec084a029656312c7ad9e283ef86856e5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=df69a2065609ac9fb4af8eb784a22a32632855043a33ffc449d8aa5605d111df&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKSSKH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDl7mGzWmEVatTJrHvSaFcZaZhxF3XGtPtR8TzQV271NAiEAjGiz6ZTxuNDXXzqdedX%2BWyUQP0Qj7aZn3Su6wKf5xDAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBGSmcSR%2FlsVpgLiCSrcAxtY%2FZ2N2lBMZ271nAwmh2lYOYzv8djXhxTsEM%2Bypbd2VzXWWMCwk0wV1L138oI%2BaO2c3g43gLTcwUXr47fFRY8SaLwYH8paRtJgKMiWhwOHrkMDyfsp8ddYEcEQ54R9c5wdlSh0HS9naML0J2zZ4xD8eC%2FH5kDtnZydz6T%2B18RuI94J9wHTGmTSgSFTExAZRI%2FJhZDD01dNg38OIbwng%2BYuefdLScmk9RxwUHjv6tkTQzyAGpY9UpTUe4B1ERxHaOBO0IabrBx1n6LkPWZzmUdhM0E43sKtQ%2By8Tbr9fez4cUXZxbcakBNYQzrJi4ffA8rsKTsa3uuwAE7W1uQkewYYDlbRpqMwE2cl9qoo1IQhGosZ8hfeAz%2Fj%2B94sN95vIt6amSR%2F%2BoKzrG4yfKP4XdDCNgVBg6MEbiztJQCDST3Fk8lEcDxP%2BirHSV2qlxW58jt1NfQ9rg7BQGlFstbBkJNIFSu12PEW9uFnWLn%2BX2Wm%2B%2FfBtLMR7YPh%2FfjF91TAJl%2FtJxBetVGoY1tPFhtUvPpranFx1dMTGUQ6G%2F2Tb6QJy323hiOYiGM3lZfOr0KAp8qEcaLjW%2FcXZ%2Fd5NXFVD7RIoa770KcUbguiMagKK4sVb%2BKp8uNV22Ph8HPbMIakyb0GOqUBoJy60BZY3pfrS2kxMqQIpV68bUmzfrgp8b1n6JJwJI5Pi5s8CZb4bX3JvLxAwcWNWqJprq5A%2Fs9tkB2mTZf0UMmoOl281yoqLIItvz8eNK0O96Lbj8qgMHwPF%2FXUp36o9Hw%2FJc2Rw4eRP2f2lLNUWQKeQO4FhB%2FEWWjT843mjWmJe%2FezqsJCnFCRT0hEGMsy%2BIe%2BjTQ121uau12vIdPM8cr5ULY7&X-Amz-Signature=3cbe46d97fe741f12cb2aff58b0c6fc5ba7a77eaddcf78000620b41d748940cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

