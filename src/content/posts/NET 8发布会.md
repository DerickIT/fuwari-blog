---
category: .Net
tags:
  - BackEnd
  - CSharp
  - DotNet
  - Blazor
status: 已发布
catalog: []
slug: net-8-release-conference
title: .NET 8发布会
urlname: 80e5c56d-f3ef-4559-9720-865fbe8df017
date: '2023-11-15 20:48:00'
updated: '2024-05-09 23:17:00'
image: 'https://www.notion.so/images/page-cover/met_silk_kashan_carpet.jpg'
published: 2023-11-14T08:00:00.000Z
---

Microsoft在今天发布了 **.NET 8.0 LTS**版本，这个版本更新了以下内容

1. 性能提升
2. 云原生支持，发布了.NET Aspire提供服务注册发现，可观测性，云原生部署支持等特性
3. 对于AI研发的支持，可以很方便的接入OpenAI的API，加快dotnet语言架构下AI产品的问世
4. Blazor升级：使用单个强大的组件模型来处理Blazor的所有Web UI需求
5. MAUI更新：使用.NET MAUI将您的移动的应用程序部署到最新版本的iOS和Android
6. C#12语言特性更新

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/10cda029-65af-4ea7-b30e-605b2d9e6c57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGEZTLK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T213323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2fzwRwL3ju9BPJDnZkq6ZjTmCqBXhIkwNdKWoNMssWAiEA%2FrgDxg5aI4amYc6LyenMqsO75Z8iDD1dWCn5ue%2FO03wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwHnWNSyeaaG3pTrSrcA3Zht4rLhzL10PR1WedLFUmRKIAJR5gOwRRdi9psiY9SGTUeKkDZPJZMYDRa0q%2FVh7ZY1VqTWf2Q2lWpGfevMjcqaVBKHg2iVndFenh1xOy2KIiL%2Bt2NEWGI7WoQM63qBplBbdrAeWsAWPr1Q1l3w5fPZeaptydsZLfiXv9Nd3FURgCbZzYUd16%2Bi4Mmhw1tStsXdR0ANeoPLPS2JiLCbfn8nXVNnMIOT%2B33sQsW6uKe6DCFbshu%2F0Dky4FeawUhAzDJ12RxZ6rYMb2z0AlqbsjdFMfWO9zeqi1CcwHtWQRqwWPdypiW9eapuSJvNFup9lsU4DJSDzhIx6HoqBrXWcRdLZJVpovqL%2BO%2BpOuKYKGM6WSUazg7ma2xbhEclSZ7fWdc8B4XWEOGUmuzrK41Ru9xObGCMbKVSXMccmvzm%2FGMoaHgqqXaGWzN6F1I%2FYcFf5HAlPxC90yIDFv37YwhttOGhYVZCGcLpjaY4jOXA6YEwYE6N7qm%2FJbpKbNrvDtNB1lMn5fdWx6EvO5zAAQWLPf7Aum2zKpPhels0vOwace1zDj6jdTs6wGU%2BZF0pqwcL8WDNK3fRs3Cp7R8L3aolU01bkPeU7aH2%2BISRcsD2p4fd4K5e4twpaPVdfrwMLfS%2FrwGOqUBDEjGnP8uJvPyTKWaWsd4oq0Nkl3DkualeN9m0gpzMharMbUfmsPtEod%2BeBCEo9yUWKcX5pBfOoS%2B2oxkehiFqHxPeyylwqKHTqsu6oyjE4CLo5durTROovdhSCqRe9rx0JngmZvVewd5qY4wo4RfatW67bmAgJikA8GVtxMGirZR4yXi5vGGp59hzj8FDn7i%2FUpn1Q%2F7KbyWXOqrChcjV91SX7BH&X-Amz-Signature=654a27449a0c11915d74493ee3f69f7a64fbc2a9dc97e665ee33680bb0336f6f&X-Amz-SignedHeaders=host&x-id=GetObject)


### **迄今为止最快的.NET**


