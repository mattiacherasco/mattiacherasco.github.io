class Laser {
    constructor(x, y, height) {
      this.x = x;
      this.y = y;
      this.size = 3;
      this.height = height;
      this.active = true;
      this.triangleHeight=10;
    }
    //set
    setActive(newActive) {this.active = newActive;}
    //get
    getX() { return this.x; }
    getY() { return this.y; }
    getActive() { return this.active; }
    getHeight() {return this.height; }
    getSize() {return this.size; }
    getTriangleHeight() {return this.triangleHeight; }
  
    show() {
      fill(0);
      triangle(this.getX()-this.getSize(), this.getY(), this.getX()+this.getSize()*2, this.getY(), this.getX()+this.getSize()/2, this.getY()-this.getTriangleHeight());
      triangle(this.getX()-this.getSize(), this.getY()-this.getHeight(), this.getX()+this.getSize()*2, this.getY()-this.getHeight(), this.getX()+this.getSize()/2, this.getY()-this.getHeight()+this.getTriangleHeight());
      if (this.getActive()) {
        fill(0, 255, 0);
        rect(this.getX(), this.getY()-this.getTriangleHeight(), this.getSize(), -this.getHeight()+this.getTriangleHeight()*2);
      }
    }
  }