---
category: Tech Setup & Configuration
tags:
  - ProgramEnv
  - PowerShell
status: 已发布
day: '2024-04-01'
catalog: []
slug: windows-script-assist-modify-hosts
title: windows 脚本辅助修改hosts
urlname: 142fe2d0-e85e-4776-ad94-ab1c13fb503c
date: '2024-04-14 16:52:00'
updated: '2024-05-16 00:16:00'
image: 'https://www.notion.so/images/page-cover/nasa_space_shuttle_columbia_and_sunrise.jpg'
published: 2024-04-01T08:00:00.000Z
---

在Windows系统的软件中使用代理软件，通常监听127.0.0.1:xxxx固定地址，但如果使用了虚拟机，容器，Linux子系统等支持自定义配置代理的软件后，在配置代理会比较繁琐，所以我试着在hosts文件中配置映射，虚拟域名对应经常变动的ipv4地址，例如192.168.1.65 mylocal.ip，这样其他软件只需要配置一个代理地址 mylocal.ip:port


由于经常出差，切换网络环境之后，IP网段都会发生变化，所以我需要有个脚本来辅助完成自动修改hosts文件，以便于我的所有软件都可以正常走代理请求


Windows环境下，最好的脚本语言是powershell，下面我将使用powershell编写脚本来获取IP地址并配置到hosts文件中


```powershell
if (-Not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')) {
    if ([int](Get-CimInstance -Class Win32_OperatingSystem | Select-Object -ExpandProperty BuildNumber) -ge 6000) {
        $CommandLine = "-File `"" + $MyInvocation.MyCommand.Path + "`""
        if ($MyInvocation.UnboundArguments) {
            $CommandLine += " " + $MyInvocation.UnboundArguments
        }
        Start-Process -FilePath PowerShell.exe -Verb Runas -ArgumentList $CommandLine
        Exit
    }
}
#Start-Process -Verb runAs -FilePath powershell

# 获取无线网卡的IPv4地址
$ip_address = (Get-NetIPAddress -InterfaceAlias "WiFi" -AddressFamily IPv4).IPAddress

# 检查hosts文件中是否已存在"mylocal.ip"的映射,如果存在则更新,否则添加
$hostsFile = "C:\Windows\System32\drivers\etc\hosts"
$linePattern = "mylocal.ip"
$newLine = "$ip_address mylocal.ip"

$hostsContent = Get-Content $hostsFile
$lineExists = $hostsContent | Select-String -Pattern $linePattern -Quiet

if ($lineExists) {
    $updatedContent = $hostsContent | ForEach-Object {
        if ($_ -match $linePattern) {
            $newLine
        } else {
            $_
        }
    }
    Set-Content -Path $hostsFile -Value $updatedContent -Force
    Write-Host "Updated mylocal.ip with IP address $ip_address in hosts file."
} else {
    Add-Content -Path $hostsFile -Value $newLine
    Write-Host "Added mylocal.ip with IP address $ip_address to hosts file."
}
# 添加暂停语句以显示输出结果
Read-Host "Press Enter to exit"
```


代码的作用会申请管理员权限，并且获取IPv4地址，之后检测hosts文件中是否存在mylocal.ip映射，并进行修改或新增映射


当切换网络环境后，可以直接执行ps1脚本，就能继续正常使用代理开启畅游。

