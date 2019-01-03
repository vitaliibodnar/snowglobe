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
});



window.onload = function() {
  setTimeout(function(){
    $('#app-preloader').addClass('is-hidden');
    $('.sg-splash').css('background', 'none');
    showOnLoad();
  },1000);
  setTimeout(function(){
    $('.sg-stars').addClass('is-visible');
  },3000);
};

var goBtn = $('.sg-start');
goBtn.click(function(){
  $('.sg-stars').removeClass('is-visible');
  $('.sg-splash').css('z-index', '0');
  goBtnEvents();
  setTimeout(function(){
    $('.sg-splash').remove();
    // $('.sg-carousel').addClass('is-visible');
    TweenLite.to($('.sg-carousel'), 1, { opacity: 1});
    setTimeout(function(){
      $('.sg-carousel__slide:first-child').addClass('is-shaking');
      setTimeout(function(){
        $('.sg-carousel__slide:first-child').removeClass('is-shaking');
      }, 2000);
    },1000);    
  },3000);
});

function showOnLoad() {
  TweenLite.to($('.sg-sky'), 3, { top: '-200px'});
  TweenLite.to($('.sg-baloon'), 3, { ease: Back.easeOut.config(1.7), top: '5%'});
  TweenLite.to($('.sg-section'), 1, { bottom: '-40%'});
}

function goBtnEvents() {
  TweenLite.to($('.sg-sky'), 3, { top: '-5000px'});
  TweenLite.to($('.sg-baloon'), 3, { top: '-5000px'});
  TweenLite.to($('.sg-section'), 1, { bottom: '-4%'});
  movePlane();
}

function movePlane() {
  let tl = new TimelineMax({repeat:-1, yoyo:false, paused:false});
  tl.to($('.sg-plane__wrapper'), 25, { right: '-30%', ease:Linear.easeNone, repeat:-1 });
}