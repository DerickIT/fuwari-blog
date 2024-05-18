---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-04'
catalog: []
slug: go-language-slice-tutoria
title: Go语言教程：切片
urlname: af18dffb-60fb-40fd-a1fd-c9e3e6bae356
date: '2024-05-16 00:03:00'
updated: '2024-05-18 22:48:00'
image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-04T08:00:00.000Z
---

在这篇教程中，我们将详细解释一段Go语言代码，帮助你理解切片的容量（capacity）和长度（length）是如何变化的。我们将通过三个示例来展示这些概念。


## 示例1：动态扩展切片


首先，我们来看第一个示例：


```go
package main

import "fmt"

func main() {
    // 示例1。
    s6 := make([]int, 0)
    fmt.Printf("The capacity of s6: %d\\n", cap(s6))
    for i := 1; i <= 5; i++ {
        s6 = append(s6, i)
        fmt.Printf("s6(%d): len: %d, cap: %d\\n", i, len(s6), cap(s6))
    }
    fmt.Println()
}

```


### 解释

1. `s6 := make([]int, 0)`：创建一个长度和容量都为0的空切片。
2. `fmt.Printf("The capacity of s6: %d\\n", cap(s6))`：打印初始容量，应该是0。
3. `for i := 1; i <= 5; i++`：循环5次，每次向切片`append`一个元素。
4. `s6 = append(s6, i)`：向切片`append`元素`i`，切片会自动扩展。
5. `fmt.Printf("s6(%d): len: %d, cap: %d\\n", i, len(s6), cap(s6))`：打印每次`append`后的长度和容量。

### 结果


每次`append`操作都会导致切片的长度增加1，而容量会根据需要动态扩展。通常，容量会按一定的倍数增长，以减少频繁的内存分配。


## 示例2：预分配大容量切片


接下来是第二个示例：


```go
package main

import "fmt"

func main() {
    // 示例2。
    s7 := make([]int, 1024)
    fmt.Printf("The capacity of s7: %d\\n", cap(s7))
    s7e1 := append(s7, make([]int, 200)...)
    fmt.Printf("s7e1: len: %d, cap: %d\\n", len(s7e1), cap(s7e1))
    s7e2 := append(s7, make([]int, 400)...)
    fmt.Printf("s7e2: len: %d, cap: %d\\n", len(s7e2), cap(s7e2))
    s7e3 := append(s7, make([]int, 600)...)
    fmt.Printf("s7e3: len: %d, cap: %d\\n", len(s7e3), cap(s7e3))
    fmt.Println()
}

```


### 解释

1. `s7 := make([]int, 1024)`：创建一个长度和容量都为1024的切片。
2. `fmt.Printf("The capacity of s7: %d\\n", cap(s7))`：打印初始容量，应该是1024。
3. `s7e1 := append(s7, make([]int, 200)...)`：向`s7`追加200个元素，生成新的切片`s7e1`。
4. `fmt.Printf("s7e1: len: %d, cap: %d\\n", len(s7e1), cap(s7e1))`：打印`s7e1`的长度和容量。
5. 类似地，`s7e2`和`s7e3`分别追加400和600个元素，并打印它们的长度和容量。

### 结果


由于`s7`的初始容量较大，追加200个元素不会导致容量变化。但追加400和600个元素时，容量会根据需要扩展。


## 示例3：小容量切片的扩展


最后是第三个示例：


```go
package main

import "fmt"

func main() {
    // 示例3。
    s8 := make([]int, 10)
    fmt.Printf("The capacity of s8: %d\\n", cap(s8))
    s8a := append(s8, make([]int, 11)...)
    fmt.Printf("s8a: len: %d, cap: %d\\n", len(s8a), cap(s8a))
    s8b := append(s8a, make([]int, 23)...)
    fmt.Printf("s8b: len: %d, cap: %d\\n", len(s8b), cap(s8b))
    s8c := append(s8b, make([]int, 45)...)
    fmt.Printf("s8c: len: %d, cap: %d\\n", len(s8c), cap(s8c))
}

```


### 解释

1. `s8 := make([]int, 10)`：创建一个长度和容量都为10的切片。
2. `fmt.Printf("The capacity of s8: %d\\n", cap(s8))`：打印初始容量，应该是10。
3. `s8a := append(s8, make([]int, 11)...)`：向`s8`追加11个元素，生成新的切片`s8a`。
4. `fmt.Printf("s8a: len: %d, cap: %d\\n", len(s8a), cap(s8a))`：打印`s8a`的长度和容量。
5. 类似地，`s8b`和`s8c`分别追加23和45个元素，并打印它们的长度和容量。

### 结果


由于`s8`的初始容量较小，追加11个元素会导致容量扩展。追加23和45个元素时，容量会进一步扩展。


## 总结


通过这三个示例，我们可以看到：

- 切片的容量会根据需要动态扩展，以减少频繁的内存分配。
- 初始容量较大的切片在追加元素时，容量变化较小。
- 初始容量较小的切片在追加大量元素时，容量会显著扩展。

希望这个教程能帮助你更好地理解Go语言中切片的容量和长度变化。如果有任何问题，欢迎随时提问！

