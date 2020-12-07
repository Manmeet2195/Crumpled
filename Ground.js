class Ground {

    constructor(x,y,width,height){

        var options={

            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }

    display(){

        var position = this.body.position;
        noStroke();
        fill("brown");
        rect(position.x,position.y,this.width,this.height);
    }
}