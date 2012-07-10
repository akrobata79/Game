
(function(window) {

	function Bug() {
		this.initialize();
	}
	Bug.prototype = new RFUIBlock();
	
	Bug.prototype.engine;

	Bug.prototype.setEngine = function(engine) {
		this.engine=engine;
	};

	window.Bug = Bug;
}(window));






















