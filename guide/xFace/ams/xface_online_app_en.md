---
layout: default
title: Online App
---

With HTML5 application cache, online app, whose code and resources is deployed on remote server, can be cached and accessible without an internet connection. It is easy to make an offline version of a web application, by creating a cache manifest file.

###What is Application Cache?
HTML5 introduces application cache, which means that a web application is cached, and accessible without an internet connection.

Application cache gives an application three advantages:

   * Offline browsing - users can use the application when they're offline
   * Speed - cached resources load faster
   * Less data traffic - the xFace runtime will only download updated/changed resources from the server
   
###Online App in xFace
Online App is one kind of xFace web application, just specify the attribute
    
    <running_mode value="online">
 
 in app.xml, then deploy its resource on remote server.

###Reference
* [html5rocks offline](http://www.html5rocks.com/en/features/offline)
