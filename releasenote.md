##3.1.0 (revision 17402)

### Runtime
1. 重构App，现在每个App更加独立，可管理自己的扩展
2. 重构了Extension管理框架
3. 重构了config.xml，格式遵循W3C Widget规范，去掉了config.xml加密
4. 重构了runtime启动过程，移除合并config.xml逻辑，更加稳定, 不再支持预安装应用为zip的启动方式
5. 重构了ams管理的applist，不再存放到config.xml中
5. 精简了大量无用代码
6. 简化了app.xml扩展权限控制，现在只要config.xml配置了的扩展，所有app都可以使用
7. [Online App完善多平台支持](http://polyvi.github.io/openxface/guide/xFace/ams/xface_online_app_zh.html)

### Android
2. 支持第三方native app通过参数启动不同xface app
3. 新增三种native-js bridge
4. 重构事件管理模块

### iOS
1. 完善InAppBrowser加载动画

### WP8
第一个正式发布版本，具备以下功能

1. webview支持，提供web app运行环境
2. 支持local和online两种web app
3. 支持player
4. 支持ams
5. 支持whitelist
5. 扩展支持
   * Accelerometer
   * AdvancedFileTransfer
   * App
   * Audio
   * Battery
   * Calendar
   * Camera
   * Capture
   * Compass
   * Console
   * Contact
   * Device
   * File
   * FileTransfer
   * InAppBrowser
   * Messaging
   * NetworkConnection
   * Notification
   * Push
   * SplashScreen
   * Security
   * Telephony
   * Zip
   
   由于平台限制，具体使用方法和说明请参考[sdk online](http://www.polyvi.net:8012/doc/xFaceSDK/)
   
###Player
1. 支持Online App

###应用开发注意
2. app.xml增加配置项engine，用于指定应用所依赖的最低引擎版本
2. 增加app.xml生成工具[xappconfig](https://github.com/luoqpolyvi/xappconfig)，目前仅支持3.1+ 
