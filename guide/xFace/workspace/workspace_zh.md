---
layout: default_zh
title: xFaceLib
---

# xFace App Workspace 介绍

* Auto-generated toc:
{:toc}

## 概念

* 为了保证运行在xFace引擎上的app(后面简称xapp)数据的安全，每个xapp都有一个沙盒模型，xapp只能读写自己的沙盒，该沙盒便是通过workspace来实现

* 简而言之，workspace是与xapp关联的一个目录，xapp对该目录具有读写权限，其他xapp无权读写该xapp的workspace

* workspace只是一个逻辑上的概念，其物理位置对xapp是透明的，所以xapp的逻辑不应该依赖workspace的物理位置，

## workspace操作接口

xFace文件系统支持两类文件路径

* file://sdcard/...，表示访问sdcard上任一文件,sdcard 仅仅表示外部存储的协议，引擎通过解析这路径会将该目录映射到手机的外部存储上
* /data/.../ , 路径以/开始，表示限制于app workspace， 存储在app workspace下的某个目录 比如：/a ,表示app workspace的a目录下，注意 workspace的位置对应用是透明的，有可能被配置到sdcard，也有可能配置到内存卡上，由打包系统决定

## 内置数据
* 在某些情况下，xapp可能需要内置一些数据，比如音频，视频等，这些内置数据可以通过workspace实现，应用只需要在xapp根目录下，新建一个workspace目录（目录名workspace），将内置数据放到workspace下即可，开发完毕后，数据随xapp一起打包

* 注意: 应用操作workspace的数据时，不要依赖workspace的物理位置，只能通过引擎api操作里面的数据


