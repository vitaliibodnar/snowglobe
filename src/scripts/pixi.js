import * as PIXI from 'pixi.js';

var ww = window.innerWidth,
    wh = window.innerHeight;

var app = new PIXI.Application(ww, wh, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var bg1_container = new PIXI.Container();
var bg2_container = new PIXI.Container();
var bg3_container = new PIXI.Container();
var bg4_container = new PIXI.Container();
var trees_container = new PIXI.Container();


app.stage.addChild(bg4_container);
app.stage.addChild(bg3_container);
app.stage.addChild(bg2_container);
app.stage.addChild(bg1_container);
app.stage.addChild(trees_container);

// create a new Sprite from an image path
var trees = PIXI.Sprite.fromImage('./src/img/canvas/trees-1-grouped.svg');
var bg4 = PIXI.Sprite.fromImage('./src/img/canvas/bg-4.png');
var bg3 = PIXI.Sprite.fromImage('./src/img/canvas/bg-3.png');
var bg2 = PIXI.Sprite.fromImage('./src/img/canvas/bg-2.png');
var bg1 = PIXI.Sprite.fromImage('./src/img/canvas/bg-1.png');

trees_container.addChild(trees);
bg4_container.addChild(bg4);
bg3_container.addChild(bg3);
bg2_container.addChild(bg2);
bg1_container.addChild(bg1);


// center the sprite's anchor point
trees.anchor.set(1,1);
bg1.anchor.set(1,1);
bg2.anchor.set(1,1);
bg3.anchor.set(1,1);
bg4.anchor.set(1,1);

// move the sprite to the center of the screen
trees.width = app.screen.width;
trees.height = app.screen.width/2.59;
trees.x = app.screen.width;
trees.y = app.screen.height;

bg4.width = app.screen.width;
bg4.height = app.screen.width/2.591;
bg4.x = app.screen.width;
bg4.y = app.screen.height;

bg3.width = app.screen.width;
bg3.height = app.screen.width/3.587;
bg3.x = app.screen.width;
bg3.y = app.screen.height;

bg2.width = app.screen.width;
bg2.height = app.screen.width/2.4;
bg2.x = app.screen.width;
bg2.y = app.screen.height;

bg1.width = app.screen.width;
bg1.height = app.screen.width/3.25;
bg1.x = app.screen.width;
bg1.y = app.screen.height;

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    // trees.rotation += 0.001 * delta;
});