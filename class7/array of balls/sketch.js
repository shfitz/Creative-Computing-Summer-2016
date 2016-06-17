  var ball = [];

  function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 30; i++) {
      ball[i] = new Ball(random(100, 500), random(100, 300), random(-.03, .03));
    }
  }

  function draw() {

    background(255);
    for (var i = 0; i < ball.length; i++) {
      ball[i].render();
      ball[i].update();
      ball[i].bounce();
    }

  }