import $ from 'jquery';
import TweenLight from "gsap/TweenLite";
import TweenMax from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";
import TimelineLite from "gsap/TimelineLite";
import { Linear } from 'gsap';

//
// FETCH PLANE
//
fetch("../src/img/plane.svg")
.then(response => response.text())
.then(svg => {
	$('.sg-plane').append('<div class="sg-plane__wrapper">'+svg+'</div>');
	planeSmoke();
	planePropeller();
});


function planeSmoke() {
	let smoke = $('.plane-smoke .st3'),
    	master = new TimelineLite(),
    	stagTime = 2,
    	tlArray = [];

	smoke.each(function(index,el){
		let tl = new TimelineMax({repeat:-1, yoyo:false, paused:false, force3D: "true"});
		tl.from(el, 1.5, {scale: 0, rotation: -300, x:60, y:30, z:0, ease:Linear.easeNone});
		tl.to(el, 1.5, {scale: 1, rotation: 250, x:-20, y:-10, z:0, ease:Linear.easeNone});
		tl.to(el, 2, {scale: 0, rotation: 530, x:-80, y:50, z:0, ease:Linear.easeNone});

		tlArray.push(tl);
	});

	master.add(tlArray, 0, "normal", stagTime);
}

function planePropeller() {
	let propeller = $('.plane-propeller');

	let tl = new TimelineMax({repeat:-1, yoyo:false, paused:false, force3D: "true"});
	tl.to(propeller, 0.15, {rotation: 180, ease:Linear.easeNone, transformOrigin:"center center"});
}


