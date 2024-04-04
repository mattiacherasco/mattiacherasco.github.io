class Menu {
    constructor(x, y, img) {
        this.x = x;
        this.y = y + 7;
        this.img = img
        this.size = 80
    }

    show() {
        image(this.img, this.x, this.y, this.size, this.size-20)
    }

    clickedMenu(mouseX, mouseY) {
            // Verifica se il mouse si trova sopra il pulsante corrente
            if (
                mouseX > this.x &&
                mouseX < this.x + this.size &&
                mouseY > this.y &&
                mouseY < this.y + this.size-20
            ) {
                // Richiama la funzione associata al pulsante
                newLevel();
            }
        }
}

