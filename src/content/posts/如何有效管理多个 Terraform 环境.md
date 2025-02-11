---
category: TechKnowledgeShare
tags:
  - Terraform
  - DevOps
status: 已发布
catalog: []
slug: how-to-effectively-manage-multiple-terraform-environments
title: 如何有效管理多个 Terraform 环境
urlname: a7b2a5aa-22f5-4b72-bb6b-b96ee84d89eb
date: '2024-05-07 00:46:00'
updated: '2024-07-29 00:16:00'
image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-05-22T08:00:00.000Z
---

### 介绍


在这篇文章中，我们讨论使用 `Terraform` 管理多个环境的各个方面。通常我们使用 `Terraform` 将基础设施定义为代码。然后使用 `Terraform CLI`，我们在选择的云平台中创建指定的基础设施组件。


## 多种环境的基础设施


下面列出了使用 IaC 管理多个环境的基础设施的普遍期望要求：

1. 应该可以使用相同的 IaC 配置来管理生产和非生产环境。
2. 某些非生产环境（例如开发、QA、测试版或 UAT）应该与生产环境相同且缩小版本，并且永久存在。
3. 团队成员应该能够创建、管理和销毁与生产环境相同的临时环境。
4. 并非所有环境都在同一云帐户或订阅中创建。

这里的关键之一是对所有环境中的基础设施使用相同的 `Terraform` 配置模板。因此，引入对 IaC 的修改没有太大关系，但在这篇文章中，我们将重点讨论如何使用 `Terraform` 工作区、`Git` 分支和 `Spacelift` 堆栈有效管理各种环境。


## 1.Terraform工作区


Terraform 提供了工作区功能，使您能够使用相同的配置创建和管理多个相同的、按比例缩小的环境。通过这种方式创建的多个环境是完全隔离的，不会以任何方式相互干扰。这是我们期待的一个关键功能。让我们看看如何利用它。


Terraform 工作区与 Terraform Cloud 工作区不同。在 Terraform Cloud 中，工作区类似于“项目”，对应于 Terraform 配置存储库。除了存储和管理状态信息之外，它们还管理变量、凭证、历史跟踪等，以支持端到端 Terraform Cloud CI/CD 工作流程。


### 用于使用工作区的 Terraform CLI 命令


Terraform 工作区命令的基本用法 - 每个命令都遵循以下简单格式：


`terraform 工作空间 <命令>`

- show - 输出当前选定的工作区。始终会选择一个名为“default”的默认工作区。
- list - 输出当前可用于此配置的工作区列表。
- new <name> - 创建具有所需名称的新工作区。
- select <名称> - 选择特定工作区。
- 删除<名称> - 删除工作区。

下面的 CLI 输出显示了管理工作区的示例。检查当前选定的工作区（默认），然后创建一个名为 beta 的新工作区，列出所有工作区，并删除 beta 工作区。


```plain text
% terraform workspace show
default
% terraform workspace new beta
Created and switched to workspace "beta"!

You're now on a new, empty workspace. Workspaces isolate their state,
so if you run "terraform plan" Terraform will not see any existing state
for this configuration.
% terraform workspace list
  default
* beta

% terraform workspace select default
Switched to workspace "default".
% terraform workspace delete beta
Releasing state lock. This may take a few moments...
Deleted workspace "beta"!
% terraform workspace list
* default
```


### 工作空间插值


要使用相同的配置管理多个缩小的环境，我们需要一种方法让 Terraform 知道我们正在使用哪个工作区。这有助于正确设置配置。比如，我们可能希望为由特定工作区管理的环境配置更多的 EC2 实例，并为其他环境配置更少的实例。


Terraform 工作空间插值序列为我们提供了一种实现这种动态变化的方法。通过访问所选工作区的值，我们可以使用多个构造和运算符来创建具有所需规模和其他自定义属性的环境。


考虑下面的例子。此处，`Terraform` 配置旨在在 AWS 中创建 EC2 实例。但是基于所选工作空间的计数属性定义了要创建的实例数量。这里，“`terraform.workspace`”插值序列用于访问它。


```plain text
resource "aws_instance" "my_vm" {
 count         = terraform.workspace == "default" ? 3 : 1
 ami           = var.ami //Ubuntu AMI
 instance_type = var.instance_type

 tags = {
   Name = format("%s_%s_%s", var.name_tag, terraform.workspace, count.index)
 }
}
```


