import Draggable from 'gsap/Draggable';
import TweenLite from 'gsap/TweenLite';
import $ from 'jquery';
import Shake from 'shake.js';

var elements = document.getElementsByClassName('canvas_globe');
for (var i = 0; i < elements.length; i++)  {
  initCanvasByElement(elements[i]);
}

function initCanvasByElement(el) {
// Request animation frame polyfill
(function() {
    var lastTime = 0;
    var vendors = ["webkit", "moz"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }
  
    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
  
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  })();



  
  var canvas = el;
  
  // Make some snow!
  function SnowFlakes(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.flakes = [];
    this.snow_pile = [];
    this.snow_curve = [];
    this.middle = Math.floor(canvas.width / 2);
    this.images = [];
  
    // Calculate Y offsets to make the snow pile curve
    for (var s = 0; s < this.canvas.width; s += 1) {
      this.snow_curve.push(
        Math.floor(Math.pow(s - this.middle, 2) * 0.00055) + 45
      );
    }
  }
  
  // Adds a snow flake object
  SnowFlakes.prototype.addFlake = function(
    width,
    height,
    x_pos,
    y_pos,
    move_y,
    move_x,
    move_x_speed,
    stop_chance,
    rotate_amount,
    front_flake,
    color
  ) {
    var newFlake = {
      width: width, // Pixel value of width
      height: height, // Pixel value of height
      x_pos: x_pos, // X position to draw flake on canvas
      y_pos: y_pos, // Y position to drawn flake on cavnas
      move_y: move_y, // Downward movement speed in pixels per tick
      move_x: move_x, // Wander amount in the X direction
      move_x_speed: move_x_speed, // Left and right movement speed in pixels per tick
      move_x_max: x_pos + move_x, // Max movement distance to the right in pixels
      move_x_min: x_pos - move_x, // Max movement distance to the left in pixels
      move_x_dir: !Math.floor(Math.random() * 2 + 0), // X movement direction - true == right, false == left
      stop_chance: stop_chance, // 1 out of stop_chance for flake to pile at the bottom
      stopped_falling: false, // Flag when flake has stopped falling and piled at the bottom
      returning: false, // Flag when flake is moving upward when globe is shook
      move_y_return_height: Math.floor(Math.random() * this.canvas.height + 0), // Y position for flake to travel to when globe is shook
      move_y_return: -Math.floor(Math.random() * 2 + 2), // Y speed in pixels per tick flake travels when globe is shook
      move_x_speed_return: Math.floor(Math.random() * 2 + 2), // X speed in pixesl per tick flake travels when globe is shook
      rotate_amount: rotate_amount, // Roation amount of flake
      rotate_change: rotate_amount, // Rotation change amount per tick
      front_flake: front_flake, // Flag if flake should render in front of images
      color: color // Color of flake
    };
    this.flakes.push(newFlake);
  };
  
  // Render all snow flakes
  SnowFlakes.prototype.render = function() {
    var num_flakes = this.flakes.length,
      num_images = this.images.length,
      image;
  
    // Clear the canvas
    this.canvas.width = this.canvas.width;
  
    // Draw back layer snow flakes
    for (var a = 0; a < num_flakes; a += 1) {
      if (this.flakes[a].front_flake === false) {
        // Flake has stopped falling
        if (this.flakes[a].stopped_falling) {
          this.context.fillStyle = "rgba(255,255,255,0.4)";
          // Flake is still falling
        } else {
          this.context.fillStyle = this.flakes[a].color;
        }
        this.context.fillRect(
          this.flakes[a].x_pos,
          this.flakes[a].y_pos,
          this.flakes[a].width,
          this.flakes[a].height
        );
      }
    }
  
    // Draw front layer snow flakes
    for (var a = 0; a < num_flakes; a += 1) {
      if (this.flakes[a].front_flake === true) {
        // Flake has stopped falling
        if (this.flakes[a].stopped_falling) {
          this.context.fillStyle = "rgba(255,255,255,0.5)";
          // Flake is still falling
        } else {
          this.context.fillStyle = this.flakes[a].color;
        }
        this.context.fillRect(
          this.flakes[a].x_pos,
          this.flakes[a].y_pos,
          this.flakes[a].width,
          this.flakes[a].height
        );
      }
    }
  };
  
  // Updates the position of the snow flakes
  SnowFlakes.prototype.updateFlakePosition = function() {
    var num_flakes = this.flakes.length,
      max_fall,
      new_y = 0,
      new_x = 0,
      lowest_pile,
      pile_height,
      stop_roll;
  
    // Update positions of all snow flakes
    for (var a = 0; a < num_flakes; a += 1) {
      // Check if snow flake is still moving
      if (this.flakes[a].stopped_falling === false) {
        // Move flake down
        new_y = this.flakes[a].y_pos + this.flakes[a].move_y;
        max_fall =
          this.canvas.height - this.snow_curve[Math.floor(this.flakes[a].x_pos)];
        if (new_y > max_fall) {
          // Roll if snow falls again or piles at bottom
          stop_roll = Math.floor(Math.random() * this.flakes[a].stop_chance + 1);
  
          // Snow flake stops at bottom
          if (stop_roll === 1) {
            this.flakes[a].stopped_falling = true;
  
            // Find lowest pile flake lands on
            lowest_pile =
              this.snow_pile[Math.floor(this.flakes[a].x_pos) + c] || 0;
            for (var c = 0; c < this.flakes[a].width; c += 1) {
              pile_height =
                this.snow_pile[Math.floor(this.flakes[a].x_pos) + c] || 0;
              if (lowest_pile > pile_height) {
                lowest_pile = pile_height;
              }
            }
  
            // Set new y position for snow flake
            this.flakes[a].y_pos = max_fall - this.flakes[a].height - lowest_pile;
  
            // Force x position to be whole number
            this.flakes[a].x_pos = Math.floor(this.flakes[a].x_pos);
  
            // Set pile heights
            pile_height = lowest_pile + this.flakes[a].height;
            for (var d = 0; d < this.flakes[a].width; d += 1) {
              if (
                (this.snow_pile[Math.floor(this.flakes[a].x_pos) + d] || 0) <
                pile_height
              ) {
                this.snow_pile[
                  Math.floor(this.flakes[a].x_pos) + d
                ] = pile_height;
              }
            }
          } else {
            // Snow flake falls again from top
            this.flakes[a].y_pos = -1 * this.flakes[a].height;
          }
        } else {
          // Update snow flake Y position
          this.flakes[a].y_pos = new_y;
        }
  
        // Move flakes left and right
        if (this.flakes[a].move_x_dir) {
          // Move right
          new_x = this.flakes[a].x_pos + this.flakes[a].move_x_speed;
          if (new_x > this.flakes[a].move_x_max) {
            this.flakes[a].x_pos -= this.flakes[a].move_x_speed;
            this.flakes[a].move_x_dir = false;
          } else if (new_x > this.canvas.width) {
            this.flakes[a].x_pos = -this.flakes[a].width;
          } else {
            this.flakes[a].x_pos = new_x;
          }
        } else {
          // Move left
          new_x = this.flakes[a].x_pos - this.flakes[a].move_x_speed;
          if (new_x < this.flakes[a].move_x_min) {
            this.flakes[a].x_pos += this.flakes[a].move_x_speed;
            this.flakes[a].move_x_dir = true;
          } else if (new_x < 0) {
            this.flakes[a].x_pos = this.canvas.width + this.flakes[a].width;
          } else {
            this.flakes[a].x_pos = new_x;
          }
        }
      }
  
      // Check for upward moving snow flakes going out of bounds
      if (
        this.flakes[a].returning === true &&
        this.flakes[a].y_pos < this.flakes[a].move_y_return_height
      ) {
        this.flakes[a].returning = false;
        this.flakes[a].move_y /= this.flakes[a].move_y_return;
        this.flakes[a].move_x_speed /= this.flakes[a].move_x_speed_return;
      }
    }
  };
  
  // Shakes the globe
  // Moves snow flakes up and images
  // along their predetermined path
  SnowFlakes.prototype.shake = function() {
    var num_flakes = this.flakes.length,
      num_images = this.images.length,
      random_sound = Math.floor(Math.random() * 4 + 2),
      image;
  
    // Move the flakes up
    for (var a = 0; a < num_flakes; a += 1) {
      if (this.flakes[a].returning === false) {
        this.flakes[a].move_y *= this.flakes[a].move_y_return;
        this.flakes[a].move_x_speed *= this.flakes[a].move_x_speed_return;
        this.flakes[a].returning = true;
        this.flakes[a].stopped_falling = false;
        if (this.flakes[a].move_y_return_height < 0) {
          this.flakes[a].move_y_return_height += this.canvas.height / 2;
        }
        if (this.flakes[a].y_pos < this.flakes[a].move_y_return_height) {
          this.flakes[a].move_y_return_height -= this.canvas.height / 2;
        }
      }
    }
  
    // Reset the snow pile
    this.snow_pile = [];
  
    // Start moving the images
    for (var b = 0; b < num_images; b += 1) {
      image = this.images[b];
      if (image.animating_image === false) {
        image.animating_image = true;
      }
    }
  };
  
  // Start the snow
  SnowFlakes.prototype.startSnow = function() {
    var that = this;
    function animate() {
      requestAnimationFrame(animate);
      that.updateFlakePosition();
      that.render();
    }
    animate();
  };
  
  // ----------- ----------- ----------- -----------
  
  var snowShow = new SnowFlakes(canvas),
    total_flakes = 13000,
    flake_width = 6,
    flake_height = 6;

// Reduce the number of snow flakes and 
// increase snow flake size on small screens
var wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (wWidth < 1025) {
	total_flakes = 13000;
	flake_width = 6;
	flake_height = 6;
}
  
  // Create the snow flakes
  for (var b = 0; b < total_flakes; b += 1) {
    var x_spread = Math.floor(Math.random() * 800 + 1),
      y_spread = Math.floor(Math.random() * 800 + 1),
      width = Math.floor(Math.random() * flake_width + 1),
      height = Math.floor(Math.random() * flake_height + 1),
      move_y = Math.floor(Math.random() * 150 + 50) / 100,
      move_x = Math.floor(Math.random() * 200 + 50),
      move_x_speed = Math.floor(Math.random() * 70 + 10) / 30,
      stop_chance = 1, // 1 out of X chance to stop
      rotate_amount = Math.floor(Math.random() * 5 + 5) * Math.PI / 180,
      front_flake = Math.floor(Math.random() * 6 + 1) === 1 ? true : false,
      opacity = Math.floor(Math.random() * 10 + 1) / 10;
  
    snowShow.addFlake(
      width,
      height,
      x_spread,
      y_spread,
      move_y,
      move_x,
      move_x_speed,
      stop_chance,
      rotate_amount,
      front_flake,
      "rgba(255, 255, 255, " + opacity + ")"
    );
  }

  
  // Start the snow globe
  snowShow.startSnow();

  var elem = document.querySelectorAll('.sg-carousel__slide > div');
  var showPopup = false,
      dragTime = null;
  function startTimer() {
    // dragTime = 0;
    // showPopup = false;
    dragTime = setTimeout(function(){ successShake(el); }, 1500);
  }

  var shakeMoreText = $('.sg-title-shake'),
      selectText = $('.sg-title-select');

  var fortuneText = [
    'Today it\'s up to you to create the peacefulness you long for.',
    'A friend asks only for your time not your money.',
    'If you refuse to accept anything but the best, you very often get it.',
    'A smile is your passport into the hearts of others.',
    'A good way to keep healthy is to eat more Chinese food.',
    'Your high-minded principles spell success.',
    'Hard work pays off in the future, laziness pays off now.',
    'Change can hurt, but it leads a path to something better.',
    'Enjoy the good luck a companion brings you.',
    'People are naturally attracted to you.',
    'A chance meeting opens new doors to success and friendship.',
    'You learn from your mistakes... You will learn a lot today.',
    'If you have something good in your life, don\'t let it go!',
    'What ever you\'re goal is in life, embrace it visualize it, and for it will be yours.',
    'Your shoes will make you happy today.',
    'You cannot love life until you live the life you love.',
    'Be on the lookout for coming events; They cast their shadows beforehand.',
    'Land is always on the mind of a flying bird.',
    'The man or woman you desire feels the same about you.',
    'Meeting adversity well is the source of your strength.',
    'A dream you have will come true.',
    'Our deeds determine us, as much as we determine our deeds.',
    'Never give up. You\'re not a failure if you don\'t give up.',
    'You will become great if you believe in yourself.',
    'There is no greater pleasure than seeing your loved ones prosper.',
    'You will marry your lover.',
    'A very attractive person has a message for you.',
    'You already know the answer to the questions lingering inside your head.',
    'It is now, and in this world, that we must live.',
    'You must try, or hate yourself for not trying.',
    'You can make your own happiness.',
    'The greatest risk is not taking one.',
    'The love of your life is stepping into your planet this summer.',
    'Love can last a lifetime, if you want it to.',
    'Adversity is the parent of virtue.',
    'Serious trouble will bypass you.',
    'A short stranger will soon enter your life with blessings to share.',
    'Now is the time to try something new.',
    'Wealth awaits you very soon.',
    'If you feel you are right, stand firmly by your convictions.',
    'If winter comes, can spring be far behind?',
    'Keep your eye out for someone special.',
    'You are very talented in many ways.',
    'A stranger, is a friend you have not spoken to yet.',
    'A new voyage will fill your life with untold memories.',
    'You will travel to many exotic places in your lifetime.',
    'Your ability for accomplishment will follow with success.',
    'Nothing astonishes men so much as common sense and plain dealing.',
    'Its amazing how much good you can do if you dont care who gets the credit.',
    'Everyone agrees. You are the best.',
    'Jealousy doesn\'t open doors, it closes them!',
    'It\'s better to be alone sometimes.',
    'When fear hurts you, conquer it and defeat it!',
    'Let the deeds speak.',
    'You will be called in to fulfill a position of high honor and responsibility.',
    'The man on the top of the mountain did not fall there.',
    'You will conquer obstacles to achieve success.',
    'Joys are often the shadows, cast by sorrows.',
    'Fortune favors the brave.',
    'An upward movement initiated in time can counteract fate.',
    'A journey of a thousand miles begins with a single step.',
    'Sometimes you just need to lay on the floor.',
    'Never give up. Always find a reason to keep trying.',
    'If you have something worth fighting for, then fight for it.',
    'Stop wishing. Start doing.',
    'Hone your competitive instincts.',
    'Finish your work on hand don\'t be greedy.',
    'For success today, look first to yourself.',
    'Your fortune is as sweet as a cookie.',
    'Integrity is the essence of everything successful.',
    'If you\'re happy, you\'re successful.',
    'You will always be surrounded by true friends.',
    'Believing that you are beautiful will make you appear beautiful to others around you.',
    'Happinees comes from a good life.',
    'Before trying to please others think of what makes you happy.',
    'When hungry, order more Chinese food.',
    'Your golden opportunity is coming shortly.',
    'For hate is never conquered by hate. Hate is conquered by love .',
    'You will make many changes before settling down happily.',
    'A man is born to live and not prepare to live.',
    'You cannot become rich except by enriching others.',
    'Don\'t pursue happiness - create it.',
    'You will be successful in love.',
    'All your fingers can\'t be of the same length.',
    'Wise sayings often fall on barren ground, but a kind word is never thrown away.',
    'A lifetime of happiness is in store for you.',
    'It is very possible that you will achieve greatness in your lifetime.',
    'Be tactful; overlook your own opportunity.',
    'You are the controller of your destiny.',
    'Everything happens for a reson.',
    'How can you have a beutiful ending without making beautiful mistakes.',
    'You can open doors with your charm and patience.',
    'Welcome the change coming into your life.',
    'There will be a happy romance for you shortly.',
    'Your fondest dream will come true within this year.',
    'You have a deep interest in all that is artistic.',
    'Your emotional nature is strong and sensitive.',
    'A letter of great importance may reach you any day now.',
    'Good health will be yours for a long time.',
    'You will become better acquainted with a coworker.',
    'To be old and wise, you must first be young and stupid.',
    'Failure is only the opportunity to begin again more intelligently.',
    'Integrity is doing the right thing, even if nobody is watching.',
    'Conquer your fears or they will conquer you.',
    'You are a lover of words; One day you will write a book.',
    'In this life it is not what we take up, but what we give up, that makes us rich.',
    'Fear can keep us up all night long, but faith makes one fine pillow.',
    'Seek out the significance of your problem at this time. Try to understand.',
    'He who slithers among the ground is not always a foe.',
    'You learn from your mistakes, you will learn a lot today.',
    'You only need look to your own reflection for inspiration.',
    'You are not judged by your efforts you put in; you are judged on your performance.',
    'Rivers need springs.',
    'Good news from afar may bring you a welcome visitor.',
    'When all else seems to fail, smile for today and just love someone.',
    'Patience is a virtue, unless its against a brick wall.',
    'When you look down, all you see is dirt, so keep looking up.',
    'If you are afraid to shake the dice, you will never throw a six.',
    'Even if the person who appears most wrong, is also quite often right.',
    'A single conversation with a wise man is better than ten years of study.',
    'Happiness is often a rebound from hard work.',
    'The world may be your oyster, but that doesn\'t mean you\'ll get it\'s pearl.',
    'Your life will be filled with magical moments.',
    'You\'re true love will show himself to you under the moonlight.',
    'I think, you ate your fortune while you were eating your cookie.',
    'If u love someone keep fighting for them.',
    'Do what you want, when you want, and you will be rewarded.',
    'Let your fantasies unwind...',
    'The cooler you think you are the dumber you look.',
    'Expect great things and great things will come.',
    'The Wheel of Good Fortune is finally turning in your direction!',
    'Don\'t lead if you won\'t lead.',
    'You will always be successful in your professional career.',
    'Share your hapiness with others today.',
    'It\'s up to you to clearify.',
    'Your future will be happy and productive.',
    'Seize every second of your life and savor it.',
    'Those who walk in other\'s tracks leave no footprints.',
    'Failure is the mother of all success.',
    'Difficulty at the beginning useually means ease at the end.',
    'Do not seek so much to find the answer as much as to understand the question better.',
    'Your way of doing what other people do their way is what makes you special.',
    'A beautiful, smart, and loving person will be coming into your life.',
    'Friendship is an ocean that you cannot see bottom.',
    'Your life does not get better by chance, it gets better by change.',
    'Our duty,as men and women,is to proceed as if limits to our ability did not exist.',
    'A pleasant expeience is ahead:don\'t pass it by.',
    'Our perception and attitude toward any situation will determine the outcome.',
    'They say you are stubborn; you call it persistence.',
    'Two small jumps are sometimes better than one big leap.',
    'A new wardrobe brings great joy and change to your life.',
    'The cure for grief is motion.',
    'It\'s a good thing that life is not as serious as it seems to the waiter.',
    'I hear and I forget. I see and I remember. I do and I understand.',
  ];


  function successShake(element) {
    $('.sg-final__img[data-hero="'+element.getAttribute('data-animal')+'"]').addClass('is-active');
    var msg = fortuneText[Math.floor(Math.random()*fortuneText.length)];
    $('.sg-final__msg').text(msg);
    setTimeout(function(){
      TweenLite.to($('.sg-final'), 1, { opacity: 1, visibility: 'visible', zIndex: 9});
    },1000);
  }
  function onShake() {
    selectText.removeClass('is-visible');
    shakeMoreText.addClass('is-visible');
  }
  function unsuccessShake() {
    selectText.removeClass('is-visible');
    shakeMoreText.addClass('is-visible');
    setTimeout(function(){
      shakeMoreText.removeClass('is-visible');
      selectText.addClass('is-visible');
    },1500);
  }
  var ww = $(window).width();
  if (ww < 768) {
    var shakeCounter = 0;
    //listen to shake event
    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        shakeCounter++;
        if (shakeCounter > 6) {
          snowShow.shake();
          var zzz = $('.sg-carousel__slide[data-current="1"]').find('.canvas_globe');
          $('.sg-final__img[data-hero="'+zzz.data('animal')+'"]').addClass('is-active');
          var msg = fortuneText[Math.floor(Math.random()*fortuneText.length)];
          $('.sg-final__msg').text(msg);
          setTimeout(function(){
            TweenLite.to($('.sg-final'), 1, { opacity: 1, visibility: 'visible', zIndex: 9});
          },1500);
        } else {
          snowShow.shake();
          unsuccessShake();
          animateCurrent();
        }
    });
  } else {
    var lastPos = {x:0,y:0};
    Draggable.create( elem , {
      type: "x,y",
      onPress:function(){
        lastPos.x = this.x;
        lastPos.y = this.y; 
      },
      onDragEnd:function(){
        TweenLite.to(this.target,1,{ x:lastPos.x , y:lastPos.y });
      }
    });
    Draggable.create( canvas , {
      type: "x,y",
      onPress:function(){
        lastPos.x = this.x;
        lastPos.y = this.y; 
      },
      onDragStart:function(){
        startTimer();
        snowShow.shake();
        // unsuccessShake();
      },
      onDrag:function(){
        onShake();
      },
      onDragEnd:function(){
        if (showPopup == false) {
          clearTimeout(dragTime); 
          unsuccessShake();
          setTimeout(function(){
            $('.sg-carousel__slide[data-current="1"]').addClass('is-shaking');
            setTimeout(function(){
              $('.sg-carousel__slide[data-current="1"]').removeClass('is-shaking');
            }, 2000);
          },1000);
        }
        else {
          // successShake(el);
        }
        TweenLite.to(this.target,1,{ x:lastPos.x , y:lastPos.y });
      }
    });
  }


  
  function animateCurrent() {
    var currentSlide = $('.sg-carousel__slide[data-current="1"]');
    currentSlide.addClass('is-shaking');
    setTimeout(function(){
      currentSlide.removeClass('is-shaking');
    },3000);
  }
  

  $('.sg-again').click(function(){
    $('.sg-final').removeClass('is-active');
    TweenLite.to($('.sg-final'), 1, { opacity: 0, visibility: 'hidden', zIndex: 0});
    setTimeout(function(){
      $('.sg-final__img').removeClass('is-active');
      $('.sg-final__msg').text('');
    },1500);
    shakeCounter = 0;
  });
}



