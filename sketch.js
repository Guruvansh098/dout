var object1,object2,object3,ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	object1=createSprite(600,650,200,20);
  object1.shapeColor=color("red")
  object2=createSprite(700,550,20,180);
  object2.shapeColor=color("red")
  object3=createSprite(500,550,20,180);
  object3.shapeColor=color("red")
ground=createSprite(800,670,1600,20)
ground.shapeColor=color("green")


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(56, 630, 55, 55);
  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
   // Matter.body.applyforce(ballobject.body,ballobject.body.position,{x:85,y:85})
   ball.velocityY=5
      }
     }
  
  
  drawSprites();
 
}



