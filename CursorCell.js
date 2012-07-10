
(function(window) {

    //commit yo!

	function CursorCell() {
		this.initialize();
	};

    CursorCell.prototype = new Container();

	CursorCell.prototype.allowAnimation = false;
	
	CursorCell.prototype.Container_initialize = CursorCell.prototype.initialize;	//unique to avoid overiding base class

    CursorCell.prototype.gridX=0;
    CursorCell.prototype.gridY=0;

    CursorCell.prototype.initialize = function() {
		this.allowAnimation=true;
		
		var rfBlock = new RFUIBlock();
		this.addChild(rfBlock);
		rfBlock.setSize(S.C_WIDTH, S.C_HEIGHT);

    };

	CursorCell.prototype.go = function(key) {
		
		if(this.allowAnimation==true) {

            var animParams = {onComplete:this.animationOver};

			this.allowAnimation=false;

            switch(key) {
                case S.KEYCODE_SPACE: cursorCell.go(e.keyCode); break;
                case S.KEYCODE_A:   animParams.x= (-S.C_WIDTH).toString();  this.gridX--;                    break;
                case S.KEYCODE_D:   animParams.x= S.C_WIDTH.toString();  this.gridX++;            break;
                case S.KEYCODE_W:   animParams.y= (-S.C_HEIGHT).toString(); this.gridY--;                break;
                case S.KEYCODE_S:   animParams.y= S.C_HEIGHT.toString();   this.gridY++;             break;
            }

            TweenMax.to(this, S.cursorSpeed,animParams);

		}

	};

    CursorCell.prototype.animationOver = function() {
        this.target.allowAnimation=true;
    };

        window.CursorCell = CursorCell;

}(window));






















