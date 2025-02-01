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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=5b905f1412ab1f600360588b1d0b53573302f96f4afcb1ccee2c7b83f5a157d6&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=a9cad683c520459b5dae6845497fb2cfe26d0de36ca3013adefffbbf31bce030&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=9535994693439d2d3ebf6a6b26ad98c3346cd27b951f54ee8262a7823410feae&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=19fc6cad28f8199fe0e6741692e4c5e4b9e4ea6e67c60780449c4fb409b9b4df&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=96ee999d5a03fc4d520982e111343bf7ab3e978ebc9e67122cea44a4b7186b55&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4EA3F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T053447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtoc940VfxDULDFBjPLb0VMi3BhnovrneP6H8tTMHpXAiEA7xaM4S6TdQtk%2FgJ8Uc%2F4ATzkCkVWmsO4feWHLLzu1GMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30WdnHt9orDkYG3CrcA9f2N7KNPNEyHHo3RAHuZKX7i%2BTr5FV30PEFDXNkznfwnqSGRQWJhKS5drnouBnMhsBRCMvzPCHn6vGtRAhWPlPYBziJAnAVswI0DMjUysP%2BZTNxMq4e3Dmr8Pd2FSfeTZQapDa8KK%2BvDMJavZ9MYVKL%2BO50aBbl%2Bs9hR3IHktoYYOIvQpmLs9uiauoddZ48on5Ph80J43ZoqgfmzdU5Yf5WCoPZkg3G0i%2Bfj1u898pI9ljT84MhAaEDiLVtIbNLY164BBpXlWUDI%2BBe%2BaDK3t9GGYrfyEA7D4SHgzD2uuzGKasL%2Bsp8R3IRjOGL1QTxfUu8u3j8qRfMAE1UQZ9PNpFQQxNQL8bnMCTVOjNHaltl2eiwGYYDwtjKUNyYZiYpZUIDpufgyOyxuPWL%2F2oL8S5njX81LiquQVyh4DQIOO8ejxjCbDZ99ZkmXxzZt%2FZKRa686pbZ68TAyZB2UQN%2F6rb0QQKKqjaXw18SjL%2FytobOngHajXMv6rx70xmSV8NzSOE0Wf6r3KuYas60GWKtt%2B3oivf8t8HlOXZsTlkSDAejvTWMQZeasFPN68XgCEqfNk5l%2FiSdPwGuGjsN2DiXOGapcbytG3bGp5Y%2BoNK74MSLf89%2BNb5c%2B42DYQWfMLHd9rwGOqUBL6V6%2FGrtq5NzmmLoEJJWJjLFr5%2BSsqtHzDPqsGnzPk%2FRx0uCx%2FdPJZw5aLAbd%2BTEhCvt4FAA4QkwqxFezUtUeAiOAoe9vLiK92zoPKG6v5jQrLRrW8UktRXr8XsargUNiiWsAWHQKDIyoZiLvVox%2FtdJ53dU%2Fvgw9Bx07DNodxe%2FZK09ywaQHuUv%2BVz1lYQkcLG09PZHV3BktzTPdzn5yFYKcLFu&X-Amz-Signature=f275b96dfd831b0e6581b594fa6fa9f7435218bfae6a78c8511a00bb00e3b2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

