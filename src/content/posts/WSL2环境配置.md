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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=b8d9a582f2d0104c523eaa04824306d88798d470fc84d5f58cfbac2df12e6c9e&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=2edb14ef85174f89d6701851b273766187d5b77c5fa2931b05c0b1d28771e161&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=24f11816601919accb899effbc61b89f169b3b4f8490b556c513b3cd5c0a6e95&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=d1951800a44dd49338239b5a3e5aad99ddc2a6a3a76ff2fd3044cab5fbfd83de&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=95f05798349a4c9f3819aacee56d066570b478d7045366102e490b86d07d3fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LUTHIF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T053949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkrB55lCkzA6D5PGO6AylaStlCAKYvAbwaZxASHK5HWAiEA8if54dP18iDtfumKGyt2JpCNwsQ4scBf6f5r08ff7Msq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNlUByJE5%2Bd1WgFH6SrcAxtHpL9IwvJfI6JV7wJzYaEZDnol8bT6LgdV6BMN9HFMOlhk99rFHpC2TZpPnnHUOPXFLssdghbNloLsgvwjFHhVcAGSAHR92JcONxLVAW9oJnP2gUa6bLMhkhKx%2FsR3K1JFC5AsZootb7Mhn9YO1g1V1F2PQr4Lsuu9R8F9tvTr5jl8G99QG395nfmOOfNen4bQL6yON9yzoHTn75L2KxI%2BlyurPhBoz%2B4F2daNijYVtT9nhcBfNOV3X848JHdC1qmzh1FnB3Jg%2FJgfux1sE6CLsyhyy%2BwDgWlpFjToNk5gxWJyTqu5nI%2FBhoai5X6LwTHGgEr8uvSOumRC6Q6rFwzcWOVK03bbO1ixsDf2rV0eR2yBykPCENOka7BSzPOXY4qusW3ULc%2Fw5ooMXZ4g3AUg1zTPf%2B2X1ahBemYq4fkR39gBDY7tRQ%2BZ268B8zXLeqbFt6d8KCG4Ra5yLnRCpvBYdl4NfC6Tyb9MZDdIewxP33MS%2FBnoLZkoFrn%2FsoIqD6NgIIkMzId9AG8CfjYtmSjxT1RJEztwgP7gYH58V6A0NHJnQ0SQ7vpPF10K9vZalkwPbajr0InoGlZZgviWihxyUGn8EXxuCqol4QpZxfaQZdGaim4WVdTKVi77MOrCh8AGOqUBcrFqH%2BcKGzC%2FiEYiNbzkkuSIIxN5X8YQFOLxshczyidACil0LCq0eFeex6No6lB1qiNdQG32rp9cYGIF40pU6KHcQkf8%2BbwIxk1KLAGy9WQBEl62onkDDRwDJF5Il83KhVNs1huDPmVsZdCFQC%2F%2FaLfJOhnZcXtaWe0RTmzt4lI5qNvS52%2FQzw7ZxUViFJ0Ae6kKgIFryIXktfdi00BVmDPb2mnO&X-Amz-Signature=e1e770b5d0473e52c27e6d2cf57a4625989754a84155342230b43af060b6d253&X-Amz-SignedHeaders=host&x-id=GetObject)

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

