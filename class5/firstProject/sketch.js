function setup() {
  createCanvas(600, 400);
  background(127);
  line(100, 100, 500, 300); // startX, startY, endX, endY

  stroke(255);
  strokeWeight(10);
  line(100, 300, 500, 100);

  stroke(200, 10, 220);
  strokeWeight(1);
  line(200, 200, 400, 200);

  noStroke();
  rect(50, 50, 500, 25);
  
  fill(220, 160, 0);
  rect(0, 300, width, 25);
  
}

function draw() {

}