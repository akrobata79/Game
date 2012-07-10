(function(window) {

	function RFabstractGrid() {
		this.initialize();
	}
	
	RFabstractGrid.prototype = new Container();

	RFabstractGrid.prototype.multiDimArray;
	RFabstractGrid.prototype.verticalNum = 0;
	RFabstractGrid.prototype.horizontalNum = 0;
	
	RFabstractGrid.prototype.items = null;

	RFabstractGrid.prototype.initialize = function() {
		this.multiDimArray = new Array();
		this.items = new Array();
	};

	RFabstractGrid.prototype.init = function(hor,vert,w,h) {
		
		verticalNum = vert;
		horizontalNum = hor;

		for (var i= 0; i < vert; i++)  {

			this.multiDimArray.push([]);

			for (var j = 0; j < hor; j++) {

				var yo = new Point();

				yo.x=j*w;
				yo.y=i*h;

				this.items.push(yo);
				this.multiDimArray[i].push(yo);

			}
		}

	};

	RFabstractGrid.prototype.getItemAtXY = 
		function (xCoor,yCoor) {
		return this.multiDimArray[yCoor][xCoor];
	};

	window.RFabstractGrid = RFabstractGrid;

}(window));