.NET 8在整个堆栈中带来了数千项性能改进。一个名为动态配置文件引导优化（PGO）的新代码生成器可以根据实际使用情况优化您的代码，默认情况下可以将应用的性能提高20%。现在支持的AVX-512指令集使您能够对512位数据向量执行并行操作，这意味着您可以在更短的时间内处理更多的数据。原始类型（数值及以上）现在实现了一个新的可格式化和可解析接口，使它们能够直接格式化和解析为UTF-8，而无需任何代码转换开销。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/edcbf140-d619-4389-a4a6-f97c113ab9f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGEZTLK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T213323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2fzwRwL3ju9BPJDnZkq6ZjTmCqBXhIkwNdKWoNMssWAiEA%2FrgDxg5aI4amYc6LyenMqsO75Z8iDD1dWCn5ue%2FO03wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwHnWNSyeaaG3pTrSrcA3Zht4rLhzL10PR1WedLFUmRKIAJR5gOwRRdi9psiY9SGTUeKkDZPJZMYDRa0q%2FVh7ZY1VqTWf2Q2lWpGfevMjcqaVBKHg2iVndFenh1xOy2KIiL%2Bt2NEWGI7WoQM63qBplBbdrAeWsAWPr1Q1l3w5fPZeaptydsZLfiXv9Nd3FURgCbZzYUd16%2Bi4Mmhw1tStsXdR0ANeoPLPS2JiLCbfn8nXVNnMIOT%2B33sQsW6uKe6DCFbshu%2F0Dky4FeawUhAzDJ12RxZ6rYMb2z0AlqbsjdFMfWO9zeqi1CcwHtWQRqwWPdypiW9eapuSJvNFup9lsU4DJSDzhIx6HoqBrXWcRdLZJVpovqL%2BO%2BpOuKYKGM6WSUazg7ma2xbhEclSZ7fWdc8B4XWEOGUmuzrK41Ru9xObGCMbKVSXMccmvzm%2FGMoaHgqqXaGWzN6F1I%2FYcFf5HAlPxC90yIDFv37YwhttOGhYVZCGcLpjaY4jOXA6YEwYE6N7qm%2FJbpKbNrvDtNB1lMn5fdWx6EvO5zAAQWLPf7Aum2zKpPhels0vOwace1zDj6jdTs6wGU%2BZF0pqwcL8WDNK3fRs3Cp7R8L3aolU01bkPeU7aH2%2BISRcsD2p4fd4K5e4twpaPVdfrwMLfS%2FrwGOqUBDEjGnP8uJvPyTKWaWsd4oq0Nkl3DkualeN9m0gpzMharMbUfmsPtEod%2BeBCEo9yUWKcX5pBfOoS%2B2oxkehiFqHxPeyylwqKHTqsu6oyjE4CLo5durTROovdhSCqRe9rx0JngmZvVewd5qY4wo4RfatW67bmAgJikA8GVtxMGirZR4yXi5vGGp59hzj8FDn7i%2FUpn1Q%2F7KbyWXOqrChcjV91SX7BH&X-Amz-Signature=9e76090785e0e404c3cab3f25d686a031bd0871011ac027e9fa500785a933c5a&X-Amz-SignedHeaders=host&x-id=GetObject)


### **.NET Aspire -一个自定义的堆栈，用于构建可观察的，生产就绪的云原生应用程序微服务框架组件**


.NET Aspire是一个堆栈，用于使用. NET构建弹性，可观察和可配置的云原生应用程序。它包括一组针对云原生增强的策划组件，默认情况下包括遥测，弹性，配置和健康检查。为复杂的服务提供简单的本地开发人员体验，.NET Aspire可以在轻松发现、获取和配置云原生应用程序的基本依赖项。今天发布了.NET Aspire的第一个预览版。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ff6a34d3-ac25-412d-9204-a7263d00528f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGEZTLK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T213323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2fzwRwL3ju9BPJDnZkq6ZjTmCqBXhIkwNdKWoNMssWAiEA%2FrgDxg5aI4amYc6LyenMqsO75Z8iDD1dWCn5ue%2FO03wqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwHnWNSyeaaG3pTrSrcA3Zht4rLhzL10PR1WedLFUmRKIAJR5gOwRRdi9psiY9SGTUeKkDZPJZMYDRa0q%2FVh7ZY1VqTWf2Q2lWpGfevMjcqaVBKHg2iVndFenh1xOy2KIiL%2Bt2NEWGI7WoQM63qBplBbdrAeWsAWPr1Q1l3w5fPZeaptydsZLfiXv9Nd3FURgCbZzYUd16%2Bi4Mmhw1tStsXdR0ANeoPLPS2JiLCbfn8nXVNnMIOT%2B33sQsW6uKe6DCFbshu%2F0Dky4FeawUhAzDJ12RxZ6rYMb2z0AlqbsjdFMfWO9zeqi1CcwHtWQRqwWPdypiW9eapuSJvNFup9lsU4DJSDzhIx6HoqBrXWcRdLZJVpovqL%2BO%2BpOuKYKGM6WSUazg7ma2xbhEclSZ7fWdc8B4XWEOGUmuzrK41Ru9xObGCMbKVSXMccmvzm%2FGMoaHgqqXaGWzN6F1I%2FYcFf5HAlPxC90yIDFv37YwhttOGhYVZCGcLpjaY4jOXA6YEwYE6N7qm%2FJbpKbNrvDtNB1lMn5fdWx6EvO5zAAQWLPf7Aum2zKpPhels0vOwace1zDj6jdTs6wGU%2BZF0pqwcL8WDNK3fRs3Cp7R8L3aolU01bkPeU7aH2%2BISRcsD2p4fd4K5e4twpaPVdfrwMLfS%2FrwGOqUBDEjGnP8uJvPyTKWaWsd4oq0Nkl3DkualeN9m0gpzMharMbUfmsPtEod%2BeBCEo9yUWKcX5pBfOoS%2B2oxkehiFqHxPeyylwqKHTqsu6oyjE4CLo5durTROovdhSCqRe9rx0JngmZvVewd5qY4wo4RfatW67bmAgJikA8GVtxMGirZR4yXi5vGGp59hzj8FDn7i%2FUpn1Q%2F7KbyWXOqrChcjV91SX7BH&X-Amz-Signature=5f6e5fddfb1b45b3085c5c7cf5245d58390c82aeecc5b2a23a1fadd7f7548186&X-Amz-SignedHeaders=host&x-id=GetObject)


