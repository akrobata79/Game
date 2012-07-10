
function VirusGameEngine() {}

VirusGameEngine.prototype = {

		grid:null,
        gridAbstract:null,
		documentRef:null,
		mainContainer:null,
        thisSelf:null,
		cursorCell:null,

		init: function() {

			var initvo = {	
					skin:buttonColors,
					visualState:"stateDefault",
					symbol:paszczak1 };

			grid = new RFGrid();
            grid.init(S.G_WIDTH,S.G_HEIGHT,S.C_WIDTH,S.C_HEIGHT,Cell,initvo);

            gridAbstract = new RFabstractGrid();
            gridAbstract.init(S.G_WIDTH,S.G_HEIGHT,S.C_WIDTH,S.C_HEIGHT);

            mainContainer.addChild(grid);

			for ( var i = 0; i < grid.items.length; i++) {
				grid.items[i].setEngine(engine);
			}

			cursorCell = new CursorCell();
			mainContainer.addChild(cursorCell);

		},

		setDocument: function(t) {
			documentRef=t;
			document.onkeydown = this.handleKeyDown;
		},

		setMainContainer: function (s) {
			mainContainer=s;
		},

		handleKeyDown: function(e) {

            if(!e) { var e = window.event; }

			switch(e.keyCode) {
                case S.KEYCODE_SPACE:    thisSelf.infectCell(cursorCell.gridX,cursorCell.gridY);              break;

            //ch

             //ch
			case S.KEYCODE_A:   cursorCell.go(e.keyCode);             break;
			case S.KEYCODE_D:   cursorCell.go(e.keyCode);           break;
			case S.KEYCODE_W:   cursorCell.go(e.keyCode);           break;
			case S.KEYCODE_S:   cursorCell.go(e.keyCode);             break;
			}

		},

		mainContainerClicked: function(ev){
			var r = checkIfOverArray(ev,this.gridRef.items);
			if(r>-1) this.gridRef.items[r].infect(true);
		},

		findNeighboors: function() {
		},

		spread: function(x,y) {
			this.infectCell(x+1,y+1);
			this.infectCell(x-1,y-1);
		},

		infectCell: function(x,y) {

            var yo = grid.getItemAtXY(x,y);
            yo.infect(true);

		},

        pointToSelf: function(target) {
            thisSelf = engine;
        }

};






//mainContainer.onMouseDown = onMouseDown;
//function onMouseDown(ev) {
//engine.mainContainerClicked(ev);
//}


//function jump() {

//var rndSym = (Rndm.boolean()) ?   paszczak2  :paszczak1;
//var rndState = (Rndm.boolean()) ?   "stateDown"  : "stateOver";
//var rndX = Rndm.integer(0,10);
//var rndY = Rndm.integer(0,10);

//grid.getItemAtXY(rndX,rndY).setSymbol(rndSym);
//grid.getItemAtXY(rndX,rndY).setVisualState(rndState);

//}