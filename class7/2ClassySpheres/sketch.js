var mySphere1;
var mySphere2;

function setup() {
  createCanvas(600, 400);
  background(180, 200, 0);

  mySphere1 = new Sphere(50);
  mySphere2 = new Sphere(100);
}

function draw() {
  background(180, 200, 0);
  mySphere1.render();
  mySphere2.render();
  
  mySphere1.update();
  mySphere2.update();

  mySphere1.bounce();
  mySphere2.bounce();
}