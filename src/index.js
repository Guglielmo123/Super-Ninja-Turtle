console.log('JS loaded!');

// board (canvas)
let board;
let boardWidth = 750;
let boardHeight = 550;

// turtle variables

let turtleWidth = 88;
let turtleHeight = 94;
let turtleX = 50;
let turtleY = boardHeight - turtleHeight; 
let turtleImg;

let turtle = {
  x: turtleX,
  y: turtleY,
  width: turtleWidth,
  height: turtleHeight,
}

// on load function when page loads -> we want backgroun canvas to show 
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
  
}


