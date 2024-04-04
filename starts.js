/*
class CreatingLevel {
    constructor(fileName){
      this.file = fileName;
    }
}
const height = 570;
const width = 1290;
this.player;
finish;
let corpses = [];
let modifiers = [];
let lasers = [];
let buttons = [];
let platforms = [];
let killers = [];
let gameMap;
let cellX;
let cellY;
let startingThings=[];
let contI=1;
let contJ=1;
let tempI=0;
let tempJ=0;
let collision=null

function preload(fileName) {
  gameMap = loadTable(fileName, 'csv', 'header');
  setup()
}

function setup() {
  createCanvas(width, height);
  noStroke();
  frameRate(60);
  setupGameElements();
}

function setupGameElements() {
  cellValue = 0;
  cellX = 0; 
  cellY = 0;  
  corpses = [];
  modifiers = [];
  lasers = [];
  buttons = [];
  platforms = [];
  killers = [];
  collision=new Collision()
  for (let i = 0; i < gameMap.getRowCount(); i++) {
    for (let j = 0; j < gameMap.getColumnCount(); j++) {
      cellX = j * 10;  gameMap.getNum(i, j)
      cellY = i * 10;  

      switch (gameMap.getNum(i, j)) {
        case 1:
          player = new Player(width, height, cellX, cellY, 20, -9, 1);
          break;
        case 2.2:
          let corpse2 = new Corpse(cellX, cellY, 28.2, 2);
          corpse2.startFalling();
          corpses.push(corpse2);
          break;
        case 2.3:
          let corpse3 = new Corpse(cellX, cellY, 39.199999999999996, 3);
          corpse3.startFalling();
          corpses.push(corpse3);
          break;   
        case 2.4:
          let corpse4 = new Corpse(cellX, cellY, 54.87999999999999, 4);
          corpse4.startFalling();
          corpses.push(corpse4);
          break;      
        case 3:
          let modifier = new Modifier(cellX, cellY, '+');
          modifiers.push(modifier);
          break;
        case -3:
          let modifierNeg = new Modifier(cellX, cellY, '-');
          modifiers.push(modifierNeg);
          break;
        case 4:
          contI=0;
          tempI=i-1;
          while(contI < gameMap.getRowCount() && gameMap.getNum(tempI, j)==-4){
            contI++;
            tempI--;
          }
          let laser = new Laser(cellX, cellY+10, contI*10+10);
          lasers.push(laser);
          break;
        case 5:
          let button = new Button(cellX, cellY);
          buttons.push(button);
          break;
        case 6:
          let killer = new Killer(cellX, cellY, '+');
          killers.push(killer);
          break;
        case -6:
          let downkiller = new Killer(cellX, cellY, '-');
          killers.push(downkiller);
          break;
        case 7:
          contI=1;
          contJ=1;
          tempJ=j+1;
          tempI=i+1;
          while((contJ < gameMap.getColumnCount() && gameMap.getNum(i, tempJ)==-7)){
            contJ++;
            tempJ++;
          }
          while(contI < gameMap.getRowCount() && gameMap.getNum(tempI, j)==-7){
            contI++;
            tempI++;
          }
          let platform = new Platform(cellX, cellY, contJ*10, contI*10);
          platforms.push(platform);
          break;
        case 9:
          finish = new Finish(cellX, cellY);
          break;
      }
    }
  }
}

function draw() {
  background(220);
  player.update();
  for (let i = 0; i < corpses.length; i++) {
    corpses[i].show();
  }
  for (let i = 0; i < modifiers.length; i++) {
    modifiers[i].show();
  }
  for (let i = 0; i < lasers.length; i++) {
    lasers[i].show();
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].show();
  }
  for (let i = 0; i < killers.length; i++) {
    killers[i].show();
  }
  finish.show();
}

function keyPressed() {
  if(player!=null){
    if (keyCode == RIGHT_ARROW) {
      player.setMoveX(5);
    } else if (keyCode == LEFT_ARROW) {
      player.setMoveX(-5);
    } else if (keyCode == UP_ARROW) {
      player.jump();
    } else if (keyCode == DOWN_ARROW) {
      //player.sum();
    } else if (keyCode == 32) {
      player.divide();
    } else if (keyCode == 82) {
      player.die();
    }
  }else{
    console.log("null")
    setupGameElements()
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    player.setMoveX(0);
  }
}

*/ 

















