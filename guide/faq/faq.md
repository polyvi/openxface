---
layout: default
title: openxface
---

## FAQ
* [iOS调用扩展接口无法立刻获得数据?](#async_interface_ios)
* [安装应用失败?](#app_installation_fail)
* [使用xface.js报错或无法调用API?](#question_about_xface_js)
* [启动后一直停在Splash?](#stuck_at_splashscreen)
* [localStorage在某些机型无法工作?](#localStorage_not_work_on_some_devices)
* [xface.js和其它js似乎有依赖关系，调整一下顺序又好了？](#xface_js_and_other_js_files)
* [Android, viewport设置width后，未正确缩放?](#viewport_width_not_work_android)
* [geolocation在Android平台不能成功活得位置信息?](#geolocation_not_work_android)
* [修改了xface.js中的代码，为什么没有生效?](#modified_xface_js_not_apply)
* [引擎安装了多个应用，多个版本xface.js，如何共存?](#several_different_version_xface_js)

__________________
<a id="async_interface_ios"></a>
Q：在iOS平台上调用扩展接口，如xFace.AMS.listInstalledApplications(success:Function, fail:Function):void，为何无法立即使用获取到的数据？

<font color="red">A：iOS平台与Android平台存在一定的平台差异性，在iOS平台上，所有的扩展接口均为异步，这就意味着只能在回调函数中对返回数据进行操作，而不能在调用完扩展接口后，立即使用获取到的数据。请参考“JS扩展对象”AMS中关于“平台差异说明”部分。</font>
______________________________
<a id="app_installation_fail">
Q：在portal安装一个应用的时候，一直报错，但是我是严格安装文档的格式进行打包的？

<font color="red"> A：应用包里面的任何文件名都不能包含中文，安装包包名本身也不能带中文</font>
__________________
<a id="question_about_xface_js">
Q：我通过script标签引入js代码，在android某些版本一直会报错这些js代码找不到，什么原因？

<font color="red">A: 导致该问题可能由以下几个原因造成

 - 这个页面是否由iFrame打开，xFace不支持在iFrame中直接调用native的API， 如果在iFrame需要使用native API， 需要通过HTML5的消息机制引用top中的函数，从安全和性能上考虑,不推荐应用使用iFrame标签
 - 在使用native API的时候，最好在deviceready事件之后使用，因为在这个事件之前，可能某些设备还没有准备好
 - 如果用到了script标签请写成标准的形式 ，`<script type= "text/javascript" charset= "utf-8"></script>` ，如果不加type和charset属性，某些版本的webkit会无法识别，导致标签里的js代码无效</font>
____________________
<a id="stuck_at_splashscreen">
Q：我将应用写完后，打包运行，一直就停留在splash界面,进不去应用？


<font color="red">A：请检查下你的应用页面中是否引用了xface.js文件，目前xFace强制应用必须要引用这个文件，才能运行。</font>
_______________
<a id="localStorage_not_work_on_some_devices">
Q：在某些机型上，localStorage不能正常工作，存的数据取不到了？

<font color="red"> A：由于系统平台的原因，某些版本localStorage确实不能正常工作，遇到这类问题，请使用xFace.localStorage代替localStorage。</font>
________________
<a id="xface_js_and_other_js_files">
Q： 除了xface.js文件外，我的应用中还引用了其他的js文件，但是发现xface.js好像与其他的js文件有依赖关系，我调整下顺序即可解决遇到的问题？


<font color="red">A：请注意script标签中，js文件是阻塞加载方式，也就是说必须要等一个js文件加载完成后，才会加载另一个js文件，应用必须要仔细检查依赖关系，比如在deviceready事件中，应用调用了A.js文件的API, 而A.js文件的引用写在xface.js的后面，这样就会有问题，因为要等deviceready事件执行完毕后，xface.js才算加载完毕，而在xface.js加载完毕前，A.js不会被加载，故在deviceready中调用的A.js的API失败</font>
__________________
<a id="viewport_width_not_work_android">
Q：android平台的viewport设置width后，未正确缩放？

<font color="red">A：可能是以下原因:

 - 请确保设置的width值大于等于页面实际的width，若设置的值小于页面实际的width则会造成显示异常
 + 正确缩放必须要保证user-scalable为true或者不对这个属性进行设置（默认为true）</font>
_________________
<a id="geolocation_not_work_android">
Q：在android平台上使用window.navigator.geolocation对象相关接口未能成功获取位置信息？ 

<font color="red">A：导致该问题可能由以下几个原因造成：

+ 没有打开手机设置中的位置服务
- 由于获取位置信息需要google service组件的支持，未安装google service组件可能导致定位失败
- 手机GPS故障</font>
_____________________
<a id="modified_xface_js_not_apply">
Q：修改了xface.js文件中的代码，但为什么在引擎运行过程中却没有体现出来？

<font color="red">A：可能导致该问题的原因：

- 由于内置xface.js，引擎会自动将内置的xface.js文件拷贝到应用的根目录，如果该目录下存在xface.js，该文件会被覆盖，可以通过修改引擎内置的xface.js解决
- 页面引用的xface.js的路径不是已经修改的xface.js所在的路径</font>
_________________
<a id="several_different_version_xface_js">
Q：引擎安装了多个应用，但每个应用都使用了不同版本的xface.js，如何保证所有应用都正常运行？（后续版本会解决该问题）

<font color="red">A：以下两种解决方案

- 由于引擎内置的xface.js是最新版本，所以可以将所有应用都修改成使用最新版本的xface.js
- 对于使用了老版本的xface.js，可以将xface.js放在一个特定的目录下，如js目录下，并在页面中引用该js，这样内置的xface.js就不会覆盖老版的xface.js</font>
