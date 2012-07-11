
(function(window) {

	function Cell() {
		this.initialize();
	}
	Cell.prototype = new RFUIBlock();
	
	Cell.prototype.infectiousDirections = [];

	Cell.prototype.free = false;
	
	Cell.prototype.infect = function() {
		//this.alpha=0;

        console.log("daamnnn")
		
		
	};
	

	window.Cell = Cell;
}(window));