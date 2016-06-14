var x = 0;
var y = 0;
var easing;

function setup() {
  createCanvas(640, 360); 
  easing =0.05;
}

function draw() { 
  background(51);
  fill(255);
  var targetX = mouseX;
  var dx = targetX - x;
  x += dx * easing;
  
  var targetY = mouseY;
  var dy = targetY - y;
  y += dy * easing;
  
  ellipse(x, y, 66, 66);
}