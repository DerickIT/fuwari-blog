---
category: Golang
tags:
  - Golang
  - Notes
status: 已发布
catalog: []
slug: go-language-tutorial-understanding-testcode-step-by-step
title: Go语言教程：为函数编写测试代码
urlname: bce436e0-cd91-4cc8-a454-d3e4d78173c3
date: '2024-06-01 00:29:00'
updated: '2024-06-03 22:55:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-20T08:00:00.000Z
---

在本教程中，我们将通过一个简单的Go语言程序来学习Go语言的基本概念和一些高级特性。我们将逐步解析代码，解释其原理，并举一反三地探讨相关知识点。


## 代码概览


我们将从以下代码开始：


```go
package main

import (
	"errors"
	"flag"
	"fmt"
)

var name string

func init() {
	flag.StringVar(&name, "name", "everyone", "The greeting object.")
}

func main() {
	flag.Parse()
	greeting, err := hello(name)
	if err != nil {
		fmt.Printf("error: %s\\n", err)
		return
	}
	fmt.Println(greeting, introduce())
}

// hello 用于生成问候内容。
func hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}
	return fmt.Sprintf("Hello, %s!", name), nil
}

// introduce 用于生成介绍内容。
func introduce() string {
	return "Welcome to my Golang column."
}

```


## 代码解析


### 包和导入


```go
package main

import (
	"errors"
	"flag"
	"fmt"
)

```

- `package main`：声明程序的包名为`main`，表示这是一个可执行程序。
- `import`：导入标准库中的`errors`、`flag`和`fmt`包，分别用于错误处理、命令行参数解析和格式化输出。

### 全局变量


```go
var name string

```

- 声明一个全局变量`name`，用于存储命令行参数的值。

### 初始化函数


```go
func init() {
	flag.StringVar(&name, "name", "everyone", "The greeting object.")
}

```

- `init`函数在`main`函数之前自动执行，用于初始化全局变量。
- `flag.StringVar`：将命令行参数`name`的值绑定到`name`变量，默认值为`"everyone"`。

### 主函数


```go
func main() {
	flag.Parse()
	greeting, err := hello(name)
	if err != nil {
		fmt.Printf("error: %s\\n", err)
		return
	}
	fmt.Println(greeting, introduce())
}

```

- `flag.Parse`：解析命令行参数。
- 调用`hello`函数生成问候语，并处理可能的错误。
- 如果没有错误，打印问候语和介绍内容。

### `hello`函数


```go
func hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}
	return fmt.Sprintf("Hello, %s!", name), nil
}

```

- 接受一个字符串参数`name`，返回问候语和可能的错误。
- 如果`name`为空，返回错误`"empty name"`。
- 否则，返回格式化的问候语。

### `introduce`函数


```go
func introduce() string {
	return "Welcome to my Golang column."
}

```

- 返回固定的介绍内容。

## 测试代码


为了确保我们的代码正确无误，我们编写了以下测试代码：


```go
package main

import (
	"fmt"
	"testing"
)

func TestHello(t *testing.T) {
	var name string
	greeting, err := hello(name)
	if err == nil {
		t.Errorf("The error is nil, but it should not be. (name=%q)", name)
	}
	if greeting != "" {
		t.Errorf("Nonempty greeting, but it should not be. (name=%q)", name)
	}
	name = "Robert"
	greeting, err = hello(name)
	if err != nil {
		t.Errorf("The error is not nil, but it should be. (name=%q)", name)
	}
	if greeting == "" {
		t.Errorf("Empty greeting, but it should not be. (name=%q)", name)
	}
	expected := fmt.Sprintf("Hello, %s!", name)
	if greeting != expected {
		t.Errorf("The actual greeting %q is not the expected. (name=%q)", greeting, name)
	}
	t.Logf("The expected greeting is %q.\\n", expected)
}

func testIntroduce(t *testing.T) { // 请注意这个测试函数的名称。
	intro := introduce()
	expected := "Welcome to my Golang column."
	if intro != expected {
		t.Errorf("The actual introduce %q is not the expected.", intro)
	}
	t.Logf("The expected introduce is %q.\\n", expected)
}

```


### 测试解析

- `TestHello`：测试`hello`函数的各种情况，包括空字符串和正常字符串。
- `testIntroduce`：测试`introduce`函数的返回值。

## 总结


通过这个简单的Go语言程序，我们学习了以下内容：

1. **包和导入**：如何声明包和导入标准库。
2. **全局变量**：如何声明和使用全局变量。
3. **初始化函数**：`init`函数的作用和使用。
4. **主函数**：`main`函数的结构和基本逻辑。
5. **函数**：如何定义和调用函数，处理错误。
6. **测试**：如何编写和运行测试代码。
