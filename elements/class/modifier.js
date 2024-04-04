class Modifier {
  constructor(x, y, action) {
    this.x = x;
    this.y = y;
    this.action = action;
    this.size = 15;  
  }
  //set
  setAction(newAction) { this.action = newAction; }
  //get
  getX() { return this.x; }
  getY() { return this.y; }
  getAction() { return this.action; }
  getSize(){ return this.size; }
  
  show() {
    fill(0, 0, 255);
    ellipse(this.getX(), this.getY(), this.getSize(), this.getSize());
    textSize(15);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.getAction(), this.getX(), this.getY());
  }
}