---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-18'
catalog: []
slug: go-error-handling-tutorial
title: Go语言教程：错误处理
urlname: e25432c8-5b60-4ea8-be5d-2023a022c2b6
date: '2024-05-26 23:29:00'
updated: '2024-06-01 00:30:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-18T08:00:00.000Z
---

在Go语言中，错误处理是一个非常重要的部分。通过合理的错误处理，可以提高程序的健壮性和可维护性。本文将通过几个示例代码，详细讲解Go语言中的错误处理机制，并举一反三，帮助你更好地理解和应用。


### 示例1：基本错误处理


首先，我们来看一个简单的错误处理示例。


```go
package main

import (
	"errors"
	"fmt"
)

func echo(request string) (response string, err error) {
	if request == "" {
		err = errors.New("empty request")
		return
	}
	response = fmt.Sprintf("echo: %s", request)
	return
}

func main() {
	for _, req := range []string{"", "hello!"} {
		fmt.Printf("request: %s\\n", req)
		resp, err := echo(req)
		if err != nil {
			fmt.Printf("error: %s\\n", err)
			continue
		}
		fmt.Printf("response: %s\\n", resp)
	}
}

```


### 解释

1. **定义错误**：使用`errors.New`函数创建一个新的错误。
2. **返回错误**：在函数`echo`中，如果请求为空，则返回一个错误。
3. **处理错误**：在`main`函数中，调用`echo`函数并检查返回的错误。如果有错误，则打印错误信息并继续处理下一个请求。

### 举一反三


你可以将这种错误处理模式应用到其他函数中。例如，检查文件是否存在：


```go
func checkFileExists(filename string) error {
	if _, err := os.Stat(filename); os.IsNotExist(err) {
		return errors.New("file does not exist")
	}
	return nil
}

```


### 示例2：深入错误类型


在Go语言中，错误不仅仅是简单的字符串。你可以定义自己的错误类型，并通过类型断言来处理不同类型的错误。


```go
package main

import (
	"fmt"
	"os"
	"os/exec"
)

// underlyingError 返回已知的操作系统相关错误的潜在错误值。
func underlyingError(err error) error {
	switch err := err.(type) {
	case *os.PathError:
		return err.Err
	case *os.LinkError:
		return err.Err
	case *os.SyscallError:
		return err.Err
	case *exec.Error:
		return err.Err
	}
	return err
}

func main() {
	r, w, err := os.Pipe()
	if err != nil {
		fmt.Printf("unexpected error: %s\\n", err)
		return
	}
	r.Close()
	_, err = w.Write([]byte("hi"))
	uError := underlyingError(err)
	fmt.Printf("underlying error: %s (type: %T)\\n", uError, uError)
}

```


### 解释

1. **类型断言**：通过类型断言，检查错误的具体类型，并返回潜在的错误值。
2. **处理特定错误**：在`main`函数中，制造一个`os.PathError`类型的错误，并通过`underlyingError`函数获取潜在的错误值。

### 举一反三


你可以定义自己的错误类型，并通过类型断言来处理。例如：


```go
type MyError struct {
	Code int
	Msg  string
}

func (e *MyError) Error() string {
	return fmt.Sprintf("code: %d, msg: %s", e.Code, e.Msg)
}

func checkValue(val int) error {
	if val < 0 {
		return &MyError{Code: 400, Msg: "negative value"}
	}
	return nil
}

```


### 示例3：自定义错误类型


在Go语言中，你可以定义自己的错误类型，以便更好地描述和处理错误。


```go
package main

import (
	"fmt"
	"os"
	"os/exec"
	"strconv"
)

type Errno int

func (e Errno) Error() string {
	return "errno " + strconv.Itoa(int(e))
}

func main() {
	const (
		ERR0 = Errno(0)
		ERR1 = Errno(1)
		ERR2 = Errno(2)
	)
	var myErr error = Errno(0)
	switch myErr {
	case ERR0:
		fmt.Println("ERR0")
	case ERR1:
		fmt.Println("ERR1")
	case ERR2:
		fmt.Println("ERR2")
	}
}

```


### 解释

1. **定义错误类型**：定义一个`Errno`类型，并实现`Error`方法。
2. **使用错误类型**：在`main`函数中，通过类型断言和switch语句处理不同的错误类型。

### 举一反三


你可以定义更多的错误类型，并在程序中使用。例如：


```go
type ValidationError struct {
	Field string
	Msg   string
}

func (e *ValidationError) Error() string {
	return fmt.Sprintf("validation error: field=%s, msg=%s", e.Field, e.Msg)
}

func validateInput(input string) error {
	if input == "" {
		return &ValidationError{Field: "input", Msg: "cannot be empty"}
	}
	return nil
}

```


### 总结


通过以上示例，我们学习了Go语言中基本的错误处理、深入的错误类型处理以及自定义错误类型。希望这些内容能帮助你更好地理解和应用Go语言的错误处理机制。

