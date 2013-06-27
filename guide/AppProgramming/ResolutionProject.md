---
layout: default
title: openxface
---

## [适配方案](index.html) > 分辨率适配的解决方案 
<br>
### 使用meta标签进行缩放适配

- **该方案仅适用于xFace平台**
	- Webkit具备高效缩放视图的能力，因此我们可以借助viewport的设置来让界面自动适应近似分辨率的屏幕.
	- Viewport为我们提供了丰富的接口，用于控制诸如是否允许用户缩放，是否自动匹配设备dpi等。
	- 示例：

	- `<meta name="viewport"content="width=480,user-scalable=yes">`

	- 需要特别注意的是，我们只能在其中设置一个值：width，并且把user-scalable设置为yes。因为Andriod平台对width属性的支持并不完美：当我们在content中设置了其它与分辨率相关的属性，都会使其出现错误的缩放结果。
	- Viewport中的width：定义物理屏幕宽度对应的像素值。如果当前应用是以宽度480px来设计开发的，就将width设置为480。

### 使用js动态选择资源包

- 通过使用js判断不同的分辨率，引用不同的资源包进行适配。
- 优点：简单
- 缺点：增加了额外的资源，使得应用容量成倍增加。