如果选择“默认”工作区，则将创建三个 EC2 实例，否则仅创建一个。这只是一个例子。我们可以使用更复杂的变量和运算符来管理更多的环境。


### 基础设施和应用程序开发


端到端产品开发需要基础设施和要部署在基础设施上的应用程序。通常相应的单独团队负责各自的任务。


在微服务世界中，由于依赖性和资源限制，在本地计算机上测试和开发应用程序可能并不总是可行。即使在将更改部署到“永久”开发环境之前，应用程序团队成员也可能需要旋转临时环境来运行他们的测试用例。


在这种情况下，无需担心 `Terraform` 源代码，他们可以简单地克隆存储库，然后使用工作区功能创建自己的临时环境。此功能对于应用程序开发团队非常有用，可以在将更改合并到开发并在此处推广之前单独运行其测试用例。


### 帐户和凭据


多个环境通常使用多个云帐户或订阅进行管理。云平台还实施“组织”概念，从单个根帐户管理多个帐户。该根帐户负责所有管理活动，例如计费、访问配置等。


当“应用”Terraform 配置时，将根据目标帐户的提供程序配置验证并执行更改。您可以在下面找到使用共享凭证文件的 AWS Terraform 提供程序配置。


```plain text
provider "aws" {
  shared_config_files      = ["/path/to/.aws/conf"]
  shared_credentials_files = ["/path/to/.aws/creds"]
  profile                  = "profile_name"
}
```


在这里，我们对配置文件名称进行了硬编码，以便 `Terraform` 使用目标帐户的适当凭据。在这里，我们还可以利用工作区插值序列从共享凭据文件中动态选择配置文件名称。此外，AWS 还提供了一种在目标账户中担任 IAM 角色的方法。


### 工作空间：优点和缺点


当涉及使用 `Terraform` 管理多个环境时，`Terraform` 中的状态管理可能是一个敏感话题。但是`Terraform` 提供的工作区管理通过在当前设置的后端中创建子目录来在幕后处理此问题。


状态管理也可能是一个限制因素，因为所有状态文件都存储在同一个后端目录中。这意味着用于处理 terraform 配置的所有插件也会在每个工作空间中复制。


`Terraform` 工作区提供了一种创建瞬态环境的好方法，只需学习一些命令即可测试基础架构更改。


依靠内部接线——使用插补序列。如果代码已经构建，引入工作区插值依赖项可能需要花费一些精力。


## 2. Terragrunt


`Terragrunt` 是一个 `Terraform` 包装器，旨在填补大规模 `Terraform` 配置方面的空白。


管理云基础设施时，通常会拥有多个环境，例如开发、测试、阶段和生产。这些环境通常具有相似的基础设施，但其变量的配置值不同。 `Terragrunt` 通过提供 DRY 配置、处理依赖关系和简化远程状态管理，帮助您有效管理这些多个环境。


### 使用 Terragrunt 进行 DRY 配置


`Terragrunt` 的主要优点之一是它能够保持配置干燥。在处理多个环境时，特定于环境的 Terraform 配置之间通常会存在大量配置重复。


Terragrunt 通过重用 Terraform 配置解决了这个问题。使用其包含选项，您可以从父 `terragrunt.hcl` 文件继承配置，使您能够定义一次通用配置，然后进行特定于环境的覆盖，从而减少重复并最大限度地减少人为错误。


### 依赖管理


随着基础设施变得越来越复杂，资源之间的依赖关系变得不可避免。例如，可能需要在依赖数据库的应用程序服务器之前设置数据库。在某些用例中，这些资源是在不同的 Terraform 配置中创建的。 `Terragrunt` 的依赖关系块允许您显式地表达这些模块间依赖关系。


通过这样做，您可以确保按照正确的顺序创建或销毁配置，并尊重依赖关系链。此功能在多环境设置中特别有价值，在多环境设置中，确保跨环境资源配置的正确顺序变得至关重要。


### 简化的远程状态管理


特别是在多个环境中，由于手动配置和潜在的不一致，`Terraform` 中的远程状态管理可能会成为一项挑战。 `Terragrunt` 通过自动为您管理后端配置来简化此过程。它确保每个环境的状态存储在单独的隔离位置（例如，不同的 S3 存储桶路径），从而增强安全性和分离性。这种自动化方法减少了手动开销，并最大限度地降低了与管理各种环境的状态相关的风险。


