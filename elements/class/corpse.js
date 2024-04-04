class Corpse {
  constructor(x, y, size, moment) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.moment = moment;
    this.moveY = 0;
    this.gravity = 0.05;
    this.fall = false;
  }
  //set
  setY(newY){this.y=newY;}
  setMoveY(newMoveY) { this.moveY = newMoveY; }
  setFall(newFall) { this.fall = newFall; }    
  //get
  getX() { return this.x; }
  getY() { return this.y; }
  getSize() { return this.size; }
  getMoment() { return this.moment; }
  getMoveY() { return this.moveY; }
  getGravity() { return this.gravity; }
  getFall() { return this.fall; }
  
  show() {
    fill(255, 0, 0);
    rect(this.getX(), this.getY() + this.getSize() / 3 * 2, this.getSize(), this.getSize() / 3, 0, 0, this.getSize() / 9, this.getSize() / 9);
    rect(this.getX(), this.getY(), this.getSize() / 5, this.getSize() / 3 * 2, this.getSize() / 9, 0, 0, 0);
    rect(this.getX() + this.getSize() / 5 * 4, this.getY(), this.getSize() / 5, this.getSize() / 3 * 2, 0, this.getSize() / 9, 0, 0);
    for (let i = 0; i < corpses.length; i++) {
      corpses[i].falling();
    }
  }
  
  falling() {
    if (this.getFall()) {
      this.setMoveY(this.getMoveY() + this.getGravity());
      this.setY(this.getY() + this.getMoveY());
      this.checkFallingLimits();
    }
  }
  
  startFalling() {
    this.setFall(true);
  }
  
  checkFallingLimits() {
    for (let i = 0; i < platforms.length; i++) {
      if(
        this.getX() < platforms[i].getX() + platforms[i].getWidth() &&
        this.getX() + this.getSize() > platforms[i].getX() &&
        this.getY() + this.getSize() > platforms[i].getY() &&
        this.getY() < platforms[i].getY() + platforms[i].getHeight()
      ) {
        this.setY(platforms[i].getY() - this.getSize());
        this.setFall(false);
        return null;
      }
    }  
    if (this.getY() > player.getGamingHeight() - this.getSize()) {
      this.setY(player.getGamingHeight() - this.getSize());
      this.setFall(false);
    }
  }
}