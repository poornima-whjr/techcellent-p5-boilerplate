var ball
var bimg
function preload(){
  bimg=loadImage("blue.png")
}

function setup() {
 createCanvas(800,400);
 ball= createSprite(400, 200, 50, 50);
 ball.velocityX =5
 ball.addImage("blue",bimg)
 edges = createEdgeSprites()
}

function draw() {
  background("green");  
  ball.bounceOff(edges)
  drawSprites();
}