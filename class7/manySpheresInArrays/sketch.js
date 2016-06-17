var mySpheres = [];

function setup() {
  createCanvas(600, 400);
  background(180, 200, 0);

  for (var i = 0; i < 2; i++) {
    mySpheres[i] = new Sphere((i + 1) * 10);
  }
}

function draw() {
  background(180, 200, 0);

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
    print(mySpheres[i].setSize(i*random(10, 20)));
  }

}