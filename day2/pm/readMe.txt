盒模型
1.width:代表content-box的宽度；百分数相对于父容器（包含块）的content box的宽度；
2.height:代表content-box的高度；百分数相对于父容器（包含块）的content box的高度；只有当包含块的高度不依赖该元素的时候，百分比才会生效；
3.margin：margin折叠的问题;

浏览器是如何排版的----视觉格式化模型
1.先来了解几个概念
a.视口(viewport)
·浏览器的可视区域
·用户通过视口来查看网页内容
b.块级元素


float浮动：
·浮动可以实现将多个块级框并排显示
·浮动元素从排版流里面脱离，被漂浮在容器左边或者右边
·浮动元素不会影响其后面的块级框
·但是浮动元素后面的行级元素会避开
清除浮动的方法：
·clear:both/left/right;
      .clearfix::after{
        visibility: hidden;
        height: 0;
        content:"";
        clear: both;
      }

·使用BFC的方式：
  ·在BFC中，框会从包含块的顶部开始，从上到下摆放
  ·BFC内的浮动不会影响到BFC外部的元素
  ·BFC的高度会包含其内的浮动元素
  ·BFC不会和浮动元素重叠
  
  BFC的创建：
  ·浮动框
  ·绝对定位框
  ·非块级的块元素（inline-block）;
  
  .clearfix{
    overflow:hidden;
  }
  
  BFC的作用
  ·清除浮动
  ·防止margin折叠
  ·双栏布局


  z-index:只有放在同样的堆叠上下文中才有比较的可能；
  
 CSS预处理器
 LESS SASS