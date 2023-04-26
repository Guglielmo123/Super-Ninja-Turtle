console.log('JS loaded!');

// board (canvas)
let board;
let boardWidth = 750;
let boardHeight = 550;

// turtle variables

let turtleWidth = 110;
let turtleHeight = 130;
let turtleX = 50;
let turtleY = boardHeight - turtleHeight+20;
let turtleImg;

let turtle = {
  x: turtleX,
  y: turtleY,
  width: turtleWidth,
  height: turtleHeight,
  lives: 3,
}

// Enemies
let enemiesArray = [];

let enemy1Width = 30;
let enemy2Width = 60;
let enemy3Width = 90;

let enemyHeight = 70;
let enemyX = 750;
let enemyY = boardHeight -  enemyHeight;

let enemy1Img;
let enemy2Img;
let enemy3Img;

//physics

let velocityX = -8; //enemy velocity left
let velocityY = 0; //enemy will not be moved vertically
let gravity = 0.4;

let gameOver = false;
let score = 0;

// move background with arrow keys 

xSpeed = 5 
xxSpeed = -5


let arrowMoveLeft = false;
let arrowMoveRight = false; 



const backgroundImg = new Image();
backgroundImg.src="./images/background nyc.jpg";

  class  BackgroundImage{
    constructor(){
        this.img = backgroundImg;
        this.x =0;
        this.speed = 0;
        
    }
    move(){
        this.x+= this.speed;
        this.x %=boardWidth;
    }
    draw(){
        context.drawImage(this.img, this.x, 0, boardWidth, boardHeight); 
        context.drawImage(this.img, this.x + boardWidth, 0, boardWidth, boardHeight);
        context.drawImage(this.img, this.x - boardWidth, 0, boardWidth, boardHeight);
        if(this.speed<0){
        context.drawImage(this.img,this.x + boardWidth, 0, boardWidth, boardHeight);
    }else {
        context.drawImage(this.img, this.x - this.img.width,0, boardWidth, boardHeight);
    }

    if(arrowMoveLeft){
      this.speed= 1
    }else if(arrowMoveRight){
      this.speed= -1
    }else{
      this.speed=0
    }
}}
const backgroundImage = new BackgroundImage();

// top score function 
let topScore = 0;



// heart images
const heartsImg = new Image();
heartsImg.src="./images/hearts.png"

// turtle black shell 
let turtleBlackShell = new Image();
turtleBlackShell.src="./images/turtle_shell_black.png"





