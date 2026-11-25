
class Book {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    translate(this.x, this.y);

    // Book cover
    fill(100, 55, 35);
    stroke(60, 35, 25);
    strokeWeight(2);
    quad(85, 255, 150, 265, 150, 285, 85, 275);
    quad(150, 265, 215, 255, 215, 275, 150, 285);

    // Pages
    fill(255, 248, 225);
    quad(85, 250, 150, 265, 150, 278, 85, 263);
    quad(150, 265, 215, 250, 215, 263, 150, 278);

    // Writing on pages
    stroke(190, 175, 145);
    strokeWeight(1);
    line(95, 254, 140, 265);
    line(95, 259, 140, 270);
    line(160, 270, 205, 259);

    noStroke();

    pop();
  }
}

const mybook1 = new Book(0, 0);
const mybook2 = new Book(140, -200);
const mybook3 = new Book(100, 200);


function draw() {

  mybook1.draw();
  mybook2.draw();
  mybook3.draw();


}
