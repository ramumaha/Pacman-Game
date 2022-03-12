import {GRID_SIZE,CELL_SIZE,OBJECT_TYPE,CLASS_LIST} from './setup'







class GameBoard{
    constructor(DOMGrid){
        this.dotCount=0;
        this.grid=new Array(this.cols);
        this.DOMGrid=DOMGrid;
        this.rows=23;
        this.cols=20;
    }

    createGrid(level){
        this.dotCount=0;
        this.DOMGrid.innerHTML='';
        this.DOMGrid.style.cssText=`grid-template-columns:repeat(${GRID_SIZE},${CELL_SIZE}px)`;

        this.grid=new Array(this.cols);
        for(let i=0;i<this.rows;i++){
            this.grid[i]=new Array(this.cols);
        }
       let i=0;
        for(let r=0;r<20;r++){
            for(let c=0;c<23;c++){
                this.grid[r][c]=document.createElement('div');
                this.grid[r][c].classList.add('square',CLASS_LIST[level[i]]);
                this.grid[r][c].style.cssText=`width:${CELL_SIZE}px;height: ${CELL_SIZE}px;`;
                this.DOMGrid.appendChild(this.grid[r][c]);
                i++;
            }
        }
        
        
        

    
        
    }

    static createGameBoard(DOMGrid,level){
        const board=new this(DOMGrid);
        board.createGrid(level);
        return board;
    }

    showGameStatus(gameWin){
        const div=document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML=`${gameWin ? 'WIN!' : 'GAMEOVER'}`
        this.DOMGrid.appendChild(div);
    }

    

}

export default GameBoard;