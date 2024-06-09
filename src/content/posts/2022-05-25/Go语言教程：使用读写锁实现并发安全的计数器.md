---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-25'
catalog: []
slug: concurrent-safe-counter-using-rwmutex-in-golang
title: Go语言教程：使用读写锁实现并发安全的计数器
urlname: 96679ece-edd9-4731-9ccb-e7091a5cc636
date: '2024-06-01 00:29:00'
updated: '2024-06-10 00:40:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-25T08:00:00.000Z
---

在本教程中，我们将通过一个简单的计数器示例，学习如何使用Go语言中的读写锁（`sync.RWMutex`）来实现并发安全的操作。我们将详细解释代码的每一部分，并提供一些额外的示例来帮助你更好地理解。


### 代码结构


首先，让我们看一下完整的代码：


```go
package main

import (
	"log"
	"sync"
	"time"
)

// counter 代表计数器。
type counter struct {
	num uint         // 计数。
	mu  sync.RWMutex // 读写锁。
}

// number 会返回当前的计数。
func (c *counter) number() uint {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return c.num
}

// add 会增加计数器的值，并会返回增加后的计数。
func (c *counter) add(increment uint) uint {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.num += increment
	return c.num
}

func main() {
	c := counter{}
	count(&c)
	redundantUnlock()
}

func count(c *counter) {
	// sign 用于传递演示完成的信号。
	sign := make(chan struct{}, 3)
	go func() { // 用于增加计数。
		defer func() {
			sign <- struct{}{}
		}()
		for i := 1; i <= 10; i++ {
			time.Sleep(time.Millisecond * 500)
			c.add(1)
		}
	}()
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for j := 1; j <= 20; j++ {
			time.Sleep(time.Millisecond * 200)
			log.Printf("The number in counter: %d [%d-%d]",
				c.number(), 1, j)
		}
	}()
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for k := 1; k <= 20; k++ {
			time.Sleep(time.Millisecond * 300)
			log.Printf("The number in counter: %d [%d-%d]",
				c.number(), 2, k)
		}
	}()
	<-sign
	<-sign
	<-sign
}

func redundantUnlock() {
	var rwMu sync.RWMutex

	// 示例1。
	//rwMu.Unlock() // 这里会引发panic。

	// 示例2。
	//rwMu.RUnlock() // 这里会引发panic。

	// 示例3。
	rwMu.RLock()
	//rwMu.Unlock() // 这里会引发panic。
	rwMu.RUnlock()

	// 示例4。
	rwMu.Lock()
	//rwMu.RUnlock() // 这里会引发panic。
	rwMu.Unlock()
}

```


### 代码解析


### 1. 定义计数器结构体


```go
type counter struct {
	num uint         // 计数。
	mu  sync.RWMutex // 读写锁。
}

```


`counter`结构体包含一个无符号整数`num`用于存储计数值，以及一个读写锁`mu`用于保护对`num`的并发访问。


### 2. 获取当前计数值的方法


```go
func (c *counter) number() uint {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return c.num
}

```


`number`方法使用读锁（`RLock`）来保护对`num`的读取操作，并在读取完成后释放读锁（`RUnlock`）。


### 3. 增加计数值的方法


```go
func (c *counter) add(increment uint) uint {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.num += increment
	return c.num
}

```


`add`方法使用写锁（`Lock`）来保护对`num`的写操作，并在写入完成后释放写锁（`Unlock`）。


### 4. 主函数


```go
func main() {
	c := counter{}
	count(&c)
	redundantUnlock()
}

```


在`main`函数中，我们创建一个`counter`实例，并调用`count`函数和`redundantUnlock`函数。


### 5. 并发计数函数


```go
func count(c *counter) {
	// sign 用于传递演示完成的信号。
	sign := make(chan struct{}, 3)
	go func() { // 用于增加计数。
		defer func() {
			sign <- struct{}{}
		}()
		for i := 1; i <= 10; i++ {
			time.Sleep(time.Millisecond * 500)
			c.add(1)
		}
	}()
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for j := 1; j <= 20; j++ {
			time.Sleep(time.Millisecond * 200)
			log.Printf("The number in counter: %d [%d-%d]",
				c.number(), 1, j)
		}
	}()
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for k := 1; k <= 20; k++ {
			time.Sleep(time.Millisecond * 300)
			log.Printf("The number in counter: %d [%d-%d]",
				c.number(), 2, k)
		}
	}()
	<-sign
	<-sign
	<-sign
}

```


`count`函数启动了三个并发的goroutine：

- 第一个goroutine每500毫秒增加一次计数。
- 第二个和第三个goroutine分别每200毫秒和300毫秒读取并打印当前计数值。

`sign`通道用于等待所有goroutine完成。


### 6. 错误解锁示例


```go
func redundantUnlock() {
	var rwMu sync.RWMutex

	// 示例1。
	//rwMu.Unlock() // 这里会引发panic。

	// 示例2。
	//rwMu.RUnlock() // 这里会引发panic。

	// 示例3。
	rwMu.RLock()
	//rwMu.Unlock() // 这里会引发panic。
	rwMu.RUnlock()

	// 示例4。
	rwMu.Lock()
	//rwMu.RUnlock() // 这里会引发panic。
	rwMu.Unlock()
}

```


`redundantUnlock`函数展示了几种错误使用读写锁的方法，这些错误会导致程序崩溃（panic）。正确的使用方式是成对调用`RLock`/`RUnlock`和`Lock`/`Unlock`。


### 总结


通过这个示例，我们学习了如何使用Go语言中的读写锁来实现并发安全的计数器。我们还展示了几种错误使用锁的方法，以帮助你避免常见的陷阱。

