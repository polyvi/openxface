---
layout: default
title: 第三方如何与xFace通信
lang: zh
---

* Auto-generated toc:
{:toc}

## xFace接收第三方程序启动参数用法说明
由第三方传来的启动参数格式为：

    startpage=a/b.html;data=...

* **startpage=**
   * 用于启动指定app页面，"a/b.html"为app启动页面路径，注意该路径是相对于app的根目录
   * 该关键字可选, 如果用户没有传入启动页面，则引擎默认从app.xml中读取启动页面（一般为源码根目录中的index.html）
   * **所有被第三方直接启动的页面必须要引用xface.js (xface.js 会内置到源码根目录)**
* **data=**
   * 用于为传递数据给应用
   * 该关键字可选, 如果没有"data="关键字，比如startpage=a/b.html;...  ,引擎也会将... 解释为data部分
   * 最终传递给页面的数据只会包括data数据部分，不带启动页面信息


## 第三方启动xFace引擎的示例代码

以第三方启动xFace,并传入启动参数为例（启动参数可选），给出如下示例代码：

###android

    //传给xFace的参数表示:
    //1. 启动app的index.html页面 
    //2. index.html页面获得的数据为一个json串data

    pi = getPackageManager().getPackageInfo("com.polyvi.myphone", 0);
    Intent resolveIntent = new Intent(Intent.ACTION_MAIN, null);
    resolveIntent.setPackage(pi.packageName);
    PackageManager pm = getPackageManager();
    List<ResolveInfo> apps = pm.queryIntentActivities(resolveIntent, 0);
    ResolveInfo ri = apps.iterator().next();
    
    if (ri != null) {
        String packageName = ri.activityInfo.packageName;
        String className = ri.activityInfo.name;
        Intent intent = new Intent(Intent.ACTION_MAIN);
        intent.putExtra("start_params",
                         "startpage=index.html;data={\"token\":\"c5af5b63088b9e74353f758c0ed97d54\"#\"appPackage\":\"com.polyvi.myphone\"#\"type\":\"null\"#\"favoriteObjId\":\"null\"}");

        ComponentName cn = new ComponentName(packageName,className);
        intent.setComponent(cn);
        startActivity(intent);
    }
{:lang="java"}

###ios

    //注意：启动参数必须符合URL规范：http://www.ietf.org/rfc/rfc1738.txt
    //"xFace"为引擎的Custom URL Scheme,其值在Info.plist中定义
    //"Custom URL Scheme"官方文档：http://developer.apple.com/library/ios/#documentation/iphone/conceptual/iphoneosprogrammingguide/AdvancedAppTricks/AdvancedAppTricks.html
    
    NSURL *url = [NSURL URLWithString:@"xFace://?startpage=index.html;data=Admin;123]";
    [[UIApplication sharedApplication] canOpenURL:url]
    && [[UIApplication sharedApplication] openURL:url];
{:lang="objective-c"}

###wp

    //注意：启动参数必须符合URL规范：http://www.ietf.org/rfc/rfc1738.txt
    //"xFace"为引擎的Custom URL Scheme,其值在WMAppManifest.xml中定义    
    
     var flag = await Windows.System.Launcher.LaunchUriAsync(new System.Uri("xFace://?startpage=index.html;data=Admin;123"));
{:lang="c#"}

## xFace web应用获取第三方参数的示例代码

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(startParams) {
        alert(startParams.data);
    }
{:lang="javascript"}    
        

根据第二部分给出的示例代码，此处alert的结果如下：
    
**Android**： 

    {\"token\":\"c5af5b63088b9e74353f758c0ed97d54\"#\"appPackage\":\"com.tydic.myphone\"#\"type\":\"null\"#\"favoriteObjId\":\"null\"}"

**iOS**： 

    Admin;123

**WP**： 

    Admin;123
