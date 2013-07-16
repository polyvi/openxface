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
   
###Reference
* [html5rocks offline](http://www.html5rocks.com/en/features/offline)