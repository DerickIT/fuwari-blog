---
category: .Net
tags:
  - CSharp
  - Docker
  - DotNet
  - ASPNETCORE
status: 已发布
catalog: []
slug: asp-net-core-middleware-part-1
title: ASP.NET CORE 中间件(一)
urlname: 979bd270-48f0-4912-8c24-4c9f050183ce
date: '2023-12-14 17:34:00'
updated: '2024-05-09 23:17:00'
image: 'https://www.notion.so/images/page-cover/rijksmuseum_vermeer_the_milkmaid.jpg'
published: 2023-12-13T08:00:00.000Z
---

### 什么是中间件？


中间件被集成到应用程序管道中，负责监督请求和响应的处理。管道中的每个组件都决定是否将请求传递给下一个组件。它具有在后续管道组件之前和之后运行的能力。请求管道是使用请求代理构建的，这些代理管理每个HTTP请求。


在配置请求代理时，Run、Map和Use扩展方法起着关键作用。请求代理，作为一个单独的处理步骤，可以作为匿名方法（称为内联中间件）在行内设置，也可以在可重用的类中定义。这些类和内联方法共同形成中间件组件。请求管道中的每个中间件组件都有责任调用序列中的下一个组件，或者在某些情况下，停止管道。当一个中间件组件停止处理时，它被称为"终端中间件"，因为它有效地阻止了后续中间件进一步处理请求。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/da807807-d02d-4fa1-86b6-db45e4678714/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFHQGO6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVtvhpP70WSHCSL69zlcSTPQxYnUo8P1J00ZqYL1PbgIgZvZJ5yaE5fBm5R5VZ5oN7OSLhulYPvLry1Nufjdg%2BV0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI%2BZhBc25g0Sjka7ircA%2BrzYi9UGLRrjNd4IG%2FemOdFFHGOu3ZKlEi8%2BXiOXk%2FuA2ESRkP6JvSuqzq7U7EyxX1gglRtaFioDy1U%2FcT4xDhNE4TYS6qS8uOz8M34kduehzX%2FRHW9Q%2FIEjMfhGjTjTJYjTO2m1AF6UO4tmHjX87BVbxxkZFVVr6rphk9xqQmLDq%2F2Q0O1bNMPWxdAQd6Tzwj29dxGT2oKvT7H6H9DC8818li3M6t5PwYVxhNSYUVRKivi9kHnBQRvwa6du5Eo8SIxFx0YCpC0fra5Kc2bH3uusQzzZQsF5KzMN%2FgC0osj6c6tUyc5ds%2BF69ovE7R72w6MhKOQHbFAxfaOlefKLyozI0sk%2Bl8j9ACf16tIPlYlqAOYOxJDxvwLWWrmnc993WqHAJnClbPm2oSiWI3%2B48BRguRySR4TkJVMROiSRi5btex0YBgEJFxLVIQK%2FR5C88HUrt%2FBxUlC9%2FpY%2F4qcFbP92bvzhjMB3m9oqIBwwe%2FkfI6kfOGVxRSiiAFhdm887Qp5lMWA%2BVWzrVIzwm%2B9WHERttOWAfHANW508kXxqhfDqpg0j7XKSMDVYUI8PXkwWb3BPJZJv5dBZBerNr%2B7uokftYspdyUdwYM1wCwf26apS7l6g4J159DQtwIBMOnWjMAGOqUBwnVsh6D0e2bLUhi60O5yfwptHpXhyMMiw%2FTaoO7YL5PzZlE2aqL30tN82EuQtANZiNrztyiK8KdGrEn61NfqQQcerDUYwywaoUSivp1wuqBR2owytjRM4wD8DnoceZTDIdckI7aVSXzBlMjNz7N%2F%2FRVonnhy4%2BkSTBI6L%2Byr%2FZclQqb2KyQ1MXUaOPHtN%2FAms4nrilDZw%2BSPBQLRJ7kWr9Cup7Kv&X-Amz-Signature=08bad0fe04e1a3e9e7581c15d0c6940100d72ca86527458f22631d11ed0c78f3&X-Amz-SignedHeaders=host&x-id=GetObject)


### 中间件


理解中间件：在.NET Core的上下文中，中间件指的是组装到请求处理管道中的软件组件，用于处理请求和响应。这些组件按顺序执行，提供了一种灵活的机制来执行诸如身份验证、授权、日志记录、错误处理等任务。每个中间件组件都有特定的责任，并可以在通过管道时修改请求或响应。


#### 关键组件和功能

