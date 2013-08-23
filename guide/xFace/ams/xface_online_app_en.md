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

### Multi Platform Deployment

####xface.js Adaptation
   
When deploying the online app, xface.js should be adapted to each platform.
Different platforms have different xface.js. In order to support multiple platforms, prepare a xface.js for each platform and the app load the corresponding xface.js according to the platform on which it runs.

####Platform Identifier


Platform identifier can be get by the two ways:

   1 Platform identifier can be get from the user agent

   2 xface engine appends platform identifier to the app entry's URL.


Since user agent can't be get in some device, xface engine append parameter &platform=value to the app entry's URL, such as:

```
http://appentry.com/?platform=ios
```

 The value of platform can be ios, android or wp.

###Reference
* [html5rocks offline](http://www.html5rocks.com/en/features/offline)
