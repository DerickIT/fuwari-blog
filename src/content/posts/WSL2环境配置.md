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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=8700268790e50b29a1f5710632d51fe89c4499e13d295bdd02216e83d0ece9b8&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=ecc1330a299c24c6667fdb07f59325d84a3cce8bf6c4e7141c1ad9fb83788740&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=4b016dc4476522bf8396912d7dd672392ad6962cc2c46383d5ed73c3f15e521b&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=aaae29d7b57d18365972e663e1f7afd7424f7b868e3735e5c5f2e33884bfade6&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=7c76df450c480413e2559984b8f55a5a3337e0f60548dd17962d482244750e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSF263D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC%2BWoGYZ3lMJg7J9s%2BABM5Obtiii%2BAl9Y0LFu2PL8OhTAiEAqO8vX2dHYxIUqzepV6NDBNHiPuuBmkTPuyioj9FhvXgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJSW4IaGc2uxtzFVCrcAzLgYFrgNFK3GsplQ4umeGE3C70Xos4BNJKRBr8kHekoXpFhLFbV0gV5vIDWeRBLh4bQ1PXTunW5u%2FOR2kdPd7fk2bsd7KghXaxIzFiFU7cTrZq8VyJ8I7FTW%2BpDdBuWHkj%2BNw8feQSuV27m1NFm9fNiuEec3e%2F3qrrcEIDKge%2BMivgfy6YAZI9CuMZDjHdfsEZ2BdsVV38N6liih4N6PHAdXjuu9Dwnt1IVemiQduWZA2pdxweJ44ya%2F3Q1AWC3gaqdd6WuWrRkvKgGh7ZuZ%2FSdi6%2BT7KQ%2FMnnOok%2FPyz1XpvL5nOczVQbgPUMv618lYkKYGR1Gvkd8U4h%2FDPAaKsnzqOZM2oC3TVABq8EpGKjLScqao5JBJgLXX%2BrinLMpsWWEmlnSyF%2ByxRH85mJmRV6KDWy8D8jqH%2F2kAqcP%2BXg%2FunfwZ7pVnJf7pyGBkeVN1FP50DQWdPMh98JBtRnWzZRcf78UJnqbiMQfDm3lnWW5ewJ4%2Bgr525Nbab2PQ5OZd0LqRsM%2B%2BcLyV%2FupiWAXh%2Fb6rk1UmSHaFG75%2BPK2%2BkBbv23N%2BjhdSGcUQnCnxFhXVH02ImyJSFTFiwJktX8bFy9jyiCsus1G6YIbnGKPw%2Be6kZBgLyLBBcy9AHZGMI6F8r4GOqUBI4Qkhye1iEQAFYogAAtVyK3jZjQl%2FONHvWp3NkhL1t7AQGvYso1ZYwAdm2JvHDOHl%2F1Fz0DZY79nX3%2BY6mSxQh58fK23mY7AnZbKWlid3CYooit25cfY58DSgjFqqI%2Bv2yub9tgDoABhoF2YZPyAQ78hWkA6Ek1F3rvvNVdFTSi%2F2mrQBKq9a9r%2FN3fkK10RAxmMDIk6iM1Jq8eLYGhbkdcLRRc8&X-Amz-Signature=fb3267986618397c7345ed842ea3f6f9d999d78ffbea89e1ead24b3a393ce9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

