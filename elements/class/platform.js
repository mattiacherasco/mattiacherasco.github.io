class Platform {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    //get
    getX() { return this.x; }
    getY() { return this.y; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
  
    show() {
      fill(128, 128, 128);
      rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    }
  }