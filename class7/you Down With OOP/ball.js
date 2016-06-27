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


   
    arc(0, 0, 80, 80, PI, TWO_PI, CHORD);


    stroke(5);
    fill(255);
    ellipseMode(CORNERS); //left eyeball
    ellipse(-43, -40, -5, -70);
    fill(0, 100, 255);
    ellipseMode(CORNER); //left iris
    ellipse(-33, -65, 15, 15); //end left eyeball
 rotate(this.rot);
    fill(255);
    ellipseMode(CORNERS); //right eyeball
    ellipse(43, -40, 5, -70);
    fill(0, 100, 255);
    ellipseMode(CORNER); //right iris
    ellipse(13, -65, 15, 15); //end right eyeball



    fill(250, 150, 155); //lips begin
    noStroke();
    ellipseMode(CENTER);
    ellipse(0, -19, 40, 45); //lips end

    fill(60) //mouth begin
    noStroke();
    ellipseMode(CENTER);
    ellipse(0, -19, 37, 25); //mouth end

    // noFill();
    // stroke(220, 102, 182);
    // strokeWeight(7);
    // // bezier(285, 203, 280, 218, 295, 248, 280, 258);
    // bezier(xPos-65, yPos+3, xPos-90, yPos+10, xPos-35, yPos+40, xPos-51, yPos+48);
    // bezier(xPos-35, yPos+3, xPos-10, yPos+25, xPos-55, yPos+30, xPos-30, yPos+48);
    // bezier(xPos+65, yPos+3, xPos+30, yPos+10, xPos+71, yPos+40, xPos+55, yPos+48);
    // bezier(xPos+35, yPos+3, xPos+10, yPos+25, xPos+55, yPos+30, xPos+30, yPos+48);
    // bezier(xPos, yPos+6, xPos-15, yPos+7, xPos+15, yPos+25, xPos-1, yPos+44);



    //  rectMode(CENTER);
    // rect(0, 0, 50, 50);



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