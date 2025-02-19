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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=40a0afef50ccd0defa2e14a13e4e3d662a5f89392d309d291a30db535ab10f82&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=6edf3bda07f6edc5cb2c5a018bb091fda9a65e5122624560dc239f3a436c2ae6&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=01519f7bc2432a95387de38dd5e62d681f25bbe05d69ffa19b982841b2bb6e94&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=4eb55dee16e713450535ddabcfb86c0a5cbe163b134430b0c5e6f798b3c52e0e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=6f9fe0d3af6dd20a2099f0715aa951cebbbd105beeabfd6fc11b8348b0d83b67&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IA7RGC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T053744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDReOB2JYQXY1vKobNlf1uBnsMeWHz18sRnVviSRncYFAiAn2GVy2RVLBvN0w%2BTt4hJ4YatQSsNUtJcSRhl5nV6a8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzgIhYs5Adkf2aglKtwDbFNEWkCyTyzw17iKFFiEEC0tw6XrrkYMeu7lwzsmzPm4LVX99ypufwwqKKBnFMd%2FZeOVqeCdkGOcamvb7kzQOHABN7QWycLRldOisWhzpOE9xFJuWbrAyGL7t1X9Fw0xCJz4KNQ0A1TjoXClsUFS3liemedrPoXGq%2F69JElX2EVH7s93czFGk9So8DnjX2iM4gN9KbbqRpRaixb%2BtKR5wQxe1L0JulBEr1NfNPUwYRFdvi5NMURgjlX1dNYQSqqxW2TIG6g84VLm7K%2BIText%2BTiwQqSC8AQY%2BkQrNW8A3pKGTwhuA19tIIh6dHtiEzSOE1Oz%2BUn8K5nl5bfOd8pNuAhJ4ewL%2Fe02x%2B30OMpy8qnXEUBqsKsK3BMXE6eY17%2F8asXMIWGRjD03YyCf7%2Bz6rKSrGL26Lcc0x981%2Fz4gWemDfLQVa9aJQ8HvMfmoFEp%2FGZuFNbK3RrYC08mMevZot8O42j07wXhBTneGt4Ju7pHp4NPe7P06SkBvF4NF9iJ0uEIa%2BhaTkOKzxBfxcTcsNeC8eHaMZ2nvqjk7zE8rbYzhOdxR2x69Yzl49%2Bp3UspCKQLKtYnxX%2BMVphM%2F6w1KG25QkTKioMdL7vNQzEhab0KITzPhEpuzAa9L7O0w5sPVvQY6pgHHLaKoqggScX%2BtJcIj85HDN%2B182xaVBzPMwVszQJs9exl7jJ%2BPBvn%2BN0yKEXfOtO%2BJoMe%2F6z5Gscp4C%2B3a7jForMxFbtQimRftMfG9tYAOXtFEOo1AfFokkESAMbyu7LOwbhZbC908rYAbEI6XEjuZIqBFO4OZ1OOPyBon02jU2mQL3%2Fd3rcgQDyQ2PA%2FotI8V5FicqHU3IJ%2FfWyoebAgkv2VHWDvq&X-Amz-Signature=14ac869c44f321a6a9ea0b265f7f1543343a7eb07a58f60ca6074ce7219e42aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

