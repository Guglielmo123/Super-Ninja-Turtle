console.log('JS loaded!');

const myCanvas = document.getElementById('canvas');
const context = myCanvas.getContext('2d');

const img = new Image();
img.src ="../images/8-bit-mario-background-1-Background-Download.png"

// board (canvas)
let board;
let boardWidth = 750;
let boardHeight = 250;

// turtle variables

let turtleWidth = 88;
let turtleHeight = 94;
let turtleX = 50;
let turtleY = 200;
let turtleImg = new Image();
turtleImg.src"../images/"