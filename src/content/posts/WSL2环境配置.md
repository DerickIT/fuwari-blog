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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=5f87c675e4c6f5ed6191a48c47aeffe418523c835f7a76aa5dd9897d3c842878&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=b0fa223bbb05e1d96086168064b4e160388950420b405e4d8d7a02052b01829c&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=b187c18b9141f22da92b33c6c5a669e7334aeff4a4a75536517e008a72c0e87d&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=8c63a2e14c4e15570debef40f32c0c625b23c00853a02fea01f951eb495da2bb&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=0b998fcb3721316c85e19a0fe9042ec9f981beaa80190fef739f6e5cb66e31d2&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDYV5Z3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T213314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4VG8KdnLGxeU4RKv8VF%2FTUH16o6kFIBf6VfNKaKDRVgIgdnWEMigvazANhx565rBxVx8%2FAwvqMbKKvuBIJ20qvy0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAgIbE5W%2FF25U94K%2FyrcAw%2FQd%2BNXc0FFumIac0cdwbJWbu8yJ2ccZpFnWbwgW%2FlBmh5HwzwZ%2FQ3lti2Iht3iIR%2BLx8%2Fy3hg7C7RfKq%2Bea%2BY9%2F2UYGQSzFwRmn7AXQ0QnDO8WKycvKkixaneZH8P%2FOsvkHwEOQyZ1qFUWKqV0KXtfAhKX9uluELzr1aap2JEb3NGls4hNe48PCT0%2BUnOL8rSq5qNQPXAAhOaTh1UzTAyLVh0hG2gQajieHG%2F4n4Hk89w9rJLAGPOb2uFlg0t7wTRQm3qOJQx%2BmC%2BZNpKSzBYh0DQ%2FBtQuLJvsrKzE5pC2jatamJsOvwypPqHpAFeqeTzriwp113YAAKPzXf5rFTcKfyyHGfMN7wjFETms1ok44XAXtReIUldPGslsPrqBZBBpOi6eYlt3rqKjxu%2Bq51pWm3vSmjXzihFm%2FhElk4GzxofjNzvuxJVfTnSqjU96FpkMwyEJywuRN7B6V62FnwkIvLyVRmblHoa7c3TeE7dcK8KW%2BcwW8Irxcb%2F%2F6pW22pfK%2BANWIJGobS2eCZ8LVzAMqFub6q7R3NgEEoDdJKKwNQDPQX7iKwj8C1hLA7%2BsttMdqmDw0oP7ZmWcrP4Iho4ahwQZzSVPyRpohe6wtJNonBm9uUnN9%2F2NhQ7LMP3Axr8GOqUB1q0AadIb0D4vX2LW4iJYbOtL80LlOdm1%2BtmnLUYT7DMs0izscSDq6EyTTntA93u2wwF%2F1%2BHVLr70P%2BqjH09tsngDYoYiFEDgBhCCgq45fS7de4YWCHsl6oP%2BCylhKlT3fgi8HOtNM%2FTJzOnck2VsVbx8Vkf3akA1SFl8QrznPO9ZQmPrEVZoH89Y465iJ9PY%2BAO5P%2BHovg7DOSSRaXL%2BsQVpQ94F&X-Amz-Signature=9fe84e1d5da9bcd3cafe9ec40b2db0ab206b4ddc719198a4260e3451254d1db8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

