class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.pressed = false;
  }
  //set
  setPressed(newPressed) { this.pressed = newPressed; }
  //get
  getX() { return this.x; }
  getY() { return this.y; }
  getSize() { return this.size; }
  getRelation() { return this.relation; }
  getPressed() { return this.pressed; }

  show() {
    stroke(0);
    if (this.getPressed() == false) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    ellipse(this.getX(), this.getY() + 15, this.getSize(), this.getSize());
    noStroke();
  }
}