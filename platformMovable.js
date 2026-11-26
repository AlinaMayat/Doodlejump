export default class Hat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    translate(this.x, this.y);

    fill(120, 150, 100);
    rect(165, 300, 70, 40);
    ellipse(200, 300, 70, 10);
    rect(155, 340, 90, 2);

    noFill();
    noStroke();
    rect(165, 296, 70, 50);

    pop();
  }
}
