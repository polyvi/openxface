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

## App Properties

#### Properties

An app typically has following properties,

1. **type**, indicates what type the app is,
   * xapp, web app
   * napp, native app
2. **id**, unique id for the app
3. **entry**, the main entry. Depends on what type it is, the value is defined by following,
   * web app
      + local app, the local url relative to app root, e.g., index.html.
      + online app, the remote url for app, e.g., http://app_server.com/yourapp/index.html
   * native app
      + Android, the same package id of managed Android app
      + iOS, the custom Scheme URL defined by managed iOS app
4. **icon**, the icon url
5. **version**, version number
6. **name**, app name string


#### app.xml
The app.xml is configured with above properties and gets packed together with the app.

####Sample

    <config schema="1.0">
        <app id="myapp">
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

#### The differences between web and native app
The significant differences are,

1. Perference *running_mode* is only applied to web app
2. Some other preferences specific to native app are further documented at [Native Apps Management](www.polyvi.net:8012/doc/guide/xface/ams/native_apps_management.md)
