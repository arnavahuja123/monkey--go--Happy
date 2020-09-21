var bananaImage;
var obstacleImage, obstacleGroup;
var score;
var background;
var monkey_running;
function preload(){
 monkey = loadImage("monkey.png");
background = loadImage("jungle.jpg"); 
  monkey_running = 
 loadAnimation("Monkey_1.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
  
}
function setup() {
  createCanvas(400, 400);
background.addImage("jungle.jpg");
  background.velocityX = -5;
   if (background.x < 0){
      background.x = background.width/2;
    }
  ground.visible = false;
  monkey.addImage("monkey.png");
}

function draw() {
  background(220);
  if(foodGroup.isTouching(monkey)){
    score = score +2;
    
  }
  switch(score){
case 10:player.scale  = 0.12;  
break;
case 20:player.scale  = 0.14;
break;
case 30:player.scale  = 0.16;
break;
case 40:player.scale  = 0.18; 
break;
default: break;      
  }
}