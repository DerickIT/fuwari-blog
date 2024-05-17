---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-03'
catalog: []
slug: go-data-type-conversion-and-string-handling-tutorial
title: Go语言教程：深入理解数据类型转换与字符串处理
urlname: a5bb0e9e-7ca7-4aa1-8a79-7252ad3a201a
date: '2024-05-16 00:03:00'
updated: '2024-05-18 00:11:00'
image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-03T08:00:00.000Z
---

在这篇教程中，我们将通过一个示例代码来详细解释Go语言中的数据类型转换和字符串处理。我们将重点关注以下几个方面：

1. 数据类型转换及其二进制表示
2. 特殊字符的处理
3. 字符串与字节、rune的相互转换

### 示例代码

```go
package main

import (
	"fmt"
)

func main() {
	// 重点1的示例。
	var srcInt = int16(-255)
	// 请注意，之所以要执行uint16(srcInt)，是因为只有这样才能得到全二进制的表示。
	// 例如，fmt.Printf("%b", srcInt)将打印出"-11111111"，后者是负数符号再加上srcInt的绝对值的补码。
	// 而fmt.Printf("%b", uint16(srcInt))才会打印出srcInt原值的补码"1111111100000001"。
	fmt.Printf("The complement of srcInt: %b (%b)\n",
		uint16(srcInt), srcInt)
	dstInt := int8(srcInt)
	fmt.Printf("The complement of dstInt: %b (%b)\n",
		uint8(dstInt), dstInt)
	fmt.Printf("The value of dstInt: %d\n", dstInt)
	fmt.Println()

	// 重点2的示例。
	fmt.Printf("The Replacement Character: %s\n", string(-1))
	fmt.Printf("The Unicode codepoint of Replacement Character: %U\n", '�')
	fmt.Println()

	// 重点3的示例。
	srcStr := "你好"
	fmt.Printf("The string: %q\n", srcStr)
	fmt.Printf("The hex of %q: %x\n", srcStr, srcStr)
	fmt.Printf("The byte slice of %q: % x\n", srcStr, []byte(srcStr))
	fmt.Printf("The string: %q\n", string([]byte{'\xe4', '\xbd', '\xa0', '\xe5', '\xa5', '\xbd'}))
	fmt.Printf("The rune slice of %q: %U\n", srcStr, []rune(srcStr))
	fmt.Printf("The string: %q\n", string([]rune{'\u4F60', '\u597D'}))
}
```

### 重点1：数据类型转换及其二进制表示

在Go语言中，数据类型转换是一个常见的操作。以下是一个将`int16`类型转换为`uint16`类型的示例：

```go
var srcInt = int16(-255)
fmt.Printf("The complement of srcInt: %b (%b)\n", uint16(srcInt), srcInt)
```

- `srcInt`被定义为`int16`类型，值为-255。
- `fmt.Printf("%b", srcInt)`将打印出`-11111111`，这是负数符号加上`srcInt`的绝对值的补码。
- `fmt.Printf("%b", uint16(srcInt))`将打印出`srcInt`的原值补码`1111111100000001`。

接下来，我们将`srcInt`转换为`int8`类型：

```go
dstInt := int8(srcInt)
fmt.Printf("The complement of dstInt: %b (%b)\n", uint8(dstInt), dstInt)
fmt.Printf("The value of dstInt: %d\n", dstInt)
```

- `dstInt`被定义为`int8`类型，值为`srcInt`转换后的结果。
- `fmt.Printf("%b", uint8(dstInt))`将打印出`dstInt`的补码。
- `fmt.Printf("The value of dstInt: %d\n", dstInt)`将打印出`dstInt`的十进制值。

### 重点2：特殊字符的处理

在Go语言中，处理特殊字符时需要注意其Unicode码点。例如：

```go
fmt.Printf("The Replacement Character: %s\n", string(-1))
fmt.Printf("The Unicode codepoint of Replacement Character: %U\n", '�')
```

- `string(-1)`将输出替换字符`�`。
- `fmt.Printf("%U", '�')`将输出替换字符的Unicode码点`U+FFFD`。

### 重点3：字符串与字节、rune的相互转换

在Go语言中，字符串可以方便地转换为字节切片和rune切片。以下是一个示例：

```go
srcStr := "你好"
fmt.Printf("The string: %q\n", srcStr)
fmt.Printf("The hex of %q: %x\n", srcStr, srcStr)
fmt.Printf("The byte slice of %q: % x\n", srcStr, []byte(srcStr))
fmt.Printf("The string: %q\n", string([]byte{'\xe4', '\xbd', '\xa0', '\xe5', '\xa5', '\xbd'}))
fmt.Printf("The rune slice of %q: %U\n", srcStr, []rune(srcStr))
fmt.Printf("The string: %q\n", string([]rune{'\u4F60', '\u597D'}))
```

- `srcStr`被定义为字符串`"你好"`。
- `fmt.Printf("%x", srcStr)`将输出字符串的十六进制表示。
- `fmt.Printf("% x", []byte(srcStr))`将输出字符串的字节切片。
- `string([]byte{'\xe4', '\xbd', '\xa0', '\xe5', '\xa5', '\xbd'})`将字节切片转换回字符串。
- `fmt.Printf("%U", []rune(srcStr))`将输出字符串的rune切片。
- `string([]rune{'\u4F60', '\u597D'})`将rune切片转换回字符串。

通过以上示例，我们可以更好地理解Go语言中的数据类型转换和字符串处理。希望这篇教程对你有所帮助！

