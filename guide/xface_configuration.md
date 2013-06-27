## xFace Configuration
###公共配置
####AutoHideSplashScreen
是否自动隐藏SplashScreen，设置为false时，应用必须负责关闭SplashScreen

- `<preference name="AutoHideSplashScreen" value="true" />`
- 默认值为true
####CheckUpdate
启动时是否自动检测应用更新

- `<preference name="CheckUpdate" value="false" />`
- 默认值为false

####EngineVersion
引擎版本号
- `<preference name="EngineVersion" value="3.1.x" />`

####EngineBuild
引擎构建版本号
- `<preference name="EngineBuild" value="12345" />`    
####ShowSplashScreen

是否显示启动图片
- `<preference name="ShowSplashScreen" value="true" />`
- 默认值为true

####SplashScreenDelayDuration    
配置splash显示的时间，单位 ms
- `<preference name="SplashScreenDelayDuration" value="2000" />`
- 默认值为2000（2秒）

####UpdateAddress
应用更新的服务器地址，和checkUpdate联合使用
- `<preference name="UpdateAddress" value="http://myapp.updateserver.com" />`
- 默认值为空

###IOS的配置

####DisallowOverscroll
是否关闭界面overscroll橡皮筋弹动效果
- `<preference name="DisallowOverscroll" value="true" />`
- 默认值为true
####FadeSplashScreen
配置SplashScreen淡入淡出效果
- `<preference name="FadeSplashScreen" value="false" />`
- 默认值为false

####FadeSplashScreenDuration
SplashScreen画面淡入淡出的持续时间，单位秒
- `<preference name="FadeSplashScreenDuration" value="0.75" />`
- 默认值为0.75秒，需FadeSplashScreen设置为true

####ShowSplashScreenSpinner
设置是否显示SplashScreen上的旋转效果
- `<preference name="ShowSplashScreenSpinner" value="true" />`
- 默认值为true

####TopActivityIndicator
配置状态/电量栏中的顶部旋转动态图示，有效值是"whiteLarge", "white" and "gray"
- `<preference name="TopActivityIndicator" value="gray" />`
- 默认值为 *gray*

####UsePlayerMode
是否使用player模式
- `<preference name="UsePlayerMode" value="false" />`
- 默认值为false，当且仅当以player模式启动时配置为true 
