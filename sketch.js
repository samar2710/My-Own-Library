function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 100, 50, 50);
 fixedRect.velocityY=3;

 movingRect=createSprite(200,300,50,30);
 movingRect.velocityY=-3;
 movingRect.shapeColor="green";
 fixedRect.shapeColor="green";



}

function draw() {
  background(0);  
 
  bounceOff(movingRect,fixedRect);
  
  
  drawSprites();
}
