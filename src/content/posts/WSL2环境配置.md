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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=4c6735e09c3bde81129ecba87d8335df09511907becb5a3b8f299e79a0d6275f&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=afecf841a4771c55dcb49406a0e86af33c28011138463944df67419f2eb60424&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=8366c39d6eb57fa44a2ed6a1aeac27e6866022405016ef8ba4fdf98199921965&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=d21244f28679381a3ad7df272e484f5bc24911bc3cedc8d47779878a21ee134f&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=80bb9de9fc9868f6ac11da00662684d9895f16900e0b8dcda6336d70eb7a7ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE63AYZP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T213232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDagMRJmjTvJj09zbHw8WpTunpragDnlKVZ30xoG1nTJwIhALXHv2lbBrGSjvtQzRpsg4%2BXhrz1gkP3V2gHB1zR%2FE6OKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcpaypmEM3xQgumcEq3ANYAjHI1dzpESpSxvi4UcnMCoUt7nzmNMjizxjI8A2g%2FFqFptUJoK6sJMZgAx1XRyuq3HODtMSUOE1ec27BRXLV4pG2yCh0hJ8VcDsuoYhgIekJFu4mEg1kVQZ7k4ruv7b%2F4JneqpKRWzgVjofS82DAoUkoi5OtwyQQsL7nSP%2BtSjbkWVfJ7M1dPeCLm7l5K%2FptujLNviMz5iMRhSKY1r73T5FpgJYMyh1fX89i33I9Gm9em%2FxB%2FuVj2c%2FRKiH8YPIdjh46mTJZMzFp3KOswsaz7g0%2BXZUyE9Ug%2BWJfm4CF5kXgEii2nhAP4ZN5060A6aix4ieD4GjovZ%2BUHh%2F80Ex002t6YARD5BWDTbzQ%2BC4HEfBcNzCZIb63nfMVrEcy4z0Yy56i8UR8M24KF6gdEB9m2z1G4XvKeg7%2BOFGY9%2FGesp%2BoHDIkBcTTcGYPEcVFqido5v0DhZ2nsdLazwk3GuazLRDFD%2BaflxLyJNjPNaB1pudEG051vdlVpLSJeZ6x%2FcRTEwGCDDKKZGbN6QvDzFXZLIfb88pjRyOUgAK%2FERx1oj%2FUhqmZOXaavpfb4rrCbnVN%2BsWITqQOzeKsnGTd2Eic%2Fim3wDhbBNZQ4VNFSkB9d%2BW89DPBRzBfcjFBBjCHtfy%2BBjqkAS7JyihwDgB%2ByF7PRnuwxuGgnxF9T9R13UE1ZckzrWuWJOVozDZY%2BDY8lPltf%2FfJqZwSl4pGtV9Mu4iqhNqj%2F5Fgzlno130hcwuVQl35Z%2BFHj7OFOrSsSJRk46znTKoqkNSJVhznR0uCCPOSEWvi%2BZn3LjvBYxk3iHtoeRKhG8o6SPFvFcYdg0igPGjxU%2BlOH8hdMhrgYJO5L41vGf9O29ntR0Ij&X-Amz-Signature=97ce9f2a8362da1c957271b820614e2d1ac003543a7f01bfbadbe306095e2746&X-Amz-SignedHeaders=host&x-id=GetObject)

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

