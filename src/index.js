console.log('JS loaded!');

const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

const img = new Image();
img.src ="../images/tmnt background 2.jpg"

const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= myCanvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}


img.onload = updateCanvas;