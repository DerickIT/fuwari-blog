---
category: TechKnowledgeShare
tags:
  - Rust
  - Golang
status: 已发布
catalog: []
slug: go-developers-guide-to-rust-ownership-borrowing-and-lifetimes
title: 'Go开发者的Rust学习指南:所有权、借用和生命周期'
urlname: 105aa09a-108e-80ac-ab2b-c1acf3614667
date: '2024-09-18 18:02:00'
updated: '2024-09-18 18:06:00'
image: 'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2023-11-18T08:00:00.000Z
---

作为一名Go开发者,你可能对Rust的独特特性感到好奇。Rust以其内存安全和并发安全而闻名,但这些特性也带来了一些新的概念需要学习。本文将介绍Rust中最重要的几个概念:所有权、借用和生命周期,并通过与Go的对比来帮助理解。


## 所有权(Ownership)


所有权是Rust最独特的特性之一。在Go中,我们使用垃圾回收来管理内存,而Rust通过所有权系统在编译时就确保了内存安全,无需运行时垃圾回收。


Rust的所有权规则如下:

1. 每个值都有一个所有者变量
2. 同一时间只能有一个所有者
3. 当所有者离开作用域,值会被自动释放

来看一个例子:


```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;

    println!("{}", s1); // 编译错误!
}

```


在这个例子中,`s1`的所有权被转移给了`s2`,所以`s1`不再有效。这与Go的行为不同,在Go中这段代码是完全合法的。


## 借用(Borrowing)


为了让多个部分的代码可以访问数据而不转移所有权,Rust引入了借用的概念。借用通过引用(`&`)来实现。


```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```


这里`calculate_length`函数借用了`s1`的引用,而不是获取所有权。这允许`main`函数在调用后仍然可以使用`s1`。


Rust还有可变借用(`&mut`)的概念,允许修改借用的值:


```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}

```


## 生命周期(Lifetimes)


生命周期是Rust中另一个重要概念,它帮助编译器确保所有的借用都是有效的。大多数情况下,生命周期是隐式的,但有时需要显式标注:


```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```


这里的`'a`是一个生命周期参数,它表示返回的引用的生命周期与参数`x`和`y`的生命周期一样长。


## 与Go的对比

1. 内存管理:Go使用垃圾回收,Rust使用所有权系统。
2. 并发安全:Go通过通道和`sync`包实现,Rust通过所有权和类型系统在编译时保证。
3. 错误处理:Go使用多返回值,Rust使用`Result`类型。
4. 泛型:Rust的泛型更加强大和灵活。

## 结论


对于Go开发者来说,Rust的所有权、借用和生命周期概念可能初看起来很复杂。但这些概念使得Rust能够在编译时保证内存和线程安全,同时又保持高性能。

