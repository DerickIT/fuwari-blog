---
category: TechKnowledgeShare
tags:
  - Mongodb
status: 已发布
catalog: []
slug: mongodb-learning-notes
title: Mongodb学习笔记
summary: MongoDB编程指南这本书的学习笔记
urlname: 8c9e7b9d-56d1-4501-af6f-824ac3ff7ba4
date: '2023-11-08 18:25:00'
updated: '2024-07-29 00:16:00'
image: 'https://www.notion.so/images/page-cover/webb4.jpg'
published: 2022-11-18T08:00:00.000Z
---

### 介绍

- MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。
- 在高负载的情况下，添加更多的节点，可以保证服务器性能。
- MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。
- MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

### 主要特点

- MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。
- 你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。
- 你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。
- 如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。
- Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。
- MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。
- Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。
- Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。
- Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。
- GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。
- MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。
- MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
- MongoDB安装简单。支持虚拟化，云原生环境

### MongoDB概念解析


在mongodb中基本的概念是文档、集合、数据库，


| SQL术语/概念    | MongoDB术语/概念 | 解释/说明                   |
| ----------- | ------------ | ----------------------- |
| database    | database     | 数据库                     |
| table       | collection   | 数据库表/集合                 |
| row         | document     | 数据记录行/文档                |
| column      | field        | 数据字段/域                  |
| index       | index        | 索引                      |
| table joins |              | 表连接,MongoDB不支持          |
| primary key | primary key  | 主键,MongoDB自动将_id字段设置为主键 |


#### mongodb默认有以下数据库


有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- admin： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- local:这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- config: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。

需要注意的是：

1. 文档中的键/值对是有序的。
2. 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。
3. MongoDB区分类型和大小写。
4. MongoDB的文档不能有重复的键。
5. 文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符。

#### 文档键命名规范：

- 键不能含有\0 (空字符)。这个字符用来表示键的结尾。
- .和$有特别的意义，只有在特定环境下才能使用。
- 以下划线"_"开头的键是保留的(不是严格要求的)。

#### 文档(Document)

- 文档是一组键值(key-value)对(即 BSON)。

#### 集合(Collection)

- 集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。
- 集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。
- 第一个文档插入时，集合就会被创建。

#### 合法的集合名

- 集合名不能是空字符串""。
- 集合名不能含有\0字符（空字符)，这个字符表示集合名的结尾。
- 集合名不能以"system."开头，这是为系统集合保留的前缀。
- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。

#### MongoDB 数据类型


下表为MongoDB中常用的几种数据类型。


| 数据类型               | 描述                                                          |
| ------------------ | ----------------------------------------------------------- |
| String             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。              |
| Integer            | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。                      |
| Boolean            | 布尔值。用于存储布尔值（真/假）。                                           |
| Double             | 双精度浮点值。用于存储浮点值。                                             |
| Min/Max keys       | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。                         |
| Array              | 用于将数组或列表或多个值存储为一个键。                                         |
| Timestamp          | 时间戳。记录文档修改或添加的具体时间。                                         |
| Object             | 用于内嵌文档。                                                     |
| Null               | 用于创建空值。                                                     |
| Symbol             | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。                 |
| Date               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID          | 对象 ID。用于创建文档的 ID。                                           |
| Binary Data        | 二进制数据。用于存储二进制数据。                                            |
| Code               | 代码类型。用于在文档中存储 JavaScript 代码。                                |
| Regular expression | 正则表达式类型。用于存储正则表达式。                                          |


#### ObjectId


ObjectId 类似唯一主键，可以很快的去生成和排序，包含 12 bytes，含义是：

- 前 4 个字节表示创建unix时间戳,格林尼治时间UTC时间，比北京时间晚了 8 个小时
- 接下来的 3 个字节是机器标识码
- 紧接的两个字节由进程 id 组成 PID
- 最后三个字节是随机数

![1620731779142-4439a94d-d3e5-44b3-b32f-4a01685db860.jpeg](https://cdn.nlark.com/yuque/0/2021/jpeg/8388311/1620731779142-4439a94d-d3e5-44b3-b32f-4a01685db860.jpeg?x-oss-process=image%2Fresize%2Cw_670%2Climit_0%2Finterlace%2C1)

- MongoDB 中存储的文档必须有一个 _id 键。这个键的值可以是任何类型的，默认是个 ObjectId 对象
- 由于 ObjectId 中保存了创建的时间戳，所以你不需要为你的文档保存时间戳字段，你可以通过 getTimestamp 函数来获取文档的创建时间:

```sql
> var newObject = ObjectId()

> newObject.getTimestamp()
```


ISODate("2017-11-25T07:21:10Z")


ObjectId 转为字符串


```sql
> newObject.str

5a1919e63df83ce79df8b38f
```


时间戳


BSON 有一个特殊的时间戳类型用于 MongoDB 内部使用，与普通的 日期 类型不相关。 时间戳值是一个 64 位的值。其中：


●前32位是一个 time_t 值（与Unix新纪元相差的秒数）


●后32位是在某秒中操作的一个递增的序数


在单个 mongod 实例中，时间戳值通常是唯一的。


在复制集中， oplog 有一个 ts 字段。这个字段中的值使用BSON时间戳表示了操作时间。


BSON 时间戳类型主要用于 MongoDB 内部使用。在大多数情况下的应用开发中，你可以使用 BSON 日期类型。


字符串


BSON 字符串都是 UTF-8 编码。


日期


表示当前距离 Unix新纪元（1970年1月1日）的毫秒数。日期类型是有符号的, 负数表示 1970 年之前的日期。


```sql
//显示所有数据库
show dbs;
```

