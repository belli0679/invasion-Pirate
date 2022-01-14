const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var cenario;
var torre, torreimg;

var angulo;
var cannon;


function preload() {
 cenario = loadImage("./assets/background.gif");
 torreimg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height-1, width*2, 1, options);
  World.add(world,ground);

  torre = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world,torre);

  angulo = 20;

  cannon = new Cannon(180, 110, 130, 100, angulo);
 
}

function draw() {
  background(189);
  image(cenario, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(torreimg, torre.position.x, torre.position.y, 160, 310);
  pop();

  cannon.show();

}
