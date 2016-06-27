// sine, triangel and square wave are fundamentals of computer sound
// we can generate each and do some synthesis with them
// frequency (measured in Hertz) determines pitch, amplitude determines volume
var sine, tri, square, saw;

var frequency = 440;
var counter = 0;
var amp1, amp2;

function setup() {
  createCanvas(440, 400);
  // create waves
  sine = new p5.Oscillator();
  tri = new p5.Oscillator();
  square = new p5.Oscillator();
  saw = new p5.Oscillator();
  sine.setType('sine');
  sine.start();
  sine.amp(.5);

  tri.setType('triangle');
  tri.start();
  tri.amp(0);

  square.setType('square');
  square.start();
  square.amp(0);

  saw.setType('sawtooth');
  saw.start();
  saw.amp(0);
}

function draw() {
  background(0);

  // map mouse pos to freq
  var hertz = map(mouseX, 0, width, 31, 440);
  sine.freq(hertz);
  tri.freq(hertz);
  saw.freq(hertz);
  square.freq(hertz);
 
}

function mouseReleased() {
  counter++;
  if (counter >= 4) {
    counter = 0;
  }

  if (counter == 0) {
    sine.amp(0, .5);
    tri.amp(.35, .5);
  } else if (counter == 1) {
    tri.amp(0, .5);
    square.amp(.35, .5);
  } else if (counter == 2) {
    square.amp(0, .5);
    saw.amp(.35, .5);
  } else if (counter == 3) {
    saw.amp(0, .5);
    sine.amp(.5, .5);
  }
}