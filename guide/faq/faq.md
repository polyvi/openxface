---
layout: default
title: FAQ
lang: zh
---

* [iOS调用扩展接口无法立刻获得数据?](#qiosxfaceamslistinstalledapplicationssuccessfunction_failfunctionvoid)
* [安装应用失败?](#qportal)
* [使用xface.js报错或无法调用API?](#qscriptjsandroidjs)
* [启动后一直停在Splash?](#qsplash)
* [localStorage在某些机型无法工作?](#qlocalstorage)
* [xface.js和其它js似乎有依赖关系，调整一下顺序又好了？](#q_xfacejsjsxfacejsjs)
* [Android, viewport设置width后，未正确缩放?](#qandroidviewportwidth)
* [geolocation在Android平台不能成功获得位置信息?](#qandroidwindownavigatorgeolocation)
* [修改了xface.js中的代码，为什么没有生效?](#qxfacejs)
* [xface.js的版本是如何管理的？](#q-xfacejs)

### Q：在iOS平台上调用扩展接口，如xFace.AMS.listInstalledApplications(success:Function, fail:Function):void，为何无法立即使用获取到的数据？

A：iOS平台与Android平台存在一定的平台差异性，在iOS平台上，所有的扩展接口均为异步，这就意味着只能在回调函数中对返回数据进行操作，而不能在调用完扩展接口后，立即使用获取到的数据。请参考“JS扩展对象”AMS中关于“平台差异说明”部分。

### Q：在portal安装一个应用的时候，一直报错，但是我是严格安装文档的格式进行打包的？

A：应用包里面的任何文件名都不能包含中文，安装包包名本身也不能带中文

### Q：我通过script标签引入js代码，在android某些版本一直会报错这些js代码找不到，什么原因？

A: 导致该问题可能由以下几个原因造成

 - 这个页面是否由iFrame打开，xFace不支持在iFrame中直接调用native的API， 如果在iFrame需要使用native API， 需要通过HTML5的消息机制引用top中的函数，从安全和性能上考虑,不推荐应用使用iFrame标签

 - 在使用native API的时候，最好在deviceready事件之后使用，因为在这个事件之前，可能某些设备还没有准备好

 - 如果用到了script标签请写成标准的形式 ，`<script type= "text/javascript" charset= "utf-8"></script>` ，如果不加type和charset属性，某些版本的webkit会无法识别，导致标签里的js代码无效

### Q：我将应用写完后，打包运行，一直就停留在splash界面,进不去应用？


A：请检查下你的应用页面中是否引用了xface.js文件，目前xFace强制应用必须要引用这个文件，才能运行。

### Q：在某些机型上，localStorage不能正常工作，存的数据取不到了？

A：由于系统平台的原因，某些版本localStorage确实不能正常工作，遇到这类问题，请使用xFace.localStorage代替localStorage。

### Q： 除了xface.js文件外，我的应用中还引用了其他的js文件，但是发现xface.js好像与其他的js文件有依赖关系，我调整下顺序即可解决遇到的问题？


A：请注意script标签中，js文件是阻塞加载方式，也就是说必须要等一个js文件加载完成后，才会加载另一个js文件，应用必须要仔细检查依赖关系，比如在deviceready事件中，应用调用了A.js文件的API, 而A.js文件的引用写在xface.js的后面，这样就会有问题，因为要等deviceready事件执行完毕后，xface.js才算加载完毕，而在xface.js加载完毕前，A.js不会被加载，故在deviceready中调用的A.js的API失败

### Q：android平台的viewport设置width后，未正确缩放？

A：可能是以下原因:

- 请确保设置的width值大于等于页面实际的width，若设置的值小于页面实际的width则会造成显示异常
- 正确缩放必须要保证user-scalable为true或者不对这个属性进行设置（默认为true）

### Q：在android平台上使用window.navigator.geolocation对象相关接口未能成功获取位置信息？

A：导致该问题可能由以下几个原因造成：

- 没有打开Android手机设置中的位置服务
- 由于获取位置信息需要google service组件的支持，未安装google service组件可能导致定位失败
- 手机GPS故障

### Q：修改了xface.js文件中的代码，但为什么在引擎运行过程中却没有体现出来？

A：可能导致该问题的原因：

- 由于内置xface.js，引擎会自动将内置的xface.js文件拷贝到应用的根目录，如果该目录下存在xface.js，该文件会被覆盖，可以通过修改引擎内置的xface.js解决
- 页面引用的xface.js的路径不是已经修改的xface.js所在的路径

### Q: xface.js的版本是如何管理的？

A: 为了减轻应用开发、打包，xface.js版本管理的负担，xFace和xFace Player均内置了xface.js，应用依赖于所在引擎的xface.js。

请注意**内置xface.js的路径和app的index.html相同，请必须遵循此原则引用**

只有一种例外，Online App，由于这种app部署在remote server，不能访问客户端js，所以它的发布包必须包含xface.js。具体请参考[Online App]({{site.baseurl}}/guide/xFace/ams/xface_online_app_zh.html)


