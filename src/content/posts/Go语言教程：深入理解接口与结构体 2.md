---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-tutorial-interface-struct-2
title: Go语言教程：深入理解接口与结构体 2
urlname: b8dece07-a896-439d-b81f-27feefa9bd0f
date: '2024-05-21 23:16:00'
updated: '2024-05-25 16:49:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-12T08:00:00.000Z
---

### 介绍


在Go语言中，接口（interface）和结构体（struct）是构建灵活和可扩展程序的基础。接口定义了一组方法，而结构体可以实现这些方法，从而实现接口。


### 示例代码


以下是一个完整的Go语言代码示例，展示了如何定义接口、结构体以及实现接口的方法：


```go
package main

import "fmt"

type Pet interface {
	SetName(name string)
	Name() string
	Category() string
}

type Dog struct {
	name string // 名字。
}

func (dog *Dog) SetName(name string) {
	dog.name = name
}

func (dog Dog) Name() string {
	return dog.name
}

func (dog Dog) Category() string {
	return "dog"
}

func main() {
	// 示例1。
	dog := Dog{"little pig"}
	_, ok := interface{}(dog).(Pet)
	fmt.Printf("Dog implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&dog).(Pet)
	fmt.Printf("*Dog implements interface Pet: %v\\n", ok)
	fmt.Println()

	// 示例2。
	var pet Pet = &dog
	fmt.Printf("This pet is a %s, the name is %q.\\n",
		pet.Category(), pet.Name())
}
```


### 代码解析


### 定义接口


首先，我们定义了一个 `Pet` 接口，接口中包含三个方法：`SetName`、`Name` 和 `Category`。


```go
type Pet interface {
	SetName(name string)
	Name() string
	Category() string
}
```


### 定义结构体


接下来，我们定义了一个 `Dog` 结构体，用于表示狗的基本信息，包括名字。


```go
type Dog struct {
	name string // 名字。
}
```


### 实现接口方法


我们为 `Dog` 结构体实现了 `Pet` 接口中的方法。需要注意的是，`SetName` 方法接收一个指向 `Dog` 结构体的指针，这意味着它可以修改原始结构体的内容。


```go
func (dog *Dog) SetName(name string) {
	dog.name = name
}

func (dog Dog) Name() string {
	return dog.name
}

func (dog Dog) Category() string {
	return "dog"
}
```


### 主函数


在 `main` 函数中，我们创建了一个 `Dog` 实例，并检查 `Dog` 结构体和 `*Dog` 指针是否实现了 `Pet` 接口。


```go
func main() {
	// 示例1。
	dog := Dog{"little pig"}
	_, ok := interface{}(dog).(Pet)
	fmt.Printf("Dog implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&dog).(Pet)
	fmt.Printf("*Dog implements interface Pet: %v\\n", ok)
	fmt.Println()

	// 示例2。
	var pet Pet = &dog
	fmt.Printf("This pet is a %s, the name is %q.\\n",
		pet.Category(), pet.Name())
}
```


### 运行结果


运行上述代码，输出结果如下：


```plain text
Dog implements interface Pet: false
*Dog implements interface Pet: true

This pet is a dog, the name is "little pig".
```


### 举一反三


通过这个示例，我们可以举一反三地应用这些概念。例如，我们可以定义一个 `Cat` 结构体，并实现类似的方法和接口：


```go
type Cat struct {
	name string
}

func (cat *Cat) SetName(name string) {
	cat.name = name
}

func (cat Cat) Name() string {
	return cat.name
}

func (cat Cat) Category() string {
	return "cat"
}
```


然后，我们可以在 `main` 函数中创建 `Cat` 实例，并检查其行为：


```go
func main() {
	// 示例1。
	cat := Cat{"whiskers"}
	_, ok := interface{}(cat).(Pet)
	fmt.Printf("Cat implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&cat).(Pet)
	fmt.Printf("*Cat implements interface Pet: %v\\n", ok)
	fmt.Println()

	// 示例2。
	var pet Pet = &cat
	fmt.Printf("This pet is a %s, the name is %q.\\n",
		pet.Category(), pet.Name())
}
```


### 总结


通过这个教程，我们深入探讨了Go语言中的接口和结构体，并展示了如何举一反三地应用这些概念。理解这些基础知识将帮助你在Go语言中构建更复杂和灵活的程序。

