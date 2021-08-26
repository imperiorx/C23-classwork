const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var canvas,tower1;
var ground1;
var canon1;

function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

tower1=new tower(80,230,160,310);
ground1=new ground(10,395,800,25)
canon1=new canon(100,15,20,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower1.display()
    ground1.display()
    canon1.display()
   
}
