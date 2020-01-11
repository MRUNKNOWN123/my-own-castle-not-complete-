class Box
{
    constructor(x,y,width,height)
    { 
        var option=
        {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position; 
        var angle=this.body.angle;
       // push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        //strokeWeight(4);
        //stroke("green");
        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        //pop(); 
    }

}