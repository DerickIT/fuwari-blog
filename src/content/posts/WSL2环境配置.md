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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=5bb06645fe5aa6498afdddc0a2e1717cbf30f5029054f21b7fa080bbc9e2dafb&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=8405d800881fe4acdf549a1b159fc1766bfa8c57cea31d5d112844a62d5765e0&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=fb7f8f8101fa841622f35c6813e16fe3a2de7777bf20ac2825f2713a9eaec2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=be30a384df817a9781e32a10a56c2ccc132d4c06a78831d653f17321b6d00681&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=b6702f08a89c79453ba5f37200cdc9c19bf8b9e715f6c34ff613cdd4fb82e418&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSK2LQN3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQJxrpF8e%2BEIPaPkMwUjBPRBeakH31icD7cQoCQSD15AiEAwp%2FsgS%2Fo7A3F8mastwWf78aKvNrmoDYDdBATr0aPEqIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIS7IJfkuRcBuU0gtSrcAyY0DdlVSMFuUEo6nYS%2BvNZUvQpQrxYUwCULBlnnluwhl%2FwejPfFT0nj1FhfFJOuQ0st48xiSlmhYjI7jKDdEXr1zdKwtmOuoTxQVE3jUZLDCn7K%2BalWypqP%2FBG%2F%2BQ3WOUIvEYoksZeyXUNQzk6ENHNjr8E5fZMFTG9s59Q%2FCyM0NRtcZQhUNlr5QW83EvCPM9vca1mav5vZjm2j4urqrth%2BROiwSitwc6nPyv3jmzzTTsXs14wqsUiOK04BQT1ah2HaIGrVDooPovj2g77rxY3T6gOM6VVX%2BTxbjiDlKoYQ9K5rjesH1RocY%2BhFK3ZuLWeCvQWPOmV22DmUD%2FbDmnyjoDhIcLyk3cCThAi57gSjLh1As4I2rDbg%2FU0KPLyeXaMANQEODQfMdK3qtD%2BlPatbjLlBi3B1gvKorwe4RJ0j32IvVa320P0wt%2FVCJ3c8DENL0CVm2Ppu6q%2BZPT7nR9miQZ7aLQRX%2F9PDLTYSO5HpCURP85eLJf9QtAtk5UWP9CMrQRTZ%2Bvmw3907%2Bny0Fv3YQ0nce4naeSPj5pEXYmCGvnJxDMvNDXcOSOIjAAJy3fDU1oHIhwRNVmYr0514Dg9uOrcUKzr2ysmy9qnZ7VY54d%2BMSXz8nIz3PPaNMO62zb8GOqUBAtfjbdTOL8LkWzsYxxF%2FtT6Bfq%2BZJQ8kIBh6HOG%2BcyjuKZbICpEMs5sHVrF3FQy0T5ETtHGZKi7RwpHG1Jqu7n%2B%2FQBIx8l3dpxnxTsSmlZhwipk2gepUgnKUAqeXFNE56h8hJgnICIxUyOufak6OrAMS%2F3yM38KdVyH4B9jjhirdXnwKqbxMzl%2BeUUVDt7Bcaa4nh7QzcJ7dG0E5Jt9osTn%2Fj96z&X-Amz-Signature=45950716b95254ebb3674910d2f92f99d084878de28191db66f66b86243f080d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

