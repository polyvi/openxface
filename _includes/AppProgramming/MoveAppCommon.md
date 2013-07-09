### 移动应用常用的布局方式

- 固定布局: 针对具体分辨率进行布局，一般web上常用，移动开发上不建议采用此种方式。

- 流式布局（使用弹性盒模型）: 一般分为header区、content区、footer区，采用上中下百分比(有时也固定header和footer高度)进行布局。

- 响应布局: 通过css3引入的@media，根据不同的分辨率做出不同的布局样式调整。

{% include AppProgramming/Fixed.md %}
{% include AppProgramming/fluid.md %}
{% include AppProgramming/Responsive.md %}


