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


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/62efe4d1-37d6-4606-a7b8-34dcd63ff38a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=7ece84ab00589d34acbc1e5c0b1e3f8024c1c6bdf9ac9c5b7f5865e7516bf845&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/74866fe6-9ce5-4055-94c5-4900f6f5ff8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=42908c72c491e3aee9c91305c22853f1d326a72a6dcfed8afae51e8eb6f3ed2d&X-Amz-SignedHeaders=host&x-id=GetObject)


### 重启电脑


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/ed8ca255-2fda-4c1b-9b1a-f1896300e8e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=4e2696c857d68482c807c168e3113a03c117d322a4b39775223bc83e304e12fb&X-Amz-SignedHeaders=host&x-id=GetObject)

- 打开配置后，会在开始菜单新增一个Ubuntu的图标，单击之后会进入安装环节
- 如果没有Ubuntu的图标就再power shell中执行命令 `wsl --install`

### 【开始菜单】点击Ubuntu图标


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/d7415a12-f453-43fe-a604-a208d85638a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=96f59e078d39f16a67b512530df71f3d78832f19f4bf2363f736d31e2125e22a&X-Amz-SignedHeaders=host&x-id=GetObject)


### 设置登陆账户密码


安装结束后会提示创建账户。已经有了默认的root账户，需要重新配置一个其他账户


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/bb38a6ce-031e-4122-9787-de509d2240bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=b46a805145f68f519bca29bb06cb32aad24a48684b1bd25f7bc4a3f13f8aefa5&X-Amz-SignedHeaders=host&x-id=GetObject)

- `wsl -l -o` 查看可以安装哪些Linux发行版

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5d24fe63-e567-4804-86f9-9fdc62e13082/4b4e5e2f-4e13-4651-8884-559a62c38137/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFLV5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDZD%2FJolppJbvp%2BP%2F%2B%2F39hCkFNjUJHUan2YbXa6cTLybAiEAuJqp6Vpz4l9caXtAGtp8IrHmQAj7810WUFUlf%2F9aGpsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLfAdxeYrxb446EzMSrcAyT7L9R8uw1FRVcOz7Z583iOXim1iwVcPRc%2FnwQvOoFf2d9LEPNPxrJ42WrpzNR%2BFefarn8l1nvpP9DLV6Osu5iS7OCywFU4vkkw0mAH4vXFIGbAHVSpxgXeKf4l1qbLdZZnZan0RhT1pkmRy4PSIxyTeOM4BAsq1%2FP28naVDnv6gNG1vC3Ug5bQxmbk2qbMRafW%2F2yHb3QIWUVckXKRxBKM8UwTM8XlzZvxp5Z6C5e%2FcnNBlphcz1fgHgvXZM5s%2BT%2Fq2pufSE8%2BgHnr7KcfE%2BxP%2FwhTAWKnREGx560rKfF12o7IbpUDvNs9ldfNUCc%2BEALyr6%2BCyGDOGKO0p%2B50KCZuptU8%2B%2BktcCAAhs3HIG%2FqLdZsAiqQ64O2sqh9wCaW7H%2BetJInOApqMlspicv8mHWhl%2BvlMlekQB%2BGiNWDljDCqBmSeFxufauCSI%2FKRzFa4IiOJaVhMPBkPp0KO%2F0UJTocL7JSpc%2FWXFJWX93V9s8xQrsFJV3FmbQYXLlbL9416r7vu%2FgRatdffphjjXD0d48iOyii7eHimkz%2FVz%2BJeJch4PBRrE9hibvhzHaod8PLr9UlDQ4%2BjeCKpHSNMc9jH%2BqRf2yLPy7FfkGDTu7BWG2V1nH%2FNF8Lg08KsCV0MIb8kL0GOqUBWGCDmjK%2F62qWWKmFSu%2B9xF6TI8oTnhq%2BnBCCKwWTu6Xw5qYBUk2kxk%2FYecexfvlGtZfLXPBdxT8XNerQuzbBNA3eX0%2B6k%2BZtaKtG37h11H0bBAi%2BOwM5IvVZQeE%2BD881xDRQpvPKsZ9n%2BVM52lz6OZrtQJp2dFpR3sjexLq0uLBCQLAKKZ1PauExAcnxY2NE1gSLrx9GrkSTaZ3D1098ItjT4pZu&X-Amz-Signature=0bcc35fe8be25b8bcf0b587617b3ba4620cbd3a85dfc7f0b0b143c5f84966a55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

