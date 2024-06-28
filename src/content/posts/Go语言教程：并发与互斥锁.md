---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-concurrency-and-mutex-tutorial
title: Go语言教程：并发与互斥锁
urlname: c67a8432-c948-4f78-8c40-8a08ff537519
date: '2024-06-01 00:29:00'
updated: '2024-06-08 00:12:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-23T08:00:00.000Z
---

本文将通过一个示例代码，详细讲解Go语言中的并发编程和互斥锁的使用。示例代码展示了如何使用goroutine进行并发操作，以及如何使用互斥锁保护共享资源。


## 示例代码解析


### 导入包


首先，我们需要导入一些必要的包：


```go
import (
	"bytes"
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"sync"
)

```

- `bytes`：提供了缓冲区操作。
- `flag`：用于解析命令行参数。
- `fmt`：格式化I/O。
- `io`：基本的I/O接口。
- `ioutil`：I/O工具函数。
- `log`：日志记录。
- `sync`：并发原语，包括互斥锁。

### 全局变量


```go
var protecting uint

```


`protecting`变量用于指示是否使用互斥锁来保护数据写入。值为0表示不使用，值大于0表示使用。


### 初始化函数


```go
func init() {
	flag.UintVar(&protecting, "protecting", 1, "It indicates whether to use a mutex to protect data writing.")
}

```


`init`函数用于初始化命令行参数`protecting`，默认值为1。


### 主函数


```go
func main() {
	flag.Parse()
	var buffer bytes.Buffer

	const (
		max1 = 5  // 启用的goroutine数量
		max2 = 10 // 每个goroutine写入的数据块数量
		max3 = 10 // 每个数据块中重复的数字数量
	)

	var mu sync.Mutex
	sign := make(chan struct{}, max1)

	for i := 1; i <= max1; i++ {
		go func(id int, writer io.Writer) {
			defer func() {
				sign <- struct{}{}
			}()
			for j := 1; j <= max2; j++ {
				header := fmt.Sprintf("\\n[id: %d, iteration: %d]", id, j)
				data := fmt.Sprintf(" %d", id*j)
				if protecting > 0 {
					mu.Lock()
				}
				_, err := writer.Write([]byte(header))
				if err != nil {
					log.Printf("error: %s [%d]", err, id)
				}
				for k := 0; k < max3; k++ {
					_, err := writer.Write([]byte(data))
					if err != nil {
						log.Printf("error: %s [%d]", err, id)
					}
				}
				if protecting > 0 {
					mu.Unlock()
				}
			}
		}(i, &buffer)
	}

	for i := 0; i < max1; i++ {
		<-sign
	}
	data, err := ioutil.ReadAll(&buffer)
	if err != nil {
		log.Fatalf("fatal error: %s", err)
	}
	log.Printf("The contents:\\n%s", data)
}

```


### 代码详解

1. **解析命令行参数**：

	```go
	flag.Parse()
	
	```

2. **定义缓冲区**：

	```go
	var buffer bytes.Buffer
	
	```

3. **常量定义**：

	```go
	const (
	    max1 = 5  // 启用的goroutine数量
	    max2 = 10 // 每个goroutine写入的数据块数量
	    max3 = 10 // 每个数据块中重复的数字数量
	)
	
	```

4. **互斥锁和信号通道**：

	```go
	var mu sync.Mutex
	sign := make(chan struct{}, max1)
	
	```

5. **启动goroutine**：

	```go
	for i := 1; i <= max1; i++ {
	    go func(id int, writer io.Writer) {
	        defer func() {
	            sign <- struct{}{}
	        }()
	        for j := 1; j <= max2; j++ {
	            header := fmt.Sprintf("\\n[id: %d, iteration: %d]", id, j)
	            data := fmt.Sprintf(" %d", id*j)
	            if protecting > 0 {
	                mu.Lock()
	            }
	            _, err := writer.Write([]byte(header))
	            if err != nil {
	                log.Printf("error: %s [%d]", err, id)
	            }
	            for k := 0; k < max3; k++ {
	                _, err := writer.Write([]byte(data))
	                if err != nil {
	                    log.Printf("error: %s [%d]", err, id)
	                }
	            }
	            if protecting > 0 {
	                mu.Unlock()
	            }
	        }
	    }(i, &buffer)
	}
	
	```

6. **等待所有goroutine完成**：

	```go
	for i := 0; i < max1; i++ {
	    <-sign
	}
	
	```

7. **读取并打印缓冲区内容**：

	```go
	data, err := ioutil.ReadAll(&buffer)
	if err != nil {
	    log.Fatalf("fatal error: %s", err)
	}
	log.Printf("The contents:\\n%s", data)
	
	```


## 互斥锁的作用


在并发编程中，多个goroutine可能会同时访问共享资源，导致数据竞争。互斥锁（`sync.Mutex`）用于确保同一时间只有一个goroutine可以访问共享资源，从而避免数据竞争。


在本示例中，如果`protecting`大于0，则会使用互斥锁保护数据写入操作：


```go
if protecting > 0 {
    mu.Lock()
}
_, err := writer.Write([]byte(header))
if err != nil {
    log.Printf("error: %s [%d]", err, id)
}
for k := 0; k < max3; k++ {
    _, err := writer.Write([]byte(data))
    if err != nil {
        log.Printf("error: %s [%d]", err, id)
    }
}
if protecting > 0 {
    mu.Unlock()
}

```


## 举一反三


通过本示例，我们可以举一反三，理解并应用以下概念：

1. **并发编程**：使用goroutine实现并发操作。
2. **互斥锁**：使用`sync.Mutex`保护共享资源，避免数据竞争。
3. **信号通道**：使用通道（`chan`）实现goroutine间的同步。

希望通过本教程，您能更好地理解Go语言中的并发编程和互斥锁的使用。祝您编程愉快！

