import { OBJECT_TYPE,DIRECTIONS } from "./setup";

class Pacman{
    constructor(speed,startX,startY){
        this.x=startX;
        this.y=startY;
        this.speed=speed
        this.dir=null;
        this.timer=0;
        this.powerPill=false;
        this.rotation=true;
    }

    shouldMove(){
        if(!this.dir)return false;
        if(this.timer===this.speed){
            this.timer=0;
            return true;
        }
        this.timer++;
    }

    getNextMove(objectExists){
        let nextMovePosX=this.x+this.dir.movement;
        let nextMovePosY=this.y+this.dir.movement;
        if(objectExists(nextMovePosX,nextMovePosY,OBJECT_TYPE.WALL)||objectExists(nextMovePosX,nextMovePosY,OBJECT_TYPE.GHOST)){
            nextMovePosX=this.x;
            nextMovePosY=this.y
        }
        return {nextMovePosX,nextMovePosY,direction:this.dir};
    }
    
    makeMove(){
        const classesToRemove=[OBJECT_TYPE.PACMAN];
        const classesToAdd=[OBJECT_TYPE.PACMAN];

        return {classesToRemove,classesToAdd};
    }













}

export default Pacman;