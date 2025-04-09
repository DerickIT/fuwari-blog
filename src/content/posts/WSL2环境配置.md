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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=d9b2b0d4727af1952ffa583a5560acd77d85bf3e600451d7d85a3c9d9826c7b3&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=f7796b4cb412f9de0757f30ea6be05c1adffa8152e596c159b271a3709e078b6&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=6df6451fe9c7408af2dd052afceefc5479a33cd25976b90ecd4fb63918dcfef6&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=3be0cd941e3dd7ec8d0946d1c747c07cde6713dae611740abbb8d6d693a51585&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=4bf97a821248c87366d16f5333e74e084aa178ce1469dbee75f07a46983ccd18&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NEYAGY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T053954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFrC7j1vc%2FtvimOWNdJWPJciXNn6bOdQNIBy7n52rj7KAiBW3iMTYp2b0E0aS0y42A3DIOvi8tpZqOmT%2F%2Bdbs8%2Fb2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM75X5c9axnTC5dxDiKtwDLuJx0%2BKFpnWiQdVabmOBZR9E25yToork%2BvweWLMc2YXT1v%2FYAL%2BOsYdRyY6P36t5Wv9%2FE6PaFBUCjKqEX2m%2BJKfCXVrgdrUKUguxe5RHJUbAQLJnwMX39499LcWAZO8MUWnECENzxw38Yf71x87KwQzQfMutvj0vsE7GPXWDB%2BqULnJ2ZsVxmyICTdlMrMeM5Jbk5YN%2BZ28qlRgLuhwUJubIDXYCxPIFqvG%2B7ryn6xEZUYu3m%2FtFUz3100d81%2BAD3IxzvnDaCxjgETPaDHsbnB0I1YcB1K6cMVo0dwwDuoFa4jgnO5HWSKHL6SUsUvqtws7cu5lg4Abb07QBeiDzabJmo25OxO%2BHw%2F3niFVjaKZDz9qvqmmRJR9QhcZeE5Epxmutoy6W%2FpE%2FW3BVYtKkNAM%2BB0fXVkqrNMDhaNDauVZdrgRNkHcmv6AXgjuMjGa%2F33gpCkktvpcrcPZa8Z1aCHmZ6oZfiLxWCkNAF10sFT77w%2BrYVodJAVQaUs4pb5ZDCS%2FI8TEDzmYHHxG%2BojKu%2FwnWqT5F%2FqOlEHZzq4MPVnLhipLFm19FCxRRGZMS6rrsLG6JhmV%2Bxqm%2BGKXJaqxOA51tE16Z7XFgw%2BVPI4XiYTd8H%2FpKhX%2BD6nh51nww7PDXvwY6pgFg43ZsXWuzBUKaBb2a%2FTKsytv7N4%2BDLtJEHbZZGyedW1Lr5IDha%2BcDEfK68zd9u9Rux7qo24byiZvFJwLt%2BvTX0Js6UvaZXEB4k6SzyDymVM5%2FI6xNYNAJO5fdXAecuce2rLRukx7uzHmk7adFHC%2Bm%2FgIAjuxMwvBl4MKusdd2AkjuewTP7H22XLpX9oZxwEsTqj3Bh%2BpLq2TeVxLKyJGxV3oc631W&X-Amz-Signature=a06b7072228139188113af8586ec1f32d3fd6ca9c4078e2a5afbfed7be280eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

