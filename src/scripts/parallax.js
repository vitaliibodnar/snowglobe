import $ from 'jquery';
// import TweenMax from "gsap/TweenMax";
import TweenLite from "gsap/TweenLite";

//
// Background parallax movement
//
$(".sg-wrapper").mousemove(function(e) {
  let i = 1;
  for(i; i <= 4; i++) {
    parallaxBg(e, ".sg-section[data-section='" + Math.abs(i - 5) + "']", -30*i);
  }
});
  
function parallaxBg(e, target, movement) {
  var $this = $(".sg-section");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenLite.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement / 2,
    force3D: "false"
  });
}

//
//