
function draw() {

  // Plate
  fill(255, 250, 235);
  stroke(65, 95, 145);
  strokeWeight(3);
  ellipse(150, 260, 160, 45);

  //outer rim
  noFill();
  stroke(100, 135, 175);
  strokeWeight(2);
  ellipse(150, 260, 145, 38);

  // Inner rim
  strokeWeight(1);
  ellipse(150, 260, 115, 28);

  // Pink flowers
  noStroke();
  fill(190, 90, 115);

  circle(105, 258, 7);
  circle(111, 255, 7);
  circle(111, 262, 7);
  circle(105, 265, 7);

  circle(189, 258, 7);
  circle(195, 255, 7);
  circle(195, 262, 7);
  circle(189, 265, 7);

  fill(230, 180, 100);
  circle(108, 260, 4);
  circle(192, 260, 4);

  // leaves
  fill(80, 125, 155);
  ellipse(120, 253, 13, 5);
  ellipse(98, 269, 13, 5);
  ellipse(180, 253, 13, 5);
  ellipse(202, 269, 13, 5);

}
