console.log(localStorage.key(0));
let highScore;
// on load function when page loads -> we want background canvas to show
window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");
  highScore = localStorage.getItem("topScore") || 0;

  backgroundImage.draw();
  // draw turtle once page is loaded
  turtleImg = new Image();
  turtleImg.src = "./images/ninja-turtle-player.png";
  turtleImg.onload = function () {
    // calling a function when image loads - display it!
    context.drawImage(
      turtleImg,
      turtle.x,
      turtle.y,
      turtle.width,
      turtle.height
    );
  };

  enemy1Img = new Image();
  enemy1Img.src = "./images/enemy1.png";

  enemy2Img = new Image();
  enemy2Img.src = "./images/enemy2.png";

  enemy3Img = new Image();
  enemy3Img.src = "./images/enemy3.png";
  let gameRunning = false;

  
  const music = document.getElementById("music");
  music.volume = 0.1;
 

  const startButton = document.getElementById("start-button");
  console.log(startButton);
  startButton.onclick = () => {
    music.play();

    if (!gameRunning) {
      requestAnimationFrame(update, 1000);
      setInterval(placeEnemies, 1000);
      gameRunning = true;
    }
  };
  document.addEventListener("keydown", moveTurtle);
  document.addEventListener("keyup", stopMoving);
};

const musicGameOver = document.getElementById("music-gameover");

function update() {
  requestAnimationFrame(update);
  gameWin();
  if (gameOver) {
    return;
  } // if the game is over we want eveything to stop
  backgroundImage.move();
  //clear canvas on each interaction
  context.clearRect(0, 0, boardWidth, boardHeight);

  backgroundImage.draw();
  drawHearts(turtle.lives);
  // turtle
  velocityY += gravity;
  turtle.y = Math.min(turtle.y + velocityY, turtleY); // making sure that the turle y position is not below the fixed turtleY position
  context.drawImage(turtleImg, turtle.x, turtle.y, turtle.width, turtle.height);
  //Enemies

 //Score 
  if (!gameOver) {
    context.fillStyle = "black";
    context.font = "40px courier";
    score++;
    context.fillText(
      `Your Score: ${score}pts`,
      boardWidth / 4 + 20,
      boardHeight / 8
    );
    if (score >= topScore) {
      topScore = score;
    }
    context.font = "20px fantasy";
    /* let turtleBlackShell = new Image();
    turtleBlackShell.src = "./images/turtle_shell_black.png";*/
    context.drawImage(turtleBlackShell, -30, 8, 250, 130);
    // context.fillRect(10,10,100,100);
    context.fillStyle = "white";
    context.fillText(`Saved`, 65, 70);
    context.fillText(`Score:`, 65, 90);
    context.fillText(`${highScore}`, 80, 115);
  }
  for (let i = 0; i < enemiesArray.length; i++) {
    let enemy = enemiesArray[i];
    enemy.x += velocityX;
    context.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
    // top score logic
    if (turtle.lives > 1) {
      gameOver = false;
      if (detectCollision(turtle, enemy)) {
        enemiesArray.splice(enemy, 1);
        turtle.lives--;
        const ouchMusic = document.getElementById('ouch-music');
        ouchMusic.play();
      }
    } else {
      if (detectCollision(turtle, enemy)) {
        velocityX = 0;
        turtleImg.src = "./images/rip-removebg-preview.png";
        context.clearRect(0, 0, boardWidth, boardHeight);
        backgroundImage.draw();
        musicGameOver.play();
        music.pause();
        context.font = "40px courier";
        context.fillStyle = "red";
        context.fillText(`GAME OVER!:`, boardWidth / 4 + 20, boardHeight / 16);
        context.fillStyle = "green";
        context.fillText(`${score}pts`, boardWidth / 4 + 300, boardHeight / 16);
        context.fillStyle = "black";
        context.fillText(
          `Your Top Score: ${topScore}pts`,
          boardWidth / 8,
          boardHeight / 6
        );
        gameOver = true;
        localStorage.setItem("topScore", topScore);
        highScore = localStorage.getItem("topScore") || 0;
      }
    }
  }
}
