
(function(window) {

    //commited cell

	function Cell() {
		this.initialize();
	}

    //yo man
	Cell.prototype = new RFUIBlock();
	
	Cell.prototype.infectiousDirections = ["UP","DOWN","RIGHT","LEFT"];

	Cell.prototype.infectionSpeed;
	
	Cell.prototype.infected = false;

	Cell.prototype.engine;

	Cell.prototype.setEngine = function(engine) {
		this.engine=engine;
	};
	
	
	Cell.prototype.infect = function(byuser) {
		
		this.infected=true;
		this.setVisualState("stateOver");
		
	};


	window.Cell = Cell;
}(window));


