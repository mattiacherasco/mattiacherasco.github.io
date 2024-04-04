class StartingPage {
    constructor(img, imgLock) {
        this.x = 5;
        this.y = 5;
        this.blocks = [];
        this.img = img
        // Creazione della lista di blocchi con 5 righe da 4 blocchi ciascuna
        let numberOfRows = 4;  // Numero di righe
        let numberOfBlocksPerRow = 8;  // Numero di blocchi per riga

        for (let row = 0; row < numberOfRows; row++) {
            for (let col = 0; col < numberOfBlocksPerRow; col++) {
                let blockX = col * 3 / 2 * 80;  // Aumenta l'x di 3/2 volte la dimensione del blocco
                let blockY = row * 3 / 2 * 80;  // Aumenta l'y di 3/2 volte la dimensione del blocco
                let newBlock = new Block(imgLock, blockX, blockY);
                this.blocks.push(newBlock);
            }
        }
    }

    getX() { return this.x; }
    getY() { return this.y; }

    show() {
        createCanvas(1290, 570)

        background("white");
        image(this.img, 0, 0, 1290, 570)

        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].show(i);
        }
    }

    askForNumber() {
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i];
            if (mouseIsPressed && mouseX > block.x && mouseX < block.x + block.size &&
                mouseY > block.y && mouseY < block.y + block.size) {
                // Mouse is within the bounds of the current block and is pressed
                return i + 1; // Return the button number (adding 1 since array index starts from 0)
            }
        }
        return null; // Return null if the mouse is not pressed or not over any block
    }
}

function mousePressed() {
    const clickedNumber = startingPage.askForNumber();
    if (clickedNumber !== null) {
        console.log("Clicked on button " + clickedNumber);
        // Perform any desired action based on the clicked button
    }
}

class Block {
    constructor(img, x, y) {
        this.img = img;
        this.x = x + 175;
        this.y = y + 80;
        this.size = 80;
        this.isLocked
    }

    show(i) {
        stroke(5)
        fill(255, 0, 0);
        rect(this.x, this.y, this.size, this.size);

        if (i > 2) {
            image(this.img, this.x, this.y, this.size / 2, this.size / 2);
            this.isLocked = true;
        } else {
            // Reset isLocked to false for blocks without a locked image
            this.isLocked = false;

            i++;
            textSize(35);
            textAlign(LEFT, TOP);
            fill(255);
            text(i, this.x, this.y);
        }
        noStroke()

    }
}