/*class CreatingLevel {
    constructor(fileName){
      this.file = fileName;
      this.height = 570;
this.width = 1290;
this.player;
this.finish;
this. corpses = [];
this.modifiers = [];
this.lasers = [];
this.buttons = [];
this.platforms = [];
this.killers = [];
this.gameMap;
this.cellX;
this.cellY;
this.startingThings=[];
this.contI=1;
this.contJ=1;
this.tempI=0;
this.tempJ=0;
this.collision=null
this.gameMap=null
    }


preload() {
  this.gameMap = loadTable(this.fileName, 'csv', 'header');
  this.setup()
}

setup() {
  createCanvas(width, height);
  noStroke();
  frameRate(60);
  this.setupGameElements();
}

setupGameElements() {
  this.cellValue = 0;
  this.cellX = 0; 
  this.cellY = 0;  
  this.corpses = [];
  this.modifiers = [];
  this.lasers = [];
  this.buttons = [];
  this.platforms = [];
  this.killers = [];
  this.collision=new Collision()
  for (let i = 0; i < this.gameMap.getRowCount(); i++) {
    for (let j = 0; j < this.gameMap.getColumnCount(); j++) {
      this.cellX = j * 10;  this.gameMap.getNum(i, j)
      this.cellY = i * 10;  

      switch (this.gameMap.getNum(i, j)) {
        case 1:
          this.player = new Player(this.width, this.height, this.cellX, this.cellY, 20, -9, 1);
          break;
        case 2.2:
          let corpse2 = new Corpse(this.cellX, this.cellY, 28.2, 2);
          corpse2.startFalling();
          this.corpses.push(corpse2);
          break;
        case 2.3:
          let corpse3 = new Corpse(this.cellX, this.cellY, 39.199999999999996, 3);
          corpse3.startFalling();
          this.corpses.push(corpse3);
          break;   
        case 2.4:
          let corpse4 = new Corpse(this.cellX, this.cellY, 54.87999999999999, 4);
          corpse4.startFalling();
          this.corpses.push(corpse4);
          break;      
        case 3:
          let modifier = new Modifier(this.cellX, this.cellY, '+');
          this.modifiers.push(modifier);
          break;
        case -3:
          let modifierNeg = new Modifier(this.cellX, this.cellY, '-');
          this.modifiers.push(modifierNeg);
          break;
        case 4:
          this.contI=0;
          this.tempI=i-1;
          while(this.contI < this.gameMap.getRowCount() && this.gameMap.getNum(this.tempI, j)==-4){
            this.contI++;
            this.tempI--;
          }
          let laser = new Laser(this.cellX, this.cellY+10, this.contI*10+10);
          this.lasers.push(laser);
          break;
        case 5:
          let button = new Button(this.cellX, this.cellY);
          this.buttons.push(button);
          break;
        case 6:
          let killer = new Killer(this.cellX, this.cellY, '+');
          this.killers.push(killer);
          break;
        case -6:
          let downkiller = new Killer(this.cellX, this.cellY, '-');
          this.killers.push(downkiller);
          break;
        case 7:
          this.contI=1;
          this.contJ=1;
          this.tempJ=j+1;
          this.tempI=i+1;
          while((this.contJ < this.gameMap.getColumnCount() && this.gameMap.getNum(i, tempJ)==-7)){
            this.contJ++;
            tempJ++;
          }
          while(contI < gameMap.getRowCount() && gameMap.getNum(tempI, j)==-7){
            this.contI++;
            this.tempI++;
          }
          let platform = new Platform(this.cellX, this.cellY, this.contJ*10, this.contI*10);
          this.platforms.push(platform);
          break;
        case 9:
          this.finish = new Finish(this.cellX, this.cellY);
          break;
      }
    }
  }
}

draw() {
  background(220);
  this.player.update();
  for (let i = 0; i < this.corpses.length; i++) {
    this.corpses[i].show();
  }
  for (let i = 0; i < this.modifiers.length; i++) {
    this.modifiers[i].show();
  }
  for (let i = 0; i < this.lasers.length; i++) {
    this.lasers[i].show();
  }
  for (let i = 0; i < this.buttons.length; i++) {
    this.buttons[i].show();
  }
  for (let i = 0; i < this.platforms.length; i++) {
    this.platforms[i].show();
  }
  for (let i = 0; i < this.killers.length; i++) {
    this.killers[i].show();
  }
  this.finish.show();
}

keyPressed() {
  if(player!=null){
    if (keyCode == RIGHT_ARROW) {
      this.player.setMoveX(5);
    } else if (keyCode == LEFT_ARROW) {
      this.player.setMoveX(-5);
    } else if (keyCode == UP_ARROW) {
      this.player.jump();
    } else if (keyCode == 32) {
      this.player.divide();
    } else if (keyCode == 82) {
      this.player.die();
    }
  }else{
    console.log("null")
    this.setupGameElements()
  }
}

keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    this.player.setMoveX(0);
  }
}
}*/