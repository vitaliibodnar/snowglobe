!function(e){function t(t){for(var o,i,r=t[0],h=t[1],l=t[2],c=0,u=[];c<r.length;c++)i=r[c],a[i]&&u.push(a[i][0]),a[i]=0;for(o in h)Object.prototype.hasOwnProperty.call(h,o)&&(e[o]=h[o]);for(f&&f(t);u.length;)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],o=!0,r=1;r<s.length;r++){var h=s[r];0!==a[h]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var o={},a={0:0},n=[];function i(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=o,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window.webpackJsonp=window.webpackJsonp||[],h=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var f=h;n.push([18,1]),s()}({13:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);s(13);var o=s(2),a=s.n(o),n=s(5);function i(e,t,s){var o=a()(".sg-section"),i=e.pageX-o.offset().left,r=e.pageY-o.offset().top;n.a.to(t,1,{x:(i-o.width()/2)/o.width()*s,y:(r-o.height()/2)/o.height()*s/2,force3D:"true"})}a()(".sg-wrapper").mousemove(function(e){for(var t=1;t<=4;t++)i(e,".sg-section[data-section='"+Math.abs(t-5)+"']",-30*t);i(e,".sg-sky",-15)});var r=s(0);fetch("../src/img/bg-sky.svg").then(function(e){return e.text()}).then(function(e){a()(".sg-sky").append(e);a()("#sg-sky g > path")});var h=s(4);function l(e,t){var s=e/70;r.g.from(t,1.5,{y:-40,scale:1,opacity:0,ease:Bounce.easeOut,delay:1+s}),r.g.to(t,1.5,{y:0,scale:1.5,opacity:1,ease:Bounce.easeOut,delay:1+s}),r.g.to(t,1,{y:0,scale:1,opacity:1,ease:Bounce.easeOut,delay:1+s})}fetch("../src/img/trees-1-grouped.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="1"]').append('<div class="sg-section__trees">'+e+"</div>"),function(){var e=a()("#trees-bg-1 > g"),t=a()(".l-leaves > g"),s=a()(".r-leaves > g");function o(e,t,s,o){e.each(function(e,a){var n=new h.a({repeat:-1,yoyo:!0,paused:!1});n.to(a,t,{rotation:s,z:0,ease:Power0.easeNone,transformOrigin:o,force3D:"true"})})}e.each(function(e,t){l(e,t);var s=new h.a({repeat:-1,yoyo:!0,paused:!1});var o=Math.floor(6*Math.random())+3,a=function(e,t){return Math.random()*(t-e)+e}(-3,3);s.to(t,o,{rotation:a,z:0,ease:Power0.easeNone,transformOrigin:"bottom",force3D:"true"})}),o(t,2,3,"top right"),o(s,2,-3,"top left")}()}),fetch("../src/img/trees-2.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="2"]').append('<div class="sg-section__trees">'+e+"</div>"),a()("#bg-2-trees > path").each(function(e,t){l(e,t)})}),fetch("../src/img/trees-3.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="3"]').append('<div class="sg-section__trees">'+e+"</div>"),a()("#bg-3-trees > path").each(function(e,t){l(e,t)})});var f=s(3),c=s(11);fetch("../src/img/plane.svg").then(function(e){return e.text()}).then(function(e){a()(".sg-plane").append('<div class="sg-plane__wrapper">'+e+"</div>"),function(){var e=a()(".plane-smoke .st3"),t=new f.a,s=[];e.each(function(e,t){var o=new h.a({repeat:-1,yoyo:!1,paused:!1,force3D:"true"});o.from(t,1.5,{scale:0,rotation:-300,x:60,y:30,z:0,ease:c.a.easeNone}),o.to(t,1.5,{scale:1,rotation:250,x:-20,y:-10,z:0,ease:c.a.easeNone}),o.to(t,2,{scale:0,rotation:530,x:-80,y:50,z:0,ease:c.a.easeNone}),s.push(o)}),t.add(s,0,"normal",2)}(),function(){var e=a()(".plane-propeller");new h.a({repeat:-1,yoyo:!1,paused:!1,force3D:"true"}).to(e,.15,{rotation:180,ease:c.a.easeNone,transformOrigin:"center center"})}()});s(16),s(17),a()(".sg-carousel__slides");var u=a()(".sg-carousel__slide"),p=a()(".sg-carousel__arrow--next"),_=a()(".sg-carousel__arrow--prev");function d(){console.log("next"),u.each(function(e,t){var s=t.getAttribute("data-current");console.log(s),3==s?t.setAttribute("data-current",1):t.setAttribute("data-current",+s+1)})}function g(){console.log("prev"),u.each(function(e,t){var s=t.getAttribute("data-current");console.log(s),1==s?t.setAttribute("data-current",3):t.setAttribute("data-current",+s-1)})}p.click(function(){d()}),_.click(function(){g()}),a()('.sg-carousel__slide[data-current="3"]').click(function(){console.log("current 3 click"),d()}),a()(".sg-carousel").swipe({swipe:function(e,t,s,o,a,n){console.log(t),"left"==t?d():"right"==t&&g()}}),function(){for(var e=0,t=["webkit","moz"],s=0;s<t.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[t[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[s]+"CancelAnimationFrame"]||window[t[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,s){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),n=window.setTimeout(function(){t(o+a)},a);return e=o+a,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var m=document.getElementById("canvas_globe");function v(e){this.canvas=e,this.context=e.getContext("2d"),this.flakes=[],this.snow_pile=[],this.snow_curve=[],this.middle=Math.floor(e.width/2),this.images=[];for(var t=0;t<this.canvas.width;t+=1)this.snow_curve.push(Math.floor(55e-5*Math.pow(t-this.middle,2))+140)}v.prototype.addFlake=function(e,t,s,o,a,n,i,r,h,l,f){var c={width:e,height:t,x_pos:s,y_pos:o,move_y:a,move_x:n,move_x_speed:i,move_x_max:s+n,move_x_min:s-n,move_x_dir:!Math.floor(2*Math.random()+0),stop_chance:r,stopped_falling:!1,returning:!1,move_y_return_height:Math.floor(Math.random()*this.canvas.height+0),move_y_return:-Math.floor(2*Math.random()+2),move_x_speed_return:Math.floor(2*Math.random()+2),rotate_amount:h,rotate_change:h,front_flake:l,color:f};this.flakes.push(c)},v.prototype.render=function(){var e=this.flakes.length;this.images.length;this.canvas.width=this.canvas.width;for(var t=0;t<e;t+=1)!1===this.flakes[t].front_flake&&(this.flakes[t].stopped_falling?this.context.fillStyle="rgba(255,255,255,0.4)":this.context.fillStyle=this.flakes[t].color,this.context.fillRect(this.flakes[t].x_pos,this.flakes[t].y_pos,this.flakes[t].width,this.flakes[t].height));for(t=0;t<e;t+=1)!0===this.flakes[t].front_flake&&(this.flakes[t].stopped_falling?this.context.fillStyle="rgba(255,255,255,0.5)":this.context.fillStyle=this.flakes[t].color,this.context.fillRect(this.flakes[t].x_pos,this.flakes[t].y_pos,this.flakes[t].width,this.flakes[t].height))},v.prototype.updateFlakePosition=function(){for(var e,t,s,o=this.flakes.length,a=0,n=0,i=0;i<o;i+=1){if(!1===this.flakes[i].stopped_falling){if((a=this.flakes[i].y_pos+this.flakes[i].move_y)>(e=this.canvas.height-this.snow_curve[Math.floor(this.flakes[i].x_pos)]))if(1===Math.floor(Math.random()*this.flakes[i].stop_chance+1)){this.flakes[i].stopped_falling=!0,t=this.snow_pile[Math.floor(this.flakes[i].x_pos)+r]||0;for(var r=0;r<this.flakes[i].width;r+=1)t>(s=this.snow_pile[Math.floor(this.flakes[i].x_pos)+r]||0)&&(t=s);this.flakes[i].y_pos=e-this.flakes[i].height-t,this.flakes[i].x_pos=Math.floor(this.flakes[i].x_pos),s=t+this.flakes[i].height;for(var h=0;h<this.flakes[i].width;h+=1)(this.snow_pile[Math.floor(this.flakes[i].x_pos)+h]||0)<s&&(this.snow_pile[Math.floor(this.flakes[i].x_pos)+h]=s)}else this.flakes[i].y_pos=-1*this.flakes[i].height;else this.flakes[i].y_pos=a;this.flakes[i].move_x_dir?(n=this.flakes[i].x_pos+this.flakes[i].move_x_speed)>this.flakes[i].move_x_max?(this.flakes[i].x_pos-=this.flakes[i].move_x_speed,this.flakes[i].move_x_dir=!1):n>this.canvas.width?this.flakes[i].x_pos=-this.flakes[i].width:this.flakes[i].x_pos=n:(n=this.flakes[i].x_pos-this.flakes[i].move_x_speed)<this.flakes[i].move_x_min?(this.flakes[i].x_pos+=this.flakes[i].move_x_speed,this.flakes[i].move_x_dir=!0):this.flakes[i].x_pos=n<0?this.canvas.width+this.flakes[i].width:n}!0===this.flakes[i].returning&&this.flakes[i].y_pos<this.flakes[i].move_y_return_height&&(this.flakes[i].returning=!1,this.flakes[i].move_y/=this.flakes[i].move_y_return,this.flakes[i].move_x_speed/=this.flakes[i].move_x_speed_return)}},v.prototype.shake=function(){for(var e,t=this.flakes.length,s=this.images.length,o=(Math.floor(4*Math.random()+2),0);o<t;o+=1)!1===this.flakes[o].returning&&(this.flakes[o].move_y*=this.flakes[o].move_y_return,this.flakes[o].move_x_speed*=this.flakes[o].move_x_speed_return,this.flakes[o].returning=!0,this.flakes[o].stopped_falling=!1,this.flakes[o].move_y_return_height<0&&(this.flakes[o].move_y_return_height+=this.canvas.height/2),this.flakes[o].y_pos<this.flakes[o].move_y_return_height&&(this.flakes[o].move_y_return_height-=this.canvas.height/2));this.snow_pile=[];for(var a=0;a<s;a+=1)!1===(e=this.images[a]).animating_image&&(e.animating_image=!0)},v.prototype.startSnow=function(){var e=this;!function t(){requestAnimationFrame(t),e.updateFlakePosition(),e.render()}()};var k=new v(m),w=3e3,y=3,x=3;a()(window).width()<1025&&(w=1e3,y=10,x=10);for(var M=0;M<w;M+=1){var b=Math.floor(800*Math.random()+1),A=Math.floor(800*Math.random()+1),F=Math.floor(Math.random()*y+1),O=Math.floor(Math.random()*x+1),P=Math.floor(150*Math.random()+50)/100,S=Math.floor(200*Math.random()+50),j=Math.floor(70*Math.random()+10)/100,q=Math.floor(5*Math.random()+5)*Math.PI/180,z=1===Math.floor(6*Math.random()+1),D=Math.floor(10*Math.random()+1)/10;k.addFlake(F,O,b,A,P,S,j,2,q,z,"rgba(255, 255, 255, "+D+")")}k.startSnow(),m.onclick=function(){k.shake()}}});
//# sourceMappingURL=app.bb13dc60.js.map