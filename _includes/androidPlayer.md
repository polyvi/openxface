## Android 平台

### 安装xFacePlayer.apk

选择一种安装方式（通过PC使用91手机助手或者豌豆荚一类的软件，或者直接把安装包考到手机上面）在Android手机上面安装xFacePlayer.apk

### 将应用部署到手机上

在使用Player时，将编写好的页面（html,css,js,img等）、应用图标icon以及应用配置文件app.xml拷贝到sd卡下面的xFacePlayer的applications/app/下面，如果没有该目录需要自己手动创建。


![](ImgAndroid/appdir1.png)

### 运行xFacePlayer

运行之前安装的xFacePlayer


![](ImgAndroid/helloworldprint1.png)

### 视频教程

<object width="720" height="414">
    <param name="movie" value="{{ site.baseurl }}/videos/player/Android_player_assistant.mp4" />
    <param name="allowFullScreen" value="true" />
    <param name="allowScriptAccess" value="sameDomain" />
    <param name="autoplay" value="false">
    <param name="controller" value="true">
    <embed type="application/x-shockwave-mp4" width="854" height="498" allowfullscreen="true" allowscriptaccess="always" autoplay="false" controller="true" src="{{ site.baseurl }}/videos/player/Android_player_assistant.mp4" pluginspage="http://www.apple.com/quicktime/"></embed>
</object>

### 在Player中使用HTML5的离线应用
+ 准备app.xml，参考"xFace 应用"中的[app.xml示例和属性说明](/guide/xFace/ams/xface_app_zh.html)
+ 修改app.xml中的属性，只需修改以下两个属性即可
	- 将< preference name="mode" readonly="true" value="online" />标签中的value属性值改为"online"
	- 将< content encoding="UTF-8" src="index.html" />标签中的src属性值改为应用所在服务器的地址的绝对路径。例如：< content encoding="UTF-8" src="http://www.polyvi.net:8012/offlineApp/index.html" />
+ 将准备好的app.xml拷贝到 "/mnt/sdcard/xFacePlayer/applications/app/"下，即可使用HTML5的离线应用功能

