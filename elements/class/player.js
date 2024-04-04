class Player {
    constructor(gamingWidth, gamingHeight, x, y, size, jumpStrength, moment) {
      this.gamingWidth=gamingWidth;
      this.gamingHeight=gamingHeight;
      this.startX = x;
      this.startY= y;
      this.startSize = size;
      this.startJumpStrength = jumpStrength;
      this.startMoment = moment;
      this.x = x;
      this.y = y;
      this.size = size;
      this.moveX = 0;
      this.moveY = 0;
      this.gravity = 0.5;
      this.jumpStrength = jumpStrength;
      this.moment = moment; //variabile per contare in quale corpo sia[da 1 a 4]
      this.Jump = true; //può saltare
      this.canDivide = false; //può dividere il corpo in due
      this.collision= new Collision();
    }
    //set
    setX(newX) { this.x = newX; }
    setY(newY) { this.y = newY; }
    setSize(newSize) { this.size = newSize; }
    setMoveX(newMoveX) { this.moveX = newMoveX; }
    setMoveY(newMoveY) { this.moveY = newMoveY; }
    setGravity(newGravity) { this.gravity = newGravity; }
    setJumpStrength(newJumpStrength) { this.jumpStrength = newJumpStrength; }
    setMoment(newMoment) { this.moment = newMoment; }
    setJump(newJump) { this.Jump = newJump; }
    setCanDivide(newCanDivide) { this.canDivide = newCanDivide; }
    setGamingWidth(newGamingWidth) { this.gamingWidth = newGamingWidth; }
    setGamingHeight(newGamingHeight) { this.gamingHeight = newGamingHeight; }
  
    //get
    getStartX() { return this.startX; }
    getStartY() { return this.startY; }
    getStartSize() { return this.startSize; }
    getStartJumpStrength() { return this.startJumpStrength; }
    getX() { return this.x; }
    getY() { return this.y; }
    getSize() { return this.size; }
    getMoveX() { return this.moveX; }
    getMoveY() { return this.moveY; }
    getGravity() { return this.gravity; }
    getJumpStrength() { return this.jumpStrength; }
    getMoment() { return this.moment; }
    getChangeSize() { return 1.4; }
    getChangeJump() { return 1.2; }
    getJump() { return this.Jump; }
    getCanDivide() { return this.canDivide; }
    getGamingWidth() { return this.gamingWidth; }
    getGamingHeight() { return this.gamingHeight; }
  
    
  
      
  
  
    update() {
      this.setX(this.getX() + this.getMoveX());
      this.setMoveY(this.getMoveY() + this.getGravity());
      this.setY(this.getY() + this.getMoveY());
      this.collision.checkLimits();
      this.collision.checkCollision();
      if(player!=null){
        player.show();
      }
    }
  
    show() {
      this.drawPlayer();
    }
  
    drawPlayer() {
      fill(255, 0, 0);
      rect(this.getX(), this.getY(), this.getSize(), this.getSize(), this.getSize()/9); 
      fill(255);
      this.drawEyes();
      this.setMoveX(constrain(this.getMoveX(), -4, 4));
    }
  
    drawEyes() {
      let eyeSize = this.getSize() / 4;
      let eyeX = this.getX() + this.getSize() / 4;
      let eyeY = this.getY() + this.getSize() / 4;
      this.drawEye(eyeX, eyeY, eyeSize, this.getMoveX());
      this.drawEye(eyeX + this.getSize() / 2, eyeY, eyeSize, this.getMoveX());
    }
  
    drawEye(x, y, size, moveX) {
      // disegna la parte bianca dell'occhio
      fill(255);
      ellipse(x, y, size*1.2);
      // calcola la posizione delle pupille solo lateralmente in base alla direzione del movimento
      let pupilX = x + map(moveX, -4, 4, -size / 8, size / 8);
      let pupilY = y; // la posizione Y rimane fissa
      // disegna le pupille nere
      fill(0);
      ellipse(pupilX, pupilY, size / 2);
    }
  
    jump() {
      if (this.getJump()) {
        this.setJump(false);
        this.setMoveY(this.getJumpStrength());
        this.setCanDivide(true);
      }
    }
  
    divide() {
      if (/*!this.isOnPlatform() &&*/ this.getMoment() > 1 && this.getCanDivide() && this.getY() < this.getGamingHeight() - this.getSize()) {
        this.division();
        this.setMoveY(this.getJumpStrength());
        let corpse = new Corpse(this.getX(), this.getY()+this.getSize(), this.getSize() * this.getChangeSize(), this.getMoment() + 1);
        corpses.push(corpse); // inserisco il cadavere nell'array
        if (corpses.length > 0) {
          corpses[corpses.length - 1].startFalling(); // gli sblocco la capacità di cadere
        }
      }
    }
  
    division(){ //diminuisco tutto
      this.setJumpStrength(this.getJumpStrength() / this.getChangeJump());
      this.setSize(this.getSize() / this.getChangeSize());
      this.setMoment(this.getMoment() - 1);
    }
  
    sum() {//aumento tutto
      if (this.getMoment() < 4) {
        this.setY(this.getY()-this.getSize()/2);
        this.setJumpStrength(this.getJumpStrength() * this.getChangeJump());
        this.setSize(this.getSize() * this.getChangeSize());
        this.setMoment(this.getMoment() + 1);
      }
    }
  
    die() {
      setupGameElements();
    }
  }