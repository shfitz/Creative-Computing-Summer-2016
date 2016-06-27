// the DOM
//useful for interactive leemets with web pages
// also allows us to use native elements
// like forms and sliders

// sliders take three args, min, max and starting value

var sliderR, sliderG, sliderB;
var canvas;

function setup() {
  canvas = createCanvas(400, 300);
  canvas.position(300, 50);

  sliderR = createSlider(0, 255, 127);
  sliderG = createSlider(0, 255, 127);
  sliderB = createSlider(0, 255, 127);

  sliderR.position(20, 20);
  sliderG.position(20, 40);
  sliderB.position(20, 60);
}

function draw() {
  var rVal = sliderR.value();
  var gVal = sliderG.value();
  var bVal = sliderB.value();

  background(rVal, gVal, bVal);
}