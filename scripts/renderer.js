export default class Renderer {
  constructor(scale) {
    this.scale = scale;
    this.cols = 64;
    this.rows = 32;
    this.display = new Array(this.cols * this.rows);

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.height = this.rows * this.scale;
    this.canvas.width = this.cols * this.scale;
  }

  setPixel(x, y) {
    if(x > this.cols) {
      x -= this.cols;
    } else if(x < 0) {
      x += this.cols;
    }

    if(y > this.rows) {
      y -= this.rows;
    } else if(y < 0) {
      y += this.rows;
    }
    console.log(x, y);
    const pixelLocation = x + (y * this.cols);
    this.display[pixelLocation] ^= 1;
    return this.display[pixelLocation];
  }

  clear() {
    this.display = new Array(this.cols * this.rows);
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < this.display.length; i++) {
      const x = (i % this.cols) * this.scale;
      const y = Math.floor(i / this.cols) * this.scale;

      if(this.display[i]) {
        console.log("Ja");
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(x, y, this.scale, this.scale);
      }
    }
  }

  testRender() {
    this.setPixel(0, 1);
    this.setPixel(12, 9);
    this.setPixel(18, 5);
  }
}
