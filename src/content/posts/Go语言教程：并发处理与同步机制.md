---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-concurrency-and-synchronization-tutorial
title: Go语言教程：并发处理与同步机制
urlname: e1f3c6db-88ef-4334-a9dd-91b528e0c460
date: '2024-06-01 00:29:00'
updated: '2024-06-09 00:00:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-24T08:00:00.000Z
---

本文将通过一个示例代码，深入浅出地介绍Go语言中的并发处理与同步机制。我们将逐步解析代码，帮助你理解其原理，并举一反三地应用到其他场景中。


### 示例代码概述


该示例代码展示了如何使用Go语言的goroutine和通道（channel）来实现并发处理。代码中定义了一个数据处理配置结构体`handlerConfig`，并通过多个goroutine对缓冲区进行数据的并发写入和读取。


### 代码解析


### 1. 导入必要的包


```go
import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"log"
	"sync"
	"time"
)

```


这些包提供了我们需要的基本功能，如输入输出操作、错误处理、日志记录、并发控制等。


### 2. 定义处理函数类型和配置结构体


```go
type singleHandler func() (data string, n int, err error)

type handlerConfig struct {
	handler   singleHandler
	goNum     int
	number    int
	interval  time.Duration
	counter   int
	counterMu sync.Mutex
}

```

- `singleHandler`：定义了一个处理函数类型，返回处理的数据、数据长度和错误信息。
- `handlerConfig`：定义了处理配置，包括处理函数、goroutine数量、处理次数、间隔时间、计数器和计数器的互斥锁。

### 3. 计数器方法


```go
func (hc *handlerConfig) count(increment int) int {
	hc.counterMu.Lock()
	defer hc.counterMu.Unlock()
	hc.counter += increment
	return hc.counter
}

```


`count`方法用于安全地增加计数器的值，并返回增加后的计数。使用互斥锁`counterMu`来确保线程安全。


### 4. 主函数


```go
func main() {
	var mu sync.Mutex

	genWriter := func(writer io.Writer) singleHandler {
		return func() (data string, n int, err error) {
			data = fmt.Sprintf("%s\\t", time.Now().Format(time.StampNano))
			mu.Lock()
			defer mu.Unlock()
			n, err = writer.Write([]byte(data))
			return
		}
	}

	genReader := func(reader io.Reader) singleHandler {
		return func() (data string, n int, err error) {
			buffer, ok := reader.(*bytes.Buffer)
			if !ok {
				err = errors.New("unsupported reader")
				return
			}
			mu.Lock()
			defer mu.Unlock()
			data, err = buffer.ReadString('\\t')
			n = len(data)
			return
		}
	}

	var buffer bytes.Buffer

	writingConfig := handlerConfig{
		handler:  genWriter(&buffer),
		goNum:    5,
		number:   4,
		interval: time.Millisecond * 100,
	}

	readingConfig := handlerConfig{
		handler:  genReader(&buffer),
		goNum:    10,
		number:   2,
		interval: time.Millisecond * 100,
	}

	sign := make(chan struct{}, writingConfig.goNum+readingConfig.goNum)

	for i := 1; i <= writingConfig.goNum; i++ {
		go func(i int) {
			defer func() { sign <- struct{}{} }()
			for j := 1; j <= writingConfig.number; j++ {
				time.Sleep(writingConfig.interval)
				data, n, err := writingConfig.handler()
				if err != nil {
					log.Printf("writer [%d-%d]: error: %s", i, j, err)
					continue
				}
				total := writingConfig.count(n)
				log.Printf("writer [%d-%d]: %s (total: %d)", i, j, data, total)
			}
		}(i)
	}

	for i := 1; i <= readingConfig.goNum; i++ {
		go func(i int) {
			defer func() { sign <- struct{}{} }()
			for j := 1; j <= readingConfig.number; j++ {
				time.Sleep(readingConfig.interval)
				var data string
				var n int
				var err error
				for {
					data, n, err = readingConfig.handler()
					if err == nil || err != io.EOF {
						break
					}
					time.Sleep(readingConfig.interval)
				}
				if err != nil {
					log.Printf("reader [%d-%d]: error: %s", i, j, err)
					continue
				}
				total := readingConfig.count(n)
				log.Printf("reader [%d-%d]: %s (total: %d)", i, j, data, total)
			}
		}(i)
	}

	signNumber := writingConfig.goNum + readingConfig.goNum
	for j := 0; j < signNumber; j++ {
		<-sign
	}
}

```


### 5. 生成写入和读取函数

- `genWriter`：生成一个写入函数，向缓冲区写入当前时间戳。
- `genReader`：生成一个读取函数，从缓冲区读取数据。

### 6. 配置写入和读取

- `writingConfig`：配置写入操作，包括处理函数、goroutine数量、处理次数和间隔时间。
- `readingConfig`：配置读取操作。

### 7. 启动goroutine进行并发处理

- 启动多个goroutine进行数据写入，每个goroutine按照配置的次数和间隔时间进行操作。
- 启动多个goroutine进行数据读取，处理读取过程中可能出现的EOF错误。

### 8. 等待所有goroutine完成


使用通道`sign`来等待所有goroutine完成操作。


### 总结


通过这个示例代码，我们学习了如何在Go语言中使用goroutine和通道来实现并发处理，并通过互斥锁确保数据的线程安全。你可以将这种模式应用到其他需要并发处理的场景中，如并发网络请求、并发文件处理等。


希望这个教程对你有所帮助！如果有任何问题，欢迎随时提问。

