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
    $('.sg-splash').css('background', 'none');
    $('.sg-baloon').addClass('is-moving');
    $('.sg-sky').css('top', '-200px');
  },1000);
};