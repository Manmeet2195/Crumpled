class Paper {

    constructor(x,y,radius){

        var options={

            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        //this.image=loadImage("paperImg.png");
        this.radius=radius;
        World.add(world,this.body);
    }

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        stroke("black");
        fill("yellow");
       // imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
       ellipse(RADIUS);
       ellipse(0,0,50,50);
        pop();
    }


    flingUp(){
        Matter.Body.setVelocity(this.body,{x:3,y:-2});
        Matter.Body.setAngularVelocity(this.body,0.2);
    }

    flingDown(){
        Matter.Body.setVelocity(this.body,{x:0,y:1});
        Matter.Body.setAngularVelocity(this.body,0.2);
    }
}