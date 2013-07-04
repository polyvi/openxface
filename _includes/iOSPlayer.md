## iOS 平台

### 非越狱设备

* 安装iTunes 
* 将iOS设备与iTunes进行连接 
* 安装xFacePlayer.ipa到设备上
* 将应用压缩为zip包，要求命名为xface_player.zip，请参见【图一】【图二】

【图一】压缩应用

![](ImgIOS/xFacePlayeriOSCompress1.png)

【图二】重命名应用压缩包为xface_player.zip

![](ImgIOS/xFacePlayeriOSCompress2.png)

* 通过iTunes拷贝xface_player.zip到xFacePlayer的documents目录下并进行同步，请参见【图三】【图四】【图五】

【图三】定位File Sharing下的xFacePlayer

![](ImgIOS/xFacePlayeriOSFileSharing.png)

【图四】添加xface_player.zip到/Documents下

![](ImgIOS/xFacePlayeriOSAddZip.png)

【图五】执行同步操作

![](ImgIOS/xFacePlayeriOSSync.png)

* 重新运行xFacePlayer

#### 视频教程

<object width="720" height="420">
    <param name="movie" value="{{ site.baseurl }}/videos/player/iOS_player_itunes.mp4" />
    <param name="allowFullScreen" value="true" />
    <param name="allowScriptAccess" value="sameDomain" />
    <embed type="application/x-shockwave-mp4" width="720" height="420" allowfullscreen="true" allowscriptaccess="always" src="{{ site.baseurl }}/videos/player/iOS_player_itunes.mp4"></embed>
</object>

### 越狱设备

对于越狱的iOS设备，xFacePlayer提供了一种更为简便的操作方式来更新启动时加载的应用，操作步骤如下：

* 安装iTools 
* 将iOS设备与iTools进行连接
* 安装xFacePlayer.ipa到设备上 
* 拷贝待加载应用到/xFacePlayer.app/www/xface/apps/app下，请参见【图一】【图二】

【图一】定位/xFacePlayer.app/www/xface/apps/app目录

![](ImgIOS/xFacePlayerItoolsCopyFiles1.png)

【图二】拷贝后的应用资源

![](ImgIOS/xFacePlayerItoolsCopyFiles2.png)

* 重新运行xFacePlayer

### 补充说明

* 更新/xFacePlayer.app/www/xface/apps/app下的应用后，请确保/Documents下不存在xface_player.zip，否则应用更新无效,原因是xFacePlayer启动时优先加载xface_player.zip中的应用，当xface_player.zip不存在时，才会加载/xFacePlayer.app/www/xface/apps/app下的应用


