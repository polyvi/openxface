/**
Script: Slideshow.Push.js
	Slideshow.Push - Push extension for Slideshow.

License:
	MIT-style license.

Copyright:
	Copyright (c) 2008 [Aeron Glemann](http://www.electricprism.com/aeron/).
	
Dependencies:
	Slideshow.
	Mootools 1.3.1 More: Fx.Elements.
*/
Slideshow.Push=new Class({Extends:Slideshow,initialize:function(b,c,a){a=a||{};a.overlap=true;this.parent(b,c,a)},_show:function(c){var a=[this.image,((this.counter%2)?this.a:this.b)];if(!this.image.retrieve("fx")){this.image.store("fx",new Fx.Elements(a,{duration:this.options.duration,link:"cancel",onStart:this._start.bind(this),onComplete:this._complete.bind(this),transition:this.options.transition}))}this.image.set("styles",{left:"auto",right:"auto"}).setStyle(this.direction,this.width);var b={"0":{},"1":{}};b["0"][this.direction]=[this.width,0];b["1"][this.direction]=[0,-this.width];if(a[1].getStyle(this.direction)=="auto"){var d=this.width-a[1].width;a[1].set("styles",{left:"auto",right:"auto"}).setStyle(this.direction,d);b["1"][this.direction]=[d,-this.width]}if(c){for(var e in b){b[e][this.direction]=b[e][this.direction][1]}this.image.retrieve("fx").cancel().set(b)}else{this.image.retrieve("fx").start(b)}}});