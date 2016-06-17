var mySpheres = [];
var paddleOne;
var paddleTwo;

function setup() {
  createCanvas(600, 400);
  background(180, 200, 0);

  paddleOne = new Paddle(100);
  paddleTwo = new Paddle(500);

  for (var i = 0; i < 1; i++) {
    mySpheres[i] = new Sphere((i + 1) * 10);
  }
}

function draw() {
  background(180, 200, 0);

  paddleOne.render();
  paddleTwo.render();

paddleOne.follow(mySpheres[0].getYPos());



  for (var i = 0; i < mySpheres.length; i++) {
    mySpheres[i].render();
    mySpheres[i].update();
    mySpheres[i].bounce();
  }
}


function mousePressed() {
  /*
    for (var i = 0; i < mySpheres.length; i++) {
      print(mySpheres[i].getXPos());
    }
  */
  for (var i = 0; i < mySpheres.length; i++) {
    print(mySpheres[i].setSize(i * random(10, 20)));
  }

}