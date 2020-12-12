
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1,rectangle2,rectangle3
var paper1
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rectangle1 = new Dustbin(1200,650,250,20)
rectnagle2 = new Dustbin(1085,590,20,100)
rectangle3 = new Dustbin(1315,590,20,100)

paper1 = new Paper(200,450,40)
 
ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectangle1.display();
  rectnagle2.display();
  rectangle3.display();
  paper1.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}



