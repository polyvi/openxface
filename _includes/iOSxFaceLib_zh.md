## iOS 平台

xFace提供了xFaceLib.framework(static)以及相应的资源文件，以支持第三方使用xFace Static Library,如图所示：

【图 xFaceLib folder】

![](iOSImages/xFaceLib_folder.png)

_____

本文档以“ThirdParty“工程为例说明第三方如何使用xFace Static Library.

_____

### 一. 调整ThirdParty工程

#### 1. 添加Framesworks
待添加到ThirdParty工程中的Frameworks包括两类，其一为xFaceLib.framework,其二为xFaceLib.framework依赖的系统frameworks.

添加Framesworks后的ThirdParty工程如下图所示：

【图 ThirdParty Frameworks】

![](iOSImages/third_party_frameworks.png)

#### 2. 添加xFaceResources

xFaceResources包括xFace启动时使用的launchImages，配置文件（platformConfig.plist），xface.js以及其他资源文件，参见下图：

【图 add xFace resources】

![](iOSImages/add_xFaceResources.png)

#### 3. 添加www
www目录用于放置xFace web app的源码

【图 add www folder】

![](iOSImages/add_www.png)

**注意**

添加xFaceResources与www后，请确认新增资源出现在 TARGETS->ThirdParty->Build Phases->Copy Bundle Resources中，参见下图：

【图 Copy Bundle Resources】

![](iOSImages/copy_bundle_resources.png)

#### 4. 修改工程配置
添加“__-all_load -ObjC__”到工程配置 TARGETS->ThirdParty->Build Settings->Other Linker Flags，参见下图：

【图 Other Linker Flags】

![](iOSImages/other_linker_flags.png)

### 二. 调整ThirdParty源码

修改AppDelegate的源码，以启动xFace

#### 1. AppDelegate.h

【图 AppDelegate.h】

![](iOSImages/appDelegate_header.png)

#### 2. AppDelegate.m

【图 AppDelegate.m】

![](iOSImages/appDelegate_source.png)

### 其他说明
#### 1. XRuntime
要求XRuntime作为AppDelegate的property,以确保下述代码（引自xFaceLib.framework）可以正确执行

    id<UIApplicationDelegate> appDelegate = [UIApplication sharedApplication].delegate;
 
    XRuntime *runtime = [appDelegate performSelector:@selector(runtime)];
 
#### 2. LaunchImage

通过ThirdParty-Info.plist可以指定ThirdParty与xFace是否使用相同的launchImage,具体说明如下：

##### ThirdParty与xFace使用相同的launchImage

请在ThirdParty-Info.plist中配置 __UILaunchImageFile__, 如下所示：

    <key>UILaunchImageFile</key>
	<string>third_party_splash</string>
	
配置此项后，xFace将使用与ThirdParty相同的launchImage(xface_logo-568h@2x.png等资源不必添加到ThirdParty工程中)

##### ThirdParty与xFace使用不同的launchImage

请删除ThirdParty-Info.plist中配置 __UILaunchImageFile__，即ThirdParty不能自定义launchImage的名称

简言之，如果ThirdParty-Info.plist中配置了UILaunchImageFile，则xFace使用与ThirdParty相同的launchImage；如果没有配置，xFace则使用以xface_logo命名的launchImage

#### 3. Push Notification

如果需要使用xFace的Push Notification扩展，请在ThirdParty的AppDelegate中添加如下代码：

    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
    {
	    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
	    
	    // Override point for customization after application launch.
	    self.window.backgroundColor = [UIColor whiteColor];
	
	    self.runtime = [[XRuntime alloc] init];
	    [self.window setRootViewController:self.runtime.appController];
	    [self.window makeKeyAndVisible];
	
	    if (launchOptions != nil){
	        NSDictionary* remoteInfo = [launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
	        if (remoteInfo) {
	            application.applicationIconBadgeNumber = 0;
	            [self.runtime performSelector:@selector(pushNotification:) withObject:remoteInfo afterDelay:5];
	        }
	    }
	
	    return YES;
    }
    
    - (void)application:(UIApplication*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData*)deviceToken 
    {
        [self.runtime didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
    }

    - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary*)userInfo
    {
        application.applicationIconBadgeNumber = 0;
        [self.runtime performSelector:@selector(pushNotification:) withObject:userInfo afterDelay:3];
    }

#### 4. Custom URL Scheme

如果ThirdParty启动xFace时，欲向xFace传递启动参数，请在XRuntime初始化后添加如下代码：

    [self.runtime handleOpenURL:[url absoluteString]];
    
要求url符合[RFC 1738](http://www.ietf.org/rfc/rfc1738.txt)规范

xFace启动参数含义请参考 [启动参数说明]({{ site.baseurl }}/guide/xFace/startparams/startparams_zh.html)