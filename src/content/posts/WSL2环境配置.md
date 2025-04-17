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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=58f0049da81795d2754424acd225b6fb33a327d88e4330f381a60274fabd8208&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=3ef7a127cff26f5c9f787fd230c0bc81975b2d977e976b23bbde55daa1844b63&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=289e816b7865cbd0467bf5e7f3ffe3ceb8016f5f095347d33f3e0886908d2d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=420de8802e3a920c0eb17f14ac9722b4622c06cd3ecf07cb065311d976a0f307&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=80a24ffa34e4d842bf29255d87d34805ce309b9a3182c911e776219de9405e45&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXFFIOX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T054017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMMHPSM%2FOShTJinWJh1KxHmWp36JYJ%2FMrABoBKe648fAiB0cuMC%2BZ3D%2BNz0tMhC%2FcH1wYb8y7mS2n9i64q%2BSZc2tSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM%2B5Ixsd9Zeet%2Bk9%2FkKtwDuJF8JEkQ9BqtaRLwupz7tnECaSgkdan0zh52BumH2pARgcA54OqUdTUSGX2JaHJKDi%2BK7AbY69DqlId8C0nwdhM29mWd78xqWbthDxTMZgG6TRBVYnIwwpRrcRDJ3Hw%2FScOD7MZ%2F9tCjurnej%2FpFc%2FtbBLBAoTvSTpLWlPU6VtlM11eojyirWmySLpr1SFG6kZ%2F%2F09tlsdkLTAMhD6skLHzzDmmSoM2BDXToMPuTVFwzHUyIu7cC0elqMth2ktQbTSQhWtCJzKo75UarMX2k6WSA6H%2FwuAMvqfLdrOpwyprRIws59tgxYG%2BJ9OVcSyM4UcmGhpboikfeeHkTWaB8xdjYyJQ0i3O3Ji0lgHPDNXs3BsAgHnZC4UH%2BUo9J9OSESrqvN7HtGYz77Dh6I6gudBDIUkxpJ38UzEI7yhRY3rCdp4xY4Lq9mehJRqfONNim5g2SUUosnz0AReujM4z2HEju1UjqVpSVcNZeoAInD4DS5arPziR7Hs43JjtcufFfT7zXL8U1QvRFDp7Am5RpdJjCZiFCRmi92J%2FT6A6O5UfBkcT6TCv6u%2Fkji7OZI0zrjs05w8ukL%2FEt0na6iFM1FkpYPsVnU3WtiwJWogpXp4SFb9kNGOFowQBC%2BR4woZOCwAY6pgH6qYOvzefTXA098gWfUKKbGGgz2W6Hvkdi1zGRWUZFh3lG4HTC2HLp0%2FZ0%2FsVbjX0upqdWGQ52ZVRPKN0AIPayvAddywRksha9tTcSchIpbc3OxHHla4b4lBaopt2YG8oEIizGvZftyz0Wlpg82RNCftzqlYmeptTdIiuKEh8LiHglxQxmWJVvd0XZ36Ool97D%2FhLhg7fovwwdZQrpRT0S9u%2FC1gOd&X-Amz-Signature=266d6e39e1e3a77dcd18e7cd721ee99f69f11d6d0a59ee2d2dd43ff55d981e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

