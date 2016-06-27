var xPos, yPos;
var xDir, yDir;
var diam = 100;
var myColor;
var bounce;

function preload(){
  bounce = loadSound("assets/bounce.mp3"); // load the sound before the setup happens. useful for larger files.
}


function setup() {
  createCanvas(600, 400);
  background(180, 200, 0);
  myColor = color(0, 200, 180);
  xPos = random(diam, width - diam);
  yPos = random(diam, height - diam);

  xDir = random(-5, 5);
  yDir = random(-5, 5);

}

function draw() {
  background(180, 200, 0);
  diam = map(mouseX,0, width, 20, 75);
  fill(myColor);
  ellipse(xPos, yPos, diam, diam);

  xPos += xDir;
  yPos += yDir;

  if (xPos > width - diam / 2 || xPos < diam / 2) {
    xDir *= -1;
    bounce.play(); // play a sound each time the ball hits the wall
    myColor = color(random(255), random(255), random(255));
  }
  if (yPos > height - diam / 2 || yPos < diam / 2) {
    yDir *= -1;
    bounce.play();// play a sound each time the ball hits the wall
    myColor = color(random(255), random(255), random(255));

  }
}