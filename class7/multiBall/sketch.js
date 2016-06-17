  
  var ball; 
  var other; 

  function setup() {
    createCanvas(600, 400);
    
    ball = new Ball(width / 2, height/2, random(-.03, .03));
    other = new Ball(random(100, 200), random(100, 200), random(-.1, .1));

  }

  function draw() {

    background(255);
    ball.render();
    other.render();
    ball.update();
    other.update();
    ball.bounce();
    other.bounce();

  }