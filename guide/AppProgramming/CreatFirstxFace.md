---
layout: default
title: openxface
---

## [入门](induction.html) > 创建第一个xFace应用
<br>
**在开始xFace开发之前，您需要对下面的知识有基本的了解：**
    
- html
- CSS
- Javascript

**假如您的应用涉及到服务端的开发，您至少还需要掌握一种服务器端编程语言。**

选择适合您自己的网页开发工具进行页面的开发，例如Dreamweaver、EditPlus、Notepad++等，只需要保证应用入口页面名称为index.html即可。

编写index.html页面的时候，不要忘了引入xface.js文件。

下面以hello world为例：

<pre><code>
< html>
< head>
< meta http-equiv="Content-Type" content="text/html; charset=utf-8">
< title>hello world</title>
< script src="xface.js"></script>
< script>
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
alert("you can use xFace API now!");
}
< /script>
< /head>

< body>
 hello world!
< /body>
< /html>
</code></pre>


**注意：**

- 这只是一个简单的测试页面，没有使用js、css等外联资源文件。
- 在index.html页面中必须在头部引入xface.js文件。

