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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=e7f85b2ff07054732f38ca96fda577cad34b3bd50379d119f57ab1ef8b5b6451&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=075253d65872546304a950fd721dbe2c1767c633c80a4205ca62d42051b7d3df&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=df23cbe26236bfc58e96e363f8b6b9bcdebb9d34c7b3509cabc21ce5ddabb5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=aba096ae2950525cea83671922d1aafc1f9b29414105b374daf83fb3592faa4d&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=80390d921a78709dea101cf9b21cf73922ccac98393c1aac628e835f25f1d5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFY3B5C%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T213336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvkDwVBHqbEyDwRMCE4cqmlww6f5ws4nvZw8CfC6RAuAIgVf0YuPe3%2B2bL3bBjqsJMGuhcSCnlMY5yNOgcRq25ItAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAkigENzsKywh4uIyrcA4I%2FZW%2B4ZvlcO1UOkR5KdhYZ1m5Jb0RmB1QJogV35y7EZExvaEaHEjhoxoK%2F1qF4NzPLPX1ErHLJmC67FoR1x33uPHMeeCyjo5bTvIhaeOW8LdBqmeoGvKq7%2B1Uo9dfhvzz6ICm5Xe7%2FfNA7whNFeAf93WHUJAKQqjKIEC0wPzRnYss1%2FZOGsxBTZ%2ByfJn5O7qOu36a6x3q8%2F5gKaEZKffxP7sLRe0kN1DYmdpJpsD7pjwaZ3e97je0f4yJUqDAqP6oVkVXOaD8dG3Ovo4ncoa3XB39AU6Qu4Au57Nr5645CXii1QhXkfTnYh7%2BCIQNCDoB5NVtj6cN0CA13LqDwKkFE9gkY0stLCVxMz6OlSd2F9HvJe6owlZ64p5mwtuUFBWUeZlUhrfbsns7SrmNV8nN5Rp1su5HOKuFfLsldRSM67gvYBynpLhCLHx2iHYrteRHhUEhl5jhwfjg1jw%2Fgb7SRafpHyDK0%2FITtSix5NieCMwRD4WTS0KvkdZqZ43FSxFedN80xTN67xXbEJOeND%2Fv285D68HUhXuwAJpgIWfOg6M3ILBW4Nhy5uIU76kNf5pYkKCAL%2FpzxVohImv23HSF2c8VnUyiCbjCC8FN9go0rGqdrQOWZ7VLgxJKbMIiv678GOqUBx2%2BcyBjLmnDOonYEJDI79fnBGLHURfa3HoiFhxPMrOE6mQ1%2BX2lQg177yrNOygCxu%2BYz3%2Bv6sRmN4hMZc06Hl6Uk0LfRdAP4yhJNtLs03FUkEvfe8FC6qCFnhjvIKqehuUNcbRsPhlGFWDqBDsu6Bcp8TDC2K37IZUpHbUteIHpNI%2B%2FZxga7YgWbK13EMr2fm%2Fi8UagVO%2Bm%2FZ7R%2Bd7baKNHsVqSM&X-Amz-Signature=e2a43666393a5ea82febd0fcaf8fc7b021f05290a74cb6f4a30472d3f7f5f242&X-Amz-SignedHeaders=host&x-id=GetObject)

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

