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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=b88156f6ffc02f42d6ba380fd5e3577f26cd16a336177bba5b591b53d8ed49a4&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=f3a089f009a72507f8b64acd873f3ef64dd7598426691a16c09f34ad091b4301&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=a040ac1f9f11bc008efb91c32fd233ac522213781d9c2f4226aaa70d623433dd&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=a0b2ebff4fef078107cf18503cbdf52dfcaf321dc5e8c50ac134724dc99deddb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=51eeb4a712c16734ccb73186020b6390b3f312832c806f027a19df44bdbb8c51&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMCMEMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T054036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2o7WrNiAYEoUOqF21XuPKw9Y40DyhzemsFGYqBOoKbAiA8Gvk3%2FL1YhoPL5jz2UMMG6LfteUUef8R7aXKwFqGl%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMr2rwFOPUV2nTRpI5KtwDxnZTgS%2B9DSwBtsoPLRsivBOYcCdM3YT1Q1pnaUS7ks45VPujOgLcUTDKmeQhlxDYjNO90sTDfWrid1PAxKnu%2Fp3OKx1oIvci7HOylRN0w%2BI80ScyHqmRNwiia15Lo5cmLyqdcq%2B1Da4fptnX%2BYOQYVDUYjbN%2Bpw9ixJRdjOkxasSevtDoTUuiKES%2Fm7%2BuXQslkOmZtei4wnFejtziAv07dMYhEMYllTfT3D04bKCOL6b%2FOnR1bs%2FErOljFAlO2AGrKCWpkY%2B6JtE3GcLcvMoHqi%2Fz2qonxOEhIiHPeZQzthvigihq7kKBJf6HmpqgV%2FeXVracRwK34to%2BewaqNchVSwPcWfB%2BjwQ9l0MPmHGPMw%2F%2Fa55KlbBl%2FE2BGGssDUI1sleA3e6i3qTCIKf6PoqF5NsvtmRg0B26CD0HZUBsXgZfKOkGULMP6X3V14FaeU%2FIfYmHF2blEJ058elrEDaZ6wJ94PGa3r1oZwl1Kv76%2FVJXO%2BxYCLv19VcvTIzdQk0CxI6rSY1MK1pTbbsqZx4G7d8BQHLYrdo0XOKjAG%2BZJdO70Nl8n8LI1OTlMT%2BNthqJkcSd%2BjQhdbbeWu4D9bA7UOHE1S1gL%2FeaTGFsQnTFDRF%2Bjk5tG1vhHa3jo4wkeiNvwY6pgHNhX%2FrrdaX3rRQR1NohEf9sOQVU%2B6l2Gw2KO8RIXTl6LHetV0Obu54NU3XzvsPI5FgWkJAYWA0rvkVEkFaLZG%2B6ksB6Z3PFwu6ugimGHhXuDLBHRoMn0UySBu3cXKy1UbrBClfb5rPwGsBgYHcGpcX0sXNVQ0ZnBvVyfa9ml8YZc2kiUL05q8TMrHOgPoggCxujm6GocTphjTN4z%2FQLSkSM3ntVqyA&X-Amz-Signature=7d1bd3f371a6f38ee0ec8eca4ac7bd6a05e24db362cec71ccc2a3dc1e7d62f09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

