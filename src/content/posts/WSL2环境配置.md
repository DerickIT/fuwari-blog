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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=46951590b5df4bff581a0852f1bf790559282a57d2138e862bac94c3b8a4c068&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=71fad6dfc1813cbba85789ca259408884857d8f3358b3e286cbe753bddd63ca5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=9b705493a8940b83dc54fb91e705248cd2734594321227bed93af569280f42bc&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=6566e39ac1e8ed78ada09715dafaddb961737651d5148d5753aada96fb9464a7&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=bf7a7d97dc36c5508f418aafff6f93bbded072abae0cc4a1c17a30441521c871&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64R3M72%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T213520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacLQzFf%2BtNx7npJiL9deVNhSXNUyBekO%2FoZyWLQz5qAiBnh07vQX6Sa3Lj%2BLFVl6ag%2BE5KboUAw6GWq52jn7%2BRyir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAXlxZH5wQ%2FNHXGiuKtwDOJIsBhxwTWoPiM5yNqVjQBT4wSFGN2chqHdoNJkItU%2BhxpdAbwL5epmtAqD5kPTN2d5Q%2FGjoSQIgzHAbXagqo%2FmVid7Iyyim8zShTpkRx8PkQTnb3h%2Bozd0AHs7pB2UNg%2FWM6dPa0UWMrAc3k9dU3BejiynixsA9Qk8cJfkV9%2FIZjL5MTOuW1BH3GG3RVRmD5DJTe8Flg66fGBf8SAbov8jYUz%2B1T7aW5quwIcNZQwkAOkS1vtmRcbIMXn7if1pywN%2B9fGjhwaIDQGzAon3CLwMO8mrsPtZ%2BL840DSUnm4d43vM8sAmB1djVn3BK6mTNyNuBL5YjtucG81ixZ3eGreCnsocOPsyDzIJJrktEG7O8Uj9kiCxyvxeSsqNDd7qafr5zemT5yHedEgrwgw2FPRJE2toxXMkZry6xdBo2fjYosnMs12L7IQwTisGs%2BqCwv56zy65rIqld2TuRlM%2BBB5gm6gudDPN1FS5eb6cL9rKzB8SJ0TJbOOkG%2BCLs3w7IIG8nrDcOdzOh0CpnEkmbvudHze1T1aICuTiSvZ5nx7k6kZTvf4srLP56mZoI1alMZiq6tIqBKcHhEWMlZBXUghq0iGI3%2Feauydl54Sc7UfwOohbDpt0EhBYzbRAwutT6vwY6pgEVvYPStd9n10JaYm7KjMro%2FAuudRezzR0o3M3c%2FfaoHQdKJd1y8onQ0L%2BvChraJ9BEdfZ%2BkSFaCCcRG4Y0njHUTB9HIBmUdZ8vaDm0F37GEkdXa%2FGudtGgGfJgCpK52xevGN1MQ%2FXB%2FF3hT8gj0m10c3z0Q%2FrsYqw0uw0MJIyENtvWUYdr8mZwAGi4iS2wfItYxxLuYcC3h%2FtsxmRKmT04mcz%2Fbq04&X-Amz-Signature=7932956c5ebc2d3c2560b0cf24dcbf7dc5f1f037d48288f0a7bd083faefe10c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

