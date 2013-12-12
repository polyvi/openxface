## Windows Phone 8平台

###先决条件
* on Windows8 PC
* Windows Phone 8 手机一部(已经开发者注册，请参考[How to register your phone for development](http://msdn.microsoft.com/library/windowsphone/develop/ff769508.aspx))
* SD卡一张
* 安装 [Windows Phone SDK](http://dev.windowsphone.com/en-us/downloadsdk)

###操作步骤

* 安装xFacePlayer.xap  

    从Windows Phone SDK的安装环境中找到XapDeployment 部署工具，如图：
    
    ![DeployTool](ImgWP8/XapDeployTool.jpg)  
    
    运行XapDeploy.exe,找到要部署的xFacePlayer.xap。点击Deploy,如图：
    
    ![Deploying](ImgWP8/xFacePlayerDeploy.jpg)  

* 将应用部署到手机上

    在使用Player时，先将编写好的应用（html,css,js,img等）、应用图标icon以及应用配置文件app.xml, 压缩为xFaceInstalledPackage.zip,然后更名为xFaceInstalledPackage.xpa,并将其通过usb拷贝到sd卡根路径的www目录下，如果没有该目录需要自己手动创建。

* 运行xFacePlayer  

    在手机上运行之前安装的xFacePlayer，从而启动应用。 

### 在Player中使用HTML5的离线应用
+ 准备app.xml，参考"xFace 应用"中的[app.xml示例和属性说明]({{ site.baseurl }}/guide/xFace/ams/xface_app_zh.html)
+ 修改app.xml中的属性，只需修改以下两个属性即可
	- 将< preference name="mode" readonly="true" value="online" />标签中的value属性值改为"online"
	- 将< content encoding="UTF-8" src="index.html" />标签中的src属性值改为应用所在服务器的地址的绝对路径。例如：< content encoding="UTF-8" src="http://www.polyvi.net:8012/offlineApp/index.html" />
+ 将准备好的app.xml压缩为xFaceInstalledPackage.zip,然后更名为xFaceInstalledPackage.xpa,并将其通过usb拷贝到sd卡根路径的www目录下，启动Player即可使用HTML5的离线应用功能