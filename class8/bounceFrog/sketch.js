var img;  // Declare variable img
var xPos, yPos;
var xDir, yDir;

function setup() {
  createCanvas(600, 370);
  img = createCapture(VIDEO);  // Load the image
  img.size(320, 240);
  yPos = random(height - 10);
  xPos = random(width - 10);

  xDir = random(-5, 5);
  yDir = random(-5, 5);
}

function draw() {
  background(255);
  // Displays the image and bounce it around at 1/4 size
  image(img, xPos, yPos, img.width/4, img.height/4);

 xPos += xDir;
  yPos += yDir;

  if (xPos > width  || xPos < 0) {
    xDir *= -1;

  }
  if (yPos > height || yPos < 0) {
    yDir *= -1;

  }
}