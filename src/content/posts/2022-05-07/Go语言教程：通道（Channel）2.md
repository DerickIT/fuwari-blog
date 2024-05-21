---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-07'
catalog: []
slug: go-channel-tutorial
title: Go语言教程：通道（Channel）2
urlname: b0e5399a-fa34-4195-b16d-bb722ae46875
date: '2024-05-16 00:03:00'
updated: '2024-05-21 23:15:00'
image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-07T08:00:00.000Z
---

在Go语言中，通道（Channel）是用于在不同的goroutine之间传递数据的管道。通道在并发编程中非常有用，因为它们提供了一种安全的方式来共享数据。下面我们将详细介绍通道的原理，并通过一个示例代码来说明如何使用通道。


### 通道的基本概念

1. **创建通道**：使用`make`函数创建一个通道。通道的类型由其传递的数据类型决定。

	```go
	ch := make(chan int)
	
	```

2. **发送数据**：使用`<-`操作符将数据发送到通道。

	```go
	ch <- 42
	
	```

3. **接收数据**：使用`<-`操作符从通道接收数据。

	```go
	value := <-ch
	
	```

4. **关闭通道**：使用`close`函数关闭通道。关闭后的通道不能再发送数据，但可以继续接收数据，直到通道为空。

	```go
	close(ch)
	
	```


### 示例代码解析


下面是一个完整的示例代码，展示了如何使用通道在两个goroutine之间传递数据。


```go
package main

import "fmt"

func main() {
    ch1 := make(chan int, 2) // 创建一个缓冲区大小为2的通道

    // 发送方
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Printf("Sender: sending element %v...\\n", i)
            ch1 <- i // 将数据发送到通道
        }
        fmt.Println("Sender: close the channel...")
        close(ch1) // 发送完数据后关闭通道
    }()

    // 接收方
    for {
        elem, ok := <-ch1 // 从通道接收数据
        if !ok { // 检查通道是否关闭
            fmt.Println("Receiver: closed channel")
            break
        }
        fmt.Printf("Receiver: received an element: %v\\n", elem)
    }

    fmt.Println("End.")
}

```


### 代码详解

1. **创建通道**：

	```go
	ch1 := make(chan int, 2)
	
	```


	这里我们创建了一个缓冲区大小为2的通道`ch1`。缓冲区允许通道在没有接收方的情况下存储最多2个元素。

2. **发送方goroutine**：

	```go
	go func() {
	    for i := 0; i < 10; i++ {
	        fmt.Printf("Sender: sending element %v...\\n", i)
	        ch1 <- i
	    }
	    fmt.Println("Sender: close the channel...")
	    close(ch1)
	}()
	
	```


	这个goroutine负责向通道发送数据。它在循环中发送10个整数到通道`ch1`，然后关闭通道。

3. **接收方**：

	```go
	for {
	    elem, ok := <-ch1
	    if !ok {
	        fmt.Println("Receiver: closed channel")
	        break
	    }
	    fmt.Printf("Receiver: received an element: %v\\n", elem)
	}
	
	```


	主goroutine在一个无限循环中从通道接收数据。`elem, ok := <-ch1`语句从通道接收数据，并检查通道是否关闭。如果通道关闭，`ok`将为`false`，循环终止。

4. **结束程序**：

	```go
	fmt.Println("End.")
	
	```


	当接收方检测到通道关闭后，程序输出"End."并结束。

