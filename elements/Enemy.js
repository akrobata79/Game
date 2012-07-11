/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 7/10/12
 * Time: 3:28 PM
 * To change this template use File | Settings | File Templates.
 */


(function(window) {

    var p = Enemy.prototype;

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

    Enemy.prototype.currDir="RIGHT";
    Enemy.prototype.prevDir;

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

        var tCell = this.gridRef.getItemAtXY(this.gridX,this.gridY+1).free;

        var animParams = {onComplete:this.calculateNextMove};

            switch(this.decideWhichWayGo(dir)) {

                case "LEFT":   animParams.x= (-S.C_WIDTH).toString();  this.gridX--;          break;
                case "RIGHT":   animParams.x= S.C_WIDTH.toString();  this.gridX++;            break;
                case "UP":   animParams.y= (-S.C_HEIGHT).toString(); this.gridY--;            break;
                case "DOWN":   animParams.y= S.C_HEIGHT.toString();   this.gridY++;           break;
            }

            TweenMax.to(this, S.ENEMY_SPEED,animParams);
        console.log("step end *")
    };


    function getHandler(n) {
        return function() {
            alert( 'You clicked on: ' + n );
        };
    }

//    for (var i = 0; i < 100; ++i) {
//        myElements[i].onclick = getHandler(i);
//    }

    Enemy.prototype.decideWhichWayGo  = function(dir) {


        //console.log("this.prevDir",this.prevDir);

        var result = dir;

        var rArr = this.checkFree();

        console.log("attempting to go:",result, "but can go: ",rArr)



        for (var i in rArr) {

                //if found, keep on going same way

                if (result==rArr[i]) {

                    console.log("deciding to go:", result)

                    break;

                } else {

                   var pickRandom=rArr[Rndm.integer(rArr.length)];

                    result=pickRandom;
                    console.log("deciding to go:", result)
                    break;

                }


        }

        if(!this.prevDir) {this.prevDir=result} else {this.prevDir=this.currDir};
        this.currDir=result;

        console.log("step start ***********")
        console.log("curr",this.currDir,"prev",this.prevDir)


        return result
    }

    Enemy.prototype.checkFree =function () {

            var result = [];
            if (this.gridRef.getItemAtXY(this.gridX+1,this.gridY).free) result.push("RIGHT");
            if (this.gridRef.getItemAtXY(this.gridX-1,this.gridY).free) result.push("LEFT");
            if (this.gridRef.getItemAtXY(this.gridX,this.gridY-1).free) result.push("UP");
            if (this.gridRef.getItemAtXY(this.gridX,this.gridY+1).free) result.push("DOWN");

        return result;
    }

    Enemy.prototype.checkRight =function () {
        return this.gridRef.getItemAtXY(this.gridX+1,this.gridY).free
    };

    Enemy.prototype.checkDown =function () {
        return this.gridRef.getItemAtXY(this.gridX,this.gridY+1).free
    };

    Enemy.prototype.checkLeft =function () {
        return this.gridRef.getItemAtXY(this.gridX-1,this.gridY).free
    };

    Enemy.prototype.checkUp =function () {
        return this.gridRef.getItemAtXY(this.gridX,this.gridY-1).free
    };



    Enemy.prototype.animationOver = function() {
        this.calculateNextMove();
    };

    Enemy.prototype.calculateNextMove = function () {

        var ref = this.target;
        ref.go(ref.currDir);

      //  console.log(ref.gridX,ref.gridY);

        //infected




    }

    window.Enemy = Enemy;

}(window));






















