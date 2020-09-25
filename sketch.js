
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const ON = 1;
const OFF= 0;

var gamestate, ground, stone;
var tree, boy;
var mango1, mango2, mango3, mango4, mango5, mango6;
var sling;

function preload()
{
	boy = loadImage("Plucking/boy.png");
	tree = loadImage("Plucking/tree.png");
}

function setup() {
	createCanvas(800, 700);

  gamestate = ON;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone();
	mango1= new Mango(440,440,40);
	mango2= new Mango(500,390,40);
	mango3= new Mango(600,440,40);
	mango4= new Mango(550,400,40);
	mango5= new Mango(640,420,40);
  mango6= new Mango(525,450,40);
  
  ground= Bodies.rectangle(400,690, 800, 10, {isStatic: true});
  World.add(world, ground);

	sling= new Slingshot(stone.body,{x:170,y:565});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  image(boy, 150, 540, 150, 150);
  image(tree,400, 350, 300, 300);

  rect(400,690,800,10);

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();


  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  sling.display();



  drawSprites();
 
}

function mouseDragged()
{
  if(gamestate === ON){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased()
{
    sling.fly();
    gamestate = OFF;
}

function detectCollision(exstone, exmango){
  var mpos = exmango.body.position;
  var spos = exstone.body.position;

  
  if(mpos.x-60 <= spos.x && mpos.x+60 >= spos.x && mpos.y -60 <= spos.y && mpos.y +60 >= spos.y){
    Matter.Body.setStatic(exmango.body, false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body);
    Matter.Body.setPosition(stone.body, {x:170, y:565});
    gamestate = ON;
  }
}
