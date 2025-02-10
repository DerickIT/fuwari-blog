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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=3ee64f3bf73e66b366181d515d7f51437f346a30330b6d9a0ebf997eaa5f2425&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=8562499d36b2aae5300e07c3bc341dff78acd6e067e2aab355743d1f13350161&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=94abac4f59250845bb69724ebf03a71bd223639ed771ea7513548a6a9a95a146&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=4bfae17fbc9551633d5481c5a2199a19ba011a932d602784f24e2a03f4f7f290&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=a1ef34ce0e1a1eeab2a16e22f1c6f84d2c9bdabb4395faa04b26da6de14b3e93&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WP6457%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T053758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKQQQcKMDWpa%2Fpnbo%2BCqnCatT8Rb0CIKien04BPeiWHAiAQFv8sOyPQCIu2cISXbmPN30TWxhLwL4P9ReESXkt2siqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0KHkTaEbkcBfrLFKtwDPDfadpw6RTXbh6BDPavq7hM9a0el6FJj9u0WfmkSPuXbY8XarVk5ORRjIp5gYq7Ip3fd0a7h7CPKe9glRQkF9WJTSFJvEN78eYOHs1dVYRy81LWihSxpgx%2FHABPoX%2BbdfTxGvYfpown%2FxoAKEEkN53O4vuP0qLkwQNcaothrth4hH8FQQPUXd31tZJBnsr8g6VaIhkNTlW9fIuYzU6zynUOCit2fB4ZH70Q%2F9omE4Ua10dWCSb0xZIQiyqOANqPzORVDtz5FHIxdr23o29L6VjRKIfo8qVqOvPTDFJCdV7rs9ghj4c5a3pPb7zMwWbavgFXeBdfKnfp4KX36xG4WLhLTXvhlRMdw7yfUYOpqOqJaYbbcFvfln0WOKL1FkYPGdUeHft1XwTBh8QxnRfUoi0Ucd%2Bz1YlOwrn8vxT1H%2FZXgnjBN8dGPZGAhb1UuloklmABHj71wpyjtdzlD0nj1zqd2G2j705S6RA4VPulZlUlbqDXks6CjxXMTOEYxJ94GU960fR57zB31bWtV1jcVx1mSGL8wTQlxWdi9XqmUabWuqw0Ct8UVdXxQb%2FFrwmEde7OczG9HDtogsbdT8aHb02TIXsKfnOV9bb9XoZg33X0OHH04NNQYDAGTmPEwy%2FilvQY6pgEVMb8h%2FkVuA0A4wfYma2Vrjgklo7D9ExFvfzT215y9R2v23J5mdyJNZ1GEbSCaQmKL2xHqVwUhd87KIgcdGR9USBzAP0v%2FlNFUYj8DiageQFpQp%2BZqs8gO4XxVnLYn3a%2FqSpmgNEobtEifEtaIFKaqB3UVwbdtlmRwi3Br19O3wFALmmKIVQpOhRU6pv2WhVW03caqTtY9GAtlOlF2fVbB2zktM8fO&X-Amz-Signature=856c2a609d2b136af2b03b679591ed6034a84b98d76c477ac277897def3ad00b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

