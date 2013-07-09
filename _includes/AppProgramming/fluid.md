#### 流式布局（弹性盒模型）

- 流式布局（fluid layout）就是一个根据屏幕的尺寸可自行改变位置以取得相对定位的一种布局方式。
- 这种布局方式相对于定位布局来说，对浏览器的渲染负担更小(在ios上，当一个页面有大量定位布局的元素时有引起崩溃的可能）。

##### 弹性盒模型

- 说到流式布局，我们就不得不提到弹性盒模型。这是目前实现流式布局最基本的工具。
- 相对于传统布局手段，弹性盒模型具有诸多优点，比如：

    - 不需要使用float等属性来定义横向布局元素。
    - 对居中定位且不确定宽高的元素很方便（不需要额外的js来临时计算）。
    - 对于不确定宽高的页面可以使用自动填充的规则平分剩余空间，并可以设置固定部分和自适应部分一起使用，适应屏幕不同的分辨率。
    - 对于设定100%宽度带border属性的元素可以自适应(-webkit-box-sizing:border-box)，避免带边框的盒子宽度100%时溢出 。


**下面是我们常见的页面结构**

![](img/liuShiBuJ.png)

**使用流式布局可以让页面变得更为简单和易读**

![](img/liuShiBuJ_.png)

    <div id="vBox">
    <div class="header">HEADER</div>
    <div id="hBox">
    <div class="left">LEFT</div>
    <div class="center">CENTER</div>
    <div class="right">RIGHT</div>
    </div>
    <div class="bottom">BOTTOM</div>
    </div>

