---
category: TechToolsShared
tags:
  - Notion
  - Blog
  - CloudFlare
  - Github
  - Hexo
status: 已发布
catalog:
  - 一级目录1
slug: notion-blog-tinkering-guide
title: Notion博客折腾指南
summary: 介绍使用notion作为创作平台，利用slack+pipidream+elog同步博客到GitHub并持续部署到cloud flare平台
urlname: 6f395df6-a931-4cd0-9049-555f6e9b7d8c
date: '2023-11-06 17:03:00'
updated: '2024-05-08 23:26:00'
image: 'https://www.notion.so/images/page-cover/webb1.jpg'
published: 2023-11-07T08:00:00.000Z
---

### 前言


阿里的语雀和字节的飞书还有notion都是很好的写作平台，飞书的智能表格应该也是借鉴了notion的产品风格，而语雀前段时间在周一下午发生所有节点宕机8小时的P0事故，并且创始人已经入职飞书，这种亏损的团队出现如此严重的事故，一定会被边缘化，为了减少以后再出现故障，决定使用notion作为写作平台，并且备份到GitHub中，同时使用cloudflare部署站点。


### 用到了哪些工具


完整的工具链如下，除了elog和hexo剩下的工具都需要注册


notion→slack→pipedream→elog→hexo→github→cloudflare→[最终博客](https://blog.ithuo.net/)


### 博客搭建教程


### 第一步

- 单独注册完这些工具后，先看一遍elog官方文档，因为是使用[elog](https://www.notion.com/my-integrations)作为同步工具，承上启下，所以重点会在**elog**上

### 第二步

- 注册notion，并复制 [elog-notion-template | 表格](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 数据库到空间内，记录数据库ID。创建integrations [https://www.notion.com/my-integrations](https://www.notion.com/my-integrations) 并集成到刚复制的这个模板中，记录Integrations的Secrets当作同步Token。(**注意**两个关键要素**NOTION_DATABASE_ID**和**NOTION_TOKEN**)

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/2394fa24-4767-4945-a07c-24fcf7d22af1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=f9ac5e7a645ddebbf276cce85fca50323f256e5da26eb4848a506e26660bce67&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/814f0514-62dd-4190-a7c7-e2f263f96104/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=4bdbcf4fbc10059e6a0e40d72f704083b1c89e74da1668e0a6d5dec31a303c1c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第三步

- 注册slack，添加notion应用，与notion进行关联，并且配置小闪电（自动程序）用于监听文档状态，例如当有文档status设置为`已发布`，则给slack发送消息

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/088bec8e-f897-4660-935c-18f1394db21a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=b2d60aa236cb08aed3970434a19f129dc7d2533ceeaab9785e6207eda299d2e9&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/883a3ede-3ae4-4e14-a6a4-094984a0a640/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=a0193de6f81cafecb60b9642f8ba59a4f73a7ae2e9d402d34deacfc29a401863&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/1698a25b-8722-44ef-90c9-5844df15e985/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=06bd447a7dee5ba2bf40bf09a096aa7a5ddc30d00c5c5f1a134b54863a04a639&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第四步

- 注册pipedream，添加自动化脚本`trigger`用于监听slack的消息，并通知GitHub Workflow Action进行打包发布，创建`trigger`和`http`调用通知。需要**提前**在Github创建存储仓库并生成**`Github Token`**

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/aae800af-3109-4966-bf06-681bb5182683/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=efc3fe691cf0dd7969df5c88b3d356812b254928a388649cbe419cc82fd0511b&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/375dffae-f308-44e9-abc7-a93bcaad9456/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=07666bc39a4d581e08fd92dc9c5b456f2543f28c2926e26685741a4fe2c2f9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

- 使用elog提供的`vercel-severless`服务可以很方便的调用GitHub的`Deploy API`

```javascript
https://serverless-api-elog.vercel.app/api/github?user=cyolc932&repo=elog&event_type=deploy&token=xxx
//例如你的github用户名，仓库名称，部署名称以及github的token
```

- 如果点击Test调用Github API没有出现`Success`，需要检查`Github Token`

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4c628495-7482-441a-b3de-39575ea51c35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=0f00a1f19edc8d80597e3528253729b6c87f73b54c755256b24fd66fe0ccce19&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第五步

- 使用[**Hexo 6.3+**](https://hexo.io/) 网站皮肤选择 [Hexo Aurora](https://aurora.tridiamond.tech/en/guide/getting-started.html)，安装hexo和配置皮肤在此不在赘述

### 第六步

- 在安装好hexo的项目环境中通过npm安装elog

```javascript
# 使用 npm 安装 CLI
npm install @elog/cli -g

# 使用 yarn 安装 CLI
yarn global add @elog/cli

# 使用 pnpm 安装 CLI
pnpm install @elog/cli -g

# 安装指定版本
npm install @elog/cli@0.9.0 -g

# 也可使用 npx 运行 elog 的所有命令：将本文档使用 elog 命令的地方换成 npx @elog/cli
# 例如
# 初始化 elog 配置文件
npx @elog/cli init
# 本地同步命令
npx @elog/cli sync -e .elog.env
# 清除本地缓存
npx @elog/cli clean
```

- 在代码路径中初始化elog后，会出现这些elog开头的配置文件，使用哪个平台就配置哪个，比如我选择的是`notion+GitHub`，注意将`.elog.env`加入忽略文件，避免泄露关键信息

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/9284cc58-67da-4509-8410-506d5858484b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=63a9bb2b8a681a1a50786e68bc999ededa7caa9c877c5d8e9ffcda29b2a1dba9&X-Amz-SignedHeaders=host&x-id=GetObject)

- 配置`.elog.env`后，继续配置`elog.config.js`，关键配置如下

```javascript
module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      limit: 3,
      filter: {
        and: [
          {
            property: 'status',
            select: { equals: 'Published' }
          },
          {
            property: 'type',
            select: { equals: 'Post' }
          },
        ]
      },
      sorts: false, // [{timestamp: 'created_time', direction: 'descending'}],
      catalog:  {
        enable: true,
        property: "date",
      },
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './article',
      filename: 'title',
      format: 'matter-markdown',
      catalog: true,
      formatExt: './formatext.js',
    },
  },
  image: {
    enable: true,
    platform: 'local',// 注意， 如果放在local，会导致cloud flare无法显示图片，建议使用图床
    local: {
      outputDir: './images',
      prefixKey: '../../images',
    }
  },
}
```

- 如果使用了`hexo`，需要对`markdown`做一些格式处理，在代码根目录添加`formatext.js`，代码如下

```javascript
const { matterMarkdownAdapter } = require("@elog/plugin-adapter");

/**
 * 自定义文档处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @return {string} 返回处理后的文档内容字符串
 */
const format = (doc) => {
  if (doc.properties) {
    let properties = doc.properties

    for (var key in properties) {
      if (properties.hasOwnProperty(key) && properties[key] === "") {
        delete properties[key];
      }
    }
  }

  return matterMarkdownAdapter(doc);
};

module.exports = {
  format,
};
```

- 现在`elog`环节配置结束，使用命令验证是否可以正常同步

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/3f55db07-5727-4b52-be1f-caf221731c94/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=2f78eb694d1525bfbe125e680074fdcd1904b37eb431806937efafed5bf2375f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第七步

- 配置`GitHub`环境变量和`Github Action` ，在你创建的GitHub存储库中点击`Settings`如下图步骤

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bcde9e11-dcc0-40f3-9a68-4c6ce284bebf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=9a0f27dc35b168fe90273b96d109a47c55d45140d9966cb1955ff4e75dcd632f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第八步

- 使用仓库的`Github Action`接收`pipedream`的调用，并通过`elog`同步`notion`数据转换成`markdown`并提交。`Action`代码如下:

```javascript
name: Notion-Action-MD

on:
  push:
    branches:
      - main
  # 手动运行
  workflow_dispatch:
  # 允许外部仓库事件触发
  repository_dispatch:
    types:
      - deploy
  schedule:
    - cron: "0 * * * *"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 检出代码库
        uses: actions/checkout@v2

			- name: Install dependencies
        run: npm install

      - name: 安装 @elog/cli
        run: npm install @elog/cli -g
			
			- name: 安装 @elog/plugin-adapter
        run: npm install @elog/plugin-adapter -g

      - name: 执行 elog sync
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
          COS_SECRET_ID: ${{ secrets.COS_SECRET_ID }}
          COS_SECRET_KEY: ${{ secrets.COS_SECRET_KEY }}
          COS_BUCKET: ${{ secrets.COS_BUCKET }}
          COS_REGION: ${{ secrets.COS_REGION }}
        run: |
          elog sync

      - name: 配置Git用户名邮箱
        run: |
          git config --global user.name "user"
          git config --global user.email "123@666.com"

      - name: 提交拉取的文章到GitHub仓库
        run: |
          echo `date +"%Y-%m-%d %H:%M:%S"` begin > time.txt
          git add .
          git commit -m "Refresh elog.cache.json" -a

      - name: 推送文章到仓库
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: Action保活
        uses: gautamkrishnar/keepalive-workflow@master
```


### 第九步

- 注册`Cloud Flare`或者`Vercel`作为站点托管平台，如果仅仅是备份目的，在第8步完成就结束了

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4f26828f-dd91-493a-9815-d1dfda8583f6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=fd93a9a9c5ebe32e379c7c2e6ef56e93a38c5538ced084a0dcd8fc2eabd15958&X-Amz-SignedHeaders=host&x-id=GetObject)

- 在`CloudFlare`创建`pages`应用，连接你的`GitHub`仓库，构建命令如下，如果有域名可以使用子域名映射进来，比如我的将`blog`映射到此`pages`下。添加完成之后，每次`GitHub`提交后`CloudFlare`就会拉取代码，重新构建。

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/554689e6-dfbc-4fe6-86f1-6529e993befa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNOPNCR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T054225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC5YaZEOwA1K1GtmAhnnP0lmVUHn0WK5OCHC8%2BUJZTvdAIgM0kFUs57jm7JWdDoqaocf728nFfvkzk9GBP84dYU2H4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpi6ntBqESQm7gjSCrcA1bMCmnkxRWXCrPn8kzdjfq941OiuqyGwCRW2APMcmBb2rcHWaC7Pqhg5zQCdFeK5%2BG%2F5sKHtSJ59zg%2BYScF3AIrIwYCFE7A%2FEQVUr7kMK9w7qL0hWguY7tyhxh0cgkChUfoDqui4F9chnhhN13mv4n7O6aysZdGsP81DegkhnDc9ORvq7HHgw%2FUNaxUgrlr2iW7anVvg%2FVLJoYlhvW86j%2BUzUaY4OmNnYFkEXdajM337TSvHtjFxR8I9y%2FKlzg%2FV62dF1tOSo%2BMRTGVperlSXmSEdluFfB7MsrUsRJRWfgSQjxHAHMv8nLZNZi3N5RpuHFfovsw9oOatwk3mCxKF4He1kPFPD%2BI%2F40wLUSpfKRfgYVgTPyX7L6gobLEyGo3j%2FLQTiHL1Q8EV5pZj4tC6EnmHX0MV6do3KN82RJJp3zXzQh4kIXiPWTjj5ZFG4WOMbYE%2FcH%2BADRPzZs8aKTw9awW53TzsMKTjiaBqZA9UuGAkUBpfgBbh1vvRNAUyfDDP655lswXC6aFhWXmTSU8KQPBH2BByiGYaUfRkbmkGEjU83J5oTslXlHMLF04RcsN1uUItIu%2BlvhCF2leveJ06zYcUkkoZezs8e7zDQZHbMK%2BhdvbBbicu0oNP40hMOKL7b8GOqUBaE79aLutFYaP9XtgQezlTOTv%2FvrHMiGFUcyJBj9U24Pndwo%2FwYfPgrJVnT4%2FGrU7AdVgoNXJYzwnxN6KlYD4keKQVNst466B3tHAEVKl%2FFVQSXWlgwEi6F1acEN7PzvPjZA0O4tBx6Z%2B6btYC9HOr%2Bu9UTBGWRFAELyc4dxP8m6spIje52xR2f1YWkIqYEp2EFn8V23VvP21%2BHL8ESZqYUy9cNBb&X-Amz-Signature=65c7108e9cbeccb97d2e63921f3d6d3d7e40bf8150837da7113bb5a0e5e5760e&X-Amz-SignedHeaders=host&x-id=GetObject)


### 第十步

- 在上一步我们已经结束了所有的配置，确实有点繁琐，希望以后可以优化成开箱即用的产品，回顾一下，本次做的工具调用链如下：
- [ ] 通过notion作为创作平台编写文章，文章到`已发布` 状态就给slack发送消息通知
- [ ] slack收到消息通知后，pipedream也在slack的notion频道偷听，要开始发布内容了
- [ ] pipedream听到消息就通过vercel的severless以HTTP方式调用GitHub的Deploy API
- [ ] GitHub的deploy api收到消息就通知仓库的Github Action起来干活，安装elog环境，读取Github的环境变量，执行elog命令拉取notion数据，生成为markdown格式，提交到GitHub 仓库中
- [ ] cloud flare的pages应用监听到链接的GitHub仓库有新的提交内容，就调用GitHub API拉取仓库数据，然后进行hexo编译和npm打包生成静态页面，并悄悄地部署在pages节点中。

### 异常指南

1. notion链接到slack中发送消息失败，多拖动几次，slack并非实时接收notion的变更消息
2. pipedream中通过HTTP调用GitHub API失败，检查token，首次部署建议多开放一些权限
3. elog同步数据失败，检查notion数据库ID和token
4. GitHub action运行失败，检查环境变量，[GitHub Actions 的工作流语法 - GitHub 文档](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs) 并且参考 [github-push-action/action.yml at master · ad-m/github-push-action](https://github.com/ad-m/github-push-action/blob/master/action.yml)
5. elog同步时将notion内容转换为markdown格式还有一些适配问题，需要发布后重新检查下格式

### 参考文章


[备份 Notion 文档到 Github | 某中二的黑科技研究中心 (darkreunion.tech)](https://darkreunion.tech/article/backup-notion-to-github?giscus=5b1855710a9073bbb30d3264lzzxL%2FY5boFMZEtzfT2uvrsTkpO815dTCl%2BcFCsI%2FwZTnmkVo1SjQB2CllPRsX9pkEFoeAZ77J%2FviSyilYpOqYYX%2FGm9rbQWTk0T8J0bqUaJf4Q%2BJl9YANenxts%3D)


[[跨域协同] elog+notion实现md优雅备份 | MatrixCore](https://matrixcore.top/article/elog)


[集成Elog使用notion数据库 | 北门清燕 (bmqy.net)](https://www.bmqy.net/2651.html?highlight=elog)


### 工具平台


[https://www.notion.so/](https://www.notion.so/)


[https://app.slack.com/](https://app.slack.com/)


[https://pipedream.com/](https://pipedream.com/)


[Hexo](https://hexo.io/zh-cn/)


[Getting started | Hexo Aurora Docs (tridiamond.tech)](https://aurora.tridiamond.tech/en/guide/getting-started.html)


[https://dash.cloudflare.com/](https://dash.cloudflare.com/)


### 官方文档


[快速开始 | Elog (1874.cool)](https://elog.1874.cool/notion/start)


### 文件存储


[云存储 - 大规模文件数据存储 - 又拍云 (upyun.com)](https://www.upyun.com/products/file-storage)


[对象存储 OSS_云存储服务_企业数据管理_存储-阿里云 (aliyun.com)](https://www.aliyun.com/product/oss)


[对象存储数据处理_COS数据处理_数据处理方案-腾讯云 (tencent.com)](https://cloud.tencent.com/product/cos)

