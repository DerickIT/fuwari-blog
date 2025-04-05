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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=e53f8762e42e90ef025d7a702e8772b1799a4dc1ce6489c46293ece80664661d&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=3fe2ec6d67d418dfeba8708b7cfb5b39fdf90f8c592171d11075176d7cf8e3be&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=5994672d2fc51fdb171734643913cf8f97e3e596fa5eca9a20e33d1953975921&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=1408a3adc62423514068c91ac8fcc08e7f3dd7c3c7bf09727a608fcbb5bda300&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=f0d1382803d0a85115940a7a121c2f4f516e096198bd3de534ca6f0275d7370a&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ5EEN3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T053852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH%2Biqpia2L1sa4Lgr3zEqkahLC8ndiz3Upcfs%2Fmr77RAiBZpu%2BMoOkX36lBNQ05%2BNCSOf%2B6TgBv7KggdY%2Bxo1b11yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM38ToZxQv1lGsKP9FKtwDOygewgjxcVZaqwes%2BxLuEw77xRU36Ed8NWQZ%2FPjH3q7LaB7sbFmXe3VaKjwM7E32%2FsoAUOyIalX575zqrmTlaFufngHqTtzTiZYqDJKB%2FwlmXS3zZf2l%2F%2BzNKjUQDscCLyZTM5AwZn1vQJ2IR53Lmy7iRL4fEA3V7RRi6PUn%2Fkw0Yz3xzcsCwoD1%2B7dezS%2Bk3sTP%2FJ0C9ExSooZoQAfMqtzeadQmm3vyUzNPK1JSOpWY0uFfxv90GjlNzFpRHdFjFepoCwgFQ9ebgt2tQtM0CzWQOTTq4MPD8AkgpPxiNqhaZmPnSd4V5USnTjOXJ5MrTiSbCapdc%2Bc9%2BooY0nNEmHNnYfNHAWwQ0b5x5%2FVUAeIvfzKukevN8wZ9DSYf%2B5DmN1jkm1jidP%2BSwRUeKhFJkZUPEb0Ee%2Br%2Bug34MigoDJmUnOCBw9WaeHIo%2Fub3%2BlSJPxA%2BW6gCTqeyp0ijqqIFbOemq1KZZJW3c1zMdiODJ2H44tWEiRU9X9ZXGGI1LmTTywVFYyZFvIjJ5a4ASr%2FN7CWiNy7MFKUPfq9LiJxM9%2FeIqgDu0w8ZF89rNMWTGZY4tEO2dPWYAYC%2BDmDpYuwrkIlBHZz0OkKr8zCyWtf5X3RQlmaTFLiqsR2qe%2FIw7e3CvwY6pgFgRNs3BoRc9iDJCjsszM9FPAWU7KTn7IV%2FsRH2bJvhEUBbhidOLcAKXMQuhd7BKkThMunOUtv8hthQH30GP%2BeFHhITsUKQJ2HkoTsrkzpNoc516uOH1Ibd1%2FARKxxbu1tE0Rmas1rhd%2BW6HBtp6slAFfGiopEHmMJ4Q0lDA6%2FGrU%2FB8SA33D6jJGbnY4bO%2FbuNlkKveJd0c2IpXLNAUWf8CGMkaYHr&X-Amz-Signature=53ca307aaa418febeaea159b10b9bc871d0035454590b23a83fb5bc78eb0ec09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

