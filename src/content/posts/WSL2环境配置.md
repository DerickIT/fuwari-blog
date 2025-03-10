---
category: TechSetup&Configuration
tags:
  - ProgramEnv
  - CloudNative
  - Docker
  - Web3
status: 已发布
catalog: []
slug: wsl2-environment-configuration
title: WSL2环境配置
urlname: bd266599-5cec-40ed-b803-521fe8cccdde
date: '2023-11-27 15:37:00'
updated: '2024-09-07 17:43:00'
image: 'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg'
published: 2023-11-01T08:00:00.000Z
---

### 引言


WSL2是Windows系统上的Linux子系统的一个新版本，它可以让用户在Windows上运行Linux环境和应用程序，而不需要安装虚拟机或双系统。WSL2使用虚拟化技术在轻量级虚拟机中运行Linux内核，提供了更好的文件系统性能和更完全的系统调用兼容性。WSL2还支持运行图形应用程序和GPU加速等功能。WSL2可以实现文件、指令和网络的互通，方便用户在Windows和Linux之间切换和操作。WSL2是一个非常强大和灵活的工具，可以让用户享受Linux的优势，同时保留了Windows的体验。


### 启用Hyper-V和适用于Linux的Windows子系统


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=d0b4302f451f62f16eb9225bca8f6492877734fd452e1babd9623a45613ad091&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=f53ec4d715fb55be3b6914206cee35a7cba4142e077e35fb480227911daff230&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=d2bde36659e2f39eaf52dba6893b536b771a86a72a28e270cbd12d016ee07e70&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=766b120c59702f689bbd0d625e75002a72bb706b4381d37d8bf6a30097cd07b8&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=da693095184f247d96fbdacdf1b415e9b781ab77ebab804ee185cdac01544ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4ADS4I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T053339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3uN%2Bv1eohnVIkXQgryso%2ByxlWO%2BhM0vHZ7uptXPYWAiEApEt9IX5QWnFZtUHUYfoeec41Cvn5aNaMHYPmWQjuFXgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FoVaFrDIIoPWnC6ircA%2BkTzj9iL29kN7JJwbZvpqWvqAHSEtJj6TNfWA%2Fs1q%2B%2BHS7JpSNXcNofXzUNtvGETXRpgnCOHvxq1jhc3JTAIosO2zvFF%2BbS6aCuk6JNRHTagx1O5RPDHptUVR6vX8mtq3%2Fzv25NfkLS%2F8x1vKpDJin3N78NVDtAkLuQj73SwWR7Fwg%2FA9NRxQQtSCioc82M9eugOKOxD7Owc50zeutP6tfc%2BRuBj95%2BWA4wkFgYwT5s7nXigpjRfLeTQBL%2FnatEB5aD2t7GV7xhHUNzY%2BRB0z%2FvNBfWJdai%2FmG9ZVPQXoNHk3I5H6cJGjuFS%2BWIC3U9RwkxOMdoaJEk2xhUOe%2BZlus38%2FkV2CSgYhfTG%2BbjvS7LppXNvf6%2FQ6%2BEeNkChRyMU3GlzO4LIGoBaQu1%2FoVT96hWFoj4zAZdz8Bglm690%2Bl6MQRRPVpfJveK4tBX3GgFVkVtyFASTA7FfCRvLzusv6sgSIx9whayct6GBqxAF5oZgjbnJP%2FCi2JS6AEwH2z1vN8pn1id9%2FnUpMbOJvC66LzFM2%2BYWVFzJrN6iUmG0lyMtH0ZLjbaui3HYyZ55YGd6%2BG%2FJZpR8GS84%2BI7tcJ%2FIJWmsHrx%2FWcQK9jsATMt5Lf%2BM%2FB525g2BhwSvo0wMJToub4GOqUBdwKVteJLwTqZ4hfnhG4fPIGRI1yYn2bnL%2F4jHlc8DqEs1zP2S1eujMktxOeIkdbwCENc2%2FBVpufbigyOCsvVL9v0TL06Ro6yYNYsqBMj992a24PQ3Aw5YLdnq3VrHU0y%2BZUez4hchKF2zes2%2BOUtSQdk%2FXBhJHhZwcXMIyXMbWhX02BmeTWGexkOSm1rdp6XykP0uegTIN8N5NmWSHtTOm38ZttX&X-Amz-Signature=50f41c54abb44f6bacfe0d7af0285c29aed4bbbb2280fddfba5404e9c35d6621&X-Amz-SignedHeaders=host&x-id=GetObject)

- 默认安装Ubuntu发行版，目前时Ubuntu2204
- 若要更改安装的发行版，请输入：`wsl --install -d <Distribution Name>`。 将 `<Distribution Name>` 替换为要安装的发行版的名称。

### Q: 如果安装wsl2时出现error code is 0x8007019e


重新检查是否开启hyper-V和Linux 在Windows的子系统，然后执行如下命令，重装默认系统

> wsl --install
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> wsl --set-default-version 2

## 自定义配置


```shell
# Settings apply across all Linux distros running on WSL 2
[wsl2]
networkingMode=mirrored
dhcp=true
dnsTunneling=true

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=4

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
#kernel=D:\\Drivers\\WSL\\mykernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
#kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=4GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=D:\\Drivers\\WSL\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
#pageReporting=false

# Turn on default connection to bind WSL 2 localhost to Windows localhost
#localhostforwarding=true

# Disables nested virtualization
#nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
#debugConsole=true

# Enable experimental features
[experimental]
autoProxy=true
bestEffortDnsParsing=true
useWindowsDnsCache=false
#   autoMemoryReclaim=gradual
#   networkingMode=mirrored
#   dnsTunneling=true
#   #firewall=false
#   autoProxy=true
#   sparseVhd=true
```


### 设置WSL最佳实践


[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)


[开始通过 WSL 使用 VS Code | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode)


[Work in Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl-tutorial)

