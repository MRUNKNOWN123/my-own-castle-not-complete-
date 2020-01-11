const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;
function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   box1=new Box(250,335,100,70);
   box2=new Box(450,335,100,70);
   box3=new Box(350,305,300,10);
   box4=new Box(220,275,40,50);
   box5=new Box(350,265,100,70);
   box6=new Box(480,275,40,50);
   box7=new Box(350,250,300,10);
   ground=new Ground(600,390,1200,30);
}
function draw(){
    background(220);
    Engine.update(engine);
    triangle(350,100,300,230,400,230);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    
    ground.display();

   
   
}