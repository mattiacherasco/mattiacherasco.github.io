class Finish {
  constructor(x, y) {
    this.originalX = x;
    this.originalY = y;
    this.size = 30; // Dimensione del quadrato esterno
    this.innerSize = 1.5; // Dimensione dei quadrati interni
    this.colors = [color(0), color(255)]; // Array di colori (nero e bianco)
    this.cont = 0;
  }

  getX(){return this.originalX}
  getY(){return this.originalY}
  getSize(){return this.size}

  show() {
    noStroke(); // Senza contorni per un aspetto più pulito
    this.cont++;

    if (this.cont % 20 == 0) {
      this.colors.reverse();
    }

    let currentX = this.originalX;
    let currentY = this.originalY;

      // Disegna quadrati annidati finché sono visibili
      for (let i = 0; i < this.size; i += this.innerSize * 2) {
        if (i % (this.innerSize * 4) === 0) {
          fill(this.colors[0]);
        } else {
          fill(this.colors[1]);
        }

        // Calcola la posizione dei quadrati in modo che sembrino entrare all'interno
        let offset = (this.size) / 2;
        rect(currentX + offset + i / 2, currentY + offset + i / 2, this.size - i, this.size - i);
      }


    }
  }

