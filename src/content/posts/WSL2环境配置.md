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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=ce3b94e9b287614905aeca37e6819db40967cacde9d05f370de2346edf392691&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=4e5d711d240336acafc85835e71679278be99022dfe3c10015f6a4bcf7839e46&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=ed9f1d7e822c53c04249ca2d328e1a8bbc59f5eeba1ccac1b82dd988aa935ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=7204ddba034cd536841aa4ba01eab7128de0497cde507b1e4cbcdcd8ec370882&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=81a0d849a72d507e16d2310cc096599ba718681c80181cfbeedae5d6e19ae2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBIOOFG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T053934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwxoKVQStlKz2b5bMMIsHMsmczc5sTHUfk1ONw9W3qAiEAr87Qepa5iLiCakK96UOgHKJBWoUPi7K6%2BpiNm1UaMtoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM9atob1Cz6PgP07FCrcAxcOoQ%2Bw7niPaSIUx1T2S5KzdeZS4rFcQ%2FrERd3plT5e4xTrmWGYK6OgA77QlMSFacQi%2Bg0slRePY2tX6ujZquK9OVd%2B7ZHAvRjOO%2BSrUWfklULT0Yenl8xCqE9kxEOK%2BfVxB7rjUm14Dx%2FpiMPDZDeqPOxBw6cNombA71%2FzGgPxnwYopkGV89KGCeRfgxHpOuUL6teIYbvnHJSzxI8FTZMpGcWul30irhC1NU7aNgCQ3fBBNNopqThsUeat970TRP897opjkMiMvA0Kg2V5sHEZr72pPjGbb%2BB2Qs7HmTPXzGXBFPnxH8GclOHarqcKGo8lPC49PN%2BCpOcD%2F6Aa7UrmDVF7cEit472IqiqJa6coKnEyxRmnEHec05x2TTXAfpMhCmEl9nYB0aS%2BIe2qYDqAMxnEkN9aXjlsSCbOx5SMBpYZOjBj0HGtiPTCqB31nN9eYtYrKD9ZHM5xaRc5uzmsb0SYHych8AanombofT9zDGS76CvMEo%2B3MxWhhdi18w8GylxRrZL0erdZuCsv7o%2B5S7c%2Bvzk48chBl92FXRmw2cXR1UWnM3SQM7AjiFEG82uEPmCRz%2FyKG6CduU97xqUYtQWF4%2FPczIQU5bitCQXMbI%2BM12jgM85X8CBIMJfYpL4GOqUBZ2DlXqmCsFfmhbi8%2BMoHBoO8zG4PI5hal1mkDAL3SxkkfRuRNEU49%2B%2FwDa5kGuVUFuZl7YWO64ZNwZ2EzerLxdjJyBdDU1kSMx6c2M0a4ZzqZYqytpS1qSR2acTvsbg8IeZs12Gm8Qh0CDF3Q7JIq7P2QqQ3kCfRuigFOa7pvOjmAlQrlxCHoHpbpG56jK11XX6%2B1xF1ba3PTI3i0Zdf6q3u7sUQ&X-Amz-Signature=0ffb0024230d308d420fb2b66280eb78c952c10306b87ecaf14c76297256d61a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

