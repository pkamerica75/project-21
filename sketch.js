
var thickness ,wall ;
var  bullet , weight , speed;
var canvasThickness = 400;

function setup() {
  createCanvas(1250, canvasThickness);

  thickness = random(22,83) ; 
  speed     = random(223,321) ;
  weight    = random(30,52);
  
  wall = createSprite(1200, 200, thickness, canvasThickness/2);
  bullet = createSprite(50, 200, 50 , 10);
  wall.shapeColor = color (80 , 80, 80);  
}

function draw() 
{
  background(255,255,255);  //canvas background color
  drawSprites();  
 
  bullet.display();
  wall.display();
  
  bullet.velocityX = speed; //fire the bullet
  //check for bullet collision
  if(hasCollided(bullet , wall)) {    
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
         
    if (damage>10) { 
        wall.shapeColor = color(255 , 0 , 0);            
    }
    
    if(damage<10) {
        wall.shapeColor = color(0 , 255 , 0);
    } 
  }
}

function hasCollided(param_Bullet ,param_wall)
{
  bulletRightEdge = param_Bullet.x + param_Bullet.width;
  wallLeftEdge = param_wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
        return true;
  }
  return false;
}


if(hasCollided(bullet , wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);  
      
  if (damage>10) {
      wall.shapeColor = color(255 , 0 , 0);            
  }
      
  if(damage<10) {
      wall.shapeColor = color(0 , 255 , 0);
  } 
} 
 
 
  


