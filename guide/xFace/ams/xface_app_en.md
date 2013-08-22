---
layout: default
title: xFace Application
---

* Auto-generated toc:
{:toc}

## Hybrid Application
A hybrid application is a native mobile application that provides most of its content through Html/CSS/JS, but also tends to contain standard native user interface. It combines the best elements of native and Html app. xFace runtime supports such hybrid apps and furthermore extends the concept.

## Introduction
There are basically two major types for xFace application.

### Web app
A web app is totally built by Html/CSS/Javascript, but is also able to access device native features.

There are two subtypes,

1. Local app, whose code and resources is deployed on the client.
2. Online app, whose code and resources is deployed on the remote server.

### Native app

A native app is a normal mobile native app but could be encapsulated and be managed by xFace.

## App configuration and properties

#### App configuraion
app.xml is an important part of the application, which is placed in the root directory of the application package. And app properties are configed in app.xml.

####Sample and Properties Intros

    <?xml version='1.0' encoding='UTF-8'?>

    <!-- id: unique id for the app, version: app version number -->
    <widget id="xapp" version="2.0" xmlns="http://www.w3.org/ns/widgets">

        <!-- short: abbreviated form of the app name,
             value: app name string-->
        <name short="MXA">myxFaceApp</name>

        <!-- src: the icon url, relative app root directory -->
        <icon src="icon.png" />

        <!-- src: the main entry. Depends on what type it is, the value is defined by following
                  1.web app:
                     local app, the local url relative to app root
                     online app, the remote url for app(absolute address)
                  2.native app:
                     Android, the same package id of managed Android app
                     iOS, the custom Scheme URL defined by managed iOS app -->
        <content encoding="UTF-8" src="index.html" />

        <!-- type: indicates what type the app is
             value: xapp (indicates web app type)
                    napp (indicates native app type) -->
        <preference name="type" readonly="true" value="xapp" />

        <!-- mode: app deployment strategy, it's valid only when property 'type' is 'xapp'
             value: local app's code and resources is deployed on the client
                    online app's code and resources is deployed on the remote server -->
        <preference name="mode" readonly="true" value="local" />
        
        <!-- engine: the minimum engine version requirement
             value: the version number of the engine -->
        <preference name="engine" readonly="true" value="3.1.0" />
        
        <description>
            A sample widget to demonstrate some of the possibilities.
        </description>

        <author email="foo-bar@polyvi.com/" href="http://polyvi.com/">polyvi</author>

        <license> Copyright 2012-2013, Polyvi Inc. </license>

    </widget>
{:lang="xml"}

#### app.xml configuration
Manual configuration of the app.xml is not recommended. Please refer to the app.xml  generation tool—xappconfig for its configuration procedure and details.

#### The differences between web and native app
The significant differences are,

1. Perference *mode* is only applied to web app
2. Some other preferences specific to native app are further documented at [Native Apps Management]({{ site.baseurl }}/guide/xFace/ams/xface_ams_native_apps.html#appxml)
