// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var i=e[t];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(e){var t=Date.now(),i=Math.max(n+16,t);return setTimeout(function(){e(n=i)},i-t)},window.cancelAnimationFrame=clearTimeout}}();var snowFall=function(){function e(){var e={flakeCount:35,flakeColor:"#ffffff",flakeIndex:999999,flakePosition:"absolute",minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,image:!1,collectionHeight:40},t=[],n={},o=0,s=0,a=0,r=0,l=function(e,t){for(var i in t)e.hasOwnProperty(i)&&(e[i]=t[i])},h=function(e,t){e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t},m=function(e,t){return Math.round(e+Math.random()*(t-e))},f=function(e,t){for(var i in t)e.style[i]=t[i]+("width"==i||"height"==i?"px":"")},d=function(t,i,n){this.x=m(a,s-a),this.y=m(0,o),this.size=i,this.speed=n,this.step=0,this.stepSize=m(1,10)/100,e.collection&&(this.target=canvasCollection[m(0,canvasCollection.length-1)]);var r=null;e.image?(r=new Image,r.src=e.image):(r=document.createElement("div"),f(r,{background:e.flakeColor})),r.className="snowfall-flakes",f(r,{width:this.size,height:this.size,position:e.flakePosition,top:0,left:0,"will-change":"transform",fontSize:0,zIndex:e.flakeIndex}),e.round&&f(r,{"-moz-border-radius":~~e.maxSize+"px","-webkit-border-radius":~~e.maxSize+"px",borderRadius:~~e.maxSize+"px"}),e.shadow&&f(r,{"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555",boxShadow:"1px 1px 1px #555"}),t.tagName===document.body.tagName?document.body.appendChild(r):t.appendChild(r),this.element=r,this.update=function(){this.y+=this.speed,this.y>o-(this.size+6)&&this.reset(),h(this.element,"translateY("+this.y+"px) translateX("+this.x+"px)"),this.step+=this.stepSize,this.x+=Math.cos(this.step),(this.x+this.size>s-a||this.x<a)&&this.reset()},this.reset=function(){this.y=0,this.x=m(a,s-a),this.stepSize=m(1,10)/100,this.size=m(100*e.minSize,100*e.maxSize)/100,this.element.style.width=this.size+"px",this.element.style.height=this.size+"px",this.speed=m(e.minSpeed,e.maxSpeed)}},w=function(){for(var e=0;e<t.length;e+=1)t[e].update();r=requestAnimationFrame(function(){w()})};return{snow:function(r,h){for(l(e,h),n=r,o=n.offsetHeight,s=n.offsetWidth,n.snow=this,"body"===n.tagName.toLowerCase()&&(a=25),window.addEventListener("resize",function(){o=n.clientHeight,s=n.offsetWidth},!0),i=0;i<e.flakeCount;i+=1)t.push(new d(n,m(100*e.minSize,100*e.maxSize)/100,m(e.minSpeed,e.maxSpeed)));w()},clear:function(){var e=null;e=n.getElementsByClassName?n.getElementsByClassName("snowfall-flakes"):n.querySelectorAll(".snowfall-flakes");for(var t=e.length;t--;)e[t].parentNode===n&&n.removeChild(e[t]);cancelAnimationFrame(r)}}}return{snow:function(t,i){if("string"==typeof i)if(t.length>0)for(var n=0;n<t.length;n++)t[n].snow&&t[n].snow.clear();else t.snow.clear();else if(t.length>0)for(var n=0;n<t.length;n++)(new e).snow(t[n],i);else(new e).snow(t,i)}}}();
Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var s=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(s+16,e);return setTimeout(function(){t(s=i)},i-e)},window.cancelAnimationFrame=clearTimeout}}(),function(t){t.snowfall=function(e,i){function s(s,n,a,r){this.x=s,this.y=n,this.size=a,this.speed=r,this.step=0,this.stepSize=h(1,10)/100,i.collection&&(this.target=m[h(0,m.length-1)]);var p=null;i.image?(p=document.createElement("img"),p.src=i.image):(p=document.createElement("div"),t(p).css({background:i.flakeColor})),t(p).attr({"class":"snowfall-flakes"}).css({width:this.size,height:this.size,position:i.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:i.flakeIndex}),t(e).get(0).tagName===t(document).get(0).tagName?(t("body").append(t(p)),e=t("body")):t(e).append(t(p)),this.element=p,this.update=function(){if(this.y+=this.speed,this.y>l-(this.size+6)&&this.reset(),this.element.style.top=this.y+"px",this.element.style.left=this.x+"px",this.step+=this.stepSize,y===!1?this.x+=Math.cos(this.step):this.x+=y+Math.cos(this.step),i.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&this.y<this.target.height+this.target.y){var t=this.target.element.getContext("2d"),e=this.x-this.target.x,s=this.y-this.target.y,n=this.target.colData;if(void 0!==n[parseInt(e)][parseInt(s+this.speed+this.size)]||s+this.speed+this.size>this.target.height)if(s+this.speed+this.size>this.target.height){for(;s+this.speed+this.size>this.target.height&&this.speed>0;)this.speed*=.5;t.fillStyle=o.flakeColor,void 0==n[parseInt(e)][parseInt(s+this.speed+this.size)]?(n[parseInt(e)][parseInt(s+this.speed+this.size)]=1,t.fillRect(e,s+this.speed+this.size,this.size,this.size)):(n[parseInt(e)][parseInt(s+this.speed)]=1,t.fillRect(e,s+this.speed,this.size,this.size)),this.reset()}else this.speed=1,this.stepSize=0,parseInt(e)+1<this.target.width&&void 0==n[parseInt(e)+1][parseInt(s)+1]?this.x++:parseInt(e)-1>0&&void 0==n[parseInt(e)-1][parseInt(s)+1]?this.x--:(t.fillStyle=o.flakeColor,t.fillRect(e,s,this.size,this.size),n[parseInt(e)][parseInt(s)]=1,this.reset())}(this.x+this.size>d-c||this.x<c)&&this.reset()},this.reset=function(){this.y=0,this.x=h(c,d-c),this.stepSize=h(1,10)/100,this.size=h(100*i.minSize,100*i.maxSize)/100,this.element.style.width=this.size+"px",this.element.style.height=this.size+"px",this.speed=h(i.minSpeed,i.maxSpeed)}}function n(){for(r=0;r<a.length;r+=1)a[r].update();p=requestAnimationFrame(function(){n()})}var a=[],o={flakeCount:35,flakeColor:"#ffffff",flakePosition:"absolute",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},i=t.extend(o,i),h=function(t,e){return Math.round(t+Math.random()*(e-t))};t(e).data("snowfall",this);var r=0,l=t(e).height(),d=t(e).width(),c=0,p=0;if(i.collection!==!1){var f=document.createElement("canvas");if(f.getContext&&f.getContext("2d"))for(var m=[],w=t(i.collection),g=i.collectionHeight,r=0;r<w.length;r++){var u=w[r].getBoundingClientRect(),x=t("<canvas/>",{"class":"snowfall-canvas"}),z=[];if(u.top-g>0){t("body").append(x),x.css({position:i.flakePosition,left:u.left+"px",top:u.top-g+"px"}).prop({width:u.width,height:g});for(var v=0;v<u.width;v++)z[v]=[];m.push({element:x.get(0),x:u.left,y:u.top-g,width:u.width,height:g,colData:z})}}else i.collection=!1}for(t(e).get(0).tagName===t(document).get(0).tagName&&(c=25),t(window).bind("resize",function(){l=t(e)[0].clientHeight,d=t(e)[0].offsetWidth}),r=0;r<i.flakeCount;r+=1)a.push(new s(h(c,d-c),h(0,l),h(100*i.minSize,100*i.maxSize)/100,h(i.minSpeed,i.maxSpeed)));i.round&&t(".snowfall-flakes").css({"-moz-border-radius":i.maxSize,"-webkit-border-radius":i.maxSize,"border-radius":i.maxSize}),i.shadow&&t(".snowfall-flakes").css({"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555","box-shadow":"1px 1px 1px #555"});var y=!1;i.deviceorientation&&t(window).bind("deviceorientation",function(t){y=.1*t.originalEvent.gamma}),n(),this.clear=function(){t(".snowfall-canvas").remove(),t(e).children(".snowfall-flakes").remove(),cancelAnimationFrame(p)}},t.fn.snowfall=function(e){return"object"==typeof e||void 0==e?this.each(function(i){new t.snowfall(this,e)}):"string"==typeof e?this.each(function(e){var i=t(this).data("snowfall");i&&i.clear()}):void 0}}(jQuery);
