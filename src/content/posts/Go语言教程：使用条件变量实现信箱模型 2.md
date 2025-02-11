---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-concurrency-using-condition-variables-mailbox-model
title: Go语言教程：使用条件变量实现信箱模型 2
urlname: c778e194-cfbc-40d6-9bc5-471a93d0e6af
date: '2024-06-01 00:29:00'
updated: '2024-06-12 22:55:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-27T08:00:00.000Z
---

在本教程中，我们将深入探讨如何使用Go语言中的条件变量（`sync.Cond`）来实现一个简单的信箱模型。这个模型模拟了发送和接收信件的过程，确保在信箱为空时不能发送信件，在信箱为满时不能接收信件。


### 代码概述


我们将从以下几个方面来讲解代码：

1. **信箱和锁的定义**
2. **条件变量的创建**
3. **发送和接收函数的实现**
4. **并发发送和接收的实现**
5. **主函数的执行流程**

### 1. 信箱和锁的定义


首先，我们定义了一个信箱和一个互斥锁：


```go
var mailbox uint8
var lock sync.Mutex
```

- `mailbox` 代表信箱的状态，`0`表示空，`1`表示满。
- `lock` 是一个互斥锁，用于保护对信箱状态的并发访问。

### 2. 条件变量的创建


接下来，我们创建了两个条件变量：


```go
sendCond := sync.NewCond(&lock)
recvCond := sync.NewCond(&lock)
```

- `sendCond` 用于发送信件的条件变量。
- `recvCond` 用于接收信件的条件变量。

### 3. 发送和接收函数的实现


### 发送函数


```go
send := func(id, index int) {
    lock.Lock()
    for mailbox == 1 {
        sendCond.Wait()
    }
    log.Printf("sender [%d-%d]: the mailbox is empty.", id, index)
    mailbox = 1
    log.Printf("sender [%d-%d]: the letter has been sent.", id, index)
    lock.Unlock()
    recvCond.Broadcast()
}
```

- 先获取锁，检查信箱是否满。
- 如果信箱满，则等待条件变量`sendCond`。
- 信箱为空时，发送信件并设置信箱状态为满。
- 释放锁并通知所有等待接收信件的goroutine。

### 接收函数


```go
recv := func(id, index int) {
    lock.Lock()
    for mailbox == 0 {
        recvCond.Wait()
    }
    log.Printf("receiver [%d-%d]: the mailbox is full.", id, index)
    mailbox = 0
    log.Printf("receiver [%d-%d]: the letter has been received.", id, index)
    lock.Unlock()
    sendCond.Signal()
}
```

- 先获取锁，检查信箱是否空。
- 如果信箱空，则等待条件变量`recvCond`。
- 信箱为满时，接收信件并设置信箱状态为空。
- 释放锁并通知一个等待发送信件的goroutine。

### 4. 并发发送和接收的实现


我们使用goroutine来并发地发送和接收信件：


```go
sign := make(chan struct{}, 3)
max := 6

go func(id, max int) {
    defer func() { sign <- struct{}{} }()
    for i := 1; i <= max; i++ {
        time.Sleep(time.Millisecond * 500)
        send(id, i)
    }
}(0, max)

go func(id, max int) {
    defer func() { sign <- struct{}{} }()
    for j := 1; j <= max; j++ {
        time.Sleep(time.Millisecond * 200)
        recv(id, j)
    }
}(1, max/2)

go func(id, max int) {
    defer func() { sign <- struct{}{} }()
    for k := 1; k <= max; k++ {
        time.Sleep(time.Millisecond * 200)
        recv(id, k)
    }
}(2, max/2)
```

- 我们启动了三个goroutine：一个用于发送信件，两个用于接收信件。
- 每个goroutine在完成任务后向`sign`通道发送信号，表示任务完成。

### 5. 主函数的执行流程


主函数等待所有goroutine完成：


```go
<-sign
<-sign
<-sign
```

- 主函数通过接收`sign`通道的信号来等待所有goroutine完成。

### 总结


通过这个示例，我们学习了如何使用Go语言中的条件变量来实现一个简单的信箱模型。我们使用互斥锁保护共享资源，并通过条件变量实现了发送和接收信件的同步机制。


### 举一反三


在实际应用中，条件变量可以用于解决各种并发控制问题，例如：

- 生产者-消费者模型
- 资源池管理
- 复杂的同步逻辑

希望通过这个教程，您能更好地理解Go语言中的条件变量，并能将其应用到实际项目中。

