---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-channel-tutorial-3
title: Go语言教程：深入解析通道和选择语句 3
urlname: 7ed71506-67e2-4c75-bb42-406c22c8d636
date: '2024-05-16 00:03:00'
updated: '2024-05-23 00:06:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-08T08:00:00.000Z
---

本文将通过一段代码示例，详细讲解Go语言中的通道（Channel）和选择语句（Select）的使用。我们将逐步解析代码中的每个部分，帮助你更好地理解这些概念。


## 示例代码


```go
package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	example1()
	example2()
}

// 示例1。
func example1() {
	// 准备好几个通道。
	intChannels := [3]chan int{
		make(chan int, 1),
		make(chan int, 1),
		make(chan int, 1),
	}
	// 随机选择一个通道，并向它发送元素值。
	index := rand.Intn(3)
	fmt.Printf("The index: %d\\n", index)
	intChannels[index] <- index
	// 哪一个通道中有可取的元素值，哪个对应的分支就会被执行。
	select {
	case <-intChannels[0]:
		fmt.Println("The first candidate case is selected.")
	case <-intChannels[1]:
		fmt.Println("The second candidate case is selected.")
	case elem := <-intChannels[2]:
		fmt.Printf("The third candidate case is selected, the element is %d.\\n", elem)
	default:
		fmt.Println("No candidate case is selected!")
	}
}

// 示例2。
func example2() {
	intChan := make(chan int, 1)
	// 一秒后关闭通道。
	time.AfterFunc(time.Second, func() {
		close(intChan)
	})
	select {
	case _, ok := <-intChan:
		if !ok {
			fmt.Println("The candidate case is closed.")
			break
		}
		fmt.Println("The candidate case is selected.")
	}
}

```


## 示例1：使用 `select` 语句选择通道


### 代码解析


在 `example1` 函数中，我们创建了一个包含三个通道的数组 `intChannels`。每个通道都是带缓冲的，缓冲区大小为1。


```go
intChannels := [3]chan int{
	make(chan int, 1),
	make(chan int, 1),
	make(chan int, 1),
}

```


接下来，我们随机选择一个通道，并向该通道发送一个元素值。


```go
index := rand.Intn(3)
fmt.Printf("The index: %d\\n", index)
intChannels[index] <- index

```


然后，我们使用 `select` 语句来选择哪个通道中有可取的元素值。`select` 语句会随机选择一个可用的通道进行操作。


```go
select {
case <-intChannels[0]:
	fmt.Println("The first candidate case is selected.")
case <-intChannels[1]:
	fmt.Println("The second candidate case is selected.")
case elem := <-intChannels[2]:
	fmt.Printf("The third candidate case is selected, the element is %d.\\n", elem)
default:
	fmt.Println("No candidate case is selected!")
}

```


### 运行结果


运行结果会根据随机选择的通道不同而有所变化。例如：


```text
The index: 1
The second candidate case is selected.

```


## 示例2：通道关闭检测


### 代码解析


在 `example2` 函数中，我们创建了一个带缓冲的通道 `intChan`，缓冲区大小为1。


```go
intChan := make(chan int, 1)

```


我们使用 `time.AfterFunc` 函数在一秒后关闭该通道。


```go
time.AfterFunc(time.Second, func() {
	close(intChan)
})

```


接下来，我们使用 `select` 语句来检测通道是否关闭。


```go
select {
case _, ok := <-intChan:
	if !ok {
		fmt.Println("The candidate case is closed.")
		break
	}
	fmt.Println("The candidate case is selected.")
}

```


### 运行结果


由于通道在一秒后关闭，运行结果将会是：


```text
The candidate case is closed.

```


## 总结


通过这两个示例，我们学习了如何使用Go语言中的通道和选择语句。通道用于在不同的Go协程之间传递数据，而选择语句则用于在多个通道操作中进行选择。希望通过本文的讲解，你能更好地理解和应用这些概念。

