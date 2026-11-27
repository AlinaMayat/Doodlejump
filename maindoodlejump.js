import { Character } from "./gameCharacter.js";
import { Book } from "./platformNormal.js";
import {Hat} from './platformMovable.js';
import {Plate} from "./platformBreakable.js";

//backgrund

function setup() {
  createCanvas(500, 700);
}

const myCharacter = new Character(10, 20, 70, 124);
const myBook = new Book(100, 100);
const myHat = new Hat(200, 200);
const myPlate = new Plate(0,0);

function draw() {
  background(153, 113, 67);
  myCharacter.draw();

  myBook.draw();

  myHat.draw();
  myPlate.draw();

  //Start screen
  //3, 2, 1, GO!

  //Character

  //Normal platform - Books

  //Moving platform - cards

  //Breaking platforms - Teacups/porcelain

  //losing screen
  //You Lost!
}
  //functions
    //karaktär
    
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    myCharacter.xPos -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    myCharacter.xPos += 10;
  }
}

    //movable platform
    