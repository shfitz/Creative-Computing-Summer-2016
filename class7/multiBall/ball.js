function Ball(tempX, tempY, tempRotSpeed) {

  this.x = tempX;
  this.y = tempY;
  this.rotSpeed = tempRotSpeed;
  
  this.rot = 0;
  this.xDir = random(-3, 3);
  this.yDir = random(-3, 3);

  this.render = function() {
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    pop();
  }

  this.update = function() {
    this.x += this.xDir;
    this.y += this.yDir;

    this.rot += this.rotSpeed;

  }

  this.bounce = function() {
    if (this.x > width || this.x < 0) {
      this.xDir *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.yDir *= -1;
    }
  }

}