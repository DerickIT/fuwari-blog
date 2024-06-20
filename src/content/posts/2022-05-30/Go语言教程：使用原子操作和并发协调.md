---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-30'
catalog: []
slug: concurrency-coordination-in-go-with-atomic-operations
title: Go语言教程：使用原子操作和并发协调
urlname: dc0ed89a-aa51-40ab-b8af-9167fbb7c07f
date: '2024-06-01 00:29:00'
updated: '2024-06-20 21:07:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-30T08:00:00.000Z
---

在并发编程中，如何安全地共享和修改数据是一个重要的问题。Go语言提供了多种工具来帮助我们实现这一目标。本文将通过一个示例代码，详细讲解如何使用原子操作和并发协调工具（如通道和`sync.WaitGroup`）来实现并发安全的操作。


### 示例代码解析


我们将通过以下两个示例来展示如何使用通道和`sync.WaitGroup`来协调并发操作。


### 主函数


```go
func main() {
	coordinateWithChan()
	fmt.Println()
	coordinateWithWaitGroup()
}

```


主函数调用了两个并发协调函数：`coordinateWithChan`和`coordinateWithWaitGroup`。我们将分别介绍这两个函数的实现。


### 使用通道进行并发协调


```go
func coordinateWithChan() {
	sign := make(chan struct{}, 2)
	num := int32(0)
	fmt.Printf("The number: %d [with chan struct{}]\\n", num)
	max := int32(10)
	go addNum(&num, 1, max, func() {
		sign <- struct{}{}
	})
	go addNum(&num, 2, max, func() {
		sign <- struct{}{}
	})
	<-sign
	<-sign
}

```


在这个函数中，我们使用了一个带缓冲的通道`sign`来协调两个并发操作。通道的缓冲大小为2，表示可以同时接收两个信号。我们启动了两个并发的`addNum`函数，每个函数在完成后都会向通道发送一个信号。主函数通过接收两个信号来等待这两个并发操作的完成。


### 使用`sync.WaitGroup`进行并发协调


```go
func coordinateWithWaitGroup() {
	var wg sync.WaitGroup
	wg.Add(2)
	num := int32(0)
	fmt.Printf("The number: %d [with sync.WaitGroup]\\n", num)
	max := int32(10)
	go addNum(&num, 3, max, wg.Done)
	go addNum(&num, 4, max, wg.Done)
	wg.Wait()
}

```


在这个函数中，我们使用了`sync.WaitGroup`来协调并发操作。`WaitGroup`的计数器初始值为2，表示有两个并发操作需要等待。每个并发的`addNum`函数在完成后都会调用`wg.Done`来减少计数器的值。主函数通过调用`wg.Wait`来等待计数器变为0，从而等待所有并发操作的完成。


### 原子操作函数`addNum`


```go
func addNum(numP *int32, id, max int32, deferFunc func()) {
	defer func() {
		deferFunc()
	}()
	for i := 0; ; i++ {
		currNum := atomic.LoadInt32(numP)
		if currNum >= max {
			break
		}
		newNum := currNum + 2
		time.Sleep(time.Millisecond * 200)
		if atomic.CompareAndSwapInt32(numP, currNum, newNum) {
			fmt.Printf("The number: %d [%d-%d]\\n", newNum, id, i)
		} else {
			fmt.Printf("The CAS operation failed. [%d-%d]\\n", id, i)
		}
	}
}

```


`addNum`函数用于原子地增加`numP`所指向的变量的值。它使用了`atomic.LoadInt32`和`atomic.CompareAndSwapInt32`来确保操作的原子性。函数通过一个无限循环不断尝试增加`numP`的值，直到达到`max`。每次增加操作前，函数会先加载当前值，然后尝试将其增加2。如果`CompareAndSwapInt32`操作成功，则表示增加操作成功；否则，表示在此期间值已被其他操作修改，增加操作失败。


### 总结


通过以上示例，我们可以看到如何使用通道和`sync.WaitGroup`来协调并发操作，以及如何使用原子操作来确保并发安全。以下是一些关键点：

1. **通道**：通道可以用于在并发操作之间传递信号，从而实现简单的并发协调。
2. **`sync.WaitGroup`**：`WaitGroup`可以用于等待一组并发操作的完成，是一种更灵活的并发协调工具。
3. **原子操作**：原子操作可以确保对共享变量的修改是并发安全的，避免数据竞争。

希望通过这个教程，你能更好地理解和应用Go语言中的并发工具，编写出更加健壮的并发程序。

