
class Character {
    constructor(x, y, width, height){
      this.xPos = x;
      this.yPos = y;
      this.width = width;
      this.height = height;
    }

  draw(){

    push();
    translate(this.xPos, this.yPos);

    noStroke();
    fill(247, 229, 151);
    noStroke();
    fill(247, 229, 151);
    rect(200, 490, 55, 60, 15);

    //huvud
    fill(220, 190, 150);
    circle(227, 510, 30);
    rect(220, 515, 15, 50);
  
    //hår
    fill(247, 229, 151);
    arc(227.5, 503, 55, 50, PI, 0);

  //diadem
    fill(0);
    arc(227, 495, 33, 10, PI, TWO_PI);
    fill(0);
    triangle(215, 498, 227, 490, 210, 475);
    triangle(240, 498, 227, 490, 244, 475);

    //armar
    fill(220, 190, 150);
    triangle(210, 530, 225, 530, 196, 560);
    triangle(247, 530, 235, 530, 260, 560);

    //upperbody
    fill(91, 198, 227);
    triangle(230, 570, 215, 530, 240, 530);
    
    //ben
    fill(225);
    triangle(210, 570, 225, 570, 210, 600);
    fill(225);
    triangle(250, 570, 235, 570, 250, 600);
    
    //kjol
    fill(91, 198, 227);
    arc(230, 570, 60, 50, PI, 0);

    //förkläde
    fill(255);
    arc(229.5, 565, 40, 40, PI, 0);
    
    //fötter
    fill(0);
    circle(210, 595, 10);
    circle(250, 595, 10);

    //osynlig rektangel
    noFill();
    rect(196, 476, 70, 124);

    pop(); 
  }
}

const myCharacter = new Character(this.xPos, this.yPos);
function setup(){
  createCanvas(500,600);
}
function draw() {
myCharacter.draw();
}
