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
