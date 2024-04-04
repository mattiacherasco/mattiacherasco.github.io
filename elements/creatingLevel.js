const height = 570;
const width = 1290;
let player;
let finish;
let corpses = [];
let modifiers = [];
let lasers = [];
let buttons = [];
let platforms = [];
let killers = [];
let cellX;
let cellY;
let startingThings = [];
let contI = 1;
let contJ = 1;
let tempI = 0;
let tempJ = 0;
let collision = null
let gameMap = null
let startingPage = null
let rules = null
let imgRules = null
let mapsNumber = null
let menu
let imgMenu=null

function chosingMapsNumber() {
  if (startingPage != null) {
    return startingPage.askForNumber()
  } else {
    return null
  }
}

function newLevel(){
  gameMap=null
  maspNumber=null
  player=null
  finish=null
  canvas.remove();
  startingPage.show()
  chosingMaps()
}

function chosingMaps() {
  startingPage = new StartingPage(img, imgLock);
  mapsNumber = chosingMapsNumber()
  if (mapsNumber != null) {
    let fileName = ""
    fileName = "livelli/level" + mapsNumber + ".csv";
    gameMap = loadTable(fileName, 'csv', 'header')
    setup()
  } else {
    canvas.remove();
    startingPage.show()
  }
}

function preload() {
  imgRules = loadImage("img/rules.png")
  img = loadImage("img/startImg.png")
  imgLock = loadImage("img/lockImg.png")
  imgMenu = loadImage("img/homeImg.png")

}

function setup() {
  canvas=createCanvas(width, height);

  if (gameMap != null) {
    noStroke();
    frameRate(60);
    setupGameElements();
  } else {
    chosingMaps()
  }
}

function setupGameElements() {
  if (gameMap != null) {
    cellValue = 0;
    cellX = 0;
    cellY = 0;
    corpses = [];
    modifiers = [];
    lasers = [];
    buttons = [];
    platforms = [];
    killers = [];
    collision = new Collision()
    for (let i = 0; i < gameMap.getRowCount(); i++) {
      for (let j = 0; j < gameMap.getColumnCount(); j++) {
        cellX = j * 10; gameMap.getNum(i, j)
        cellY = i * 10;

        switch (gameMap.getNum(i, j)) {
          case -1:
            menu = new Menu(cellX, cellY, imgMenu)
            break;
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
            contI = 0;
            tempI = i - 1;
            while (contI < gameMap.getRowCount() && gameMap.getNum(tempI, j) == -4) {
              contI++;
              tempI--;
            }
            let laser = new Laser(cellX, cellY + 10, contI * 10 + 10);
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
            contI = 1;
            contJ = 1;
            tempJ = j + 1;
            tempI = i + 1;
            while ((contJ < gameMap.getColumnCount() && gameMap.getNum(i, tempJ) == -7)) {
              contJ++;
              tempJ++;
            }
            while (contI < gameMap.getRowCount() && gameMap.getNum(tempI, j) == -7) {
              contI++;
              tempI++;
            }
            let platform = new Platform(cellX, cellY, contJ * 10, contI * 10);
            platforms.push(platform);
            break;
          case 8:
            rules = new Rules(imgRules)
          case 9:
            finish = new Finish(cellX, cellY);
            break;
        }
      }
    }
  } else {
    setup()
  }
}

function draw() {
  if (player != null) {
    background(220);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].show();
    }
    for (let i = 0; i < platforms.length; i++) {
      platforms[i].show();
    }
    if (rules != null) {
      rules.show();
    }
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
    
    
    for (let i = 0; i < killers.length; i++) {
      killers[i].show();
    }
    if (finish != null) {
      finish.show();
    }
    if (menu != null) {
      menu.show();
    }
  } else {
    setup()
  }
}

function keyPressed() {
  if (player != null) {
    if (keyCode == RIGHT_ARROW || keyCode==68) {
      player.setMoveX(5);
    } else if (keyCode == LEFT_ARROW||keyCode==65) {
      player.setMoveX(-5);
    } else if (keyCode == UP_ARROW||keyCode==87) {
      player.jump();
    } else if (keyCode == 77) {
      newLevel()
    } else if (keyCode == 32) {
      player.divide();
    } else if (keyCode == 82) {
      player.die();
    }
  } else {
    setup()
  }
}

function keyReleased() {
  if (player != null && (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW || keyCode == 68 || keyCode == 65)) {
    player.setMoveX(0);
  }
}

function mousePressed() {
  if(menu!=null)
  menu.clickedMenu(mouseX, mouseY);
}