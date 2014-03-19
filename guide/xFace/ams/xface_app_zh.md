---
layout: default
title: xFace 应用
lang: zh
---

* Auto-generated toc
{:toc}

### Hybrid应用
Hybrid app是web和native技术结合的app，但它主要通过Html/CSS/JS技术构建应用的内容，同时又保持原生用户界面。其优势主要是以丰富的web技术扩展了app开发途径，具有良好的跨平台性。xFace runtime支持hybrid app运行，并延伸了其概念。

### xFace 应用介绍
在xFace体系中，有两种基本应用类型。

#### Web app
Web app 是基于xFace runtime，采用html+css+js技术开发，同时可以调用原生系统能力的Hybrid混合应用。
根据应用的部署方案，web app 可以分为两种:

1. Local app, 应用及其资源部署在客户端。
2. Online app, 应用及其资源部署在服务器。

#### Native app
Native app 是普通的移动原生应用，可由xFace AMS管理。

### 应用的配置与属性

#### 应用配置
app.xml文件是应用包的重要组成部分，放在应用的根目录下，应用属性配置在该文件中。

#### app.xml示例和属性说明

    <?xml version='1.0' encoding='UTF-8'?>

    <!-- id: 应用的唯一标识符, version: 应用的版本号 -->
    <widget id="xapp" version="2.0" xmlns="http://www.w3.org/ns/widgets">

        <!-- short: 应用名称的简称, 值: 应用的名称 -->
        <name short="MXA">myxFaceApp</name>

        <!-- src: 应用的图标地址, 相对app根目录路径 -->
        <icon src="icon.png" />

        <!-- src: 应用的入口地址, 不同类型的应用设置不一样
             1.web app类型
                 local app 的取值: 相对app根目录路径
                 web app 的取值: 应用所在服务器的地址的绝对路径
             2.native app类型
                 Android 的取值: apk的package id
                 iOS 的取值: ipa的custom scheme URL -->
        <content encoding="UTF-8" src="index.html" />

        <!-- type: 应用的类型
             value: xapp (表示web app类型); napp (表示native app类型) -->
        <preference name="type" readonly="true" value="xapp" />

        <!-- mode: 应用的部署策略, 该项仅在type属性为"xapp"时有效
             value: local 应用及其资源部署在客户端
                    online 应用及其资源部署在服务器 -->
        <preference name="mode" readonly="true" value="local" />

        <!-- engine: 引擎最低版本的要求
             value: 引擎版本号 -->
        <preference name="engine" readonly="true" value="3.1.0" />

        <!-- plugins: 用于配置应用所需的插件 -->
        <plugins>
            <!-- id: 插件的唯一标识符
                 version: 插件的版本号(如果不写，如第二项plugin标签，则默认是最新版本) -->
            <plugin id='org.apache.cordova.contacts' version='1.0.1'/>
            <plugin id='com.polyvi.xface.extension.ams'/>
        </plugins>

        <description>
            A sample widget to demonstrate some of the possibilities.
        </description>

        <author email="foo-bar@polyvi.com/" href="http://polyvi.com/">polyvi</author>

        <license> Copyright 2012-2013, Polyvi Inc. </license>

    </widget>
{:lang="xml"}

#### app.xml的配置
app.xml的配置不推荐手动配置，具体配置过程和细节请参考app.xml生成工具xappconfig。

#### web app 和native app 的差异
native的app.xml 与 web的app.xml 的区别在于：

1. web app有运行模式mode属性, 取值为local或者online。
1. native app 特有配置请参考[Native Apps Management]({{ site.baseurl }}/guide/xFace/ams/xface_ams_native_apps.html#appxml)
