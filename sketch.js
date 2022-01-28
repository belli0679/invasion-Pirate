/*Matrizes
//Exemplo simples de matriz
var matriz1 = [1,2,3,4,5];
//console.log(matriz1);
console.log(matriz1[2]);

//Matriz com diferentes tipos de dados
var matriz2 = [1, "Melissa", true];
//console.log(matriz2);
console.log(matriz2[1]);

//Matriz de matrizes
var matriz3 = [[1,2,3,4,5], [3,4,5,6,7], [5,6,8,9,10]];
//console.log(matriz3);
console.log(matriz3[1][2]);

//Como adicionar elementos na matriz
matriz1.push(10);
matriz1.push(20);
console.log(matriz1);
matriz1.pop();
matriz1.pop();
console.log(matriz1);*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var cenario;
var torre, torreimg;

var angulo;
var cannon;
var ballCannon;

var ballas = [];
//console.log(ballas);

var boat;

var boatis = [];


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

  angleMode(DEGREES);
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

  mostrarBoatis();

  for(var i = 0; i<ballas.length; i ++){
    mostrar(ballas[i], i);
    colidionBallas(i);
  }

}
function keyReleased(){
  if(keyCode === DOWN_ARROW){
    ballas[ballas.length-1].shoot();

  }

}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var ballCannon = new BallCannon(cannon.x, cannon.y);
    ballas.push(ballCannon);

    

  }

}

function mostrar(ballCannon, i){
  if(ballCannon){
    ballCannon.show();
    if(ballCannon.body.position.x >= width || ballCannon.body.position.y >= height-50){
      ballCannon.eraser(i);

    }
  }

}

function mostrarBoatis(){
  if(boatis.length > 0){
    if(boatis[boatis.length-1] === undefined || boatis[boatis.length-1].body.position.x < width-300){
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var boat = new Boat(width, height-100, 170, 170, position);
      boatis.push(boat);
    }
    for(var i = 0; i < boatis.length; i++){
      if(boatis[i]){
        Matter.Body.setVelocity(boatis[i].body, {x: -0.9, y: 0});
        boatis[i].show();
      }
    }

  } else{
    var boat = new Boat(width, height-60, 170, 170, -60);
    boatis.push(boat);
  }

}

function colidionBallas(index){
  for(var i = 0; i < boatis.length; i++){
    if(ballas[index] !== undefined && boatis[i] !== undefined){
      var collido = Matter.SAT.collides(ballas[index].body, boatis[i].body);
      if(collido.collided){
        boatis[i].eraser(i);
        Matter.World.remove(world, ballas[index].body);
        delete ballas[index];
      }
    }
  }

}