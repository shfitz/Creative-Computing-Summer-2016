var mySphere;

function setup() {
  createCanvas(600, 400);
  background(180, 200, 0);

  mySphere = new Sphere();
}

function draw() {
  background(180, 200, 0);
  mySphere.render();
  mySphere.update();
  mySphere.bounce();
}