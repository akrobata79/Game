
(function(window) {

	function RFUIBlock_test() {
		this.initialize();
	}
	RFUIBlock_test.prototype = new Container();

	RFUIBlock_test.prototype.background = null;
	
//	constructor:
	RFUIBlock_test.prototype.Container_initialize = RFUIBlock_test.prototype.initialize;	//unique to avoid overiding base class
	
	
	var bG;
	var fg;

	RFUIBlock_test.prototype.initialize = function() {
		this.Container_initialize();

		this.background = new Shape();
		this.addChild(this.background);

		bG = this.background.graphics;
		fG = this.background.graphics;
		
		this.init();
	};
	
	RFUIBlock_test.prototype.crazy = function() {
		this.alpha=0.7;
	};

	RFUIBlock_test.prototype.init = function() {

		var RFUIvo = {skin:buttonColors,visualState:"stateDefault",
				symbol:paszczak1};

//		this.skin = RFUIvo.skin;
//		this.visualState=RFUIvo.visualState;
//		this.symbol = RFUIvo.symbol;

		this.drawUI(RFUIvo);
	};


	RFUIBlock_test.prototype.drawUI = function(RFUIvo) {

		bG.clear();
		bG.beginFill(RFUIvo.skin[RFUIvo.visualState].backgroundColor);
		bG.lineTo(100, 0);
		bG.lineTo(100, 100);
		bG.lineTo(0,100);
		bG.lineTo(0,0 );
		bG.closePath();
		bG.endFill();

		//fG.beginFill(RFUIvo.skin[RFUIvo.visualState].faceColor);

		//fG.endFill();
		//fG.closePath();

	};

	

	window.RFUIBlock_test = RFUIBlock_test;
}(window));