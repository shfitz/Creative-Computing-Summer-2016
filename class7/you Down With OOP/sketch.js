  
  var ball; 


  function setup() {
    createCanvas(600, 400);
    
    ball = new Ball(width / 2, height/2, random(-.03, .03));
    

  }

  function draw() {

    background(255);
    ball.render();
    ball.update();
    ball.bounce();


  }