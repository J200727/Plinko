class Plinko{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0,
            isStatic:true
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        transalate(position.x,position.y);
        rotate(angle);
        imageMode(CENTRE);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
    }
}