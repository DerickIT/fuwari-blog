---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-concurrency-tutorial-1
title: Go语言教程：并发编程
urlname: e15511b4-3fae-48cc-a659-157f8e095a2f
date: '2024-05-26 23:29:00'
updated: '2024-05-29 00:00:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-15T08:00:00.000Z
---

在本教程中，我们将通过两个示例代码来讲解Go语言中的并发编程。我们将深入浅出地讲解原理，帮助你更好地理解和应用Go语言的并发特性。


### 示例1：使用通道（Channel）进行并发控制


### 代码解析


```go
package main

import (
	"fmt"
	//"time"
)

func main() {
	num := 10
	sign := make(chan struct{}, num)

	for i := 0; i < num; i++ {
		go func() {
			fmt.Println(i)
			sign <- struct{}{}
		}()
	}

	// 办法1。
	//time.Sleep(time.Millisecond * 500)

	// 办法2。
	for j := 0; j < num; j++ {
		<-sign
	}
}

```


### 代码讲解

1. **通道的创建**：

	```go
	sign := make(chan struct{}, num)
	
	```


	这里我们创建了一个缓冲通道`sign`，缓冲大小为`num`（10）。通道用于在goroutine之间传递信号。

2. **启动多个goroutine**：

	```go
	for i := 0; i < num; i++ {
	    go func() {
	        fmt.Println(i)
	        sign <- struct{}{}
	    }()
	}
	
	```


	我们启动了`num`个goroutine，每个goroutine都会打印变量`i`的值，并向通道`sign`发送一个空结构体`struct{}`作为信号。

3. **等待所有goroutine完成**：

	```go
	for j := 0; j < num; j++ {
	    <-sign
	}
	
	```


	通过从通道`sign`接收信号，我们确保所有goroutine都已经完成。


### 举一反三

- **通道的缓冲区**：可以根据需要调整通道的缓冲区大小，以控制并发的数量。
- **通道的类型**：可以使用不同类型的通道来传递不同类型的数据。

### 示例2：使用原子操作进行并发控制


### 代码解析


```go
package main

import (
	"fmt"
	"sync/atomic"
	"time"
)

func main() {
	var count uint32
	trigger := func(i uint32, fn func()) {
		for {
			if n := atomic.LoadUint32(&count); n == i {
				fn()
				atomic.AddUint32(&count, 1)
				break
			}
			time.Sleep(time.Nanosecond)
		}
	}
	for i := uint32(0); i < 10; i++ {
		go func(i uint32) {
			fn := func() {
				fmt.Println(i)
			}
			trigger(i, fn)
		}(i)
	}
	trigger(10, func() {})
}

```


### 代码讲解

1. **原子变量的使用**：

	```go
	var count uint32
	
	```


	我们使用一个无符号32位整数`count`作为计数器，通过原子操作来保证并发安全。

2. **触发函数****`trigger`**：

	```go
	trigger := func(i uint32, fn func()) {
	    for {
	        if n := atomic.LoadUint32(&count); n == i {
	            fn()
	            atomic.AddUint32(&count, 1)
	            break
	        }
	        time.Sleep(time.Nanosecond)
	    }
	}
	
	```


	触发函数`trigger`会不断检查`count`的值是否等于`i`，如果相等则执行传入的函数`fn`，并将`count`加1。

3. **启动多个goroutine**：

	```go
	for i := uint32(0); i < 10; i++ {
	    go func(i uint32) {
	        fn := func() {
	            fmt.Println(i)
	        }
	        trigger(i, fn)
	    }(i)
	}
	
	```


	我们启动了10个goroutine，每个goroutine都会调用`trigger`函数，确保按顺序打印`i`的值。

4. **等待所有goroutine完成**：

	```go
	trigger(10, func() {})
	
	```


	最后，我们调用`trigger(10, func() {})`来等待所有goroutine完成。


### 拓展

- **原子操作**：可以使用`sync/atomic`包中的其他原子操作函数，如`atomic.StoreUint32`、`atomic.CompareAndSwapUint32`等。
- **触发条件**：可以根据需要修改触发条件，以实现不同的并发控制逻辑。

### 总结


通过这两个示例，我们学习了如何使用通道和原子操作来进行并发控制。通道适用于需要在goroutine之间传递信号或数据的场景，而原子操作则适用于需要高效、低延迟的并发控制场景。

