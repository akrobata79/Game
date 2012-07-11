//http://jsfiddle.net/
//http://www.shinydemos.com/
//http://www.alexisriols.fr/
//http://www.appinessworld.com/

//swissknife thing

var canvas, stage, grid, engine = new VirusGameEngine(), gameContainer = new Container();


function init() {
	canvas = document.getElementById("testCanvas");
	stage = new Stage(canvas);

    stage.addChild(gameContainer);
    gameContainer.alpha=0.1;

	start();
}

function start() {

    engine.setDocument(document);
	engine.setMainContainer(gameContainer);
    engine.pointToSelf(engine);
	engine.init();
    //and also do this
    //or maybe this last commit man
    //stage.clear();

    Ticker.setFPS(30);
	Ticker.addListener(stage);
	
}

function tick() {
	stage.update();
};

var myMammal = {
		name : 'Herb the Mammal',

		get_name : function (  ) {
			return this.name;
		},

		says : function (  ) {
			return this.saying || '';
		} };





