var counter = 0;

function setup() {
  createCanvas(600, 200);
  print("hello from Setup!");
}

function draw() {
  counter++;
  print("I have run " + counter + " times");
  background(200, 10, 180);
  strokeWeight(5);
  stroke(255);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 40, 40);
  }
  fill(255);
  ellipse(mouseX, mouseY, 15, 15);
}