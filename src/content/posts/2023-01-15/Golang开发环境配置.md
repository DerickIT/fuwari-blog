---
category: 环境配置
tags:
  - ProgramEnv
  - Golang
status: 已发布
day: '2023-01-15'
catalog: []
slug: golang-development-environment-configuration
title: Golang开发环境配置
urlname: 63792556-e441-4c68-bdfc-f3afb56d64dd
date: '2024-03-15 13:06:00'
updated: '2024-05-16 00:16:00'
image: 'https://www.notion.so/images/page-cover/met_henri_rousseau_1907.jpg'
published: 2023-01-15T08:00:00.000Z
---

### 推荐开发工具


**jetbrains**家的[goland](https://www.jetbrains.com/go/) （四星）


微软家的visual studio code (三星)


从golang官网下载最新SDK安装包


[All releases - The Go Programming Language](https://go.dev/dl/)


通常情况下，会因为网络原因无法从golang  module官网下载依赖，出现如下错误提示


```go
go: finding module for package rsc.io/quote
go: LearnApp imports
        rsc.io/quote: module rsc.io/quote: Get "https://proxy.golang.org/rsc.io/quote/@v/list": dial tcp 172.217.160.113:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.

```


需要配置代理

<details>
<summary>Go GOROOT 与 GOPATH 介绍
GOROOT：  GO 语言的安装路径。
GOPATH：若干工作区目录的路径 自己定义的工作空间。
GOBIN：GO 程序生成的可执行文件（executable file）的路径。</summary>

</details>


### windows


打开你的终端并执行：


`go env -w GOPROXY=https://goproxy.cn,direct`


### macOS 或 Linux


打开你的终端并执行：


`$ export GOPROXY=https://goproxy.cn`

或者


`$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile && source ~/.profile`

完成。


### 查看修改效果


### `go env`

环境变量设置


`go env -w xxx=xxx`
如


`go env -w GO111MODULE=on`


这样就能正常下载golang的依赖包


或者配置运行时代理


创建`proxy_go.go`文件


```go
package main

import (
	"net/http"
	"os"

	"github.com/goproxy/goproxy"
)

func main() {
	http.ListenAndServe("localhost:8080", &goproxy.Goproxy{
		GoBinEnv: append(
			os.Environ(),
			"GOPROXY=https://goproxy.cn,direct", // Use Goproxy.cn as the upstream proxy
			"GOPRIVATE=git.example.com",         // Solve the problem of pulling private modules
		),
		ProxiedSUMDBs: []string{
			"sum.golang.org https://goproxy.cn/sumdb/sum.golang.org", // Proxy the default checksum database
		},
	})
}
```


执行命令运行，配置goland代理为“http://localhost:8080”


`go run proxy_go.go`


更详细的说明参考：


[Goproxy.cn](https://goproxy.cn/)

