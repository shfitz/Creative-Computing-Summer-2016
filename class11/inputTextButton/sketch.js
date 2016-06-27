// the DOM
//useful for interactive leemets with web pages
// also allows us to use native elements
// like forms and sliders

// forms let us get text input, buttons sumbit

var input, button;

function setup() {
  canvas = createCanvas(400, 300);
  canvas.position(300, 50);

  input = createInput();
  input.position(20, 30);

  button = createButton("dat name 'tho");
  button.position(160, 30);
  button.mousePressed(drawThat); // what function shall we run?

  background(200, 20, 180);
  text("gimmie your name!", 20, 20);
}

function drawThat() {
  background(200, 20, 180);
  textSize(25);
  
  var name = input.value();
  
  for (var i = 0; i < name.length; i++) {
    text(name, random(width), random(height));
  }

}