
(function(window) {

	function RFUIBlock() {
		this.initialize();
	}
	
	RFUIBlock.prototype = new Container();

	RFUIBlock.prototype.background = null;
	RFUIBlock.prototype.faceShape = null;

	RFUIBlock.prototype.width=100;
	RFUIBlock.prototype.height=100;

	RFUIBlock.prototype.faceShapeH=100;	
	RFUIBlock.prototype.faceShapeW=100;

	RFUIBlock.prototype.faceShapeRatio=0.8;

	RFUIBlock.prototype.goBy;
	
	RFUIBlock.prototype.skin;
	RFUIBlock.prototype.visualState;
	RFUIBlock.prototype.symbol;
	
	RFUIBlock.prototype.gridX;
	RFUIBlock.prototype.gridY;
	
	RFUIBlock.prototype.vo = {	
			skin:buttonColors,
			visualState:"stateDefault",
			symbol:paszczak2 };

//	constructor:
	RFUIBlock.prototype.Container_initialize = RFUIBlock.prototype.initialize;	//unique to avoid overiding base class

	RFUIBlock.prototype.initialize = function() {
		this.Container_initialize();

        //

		this.background = new Shape();
		this.faceShape = new Shape();

		this.addChild(this.background);
		this.addChild(this.faceShape);
		
		this.init();
	};


	RFUIBlock.prototype.init = function(vo) {
		
		var target;
		if(vo) {target = vo} else { target = this.vo};
		
		this.skin = target.skin;
		this.visualState=target.visualState;
		this.symbol = target.symbol;

		this.drawUI();
	};


	RFUIBlock.prototype.drawUI = function() {

		if (this.width <= this.height) { this.goBy = this.width*this.faceShapeRatio; }
		if (this.width > this.height) { this.goBy = this.height*this.faceShapeRatio; }

		this.background.graphics.clear();

		this.background.graphics.beginFill(this.skin[this.visualState].backgroundColor);

		this.background.graphics.lineTo(this.width, 0);
		this.background.graphics.lineTo(this.width, this.height);
		this.background.graphics.lineTo(0,this.height);
		this.background.graphics.lineTo(0,0 );
		this.background.graphics.closePath();
		this.background.graphics.endFill();

		this.faceShape.graphics.clear();
		this.faceShape.graphics.beginFill(this.skin[this.visualState].faceColor);

		this.symbol(this.faceShape.graphics);

		this.faceShape.graphics.endFill();
		this.faceShape.graphics.closePath();

		this.faceShape.scaleX=this.goBy/100;
		this.faceShape.scaleY=this.goBy/100;

		this.faceShape.x=this.width/2-this.goBy/2;
		this.faceShape.y=this.height/2-this.goBy/2;

	};
	
	RFUIBlock.prototype.skin = function (value) {
		this.skin=value;
		this.drawUI();
	};
	
	// value = stateDefault, stateOver,stateDown
	RFUIBlock.prototype.setVisualState = function (value) {
		this.visualState=value;
		this.drawUI();
	};

	RFUIBlock.prototype.setSymbol = function (value) {
		this.symbol=value;
		this.drawUI();
	};


	RFUIBlock.prototype.setSize = function(passW,passH) {
		this.width=passW;
		this.height=passH;

		this.drawUI();
	};

	RFUIBlock.prototype.setWidth = function(pass) {
		this.width=pass;
		this.drawUI();
	};

	RFUIBlock.prototype.setHeight = function(pass) {
		this.height=pass;
		this.drawUI();
	};
	
	RFUIBlock.prototype.setGridX = function(val) {
		this.gridX=val;
	};
	
	RFUIBlock.prototype.setGridY = function(val) {
		this.gridY=val;
	};

	window.RFUIBlock = RFUIBlock;
}(window));













