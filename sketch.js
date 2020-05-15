var BMW,AUDI,volks;
var wall,speed1,speed2,speed3;
var wt1,wt2,wt3;
var defor1,deform2,deform3;

function setup() {
  createCanvas(1600,400);
  BMW = createSprite(20, 70, 20, 20);
  AUDI = createSprite(20, 200, 20, 20);
  volks = createSprite(20, 330, 20, 20);
  wall = createSprite(1200,200,20,800);

  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);

  wt1 = random(400,1500);
  wt2 = random(400,1500);
  wt3 = random(400,1500);

 

}

function draw() {
  background(255,255,255);  
  drawSprites()
 text("BMW",200,70);
 text("AUDI",200,200);
 text("Volkswagon",200,330);
if (mousePressedOver(BMW)) {
  BMW.velocityX = speed1;
}
if (mousePressedOver(AUDI)) {
  AUDI.velocityX = speed2;
}
if (mousePressedOver(volks)) {
  volks.velocityX = speed3;
}





if (Collide (BMW,wall)){
 deform1 = ( 0.5 * wt1 * speed1 * speed1) / 22500;
  deformation(BMW,deform1,wall);
  
}

if (Collide (AUDI,wall))
{
deform2 = 0.5*wt2*speed2*speed2/22500;
deformation(AUDI,deform2,wall);
}

if (Collide (volks,wall)){
deform3 = 0.5*wt3*speed3*speed3/22500;
deformation(volks,deform3,wall);
}

if (BMW.x>1100 && AUDI.x>1100 && volks.x>1100 ) {
  text(deform1,330,70);
  text (deform2,330,200);
  text (deform3,330,330); 
}

}
 
function deformation(car1,deform,wall){
 
  

    if (deform>180) {
      car1.shapeColor = color(255,0,0);
    }
  
    if (deform<180 && deform>100){
      car1.shapeColor = color(230,230,0);
    }
  
    if (deform<100) {
      car1.shapeColor = color(0,255,0);
      
    }
  
  
}
