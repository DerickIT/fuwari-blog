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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/39952d0f-7851-4550-b715-72a33876c773/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=c69e0287e95ac42f82bf2cf13debc3bda8c5d84f04230581beea1bd86513216d&X-Amz-SignedHeaders=host&x-id=GetObject)


安装步骤

1. 更新软件包

在终端中执行以下命令来更新Ubuntu软件包列表和已安装软件的版本:


`sudo apt update`


`sudo apt upgrade`

1. 安装docker依赖

Docker在Ubuntu上依赖一些软件包。执行以下命令来安装这些依赖:


`sudo apt-get install ca-certificates curl gnupg lsb-release`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/b5a549a8-6621-4824-a151-93e8b0592f14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=52ad4c4f36864a18def77497807b00ecc3bce55d806f4567de154abcff6e564b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 添加Docker官方GPG密钥

执行以下命令来添加Docker官方的GPG密钥:


`sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/98014b5e-f5b7-4b16-804e-ab6917971bd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=045af9aefa6a3a4ec82fd3448a9ffd0893a31dc4090a9444e1d8222609ce1223&X-Amz-SignedHeaders=host&x-id=GetObject)


结果如下：

1. 添加Docker软件源

执行以下命令来添加Docker的软件源:


`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/7fc5bdbe-9d4c-48b8-ba03-3309380f47ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=e4c5f3228656fd89fd67219ee275a2fb055257e6289f6fb49b504e878812da72&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 安装docker

执行以下命令来安装Docker:


`sudo apt-get install docker-ce docker-ce-cli containerd.io`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d5ede442-ffc5-49c3-a76a-76559a797244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=bc3696f14ab0a0d70fc0bfe34b33137a0a2e0d6c0a970782dfb7223c38f2b811&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 配置用户组（可选）

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。命令如下：


`sudo usermod -aG docker $USER`


**注：重新登录才能使更改生效。**


运行docker


我们可以通过启动`docker`来验证我们是否成功安装。命令如下：


`sudo systemctl start docker`


**安装工具**


`sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common`


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/0c3615c1-94db-46f5-9743-68bb221a9964/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=4243b12f4fa9c6f57c35077d5633a950b3452087c6a8cab16bd03f430e1fbf69&X-Amz-SignedHeaders=host&x-id=GetObject)


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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/efdb509a-3c1e-41a3-91ee-a1bd88793688/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTAU5J7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T213319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzngM8JZTZmtng0gY%2FJdfFI1%2Bdx687sOrgGWTP1r%2FGwAIgfFUEqiYdfHM%2FpwLEvn4zZ4JoHadTQLacjVOvMA7ZnEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMY4UePFM%2FucfIGyIyrcAyKEtNBeb0jDJRA2BxYW%2BwS65kHG6U1gCbcVzT%2BsRDsXw8TSfm7fKIAt26%2FF9kjO6X%2B69DTCo%2B4sWiFj%2BrzJs3G2NkoeQ3Uoz73vhcagbgs4SCKJkGkA0Wil2PVKPrS9eSldAFSwH9Qx%2BCRsMVhi2Ubl5kT9hQKR7g9rC0ly1HsaYd2igIfymqDNC1X1yu%2BOtBCtzVwc%2F6eljuFTSXebNi8C%2BbE8O577Lo3LI84gFTu4Ng70dqjLrNT3bRgbXufOYwpNQGc3hWVQZbRHZYaCDVRtFHW1RNeYg8Oz70Qygz7gDtHYTJf3GSNEXGRgdmpLfDvmZSHSVvhAyZtFY7RhuIOuT7ykyBkmJiaAkdUWbY4HimM94%2FNNHGweyvQaJQWgx23SuenxY2uZAf57j%2Fsb%2F8O0WUFsw2MIq07GVKp1FSVBe5P9qiB%2BfgaST0%2FaqjugtaImInsuCOXxyn8USk3iFrcbJ6Qk0rgaKaD5eeTC1izm3vmXS4nPr8m3kjfIMDPP55gV19nw9ecHeAj5%2BZuW3ahB2nnH7HO%2BtDckl6MKHBIObOnlMILQOQqNLaiamMwUTYvC%2FIAtOdu4mXeh1%2B2%2Bb%2BHO1Ovp9PTa3ujwWLXMxPyPDEU%2FzjoQdMxUn9YIMM%2Bqub0GOqUBeVdC%2BMBA2x1m6q%2FqbN%2BmMfkC1bPW5Wdgha%2Bb3UlyGfJOaVCb%2F97OCzgUqh14aHKncfWz%2Bk6Hgw8D%2FXjWCEXKfmg%2FmO4KSRobFINgxPqZ58tR8dfihdtrpQ%2BMd4VoLHpLZsrtP%2B%2BogZ7EF1Q4vszRM9OeUsL3AFdIKUs7FFrJbbEhbD1gWCmETfyv73lLJRt6D4hua%2ByjkQnZBUkIn9ShZ1kFGTp8&X-Amz-Signature=318e9d3f8eef3f586164ab973457a06f3e8a0204ab34a23eaf8d22a5268b88b4&X-Amz-SignedHeaders=host&x-id=GetObject)

