---
category: TechKnowledgeShare
tags:
  - CSharp
  - DotNet
  - BackEnd
  - CloudNative
status: 已发布
catalog: []
slug: introduction-to-net-aspire-simplify-cloud-native-development-with-net-8
title: .NET Aspire简介：使用.NET 8简化云原生开发
summary: 'Introducing .NET Aspire: Simplifying Cloud-Native Development with .NET 8 - .NET Blog (microsoft.com)'
urlname: 5ffc164b-374a-4a36-a81b-a51f967a5fdd
date: '2023-11-17 21:26:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1875.jpg'
published: 2023-11-15T08:00:00.000Z
---

为了帮助简化云应用程序的复杂性，微软推出了.NET Aspire


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/04572440-4e76-4760-ba68-3d0d74b19c08/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241111T213311Z&X-Amz-Expires=3600&X-Amz-Signature=f84b652f75a81bb4e265283f6e0615712aedbeace403ca467524198428b0ed3f&X-Amz-SignedHeaders=host&x-id=GetObject)


.NET Aspire 是一个用于构建弹性、可观察和可配置的云原生应用程序的成熟套件。它包括一组经过精心挑选的组件，通过默认包含服务发现、遥测、弹性和健康检查来增强云原生能力。结合了复杂场景但提升简单的本地开发人员体验，.NET Aspire 使您能够轻松发现、获取和配置云原生应用程序的基本依赖项。


### **.NET Aspire之旅**


首先，让我们先浏览一下新的 `.NET Aspire Starter` 模板，并在文章后面深入讨论之前触及所有功能。本节是一个会话概述，您可以沿着阅读。您需要最新的.NET 8和Visual Studio 2022预览版（17.9预览版1）。如果您使用的是Linux或Mac，您仍然可以沿着学习所有内容，但所给出的一些工具示例还不可用。


#### **Visual Studio解决方案教程**


初学者应用程序旨在让您启动并运行一个可以试用的.NET Aspire解决方案。该应用程序由两个项目和一个Redis缓存组成。前端项目是一个Blazor Web应用程序，它调用后端API获取天气信息。


![dotnetAspire-Solution-Explorer2.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnetAspire-Solution-Explorer2.png)


你会注意到两个你以前没有见过的新项目 `<appname>.AppHost` 和 `<appname>.ServiceDefaults` 。


`AppHost` 项目将运行获取分布式应用程序所需的任何.NET项目、容器或可执行文件。在Visual Studio中，调试将附加到所有正在运行的项目，允许您单步执行应用程序中的每个服务。我们将在后面的文章中深入研究这个项目以及其中的代码是什么样的。


`ServiceDefaults` 项目包含应用于应用程序中每个项目的公共服务中心逻辑。这是配置服务发现、遥测和健康检查端点等横切关注点的地方。我们希望这在所有项目中保持一致，但也理解团队和组织可能希望调整一些设置。项目中的共享代码是我们能找到的实现这些目标的最容易理解和开发人员友好的机制。


#### **仪表板-您的应用监控和检查中心**


在Visual Studio或dotnet中通过命令行运行 F5 启动.NET Aspire启动器应用程序，将您带到开发人员仪表板。这个仪表板是调试分布式应用程序的重要工具，它提供了服务的统一视图以及日志、指标和跟踪。


这个仪表板不仅仅是一个进入云原生应用程序的窗口;它是一个交互式平台，可以为您的项目提供有价值的见解，并突出显示任何错误，从而进行更深入的调查。下面是一个图像，显示了一个已识别错误的项目，用红点表示：


![dotnet-Aspire-dashboard-projects-errors.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnet-Aspire-dashboard-projects-errors.png)


我们还可以看到所有项目的日志，甚至还有一个分布式跟踪，显示了对天气页面的请求。跟踪是诊断分布式系统中问题的不可或缺的工具。


![dotnet-Aspire-trace-view-filter.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnet-Aspire-trace-view-filter.png)


开发人员仪表板是您收集所有开发时间诊断数据以及对开发机器上的速度减慢和错误进行故障排除的地方。它使用的开放标准与您在配置生产遥测系统（如Grafana+Prometheus、Application Insights等）时在生产中使用的开放标准完全相同。


