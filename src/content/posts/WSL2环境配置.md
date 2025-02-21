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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=fe15d7d4c8640ce39f8a070da461df1bd81186ecafbbdc6d1a2305b1a72ad772&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=59372a9243aee45283019db31e4a1fafd1416aadeca8ad43713a9408000a46c9&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=ff89c83a8ddeee1c19925274ef14a81ca4aab9f3c54f5dd3d3969b709d65620e&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=93e82761d9857b8228e8b484ed8462b7f66afafa397e4f70060835d44ae660b1&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=820a673b234fb98a38afb0415c263caacce6bad84144f84e43f6b51f13e7e98e&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLFW37U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T213254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmqvRI6N8B9oNM0VF2oDH9WYJFuHk4RPwk1li36ra3LAIhALE2MCdL1OcT%2B7ILW30JAVnYgVXk5P6wjVbCGSL6qkW6KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQWPAlH0lE42QnLEq3APamczsYkdlTG1fPI6VJMgOORQU1w91%2FsnIMS%2Ba0GsoNPfpWZ1yyxGMntKmrnGUMN8yt5QdTAC7FbpU%2Blk8NAfjqkU7plLabY%2BE7Ycp2JEOCbz3UzKunKaGywy96MI5KfOP0pRYjdlf1hcrVdzrxQFS%2BxMhZBBPRDWE2gxB8o8BwQW2L9GYM%2FTbNpUvwaQA14Q6ZM0fHfubkQI5OGmiEi84S1AaUBMcLKorvfQSP%2BO%2BltzF4p5WUYktL%2FDDIHKVJoQnpLTVTjU%2BmRIXCJJ1aYrcj1ma%2Bv%2BMk5blPUQeuidGgKqkU3naY%2Bwlt1VPZs0983Ye%2BLqEQw49oD%2FYQRzHE2R%2Fh%2B2ZAnAMvZOTgG5xOTzb7uFMXPyhEGtAp6HRbZkPNhYNqozjvd8PbBXbuXHwplSW1TMHRzwccri838kQYqsiyBxRHbXYDQJf59CHaos8wyW4yUS8YaOxD%2BSFA%2FMV0Om9J4ac%2Fu8hk5IKdwlgksl76OWI4OQ16nbtj2cd%2FnbU1Z406wIN3L7peWh%2FQiD8YUdkzUzpJXXDlraAIK4JXTuAXd%2Fq9W09w%2Fscrp2OHnsUvLfT6S1mn4BF8ycvd%2BfV8M7rbLlOHLO23%2BhfzGRCodq%2BHV1Qa5kI2mq6dE%2FjSDCN1%2BO9BjqkAe3GiheJ0q9%2Bkl9FkdExg17yB5Svqtl7qAslN6%2F5Zn2ZgEaIbzOxJf6ufKkXzZVdUcxtxp8z7Lm7zgbzMqzwYV6JrsqmnfJjEPN8B9k%2ByGKy%2B3vqlbnPlKZC62X89MOHYc0Qnip%2BvmYnaGB5xdFaXM5OaDue3rzVAK3HVzM4wdzXkjoLJBfnwcwIAPF7ZThLeqYR3bHxL2GQUoHWV9NMc1LphKjF&X-Amz-Signature=96cb2dfd81735e4821ebe047480a71fe643eae4c37f069928516a1a03c477727&X-Amz-SignedHeaders=host&x-id=GetObject)

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

