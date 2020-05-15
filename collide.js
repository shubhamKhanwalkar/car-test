function Collide (car,wall){
  if ( wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0;
    car.x = car.x - 50;
    return true;  
  } 
   
  return false ;
}
