(function(window) {

	function RFGrid() {
		this.initialize();
	}
	
	RFGrid.prototype = new Container();

	RFGrid.prototype.multiDimArray;
	RFGrid.prototype.verticalNum = 0;
	RFGrid.prototype.horizontalNum = 0;
	
	RFGrid.prototype.items = null;
	
	RFGrid.prototype.tileHolder;
	//RFGrid.prototype.
	//RFGrid.prototype.
	//RFGrid.prototype.

	
	RFGrid.prototype.Container_initialize = RFGrid.prototype.initialize;

	RFGrid.prototype.initialize = function() {

		this.Container_initialize();
		
		this.tileHolder = new Container();
		this.multiDimArray = new Array();
		this.items = new Array();

	};

	RFGrid.prototype.init = function(hor,vert,w,h,classObj,initObj) {
		
		verticalNum = vert;
		horizontalNum = hor;

		this.addChild(this.tileHolder);

		for (var i= 0; i < vert; i++)  {

			this.multiDimArray.push([]);

			for (var j = 0; j < hor; j++) {

				var yo = new classObj();
				
				yo.init(initObj);
				
				yo.setWidth(w);
				yo.setHeight(h);
				
				yo.x=j*w;
				yo.y=i*h;
				
				yo.setGridX(j);
				yo.setGridY(i);
				
				this.tileHolder.addChild(yo);
				this.items.push(yo);
				
				this.multiDimArray[i].push(yo);

			}
		}
		
		
	};

	RFGrid.prototype.getItemAtXY = 
		function (xCoor,yCoor) {
		return this.multiDimArray[yCoor][xCoor];
	};

	window.RFGrid = RFGrid;

}(window));