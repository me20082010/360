使用css
link中的rel：告诉浏览器外部引用的资源和这个html的关系


属性选择器
[class^=icon-]以icon-开头的
[class$=icon-]以icon-结尾的

选择器的优先级
Specificity：
内联？ id的个数？ （伪）类的个数？ 标签的个数？

继承
某些属性会自动继承父元素的值，除非显示指定一个值，一般与文字相关的属性会有继承
1.font-family
 serif:衬线体（Georgia\宋体）
 sans-serif：无衬线体（Arial\Helvetica\黑体\微软雅黑）
 monospace：等宽字体(Consolas\courier\宋体)
 
 指定中文字体的时候不能把中文字体放在英文字体的前面如
 font-family:"Microsoft Yahei",Arial,sans-serif;//这个样子是错的

2.line-height
段落文字一般取值1.4~1.8;

