console.log('JS loaded!');

// board (canvas)
let board;
let boardWidth = 750;
let boardHeight = 550;

// turtle variables
let turtleWidth = 110;
let turtleHeight = 130;
let turtleX = 50;
let turtleY = boardHeight - turtleHeight + 20;
let turtleImg;

// player object that holds the variables 
let turtle = {
  x: turtleX,
  y: turtleY,
  width: turtleWidth,
  height: turtleHeight,
  lives: 3,
}
// heart images
function drawHearts (lives) {
    const heartsImg = new Image();
    heartsImg.src=`./images/${lives}-heart.png`;
    context.drawImage(heartsImg, 550, 50, 200, 150);

}

// Enemies
let enemiesArray = [];

let enemy1Width = 30;
let enemy2Width = 60;
let enemy3Width = 90;

let enemyHeight = 70;
let enemyX = 750;
let enemyY = boardHeight - enemyHeight;

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
backgroundImg.src = "./images/background nyc.jpg";

class BackgroundImage {
  constructor() {
    this.img = backgroundImg;
    this.x = 0;
    this.speed = 0;

  }
  move() {
    this.x += this.speed;
    this.x %= boardWidth;
  }
  draw() {
    context.drawImage(this.img, this.x, 0, boardWidth, boardHeight);
    context.drawImage(this.img, this.x + boardWidth, 0, boardWidth, boardHeight);
    context.drawImage(this.img, this.x - boardWidth, 0, boardWidth, boardHeight);
    if (this.speed < 0) {
      context.drawImage(this.img, this.x + boardWidth, 0, boardWidth, boardHeight);
    } else {
      context.drawImage(this.img, this.x - this.img.width, 0, boardWidth, boardHeight);
    }

    if (arrowMoveLeft) {
      this.speed = 1
    } else if (arrowMoveRight) {
      this.speed = -1
    } else {
      this.speed = 0
    }
  }
}
const backgroundImage = new BackgroundImage();

// top score function 
let topScore = 0;


// turtle black shell 
let turtleBlackShell = new Image();
turtleBlackShell.src = "./images/turtle_shell_black.png"

//game win frame 
let gameWinImage = new Image();
gameWinImage.src="./images/gameWin.png"

// if game is won 
function gameWin(){
  if(score > 5000){
    context.drawImage(gameWinImage,0,0,boardWidth,boardHeight);
    if (frames % 20 === 0){
      context.fillStyle = changeColor();
    }
    context.font = "45px fantasy";
    context.fillText('CONGRATULATIONS!',162,80);
    context.fillText('Ninja Turtles Survive!',190, 130);
    gameOver = true; 
  }
}

function changeColor(){

let colorsArray = ['red', 'black', 'white', 'aqua']
let randomIndex;
  for(i=0; i<colorsArray.length; i++){
    randomIndex = Math.floor(Math.random() * colorsArray.length);
      colorsArray[i] = colorsArray[randomIndex];

    }
  return colorsArray[randomIndex];
}



