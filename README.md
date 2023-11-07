# Mtab书签

[Mtab书签官网](https://mtab.cc)

![](https://cn.mcecy.com/image/20231010/e738fe3a7db1a6323f8146830d835aab.jpg)


### 主要有以下特点

跨设备同步：不再为了在不同设备上找不到书签或笔记而苦恼。Mtab书签让你的浏览历史、收藏网址和重要笔记在所有设备上同步。从手机到平板，从PC到Mac，都能轻松访问你需要的信息。

跨浏览器支持：Mtab书签支持所有主流浏览器。Chrome、Firefox、Edge、Safari，无论你的选择是什么，都能在一应俱全的工具箱中找到你的书签和笔记。

多功能一体：Mtab书签不仅仅是一个书签工具，它还提供了一个实用的记事本功能，让你随时随地记录想法、灵感和待办事项。此外，它还内置了一些在线小工具，解决您的日常工作问题。

私有部署：如果部你对数据安全性有更高要求，Mtab书签也支持私有署。你可以将它部署在自己的服务器上，完全掌控你的数据，不受任何干扰。

免费无广告：Mtab书签坚守“免费无广告”的原则，为用户提供清爽的使用体验，没有任何干扰。

Mtab书签的界面设计美观简洁，操作简单直观，让你可以专注于你的网络活动，而不是应用本身。它是你高效、无忧的网络生活的理想伴侣。
高效流畅的操作体验：超级简约却强大的操作逻辑，没有繁琐的操作流程即可处理复杂的事情。

### Demo演示站

#### **[演示站Demo入口](https://demo.mtab.cc)**

演示账号：admin

演示密码：123456


# Mtab安装教程

## 注意本文档基于宝塔面板的环境下进行编写

**准备环境 Linux系统+php7.4+mysql8(mysql5.7也行，支持json就行)+Nginx+Redis;**

php请安装**redis,fileinfo,zip,curl,mysqli,json,json**等常用的扩展，然后并且解除一些禁用函数（宝塔默认禁用了一些函数）
常用的扩展如下，一般来说安装php除了上述几个，一下的都是有的，需要去php.ini去解除
```
Core
ctype
curl
date
dom
exif
fileinfo
filter
gd
gmp
hash
iconv
igbinary
imagick
json
libxml
mbstring
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_mysql
pdo_sqlite
Phar
posix
readline
redis
Reflection
session
SPL
sqlite3
standard
xml
xmlreader
xmlrpc
xmlwriter
zip
zlib
```
需要解除的函数具体如下

`shell_exec,putenv`

1，首先将代码下载到服务器网站目录下并且解压。

2，然后将解压出来的程序目录以及子目录全部授权>=755以上的权限。

3，将Nginx的网站目录设置为程序目录下的 public 目录。一定要配置伪静态规则

nginx的伪静态配置代码

``` javascript
location ~^/ {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php?s=$1  last;   break;
    }
}
```
4，然后配置好域名或者通过你自己的服务器的ip访问网站，不出意外会出现安装 页面，填写好一些基础的配置信息安装即可。（填写配置信息的是后请确保数据库账户和redis相关信息正确）

5，安装完成后即可访问网站，可通过登录安装时填写的账户登录网站进入后台


宝塔一键部署方式(预计国庆假期结束后一周左右上线)
进入宝塔->软件商店 找到一键部署，如下图所示

![](https://blog.mtab.cc/uploads/20230930/8e631b580f07edcb84dd4ec5a7aa4823.png)


然后搜索 mtab 然后选择Mtab书签点击一键部署，填写好相关信息即可部署完成

### 交流QQ群：694155153

