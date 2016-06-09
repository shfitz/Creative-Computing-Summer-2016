function setup() {
  createCanvas(600, 300);
  // frameRate(10);
  background(0);
}

function draw() {

  if (mouseIsPressed) {
    // stroke(127, 200, 200); /// this is a nice cyan
    stroke(map(mouseX, 0, width, 0, 255), 100, map(mouseY, 0, height, 0, 255));
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  print("mouseX : " + mouseX + ", mouseY : " + mouseY);

}