const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg;
var score = 0;
var bg;

function preload(){
  polygonImg = loadImage("polygon.png");
  bg = color(255,165,0)
  getTime();
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world
  polygon = Bodies.circle(50,200,20,{restitution:0.8,friction:1,density:10});
  World.add(world,polygon);
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  rope = new Rope(polygon,{x:100,y:300});

  block1 = new Block(580,275,30,40);
  block2 = new Block(400,275,30,40);
  block3 = new Block(430,275,30,40);
  block4 = new Block(460,275,30,40);
  block5 = new Block(490,275,30,40);
  block6 = new Block(520,275,30,40);
  block7 = new Block(550,275,30,40);

  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);

  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);

  block16 = new Block(490,155,30,40);

  block17 = new Block(730,135,30,40);
  block18 = new Block(760,135,30,40);
  block19 = new Block(790,135,30,40);
  block20 = new Block(820,135,30,40);
  block21 = new Block(850,135,30,40);

  block22 = new Block(760,95,30,40);
  block23 = new Block(790,95,30,40);
  block24 = new Block(820,95,30,40);

  block25 = new Block(790,55,30,40);

  stand1 = new Ground(490,303,275,10);
  stand2 = new Ground(790,163,195,10);
  ground = new Ground(600,400,1200,10)
  
}
function draw(){
  background(bg);
  
  Engine.update(engine)
  var pos = polygon.position;
  var angle = polygon.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(polygonImg,0,0,50,50);
  pop();
  
  rope.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("orange");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("red")
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display();
  fill("blue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("lavender");
  block22.display();
  block23.display();
  block24.display();
  fill("green");
  block25.display();
  stand1.display();
  stand2.display();
  ground.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  stroke("blue")
  strokeWeight(1.5)
  fill("yellow")
  textSize(18)
  text("SCORE : "+score , 100 , 100)
 
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}
function keyPressed(){
   if(keyCode === 32){
     rope.attach(this.polygon);
   }
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responsejson = await response.json();
  var dt = responsejson.datetime;
  var hour = dt.slice(11,13);
  if(hour>=06 && hour<=18){
      bg = color(255,165,0);
  }
  else{
      bg =  color(20,20,20);
     
  }
}