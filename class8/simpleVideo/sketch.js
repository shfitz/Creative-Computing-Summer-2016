
var capture; // variable for the video
 
function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO); // capture the video
  capture.size(320, 240); // camera size
}
 
function draw() {
  background(255);
  image(capture, 0, 0, 320, 240); // write to canvas
}