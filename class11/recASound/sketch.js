var mic;
var amp;

var diam = 1.0;

function setup() {
  createCanvas(400, 300);
  background(200, 10, 180);
  // create new audio input
  mic = new p5.AudioIn(); // gets signal from the mic
  // start mic
  mic.start();
  // create an analyzer & pass input
  amp = new p5.Amplitude(); // measures signal
  amp.setInput(mic);
}

function draw() {
  noStroke();
  fill(200, 10, 180, 5);
  rect(0, 0, width, height);
  // getLevel() returns a val between 0. and 1.
  print(amp.getLevel());
  // map() will convert to larger values
  diam = map(amp.getLevel(), 0.0, 1.0, 10, width);
  
  fill(127, 127, 200);
  ellipse(width/2, height/2, diam, diam);
}