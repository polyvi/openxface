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
在xFace体系中，有两种基本应用类型

#### Web app
Web app 是基于xFace runtime，采用html+css+js技术开发，同时可以调用原生系统能力的Hybrid混合应用。
根据应用的部署方案，web app 可以分为两种:

1. Local app, 应用及其资源部署在客户端.
2. Online app, 应用及其资源部署在服务器.

#### Native app
Native app 是普通的移动原生应用，可由xFace AMS管理.

### 应用的属性与配置

#### 应用属性

1. **type** *必需*, 表明应用的类型
   * xapp (web app)
   * napp (native app).
2. **id** *必需*, 应用的唯一标识符.
3. **entry** *必需*, 应用的入口地址, 不同类型的应用设置不一样
   * web app
      * local app 的取值: 相对app根目录路径, 例如:index.html
      * web app 的取值: 应用所在服务器的地址, 例如:http://app_server.com/yourapp/index.html
   * native app
      * Android 的取值: apk的package id
      * iOS 的取值: ipa的custom scheme URL
4. **icon** *必需*, 应用的图标地址
5. **version** *必需*, 应用的版本号
6. **name** *必需*, 应用的名称

#### 应用配置
应用属性保存在app.xml文件中，是应用包的重要组成部分。

#### app.xml示例

    <config schema="1.0">
        <app id="xapp">
            <description>
                <type>xapp</type>
                <entry src="index.html" />
                <icon  src="icon.png" />
                <version>1.1</version>
                <name>app</name>
                <running_mode value="local"/>
            </description>
        </app>
    </config>
{:lang="xml"}

#### web app 和native app 的差异
native app.xml 与 web app.xml 的区别在于

1. web app有运行模式running_mode, 取值为local或者online.
1. native app 特有配置请参考[Native Apps Management]({{ site.baseurl }}/guide/xFace/ams/xface_ams_native_apps.html#appxml)