几年前，我们进行了一个名为`Project Tye`的实验，从那个实验中学到的许多东西现在都可以在.NET Aspire中使用，包括我们在那个实验中首次尝试的这个仪表板。如果你喜欢`Project Tye`并希望它继续下去，那么我们认为你会喜欢.NET Aspire。


#### **Components 组件**


现在让我们开始看看这些项目有什么不同。首先，Web项目有一个NuGet包，其名称为 `Aspire.StackExchange.Redis.OutputCaching` ，其中包含 `Aspire` 。


![dotnetAspire-Components-Dependencies-Packages.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnetAspire-Components-Dependencies-Packages.png)


如果你沿着看，没有看到这个包，你可能在创建项目的时候没有选中“**使用Redis缓存**”。


这个NuGet包就是我们所说的 `.NET Aspire Component` 。组件是将SDK配置为在云环境中运行的粘合库。每个组件必须：

- 提供JSON Schema以进行配置，从而在 `appsettings.json` 中提供语句完成。
- 利用可配置的恢复模式（如重试、超时和断路器）最大限度地提高可用性。
- 公开运行状况检查，使应用程序能够跟踪和响应远程服务的运行状况。
- 使用现代的.NET抽象（ `ILogger` ， `Meter` ， `Activity` ）提供集成的日志记录、指标和跟踪。
- 提供扩展方法，将服务从SDK“粘合”到DI容器，并为注册的类型提供正确的生存期。

我们将在后面的文章中详细介绍组件。关键的要点是.NET Aspire Components配置依赖项以荣誉一组我们认为可以帮助消费者在云中取得成功的需求。它们不会包装/隐藏实际的SDK/库，而是充当粘合剂，以确保库配置了一组默认值，并正确地注册到DI。


#### **代码**


现在让我们看看Blazor应用程序中调用天气API的代码，然后看看我们前面讨论过的AppHost中的一些代码。首先，在我们的web项目的Program.cs中，你可以看到这样的代码：


```c#
builder.Services.AddHttpClient<WeatherApiClient>(
    client => client.BaseAddress = new("http://apiservice"));
```


这是配置我们的Web前端，以便能够调用天气API。但有几件事是不寻常的，即这个 `apiservice` 名字来自哪里？为了回答这个问题，我们将第一次查看 `AppHost` 项目，这里是该项目的`Program.cs`文件。


```c#
var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedisContainer("cache");

var apiservice = builder.AddProject<Projects.AspireApp_ApiService>("apiservice");

builder.AddProject<Projects.AspireApp_Web>("webfrontend")
    .WithReference(cache)
    .WithReference(apiservice);

builder.Build().Run();
```


执行此代码是因为 `AppHost` 是您的启动项目。它运行您的项目及其依赖项，并适当地配置它们，使它们能够进行通信。我们的目标之一是尽可能地从开发人员流程中删除端口和连接字符串。我们通过服务发现机制来实现这一点，该机制允许开发人员在进行HTTP调用时使用逻辑名称而不是IP地址和端口。您可以在这里看到，我将我的API命名为 `apiservice` ，然后将其作为引用传递给前端，然后可以在通过 `IHttpClientFactory` 进行HTTP调用时使用 `apiservice` 作为名称。由于与`Polly`项目的集成，使用此方法进行的调用还将自动重试并处理瞬时故障。


`AppHost`设置您的应用程序依赖项和要求，而.NET Aspire工具在您的开发迭代中满足这些要求。


### 深入介绍


#### 组件


我们将从组件开始深入研究。.NET Aspire组件旨在解决我们从客户开始云原生开发时听到的痛苦，有很多技术/配置必须正确，并且不清楚从哪条路开始。我们通过对组件需要提供的内容发表意见来帮助实现这一点，要求所有组件至少提供弹性默认值，健康检查，设置遥测，并与DI集成。为了强调这一点，让我们来看看一个准备生产的应用程序可能会在他们的应用程序中配置Redis：

