---
category: Golang
tags:
  - Golang
  - 笔记
status: 已发布
day: '2022-05-17'
catalog: []
slug: go-language-uses-switch
title: Go语言教程：switch的用法
urlname: 5a945275-1172-4687-84b9-d252e5ec1779
date: '2024-05-26 23:29:00'
updated: '2024-05-31 00:26:00'
image: 'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2022-05-17T08:00:00.000Z
---

这是一篇关于Go语言中switch语句的教程。通过对示例代码的分析,我们可以深入理解switch语句的用法和注意事项。


## switch语句基本语法


switch语句的基本语法如下:


```go
switch 表达式 {
case 表达式1:
    // 代码块1
case 表达式2:
    // 代码块2
default:
    // 默认代码块
}

```


switch语句会根据表达式的值,与case后的表达式进行匹配。如果匹配成功,就执行对应的代码块;如果都不匹配,就执行default代码块。


## case表达式的限制


在示例1中,我们看到下面的代码无法编译通过:


```go
value3 := [...]int8{0, 1, 2, 3, 4, 5, 6}
switch value3[4] {
case 0, 1, 2:
    fmt.Println("0 or 1 or 2")
case 2, 3, 4:
    fmt.Println("2 or 3 or 4")
case 4, 5, 6:
    fmt.Println("4 or 5 or 6")
}

```


这是因为case后的表达式中,不能有重复的值。在上面的代码中,2和4都出现了两次,所以编译器会报错。


## case表达式的类型


在示例2中,我们看到case后的表达式可以是一个值,也可以是一个变量:


```go
value5 := [...]int8{0, 1, 2, 3, 4, 5, 6}
switch value5[4] {
case value5[0], value5[1], value5[2]:
    fmt.Println("0 or 1 or 2")
case value5[2], value5[3], value5[4]:
    fmt.Println("2 or 3 or 4")
case value5[4], value5[5], value5[6]:
    fmt.Println("4 or 5 or 6")
}

```


case后的表达式类型必须与switch表达式的类型一致。在这个例子中,value5是int8类型,所以case后的表达式也必须是int8类型。


## Type Switch


除了对值进行判断,switch还可以对变量的类型进行判断,这就是Type Switch。示例3展示了一个Type Switch的例子:


```go
value6 := interface{}(byte(127))
switch t := value6.(type) {
case uint8, uint16:
    fmt.Println("uint8 or uint16")
case byte:
    fmt.Printf("byte")
default:
    fmt.Printf("unsupported type: %T", t)
}

```


这个例子中,value6是一个空接口类型的变量,它的实际类型是byte。通过t := value6.(type)语句,可以获取到value6的实际类型,并赋值给变量t。


然后,switch会根据t的类型,与case后声明的类型进行匹配。需要注意的是,case后只能是类型,不能是表达式。


## switch表达式的限制


最后,我们再来看一个无法编译通过的例子:


```go
value1 := [...]int8{0, 1, 2, 3, 4, 5, 6}
switch 1 + 3 {
case value1[0], value1[1]:
    fmt.Println("0 or 1")
case value1[2], value1[3]:
    fmt.Println("2 or 3")
case value1[4], value1[5], value1[6]:
    fmt.Println("4 or 5 or 6")
}

```


switch后的表达式必须是一个单一的值,不能是表达式。1 + 3是一个表达式,所以编译器会报错。


## 总结


通过以上示例,我们可以总结出switch语句的几个关键点:

1. case后的表达式不能有重复值。
2. case后的表达式类型必须与switch表达式的类型一致。
3. 可以使用Type Switch对变量的类型进行判断。
4. switch后的表达式必须是一个单一的值,不能是表达式。

希望通过这篇教程,你能够更好地理解和运用Go语言的switch语句。在实际开发中,灵活运用switch语句可以让代码更加简洁和易读。

