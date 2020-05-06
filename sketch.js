var BMW,AUDI,volks;
var wall;

function setup() {
  createCanvas(1200,400);
  BMW = createSprite(20, 70, 20, 20);
  AUDI = createSprite(20, 200, 20, 20);
  volks = createSprite(20, 330, 20, 20);
  wall = createSprite(300,200,5,400);
}

function draw() {
  background(255,255,255);  
  drawSprites()
 text("BMW",200,70);
 text("AUDI",200,200);
 text("Volkswagon",200,330);
if (mousePressedOver(BMW)) {
  BMW.velocityX = 15;
}
if (mousePressedOver(AUDI)) {
  AUDI.velocityX = 15;
}
if (mousePressedOver(volks)) {
  volks.velocityX = 15;
}

 BMW.collide(wall)
 
  
 

 if (AUDI.collide(wall)) {
 AUDI.visible = false;
 }

 if (volks.x> wall.x) {
text("can be trusted",10,70);
text("cannoy be trusted",10,200);
text("best",10,330);
 }
}