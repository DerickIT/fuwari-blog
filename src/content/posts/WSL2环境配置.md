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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=6c99234260dd7259e7f25e7652d4d862466093dcf2acef5d7b3d55fa010ab4a5&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=48f4dab32610fb137cb9f646367a0672e829c3a37ef1edacc2114a6ee3d3a9bc&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=eb84c5d65b83ce3d2698e6c25f8daa391cd94d84125c4e14d124942b6046bc91&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=dde3622193c882807c5f33e3f139b88613076279e0284046c176587118ad7fdb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=dc1c06737122e18daf03249093a1da88a10f5b02f5cd160007d39dc34dfbb5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRIVHGY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T053613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC5nunjL66T62p%2FfSUTWDbpU3k8MQcAg%2BNicWK9%2BYhGGAiBpqkG2cANsh2TeCp9xGdhau7EjNhGlcKNUvygH4laxTCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRbyem9Vsn8H7nQCJKtwDFB2%2FidWA2eYq%2Fq8GKVVs%2FrSg1O8mvyzCg9YSZ7nKdw5NnSeljXsIbhB%2BjhspTaSM6w1NCccc5Ocs2rfPNBWATSNBa%2B7RBYxMFIdsX38%2F%2B%2FCZGdIbxA9VEDjrA5CTn9rseuMvEIkFfMpN0Uz7ED6Qc12S5MT9xycfTVHlbhDvqGtxbSXHglRnoSWcSnbrjoAT2YUiaAyIKvq6euczOeQbfnP80NqWw8moWVhoklpAHNlfJ3rMT4LrgNzpqnctZ9Tc1Dz6f%2FBCFE2tM56yxhebxqyyHxAj9wnmy4HrsPRTfKD2JbKu5obNb9ga1DprbK2c9i30DhCjptNdHAh8Rh29TkxsJiWU%2BHyqMay5uU3IzaY5pwPdDRRicZ156wwmCSGgdutLPeirunwzlEhLrpJplwf8Ijh3rfYUm0gScekXNIKzm54dbzh5xjh6UwRG3IXlnfSfmBzANeJknErZ2wfvGwWxHBZ%2FBTXxuL%2BemUIuMTZzSf7caJENvrXXPvC46FQEFBCVP7qgcyWtcJPtZDYpoA4BEWLhHZ48Ffb65PqmpLLqaoJjpyyiGVoFhf2fvy3XVNCrp7YyljMGptWTQtpZE1v6BRvtlMY8IvOP5XycIYGOnPCKkk41wxazEhgw07rmvAY6pgFyEiZ7%2BToa6kZc1KvMsidvu6U9nEMBI7HaaMs%2BX%2Fe5%2BPhQbo3i7NlsRq3FNiNl3Wvitq9cVc9CAhrc25HchvmuRzK5eBfngH8A7657%2F9bHKVchIqI5%2F8OCzd91sHTSdxYJPRvhIcnr776e1KKmQ%2BYf4Jq7NmE53Z%2BNs1gOkdxvt1zIWGN9DavIWB42Ws%2FOByovvdueU8BhJeienQHItwtCGbBbopTo&X-Amz-Signature=fcab7409e35ac4cecdcbf37d65f14f581134c513ea6aacee3a2610edf559af03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