`Terragrunt` 增强了 `Terraform` 的功能，特别是对于大规模、多环境基础设施，使环境管理更具可扩展性、可维护性且不易出错。


## 3.Git 分支


在本节中，我们将探讨使用 Git 分支来管理多个环境的可能性，并确定为什么它可能不是最佳策略。下图旨在满足本文章简介中所述的要求。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--37_CkQhf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmultiple-terraform-env-with-git-branches.png%26w%3D3840%26q%3D75)


发展的两个方面——基础设施和应用——分别以绿色和蓝色突出显示。这里表示的分支策略是使用 Terraform 配置用于各种目的的粗略应用。我们将在讨论 Git 分支的各个部分时进一步探讨这一点。


### Git 的目的


简而言之，Git 旨在协调整个团队的开发工作。它维护各种版本的源代码和部署包版本。主分支通常包含经过充分测试的功能，适用于任何给定软件的一般用途。


为了执行开发活动或以错误修复、功能或增强形式引入任何更改，将创建主分支的副本，在该副本上执行修改、重建、部署到子生产环境，并在合并之前进行彻底测试对主分支的更改。


### 环境的 Git 分支


考虑到这一点，使用 Git 分支来管理多个环境是可能的，而且相当诱人——每个环境一个分支。在给定的图中，基础设施开发团队在三个分支上工作：

1. 主要 - 用于管理生产基础设施设置。
2. QA - 用于管理 QA 基础设施设置，合格的用户在其中执行 UAT 测试。
3. Dev - 用于管理开发基础设施设置，其中首先发布功能并进行单元测试。

在较高级别上，从主分支分支并创建相同配置的副本来创建 QA 和开发环境是有意义的。


### 这种方法的问题


在源代码级别，这一切都是有意义的。当我们将 Terraform 的更深层次视为 IaC 时，我们需要担心一些关键点：

1. 状态文件管理和关联的远程后端。
2. 缩放方面转化为特定于环境的属性。
3. 多个帐户的凭据。

这里考虑的环境是单独的基础设施部署。每个环境自然都有自己的状态信息，需要进行远程安全管理。远程后端在 terraform 资源块中定义。


下面的示例使用 `AWS S3` 后端。


```plain text
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.18.0"
    }
  }

  backend "s3" {
    bucket         = "tf-state-bucket"
    key            = "terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "tf_state_lock"
  }
}
```


假设这是生产环境（即主分支）使用的配置，当我们从主分支分支时，后端配置也会被复制。所有 `Terraform CLI` 命令都将假定此后端对于所有其他副本（分支）都是相同的，这是不可取的，并且可能会被证明风险很大。事实上，运行任何 Terraform 命令（例如计划、应用、销毁）都将引用生产状态文件，甚至对生产执行操作。


如果我们手动修改后端配置以针对 `QA` 和开发环境使用不同的后端，则会违背 `Git` 的全部目的。 `Git` 合并会引发冲突，并要求开发人员通过选择后端之一来解决这些冲突。


这也适用于 `.tfvars` 文件中定义的特定于环境的属性值。各种环境的扩展方面是通过变量进行管理的——更具体地说，是`.tfvars` 文件。现代 Git 工作流程通常要求在任何分支之间进行推送和拉取。在这种方法中这可能是不可能的。


提供商配置可以拥有多个别名来表示多个云提供商帐户和区域中的部署。这也被 Git 的优点所取代。


### CI/CD 管道


大多数远程 Git 存储库（尤其是 `GitHub Actions` 和 `Gitlab CI/CD`）都提供了以 `CI/CD` 管道形式引入自动化的能力。


就源代码版本控制而言，使用远程 Git 存储库并定义同时处理凭据的自动化管道是有意义的。


在我们的示例中，如果我们在特定分支上进行提交或批准拉取请求，则可以运行特定于分支的管道，该管道使用特定于环境的凭据将更改应用到正确的目标环境。


但是即使这些解决了凭据问题，特定于环境的提供程序配置和属性仍然是 Git 工作流程的一部分。这与 `Terraform` 期望这些配置用于我们预期更改的方式不一致。CI/CD 管道功能是任何其他 Terraform 工作流程都可以利用的功能。因此，这不会为依赖 Git 分支带来任何特定的优势。


### 应用开发


现代应用程序开发基于微服务、容器和函数。取决于各种因素，本地开发环境通常是开发团队遇到的问题。一个简单的例子是，当运行一组相互依赖和其他因素的容器时，开发机器上的可用资源可能不够。