1. 使用Redis客户端库添加Redis包。
2. 发现并添加健康检查库，以便您的应用可以响应Redis是否可用。这一点经常被忽略，但在实践中很有用。
3. 将Redis添加到DI并配置连接字符串。这很棘手，因为你需要知道Redis客户端库类型应该有什么生命周期。这需要研究。
4. 配置Redis客户端库以将日志输出发送到遥测系统。
5. 日志和指标不同，需要不同的管道。
6. 决定需要什么样的弹性策略和逻辑，并配置Redis或使用可以实现弹性策略的Poly等库包装调用。这再次需要研究Redis的能力以及你应该拥有什么样的弹性策略，这通常是你一开始就不知道的，导致人们在没有它的情况下进行运输，直到生产中出现一些中断，而这些中断本可以通过具有指数回退的重试策略来避免。

如果我们将其与使用.NET Aspire进行对比：

1. 添加.NET Aspire Redis包。
2. 在构建器上调用 `AddRedis` 。
3. 可选地覆盖appSettings.json中的默认配置（它现在是模块化的，因此您可以完成发现可以设置的内容）。

.NET Aspire组件经过精心设计，可为您提供最佳的生产就绪配置，而不会隐藏底层SDK。在上面提到的两个例子中，使用Redis的代码将始终使用相同的Redis客户端库和类型。


组件必须满足以下要求才能被视为可供用途：

- 提供详细的、系统化的配置。
- 设置运行状况检查以跟踪和响应远程服务运行状况。
- 提供默认的、可配置的弹性模式（重试、超时等）以最大限度地提高可用性。
- 提供集成的日志记录、度量和跟踪，使组件可观察。

下面列出了我们的初始组件集，更多文档可以在.NET Aspire组件概述中找到|Microsoft Learn.


**与云无关的组件**