### **.NET 8容器增强功能-更安全，更紧凑，更高效**


使用容器打包您的应用程序比以往任何时候都更容易，更安全。每个.NET映像都包含一个非root用户，从而通过一行配置实现更安全的容器。.NET SDK工具发布的容器镜像没有Dockerfile，默认情况下是非root。由于更小的.NET基础映像-包括我们映像的新实验变体，可为原生AOT提供真正最小的应用程序大小，因此可以更快地部署容器化应用程序。选择使用新的Chiseled Ubuntu映像变体进行更多的安全加固，以进一步减少您的攻击面。使用Dockerfiles或SDK工具，为任何架构构建应用和容器镜像。


![Containers2.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/Containers2.png)


## 原生AoT -迈向更高密度可持续计算之旅


将.NET应用程序编译为使用更少内存并立即启动的本机代码。无需等待JIT（即时）编译器在运行时编译代码。无需部署JIT编译器和IL代码。AOT应用仅部署应用所需的代码。您的应用现在可以在不允许JIT编译器的受限环境中运行。


![AOTOptimizations4.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/AOTOptimizations4.png)


## 人工智能-将AI融入.NET应用程序


生成式人工智能和大型语言模型正在改变人工智能领域，为开发人员提供在应用程序中创建独特的人工智能体验的能力。.NET 8通过.NET SDK中一流的开箱即用AI功能以及与多个工具的无缝集成，使您可以轻松利用AI。


各种示例和参考模板，展示模式和实践，现在可以让开发人员轻松入门：

