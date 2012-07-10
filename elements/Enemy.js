/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 7/10/12
 * Time: 3:28 PM
 * To change this template use File | Settings | File Templates.
 */


(function(window) {

    function Enemy() {
        this.initialize();
    };

    Enemy.prototype = new Container();

    Enemy.prototype.allowAnimation = false;

    Enemy.prototype.Container_initialize = Enemy.prototype.initialize;	//unique to avoid overiding base class

    Enemy.prototype.gridX=0;
    Enemy.prototype.gridY=0;

    Enemy.prototype.gridRef=null;

    Enemy.prototype.initGridPos=new Point(0,0);

    Enemy.prototype.initialize = function() {
        this.allowAnimation=true;

        var rfBlock = new RFUIBlock();
        this.addChild(rfBlock);
        rfBlock.setSize(S.C_WIDTH, S.C_HEIGHT);

    };

    Enemy.prototype.placeHere = function(x,y) {

        this.initGridPos.x=x;
        this.initGridPos.y=y;

        this.x=this.initGridPos.x*S.C_WIDTH;
        this.gridX=this.x/S.C_WIDTH;

        this.y=this.initGridPos.y* S.C_HEIGHT;
        this.gridY=this.y/S.C_HEIGHT;

    }

    Enemy.prototype.go = function(dir) {

            var animParams = {onComplete:this.calculateNextMove};

            switch(dir) {

                case "LEFT":   animParams.x= (-S.C_WIDTH).toString();  this.gridX--;          break;
                case "RIGHT":   animParams.x= S.C_WIDTH.toString();  this.gridX++;            break;
                case "UP":   animParams.y= (-S.C_HEIGHT).toString(); this.gridY--;            break;
                case "DOWN":   animParams.y= S.C_HEIGHT.toString();   this.gridY++;           break;
            }

            TweenMax.to(this, S.ENEMY_SPEED,animParams);
    };

    Enemy.prototype.animationOver = function() {
        this.calculateNextMove();
    };

    Enemy.prototype.calculateNextMove = function () {

        this.target.go("RIGHT");

    }

    window.Enemy = Enemy;

}(window));






















