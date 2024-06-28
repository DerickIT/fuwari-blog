---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
catalog: []
slug: go-tutorial-sieve-of-eratosthenes-prime-numbers
title: Go语言教程：使用爱拉托逊斯筛选法获取质数
urlname: f1d2397c-a346-48ae-ad91-f5407f739d57
date: '2024-06-01 00:29:00'
updated: '2024-06-06 22:13:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-22T08:00:00.000Z
---

在本教程中，我们将深入探讨如何使用Go语言编写一个程序来获取小于或等于给定数值的所有质数。我们将使用爱拉托逊斯筛选法（Sieve of Eratosthenes）来实现这一目标，并通过单元测试和基准测试来验证和评估我们的实现。


### 1. 什么是质数？


质数是大于1的自然数，且只能被1和它本身整除。例如，2、3、5、7等都是质数。


### 2. 爱拉托逊斯筛选法简介


爱拉托逊斯筛选法是一种高效的算法，用于找出一定范围内的所有质数。其基本思想是：

1. 创建一个从2到最大数的列表。
2. 从列表中选择第一个未标记的数（初始为2），将其所有倍数标记为非质数。
3. 重复步骤2，直到处理到最大数的平方根为止。
4. 剩下未标记的数即为质数。

### 3. 实现代码


我们将分为两个部分：质数生成函数和测试代码。


### 3.1 质数生成函数


```go
package q1

import (
	"math"
)

// GetPrimes 用于获取小于或等于参数max的所有质数。
// 本函数使用的是爱拉托逊斯筛选法（Sieve Of Eratosthenes）。
func GetPrimes(max int) []int {
	if max <= 1 {
		return []int{}
	}
	marks := make([]bool, max)
	var count int
	squareRoot := int(math.Sqrt(float64(max)))
	for i := 2; i <= squareRoot; i++ {
		if marks[i] == false {
			for j := i * i; j < max; j += i {
				if marks[j] == false {
					marks[j] = true
					count++
				}
			}
		}
	}
	primes := make([]int, 0, max-count)
	for i := 2; i < max; i++ {
		if marks[i] == false {
			primes = append(primes, i)
		}
	}
	return primes
}

```


### 3.2 测试代码


```go
package q1

import (
	"testing"
)

var expectedPrimes = []int{
	2, 3, 5, 7, 11, 13, 17, 19,
	23, 29, 31, 37, 41, 43, 47, 53,
	59, 61, 67, 71, 73, 79, 83, 89,
	97, 101, 103, 107, 109, 113, 127, 131,
	137, 139, 149, 151, 157, 163, 167, 173,
	179, 181, 191, 193, 197, 199, 211, 223,
	227, 229, 233, 239, 241, 251, 257, 263,
	269, 271, 277, 281, 283, 293, 307, 311,
	313, 317, 331, 337, 347, 349, 353, 359,
	367, 373, 379, 383, 389, 397, 401, 409,
	419, 421, 431, 433, 439, 443, 449, 457,
	461, 463, 467, 479, 487, 491, 499, 503,
	509, 521, 523, 541, 547, 557, 563, 569,
	571, 577, 587, 593, 599, 601, 607, 613,
	617, 619, 631, 641, 643, 647, 653, 659,
	661, 673, 677, 683, 691, 701, 709, 719,
	727, 733, 739, 743, 751, 757, 761, 769,
	773, 787, 797, 809, 811, 821, 823, 827,
	829, 839, 853, 857, 859, 863, 877, 881,
	883, 887, 907, 911, 919, 929, 937, 941,
	947, 953, 967, 971, 977, 983, 991, 997,
}

func TestGetPrimesWith1000(t *testing.T) {
	max := 1000
	primes := GetPrimes(max)
	for i, prime := range primes {
		expectedPrime := expectedPrimes[i]
		if prime != expectedPrime {
			t.Errorf("%dth prime number %d is not the expected value %d",
				i, prime, expectedPrime)
		}
	}
	if t.Failed() == false {
		t.Logf("The primes less than %d are all correct.", max)
	}
}

func BenchmarkGetPrimesWith100(b *testing.B) {
	for i := 0; i < b.N; i++ {
		GetPrimes(100)
	}
}

func BenchmarkGetPrimesWith10000(b *testing.B) {
	for i := 0; i < b.N; i++ {
		GetPrimes(10000)
	}
}

func BenchmarkGetPrimesWith1000000(b *testing.B) {
	for i := 0; i < b.N; i++ {
		GetPrimes(1000000)
	}
}

```


### 4. 代码解析


### 4.1 `GetPrimes`函数

- **输入参数**：`max`，表示要找出小于或等于该值的所有质数。
- **返回值**：一个包含所有质数的切片。

**步骤解析**：

1. **边界检查**：如果`max`小于等于1，直接返回空切片。
2. **初始化标记数组**：创建一个布尔数组`marks`，长度为`max`，用于标记非质数。
3. **筛选质数**：
	- 计算`max`的平方根`squareRoot`。
	- 从2开始遍历到`squareRoot`，如果当前数未被标记为非质数，则将其所有倍数标记为非质数。
4. **收集质数**：遍历`marks`数组，将未被标记的数收集到`primes`切片中。

### 4.2 测试函数

- **`TestGetPrimesWith1000`**：测试`GetPrimes`函数是否能正确找出小于1000的所有质数。
- **基准测试**：通过`Benchmark`函数测试`GetPrimes`函数在不同输入规模下的性能。

### 5. 运行测试


在终端中运行以下命令来执行测试和基准测试：


```text
go test -v
go test -bench=.

```


### 6. 总结


通过本教程，我们学习了如何使用Go语言实现爱拉托逊斯筛选法来找出质数，并通过单元测试和基准测试验证和评估我们的实现。希望通过这个例子，您能更好地理解Go语言的基本语法和测试方法。

