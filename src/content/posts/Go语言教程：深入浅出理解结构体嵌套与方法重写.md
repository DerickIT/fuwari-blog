---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-tutorial-struct-nesting-method-overriding
title: Go语言教程：深入浅出理解结构体嵌套与方法重写
urlname: f8352c39-c980-49e8-b75d-f0f21706b729
date: '2024-05-21 23:16:00'
updated: '2024-05-25 16:38:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-10T08:00:00.000Z
---

### 介绍


在Go语言中，结构体（struct）是一个非常重要的数据类型，它允许我们将不同类型的数据组合在一起。通过嵌套结构体和方法重写，我们可以实现更复杂的数据模型和行为。本文将通过一个具体的代码示例，深入浅出地介绍这些概念。


### 示例代码


以下是一个完整的Go语言代码示例，展示了如何使用结构体嵌套和方法重写：


```go
package main

import "fmt"

// 示例1。
// AnimalCategory 代表动物分类学中的基本分类法。
type AnimalCategory struct {
	kingdom string // 界。
	phylum  string // 门。
	class   string // 纲。
	order   string // 目。
	family  string // 科。
	genus   string // 属。
	species string // 种。
}

func (ac AnimalCategory) String() string {
	return fmt.Sprintf("%s%s%s%s%s%s%s",
		ac.kingdom, ac.phylum, ac.class, ac.order,
		ac.family, ac.genus, ac.species)
}

// 示例2。
type Animal struct {
	scientificName string // 学名。
	AnimalCategory        // 动物基本分类。
}

// 该方法会"屏蔽"掉嵌入字段中的同名方法。
func (a Animal) String() string {
	return fmt.Sprintf("%s (category: %s)",
		a.scientificName, a.AnimalCategory)
}

// 示例3。
type Cat struct {
	name string
	Animal
}

// 该方法会"屏蔽"掉嵌入字段中的同名方法。
func (cat Cat) String() string {
	return fmt.Sprintf("%s (category1: %s, name: %q)",
		cat.scientificName, cat.Animal.AnimalCategory, cat.name)
}

func main() {
	// 示例1。
	category := AnimalCategory{species: "cat"}
	fmt.Printf("The animal category: %s\\n", category)

	// 示例2。
	animal := Animal{
		scientificName: "American Shorthair",
		AnimalCategory: category,
	}
	fmt.Printf("The animal: %s\\n", animal)

	// 示例3。
	cat := Cat{
		name:   "little pig",
		Animal: animal,
	}
	fmt.Printf("The cat: %s\\n", cat)
}

```


### 代码解析


### 示例1：基本结构体


首先，我们定义了一个 `AnimalCategory` 结构体，用于表示动物分类学中的基本分类法。这个结构体包含了多个字段，如 `kingdom`（界）、`phylum`（门）、`class`（纲）等。


```go
type AnimalCategory struct {
	kingdom string // 界。
	phylum  string // 门。
	class   string // 纲。
	order   string // 目。
	family  string // 科。
	genus   string // 属。
	species string // 种。
}

```


我们还为 `AnimalCategory` 结构体定义了一个 `String` 方法，用于返回该结构体的字符串表示。


```go
func (ac AnimalCategory) String() string {
	return fmt.Sprintf("%s%s%s%s%s%s%s",
		ac.kingdom, ac.phylum, ac.class, ac.order,
		ac.family, ac.genus, ac.species)
}

```


### 示例2：嵌套结构体


接下来，我们定义了一个 `Animal` 结构体，它嵌套了 `AnimalCategory` 结构体，并添加了一个 `scientificName` 字段。


```go
type Animal struct {
	scientificName string // 学名。
	AnimalCategory        // 动物基本分类。
}

```


同样，我们为 `Animal` 结构体定义了一个 `String` 方法，这个方法会“屏蔽”掉嵌入字段中的同名方法。


```go
func (a Animal) String() string {
	return fmt.Sprintf("%s (category: %s)",
		a.scientificName, a.AnimalCategory)
}

```


### 示例3：进一步嵌套


最后，我们定义了一个 `Cat` 结构体，它嵌套了 `Animal` 结构体，并添加了一个 `name` 字段。


```go
type Cat struct {
	name string
	Animal
}

```


同样，我们为 `Cat` 结构体定义了一个 `String` 方法，这个方法会“屏蔽”掉嵌入字段中的同名方法。


```go
func (cat Cat) String() string {
	return fmt.Sprintf("%s (category1: %s, name: %q)",
		cat.scientificName, cat.Animal.AnimalCategory, cat.name)
}

```


### 运行结果


在 `main` 函数中，我们创建了 `AnimalCategory`、`Animal` 和 `Cat` 的实例，并打印它们的字符串表示。


```go
func main() {
	// 示例1。
	category := AnimalCategory{species: "cat"}
	fmt.Printf("The animal category: %s\\n", category)

	// 示例2。
	animal := Animal{
		scientificName: "American Shorthair",
		AnimalCategory: category,
	}
	fmt.Printf("The animal: %s\\n", animal)

	// 示例3。
	cat := Cat{
		name:   "little pig",
		Animal: animal,
	}
	fmt.Printf("The cat: %s\\n", cat)
}

```


运行结果如下：


```text
The animal category: cat
The animal: American Shorthair (category: cat)
The cat: American Shorthair (category1: cat, name: "little pig")

```


### 总结


通过这个示例，我们展示了如何在Go语言中使用结构体嵌套和方法重写。结构体嵌套使得我们可以创建更复杂的数据模型，而方法重写则允许我们为不同的结构体定义特定的行为。这些特性使得Go语言在处理复杂数据结构时非常灵活和强大。