使用 `Terraform` 作为 IaC 确实有助于旋转临时和隔离的环境来为开发人员执行单元测试。还可以从所需的源分支（主分支、QA 或开发分支）创建临时 Git 分支，并创建一个隔离的缩小环境 - 如图中的“Temp2”部署所示。


此外，如果任何应用程序功能依赖于仍在开发中的特定基础设施组件，应用程序团队可以选择从基础设施开发的“dev”分支进行分支，其中包含预期的更改。它由图中的“Temp1”部署表示。


应该注意的是，使用 Git 分支策略管理环境取决于正确的分支策略到位的总体假设。例如，应用程序开发团队创建的分支可能不会合并到基础设施开发团队的任何分支中。


如果 Terraform 有办法知道当前签出了哪个分支，那么采用 Git 分支策略会更有意义。使用 Terraform 工作区时，工作区插值序列提供了这个确切的函数。


💡您可能还喜欢：

- [如何使用 GitHub Actions 扩展 Terraform 部署](https://spacelift.io/blog/github-actions-terraform)
- [使用 Terraform 自动化基础设施部署](https://spacelift.io/blog/terraform-automation)
- [Terraform 云/企业定价 – 层级概述](https://spacelift.io/blog/terraform-cloud-pricing)

## 4. Spacelift


在生产场景中，我们需要利用 `Terraform` 工作区来管理各种环境，并利用 `Git` 分支来维护 `IaC` 源代码本身。


然而，正如本文前面所讨论的，使用工作区和分支可能会带来严重的风险。这就是 Spacelift 的用武之地。`Spacelift` 提供了一种简化的方法来满足我们的要求，如本文简介中所述。


### Git 集成


借助 `Spacelift`，我们可以与 `GitHub` 和 `Gitlab` 等远程 Git 存储库集成。这允许访问使用分支在“通常”开发流程中开发 Terraform 配置的存储库。我说“通常”是因为我们不必担心上一节中讨论的 Git 分支方法中的挑战。


### 堆栈


堆栈是使用 `Spacelift` 时最重要的概念之一。 `Spacelift` 中的 `Stack` 表示基于给定 `Terraform` 配置的部署。我们可以通过从集成 Git 后可用的所有存储库中选择合适的 Git 存储库来创建 `Stack`。


我们还可以选择选择存储库的所需分支来创建我们的堆栈。在下面的屏幕截图中，我们在 Spacelift 中创建了一个代表生产环境的 Stack。


所选存储库包含我们要在生产环境中创建的所有基础设施组件的 Terraform 配置。请注意，我们选择了生产环境对应的主分支。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--A9T-lXDi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-spacelift-stacks.png%26w%3D3840%26q%3D75)


同样，可以通过选择相同的存储库但不同的分支来为我们需要的所有环境创建堆栈。


例如，下面显示的 `Stack` 代表除 `Prod` 之外的 `Dev` 和 `QA` 环境，它们映射到同一 Git 存储库的相应分支。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--DGpvbFVp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-spacelift-stacks-example.png%26w%3D3840%26q%3D75)


特定分支上的任何新提交或合并拉取请求都将触发 Spacelift 中相应堆栈的部署。这完美地满足了为基础设施团队提供开发体验的需求。

1. 基础设施开发可以在“dev”分支上进行，反映开发环境的变化。
2. 当更改在开发上得到确认后，这些更改可以合并到 QA 分支中，该分支最终会将更改部署到 QA 环境中。
3. 接下来是主分支上的拉取请求，这将反映生产环境的变化。

### 使用云集成管理多帐户部署


AWS 等云平台可以安全地与 Spacelift 集成，以根据 Terraform 配置执行操作。工作人员需要此访问权限才能对云平台进行适当的 API 调用。就 AWS 而言，Spacelift 云集成采用承担角色策略来提供临时访问。


配置云集成后，每个堆栈都与这些集成相关联，以便部署针对适当的帐户。


在下面的截图中，我们配置了所有堆栈使用的单个 AWS 帐户。其实也可以配置更多。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--FK9l7K8K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-aws-integration.png%26w%3D3840%26q%3D75)


下面的截图显示了云集成如何与 `Stack` 关联。在本例中，我们的开发环境堆栈当前正在使用上面配置的 AWS 开发集成。同样我们的 QA 和 Prod 堆栈可以配置自己的帐户。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--AqKlj4yF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-QA-and-Prod-stacks.png%26w%3D3840%26q%3D75)


