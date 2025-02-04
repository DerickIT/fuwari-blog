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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=1300fa7679475bd54bcf966bc851c0e3ebb09b5fd3cbcbeb6a9b671b17175736&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=cf0f0e09f2a2adc75945ad7d0a476e6a44a2e6ef94d52a0ddf62bea477ca3d60&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=e2ff4dbb8a06a8aedb359cefb5ac4ed8f28fe56f0de39aa9074764166a2c4c39&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=31f7882fe56d2a8d573ae09c31360b65ae442ce0b5745586f496c2f450b99a5b&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=3b31be9cfae53f434e2cf84b0c5428d9bb6371784e136a10851e81f2f0bb7590&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGGFSJO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T213249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDJEQQxDyV1IEpQPyvZMtPHIsf17n8NI%2F2S9jDotwOGHQIhALy5toLE3YQy6iyz1FjbIvsyYZUAOjfgHW7VmvS7l0XuKv8DCDYQABoMNjM3NDIzMTgzODA1IgwSzNUAHNpiEPfC6Wsq3AMcy4KZt0VNF8mrlyNBvAHa0ypo2J2zpF6z2UU9UWfmtcglk5ejLrlwWlWlyIHFi8NaMIfxIklUTb2TbpzeNaOlyyd3w%2BrVIUSxCCzjshfF8tm15vsurgE4ijb4UfEHPEGL6Z8DQ1Bukjbe53Fbgst4sOvJ%2FeB%2FAwjOdZiEgKPjrYiRZSwnPcXr06MlRqv%2FL%2F0RPNdb2aTnRL9e2%2Ffvul90h3U7E%2FGBTizI4lymv1eSVjM0hLQUgsRIDFD5uLdh2cdKKKW6L77h8EsT7sLcXvZtI9cOyBfVxaibDIj9AJxUXtA1uJwMDJMMzEmkhqSXyvRd6lfhEp6env5L5EHZs0Gre%2BYld0jcouzrlfAUq3Yf0bLoewscgCYQXe6f%2F%2FE3BF3RV9xBwOV4Moi9obWCXuYlYAtdOACOU%2F3JsEfHzdk14rKxqDF%2BY8uPWXoNVq6zBq9k2U%2FgH%2B%2BUxZUnf1BsFPVgyzah0ILtkWwwPx3Oypf4TRaLOFP1HUbI%2FMTwa%2Fqpq%2F%2FHCmLxv70pNFEDfkO%2FguizgW%2FtjWaJlUsqimO%2FPZEwQTZI6IRq0yvG1heGfN%2ByeAFhd2%2B%2BugDMRtsTp5qRtwbUxkaKHshKbO9UtWxhYpgzfahKPV6Sneliz7ShMzDL%2FIm9BjqkAUO%2Fm%2BZSP6OmQesJ2RPoFhWqJWoL%2FsPgcrONaR5UAyHtSCp40XD%2BTdIWP1wgH2c8quYlI5nxI4HpOjo0o47PPWTYS0OCnJmXN1fUBEKRZ2o1nRobjpleZaraiji5du6G6wfbU9NDmz%2Flv1sUficmi2UE8kFttRo14dGmFjIzVF%2BcLDEx13HzpmRhkqVjx%2Fh97a1%2Bmg%2F%2B67pcHtnfoSB%2BJZ2W9xNX&X-Amz-Signature=a8b2767b303274061602160d6976c1654debaaee838980707976fee2505b69b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

