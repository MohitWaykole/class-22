const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();

  var option = {
    isStatic : true
  }

  var option2 = {
    restitution : 0.6
  }

  world = engine.world;

  ground = Bodies.rectangle(200, 395, 400, 20, option);
  World.add(world,ground);

  ball = Bodies.circle(200, 200, 20, option2);
  World.add(world, ball);

  ball2 = Bodies.circle(100, 200, 20, {restitution : 0.9});
  World.add(world, ball2);
}

function draw(){
  background(200);

  Engine.update(engine);

  rectMode(CENTER);
  fill("red");
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(CENTER);
  fill("lightgreen");
  ellipse(ball.position.x, ball.position.y, 40, 40);

  ellipseMode(CENTER);
  fill("yellow");
  ellipse(ball2.position.x, ball2.position.y, 40, 40);
}