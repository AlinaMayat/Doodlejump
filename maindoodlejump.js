//backgrund
function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(153, 113, 67);

  //Start screen
  //3, 2, 1, GO!

  //Normal platform - Books
  //Moving platform - cards
  //Breaking platforms - Teacups/porcelain

    
//losing screen
    //You Lost! 

//character


  //character
  //hår
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
  fill(0, 0, 0);
  arc(227, 495, 45, 9, PI, TWO_PI);
  triangle(215, 495, 225, 490, 210, 475);
  triangle(235, 495, 225, 490, 240, 475);



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
  fill(0);
  //fötter
  circle(210, 595, 10);
  circle(250, 595, 10);
}