- [Customer Chatbot](https://github.com/dotnet/eShop)[ ](https://github.com/dotnet/eShop)[ 客户聊天机器人](https://github.com/dotnet/eShop)
- [Retrieval Augmented Generation](https://github.com/Azure-Samples/azure-search-openai-demo-csharp)[检索增强生成](https://github.com/Azure-Samples/azure-search-openai-demo-csharp)
- [Developing Apps using Azure AI services](https://devblogs.microsoft.com/dotnet/demystifying-retrieval-augmented-generation-with-dotnet/)[使用Azure AI服务开发应用](https://devblogs.microsoft.com/dotnet/demystifying-retrieval-augmented-generation-with-dotnet/)

![InfuseAIdotnetapps1.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/InfuseAIdotnetapps1.png)


## Blazor -使用.NET构建全栈Web应用程序


.NET 8中的Blazor可以同时使用服务器和客户端来处理所有的Web UI需求。这是全栈Web UI！通过几项新的增强功能，专注于优化页面加载时间，可扩展性和提升用户体验，开发人员现在可以在同一个应用程序中使用Blazor Server和Blazor WebAssembly，在运行时自动将用户从服务器转移到客户端。由于新的基于“Jiterpreter”的运行时和新的内置组件，您的.NET代码在WebAssembly上运行得更快。作为增强.NET 8中整体身份验证、授权和身份管理的一部分，Blazor现在支持生成完整的基于Blazor的Identity UI。


![Blazor2.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/Blazor2.png)


## .NET MAUI -提升性能、可靠性和开发人员体验


..NET MAUI为您提供了一个单一的项目系统和单一的代码库来构建WinUI，Mac Catalyst，iOS和Android应用程序。原生AOT（实验性）现在支持针对类iOS平台。针对.NET MAUI的新Visual Studio代码扩展为您提供了开发跨平台.NET移动的和桌面应用程序所需的工具。现在支持Xcode 15和Android API 34，允许您针对最新版本的iOS和Android。在性能、控件和UI元素以及特定于平台的行为方面进行了大量的质量改进，例如桌面交互添加了更好的点击处理、键盘侦听器等。


![dotnetMAUIin8-1.png](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2023/11/dotnetMAUIin8-1.png)


## C# 12特性-简化语法，提高开发人员的生产力


C# 12让你的编程体验更高效、更愉快。现在，您可以使用简单而优雅的语法在任何类和结构中创建主构造函数。没有更多的样板代码来初始化您的字段和属性。使用简洁而富有表现力的语法创建数组、span和其他集合类型时，您会感到非常高兴。在lambda表达式中为参数使用新的默认值。没有更多的重载或空检查来处理可选参数。你甚至可以使用 `using` alias指令来给任何类型别名，而不仅仅是命名类型！


**Collection expressions** **集合表达式**


```c#
// Create a list:
List<int> a = [1, 2, 3, 4, 5, 6, 7, 8];

// Create a span
Span<char> b  = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i'];

// Use the spread operator to concatenate
int[] array1 = [1, 2, 3];
int[] array2 = [4, 5, 6];
int[] array3 = [7, 8, 9];
int[] fullArray = [..array1, ..array2, ..array3]; // contents is [1, 2, 3, 4, 5, 6, 7, 8, 9]
```


在 [Announcing C# 12](https://devblogs.microsoft.com/dotnet/announcing-csharp-12)中查看有关C#最新版本的更多信息。


## .NET 8 support across Visual Studio family of tools


在最新的VS2017及以上可以使用.NET 8和C#12的特性


### .NET 8更新的附加功能:

- **ASP.NET Core.** [Streamlines identity for single-page applications (SPA) and Blazor providing cookie-based authentication, pre-built APIs, token support, and a new identity UI.](https://devblogs.microsoft.com/dotnet/whats-new-with-identity-in-dotnet-8/) and [enhances minimal APIs with form-binding, antiforgery support to protect against cross-site request forgery (XSRF/CSRF), and ](https://learn.microsoft.com/aspnet/core/release-notes/aspnetcore-8.0#minimal-apis)[`asParameters`](https://learn.microsoft.com/aspnet/core/release-notes/aspnetcore-8.0#minimal-apis)[ support for parameter-binding with Open API definitions](https://learn.microsoft.com/aspnet/core/release-notes/aspnetcore-8.0#minimal-apis)
- **ASP.NET Core tooling.** [Route syntax highlighting, auto-completion, and analyzers to help you create Web APIs.](https://devblogs.microsoft.com/dotnet/aspnet-core-route-tooling-dotnet-8/)
- **Entity Framework Core.** [Provides new “complex types” as value objects, primitive collections, and SQL Server support for hierarchical data.](https://devblogs.microsoft.com/dotnet/announcing-ef8-rc2/)
- **NuGet.** [Helps you audit your NuGet packages in projects and solutions for any known security vulnerabilities.](https://learn.microsoft.com/nuget/concepts/auditing-packages)
- **.NET Runtime.** [Brings a new AOT compilation mode for WebAssembly (WASM) and Android.](https://devblogs.microsoft.com/dotnet/announcing-dotnet-8-rc1/#androidstripilafteraot-mode-on-android)
- **.NET SDK.** [Revitalizes terminal build output and production-ready defaults.](https://learn.microsoft.com/dotnet/core/whats-new/dotnet-8#net-sdk)
- **WPF.** [Supports OpenFolderDialog](https://devblogs.microsoft.com/dotnet/wpf-file-dialog-improvements-in-dotnet-8/) and [Enabled HW Acceleration in RDP](https://devblogs.microsoft.com/dotnet/announcing-dotnet-8-rc1/#wpf-hardware-acceleration-in-rdp)
- **ARM64.** [Significant feature enhancements and improved code quality for ARM64 platforms through collaboration with ARM engineers.](https://devblogs.microsoft.com/dotnet/this-arm64-performance-in-dotnet-8/)
- **Debugging.** [Displays debug summaries and provides simplified debug proxies for commonly used .NET types.](https://devblogs.microsoft.com/dotnet/debugging-enhancements-in-dotnet-8/)
- **System.Text.Json.** [Helps populate read-only members, customizes unmapped member handling, and improves Native AOT support.](https://devblogs.microsoft.com/dotnet/system-text-json-in-dotnet-8/)
- **.NET Community Toolkit.** [Accelerates building .NET libraries and applications while ensuring they are trim and AOT compatible (including the MVVM source generators!)](https://devblogs.microsoft.com/dotnet/announcing-the-dotnet-community-toolkit-821/)
- **Azure.** [Supports .NET 8 with Azure’s PaaS services like App Service for Windows and Linux, Static Web Apps, Azure Functions, and Azure Container Apps.](https://aka.ms/appservice-dotnet8)
- **F# 8.** [Includes significant language changes, new diagnostics, improvements in usability, and performance enhancements in project compilation, as well as upgrades to the FSharp.Core standard library.](https://devblogs.microsoft.com/dotnet/announcing-fsharp-8/)
- **What’s new in .NET 8.** [Check out our documentation for everything else!](https://learn.microsoft.com/dotnet/core/whats-new/dotnet-8)
