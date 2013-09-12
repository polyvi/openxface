---
layout: default
title: FAQ
lang: zh
---

* Auto-generated toc:
{:toc}

### 点击Emulator "Enable"选项后，Chrome为何没有重新加载页面

   * 请查看Chrome路径：Chrome所在路径不能含有中文字符

   * 对于手动安装Emulator的用户，请查看Chrome控制台:

      * 如果控制台输出："FileSystem error: SECURITY_ERR"，请为Chrome设置启动参数：__--allow-file-access-from-files__，否则本地应用将无法正常加载

      * 如果控制台输出："XMLHttpRequest cannot load http://xxx. Origin http://xxx is not allowed by Access-Control-Allow-Origin.", 请为Chrome设置启动参数：__--disable-web-security__,否则某些场景下应用将无法正确获取网络数据

### push操作以及xface.js内置操作为何失败

   * push操作以及xface.js内置操作仅在调试本地应用时有效

   * 请查看应用路径：本地应用所在绝对路径不能含有中文字符
   
   * 请确保Android设备连接状态正常


### 调试远端应用时，Emulator为何无法模拟xFace扩展

   * 调试远端应用时，需要应用开发者手动将与模拟器配套发布的xface.js文件放置到应用根目录下。具体操作如下：

      * __如果您选择“Android”系统的设备进行调试，请将xface.android.js重命名为xface.js，并放置在应用根目录下__

      * __如果您选择“iOS”系统的设备进行调试，请将xface.ios.js重名为xface.js，并放置在应用根目录下__
      
### 点击"install & launch",为何命令行提示"error:devcie not found"

   * 请确保Android设备连接状态正常
      
### 点击"launch player",为何命令行提示"Error Type 3"

   * 请先执行"install & launch",将xFacePlayer.apk安装到真机后，再尝试执行"launch player"





