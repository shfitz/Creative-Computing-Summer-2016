function Paddle(tempX){
  
  this.padHeight = 100;
  this.padWidth = 20;
  this.padY = height/2;
  this.xPos = tempX;
  
  this.render = function(){
    rectMode(CENTER);
    rect(xPos, padY, padWidth, padHeight);
    
  }
  
  
  this.follow = function(tempYPos){
    this.padY = tempYPos;
    
  }
  
}