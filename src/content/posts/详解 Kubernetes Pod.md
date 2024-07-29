---
category: DevOps
tags:
  - DevOps
  - Kubernetes
status: 已发布
catalog: []
slug: deep-dive-into-kubernetes-pods
title: 详解 Kubernetes Pod
urlname: 4e40fa7f-c18e-43d5-9d78-981f12e2d6f0
date: '2024-07-29 11:31:00'
updated: '2024-07-29 11:38:00'
image: 'https://images.unsplash.com/photo-1667372459470-5f61c93c6d3f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-06-29T08:00:00.000Z
---

![20240722181504.png](https://r2.ithuo.net/elog-image/46830582b7374a1761d898995a97c257.png)


在本指南中，我使用实际示例详细介绍 Kubernetes Pod 概念。如果你想了解如下内容，本指南特别适合你：

- Pod 核心概念
- 如何创建 Pod
- 访问 Pod
- Pod 关联对象

本指南的目的是让您了解如何构建 Pod，并部署 Pod 和访问在其上运行的应用程序。此外，还有许多与 Pod 对象相关的概念。因此，我提供了与 Pod 相关的所有信息和概念，以进一步构建您所学的基础知识。


> 注意：在开始探索 Kubernetes Pod 之前，请确保您对 Linux 容器概念有充分的了解。


# 什么是 Kubernetes Pod？


在了解 Kubernetes Pod 概念之前，让我们先了解一下容器。


众所周知，容器是一个独立的环境，我们在其中打包应用程序及其依赖项。通常，容器运行单个进程（尽管有多种方法可以运行多个进程）。每个容器都有一个 IP 地址，可以附加卷并控制 CPU 和内存资源等。所有这些都是通过命名空间和控制组（cgroups）的概念发生的。


Kubernetes 是一个用于部署、扩展和管理容器化应用程序的容器编排系统，它有自己的容器运行方式。我们称之为 Pod。 Pod 是 Kubernetes 中最小的可部署单元，代表应用程序的单个实例。


例如，如果您想运行 Nginx 应用程序，则可以在 Pod 中运行它。


那么它与容器有什么不同呢？容器是一个单一的单元。但是，一个 Pod 可以包含多个容器。您可以将 Pod 视为一个可以将一个或多个容器容纳在一起的盒子。


Pod 提供了更高级别的抽象，允许您将多个容器作为一个单元进行管理。这里，不再是每个容器分别一个 IP，而是 Pod 整体获取一个 IP，然后，Pod 内的多个不同的容器相互之间，使用 localhost 通信。


![multi-container-pod.gif](https://r2.ithuo.net/elog-image/d73a9ee5940c28a5c2871ee02ec2df5c.gif)


这意味着 Kubernetes pod 内的容器共享以下内容：

- Network namespace：网络命名空间 – Pod 内的所有容器都通过 localhost 进行通信。
- IPC namespace：IPC 命名空间：所有容器都使用共享的进程间通信命名空间。
- UTS namespace：UTS 命名空间：所有容器共享相同的主机名。

Pod 内的容器之间不共享什么？

- 默认情况下，PID 命名空间不共享，但是 kubernetes 提供了使用 shareProcessNamespace 选项在 pod 内的容器之间启用进程共享的选项。
- 挂载命名空间不在容器之间共享。每个容器都有自己的私有文件系统和目录。但是，Pod 挂载卷在容器之间共享。

简而言之，以下是您应该了解 pod 的知识：

- Pod 是 Kubernetes 中最小的可部署单元。
- Pod 本质上是短暂的；它们可以被创建、删除和更新。
- 一个 Pod 可以有多个容器；一个 Pod 内可以运行的容器数量没有限制。
- 每个 Pod 都有一个唯一的 IP 地址。
- Pod 使用 IP 地址相互通信。
- Pod 内的容器使用不同端口，通过 localhost 进行连接。
- Pod 内运行的容器应具有不同的端口号，以避免端口冲突。
- 您可以为 Pod 内运行的每个容器设置 CPU 和内存资源。
- Pod 内的容器共享相同的卷挂载。
- pod内的所有容器都调度在同一个节点上；它不能跨越多个节点。
- 如果有多个容器，则在 Pod 启动期间，所有主容器都会并行启动。而 Pod 内的 init 容器按顺序运行。

# Pod YAML（对象定义）


现在我们对 Pod 有了基本的了解，让我们看看如何定义 Pod。 Pod 是原生 Kubernetes 对象，如果要创建 pod，则需要以 YAML 格式声明 pod 要求。您还可以使用 kubectl 命令创建 pod。我们将在后面的主题中看到这一点。


以下是创建 Nginx Web 服务器 Pod 的 Pod YAML 示例。此 YAML 只是 pod 的声明性所需状态。


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-server-pod
  labels:
    app: web-server
    environment: production
  annotations:
    description: This pod runs the web server
spec:
  containers:
  - name: web-server
    image: nginx:latest
    ports:
    - containerPort: 80
```


让我们来理解一下这个 pod YAML。一旦您了解了基本的 YAML，您就会更轻松地使用 Pod 和相关对象，例如部署（Deployment）、守护进程集（Daemonset）、状态集（Statefulset）等。每个 Kubernetes 对象都有一些通用的参数集。这些值会根据我们正在创建的对象类型而变化。


让我们看一下 Kubernetes pod 对象。


| **参数**     | **描述**                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | pod 的 API 版本。在我们的例子中，它是 v1                                                                                                       |
| kind       | 对象的种类，这里是 Pod                                                                                                                    |
| metadata   | 元数据用于唯一标识和描述容器– 标签（表示 Pod 的键值对集）。这类似于云环境中的标记。每个对象都必须使用标准标签进行标记。它有助于对对象进行分组。– name（Pod 的名称）– namespace （pod 的命名空间）– 注解（键值格式的附加数据） |
| spec       | 在“spec”部分下，我们声明了 pod 的所需状态。这些是我们希望在 pod 中运行的容器的规格。                                                                               |
| containers | 在容器下，我们声明 pod 内容器的所需状态。容器镜像、公开端口等。                                                                                               |


现在，我们已经查看了一个基本的 Pod YAML 清单。请务必注意，此清单支持许多参数。我们将通过动手实践的方法逐步探索这些附加参数。


现在我们已经对 Pod 有了基本的了解，让我们创建一个 Pod。


# 创建 Pod（实例）


您可以通过两种方式创建容器：

- 使用 kubectl 命令：主要用于学习和测试目的。命令有其自身的局限性。
- 声明性方法：使用 YAML 清单。正儿八经做项目时，使用 YAML 部署 Pod。

让我们看一下这两个选项。我们将创建一个具有以下内容的 NGINX pod：

- Pod 的名称是 web-server-pod
- 它应该有标签 app： web-server 和 environment： production
- 添加注释来描述容器。
- 使用 nginx:1.14.2 容器镜像。
- 公开容器端口 80。

### 使用 kubectl 命令创建 Pod


对于所讨论的 pod 要求，这里是 kubectl 命令。


```shell
kubectl run web-server-pod \
  --image=nginx:1.14.2 \
  --restart=Never \
  --port=80 \
  --labels=app=web-server,environment=production \
  --annotations description="This pod runs the web server"
```


在这里，Pod 部署在默认命名空间中。您可以获取已部署的 pod kubectl 的状态。


`kubectl get pods`


部署容器后，您将看到容器正在运行状态，如下所示。在我们的示例中，pod 内只有一个容器。因此，它显示 1/1 准备就绪并正在运行。


![20240722202753.png](https://r2.ithuo.net/elog-image/df30b5767a266a43303a22f829b4b55c.png)


### 查看一个 Pod 的描述


如果你想知道正在运行的 pod 的所有细节，你可以使用 kubectl 来查看这个 pod 的描述。


`kubectl describe pod web-server-pod`


在以下输出中，您可以看到有关容器的所有详细信息。它的 IP 地址、命名空间、容器详细信息、QoS 类等。


![20240722202918.png](https://r2.ithuo.net/elog-image/a2c9db1975e7a943212e047bd7c6a779.png)


以下是 describe 命令显示的所有重要 Pod 信息的图形视图。


![pod-info.gif](https://r2.ithuo.net/elog-image/6f63fc870c3dd3bdaa7d7eb6d3990b1c.gif)


现在，让我们使用以下命令删除 pod。


`kubectl delete pod web-server-pod`


### 使用声明式 YAML 创建 Pod


在正儿八经做项目时，您主要是通过声明式方法创建 pod。让我们看看如何使用 YAML 清单创建一个 pod。创建一个包含以下内容的文件 nginx.yaml。


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-server-pod
  labels:
    app: web-server
    environment: production
  annotations:
    description: This pod runs the web server
spec:
  containers:
  - name: web-server
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```


现在，要部署清单，您需要使用文件名执行以下 kubectl 命令。


`kubectl create -f nginx.yaml`


我们是否应该记住每个参数来创建 YAML？不。您可以使用 –dry-run 标志创建 YAML 文件。下面是一个示例。


`kubectl run nginx-pod --image=nginx:1.14.2 --dry-run=client -o yaml`


您也可以通过重定向输出把它写入文件。


`kubectl run nginx-pod --image=nginx:1.14.2 --dry-run=client -o yaml > nginx-pod.yaml`


# 访问在 Pod 中运行的应用程序


现在我们有一个带有 Nginx Web Server 的运行 pod。整个想法是部署和访问在 pod 中运行的应用程序。


Kubectl 提供了一个端口转发命令，用于从本地工作站访问 Kubernetes 集群中正在运行的 Pod。


我们有一个正在运行的 pod，名为 web-server-pod。让我们通过 port-forward 命令访问它。


`kubectl port-forward pod/web-server-pod 8080:80`


您应该会看到如下所示的输出。


![20240722204229.png](https://r2.ithuo.net/elog-image/e0a8cb6c56364cc40f017a033545a38d.png)


现在，如果您进入浏览器并访问 http://localhost:8080，您应该会看到 Nginx 主页，如下所示。该网页由我们的 Nginx Web Server 的 pod 提供服务。


![20240722204323.png](https://r2.ithuo.net/elog-image/99b8ee4a00bfe681f48c1f7eb54c4c46.png)


现在，您可以通过按 CTRL+C 断开端口转发。


运行 kubectl port-forward 时，发生了什么：

- Kubectl 绑定本地系统中的指定端口。在我们的例子中，它是 8080。
- 然后，它与 Kubernetes 集群 API 通信，以建立到所需节点的隧道（单个 HTTP 连接），然后连接到指定的 Pod 和容器端口，即 80。

> 注意：kubectl 端口转发更像是一个调试实用程序。您需要使用 Kubernetes Service 对象来公开在 Pod 中运行的应用程序。我们将在另一篇博客中实际了解 Kubernetes 服务概念


# 访问 Pod Shell


我们已经学习了如何访问在 pod 中运行的应用程序。现在，如果您想访问 pod shell，该怎么办？在许多用例中，您需要终端访问容器。一个主要场景是调试和故障排除。这就是 kubectl exec 命令派上用场的地方。您可以使用以下命令访问 web-server-pod 的 shell。


`kubectl exec -it web-server-pod -- /bin/sh`


在以下输出中，我正在 pod 内执行 whoami 命令。


![20240722204827.png](https://r2.ithuo.net/elog-image/bec07a57bc841f71af0da065c6c8330f.png)


> 注意：容器镜像通常被设计为非常小，因此您可能会发现无法执行在普通 Linux 系统上执行的所有命令。此限制取决于镜像的生成方式以及容器镜像中包含的工具程序。


# Pod 生命周期


关于 Pod 你应该知道的另一个重要概念是它的生命周期。


Pod 通常由 ReplicaSet Controller、Deployment Controller 等控制器管理。使用 YAML 创建单个 Pod 时，它不受任何控制器的管理。在这两种情况下，Pod 都会经历不同的生命周期阶段。


以下是 Pod 生命周期阶段。

- Pending：表示 Pod 创建请求成功，但调度正在进行中。例如，它正在下载容器映像。
- Running：容器已成功运行并按预期运行。例如，Pod 是服务客户端请求。
- Succeeded：容器内的所有容器都已成功终止。例如，成功完成 CronJob 对象。
- Failed：所有 Pod 都已终止，但至少有一个容器因失败而终止。例如，由于配置问题，在 Pod 内运行的应用程序无法启动，并且容器以非零退出代码退出。
- Unknown：容器状态未知。例如，集群无法监控 Pod 的状态。

如果描述容器，则可以查看容器的阶段。下面是一个示例。


![20240722205216.png](https://r2.ithuo.net/elog-image/1b690997546ceb41acd6764fe3721609.png)


如果您想了解更多信息，请查看有关 [Pod 生命周期](https://devopscube.com/kubernetes-pod-lifecycle/) 的详细博客。


# Pod 功能特性


我们部署了一个简单的 Nginx pod，配置非常少。但是，Pod 在资源管理、配置、机密、可用性、安全性等方面具有许多功能。


如果你是初学者，一口气学会所有这些概念就太过分了。在实际用例中使用与 Pod 相关的对象（如部署）时，学习所有这些概念更有意义。


此外，您需要通过实际用例详细了解每个功能。以下是与容器相关的主要功能。

- Resource Requests and Limits: 资源请求和限制：Pod CPU/内存分配
- Labels: 标签：附加到 Pod 的键值对，用于对资源进行分类。
- Selectors: 选择器：根据标签对资源进行分组。
- Liveness, Readiness, and Startup Probes: 存活、就绪和启动探测：容器运行状况检查
- ConfigMaps: 用于配置管理
- Secrets: 用于密钥管理
- Volumes: 卷：持久性数据存储
- Init Containers: 初始化容器：在主容器之前运行的容器。
- Ephemeral Containers: 临时容器：添加到容器中的临时容器，用于调试或故障排除目的。
- Service Account: 服务帐户：限制对 Kubernetes 对象和资源的访问。
- SecurityContext: 主机权限和特权。
- Affinity and Anti-Affinity Rules: 亲和和反亲和规则：跨节点的 Pod 放置控制
- Pod Preemption & Priority: Pod 抢占和优先级：设置 Pod 调度和逐出的优先级。
- Pod Disruption Budget: 容器中断预算：在自愿中断期间需要运行的容器副本的最小数量。
- Container Life Cycle Hooks: 容器生命周期钩子：根据 Pod 的生命周期阶段变化执行自定义脚本。

# 全面的 Pod YAML 配置


> 注意：我给出以下示例仅供参考。不要被所有参数所淹没。它并不像看起来那么复杂。一旦你了解了基础知识，就会很容易。


如果您添加我上面列出的 pod 功能，您将获得一个全面的 pod YAML 配置，如下所示。此外，这些选项将与 Deployment、Statefulset 等对象一起使用。


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-server-pod
spec:
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', 'echo "Init container started!"']
  containers:
  - name: web-server
    image: nginx:latest
    ports:
    - containerPort: 80
    volumeMounts:
    - name: shared-data
      mountPath: /usr/share/nginx/html
    - name: secret-volume
      mountPath: /etc/my-secret
    - name: configmap-volume
      mountPath: /etc/config
    securityContext:
      capabilities:
        add: ["NET_ADMIN", "SYS_TIME"]
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
    readinessProbe:
      httpGet:
        path: /index.html
        port: 80
      initialDelaySeconds: 5
      periodSeconds: 5
    livenessProbe:
      httpGet:
        path: /index.html
        port: 80
      initialDelaySeconds: 15
      periodSeconds: 20
    startupProbe:
      httpGet:
        path: /index.html
        port: 80
      failureThreshold: 30
      periodSeconds: 10
    lifecycle:
      postStart:
        exec:
          command: ["/bin/sh", "-c", "echo 'PostStart'"]
      preStop:
        exec:
          command: ["/bin/sh", "-c", "echo 'PreStop'"]
  serviceAccountName: nginx-service-account   
  securityContext:                        
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  shareProcessNamespace: true
  volumes:
  - name: shared-data
    emptyDir: {}
  - name: secret-volume
    secret:
      secretName: nginx-secret
  - name: configmap-volume
    configMap:
      name: nginx-configmap
```


# Pod 关联对象


在 Kubernetes 上运行应用程序时，我们不会运行单个 pod。因为 Kubernetes 是关于扩展和维护 Pod 的可用性的。因此，如果您运行单个 Pod，它将是单点故障。因为 Pod 本身无法直接缩放。正如我们在 Kubernetes 架构中所讨论的，我们需要像 Replicaset 这样的控制器来确保始终运行所需数量的 Pod。


Kubernetes 具有与不同用例相关的 Pod 的不同类型的对象。


![pod-objects.gif](https://r2.ithuo.net/elog-image/83e2a69bd7b70b6cf0bab473ece1acab.gif)


以下是与 Pod 相关的重要对象。

- Replicaset：保持一组稳定的 Pod 副本在任何给定时间运行。
- Deployment: 部署：运行无状态应用程序，如 Web 服务器、API 等
- StatefulSets: 运行有状态应用程序，如分布式数据库。
- Daemonsets: 守护程序集：在所有 Kubernetes 节点上运行代理。
- Jobs: 作业：用于批处理
- CronJobs: 计划作业

# 总结


在本指南中，我们了解了 Kubernetes Pod 的所有核心概念。正如我在介绍中提到的，在 kubernetes 生产级实现方面，pod 有很多功能。


> 本文翻译自：https://devopscube.com/kubernetes-pod/ 

