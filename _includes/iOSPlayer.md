## iOS 平台

### 非越狱设备

此部分我们主要讲解如何通过iTunes将web应用添加到xFacePlayer,具体操作请参考下面的教程

#### 幻灯片教程

<!-- Start slide section -->
<div id="show" class="slideshow">
<div class="slideshow-images">
<a href="#"><img id="slide-0" src="{{ site.baseurl }}/slideshow/iOS_player_itunes/data/images/slide1.jpg" alt="Slide1" title="Slide1" /></a>
<a href="#"><img id="slide-1" src="{{ site.baseurl }}/slideshow/iOS_player_itunes/data/images/slide2.jpg" alt="Slide2" title="Slide2" /></a>
<a href="#"><img id="slide-2" src="{{ site.baseurl }}/slideshow/iOS_player_itunes/data/images/slide3.jpg" alt="Slide3" title="Slide3" /></a>
<a href="#"><img id="slide-3" src="{{ site.baseurl }}/slideshow/iOS_player_itunes/data/images/slide4.jpg" alt="Slide4" title="Slide4" /></a>
<a href="#"><img id="slide-4" src="{{ site.baseurl }}/slideshow/iOS_player_itunes/data/images/slide5.jpg" alt="Slide5" title="Slide5" /></a>
</div>
<div class="slideshow-frame"></div>
</div>
<!-- End slide section -->

---

#### 视频教程

<object width="720" height="414">
    <param name="movie" value="{{ site.baseurl }}/videos/player/iOS_player_itunes.mp4" />
    <param name="allowFullScreen" value="true" />
    <param name="allowScriptAccess" value="sameDomain" />
    <embed type="application/x-shockwave-mp4" width="720" height="414" allowfullscreen="true" allowscriptaccess="always" src="{{ site.baseurl }}/videos/player/iOS_player_itunes.mp4"></embed>
</object>

### 越狱设备

对于越狱的iOS设备，xFacePlayer提供了一种更为简便的操作方式来添加web应用，操作步骤如下：

* 安装iTools 
* 将iOS设备与iTools进行连接
* 安装xFacePlayer.ipa到设备上 
* 拷贝待加载应用到/xFacePlayer.app/www/xface/apps/app下，请参见【图一】【图二】

【图一】定位/xFacePlayer.app/www/xface/apps/app目录

![](ImgIOS/xFacePlayerItoolsCopyFiles1.png)

【图二】拷贝后的应用资源

![](ImgIOS/xFacePlayerItoolsCopyFiles2.png)

* 重新运行xFacePlayer

#### 视频教程

<object width="720" height="416">
    <param name="movie" value="{{ site.baseurl }}/videos/player/iOS_player_itools.mp4" />
    <param name="allowFullScreen" value="true" />
    <param name="allowScriptAccess" value="sameDomain" />
    <embed type="application/x-shockwave-mp4" width="720" height="416" allowfullscreen="true" allowscriptaccess="always" src="{{ site.baseurl }}/videos/player/iOS_player_itools.mp4"></embed>
</object>

### 补充说明

* 更新/xFacePlayer.app/www/xface/apps/app下的应用后，请确保/Documents下不存在xface_player.zip，否则应用更新无效,原因是xFacePlayer启动时优先加载xface_player.zip中的应用，当xface_player.zip不存在时，才会加载/xFacePlayer.app/www/xface/apps/app下的应用


