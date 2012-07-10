(function(window) {

	function RFGridContainer() {
		this.initialize();
	}
	
	RFGridContainer.prototype = new Container();

	RFGridContainer.prototype.multiDimArray;
	RFGridContainer.prototype.verticalNum = 0;
	RFGridContainer.prototype.horizontalNum = 0;
	
	RFGridContainer.prototype.items = null;
	
	RFGridContainer.prototype.tileHolder;
	//RFGridContainer.prototype.
	//RFGridContainer.prototype.
	//RFGridContainer.prototype.

	
	RFGridContainer.prototype.Container_initialize = RFGridContainer.prototype.initialize;	
	RFGridContainer.prototype.initialize = function() {

		this.Container_initialize();
		
		this.tileHolder = new Container();
		this.multiDimArray = new Array();
		this.items = new Array();
		

	};

	RFGridContainer.prototype.init = function(hor,vert,w,h,classObj,initObj) {
		
		verticalNum = vert;
		horizontalNum = hor;

		this.addChild(this.tileHolder);

		for (var i= 0; i < vert; i++)  {

			this.multiDimArray.push([]);

			for (var j = 0; j < hor; j++) {

				var yo = new classObj();
				
				//yo.init(initObj);
				
				yo.x=j*w;
				yo.y=i*h;
				yo.width=w;
				yo.height=h;
				
				
				this.tileHolder.addChild(yo);
				this.items.push(yo);
				
				this.multiDimArray[i].push(yo);

			}
		}
		
		
	};

	RFGridContainer.prototype.getItemAtXY = 
		function (xCoor,yCoor) {
		return this.multiDimArray[yCoor][xCoor];
	};

	window.RFGridContainer = RFGridContainer;

}(window));