| **Component**                                                                                                                    | **Description**                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [PostgreSQL Entity Framework Core](https://learn.microsoft.com/dotnet/aspire/database/postgresql-entity-framework-component)     | Provides a client library for accessing PostgreSQL databases using Entity Framework Core. |
| [PostgreSQL](https://learn.microsoft.com/dotnet/aspire/database/postgresql-component)                                            | Provides a client library for accessing PostgreSQL databases.                             |
| [RabbitMQ](https://learn.microsoft.com/dotnet/aspire/messaging/rabbitmq-client-component)                                        | Provides a client library for accessing RabbitMQ.                                         |
| [Redis Distributed Caching](https://learn.microsoft.com/dotnet/aspire/caching/stackexchange-redis-distributed-caching-component) | Provides a client library for accessing Redis caches for distributed caching.             |
| [Redis Output Caching](https://learn.microsoft.com/dotnet/aspire/caching/stackexchange-redis-output-caching-component)           | Provides a client library for accessing Redis caches for output caching.                  |
| [Redis](https://learn.microsoft.com/dotnet/aspire/caching/stackexchange-redis-component)                                         | Provides a client library for accessing Redis caches.                                     |
| [SQL Server Entity Framework Core](https://learn.microsoft.com/dotnet/aspire/database/sql-server-entity-framework-component)     | Provides a client library for accessing SQL Server databases using Entity Framework Core. |
| [SQL Server](https://learn.microsoft.com/dotnet/aspire/database/sql-server-component)                                            | Provides a client library for accessing SQL Server databases.                             |


**Azure特定组件**


| **Component**                                                                                                                          | **Description**                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [Azure Blob Storage](https://learn.microsoft.com/dotnet/aspire/storage/azure-storage-blobs-component)                                  | Provides a client library for accessing Azure Blob Storage.                                   |
| [Azure Cosmos DB Entity Framework Core](https://learn.microsoft.com/dotnet/aspire/database/azure-cosmos-db-entity-framework-component) | Provides a client library for accessing Azure Cosmos DB databases with Entity Framework Core. |
| [Azure Cosmos DB](https://learn.microsoft.com/dotnet/aspire/database/azure-cosmos-db-component)                                        | Provides a client library for accessing Azure Cosmos DB databases.                            |
| [Azure Key Vault](https://learn.microsoft.com/dotnet/aspire/security/azure-security-key-vault-component)                               | Provides a client library for accessing Azure Key Vault.                                      |
| [Azure Service Bus](https://learn.microsoft.com/dotnet/aspire/messaging/azure-service-bus-component)                                   | Provides a client library for accessing Azure Service Bus.                                    |
| [Azure Storage Queues](https://learn.microsoft.com/dotnet/aspire/storage/azure-storage-queues-component)                               | Provides a client library for accessing Azure Storage Queues.                                 |


#### **Application Model 应用模型**


.NET Aspire应用程序中的 `AppHost` 项目让您可以用自己喜欢的.NET语言（最初支持C#）表达应用程序的需求。它负责协调应用程序在开发机器上的运行。


编排是.NET Aspire的核心功能，旨在简化云原生应用程序不同部分之间的连接和配置。.NET Aspire提供了有用的抽象，允许您编排服务发现，环境变量和容器配置等问题，而无需管理低级别的实现细节。这些抽象还提供了跨具有许多组件和服务的应用程序的一致设置模式。


.NET Aspire编排有助于解决以下问题：

- 应用组合：定义组成应用的资源，包括.NET项目、容器、可执行文件或云资源。
- 服务发现：确定不同的资源如何相互通信。

例如，使用.NET Aspire，以下代码创建了一个本地Redis容器资源，一个API的项目资源，并在“**webfrontend**”项目中配置了适当的连接字符串和URL。


```c#
var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedisContainer("cache");

var apiservice = builder.AddProject<Projects.AspireApp_ApiService>("apiservice");

builder.AddProject<Projects.AspireApp_Web>("webfrontend")
    .WithReference(cache)
    .WithReference(apiservice);

builder.Build().Run();
```


“**webfrontend**”项目现在可以向 `http://apiservice` 发出HTTP请求，而无需担心端口映射。Redis连接字符串更加透明，因为.NET Aspire组件配置Redis客户端使用自动提供的连接字符串。这消除了开发流程中容易出错的设置的大量来源，并简化了入门和入门。如果您在生产中使用服务发现，即使只有默认的**Kubernetes**功能，那么这也将比手动配置更接近生产配置。


**内置资源**

- 项目：.NET项目，例如ASP.NET Core Web应用程序。
- 容器：容器镜像，例如Docker镜像。
- 可执行文件：可执行文件。

**与云无关的扩展**


当您为相应的资源添加NuGet包（组件）时，这些组件中的每一个都可用。对于其中的每一个，你可以让.NET Aspire在开发过程中启动一个容器，或者通过连接字符串连接到现有的/外部的资源。

- Postgress
- RabbitMQ
- Redis
- SQL Server

**Azure特定扩展**


当您为相应的资源添加NuGet包（组件）时，这些方法中的每一个都可用。Azure存储是目前唯一支持运行本地容器的资源，其余资源需要实际Azure资源的连接信息。

- Azure Storage (blobs, Tables, Queues)
- Azure Cosmos DB
- Azure KeyVault
- Azure Redis Cache
- Azure Service Bus

**Developer Dashboard**


.NET Aspire仪表板仅在AppHost运行时可见，并将在您启动项目时自动启动。左侧导航提供了指向我们将在此处描述的仪表板不同部分的链接。此外，仪表板右上角的齿轮图标提供了对设置页面的访问，该页面允许您配置仪表板体验。


![dotnet-Aspire-metrics-view.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnet-Aspire-metrics-view.png)

- 项目：项目页面是仪表板的主页，它列出了应用程序中的所有项目资源。它的主要功能是向你显示每个项目的状态，并给予你应用程序各部分的URL。当一个项目记录了错误时，它还会显示一个标记，让你轻松地锁定问题。
- 容器：此页面与项目页面相同，但用于应用程序的容器资源。在我们上面的教程中，Redis缓存容器将显示在这里。
- 可执行文件：此页与项目页相同，但用于应用程序的可执行文件资源。
- 日志：dashbaord的日志部分提供了在中央位置访问应用程序所有部分的日志。
	- 项目编号：您可以在这里查看.NET项目中日志提供程序的输出，您可以在每个项目之间切换，每个日志严重性都用不同的颜色表示。
	- 容器目录：此页面与项目目录相同，但用于容器。
	- 可执行文件目录：此页面与项目目录相同，但用于可执行文件。
	- 结构化日志：结构化日志页面提供了所有日志的可过滤视图。结构化日志维护日志消息的属性，以便它们可以单独过滤/搜索，而其他日志页面的所有属性都合并到一个字符串日志消息中。
	- 跟踪：跟踪页显示了通过应用程序所有部分的单个操作的路径，这是一个分布式跟踪。这个视图在发现瓶颈、减速和诊断只有在使用整个系统而不是孤立地使用时才会出现的其他行为方面非常有价值。我们在上面的教程部分展示了一个跟踪视图的截图，突出显示了如何在一个视图中看到使用Redis缓存，API和前端的单个操作。
	- 指标：“指标”页面显示应用程序的所有指标。

可**观测性**


.NET Aspire应用程序默认情况下是可观察的。出色的可观察性意味着您可以通过从运行中的应用程序收集的所有数据（特别是日志、指标和跟踪）确定解决方案中发生了什么，尤其是在停机期间。如果您无法确定正在发生的事情，那么仅仅拥有日志和指标并不能使整个系统变得可观察，您需要在正确的时间在正确的视图中显示正确的数据。


这意味着，对于一个应用程序是可观察的，那么：

1. 分布式应用程序的所有部分都需要以您可以使用的方式提供数据，包括.NET本身、您使用的库以及您自己的应用程序代码。
2. 这些数据需要发送到您可以访问的地方。
3. 查看/查询/理解数据的工具需要存在。

在.NET中，我们一直在越来越多地投入支持**Open Telemetry**作为数据的格式，采用**Open Telemetry**命名和数据结构，以及`Open Telemetry Protocol`（OTLP）将数据从应用程序中提取出来并进入工具生态系统。


在.NET Aspire中，我们在 `ServiceDefaults` 项目中提供了默认连接Open Telemetry的代码。我们使用共享代码是因为有一些约定，比如健康端点的名称，我们预计有些人会想要为他们的项目或公司定制这些约定。在实验中，我们发现共享代码在定义这些类型的默认值方面提供了更好的体验，人们可以调整这些类型，而不是将它们放在具有配置设置的库中。


.NET Aspire还提供了我们上面提到的开发人员仪表板，它为您提供了应用程序的所有日志，指标和跟踪。仪表板的一个突出功能是Traces视图，它提供了通过应用程序的请求的分布式跟踪。在下面的示例中，我们向 `Aspire Starter App` 模板的天气页面发出了请求。您可以看到请求如何从前端转到Redis缓存，以查看数据是否被缓存（DATA redis GET行），然后因为该高速缓存中没有数据，它会调用后端API，最后缓存该数据。


![dotnetAspire-Redis-Cache-View.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnetAspire-Redis-Cache-View.png)


这种类型的视图使得查找诸如用户操作之类的东西，这些操作会导致系统中的低效路径。您将能够立即看到正在进行的多个数据库调用或正在减慢系统其他部分的单个服务。如果没有这种类型的数据和数据视图，这些类型的问题可能很难发现。


### 服务发现


构建任何分布式应用程序的关键之一是调用远程服务的能力。作为.NET Aspire的一部分，我们构建了一个新的服务发现库`Microsoft.Extensions.ServiceDiscovery`。该库提供了客户端服务发现和负载平衡的核心抽象和各种实现，可以与`HttpClientFactory`和`YARP`无缝集成，也可以在部署的环境**Kuberentes**和**Azure**容器应用程序中集成。


**部署.NET Aspire应用程序**


.NET Aspire应用程序的最终构件是可以部署到云环境的.NET应用程序和配置。依靠.NET Aspire强大的容器优先思想，.NET SDK本机容器构建可作为一个有价值的工具，轻松将这些应用程序发布到容器中。


虽然.NET Aspire本身并不提供直接的机制来将应用程序部署到其最终目标机器，但上面描述的应用程序模型知道应用程序的所有信息，它的依赖关系，配置以及与每个服务的连接。应用程序模型可以生成一个清单定义，该定义描述工具可以使用、扩充和构建以进行部署的所有这些关系和依赖项。


通过此清单，我们可以使用Azure容器应用程序以最简单、最快的方式将您的.NET Aspire应用程序导入**Azure**。使用`Azure Developer CLI`和.NET Aspire中的新功能，这些组合体验使您能够快速检测.NET Aspire环境，了解应用程序，并立即在一个步骤中配置和部署Azure资源。


**现有应用**


到目前为止，我们已经在这篇博客文章中展示了很多新的应用程序，但是.NET Aspire也可以与现有的应用程序一起使用，因为它可以逐步采用堆栈的各个部分。


.NET Aspire是.NET 8的一部分。因此，您需要在尝试使用堆栈的任何部分之前进行升级。我们在这里提供了工具和指导来帮助您：升级助手|.NET（microsoft.com）。如果你想使用Visual Studio工具，你还需要最新的Visual Studio预览版，在撰写本文时是17.9。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/04eacd40-23e7-4f47-a8da-acf6029b5a21/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241111T213311Z&X-Amz-Expires=3600&X-Amz-Signature=a7bab4b95b5c1ac307a17e4c415d4d43070e8d66ccfec848a228f6df7dd91fd2&X-Amz-SignedHeaders=host&x-id=GetObject)


然后，系统将提示您确认项目和操作。


![dotnetAspire-Add-Orchestrator-Support.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnetAspire-Add-Orchestrator-Support.png)


这将创建一个 `AppHost` 和 `ServiceDefaults` 项目，您选择的项目将已添加到 `AppHost` 。您现在可以启动AppHost项目，并将看到开发人员仪表板。从这里，您可以添加对 `ServiceDefaults` 项目的引用，并在应用程序构建器上调用 `AddServiceDefaults()` 方法。这将为此项目设置Open Telemetry、运行状况检查端点、服务发现和默认弹性模式。


当不使用Visual Studio时，您仍然可以使用 `dotnet new` 将 `AppHost` 和 `ServiceDefaults` 项目添加到现有解决方案中，但它们不会像上面的示例那样引用现有项目。


如果您正在使用任何具有组件的服务，您现在可以切换到.NET Aspire组件。这可能意味着你可以删除一些显式的配置，如果你已经设置了组件自己做的事情。您还可以在任何.NET 8应用程序中自由使用组件，而无需编排。这将使您获得应用于组件的弹性和其他配置，但您不会获得.NET Aspire的其余部分，如仪表板，服务发现和自动端口，URL或连接字符串。


**结论**


我们非常高兴今天能向您提供.NET Aspire的第一个预览版。基于.NET 8中坚如磐石的基础知识和令人难以置信的高效API表面，我们相信您会喜欢使用.NET Aspire构建云原生应用程序的生产力。


Get started today with these resources:

- [Download the Aspire workload using the Visual Studio Installer](https://learn.microsoft.com/dotnet/aspire/setup-tooling?tabs=visual-studio#install-net-aspire)
- [Build your first .NET Aspire solution](https://learn.microsoft.com/dotnet/aspire/get-started/quickstart-build-your-first-aspire-app)

We also have some samples showcasing a few things we think are interesting:

- Node frontend with .NET Backend: [https://github.com/dotnet/aspire-samples/tree/main/samples/AspireWithNode](https://github.com/dotnet/aspire-samples/tree/main/samples/AspireWithNode)
- DAPR integration: [https://github.com/dotnet/aspire-samples/tree/main/samples/AspireWithDapr](https://github.com/dotnet/aspire-samples/tree/main/samples/AspireWithDapr)
- The eShop sample application all running with Aspire: [https://github.com/dotnet/eshop](https://github.com/dotnet/eshop)

有反馈可以联系 [https://github.com/dotnet/aspire](https://github.com/dotnet/aspire).

