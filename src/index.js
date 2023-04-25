// on load function when page loads -> we want background canvas to show 
window.onload = function (){  
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext("2d");
  backgroundImage.draw();
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
let gameRunning = false

const music = document.getElementById('music')

const startButton = document.getElementById('start-button')
console.log(startButton)
startButton.onclick=()=>{
music.play()

if (!gameRunning)
{requestAnimationFrame(update);
  setInterval(placeEnemies, 1000);
  gameRunning=true}
}
document.addEventListener('keydown', moveTurtle);
document.addEventListener('keyup', stopMoving);


}



const musicGameOver = document.getElementById('music-gameover');

function update(){
requestAnimationFrame(update);

if(gameOver){
  return;
} // if the game is over we want eveything to stop
backgroundImage.move();
//clear canvas on each interaction
context.clearRect(0,0,boardWidth, boardHeight)

backgroundImage.draw();

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
    velocityX = 0
    turtleImg.src="./images/rip-removebg-preview.png"
    context.clearRect(0,0,boardWidth, boardHeight)
    backgroundImage.draw();
    musicGameOver.play();
    music.pause();
    context.fillText(`GAME OVER!: ${score}`, (boardWidth/4)+20, boardHeight/8);

      gameOver = true; 
    }
     




//Score 
if(!gameOver){
  context.fillStyle='black';
context.font='40px courier';
score++;
context.fillText(`Your Score: ${score}`, (boardWidth/4)+20, boardHeight/8);
}

}

}


 