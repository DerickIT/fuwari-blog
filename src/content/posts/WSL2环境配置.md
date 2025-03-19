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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=884773b5ba88b65ecb861e0848bc0495334c13a64e3efbd4698d4c0d485cb580&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=06bfb6306044021238f9c29c12233df680ba6685baa240a75e12acf1308eb8b4&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=893a3993bb3113991bfddd380acfaf3e7669513611e15701b9ad09dae89ee54c&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=3a2ff95cee9f7d48b83dd581d5de5e2eb13d69ab9c6052e1146cf2f6206bd338&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=50dca47587a948a7692da8892e33f0d1cd3c2f7d6c1a5c8b58698f3eb1323579&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BJKT2J%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T053832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGawsN5LQDREg9aPSggUpYb0VYGgxUzjp6HK6jT1rW%2BrAiEA6PoFfmUcU78F%2FYcYYlQpQVM0pNP2ZKR%2FswByse97wEgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNOEInkbsi%2Bd7UpwUyrcA08NKLnHjsoe85SyHb5DxZhvy1q7z%2BZ1%2BCoOVtLGRmeYe075okxXyBhP1gkjHL4tBP7%2F0fygTm9cvYGhRchzalX38DkVISFQPCmorXFO%2B1%2B5NUT7a%2F3BTgTO8gMCitVY4v4op3D2odFdjKALKTl131L60CKKqGSuLFSc0pCavkHja%2Fvvv6QE7SeVaDJT7jmSilg15o1l1o1CmcQSec9hGmzhvtGSUwomI7JQcvkGYjoq%2BpR0%2F%2F9sTwfREOZlluPLOWAjcFezOsBxm%2FsdS2cxNcnUK3Xu0ShSJYqsEBnJBC1tqe96kblQRLAk17IoSPC83BJ8SZxbyPzrefqPj41gW2YnDP4qnhrdQfXsf0IJy2VGy%2FqZI1ztnCG00i3AltblRsUMJfCsTs0WRijzwjV82Nrw3geOEJq5tuF2omYKmzDnHAowSoflceSayk9gLaVGcftT2%2FEou90am6U4VurDlIWPfQj7mp3E1WMPkClEzKgt%2BGHD7%2BN6qzHJieUbHUgn5dAOPKJQeRN1CCza780GverW19B7kD4SZL%2FMWZe9UgjX3jcgwp%2BoBR4yFkp2LqSo%2BgzpS%2BGK1OU2q4w7B3krUgOaoCGsfBvC27lkm%2BjSXkmn1aHBcZUA54tqIwh2MPr86L4GOqUBnMSuPtiJ160wWbrMQKOrH3JWNbIYXq85HlAJ2cyM0oY0xvVOPSqwqLinLme48nt9Kg1XdzRMhzVqab5qeBos7GvQ78pBvTja26kJNwVQai9YW1uCL5%2B355S1CWSNhdkNjVaSu1%2FkOhs78JHXzzP%2BPCc0bkpbDCYnQ%2Fb2GcU0oHPs8i39J%2BH7SF0U0s%2BWA308Im0JLXM5G8KMCn2twXoWN2yZokPQ&X-Amz-Signature=7b3aa82f9baeb3a0cf3411cf09f2a105f944983988142dd21d3b411f04121cce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

