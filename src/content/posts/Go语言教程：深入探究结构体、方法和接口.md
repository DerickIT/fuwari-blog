---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-tutorial-struct-method-interface
title: Go语言教程：深入探究结构体、方法和接口
urlname: bf09a82b-a5e8-4637-b72b-c442f4cc957f
date: '2024-05-21 23:16:00'
updated: '2024-05-25 16:42:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-11T08:00:00.000Z
---

### 介绍


在Go语言中，结构体（struct）、方法和接口是构建复杂数据模型和实现多态行为的基础。本文将通过一个具体的代码示例，深入探究这些概念，并展示如何举一反三地应用它们。


### 示例代码


以下是一个完整的Go语言代码示例，展示了如何定义结构体、方法以及接口：


```go
package main

import "fmt"

type Cat struct {
	name           string // 名字。
	scientificName string // 学名。
	category       string // 动物学基本分类。
}

func New(name, scientificName, category string) Cat {
	return Cat{
		name:           name,
		scientificName: scientificName,
		category:       category,
	}
}

func (cat *Cat) SetName(name string) {
	cat.name = name
}

func (cat Cat) SetNameOfCopy(name string) {
	cat.name = name
}

func (cat Cat) Name() string {
	return cat.name
}

func (cat Cat) ScientificName() string {
	return cat.scientificName
}

func (cat Cat) Category() string {
	return cat.category
}

func (cat Cat) String() string {
	return fmt.Sprintf("%s (category: %s, name: %q)",
		cat.scientificName, cat.category, cat.name)
}

func main() {
	cat := New("little pig", "American Shorthair", "cat")
	cat.SetName("monster") // (&cat).SetName("monster")
	fmt.Printf("The cat: %s\\n", cat)

	cat.SetNameOfCopy("little pig")
	fmt.Printf("The cat: %s\\n", cat)

	type Pet interface {
		SetName(name string)
		Name() string
		Category() string
		ScientificName() string
	}

	_, ok := interface{}(cat).(Pet)
	fmt.Printf("Cat implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&cat).(Pet)
	fmt.Printf("*Cat implements interface Pet: %v\\n", ok)
}

```


### 代码解析


### 定义结构体


首先，我们定义了一个 `Cat` 结构体，用于表示猫的基本信息，包括名字、学名和分类。


```go
type Cat struct {
	name           string // 名字。
	scientificName string // 学名。
	category       string // 动物学基本分类。
}

```


### 构造函数


接下来，我们定义了一个构造函数 `New`，用于创建 `Cat` 结构体的实例。


```go
func New(name, scientificName, category string) Cat {
	return Cat{
		name:           name,
		scientificName: scientificName,
		category:       category,
	}
}

```


### 方法定义


我们为 `Cat` 结构体定义了一些方法，包括设置名字、获取名字、获取学名和获取分类的方法。


```go
func (cat *Cat) SetName(name string) {
	cat.name = name
}

func (cat Cat) SetNameOfCopy(name string) {
	cat.name = name
}

func (cat Cat) Name() string {
	return cat.name
}

func (cat Cat) ScientificName() string {
	return cat.scientificName
}

func (cat Cat) Category() string {
	return cat.category
}

func (cat Cat) String() string {
	return fmt.Sprintf("%s (category: %s, name: %q)",
		cat.scientificName, cat.category, cat.name)
}

```


需要注意的是，`SetName` 方法接收一个指向 `Cat` 结构体的指针，这意味着它可以修改原始结构体的内容。而 `SetNameOfCopy` 方法接收的是结构体的值，这意味着它只能修改副本的内容，不会影响原始结构体。


### 主函数


在 `main` 函数中，我们创建了一个 `Cat` 实例，并调用了不同的方法来展示其行为。


```go
func main() {
	cat := New("little pig", "American Shorthair", "cat")
	cat.SetName("monster") // (&cat).SetName("monster")
	fmt.Printf("The cat: %s\\n", cat)

	cat.SetNameOfCopy("little pig")
	fmt.Printf("The cat: %s\\n", cat)

```


### 接口实现


我们定义了一个 `Pet` 接口，并检查 `Cat` 结构体和 `*Cat` 指针是否实现了该接口。


```go
	type Pet interface {
		SetName(name string)
		Name() string
		Category() string
		ScientificName() string
	}

	_, ok := interface{}(cat).(Pet)
	fmt.Printf("Cat implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&cat).(Pet)
	fmt.Printf("*Cat implements interface Pet: %v\\n", ok)

```


### 运行结果


运行上述代码，输出结果如下：


```text
The cat: American Shorthair (category: cat, name: "monster")
The cat: American Shorthair (category: cat, name: "monster")
Cat implements interface Pet: false
*Cat implements interface Pet: true

```


### 举一反三


通过这个示例，我们可以举一反三地应用这些概念。例如，我们可以定义一个 `Dog` 结构体，并实现类似的方法和接口：


```go
type Dog struct {
	name           string
	scientificName string
	category       string
}

func NewDog(name, scientificName, category string) Dog {
	return Dog{
		name:           name,
		scientificName: scientificName,
		category:       category,
	}
}

func (dog *Dog) SetName(name string) {
	dog.name = name
}

func (dog Dog) Name() string {
	return dog.name
}

func (dog Dog) ScientificName() string {
	return dog.scientificName
}

func (dog Dog) Category() string {
	return dog.category
}

func (dog Dog) String() string {
	return fmt.Sprintf("%s (category: %s, name: %q)",
		dog.scientificName, dog.category, dog.name)
}

```


然后，我们可以在 `main` 函数中创建 `Dog` 实例，并检查其行为：


```go
func main() {
	dog := NewDog("buddy", "Canis lupus familiaris", "dog")
	dog.SetName("max")
	fmt.Printf("The dog: %s\\n", dog)

	type Pet interface {
		SetName(name string)
		Name() string
		Category() string
		ScientificName() string
	}

	_, ok := interface{}(dog).(Pet)
	fmt.Printf("Dog implements interface Pet: %v\\n", ok)
	_, ok = interface{}(&dog).(Pet)
	fmt.Printf("*Dog implements interface Pet: %v\\n", ok)
}

```


### 总结


通过这个教程，我们深入探讨了Go语言中的结构体、方法和接口，并展示了如何举一反三地应用这些概念。理解这些基础知识将帮助你在Go语言中构建更复杂和灵活的程序。

