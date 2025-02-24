---
category: TechKnowledgeShare
tags:
  - CloudNative
  - Docker
  - ProgramEnv
status: 已发布
catalog: []
slug: quick-install-docker-on-ubuntu
title: Ubuntu快速安装Docker
urlname: 3bd3cd5c-012b-418c-93b1-c3d325c3ca3c
date: '2023-11-18 13:06:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/woodcuts_3.jpg'
published: 2020-01-18T08:00:00.000Z
---

Docker是一种流行的容器化平台，它能够简化应用程序的部署和管理。本文将介绍在Ubuntu操作系统上安装Docker的步骤，以便我们可以开始使用Docker来构建和运行容器化应用程序。


系统版本


本文以Ubuntu22.04系统为例安装docker，[Ubuntu官方下载地址](https://link.zhihu.com/?target=https%3A%2F%2Fubuntu.com%2Fdownload)。


检查卸载老版本docker


ubuntu下自带了docker的库，不需要添加新的源。


但是ubuntu自带的docker版本太低，需要先卸载旧的再安装新的。


注：docker的旧版本不一定被称为docker，[http://docker.io](https://link.zhihu.com/?target=http%3A%2F%2Fdocker.io) 或 docker-engine也有可能，所以我们卸载的命令为：


`apt-get remove docker docker-engine docker.io containerd runc`


如果不能正常卸载，出现如下情况，显示无权限时，需要添加管理员权限才可进行卸载：


我们就需要使用`sudo apt-get remove docker docker-engine docker.io containerd runc`命令使用root权限来进行卸载。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=c7cea0a5768ff04c62ea106ad544edf1d4ecee06b1e3d7aa0926227b96140cf9&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=73704b7b0eefbc659bf8fed83ff8d632224cd1bb502cefcf3d4b23ce7596c2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=5dec990664df2365ad0bccccbe043db49d972644aa21abd6ef6a9b996a24e7cf&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=96b08a8a6cc142e37d7ace60602d3a139d0755f8f1ea2c543390fa8294d0d7df&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=7b081988dafd027d93fb8ff490441b0360cdc5f302995ba66e42dc5184880a36&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=b88f3795fe2ff476c4e7a88514a45b3e22893a8810ecf2eb0b3db127f7ef1304&X-Amz-SignedHeaders=host&x-id=GetObject)


**重启docker**


`sudo service docker restart`


**验证是否成功**


`sudo docker run hello-world`


运行命令后，结果如下：


因为我们之前没有拉取过`hello-world`，所以运行命令后会出现本地没有该镜像，并且会自动拉取的操作。


**查看版本**


我们可以通过下面的命令来查看`docker`的版本


`sudo docker version`


结果如下：


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IHTHK4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T213352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXaKIuWBoMS4gWWq%2BjH8IAgRE8g%2F2tTUN11Eh%2FWKmeAiEA9zoY4plHIyCw7zmFbAzu68Z1c3ynXv%2F3tG%2FBIuaek8Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBABortwzojMJFbVWyrcA3Lza7ph9yEP377jyKVAeAnNm86eZuufwSLCmXLY5UgDa68%2Bm3C7jp6AZDL4Uyv20FNjWIeZsBv6Ys1e3Rtt5tLBo9ZsBCIvAEviiGGhl9DFohC3gyE149FybRAKCc4VmTT5PYR2hVK8vNZGRoUluKxQILx4FASiaJ%2F4NrxoZW3a4r48uEtwbvekWbH9XlRA3LE9Ri9GczWxVD5oa86WHbe%2BRg%2FUXjkb5%2BTtF%2BpstlSNC4Lby%2FZotAstSRO8Ebsqh%2Beap8Bgb215%2B7%2F0h6v5f9CQokMXwVoDimaMvJLwyYT9VZumHeO4%2FTSVQf33Kk29R5qx8YrkDqRff8%2FSe51kwZZeKi81VkWhce6uYkRNs5R6eLVhS9TllECB6X7SbHHjdn5IqUy0nUmLuz4y9xM7yk6fLbuAPjZZu0B9Wkw4gXi%2FYxKJPC8JKK%2BuDNalxovxHoTFgqFc%2BMYZZ6Y3ohw3nCXIL0yuJCezzD772ilV9J69HLeXFAYDGKtQbEH4WhG38SaGj9%2FD3bPE6tPFeAlPL8a5tTJLICXe2vd2rekAz6dfdu8bsbFM%2FRQe3c42scPymwTSp%2B5cEHePFpLMkZD6wagO0tfbA1XXWx3YpPlRjQnrS6XD1wSS%2F0LuheaWMLzG870GOqUBH04gGJmADnPM4vE6P1NC1TQCDdSQsGOX0i98R%2FCs1eSgWmqc6u%2F5M31FG740OTm0%2FxOmC%2BT8fnWoo7LFxo4cXb3SIToIjzy%2FGj01GVv09lzM7liHcNUWIZ1OIX4QKVUigrvb9y%2F8LNbKeH%2FQx%2BEsbJ0Ti%2F%2BuS1%2B8%2FOqg4aZeSfC%2BijTQI7zeULBm7%2BgwekxIhc33%2FEWWr3s2Rhe3GgmkRTH93VsS&X-Amz-Signature=68be17fbccc12d7def52eea6721adae98fdfb389d330eeccdfd646ec1105ab3a&X-Amz-SignedHeaders=host&x-id=GetObject)