- 身份验证中间件：中间件的主要功能之一是处理身份验证。.NET Core中间件允许开发者无缝地将身份验证机制集成到管道中。这对于确保只有授权用户可以访问受保护的资源至关重要。
- 授权中间件：授权中间件通过确定经过身份验证的用户是否具有执行特定操作或访问某些资源的必要权限，来补充身份验证。这一层为应用程序增加了额外的安全级别。
- 日志记录中间件：中间件可以用于日志记录目的，捕获每个请求和响应的有价值的信息。这有助于诊断问题，监控应用程序性能，分析用户行为。
- 异常处理中间件：在任何应用程序中，错误和异常都是不可避免的。中间件便于集中处理异常，确保开发者可以实现自定义错误页面，记录详细的错误信息，并保持一致的用户体验。
- CORS中间件：跨源资源共享（CORS）是由中间件实现的一种安全特性，用于控制哪些域可以访问服务器上的资源。这对于保护Web应用程序和防止未经授权的访问至关重要。
- 压缩中间件：为了提高性能，中间件可以用于在响应发送给客户端之前进行压缩。这减少了通过网络传输的数据量，从而使用户的加载时间更快。

#### .NET Core中间件的优点

- 模块化和可重用性：中间件通过允许开发者将特定功能封装到可重用的组件中，促进了模块化。这种模块化的方法简化了代码维护，并促进了在不同项目中重用中间件。
- 管道定制：开发者可以根据他们的应用程序的特定需求，灵活地定制请求-响应管道。这种适应性对于定制应用程序的行为以满足独特的业务需求至关重要。
- 改进的可测试性：中间件组件可以单独进行单元测试，提高了可测试性，并促进了测试驱动开发（TDD）实践的采用。这确保每个中间件组件都能正确地运行，并符合其预期的行为。
- 集中配置：.NET Core中间件允许集中配置，使得管理和修改各种组件的行为变得更容易。这简化了调整应用程序设置的任务，无需修改代码。

### 中间件的顺序重要吗？


是的，在ASP.NET Core中，将中间件组件添加到管道的顺序是重要的。中间件组件按照它们被添加到管道的顺序执行。这意味着中间件注册的顺序影响了它们在请求处理管道中的执行顺序。


顺序之所以重要，是因为每个中间件组件可能会修改请求或响应，它们的执行顺序可能会影响最终的结果。如果你有身份验证中间件，它应该在依赖于经过身份验证的用户信息的其他中间件之前执行。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/24f795a2-1c5a-4a6b-a0d8-2afb160076f1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFHQGO6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVtvhpP70WSHCSL69zlcSTPQxYnUo8P1J00ZqYL1PbgIgZvZJ5yaE5fBm5R5VZ5oN7OSLhulYPvLry1Nufjdg%2BV0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI%2BZhBc25g0Sjka7ircA%2BrzYi9UGLRrjNd4IG%2FemOdFFHGOu3ZKlEi8%2BXiOXk%2FuA2ESRkP6JvSuqzq7U7EyxX1gglRtaFioDy1U%2FcT4xDhNE4TYS6qS8uOz8M34kduehzX%2FRHW9Q%2FIEjMfhGjTjTJYjTO2m1AF6UO4tmHjX87BVbxxkZFVVr6rphk9xqQmLDq%2F2Q0O1bNMPWxdAQd6Tzwj29dxGT2oKvT7H6H9DC8818li3M6t5PwYVxhNSYUVRKivi9kHnBQRvwa6du5Eo8SIxFx0YCpC0fra5Kc2bH3uusQzzZQsF5KzMN%2FgC0osj6c6tUyc5ds%2BF69ovE7R72w6MhKOQHbFAxfaOlefKLyozI0sk%2Bl8j9ACf16tIPlYlqAOYOxJDxvwLWWrmnc993WqHAJnClbPm2oSiWI3%2B48BRguRySR4TkJVMROiSRi5btex0YBgEJFxLVIQK%2FR5C88HUrt%2FBxUlC9%2FpY%2F4qcFbP92bvzhjMB3m9oqIBwwe%2FkfI6kfOGVxRSiiAFhdm887Qp5lMWA%2BVWzrVIzwm%2B9WHERttOWAfHANW508kXxqhfDqpg0j7XKSMDVYUI8PXkwWb3BPJZJv5dBZBerNr%2B7uokftYspdyUdwYM1wCwf26apS7l6g4J159DQtwIBMOnWjMAGOqUBwnVsh6D0e2bLUhi60O5yfwptHpXhyMMiw%2FTaoO7YL5PzZlE2aqL30tN82EuQtANZiNrztyiK8KdGrEn61NfqQQcerDUYwywaoUSivp1wuqBR2owytjRM4wD8DnoceZTDIdckI7aVSXzBlMjNz7N%2F%2FRVonnhy4%2BkSTBI6L%2Byr%2FZclQqb2KyQ1MXUaOPHtN%2FAms4nrilDZw%2BSPBQLRJ7kWr9Cup7Kv&X-Amz-Signature=287a5a00d845a9cfa9832b5ad84d02a5147a54e2bf8c7e7f524e7064b89d915a&X-Amz-SignedHeaders=host&x-id=GetObject)


