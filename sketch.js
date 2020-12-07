const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var dustbinWall1,dustbinWall2,dustbinWall3,dustbin;

var paper1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,380,1200,20);

    dustbinWall1 = new Dustbin(1000,280,15,100);
    dustbinWall2 = new Dustbin(1130,280,15,100);
    dustbinWall3 = new Dustbin(1013,365,118,15);

    //dustbin = new Dustbin(1000,280,200,200);
    

    paper1 = new Paper(150,360,0.7,0.7);
    
   

}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();

  //  dustbin.display();
   dustbinWall1.display();
    dustbinWall2.display(); 
   dustbinWall3.display();

    paper1.display();

    keyPressed();
  
  
}

/*
function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:27});
  
    }
}
*/

function keyPressed(){
    if(keyCode === UP_ARROW){
        paper1.flingUp();
    }

    if(keyCode === DOWN_ARROW){
        paper1.flingDown();
    }

}