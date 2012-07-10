

var KEYCODE_SPACE = 32;		//usefull keycode
var KEYCODE_UP = 38;		//usefull keycode
var KEYCODE_LEFT = 37;		//usefull keycode
var KEYCODE_RIGHT = 39;		//usefull keycode
var KEYCODE_W = 87;			//usefull keycode
var KEYCODE_A = 65;			//usefull keycode
var KEYCODE_D = 68;			//usefull keycode

var shootHeld;			//is the user holding a shoot command
var lfHeld;				//is the user holding a turn left command
var rtHeld;				//is the user holding a turn right command
var fwdHeld;			//is the user holding a forward command

var canvas;			//Main canvas
var stage;			//Main display stage

var ship;			//the actual ship

var myO;			//the actual ship

var gridSize = 50;
var myArr = [];

var numberOfObjects = 10;

var skin=null;

var skinLib = new SkinLib();
var g;

var grid;

//register key functions
//document.onkeydown = handleKeyDown;
//document.onkeyup = handleKeyUp;

function init() {
	//associate the canvas with the stage
	canvas = document.getElementById("testCanvas");
	stage = new Stage(canvas);
	stage.enableMouseOver()
	start();
}

function yo() {

	g = new Graphics();
	g.setStrokeStyle(1);
	g.beginStroke(Graphics.getRGB(0,0,0));
	g.beginFill(Graphics.getRGB(255,0,0));
	g.drawCircle(0,0,33);

	var s = new Shape(g);
	return s;
}


//reset all game logic
function start() {
	
	var gridzior = new RFGridContainer();
	stage.addChild(gridzior)

	container = new Container();
	stage.addChild(container);
	
	grid = new RFGridContainer();
	grid.init(10,10,50,30,666);
	container.addChild(grid);
	
	grid.getItemAtXY(5,5).alpha=0.5
	
	
	//var g = new Graphics().beginFill("rgba(255,255,255,1)").drawCircle(40,40,40);
	//container.addChild(g)

	for ( var i = 0; i < 0	; i++) {

		var t = yo();

		t.x=Rndm.float(100, 300)
		t.y=Rndm.float(100, 300)

		stage.addChild(t);

		myO = new RFUIBlock();
		myO.x=60*i;

		container.addChild(myO);

		//changes here!
		myO.setSize(100,100);
		//myO.setVisualState("stateDown");
		myO.setVisualState("stateOver");

		myArr.push(myO);
		//TweenLite.to(myArr[i], 5, {y:300,ease:Power4.easeInOut, delay:0.9*i});
	}

	fwdHeld =	false;

	//ensure stage is blank and add the ship
	stage.clear();

	Ticker.addListener(window);
}

function tick() {

	//container.x += (stage.mouseX-container.x)*0.1;
	//container.y += (stage.mouseY-container.y)*0.1;


	stage.update();

	//
}











//if(fwdHeld){
//ship.accelerate();
//}

//if(outOfBounds(ship, ship.bounds)) {
//placeInBounds(ship, ship.bounds);
//}

//for ( var i = 0; i < numberOfObjects; i++) {
//var heart = container.getChildAt(i);

//}

//ship.tick();

//function outOfBounds(o, bounds) {
////is it visibly off screen
//return o.x < bounds*-2 || o.y < bounds*-2 || o.x > canvas.width+bounds*2 || o.y > canvas.height+bounds*2;
//}

//function placeInBounds(o, bounds) {
////if its visual bounds are entirely off screen place it off screen on the other side
//if(o.x > canvas.width+bounds*2) {
//o.x = bounds*-2;
//} else if(o.x < bounds*-2) {
//o.x = canvas.width+bounds*2;
//}

////if its visual bounds are entirely off screen place it off screen on the other side
//if(o.y > canvas.height+bounds*2) {
//o.y = bounds*-2;
//} else if(o.y < bounds*-2) {
//o.y = canvas.height+bounds*2;
//}
//}


//allow for WASD and arrow control scheme
//function handleKeyDown(e) {
////cross browser issues exist
//if(!e){ var e = window.event; }
//switch(e.keyCode) {
//case KEYCODE_SPACE:	shootHeld = true; break;
//case KEYCODE_A:
//case KEYCODE_LEFT:	lfHeld = true; break;
//case KEYCODE_D:
//case KEYCODE_RIGHT: rtHeld = true; break;
//case KEYCODE_W:
//case KEYCODE_UP:	fwdHeld = true; break;
//}
//}

//function handleKeyUp(e) {
////cross browser issues exist
//if(!e){ var e = window.event; }
//switch(e.keyCode) {
//case KEYCODE_SPACE:	shootHeld = false; break;
//case KEYCODE_A:
//case KEYCODE_LEFT:	lfHeld = false; break;
//case KEYCODE_D:
//case KEYCODE_RIGHT: rtHeld = false; break;
//case KEYCODE_W:
//case KEYCODE_UP:	fwdHeld = false; break;
//}
//}

