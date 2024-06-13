---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-28'
catalog: []
slug: go-tutorial-atomic-operations-and-cas
title: Go语言教程：深入浅出原子操作与CAS
urlname: f4e91d60-dd42-4ace-80f5-5e40fd552a02
date: '2024-06-01 00:29:00'
updated: '2024-06-13 11:59:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-28T08:00:00.000Z
---

在本教程中，我们将通过一个示例代码来学习Go语言中的原子操作和CAS（Compare-And-Swap）机制。我们将逐步解析代码，深入理解其原理，并举一反三地探讨其应用。


### 1. 原子操作简介


原子操作是指不可分割的操作，即在执行过程中不会被中断。Go语言提供了一些原子操作函数，主要用于多线程环境下的并发控制，确保数据的一致性和安全性。


### 2. 示例代码解析


### 2.1 基本的原子加法操作


首先，我们来看一个简单的原子加法操作示例：


```go
package main

import (
	"fmt"
	"sync/atomic"
)

func main() {
	num := uint32(18)
	fmt.Printf("The number: %d\\n", num)
	delta := int32(-3)
	atomic.AddUint32(&num, uint32(delta))
	fmt.Printf("The number: %d\\n", num)
	atomic.AddUint32(&num, ^uint32(-(-3)-1))
	fmt.Printf("The number: %d\\n", num)

	fmt.Printf("The two's complement of %d: %b\\n", delta, uint32(delta))
	fmt.Printf("The equivalent: %b\\n", ^uint32(-(-3)-1))
}

```


在这个示例中，我们使用了`atomic.AddUint32`函数来进行原子加法操作。需要注意的是，`atomic.AddUint32`的第二个参数必须是无符号整数，因此我们需要进行类型转换。


### 2.2 自旋锁示例


接下来，我们来看一个使用自旋锁的示例：


```go
func forAndCAS1() {
	sign := make(chan struct{}, 2)
	num := int32(0)
	fmt.Printf("The number: %d\\n", num)
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for {
			time.Sleep(time.Millisecond * 500)
			newNum := atomic.AddInt32(&num, 2)
			fmt.Printf("The number: %d\\n", newNum)
			if newNum == 10 {
				break
			}
		}
	}()
	go func() {
		defer func() {
			sign <- struct{}{}
		}()
		for {
			if atomic.CompareAndSwapInt32(&num, 10, 0) {
				fmt.Println("The number has gone to zero.")
				break
			}
			time.Sleep(time.Millisecond * 500)
		}
	}()
	<-sign
	<-sign
}

```


在这个示例中，我们使用了`atomic.AddInt32`和`atomic.CompareAndSwapInt32`函数来实现一个简易的自旋锁。自旋锁是一种忙等待的锁机制，线程在等待锁释放时会不断地检查锁的状态。


### 2.3 互斥锁示例


最后，我们来看一个模拟互斥锁的示例：


```go
func forAndCAS2() {
	sign := make(chan struct{}, 2)
	num := int32(0)
	fmt.Printf("The number: %d\\n", num)
	max := int32(20)
	go func(id int, max int32) {
		defer func() {
			sign <- struct{}{}
		}()
		for i := 0; ; i++ {
			currNum := atomic.LoadInt32(&num)
			if currNum >= max {
				break
			}
			newNum := currNum + 2
			time.Sleep(time.Millisecond * 200)
			if atomic.CompareAndSwapInt32(&num, currNum, newNum) {
				fmt.Printf("The number: %d [%d-%d]\\n", newNum, id, i)
			} else {
				fmt.Printf("The CAS operation failed. [%d-%d]\\n", id, i)
			}
		}
	}(1, max)
	go func(id int, max int32) {
		defer func() {
			sign <- struct{}{}
		}()
		for j := 0; ; j++ {
			currNum := atomic.LoadInt32(&num)
			if currNum >= max {
				break
			}
			newNum := currNum + 2
			time.Sleep(time.Millisecond * 200)
			if atomic.CompareAndSwapInt32(&num, currNum, newNum) {
				fmt.Printf("The number: %d [%d-%d]\\n", newNum, id, j)
			} else {
				fmt.Printf("The CAS operation failed. [%d-%d]\\n", id, j)
			}
		}
	}(2, max)
	<-sign
	<-sign
}

```


在这个示例中，我们使用了`atomic.LoadInt32`和`atomic.CompareAndSwapInt32`函数来模拟一个宽松的互斥锁。互斥锁用于保护共享资源，确保同一时间只有一个线程可以访问该资源。


### 3. 原理解析


### 3.1 原子操作的实现


原子操作通过硬件支持的指令实现，确保操作的不可分割性。在多核处理器中，原子操作可以避免竞态条件，确保数据的一致性。


### 3.2 CAS机制


CAS（Compare-And-Swap）是一种常见的原子操作，用于实现无锁编程。CAS操作会比较内存中的值与预期值，如果相等则更新为新值，否则不做任何操作。CAS操作的核心在于其原子性，确保比较和交换操作在一个不可分割的步骤中完成。


### 4. 举一反三


通过上述示例，我们可以看到原子操作和CAS机制在并发编程中的重要性。我们可以将这些技术应用到更多的场景中，例如：

- 实现无锁队列
- 实现无锁计数器
- 实现高效的并发数据结构

### 5. 总结


在本教程中，我们通过示例代码深入浅出地介绍了Go语言中的原子操作和CAS机制。我们不仅理解了其基本原理，还通过实际应用场景加深了对这些技术的理解。希望通过本教程，您能够更好地掌握Go语言中的并发编程技巧。

