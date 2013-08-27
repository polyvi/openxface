---
layout: default
title: Emulator安装与应用调试
lang: zh
---

Emulator安装
---

   * 下载并安装最新的Google Chrome浏览器（参考版本：23.0.1271.64 m）

   * 运行Chrome，在地址栏中输入chrome://chrome/extensions/并打开页面（或通过“工具”->“扩展程序”打开）

   * 拖动Emulaltor.crx文件到“扩展程序”页面并按照提示安装

       ![](img/emulatorInstall.png)

   * 安装后需勾选“允许访问文件网址”以允许加载file:协议的url（调试本地应用时将使用file:协议）

       ![](img/emulatorAccessFile.png)

应用调试
---
本地应用调试
---
   * 确保开启“允许访问文件网址”权限（打开chrome://chrome/extensions/开启）

   * 设置Chrome启动参数：

      * Windows：
         1. 右键单击“Chrome”图标
         1. 选择“属性”并编辑“目标”，在行尾添加参数：　--allow-file-access-from-files --disable-web-security
         1. 编辑后“目标”行形如：chrome.exe --allow-file-access-from-files --disable-web-security

      * OSＸ：
         1. 运行Terminal.app
         1. 输入： /Applications/Google\ Chrome.app/Contents/MacOS/Google\Chrome --allow-file-access-from-files --disable-web-security

   * 重启Chrome并在Chrome中打开本地应用

   * 点击Emulator插件图标  ，选择“Enable”等待页面重新加载完成

   * 运行Chrome“开发者工具”开始应用调试

远端应用调试
-

   * 运行 Chrome并在地址栏中输入应用地址,如“http://192.168.2.245/develop/apps/testsuite/index.html
”

   * 点击Emulator插件图标  ，选择“Enable”等待页面重新加载完成

   * 运行Chrome“开发者工具”开始应用调试

其他说明
-

   * Chrome安装路径中不能含有中文字符，否则模拟器无法调试本地应用（建议使用绿色版Chrome）
   
   * 调试本地应用时，本地应用所在绝对路径不能含有中文字符，否则无法执行内置xface.js以及push文件到真机的操作

   * __模拟器仅支持在调试本地应用时内置xface.js。当调试远端应用时，需要应用开发者手动将与模拟器配套发布的xface.js文件放置到应用根目录下。具体操作如下：__

      * __如果您欲选择“Android”系统的设备进行调试，请将xface.android.js重命名为xface.js，并放置在应用根目录下__
      * __如果您欲选择“iOS”系统的设备进行调试，请将xface.ios.js重名为xface.js，并放置在应用根目录下__

   * 需保证为Chrome设置了启动参数：--allow-file-access-from-files, 否则本地应用将无法正常加载，控制台输出：“FileSystem error: SECURITY_ERR”

   * 需保证为Chrome设置了启动参数：--disable-web-security ，否则某些场景下应用将无法正确获取网络数据，控制台输出：“XMLHttpRequest cannot load http://xxx. Origin http://xxx is not allowed by Access-Control-Allow-Origin.”
  


