class Killer {
  constructor(x, y, place) {
    this.x = x+4;
    if(place=='+'){
      this.y = y+10;
    }else{
      this.y = y;
    }
    this.size = 3;
    this.height = 10;
    this.place=place;
  }
  //set
  setY(newY){this.y=newY;}
  //get
  getX() { return this.x; }
  getY() { return this.y; }
  getHeight() {return this.height; }
  getSize() {return this.size; }
  getPlace() {return this.place;}

  show() {
    fill(0);
    if(this.getPlace()=='+'){
      triangle(this.getX()-this.getSize(), this.getY(), this.getX()+this.getSize()*2, this.getY(), this.getX()+this.getSize()/2, this.getY()-this.getHeight());
    }else{
      triangle(this.getX()-this.getSize(), this.getY(), this.getX()+this.getSize()*2, this.getY(), this.getX()+this.getSize()/2, this.getY()+this.getHeight());
    }
  }
}