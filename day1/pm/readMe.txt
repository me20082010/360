HTTP与性能优化

屈光宇 imququ.com 

HTTP技术简介：
TCP的三次握手建立连接->数据传输->四次挥手断开连接

1.创建一个TCPclient  TCPClient.js

HTTP是什么？
HTTP是应用层协议；
联网细节交给了通用的，可靠的因特网传输协议：TCP/IP;


乱码的解决  meta http 浏览器设置

什么是URL
<scheme>://<user>:<password>@<host>:<port>/<path>:<params>?<query>#<frag>


什么是HTTP状态码
200 OK
304 Not Modified
404 Not Found
502 Bad Gateway


Header 分类
通用：Date Connection
请求：User-Agent Accept Acceot-Encoding
响应：Server Last-Modified

实体：Content-Type Content-Length

扩展（自定义）
X-Powered-By
X-Varnish-Hits

总结下HTTP请求-响应过程
1.浏览器从URL中解析出服务器的主机名
2.浏览器将主机名转换成服务器的IP地址（DNS解析）
3.浏览器从URL中解析出浏览器，默认80
4.浏览器建立与服务器的TCP连接
5.浏览器向服务器发送一条HTTP请求报文
6.服务器向浏览器返回一条HTTP响应报文
7.关闭连接，浏览器显示响应

请求类型：
GET/POST：
GET/search.html?s=hello HTTP/1.1
POST/admin/HTTP/1.1 后面有正文

查询类用GET（无害）  提交类用POST（内容多，参数不在URL中显示，参数在正文中显示）
POST不代表安全，抓包还是可以拿到


Cookie
请求头里的cookie和响应头里面的Set-Cookie
会越来越大
使用Session

Accept-Encoding/Content-Encoding

HTTP抓包工具
Wireshark
Fiddler
Firebug for Firefox
Chrome开发者工具


HTTP 发包工具
telnet/curl
Fiddler
Tamper for Firefox
Postman for Chrome
Paw for OSX


HTTP性能优化 WPO
Web应用而不是Web页面 SPA


缓存：
可以提高第二次的性能：last-Modified  ETag Expires Cache-Control
浏览器请求的三种方式：
在浏览器地址栏回车 点击链接：使用全部缓存
F5忽略Expires和Caches-Control 发起协议请求
CTRL+F5 忽略所有缓存


图解HTTP（入门）
HTTP权威指南（工具书）
Web性能权威指南（优化）电子版免费阅读英文版
程序是怎么样跑起来的（易解）
计算机是怎么样跑起来的（易解）
