function Sphere(tempSize) {

  this.size = tempSize;
  this.xPos = width / 2;
  this.yPos = height / 2;
  this.xDir = random(-5., 5.);
  this.yDir = random(-5., 5.);
  this.myColor = color(random(255));
  this.rotateSpeed = random(-.1, .1);
  this.rot = 0;

  this.update = function() {
    this.xPos += this.xDir;
    this.yPos += this.yDir;

    this.rot += this.rotateSpeed;

  }

  this.bounce = function() {
    if (this.xPos > width - this.size / 2 || this.xPos < this.size / 2) {
      this.xDir *= -1;
      this.myColor = color(random(255), random(255), random(255));
    }
    if (this.yPos > height - this.size / 2 || this.yPos < this.size / 2) {
      this.yDir *= -1;
      this.myColor = color(random(255), random(255), random(255));
    }
  }

  this.render = function() {
    //  var ballSize = sphereSize * 100;
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rot);
    rectMode(CENTER);

    fill(this.myColor);
    rect(0, 0, this.size, this.size);
    pop();
  }

  this.getYPos = function() {
    return(this.yPos);
  }
  
  this.setSize = function(tempSize){
    this.size = tempSize;
  }

}