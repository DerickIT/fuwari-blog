---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-language-defer-panic-recover
title: Go语言教程：深入理解defer、panic和recover
urlname: 7f313633-7c56-42ab-9e8b-fa02bf1c3bdc
date: '2024-06-01 00:29:00'
updated: '2024-06-03 00:10:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-19T08:00:00.000Z
---

在Go语言中，`defer`、`panic`和`recover`是三个非常重要的关键字，它们在处理错误和资源管理方面起着至关重要的作用。本文将通过几个示例代码，深入浅出地讲解这三个关键字的用法和注意事项。


## 示例1：defer的基本用法


```go
package main

import "fmt"

func main() {
	defer fmt.Println("first defer")
	for i := 0; i < 3; i++ {
		defer fmt.Printf("defer in for [%d]\\n", i)
	}
	defer fmt.Println("last defer")
}
```


### 解析

1. **defer的执行顺序**：
    - `defer`语句会将其后的函数调用推迟到包含它的函数即将返回的时候执行。
    - 多个`defer`语句的执行顺序是**后进先出**（LIFO）。
2. **代码执行顺序**：
    - `main`函数开始执行，首先注册`defer fmt.Println("first defer")`。
    - 进入`for`循环，依次注册`defer fmt.Printf("defer in for [%d]\\n", i)`，其中`i`的值分别为0、1、2。
    - 注册`defer fmt.Println("last defer")`。
    - `main`函数即将返回时，按照后进先出的顺序执行所有的`defer`语句。

### 输出结果


```plain text
last defer
defer in for [2]
defer in for [1]
defer in for [0]
first defer
```


## 示例2：panic和recover的用法


```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println("Enter function main.")

	defer func() {
		fmt.Println("Enter defer function.")

		// recover函数的正确用法。
		if p := recover(); p != nil {
			fmt.Printf("panic: %s\\n", p)
		}

		fmt.Println("Exit defer function.")
	}()

	// recover函数的错误用法。
	fmt.Printf("no panic: %v\\n", recover())

	// 引发panic。
	panic(errors.New("something wrong"))

	// recover函数的错误用法。
	p := recover()
	fmt.Printf("panic: %s\\n", p)

	fmt.Println("Exit function main.")
}
```


### 解析

1. **panic**：
    - `panic`用于引发一个恐慌，终止当前函数的执行，并开始沿着调用栈向上回溯，直到遇到`recover`或程序崩溃。
2. **recover**：
    - `recover`用于终止`panic`的回溯，恢复正常的执行流程。它只能在`defer`函数中有效。
3. **代码执行顺序**：
    - `main`函数开始执行，打印`"Enter function main."`。
    - 注册`defer`函数。
    - 调用`recover()`，此时没有`panic`，返回`nil`。
    - 引发`panic`，错误信息为`"something wrong"`。
    - `defer`函数被调用，`recover`捕获到`panic`，打印错误信息。
    - `defer`函数执行完毕，`main`函数继续执行。

### 输出结果


```plain text
Enter function main.
no panic: <nil>
Enter defer function.
panic: something wrong
Exit defer function.
```


## 示例3：panic的正确和错误用法


```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println("Enter function main.")
	caller()
	fmt.Println("Exit function main.")
}

func caller() {
	fmt.Println("Enter function caller.")
	panic(errors.New("something wrong")) // 正例。
	panic(fmt.Println)                   // 反例。
	fmt.Println("Exit function caller.")
}
```


### 解析

1. **panic的正确用法**：
    - `panic(errors.New("something wrong"))`：引发一个带有错误信息的`panic`。
2. **panic的错误用法**：
    - `panic(fmt.Println)`：`fmt.Println`是一个函数，不是错误信息或字符串，使用不当。
3. **代码执行顺序**：
    - `main`函数开始执行，打印`"Enter function main."`。
    - 调用`caller`函数。
    - `caller`函数引发`panic`，错误信息为`"something wrong"`，程序终止。

### 输出结果


```plain text
Enter function main.
Enter function caller.
panic: something wrong
```


## 总结


通过以上示例，我们可以总结出以下几点：

1. **defer**：
    - 用于延迟函数的执行，直到包含它的函数即将返回时执行。
    - 多个`defer`语句按照后进先出的顺序执行。
2. **panic**：
    - 用于引发一个恐慌，终止当前函数的执行，并开始沿着调用栈向上回溯。
3. **recover**：
    - 用于终止`panic`的回溯，恢复正常的执行流程。只能在`defer`函数中有效。

通过理解和掌握`defer`、`panic`和`recover`的用法，可以更好地处理Go语言中的错误和资源管理，提高代码的健壮性和可维护性。

