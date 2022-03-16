const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground, tower;
var backgroundImg, towerImg;
var canhao, angulo;


function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angulo = 15;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower= Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 canhao = new Canhao(180, 110, 130, 100, angulo);
 bola = new BolaCanhao(canhao.x,canhao.y)
 
}

function draw() {
  background(189);
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 //rectMode(CENTER);
 //rect(tower.position.x, tower.position.y,160,310);
 imageMode(CENTER);
 image(towerImg,tower.position.x, tower.position.y,160,310);
 pop();  

 canhao.display();
 bola.display()
 //keyReleased()
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    bola.shoot();
  }
}