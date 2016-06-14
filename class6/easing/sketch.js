// adapted from the processing.org
// Easing example found at https://processing.org/examples/easing.html

var x = 0; // declare and initialize variables
var y = 0;
var easing;

function setup() {
  createCanvas(640, 360); 
  easing = 0.05; /// set amount of "ease"
}

function draw() { 
  background(51);
  fill(255);
  var targetX = mouseX; // set the X position for target
  var dx = targetX - x; // get distance from current loc to target loc
  x += dx * easing; // set new x pos based on fraction of distance * easing
  
  var targetY = mouseY; // set the Y position for target
  var dy = targetY - y; // get distance from current loc to target loc
  y += dy * easing; // set new y pos based on fraction of distance * easing
  
  ellipse(x, y, 66, 66);
}