---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-language-tutorial-using-waitgroup-and-atomic-operations
title: 'Go语言教程: 使用WaitGroup和原子操作'
urlname: 3229cf1c-2686-4759-a48a-981608fc9411
date: '2024-06-01 00:29:00'
updated: '2024-06-23 00:31:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-06-01T08:00:00.000Z
---

### 1. WaitGroup的使用


在这个例子中,我们使用了`sync.WaitGroup`来协调多个goroutine的执行。WaitGroup就像一个计数器,我们可以通过它来等待一组goroutine完成。


```go
var wg sync.WaitGroup
wg.Add(stride)  // 增加计数
go someFunction(wg.Done)  // 传入Done函数
wg.Wait()  // 等待所有goroutine完成

```


WaitGroup的工作原理:

1. 使用`Add()`方法设置需要等待的goroutine数量
2. 每个goroutine完成时调用`Done()`方法
3. 主goroutine调用`Wait()`方法等待,直到计数器变为0

这种机制非常适合需要等待多个并发任务完成的场景。例如,你可以用它来等待多个网络请求完成,或者等待多个文件处理任务结束。


### 2. 原子操作


代码中使用了`atomic`包来进行原子操作,这是为了避免多个goroutine同时修改共享变量时可能出现的竞态条件。


```go
currNum := atomic.LoadInt32(numP)
if atomic.CompareAndSwapInt32(numP, currNum, newNum) {
    // 操作成功
}

```


原子操作的重要性:

1. 保证读取和修改操作的原子性
2. 避免数据竞争,确保数据一致性
3. 比使用互斥锁更轻量级,性能更好

除了`LoadInt32`和`CompareAndSwapInt32`,atomic包还提供了`AddInt32`, `StoreInt32`等方法。这些方法可以用于各种需要原子操作的场景,如计数器、标志位等。


### 3. 比较并交换(CAS)操作


`CompareAndSwapInt32`是一个比较并交换的操作,它的工作原理是:

1. 比较当前值是否等于期望值
2. 如果相等,则将新值写入
3. 如果不相等,则不做任何操作

这个操作是原子的,可以用来实现无锁算法。在高并发情况下,CAS操作可以提高性能,因为它避免了线程阻塞。


### 4. defer的使用


代码中使用了`defer`来确保`Done()`方法被调用:


```go
defer func() {
    deferFunc()
}()

```


defer的特点:

1. 在函数返回前执行
2. 可以用来释放资源、解锁等清理操作
3. 多个defer语句按LIFO(后进先出)顺序执行

除了用于WaitGroup,defer还常用于文件操作、数据库连接等需要确保资源释放的场景。


### 5. 应用场景

1. 并发下载:
你可以使用类似的方式来并发下载多个文件,每个下载任务启动一个goroutine,使用WaitGroup等待所有下载完成。
2. 并行计算:
在进行大规模数据处理时,可以将数据分片,每个分片启动一个goroutine进行处理,最后汇总结果。
3. 定时任务:
你可以结合time.Ticker实现定期执行的并发任务,每次触发时启动多个goroutine执行任务。
4. 生产者-消费者模型:
使用channel和goroutine可以轻松实现生产者-消费者模型,WaitGroup可以用来等待所有消费者处理完毕。

通过这个例子,我们可以看到Go语言在并发编程方面的强大能力。合理使用goroutine、WaitGroup和原子操作,可以编写出高效、安全的并发程序。

