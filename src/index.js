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
enemy1Img.src= "./images/enemy1.png"

enemy2Img = new Image();
enemy2Img.src= "./images/enemy2.png"

enemy3Img = new Image();
enemy3Img.src= "./images/enemy3.png"


requestAnimationFrame(update);
setInterval(placeEnemies, 1000);
document.addEventListener('keydown', moveTurtle);
}




function update(){
requestAnimationFrame(update);
if(gameOver){
  return;
} // if the game is over we want eveything to stop

//clear canvas on each interaction
context.clearRect(0,0,boardWidth, boardHeight)

// turtle 
velocityY+=gravity;
turtle.y = Math.min(turtle.y+velocityY,turtleY) // making sure that the turle y position is not below the fixed turtleY position
context.drawImage(turtleImg, turtle.x, turtle.y, turtle.width, turtle.height);
//Enemies

for(let i = 0; i < enemiesArray.length; i++ ){
  let enemy = enemiesArray[i];
  enemy.x += velocityX
  context.drawImage(enemy.img,enemy.x, enemy.y, enemy.width, enemy.height);

  if (detectCollision(turtle, enemy)){

    gameOver = true;
    turtleImg.src="./images/dead-ninjaturtle-removebg-preview.png"
    turtleImg.onload = function(){
      context.drawImage(turtleImg, turle.x, turtle.y, turtle.width, turtle.height)

    }
  }

}

}

function placeEnemies(){
  if(gameOver){
    return;
  }

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
}if (enemiesArray.length > 5){
  enemiesArray.shift() // removes first element from array so array does not constantly grow (takes up space)

}
 
}

function moveTurtle(e){
if(gameOver){return;}

if((e.code === 'Space'|| e.code === 'ArrowUp')&& turtle.y == turtleY){
//jump 
velocityY = -12;

}
   
}

function detectCollision(a, b){
  return a.x <  b.x + b.width && // a's top left corner does not reach b's top right corner  
    a.x + a.width > b.x && //a's top right corner is bigger than b's top left corner  
    a.y <b.y+ b.height && // a's top left corner does not reach b's bottom left corner 
    a.y + a.height > b.y // a's bottom left corner does not reach b's top left corner 
}
 