!function(e){function t(t){for(var s,n,r=t[0],l=t[1],h=t[2],f=0,c=[];f<r.length;f++)n=r[f],a[n]&&c.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(u&&u(t);c.length;)c.shift()();return i.push.apply(i,h||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],s=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=o[0]))}return e}var s={},a={0:0},i=[];function n(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=s,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var h=0;h<r.length;h++)t(r[h]);var u=l;i.push([53,1]),o()}({25:function(e,t,o){},53:function(e,t,o){"use strict";o.r(t);o(25);var s=o(1),a=o.n(s),i=o(0);function n(e,t,o){var s=a()(".sg-section"),n=e.pageX-s.offset().left,r=e.pageY-s.offset().top;i.h.to(t,1,{x:(n-s.width()/2)/s.width()*o,y:(r-s.height()/2)/s.height()*o/2,force3D:"false"})}"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0||a()(".sg-wrapper").mousemove(function(e){for(var t=1;t<=4;t++)n(e,".sg-section[data-section='"+Math.abs(t-5)+"']",-30*t);n(e,".sg-sky",-10),n(e,".sg-stars",-20),n(e,".sg-baloon",-30)});o(7);fetch("../src/img/bg-sky.svg").then(function(e){return e.text()}).then(function(e){a()(".sg-sky").append(e);a()("#sg-sky g > path")}),window.onload=function(){setTimeout(function(){a()("#app-preloader").addClass("is-hidden"),a()(".sg-splash").css("background","none"),a()(".sg-baloon").addClass("is-moving"),a()(".sg-sky").css("top","-200px"),a()(".sg-section").addClass("is-visible")},1e3),setTimeout(function(){a()(".sg-stars").addClass("is-visible")},3e3)},a()(".sg-start").click(function(){a()(".sg-stars").removeClass("is-visible"),a()(".sg-sky").css("top","-5000px"),a()(".sg-baloon").addClass("is-moving-upper"),a()(".sg-section").addClass("is-active"),a()(".sg-plane__wrapper").addClass("is-moving"),a()(".sg-splash").css("z-index","0"),setTimeout(function(){a()(".sg-carousel").addClass("is-visible")},3e3)});var r=o(4);function l(e,t){var o=e/70;i.h.from(t,1.5,{y:-40,scale:1,opacity:0,ease:Bounce.easeOut,delay:1+o}),i.h.to(t,1.5,{y:0,scale:1.5,opacity:1,ease:Bounce.easeOut,delay:1+o}),i.h.to(t,1,{y:0,scale:1,opacity:1,ease:Bounce.easeOut,delay:1+o})}a()(".sg-start").click(function(){fetch("../src/img/trees-1-grouped.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="1"]').append('<div class="sg-section__trees">'+e+"</div>"),function(){var e=a()("#trees-bg-1 > g");a()(".l-leaves > g"),a()(".r-leaves > g");e.each(function(e,t){l(e,t);new r.a({repeat:-1,yoyo:!0,paused:!1});Math.floor(6*Math.random()),function(e,t){Math.random()}(-3,3)})}()}),fetch("../src/img/trees-2.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="2"]').append('<div class="sg-section__trees">'+e+"</div>"),a()("#bg-2-trees > path").each(function(e,t){l(e,t)})}),fetch("../src/img/trees-3.svg").then(function(e){return e.text()}).then(function(e){a()('.sg-section[data-section="3"]').append('<div class="sg-section__trees">'+e+"</div>"),a()("#bg-3-trees > path").each(function(e,t){l(e,t)})})});var h=o(3),u=o(12);fetch("../src/img/plane.svg").then(function(e){return e.text()}).then(function(e){a()(".sg-plane").append('<div class="sg-plane__wrapper">'+e+"</div>"),function(){var e=a()(".plane-smoke .st3"),t=new h.a,o=[];e.each(function(e,t){var s=new r.a({repeat:-1,yoyo:!1,paused:!1,force3D:"true"});s.from(t,1.5,{scale:0,rotation:-300,x:60,y:30,z:0,ease:u.a.easeNone}),s.to(t,1.5,{scale:1,rotation:250,x:-20,y:-10,z:0,ease:u.a.easeNone}),s.to(t,2,{scale:0,rotation:530,x:-80,y:50,z:0,ease:u.a.easeNone}),o.push(s)}),t.add(o,0,"normal",2)}(),function(){var e=a()(".plane-propeller");new r.a({repeat:-1,yoyo:!1,paused:!1,force3D:"true"}).to(e,.15,{rotation:180,ease:u.a.easeNone,transformOrigin:"center center"})}()});o(28),o(29),a()(".sg-carousel__slides");var f=a()(".sg-carousel__slide"),c=a()(".sg-carousel__arrow--next"),d=a()(".sg-carousel__arrow--prev");function y(){f.each(function(e,t){var o=t.getAttribute("data-current");3==o?t.setAttribute("data-current",1):t.setAttribute("data-current",+o+1)})}function g(){f.each(function(e,t){var o=t.getAttribute("data-current");1==o?t.setAttribute("data-current",3):t.setAttribute("data-current",+o-1)})}function m(e,t){e.mouseenter(function(){a()('.sg-carousel__slide[data-current="'+t+'"]').addClass("is-hovered")}),e.mouseleave(function(){a()('.sg-carousel__slide[data-current="'+t+'"]').removeClass("is-hovered")})}c.click(function(){y()}),d.click(function(){g()}),a()(window).width()<768&&a()(".sg-section").swipe({swipe:function(e,t,o,s,a,i){"left"==t?y():"right"==t&&g()}}),m(c,3),m(d,2);o(30);for(var p=o(17),v=o(24),w=o.n(v),_=document.getElementsByClassName("canvas_globe"),k=0;k<_.length;k++)b(_[k]);function b(e){!function(){for(var e=0,t=["webkit","moz"],o=0;o<t.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,o){var s=(new Date).getTime(),a=Math.max(0,16-(s-e)),i=window.setTimeout(function(){t(s+a)},a);return e=s+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var t=e;function o(e){this.canvas=e,this.context=e.getContext("2d"),this.flakes=[],this.snow_pile=[],this.snow_curve=[],this.middle=Math.floor(e.width/2),this.images=[];for(var t=0;t<this.canvas.width;t+=1)this.snow_curve.push(Math.floor(55e-5*Math.pow(t-this.middle,2))+45)}o.prototype.addFlake=function(e,t,o,s,a,i,n,r,l,h,u){var f={width:e,height:t,x_pos:o,y_pos:s,move_y:a,move_x:i,move_x_speed:n,move_x_max:o+i,move_x_min:o-i,move_x_dir:!Math.floor(2*Math.random()+0),stop_chance:r,stopped_falling:!1,returning:!1,move_y_return_height:Math.floor(Math.random()*this.canvas.height+0),move_y_return:-Math.floor(2*Math.random()+2),move_x_speed_return:Math.floor(2*Math.random()+2),rotate_amount:l,rotate_change:l,front_flake:h,color:u};this.flakes.push(f)},o.prototype.render=function(){var e=this.flakes.length;this.images.length;this.canvas.width=this.canvas.width;for(var t=0;t<e;t+=1)!1===this.flakes[t].front_flake&&(this.flakes[t].stopped_falling?this.context.fillStyle="rgba(255,255,255,0.4)":this.context.fillStyle=this.flakes[t].color,this.context.fillRect(this.flakes[t].x_pos,this.flakes[t].y_pos,this.flakes[t].width,this.flakes[t].height));for(t=0;t<e;t+=1)!0===this.flakes[t].front_flake&&(this.flakes[t].stopped_falling?this.context.fillStyle="rgba(255,255,255,0.5)":this.context.fillStyle=this.flakes[t].color,this.context.fillRect(this.flakes[t].x_pos,this.flakes[t].y_pos,this.flakes[t].width,this.flakes[t].height))},o.prototype.updateFlakePosition=function(){for(var e,t,o,s=this.flakes.length,a=0,i=0,n=0;n<s;n+=1){if(!1===this.flakes[n].stopped_falling){if((a=this.flakes[n].y_pos+this.flakes[n].move_y)>(e=this.canvas.height-this.snow_curve[Math.floor(this.flakes[n].x_pos)]))if(1===Math.floor(Math.random()*this.flakes[n].stop_chance+1)){this.flakes[n].stopped_falling=!0,t=this.snow_pile[Math.floor(this.flakes[n].x_pos)+r]||0;for(var r=0;r<this.flakes[n].width;r+=1)t>(o=this.snow_pile[Math.floor(this.flakes[n].x_pos)+r]||0)&&(t=o);this.flakes[n].y_pos=e-this.flakes[n].height-t,this.flakes[n].x_pos=Math.floor(this.flakes[n].x_pos),o=t+this.flakes[n].height;for(var l=0;l<this.flakes[n].width;l+=1)(this.snow_pile[Math.floor(this.flakes[n].x_pos)+l]||0)<o&&(this.snow_pile[Math.floor(this.flakes[n].x_pos)+l]=o)}else this.flakes[n].y_pos=-1*this.flakes[n].height;else this.flakes[n].y_pos=a;this.flakes[n].move_x_dir?(i=this.flakes[n].x_pos+this.flakes[n].move_x_speed)>this.flakes[n].move_x_max?(this.flakes[n].x_pos-=this.flakes[n].move_x_speed,this.flakes[n].move_x_dir=!1):i>this.canvas.width?this.flakes[n].x_pos=-this.flakes[n].width:this.flakes[n].x_pos=i:(i=this.flakes[n].x_pos-this.flakes[n].move_x_speed)<this.flakes[n].move_x_min?(this.flakes[n].x_pos+=this.flakes[n].move_x_speed,this.flakes[n].move_x_dir=!0):this.flakes[n].x_pos=i<0?this.canvas.width+this.flakes[n].width:i}!0===this.flakes[n].returning&&this.flakes[n].y_pos<this.flakes[n].move_y_return_height&&(this.flakes[n].returning=!1,this.flakes[n].move_y/=this.flakes[n].move_y_return,this.flakes[n].move_x_speed/=this.flakes[n].move_x_speed_return)}},o.prototype.shake=function(){for(var e,t=this.flakes.length,o=this.images.length,s=(Math.floor(4*Math.random()+2),0);s<t;s+=1)!1===this.flakes[s].returning&&(this.flakes[s].move_y*=this.flakes[s].move_y_return,this.flakes[s].move_x_speed*=this.flakes[s].move_x_speed_return,this.flakes[s].returning=!0,this.flakes[s].stopped_falling=!1,this.flakes[s].move_y_return_height<0&&(this.flakes[s].move_y_return_height+=this.canvas.height/2),this.flakes[s].y_pos<this.flakes[s].move_y_return_height&&(this.flakes[s].move_y_return_height-=this.canvas.height/2));this.snow_pile=[];for(var a=0;a<o;a+=1)!1===(e=this.images[a]).animating_image&&(e.animating_image=!0)},o.prototype.startSnow=function(){var e=this;!function t(){requestAnimationFrame(t),e.updateFlakePosition(),e.render()}()};var s=new o(t),n=13e3,r=6,l=6;(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<1025&&(n=13e3,r=6,l=6);for(var h=0;h<n;h+=1){var u=Math.floor(800*Math.random()+1),f=Math.floor(800*Math.random()+1),c=Math.floor(Math.random()*r+1),d=Math.floor(Math.random()*l+1),y=Math.floor(150*Math.random()+50)/100,g=Math.floor(200*Math.random()+50),m=Math.floor(70*Math.random()+10)/30,v=Math.floor(5*Math.random()+5)*Math.PI/180,_=1===Math.floor(6*Math.random()+1),k=Math.floor(10*Math.random()+1)/10;s.addFlake(c,d,u,f,y,g,m,1,v,_,"rgba(255, 255, 255, "+k+")")}s.startSnow();var b=document.querySelectorAll(".sg-carousel__slide > div"),x=!1,M=null;var A=a()(".sg-title-shake"),Y=a()(".sg-title-select"),T=["Today it's up to you to create the peacefulness you long for.","A friend asks only for your time not your money.","If you refuse to accept anything but the best, you very often get it.","A smile is your passport into the hearts of others.","A good way to keep healthy is to eat more Chinese food.","Your high-minded principles spell success.","Hard work pays off in the future, laziness pays off now.","Change can hurt, but it leads a path to something better.","Enjoy the good luck a companion brings you.","People are naturally attracted to you.","A chance meeting opens new doors to success and friendship.","You learn from your mistakes... You will learn a lot today.","If you have something good in your life, don't let it go!","What ever you're goal is in life, embrace it visualize it, and for it will be yours.","Your shoes will make you happy today.","You cannot love life until you live the life you love.","Be on the lookout for coming events; They cast their shadows beforehand.","Land is always on the mind of a flying bird.","The man or woman you desire feels the same about you.","Meeting adversity well is the source of your strength.","A dream you have will come true.","Our deeds determine us, as much as we determine our deeds.","Never give up. You're not a failure if you don't give up.","You will become great if you believe in yourself.","There is no greater pleasure than seeing your loved ones prosper.","You will marry your lover.","A very attractive person has a message for you.","You already know the answer to the questions lingering inside your head.","It is now, and in this world, that we must live.","You must try, or hate yourself for not trying.","You can make your own happiness.","The greatest risk is not taking one.","The love of your life is stepping into your planet this summer.","Love can last a lifetime, if you want it to.","Adversity is the parent of virtue.","Serious trouble will bypass you.","A short stranger will soon enter your life with blessings to share.","Now is the time to try something new.","Wealth awaits you very soon.","If you feel you are right, stand firmly by your convictions.","If winter comes, can spring be far behind?","Keep your eye out for someone special.","You are very talented in many ways.","A stranger, is a friend you have not spoken to yet.","A new voyage will fill your life with untold memories.","You will travel to many exotic places in your lifetime.","Your ability for accomplishment will follow with success.","Nothing astonishes men so much as common sense and plain dealing.","Its amazing how much good you can do if you dont care who gets the credit.","Everyone agrees. You are the best.","Jealousy doesn't open doors, it closes them!","It's better to be alone sometimes.","When fear hurts you, conquer it and defeat it!","Let the deeds speak.","You will be called in to fulfill a position of high honor and responsibility.","The man on the top of the mountain did not fall there.","You will conquer obstacles to achieve success.","Joys are often the shadows, cast by sorrows.","Fortune favors the brave.","An upward movement initiated in time can counteract fate.","A journey of a thousand miles begins with a single step.","Sometimes you just need to lay on the floor.","Never give up. Always find a reason to keep trying.","If you have something worth fighting for, then fight for it.","Stop wishing. Start doing.","Hone your competitive instincts.","Finish your work on hand don't be greedy.","For success today, look first to yourself.","Your fortune is as sweet as a cookie.","Integrity is the essence of everything successful.","If you're happy, you're successful.","You will always be surrounded by true friends.","Believing that you are beautiful will make you appear beautiful to others around you.","Happinees comes from a good life.","Before trying to please others think of what makes you happy.","When hungry, order more Chinese food.","Your golden opportunity is coming shortly.","For hate is never conquered by hate. Hate is conquered by love .","You will make many changes before settling down happily.","A man is born to live and not prepare to live.","You cannot become rich except by enriching others.","Don't pursue happiness - create it.","You will be successful in love.","All your fingers can't be of the same length.","Wise sayings often fall on barren ground, but a kind word is never thrown away.","A lifetime of happiness is in store for you.","It is very possible that you will achieve greatness in your lifetime.","Be tactful; overlook your own opportunity.","You are the controller of your destiny.","Everything happens for a reson.","How can you have a beutiful ending without making beautiful mistakes.","You can open doors with your charm and patience.","Welcome the change coming into your life.","There will be a happy romance for you shortly.","Your fondest dream will come true within this year.","You have a deep interest in all that is artistic.","Your emotional nature is strong and sensitive.","A letter of great importance may reach you any day now.","Good health will be yours for a long time.","You will become better acquainted with a coworker.","To be old and wise, you must first be young and stupid.","Failure is only the opportunity to begin again more intelligently.","Integrity is doing the right thing, even if nobody is watching.","Conquer your fears or they will conquer you.","You are a lover of words; One day you will write a book.","In this life it is not what we take up, but what we give up, that makes us rich.","Fear can keep us up all night long, but faith makes one fine pillow.","Seek out the significance of your problem at this time. Try to understand.","He who slithers among the ground is not always a foe.","You learn from your mistakes, you will learn a lot today.","You only need look to your own reflection for inspiration.","You are not judged by your efforts you put in; you are judged on your performance.","Rivers need springs.","Good news from afar may bring you a welcome visitor.","When all else seems to fail, smile for today and just love someone.","Patience is a virtue, unless its against a brick wall.","When you look down, all you see is dirt, so keep looking up.","If you are afraid to shake the dice, you will never throw a six.","Even if the person who appears most wrong, is also quite often right.","A single conversation with a wise man is better than ten years of study.","Happiness is often a rebound from hard work.","The world may be your oyster, but that doesn't mean you'll get it's pearl.","Your life will be filled with magical moments.","You're true love will show himself to you under the moonlight.","I think, you ate your fortune while you were eating your cookie.","If u love someone keep fighting for them.","Do what you want, when you want, and you will be rewarded.","Let your fantasies unwind...","The cooler you think you are the dumber you look.","Expect great things and great things will come.","The Wheel of Good Fortune is finally turning in your direction!","Don't lead if you won't lead.","You will always be successful in your professional career.","Share your hapiness with others today.","It's up to you to clearify.","Your future will be happy and productive.","Seize every second of your life and savor it.","Those who walk in other's tracks leave no footprints.","Failure is the mother of all success.","Difficulty at the beginning useually means ease at the end.","Do not seek so much to find the answer as much as to understand the question better.","Your way of doing what other people do their way is what makes you special.","A beautiful, smart, and loving person will be coming into your life.","Friendship is an ocean that you cannot see bottom.","Your life does not get better by chance, it gets better by change.","Our duty,as men and women,is to proceed as if limits to our ability did not exist.","A pleasant expeience is ahead:don't pass it by.","Our perception and attitude toward any situation will determine the outcome.","They say you are stubborn; you call it persistence.","Two small jumps are sometimes better than one big leap.","A new wardrobe brings great joy and change to your life.","The cure for grief is motion.","It's a good thing that life is not as serious as it seems to the waiter.","I hear and I forget. I see and I remember. I do and I understand."];function C(){Y.removeClass("is-visible"),A.addClass("is-visible"),setTimeout(function(){A.removeClass("is-visible"),Y.addClass("is-visible")},1500)}if(a()(window).width()<768){var I=0,F=new w.a({threshold:15});F.start(),window.addEventListener("shake",function(){if(++I>6){s.shake();var e=a()('.sg-carousel__slide[data-current="1"]').find(".canvas_globe");a()('.sg-final__img[data-hero="'+e.data("animal")+'"]').addClass("is-active");var t=T[Math.floor(Math.random()*T.length)];a()(".sg-final__msg").text(t),setTimeout(function(){a()(".sg-final").addClass("is-active")},1500)}else s.shake(),C(),function(){var e=a()('.sg-carousel__slide[data-current="1"]');e.addClass("is-shaking"),setTimeout(function(){e.removeClass("is-shaking")},3e3)}()})}else{var S={x:0,y:0};p.a.create(b,{type:"x,y",onPress:function(){S.x=this.x,S.y=this.y},onDragEnd:function(){i.h.to(this.target,1,{x:S.x,y:S.y})}}),p.a.create(t,{type:"x,y",onPress:function(){S.x=this.x,S.y=this.y},onDragStart:function(){M=0,x=!1,M=setTimeout(function(){x=!0},3e3),s.shake()},onDrag:function(){Y.removeClass("is-visible"),A.addClass("is-visible")},onDragEnd:function(){0==x?(clearTimeout(M),C()):function(e){a()('.sg-final__img[data-hero="'+e.getAttribute("data-animal")+'"]').addClass("is-active");var t=T[Math.floor(Math.random()*T.length)];a()(".sg-final__msg").text(t),setTimeout(function(){a()(".sg-final").addClass("is-active")},1500)}(e),i.h.to(this.target,1,{x:S.x,y:S.y})}})}a()(".sg-again").click(function(){a()(".sg-final").removeClass("is-active"),setTimeout(function(){a()(".sg-final__img").removeClass("is-active"),a()(".sg-final__msg").text("")},1500)})}}});
//# sourceMappingURL=app.0e723038.js.map