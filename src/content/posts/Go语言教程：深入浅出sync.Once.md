---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-tutorial-understanding-sync-once-with-examples
title: Go语言教程：深入浅出sync.Once
urlname: f5ed3fc0-f806-457e-8543-d24f6b6dd17d
date: '2024-06-01 00:29:00'
updated: '2024-06-22 00:24:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-31T08:00:00.000Z
---

在Go语言中，`sync.Once`是一个非常有用的工具，它可以确保某个操作只执行一次。无论有多少个goroutine调用它，操作都只会执行一次。本文将通过几个示例代码，深入浅出地介绍`sync.Once`的使用和原理。


## 示例1：基本使用


首先，我们来看一个简单的例子：


```go
package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

func main() {
	var counter uint32
	var once sync.Once

	once.Do(func() {
		atomic.AddUint32(&counter, 1)
	})
	fmt.Printf("The counter: %d\\n", counter)

	once.Do(func() {
		atomic.AddUint32(&counter, 2)
	})
	fmt.Printf("The counter: %d\\n", counter)
}

```


### 解释

1. **定义变量**：我们定义了一个`uint32`类型的变量`counter`和一个`sync.Once`类型的变量`once`。
2. **第一次调用****`once.Do`**：我们传入一个匿名函数，该函数将`counter`加1。由于这是第一次调用`once.Do`，所以这个操作会执行。
3. **第二次调用****`once.Do`**：我们再次传入一个匿名函数，这次将`counter`加2。然而，由于`sync.Once`的特性，这个操作不会执行。

输出结果：


```text
The counter: 1
The counter: 1

```


可以看到，第二次调用`once.Do`并没有改变`counter`的值。


## 示例2：多goroutine并发


接下来，我们来看一个多goroutine并发的例子：


```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var once sync.Once
	var wg sync.WaitGroup

	wg.Add(3)

	go func() {
		defer wg.Done()
		once.Do(func() {
			for i := 0; i < 3; i++ {
				fmt.Printf("Do task. [1-%d]\\n", i)
				time.Sleep(time.Second)
			}
		})
		fmt.Println("Done. [1]")
	}()

	go func() {
		defer wg.Done()
		time.Sleep(time.Millisecond * 500)
		once.Do(func() {
			fmt.Println("Do task. [2]")
		})
		fmt.Println("Done. [2]")
	}()

	go func() {
		defer wg.Done()
		time.Sleep(time.Millisecond * 500)
		once.Do(func() {
			fmt.Println("Do task. [3]")
		})
		fmt.Println("Done. [3]")
	}()

	wg.Wait()
}

```


### 解释

1. **定义变量**：我们定义了一个`sync.Once`类型的变量`once`和一个`sync.WaitGroup`类型的变量`wg`。
2. **添加goroutine**：我们启动了三个goroutine，每个goroutine都会调用`once.Do`。
3. **执行任务**：只有第一个goroutine中的任务会被执行，其他两个goroutine中的任务不会被执行。

输出结果：


```text
Do task. [1-0]
Do task. [1-1]
Do task. [1-2]
Done. [1]
Done. [2]
Done. [3]

```


可以看到，只有第一个goroutine中的任务被执行了，其他两个goroutine中的任务没有被执行。


## 示例3：处理panic


最后，我们来看一个处理`panic`的例子：


```go
package main

import (
	"errors"
	"fmt"
	"sync"
	"time"
)

func main() {
	var once sync.Once
	var wg sync.WaitGroup

	wg.Add(2)

	go func() {
		defer wg.Done()
		defer func() {
			if p := recover(); p != nil {
				fmt.Printf("fatal error: %v\\n", p)
			}
		}()
		once.Do(func() {
			fmt.Println("Do task. [4]")
			panic(errors.New("something wrong"))
			fmt.Println("Done. [4]")
		})
	}()

	go func() {
		defer wg.Done()
		time.Sleep(time.Millisecond * 500)
		once.Do(func() {
			fmt.Println("Do task. [5]")
		})
		fmt.Println("Done. [5]")
	}()

	wg.Wait()
}

```


### 解释

1. **定义变量**：我们定义了一个`sync.Once`类型的变量`once`和一个`sync.WaitGroup`类型的变量`wg`。
2. **添加goroutine**：我们启动了两个goroutine，第一个goroutine会触发`panic`，第二个goroutine会等待500毫秒后调用`once.Do`。
3. **处理****`panic`**：第一个goroutine中的任务会触发`panic`，我们使用`recover`来捕获并处理这个`panic`。

输出结果：


```text
Do task. [4]
fatal error: something wrong
Done. [5]

```


可以看到，第一个goroutine中的任务触发了`panic`，但第二个goroutine中的任务仍然没有被执行。


## 总结


通过以上三个示例，我们可以看到`sync.Once`的几个关键特性：

1. **确保操作只执行一次**：无论有多少个goroutine调用`once.Do`，操作都只会执行一次。
2. **线程安全**：`sync.Once`是线程安全的，可以在多个goroutine中并发使用。
3. **处理****`panic`**：即使在`once.Do`中触发了`panic`，`sync.Once`也不会再次执行操作。

希望通过这些示例，您能更好地理解和使用`sync.Once`。

