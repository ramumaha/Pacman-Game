import {LEVEL,OBJECT_TYPE} from './setup';

import GameBoard from './GameBoard';

const GameGrid=document.querySelector('#game');
const ScoreTable=document.querySelector('#score');
const startButton=document.querySelector('#start-button');

const POWER_PILL_TIME=10000;
const GLOBAL_SPEED=80;
const gameBoard=GameBoard.createGameBoard(GameGrid,LEVEL);

let score=0;
let timer=null;
let gameWin=false;
let powerPillActive=false;
let powerPillTimer=null;

function startGame(){
    gameWin=false;
    powerPillActive=false;
    score=0;
    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

}
startButton.addEventListener('click',startGame);