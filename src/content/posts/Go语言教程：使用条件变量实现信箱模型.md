---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-concurrency-mailbox-model-tutorial
title: Go语言教程：使用条件变量实现信箱模型
urlname: 2c71ef6e-d7e7-4146-8c60-c519254903da
date: '2024-06-01 00:29:00'
updated: '2024-06-10 23:54:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-26T08:00:00.000Z
---

在本教程中，我们将通过一个简单的信箱模型来学习Go语言中的条件变量（Condition Variable）和互斥锁（Mutex）。这个模型模拟了一个信箱的发送和接收过程，信箱可以是空的或满的。我们将详细解释代码的每一部分，并举一反三，帮助你更好地理解这些概念。


### 代码概述


以下是我们将要分析的Go代码：


```go
package main

import (
	"log"
	"sync"
	"time"
)

func main() {
	// mailbox 代表信箱。
	// 0代表信箱是空的，1代表信箱是满的。
	var mailbox uint8
	// lock 代表信箱上的锁。
	var lock sync.RWMutex
	// sendCond 代表专用于发信的条件变量。
	sendCond := sync.NewCond(&lock)
	// recvCond 代表专用于收信的条件变量。
	recvCond := sync.NewCond(lock.RLocker())

	// sign 用于传递演示完成的信号。
	sign := make(chan struct{}, 3)
	max := 5
	go func(max int) { // 用于发信。
		defer func() {
			sign <- struct{}{}
		}()
		for i := 1; i <= max; i++ {
			time.Sleep(time.Millisecond * 500)
			lock.Lock()
			for mailbox == 1 {
				sendCond.Wait()
			}
			log.Printf("sender [%d]: the mailbox is empty.", i)
			mailbox = 1
			log.Printf("sender [%d]: the letter has been sent.", i)
			lock.Unlock()
			recvCond.Signal()
		}
	}(max)
	go func(max int) { // 用于收信。
		defer func() {
			sign <- struct{}{}
		}()
		for j := 1; j <= max; j++ {
			time.Sleep(time.Millisecond * 500)
			lock.RLock()
			for mailbox == 0 {
				recvCond.Wait()
			}
			log.Printf("receiver [%d]: the mailbox is full.", j)
			mailbox = 0
			log.Printf("receiver [%d]: the letter has been received.", j)
			lock.RUnlock()
			sendCond.Signal()
		}
	}(max)

	<-sign
	<-sign
}

```


### 代码详解


### 1. 变量声明


```go
var mailbox uint8
var lock sync.RWMutex
sendCond := sync.NewCond(&lock)
recvCond := sync.NewCond(lock.RLocker())
sign := make(chan struct{}, 3)
max := 5

```

- `mailbox`：表示信箱的状态，0表示空，1表示满。
- `lock`：读写锁，用于保护对`mailbox`的访问。
- `sendCond`：用于发送信的条件变量。
- `recvCond`：用于接收信的条件变量。
- `sign`：用于传递演示完成的信号。
- `max`：表示发送和接收的最大次数。

### 2. 发信协程


```go
go func(max int) {
	defer func() {
		sign <- struct{}{}
	}()
	for i := 1; i <= max; i++ {
		time.Sleep(time.Millisecond * 500)
		lock.Lock()
		for mailbox == 1 {
			sendCond.Wait()
		}
		log.Printf("sender [%d]: the mailbox is empty.", i)
		mailbox = 1
		log.Printf("sender [%d]: the letter has been sent.", i)
		lock.Unlock()
		recvCond.Signal()
	}
}(max)

```

- 使用`lock.Lock()`加锁，确保对`mailbox`的访问是线程安全的。
- 如果`mailbox`是满的（`mailbox == 1`），则调用`sendCond.Wait()`等待。
- 当信箱为空时，发送信件（将`mailbox`设为1），并解锁。
- 使用`recvCond.Signal()`通知接收协程信箱已满。

### 3. 收信协程


```go
go func(max int) {
	defer func() {
		sign <- struct{}{}
	}()
	for j := 1; j <= max; j++ {
		time.Sleep(time.Millisecond * 500)
		lock.RLock()
		for mailbox == 0 {
			recvCond.Wait()
		}
		log.Printf("receiver [%d]: the mailbox is full.", j)
		mailbox = 0
		log.Printf("receiver [%d]: the letter has been received.", j)
		lock.RUnlock()
		sendCond.Signal()
	}
}(max)

```

- 使用`lock.RLock()`加锁，确保对`mailbox`的访问是线程安全的。
- 如果`mailbox`是空的（`mailbox == 0`），则调用`recvCond.Wait()`等待。
- 当信箱满时，接收信件（将`mailbox`设为0），并解锁。
- 使用`sendCond.Signal()`通知发送协程信箱已空。

### 4. 等待协程完成


```go
<-sign
<-sign

```

- 等待两个协程完成。

### 举一反三


### 1. 多个发送者和接收者


可以扩展代码，使其支持多个发送者和接收者。只需启动多个发送和接收协程，并适当调整条件变量的使用。


### 2. 使用通道（Channel）


Go语言中的通道（Channel）可以简化这种生产者-消费者模型。以下是使用通道实现的示例：


```go
package main

import (
	"log"
	"time"
)

func main() {
	mailbox := make(chan struct{}, 1)
	sign := make(chan struct{}, 2)
	max := 5

	go func(max int) {
		defer func() {
			sign <- struct{}{}
		}()
		for i := 1; i <= max; i++ {
			time.Sleep(time.Millisecond * 500)
			mailbox <- struct{}{}
			log.Printf("sender [%d]: the letter has been sent.", i)
		}
	}(max)

	go func(max int) {
		defer func() {
			sign <- struct{}{}
		}()
		for j := 1; j <= max; j++ {
			time.Sleep(time.Millisecond * 500)
			<-mailbox
			log.Printf("receiver [%d]: the letter has been received.", j)
		}
	}(max)

	<-sign
	<-sign
}

```


### 总结


通过这个教程，我们学习了如何使用Go语言中的条件变量和互斥锁来实现一个简单的信箱模型。我们还展示了如何使用通道来简化这种生产者-消费者模型。希望这个教程能帮助你更好地理解Go语言中的并发编程。

