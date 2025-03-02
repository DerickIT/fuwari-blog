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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=e5ab9b85a0725b2f109b6efe302297db81d68e0a89cad26ac2bfb7fa669d08f1&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=3e2e316330a0e107574d88db316a13084709958a566f50dacf6f741c3d618a09&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=5f479cb97ecaf70aaa44398e328ca68dec4c6494ed4266500298081c57e0de1c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=091e1c0879c1f73952d0ae2d0120fd875a3b54cb4f7d9ae82399aec49dd126bd&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=a68bae506e54d9a69866f4030c898304f6209fcc806bf40c268c2e89a1d183e3&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TRQHE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T053759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHyI12G8NOY28GjYoIbgu0gD%2BFcMmvIuhmSpC4TU38HrAiEAlIq4vQ8JHNExQ12nXBzIA4i21LrIsNS6OxwWw%2Brmif4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIBCxql3Hv1Fj%2B%2BKSrcA8bM8K1tYSDYOr1shD%2BzKcZrqJFmRlNSxXzsdDApmE9F%2FEb5HYjBX06Xa9NIeUuRquez98fMR9VgAt%2BfWjW0dLf2d%2B6nTIFdzKYAokCKM03cNNuwUhB6PpA4%2F%2BNubK97YxrTwtoGwjc%2B8M9UOFlX9ko%2BjlLytR6jLNXwwqgOm7NxMUA%2FVV7oSHojddo70GlJN0m7kVIwS8%2Bs9NlYEOr%2FxRyFIJmhFJdobY3%2FfhxLykTdxC%2FJgXyMLyokHqq2KqSW5JoNpkN1XEoeUUEGPGUSBAkVW6zy98%2FvM1BGwaNjDrwPThG9UlEoZxfZLhyA9GQEOJteLxo7gqMtRzeAS3MbKn3z8y%2BHl6xNF%2B9%2F%2BhW%2FdIJ8F8o4i3WV1IiOanDYCIr3ptvhd%2B%2FSlalfBUQF5k2p9oAkkN%2FwWBnGpyxPdCfhd68Spq3J6rPFGd0ZYgAUsRwRuoWVaBY6vRFLhs0Giw05it1NsYVWVmYluB86eZYzedtPsB2N5Rkbzbm98OvPD12APe02Mpe0hRKB0xKo%2FNxHE%2FLUUuPN20vJlQIeoK172WsoHt1qVEii%2B0zmEnis7Hk1OuFKtvfJ346OLxsqyM5oqhmwWNWlNDyf6H29SMh6Y5xMrr0t1hKlsci1iKUSMNHVj74GOqUBYJDM7oUoQ080gfBsmCHDMo%2BD9vfrEecEtaiPLSeEhvp%2FI6goL5FR%2Bi62jTPtYJ6v66tDiJD7cDU9XiVNpOjHCSSKhXQHtayZt52lrHSzx55GvWDW0jljZ5fDDHcwPfGm1p1%2FsOCdilP1GbD1piJDXbDdlfatcKK1W%2B8Sl%2BFBUGK64jovjl7Rc8UZa0prROPrLBNfSWcfl1IZFgsWmdt1C6xSQQ%2FG&X-Amz-Signature=70070862c6a8caf20bcdacf807f24a1e3741d5a44fb5450de9fe7a1559513d91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

