import 'slick-carousel/slick/slick.scss';

import $ from 'jquery';
import swipe from 'jquery-touchswipe';
import TweenLite from 'gsap/TweenLite';
var ww = $(window).width();

let carousel = $('.sg-carousel__slides'),
    slide = $('.sg-carousel__slide'),
    next = $('.sg-carousel__arrow--next'),
    prev = $('.sg-carousel__arrow--prev');


// function nextSlide() {
//   slide.each((i, item) => { 
//     let curPos = item.getAttribute('data-current');
    // curPos == 3 ? item.setAttribute('data-current', 1) : item.setAttribute('data-current', +curPos + 1);
//   });
// }

// function prevSlide() {
//   slide.each((i, item) => { 
//     let curPos = item.getAttribute('data-current');
//     curPos == 1 ? item.setAttribute('data-current', 3) : item.setAttribute('data-current', +curPos - 1);
//   });
// }

function setSlides() {
  slide.each((i, item) => { 
    let curPos = item.getAttribute('data-current');
    if (curPos == 1) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '0', scaleX:1, scaleY:1, zIndex:3 });
      } else {
        TweenLite.to(item, 0.5, { left: '33.3333%', scaleX:1, scaleY:1, zIndex:3 });
      }
    } if (curPos == 3) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '66.6666%', scaleX:0.7, scaleY:0.7, zIndex:1 });
      }
    } if (curPos == 2) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '-90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '0', scaleX:0.7, scaleY:0.7, zIndex:2 });
      }
    }
  });
}
setSlides();

function nextSlide() {
  slide.each((i, item) => { 
    let curPos = item.getAttribute('data-current');
    if (curPos == 3) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '0', scaleX:1, scaleY:1, zIndex:3 });
      } else {
        TweenLite.to(item, 0.5, { left: '33.3333%', scaleX:1, scaleY:1, zIndex:3 });
      }
      item.setAttribute('data-current', 1);
    } if (curPos == 2) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '66.6666%', scaleX:0.7, scaleY:0.7, zIndex:1 });
      }
      item.setAttribute('data-current', 3);
    } if (curPos == 1) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '-90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '0', scaleX:0.7, scaleY:0.7, zIndex:2 });
      }
      item.setAttribute('data-current', 2);
    }
  });
}

function prevSlide() {
  slide.each((i, item) => { 
    let curPos = item.getAttribute('data-current');
    if (curPos == 3) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '-90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '0', scaleX:0.7, scaleY:0.7, zIndex:2 });
      }
      item.setAttribute('data-current', 2);
    } if (curPos == 2) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '0', scaleX:1, scaleY:1, zIndex:3 });
      } else {
        TweenLite.to(item, 0.5, { left: '33.3333%', scaleX:1, scaleY:1, zIndex:3 });
      }
      item.setAttribute('data-current', 1);
    } if (curPos == 1) {
      if (ww < 768) {
        TweenLite.to(item, 0.5, { left: '90%', scaleX:0.7, scaleY:0.7, zIndex:0 });
      } else {
        TweenLite.to(item, 0.5, { left: '66.6666%', scaleX:0.7, scaleY:0.7, zIndex:1 });
      }
      item.setAttribute('data-current', 3);
    }
  });
}

next.click(() => {
  nextSlide();
});

prev.click(() => {
  prevSlide();
});

function swipeSlide() {
  $('.sg-section').swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') {
        nextSlide();
      } else if (direction == 'right') {
        prevSlide();
      }
    }
  });
}


if (ww < 768) {
  swipeSlide();
}

function globeHover(arrow, slide) {
  arrow.mouseenter(function(){
    let gl = document.querySelectorAll('[data-current="'+slide+'"]');
    TweenLite.to(gl, 0.3, { scaleX:0.75, scaleY:0.75 });
  });
  arrow.mouseleave(function(){
    let gl = document.querySelectorAll('[data-current="'+slide+'"]');
    TweenLite.to(gl, 0.3, { scaleX:0.7, scaleY:0.7 });
  });
}
globeHover(next, 3);
globeHover(prev, 2);