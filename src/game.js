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
  
  if((e.code === 'Space'|| e.code === 'ArrowUp')&& turtle.y == turtleY){
  //jump 
  velocityY = -10;
  
  }
  
  if(gameOver){
    turtleImg.src = "./images/ninja-turtle-player.png";
    turtle.y = turtleY;
    enemiesArray = [];
    score = 0;
    gameOver = false;
  }
     
  }
  
  function detectCollision(a, b){
    return a.x <  b.x + b.width && // a's top left corner does not reach b's top right corner  
      a.x + a.width > b.x && //a's top right corner is bigger than b's top left corner  
      a.y <b.y+ b.height && // a's top left corner does not reach b's bottom left corner 
      a.y + a.height > b.y // a's bottom left corner does not reach b's top left corner 
  }