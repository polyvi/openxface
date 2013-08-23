---
layout: default
title: Online App
lang: zh
---

#在线应用
xface的在线应用将应用部署在服务器，同时采用HTML5的应用程序缓存技术，通过创建 cache manifest 文件，可以轻松地创建在线应用的离线版本。

###什么是应用程序缓存（Application Cache）？
HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。
应用程序缓存为应用带来三个优势：

   * 离线浏览 - 用户可在应用离线时使用它们
   * 速度 - 已缓存资源加载得更快
   * 节省流量 - xFace runtime将只从服务器下载更新过或更改过的资源。

###Online App in xFace
xFace定义了Online App，它属于web app的一种，只需要指定

    <running_mode value="online">
 
 即可，并把应用资源部署到服务器。


### 多平台部署

####xface.js适配
   
在部署online app时候, 需要适配xface.js。
不同的平台有不同的xface.js，为了支持多平台, 需要每个平台准备一份xface.js, 应用需要根据所运行的平台来加载相应的xface.js.

####平台信息
平台信息可以通过一下两种方式获取到：

   1 平台信息可以通过user agent获取到。

   2 xface引擎url通过参数的形式提供平台的信息
   
有些设备获取不到user agent，所以xface引擎通过url参数的形式提供平台的信息：
引擎第一次加载online app，将platform 的信息以参数的形式加到url后面， 形如：

```
http://appentry.com/?platform=ios
```

其中 platform包括ios，android，wp。

###Reference
* [html5rocks offline](http://www.html5rocks.com/en/features/offline)