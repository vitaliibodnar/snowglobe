import $ from 'jquery';
// import TweenMax from "gsap/TweenMax";
import TweenLite from "gsap/TweenLite";

//
// Background parallax movement
//
function is_touch_device() {
  return (('ontouchstart' in window)
       || (navigator.MaxTouchPoints > 0)
       || (navigator.msMaxTouchPoints > 0));
 }
 
 if (!is_touch_device()) {
  var startSlide = true;
  var goBtn = $('.sg-start');
  goBtn.click(function(){
    startSlide = false;
  });

  $(".sg-wrapper").mousemove(function(e) {
    if(startSlide) {
      parallaxBg(e, ".sg-sky", -10);
      parallaxBg(e, ".sg-stars", -20);
      parallaxBg(e, ".sg-baloon", -30);
    } else {
      let i = 1;
      for(i; i <= 4; i++) {
        parallaxBg(e, ".sg-section[data-section='" + Math.abs(i - 5) + "'] .sg-section__bg", -30*i);
        parallaxBg(e, ".sg-section[data-section='" + Math.abs(i - 5) + "'] .sg-section__trees", -30*i);
        parallaxBg(e, ".sg-section[data-section='" + Math.abs(i - 5) + "'] .sg-carousel", -30*i);
      }
    }
  });
 }
  
function parallaxBg(e, target, movement) {
  var $this = $(".sg-section");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenLite.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement / 2,
    // z: 0,
    force3D: "false"
  });
}