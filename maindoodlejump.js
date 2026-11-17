//backgrund
function setup(){
    createCanvas(400, 600);
}

let moln1x = 240;
let moln1xSpeedx = 1.5;

function draw(){
background(137, 207, 240);

// Start screen
    //3, 2, 1, GO!

    //mark
    fill(164, 240, 110);
    rect(0, 530, 400, 40);

    fill(100,49,2);
     rect(0, 550, 400, 60);

    //normal platforms - open books
    
// Book cover
  fill(100, 55, 35);
  stroke(60, 35, 25);
  strokeWeight(2);
  quad(85, 255, 150, 265, 150, 285, 85, 275);
  quad(150, 265, 215, 255, 215, 275, 150, 285);

 //Open pages
  fill(255, 248, 225);
  quad(85, 250, 150, 265, 150, 278, 85, 263);
  quad(150, 265, 215, 250, 215, 263, 150, 278);

  // Writing on pages
  stroke(190, 175, 145);
  strokeWeight(1);
  line(95, 254, 140, 265);
  line(95, 259, 140, 270);
  line(160, 265, 205, 254);
  line(160, 270, 205, 259);

  noStroke();
fill (194, 242, 177);
rect(100, 450, 100, 20);
fill(100, 50, 2);
rect(100, 470, 100, 15);


    // moln
     fill(255);
    noStroke(circle);
        circle(20, 100, 30); 
        circle(39, 85, 20);
        circle(65, 95, 40);
        circle(90, 100, 30);
        circle(39, 95, 45);
    
    

// moving platform
    //gräs
    
    

    moln1x = moln1x + moln1xSpeedx;
    if(moln1x > 350 || moln1x < 230){
        moln1xSpeedx = -moln1xSpeedx;     
    }
    
    fill(192, 245, 180);
    rect(moln1x, 400, 100, 30);
    fill(100, 50, 2);
    rect(moln1x, 420, 100, 15);

    //moln
    

   


//Breaking platforms

// losing platform(spikar)

// fåglar

//flygplan


//losing screen
    //You Lost! 

//character
}