### 使用上下文管理扩展


每个 `Stack` 都有一组 `Terraform` 在运行时使用的环境变量。最常见的示例是 `AWS` 密钥和访问密钥。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--L8jMPyCz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252FManage-scaling-using-Contexts.png%26w%3D3840%26q%3D75)


此外，我们可以定义上下文——一组预定义的环境变量。上下文独立于堆栈。因此可以在多个堆栈中重用它们。在示例中，我们配置了一些预定义的上下文，它们为相应的堆栈提供环境变量。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--DRqnIJYL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-Contexts.png%26w%3D3840%26q%3D75)


就缩放方面而言，上下文可以提供重要信息，我们的 Terraform 配置可以创建全尺寸或缩小尺寸的版本。有两种方法可以做到这一点：

1. 提供单个标志值，然后在 `Terraform` 代码中解释该值以创建具有适当规模的云组件。
2. 提供上下文中的所有属性值，然后 `Terraform` 代码可以轻松解释这些值以设置适当的缩放属性。

我们将使用第一种方法。在这里，在每个上下文中，我们都为名为“`workspace`”的变量指定了环境值。不要将此与 `Terraform` 工作区功能混淆。我们可以选择我们选择的任何名称。这里的工作空间变量为 `Stacks` 提供上下文，指示正在配置哪个环境。下面的示例显示了如何将生产环境的工作区值设置为“prod”。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--T-8zE9iI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fcontexts-production-env.png%26w%3D3840%26q%3D75)


然后Terraform 配置会自动解释该值，并在触发生产堆栈时旋转三个 EC2 实例。对于其余的，它会自动创建一个实例。


```plain text
resource "aws_instance" "my_vm" {
  count         = var.workspace == "prod" ? 3 : 1
  ami           = var.ami //Ubuntu AMI
  instance_type = var.instance_type

  tags = {
    Name = format("%s_%s", var.name_tag, var.workspace)
  }
}
```


### 附加堆栈


如前所述，应用程序开发团队可能希望创建自己的隔离环境来测试他们的开发。为了满足这一要求，团队成员可以基于相同的 Git 存储库和他们选择的分支创建自己的堆栈。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--Gg2YJfPj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252FAdditional-stacks.png%26w%3D3840%26q%3D75)


基础设施开发团队可以提供预定义的上下文，以供应用程序开发团队使用。


在我们的例子中，“我的堆栈”堆栈使用预定义的上下文“功能测试”，这为他们提供了适当的扩展限制，而无需担心 Terraform 代码。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--Oe06gYEN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252FFeature-Testing.png%26w%3D3840%26q%3D75)


### 部署堆栈


我们现在已经创建了四个堆栈。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--RYbva_L_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-spacelift-four-stacks-to-deploy.png%26w%3D3840%26q%3D75)


让我们触发所有这些的部署并查看结果。为了简单起见，我为所有堆栈设置了相同的区域。


下面的屏幕截图显示了所有运行如何成功完成。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--rZml358a--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fmanage-multiple-terraform-env-spacelift-four-stacks.png%26w%3D3840%26q%3D75)


要确认相应的 EC2 实例创建，请参见下面的屏幕截图。堆栈已为产品创建了三个实例，并为 QA、开发和功能各创建了一个实例。


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--3yiIDLQ---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://spacelift.io/_next/image%3Furl%3Dhttps%253A%252F%252Fspaceliftio.wpcomstaging.com%252Fwp-content%252Fuploads%252F2023%252F01%252Fthree-instances-for-prod.png%26w%3D3840%26q%3D75)


查看 [Spacelift Stack Dependencies v.2](https://spacelift.io/blog/introducing-stack-dependencies-v2)。


## 总结


通过本文，我们介绍了`Terraform`  结合`Spacelift`来管理线上多套环境，并采用一个具体的生产场景来举例说明。


`Spacelift`  是一个先进的基础设施即代码（IaC）管理平台，旨在简化和增强跨各种云提供商的基础设施部署和管理。它支持多种 IaC 工具，包括 `Terraform`、`OpenTofu`、`Terragrunt`、`CloudFormation`、`Kubernetes`、`Ansible` 和 `Pulumi`，使其成为 DevOps 工程师和平台团队的多功能解决方案。

