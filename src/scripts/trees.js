import $ from 'jquery';
import TweenLight from "gsap/TweenLite";
// import TweenMax from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";
// import TimelineLite from "gsap/TimelineLite";


var goBtn = $('.sg-start');
goBtn.click(function(){
//
// FETCH TREES BG-1
//
fetch("../src/img/trees-1-grouped.svg")
.then(response => response.text())
.then(svg => {
  $('.sg-section[data-section="1"]').append('<div class="sg-section__trees">'+svg+'</div>');
  treesOne();
});

//
// FETCH TREES BG-2
//
fetch("../src/img/trees-2.svg")
.then(response => response.text())
.then(svg => {
  $('.sg-section[data-section="2"]').append('<div class="sg-section__trees">'+svg+'</div>');

  var trees = $('#bg-2-trees > path');
  trees.each(function(index, el){
    treesOnload(index, el);
  });
});

//
// FETCH TREES BG-3
//
fetch("../src/img/trees-3.svg")
.then(response => response.text())
.then(svg => {
  $('.sg-section[data-section="3"]').append('<div class="sg-section__trees">'+svg+'</div>');
  
  var trees = $('#bg-3-trees > path');
  trees.each(function(index, el){
    treesOnload(index, el);
  });
});
});


//
// ONLOAD BOUNCE ANIMATION
//
function treesOnload(i, element) {
  let time = i/70;
  TweenLight.from(element, 1.5, {y:-40, scale:1, opacity:0, ease:Bounce.easeOut, delay: 1+time});
  TweenLight.to(element, 1.5, {y:0, scale:1.5, opacity:1, ease:Bounce.easeOut, delay: 1+time});
  TweenLight.to(element, 1, {y:0, scale:1, opacity:1, ease:Bounce.easeOut, delay: 1+time});
}

//
// ONLOAD TREES BG-1 ANIMATION + WAVING
//
function treesOne() {
  var trees = $('#trees-bg-1 > g'),
      movingTree = $('#trees-bg-1 > .move-tree');
  var l = $('.l-leaves > g'),
      r = $('.r-leaves > g');

  trees.each(function(index, el){
    treesOnload(index, el);

    let tl = new TimelineMax({repeat:-1, yoyo:true, paused:false});
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    let rdt = Math.floor(Math.random() * 6) + 3,
        rdr = getRandomArbitrary(-3, 3);
    tl.to(movingTree, rdt, {rotation: rdr, z:0, ease:Power0.easeNone, transformOrigin:"bottom", force3D: "true"});
  });

  //
  // LEAVES WAVING
  //
  moveLeaves(l, 2, 3, 'top right');
  moveLeaves(r, 2, -3, 'top left');

  function moveLeaves(e, time, angle, axis) {
    e.each(function(index, el){
      let tl = new TimelineMax({repeat:-1, yoyo:true, paused:false});
      tl.to(el, time, {rotation: angle, z:0, ease:Power0.easeNone, transformOrigin:axis, force3D: "true"});
    });
  }
}