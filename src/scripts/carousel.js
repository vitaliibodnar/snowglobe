import 'slick-carousel/slick/slick.scss';

import $ from 'jquery';
import swipe from 'jquery-touchswipe';


let carousel = $('.sg-carousel__slides'),
    slide = $('.sg-carousel__slide'),
    next = $('.sg-carousel__arrow--next'),
    prev = $('.sg-carousel__arrow--prev');


function nextSlide() {
  slide.each((i, item) => { 
    let  curPos = item.getAttribute('data-current');
    curPos == 3 ? item.setAttribute('data-current', 1) : item.setAttribute('data-current', +curPos + 1);
  });
}

function prevSlide() {
  slide.each((i, item) => { 
    let  curPos = item.getAttribute('data-current');
    curPos == 1 ? item.setAttribute('data-current', 3) : item.setAttribute('data-current', +curPos - 1);
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

var ww = $(window).width();
if (ww < 768) {
  swipeSlide();
}