---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: understanding-atomic-value-in-go-concurrency
title: Go语言教程：深入浅出理解atomic.Value
urlname: b24e7b96-e8fc-4c90-9dc2-573af1f65119
date: '2024-06-01 00:29:00'
updated: '2024-06-19 18:52:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-29T08:00:00.000Z
---

在Go语言中，`atomic.Value`是一个非常有用的工具，用于在并发编程中安全地存储和加载值。本文将通过一个示例代码，详细讲解`atomic.Value`的使用方法和原理，并举一反三，帮助你更好地理解和应用。


### 示例代码解析


我们将通过以下几个示例来逐步解析`atomic.Value`的使用。


### 示例1：基本使用


```go
var box atomic.Value
fmt.Println("Copy box to box2.")
box2 := box // 原子值在真正使用前可以被复制。
v1 := [...]int{1, 2, 3}
fmt.Printf("Store %v to box.\\n", v1)
box.Store(v1)
fmt.Printf("The value load from box is %v.\\n", box.Load())
fmt.Printf("The value load from box2 is %v.\\n", box2.Load())
```


在这个示例中，我们首先声明了一个`atomic.Value`类型的变量`box`。在存储值之前，我们可以安全地复制这个变量。然后，我们将一个数组存储到`box`中，并从`box`和`box2`中加载值。


### 示例2：存储不同类型的值


```go
v2 := "123"
fmt.Printf("Store %q to box2.\\n", v2)
box2.Store(v2) // 这里并不会引发panic。
fmt.Printf("The value load from box is %v.\\n", box.Load())
fmt.Printf("The value load from box2 is %q.\\n", box2.Load())
```


在这个示例中，我们将一个字符串存储到`box2`中。注意，`box2`在存储值之前是可以存储任何类型的值的。


### 示例3：复制后的使用


```go
fmt.Println("Copy box to box3.")
box3 := box // 原子值在真正使用后不应该被复制！
fmt.Printf("The value load from box3 is %v.\\n", box3.Load())
v3 := 123
fmt.Printf("Store %d to box3.\\n", v3)
//box3.Store(v3) // 这里会引发一个panic，报告存储值的类型不一致。
```


在这个示例中，我们展示了在存储值之后复制`atomic.Value`变量会导致问题。`box3`在存储值之后被复制，再次存储不同类型的值会引发panic。


### 示例4：存储实现相同接口的不同类型


```go
var box4 atomic.Value
v4 := errors.New("something wrong")
fmt.Printf("Store an error with message %q to box4.\\n", v4)
box4.Store(v4)
v41 := io.EOF
fmt.Println("Store a value of the same type to box4.")
box4.Store(v41)
v42, ok := interface{}(&os.PathError{}).(error)
if ok {
    fmt.Printf("Store a value of type %T that implements error interface to box4.\\n", v42)
    //box4.Store(v42) // 这里会引发一个panic，报告存储值的类型不一致。
}
```


在这个示例中，我们展示了如何存储实现相同接口的不同类型的值。注意，虽然`v42`实现了`error`接口，但它的具体类型与之前存储的值不同，因此会引发panic。


### 示例5：自定义atomicValue类型


```go
box5, err := NewAtomicValue(v4)
if err != nil {
    fmt.Printf("error: %s\\n", err)
}
fmt.Printf("The legal type in box5 is %s.\\n", box5.TypeOfValue())
fmt.Println("Store a value of the same type to box5.")
err = box5.Store(v41)
if err != nil {
    fmt.Printf("error: %s\\n", err)
}
fmt.Printf("Store a value of type %T that implements error interface to box5.\\n", v42)
err = box5.Store(v42)
if err != nil {
    fmt.Printf("error: %s\\n", err)
}
```


在这个示例中，我们定义了一个自定义的`atomicValue`类型，并通过构造函数`NewAtomicValue`来初始化它。这个类型确保了存储的值类型一致性。


### 示例6：并发安全的存储


```go
var box6 atomic.Value
v6 := []int{1, 2, 3}
fmt.Printf("Store %v to box6.\\n", v6)
box6.Store(v6)
v6[1] = 4 // 注意，此处的操作不是并发安全的！
fmt.Printf("The value load from box6 is %v.\\n", box6.Load())
// 正确的做法如下。
v6 = []int{1, 2, 3}
store := func(v []int) {
    replica := make([]int, len(v))
    copy(replica, v)
    box6.Store(replica)
}
fmt.Printf("Store %v to box6.\\n", v6)
store(v6)
v6[2] = 5 // 此处的操作是安全的。
fmt.Printf("The value load from box6 is %v.\\n", box6.Load())
```


在这个示例中，我们展示了如何在并发环境中安全地存储和修改切片。直接修改存储的切片是不安全的，因此我们需要创建一个副本并存储它。


### 总结


通过以上示例，我们可以看到`atomic.Value`在并发编程中的重要性和使用方法。以下是一些关键点：

1. **存储前可以复制**：在存储值之前，可以安全地复制`atomic.Value`变量。
2. **类型一致性**：存储的值类型必须一致，否则会引发panic。
3. **并发安全**：直接修改存储的值是不安全的，需要创建副本。

希望通过这个教程，你能更好地理解和应用`atomic.Value`，编写出更加健壮的并发程序。

