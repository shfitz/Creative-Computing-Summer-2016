var bgColor = 0;

function setup() {
  createCanvas(600, 300);
}

function draw() {
  bgColor++;

  background(bgColor);
  
  if(bgColor > 255){
    bgColor =0;
  }
  
  print(bgColor);
  
}