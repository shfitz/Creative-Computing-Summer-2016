  var rot = 0;
  var rotSpeed;
  var xPos, yPos;
  var xDir, yDir;

  function setup() {
    createCanvas(600, 400);
    xPos = width/2;
    yPos = height/2;
    xDir = random(-5, 5);
    yDir = random(-5, 5);
    rotSpeed = random(-.03, .03);
  }

  function draw() {

    background(255);

 

    push();
    translate(xPos, yPos);
    rotate(rot);
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    pop();
   
   
    ellipse(100, 100, 100, 100);
    xPos += xDir;
    yPos += yDir;

    if (xPos > width || xPos < 0) {
      xDir *= -1;
    }

    if (yPos > height || yPos < 0) {
      yDir *= -1;
    }

    rot += rotSpeed;
  }