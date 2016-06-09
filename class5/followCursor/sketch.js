

function setup() {
  createCanvas(600, 300);

}

function draw() {
  background(0);
  
  stroke(127, 200, 200);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 50, 50);
  
  print("mouseX : " + mouseX + ", mouseY : " + mouseY);
  
}