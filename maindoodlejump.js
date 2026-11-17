//backgrund
function setup(){
    createCanvas(500, 700);
}

let moln1x = 240;
let moln1xSpeedx = 1.5;

function draw(){
background(137, 207, 240);

// Start screen
    //3, 2, 1, GO!

    //mark
    fill(164, 240, 110);
    rect(0, 580, 500, 40);

    fill(100,49,2);
     rect(0, 550, 400, 60);
//normal platforms 

    //gräs
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

