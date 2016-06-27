//with the DOM, we can access HTML elements like text

var canvas, txt;
var xpos;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(200, 50);
  background(100, 100, 0);
  txt = createDiv("I am HTML!!!!");
  txt.position(20, 20);
  xpos = 0;
}

function draw() {
  
  if(xpos> 400){
    xpos =1;
  }
  
  canvas.position(xpos, 50);
  xpos++;
}