var img;  // Declare variable img

function setup() {
  createCanvas(600, 370);
  img = loadImage("/assets/pepethefrog.jpg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0, width*2, height*2);

}