#### 横竖屏适配方案

**我们推荐使用CSS3的media选择器来定义两个方向的布局样式**

- 可以将不同方向的样式分离为两个外联css文件，如下例：

`<link type="text/css" media="all and (orientation:landscape)" href="landscape.css"/>`

`<link type="text/css" media="all and (orientation:portrait)" href="portrait.css"/>`

- 浏览器会在屏幕方向发生变化的时候自动应用landscape.css或者portrait.css所定义的样式。
- 这两种media切换的工作模式，类似于伪类:hover。
