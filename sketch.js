const world = Matter.World;
const  engine = Matter.Engine;
const body = Matter.Bodies;


var abWorld, abEngine, abBody;

var ground;

var box1, box2, box3;

var pig1;

var loft1;


function setup() {
  createCanvas(1200,400);

  abEngine = engine.create();
  abWorld = abEngine.world;
  
  ground = new Ground(600,height, 1210, 15);
  box1 = new Boxes(850,370,60,60);
  box2 = new Boxes(1000, 370, 60,60);
  pig1 = new Pigs(950,370);
  loft1 = new Loft(920,340, 10,220, PI/2);
  //loft2 = new Loft(760,120,150, PI/7);
  console.log(loft1);
  
}

function draw() {
  background("black");  


  engine.update(abEngine);

  
  console.log(ground.body.position.y);
 // box1.color = "yellow";
 // box2.color = "red";
  box1.display();
  box2.display();
  pig1.display();
  loft1.display();
 // lof2.display();
  
  ground.display();

  drawSprites();
}