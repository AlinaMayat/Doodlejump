let xHat= 100;
let speedHat = 3;
class Hat{
    constructor(x, y) {
    this.x = x;
    this.y = y;
  }


draw (){
  xHat = xHat + speedHat;
 
  if(xHat<50 || xHat>300){
        speedHat=-speedHat;
    }

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
const myHat = new Hat(0, 0);

function draw() {
  myHat.draw();

}