#### 举例


在给定的场景中，客户端从'https://d.domain.com'源发起了一个请求，以访问服务内的一个端点。然而，在处理请求之前，负责验证跨源资源共享（CORS）策略的中间件进行了干预。在检查请求后，CORS中间件确定它并未符合定义的策略，因此拒绝了请求。

- 异常信息

```c#
"对'https://a-push.domain.com/notifyhub/negotiate'的XMLHttpRequest的访问，源自'https://d.domain.com'，已被CORS策略阻止：预检请求的响应未通过访问控制检查：请求的资源上没有'Access-Control-Allow-Origin'头。"[1][2][3]
```


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/371d9517-dafe-4432-94b7-2d14d1593167/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFHQGO6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVtvhpP70WSHCSL69zlcSTPQxYnUo8P1J00ZqYL1PbgIgZvZJ5yaE5fBm5R5VZ5oN7OSLhulYPvLry1Nufjdg%2BV0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI%2BZhBc25g0Sjka7ircA%2BrzYi9UGLRrjNd4IG%2FemOdFFHGOu3ZKlEi8%2BXiOXk%2FuA2ESRkP6JvSuqzq7U7EyxX1gglRtaFioDy1U%2FcT4xDhNE4TYS6qS8uOz8M34kduehzX%2FRHW9Q%2FIEjMfhGjTjTJYjTO2m1AF6UO4tmHjX87BVbxxkZFVVr6rphk9xqQmLDq%2F2Q0O1bNMPWxdAQd6Tzwj29dxGT2oKvT7H6H9DC8818li3M6t5PwYVxhNSYUVRKivi9kHnBQRvwa6du5Eo8SIxFx0YCpC0fra5Kc2bH3uusQzzZQsF5KzMN%2FgC0osj6c6tUyc5ds%2BF69ovE7R72w6MhKOQHbFAxfaOlefKLyozI0sk%2Bl8j9ACf16tIPlYlqAOYOxJDxvwLWWrmnc993WqHAJnClbPm2oSiWI3%2B48BRguRySR4TkJVMROiSRi5btex0YBgEJFxLVIQK%2FR5C88HUrt%2FBxUlC9%2FpY%2F4qcFbP92bvzhjMB3m9oqIBwwe%2FkfI6kfOGVxRSiiAFhdm887Qp5lMWA%2BVWzrVIzwm%2B9WHERttOWAfHANW508kXxqhfDqpg0j7XKSMDVYUI8PXkwWb3BPJZJv5dBZBerNr%2B7uokftYspdyUdwYM1wCwf26apS7l6g4J159DQtwIBMOnWjMAGOqUBwnVsh6D0e2bLUhi60O5yfwptHpXhyMMiw%2FTaoO7YL5PzZlE2aqL30tN82EuQtANZiNrztyiK8KdGrEn61NfqQQcerDUYwywaoUSivp1wuqBR2owytjRM4wD8DnoceZTDIdckI7aVSXzBlMjNz7N%2F%2FRVonnhy4%2BkSTBI6L%2Byr%2FZclQqb2KyQ1MXUaOPHtN%2FAms4nrilDZw%2BSPBQLRJ7kWr9Cup7Kv&X-Amz-Signature=24cd779f3abeac050008875e6a7ba861d6118b19d1a876eaf55eb194988eb503&X-Amz-SignedHeaders=host&x-id=GetObject)


### 中间件处理


