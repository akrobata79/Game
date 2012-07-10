(function(window) {

	Cegielka.prototype.block = null
	Cegielka.prototype.alive=false;
	Cegielka.prototype.health=null;
	
	Cegielka.prototype.width=0;
	Cegielka.prototype.height=0;
	
	//var block;
	
	function Cegielka() {
		this.initialize();
	}
	
	Cegielka.prototype = new Container();

	Cegielka.prototype.Container_initialize = Cegielka.prototype.initialize;

	Cegielka.prototype.initialize = function() {
		this.Container_initialize();
			
		this.alive=true;
		this.health=100;
		
		this.block = new RFUIBlock();
		this.addChild(this.block);
		
		

	}
	
	
	Cegielka.prototype.setWidth = function(pass) {
		this.width=pass;
		this.block.setWidth(pass);
	}

	Cegielka.prototype.setHeight = function(pass) {
		this.height=pass;
		this.block.setHeight(pass);
		
	}
	
	Cegielka.prototype.setSize = function(passW,passH) {
		this.width=passW;
		this.height=passH;
		
		this.block.setSize(passW,passH);
		
	}
	
	
	

	Cegielka.prototype.tick = function() {
	}

	window.Cegielka = Cegielka;
	
}(window));