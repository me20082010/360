前端开发基础课之HTML
赵文博 (whoami)

这节课讲什么？

HTML中的关键点
·doctype 与渲染模式
·语义化
HTML如何学些？

1.doctype的作用
·Document Type 文档类型声明 指定HTML页面使用的标准和版本 浏览器根据doctype指定文档的渲染模式
·渲染模式
  Quirks Mode 怪异模式
  Almost Standard Mode 准标准模式
  Standard Mode 标准模式

2.HTML4 vs XHTML 后者是前者的后代版本，但是因为太严格了，不是好的进化版

3.HTML5设计思想
  兼容已有内容
  避免不必要的复杂性
  解决现实的问题
  优雅降级
  尊重事实标准
  用户》开发者》浏览器厂商》标准制定者》理论完美
  
4.语义化
  HTML中的元素、属性及属性值都拥有某些含义，开发者应该遵循语义来编写HTML
  语义化的好处：可访问性 搜索引擎优化 易读 易维护
  
  
  元数据元素
  base:指定基准URL及连接打开方式
  title：页面标题
  script:引入脚本
  style:嵌入页面样式表
  link：引入外部资源，比如外部样式表
  noscript：浏览器不支持脚本时才显示的内容
  meta：页面元数据，描述页面基本信息的
   搜索引擎相关：keywords description 
   <meta name="keywords" content="前端，HTML">
   <meta name="description" content="前端基础课程">
   使用meta扩展HTML:
   <meta name="robots" content="noindex">//告诉搜索机器人不需要索引页面
   <meta name="format-detection" content="telphone=no">//告诉浏览器把识别电话、电子邮件的功能关掉
   <meta name="renderer" content="webkit">//告诉浏览器的渲染方式
   
   a链接里面的href：
   mailto: 电子邮件
   tel: 电话
   
   定义列表(key和value)
   <dl>
     <dt>导演：</dt>
     <dd>陈凯歌</dd>
     <dt>主演：</dt>
     <dd>张国荣</dd>
     <dd></dd>
   </dl>
  HTML公共属性：
  自定义data-*:扩展属性
  
  如何做到语义化？
    清楚了解每一个标签和属性的语义
    HTML中只描述内容和结构，样式留给CSS
    手写HTML，避免使用生成工具
    明明遵循行业通用标准（The hardest problem is to name the things,使用微格式(Microformats)）
    schema.org 
    aria: accessible rich internet applications
    <div role="button" aria-lable="Refresh"></div>
    
  HTML如何学习：
  教程
  webplatform.org的HTML教程
  CodeCademy HTML&CSS
  手册：
  HTML:The Living Standard
  W3C: HTML5 Spectification
  
  
  
    