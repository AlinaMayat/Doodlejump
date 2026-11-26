import { Character } from "./gameCharacter.js";
import { Book } from "./platformNormal.js";
import {Hat} from './platformMovable.js';

//backgrund

function setup() {
  createCanvas(500, 700);
}

const myCharacter = new Character(10, 20, 70, 124);
const myBook = new Book(100, 100);
const myHat = new Hat(200, 200);

function draw() {
  background(153, 113, 67);
  myCharacter.draw();

  myBook.draw();

myHat.draw();


  //Start screen
  //3, 2, 1, GO!

  //Character

  //Normal platform - Books

  //Moving platform - cards

  //Breaking platforms - Teacups/porcelain

  //losing screen
  //You Lost!
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    myCharacter.xPos -= 2;
  } else if (keyCode === RIGHT_ARROW) {
    myCharacter.xPos += 2;
  }
}