#### 中间件短路
短路是根据特定条件停止执行管道中的中间件组件并跳过其余组件的过程。这通常是为了提高性能或处理特定情况，而无需完全通过中间件管道。例如，你可能有一个中间件组件，它检查特定条件，如果条件满足，立即返回响应。在这个例子中，中间件处理请求并生成响应，而不调用其他中间件组件。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/e8a1d943-cb51-4723-936e-23c6af2fb0f9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFHQGO6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T053916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVtvhpP70WSHCSL69zlcSTPQxYnUo8P1J00ZqYL1PbgIgZvZJ5yaE5fBm5R5VZ5oN7OSLhulYPvLry1Nufjdg%2BV0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI%2BZhBc25g0Sjka7ircA%2BrzYi9UGLRrjNd4IG%2FemOdFFHGOu3ZKlEi8%2BXiOXk%2FuA2ESRkP6JvSuqzq7U7EyxX1gglRtaFioDy1U%2FcT4xDhNE4TYS6qS8uOz8M34kduehzX%2FRHW9Q%2FIEjMfhGjTjTJYjTO2m1AF6UO4tmHjX87BVbxxkZFVVr6rphk9xqQmLDq%2F2Q0O1bNMPWxdAQd6Tzwj29dxGT2oKvT7H6H9DC8818li3M6t5PwYVxhNSYUVRKivi9kHnBQRvwa6du5Eo8SIxFx0YCpC0fra5Kc2bH3uusQzzZQsF5KzMN%2FgC0osj6c6tUyc5ds%2BF69ovE7R72w6MhKOQHbFAxfaOlefKLyozI0sk%2Bl8j9ACf16tIPlYlqAOYOxJDxvwLWWrmnc993WqHAJnClbPm2oSiWI3%2B48BRguRySR4TkJVMROiSRi5btex0YBgEJFxLVIQK%2FR5C88HUrt%2FBxUlC9%2FpY%2F4qcFbP92bvzhjMB3m9oqIBwwe%2FkfI6kfOGVxRSiiAFhdm887Qp5lMWA%2BVWzrVIzwm%2B9WHERttOWAfHANW508kXxqhfDqpg0j7XKSMDVYUI8PXkwWb3BPJZJv5dBZBerNr%2B7uokftYspdyUdwYM1wCwf26apS7l6g4J159DQtwIBMOnWjMAGOqUBwnVsh6D0e2bLUhi60O5yfwptHpXhyMMiw%2FTaoO7YL5PzZlE2aqL30tN82EuQtANZiNrztyiK8KdGrEn61NfqQQcerDUYwywaoUSivp1wuqBR2owytjRM4wD8DnoceZTDIdckI7aVSXzBlMjNz7N%2F%2FRVonnhy4%2BkSTBI6L%2Byr%2FZclQqb2KyQ1MXUaOPHtN%2FAms4nrilDZw%2BSPBQLRJ7kWr9Cup7Kv&X-Amz-Signature=a4223e67258ae44503eb845f7bc5fd858205f9a4d367f43f0ad50669ddca0dc4&X-Amz-SignedHeaders=host&x-id=GetObject)


#### 注意事项


应谨慎应用短路，因为它可能会干扰执行序列和应用程序的预期行为。在决定中断中间件管道时，必须始终考虑特定的需求和可能的负面效果[4]。


### 中间件配置：理解Map、Use和Run方法


ASP.NET Core中间件提供了一种灵活的方式来处理应用程序管道中的请求和响应。Map、Use和Run三个关键方法在配置中间件组件中起着关键作用。让我们探讨每个方法，并理解它们如何贡献到请求处理管道[5]。

1. Map方法
Map方法用于根据请求的路径有条件地分支中间件管道。它允许你指定一条中间件分支来处理匹配特定路径前缀的请求[5]。

```c#
app.Map("/path", builder =>
{
    builder.UseMiddleware1();
    builder.UseMiddleware2();
    // Additional middleware for the specified path
});
```


在此示例中，如果请求路径以“/path”开头，则将执行 Map 块内指定的中间件。

1. Use方法
Use方法是添加中间件组件到管道的基础构建块。它用于添加对所有请求或特定路径执行的中间件。

```c#
app.Use(async (context, next) =>
{
    // Code to be executed before calling the next middleware
    await next();
    // Code to be executed after the next middleware has completed
});
```


使用Use方法添加的中间件按照在管道中注册的顺序执行。这对于需要对每个请求进行日志记录、身份验证或其他处理的任务来说至关重要。中间件组件按照它们被添加到管道的顺序执行，因此在添加中间件时应注意正确的顺序，否则应用程序可能无法按预期运行。这种排序对于安全性、性能和功能来说都至关重要。

1. Run方法
Run方法用于创建终止请求管道的终端中间件。它不调用管道中的下一个中间件，使其成为最后运行的中间件。

```c#
app.Run(async context =>
{
    // Handle the request and generate a response
});
```


Run方法通常用于应该在管道中作为最终操作的任务，例如直接返回响应而不调用其他中间件。


在ASP.NET Core中，Map、Use和Run方法为配置中间件和控制请求处理管道提供了强大的机制。通过了解这些方法的工作原理，我们可以为应用程序创建一个结构良好且高效的管道，以处理请求和响应处理的各个方面。


Citations:
[1] [https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0)
[2] [https://stackoverflow.com/questions/62728467/middleware-ordering](https://stackoverflow.com/questions/62728467/middleware-ordering)
[3] [https://www.c-sharpcorner.com/article/overview-of-middleware-in-asp-net-core/](https://www.c-sharpcorner.com/article/overview-of-middleware-in-asp-net-core/)
[4] [https://www.tutorialsteacher.com/core/aspnet-core-middleware](https://www.tutorialsteacher.com/core/aspnet-core-middleware)
[5] [https://subscription.packtpub.com/book/web-development/9781786463951/6/ch06lvl1sec47/order-of-middleware](https://subscription.packtpub.com/book/web-development/9781786463951/6/ch06lvl1sec47/order-of-middleware)

