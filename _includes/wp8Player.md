## Windows Phone 8平台

###先决条件
* Windows 8 64bits
* Windows Phone 8 手机一部(已经开发者注册，请参考 <a target="_blank" href="<http://msdn.microsoft.com/library/windowsphone/develop/ff769508(v=vs.105).aspx">How to register your phone for development</a> )
* SD卡一张
* 安装 <a target="_blank" href="<http://download.microsoft.com/download/9/3/8/938A5074-461F-4E3D-89F4-5CE2F42C1E36/fulltril30/exe/WPexpress_full.exe">Windows Phone SDK</a>  

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