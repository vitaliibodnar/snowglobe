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
    $('.sg-baloon').addClass('is-moving');
    $('.sg-sky').css('top', '-200px');
    $('.sg-section').addClass('is-visible');
  },1000);
  setTimeout(function(){
    $('.sg-stars').addClass('is-visible');
  },3000);
};

var goBtn = $('.sg-start');
goBtn.click(function(){
  $('.sg-stars').removeClass('is-visible');
  $('.sg-sky').css('top', '-5000px');
  $('.sg-baloon').addClass('is-moving-upper');
  $('.sg-section').addClass('is-active');
  $('.sg-plane__wrapper').addClass('is-moving');
  $('.sg-splash').css('z-index', '0');
  setTimeout(function(){
    $('.sg-splash').remove();
    $('.sg-carousel').addClass('is-visible');
    setTimeout(function(){
      $('.sg-carousel__slide:first-child').addClass('is-shaking');
      setTimeout(function(){
        $('.sg-carousel__slide:first-child').removeClass('is-shaking');
      }, 2000);
    },1000);    
  },3000);
});