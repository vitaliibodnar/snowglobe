import $ from 'jquery';
import TweenMax from "gsap/TweenMax";
import TweenLite from "gsap/TweenLite";
import TimelineMax from "gsap/TimelineMax";

//Append sky.svg to sky container
fetch("../src/img/bg-sky.svg")
.then(response => response.text())
.then(svg => {
  $('.sg-sky').append(svg);

  var skyPath = $('#sg-sky g > path');
  
  // function skyAnimate() {
    
  // }
  // skyAnimate();
  
    // skyPath.each(function(index, el){
    //   let xMove = Math.random()*40,
    //       yMove = Math.random()*10;
    //   TweenMax.to(el, 10, {x:xMove, y:yMove, ease:Power0.easeInOut, repeat:-1, yoyo: true});
    // });
  
  // clearInterval(skyAnim);
});