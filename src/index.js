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







// on load function when page loads -> we want background canvas to show 
window.onload = function (){  
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext("2d");

  // draw turtle once page is loaded 
  turtleImg = new Image();
  turtleImg.src = "./images/ninja-turtle-player.png";
  turtleImg.onload = function() {
    // calling a function when image loads - display it!
    context.drawImage(turtleImg, turtle.x, turtle.y, turtle.width, turtle.height);
  };
enemy1Img = new Image();
enemy1Img.src= "../images/enemy1.png"

enemy2Img = new Image();
enemy2Img.src= "../images/enemy2.png"

enemy3Img = new Image();
enemy3Img.src= "../images/enemy3.png"


requestAnimationFrame(update);
setInterval(placeEnemies, 1000);
}




function update(){
requestAnimationFrame(update);
//clear canvas on each interaction
context.clearRect(0,0,boardWidth, boardHeight)


context.drawImage(turtleImg, turtle.x, turtle.y, turtle.width, turtle.height);
//Enemies

for(let i = 0; i < enemiesArray.length; i++ ){
  let enemy = enemiesArray[i];
  enemy.x += velocityX
  context.drawImage(enemy.img,enemy.x, enemy.y, enemy.width, enemy.height);
}

}

function placeEnemies(){
let enemies = {
  img: null,
  x: enemyX,
  y: enemyY,
  width: null,
  height: enemyHeight,

}

let placeEnemiesRandom = Math.random();
if(placeEnemiesRandom > 0.8){
  enemies.img = enemy3Img;
  enemies.width = enemy3Width;
  enemiesArray.push(enemies)
}
else if(placeEnemiesRandom > 0.6){
  enemies.img = enemy2Img;
  enemies.width = enemy2Width;
  enemiesArray.push(enemies)
}
else if(placeEnemiesRandom > 0.5){
  enemies.img = enemy1Img;
  enemies.width = enemy1Width;
  enemiesArray.push(enemies)
}


}


