class Collision {
  constructor() {

  }


  checkLimits() {

    if (player.getY() > player.getGamingHeight() - player.getSize()) { //controllo che non si stia andando sottoterra
      player.setY(player.getGamingHeight() - player.getSize());
      player.setMoveY(0);
      player.setJump(true);
    } else if (player.getY() < 0) {
      player.setY(0)
    }
    if (player.getX() < 0) {
      player.setX(0)
    } else if (player.getX() > player.getGamingWidth() - player.getSize()) {
      player.setX(width - player.getSize());
    }
  }

  isCollisionFinish() {
    let distance = dist(player.getX() + player.getSize() / 2, player.getY() + player.getSize() / 2, finish.getX() + finish.getSize(), finish.getY() + finish.getSize());
    let minDistance = (player.getSize() + finish.getSize()) / 1.5;
    if (distance < minDistance) {
      return true;

    }
    return false;
  }


  isCollisionModifier() {
    for (let i = 0; i < modifiers.length; i++) {
      let distance = dist(player.getX(), player.getY(), modifiers[i].getX(), modifiers[i].getY());
      let minDistance = player.getSize() + modifiers[i].getSize();
      if (distance < minDistance) {
        if ((modifiers[i].getAction() == '-' && player.getMoment() > 1) || (modifiers[i].getAction() == '+' && player.getMoment() < 4)) {
          return i;
        }
        else if ((modifiers[i].getAction() == '-' && player.getMoment() == 1) || (modifiers[i].getAction() == '+' && player.getMoment() == 4)) {
          player.die()
        }
      }
    }
    return -1;
  }

  isCollisionCorpse() {
    for (let i = 0; i < corpses.length; i++) {
      if (corpses[i].getMoment() == player.getMoment() + 1) {
        let distance = dist(player.getX(), player.getY(), corpses[i].getX(), corpses[i].getY());
        let minDistance = 0.5 * (player.getSize() + corpses[i].getSize());
        if (distance < minDistance) {
          return i;
        }
      }
    }
    return -1;
  }

  isCollisionLaser() {
    for (let i = 0; i < lasers.length; i++) {
      let distance = dist(player.getX() + player.getSize() / 2, player.getY() + player.getSize() / 2, lasers[i].getX(), lasers[i].getY());
      let minDistance = (player.getSize() + lasers[i].getSize()) / 1.5;
      if (distance < minDistance) {
        return i;
      }
    }
    return -1;
  }

  isCollisionKiller() {
    for (let i = 0; i < killers.length; i++) {
      let distance
      if (killers[i].getPlace() == "+") {
        distance = dist(player.getX() + player.getSize() / 2, player.getY() + player.getSize() / 3, killers[i].getX() - 3 + killers[i].getSize(), killers[i].getY() - 10);
      } else {
        distance = dist(player.getX() + player.getSize() / 2, player.getY() + player.getSize() / 3, killers[i].getX() - 3 + killers[i].getSize(), killers[i].getY());
      }
      let minDistance = (player.getSize() + killers[i].getSize()) / 1.5;
      if (distance < minDistance) {
        return i;
      }
    }
    return -1;
  }

  isCollisionButton(i) {
    let distance = dist(player.getX() + player.getSize() / 2, player.getY(), buttons[i].getX(), buttons[i].getY());
    let minDistance = 1.5 * player.getSize() / 2 + buttons[i].getSize() / 2 + 5;
    if (distance < minDistance) {
      return true;
    }
    for (let k = 0; k < corpses.length; k++) {
      distance = dist(corpses[k].getX() + corpses[k].getSize() / 2, corpses[k].getY(), buttons[i].getX(), buttons[i].getY());
      minDistance = 1.5 * corpses[k].getSize() / 2 + buttons[i].getSize() / 2 + 5;
      if (distance < minDistance) {
        return true;
      }
    }
    return false;
  }

  hits(platform) {
    return (
      player.getX() < platform.getX() + platform.getWidth() &&
      player.getX() + player.getSize() > platform.getX() &&
      player.getY() + player.getSize() > platform.getY() &&
      player.getY() < platform.getY()
    )
  }

  hitsUnder(platform) {
    return (
      player.getX() < platform.getX() + platform.getWidth() &&
      player.getX() + player.getSize() > platform.getX() &&
      player.getY() < platform.getY() + platform.getHeight() &&
      player.getY() + player.getSize() > platform.getY()
    )
  }

  hitsSideRight(platform) {
    return (
      player.getX() < platform.getX() + platform.getWidth() + 2 &&
      player.getX() + player.getSize() - 2 > platform.getX() &&

      player.getY() < platform.getY() + platform.getHeight() &&
      player.getY() + player.getSize() > platform.getY()
    )
  }

  hitsSideLeft(platform) {
    return (
      player.getX() < platform.getX() + platform.getWidth() - 2 &&
      player.getX() + player.getSize() + 2 > platform.getX() &&

      player.getY() < platform.getY() + platform.getHeight() &&
      player.getY() + player.getSize() > platform.getY()
    )
  }

  isCollisionPlatform(platform) {
    if (this.hits(platform)) {
      player.setMoveY(0);
      player.setY(platform.getY() - player.getSize());
      player.setJump(true);
      player.setCanDivide(false)
    }
    else if (this.hitsUnder(platform)) {
      player.setMoveY(+1)
    }

    if (!this.hitsUnder(platform) && this.hitsSideRight(platform)) {
      player.setX(platform.getX() + platform.getWidth())
      player.setMoveX(0)

    } else if (!this.hitsUnder(platform) && this.hitsSideLeft(platform)) {
      player.setX(platform.getX() - player.getSize())
      player.setMoveX(0)
    }

  }

  checkCollision() {
    for (let i = 0; i < platforms.length; i++) {
      this.isCollisionPlatform(platforms[i]);
    }
    let collisionIndex = this.isCollisionCorpse();
    if (collisionIndex != -1) {
      corpses.splice(collisionIndex, 1);
      player.sum();
    }

    collisionIndex = this.isCollisionModifier();
    if (collisionIndex != -1) {
      if (modifiers[collisionIndex].getAction() == '-') {
        player.division();
      } else {
        player.sum();
      }
      modifiers.splice(collisionIndex, 1);
    }

    for (let i = 0; i < buttons.length; i++) {
      if (this.isCollisionButton(i)) {
        buttons[i].setPressed(true);
        lasers[i].setActive(false);
      } else {
        buttons[i].setPressed(false);
        lasers[i].setActive(true);
      }
    }


    collisionIndex = this.isCollisionLaser();
    if (collisionIndex != -1) {
      if (lasers[collisionIndex].getActive()) {
        player.die();
      }
    }
    collisionIndex = this.isCollisionKiller();
    if (collisionIndex != -1) {
      player.die();
    }

    collisionIndex = this.isCollisionFinish()
    if (collisionIndex) {
      newLevel()
    }
  }
}