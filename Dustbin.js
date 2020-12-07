class Dustbin {

    constructor(x,y,width,height){

        var options={

            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
       // this.image=loadImage("dustinImg.png");
        World.add(world,this.body);
    }

    display(){

        var position = this.body.position;
        stroke("purple");
        fill("purple");
       rect(position.x,position.y,this.width,this.height);
      // imageMode(CENTER);
       //image(this.image, position.x,position.y, this.width, this.height);


    }
}