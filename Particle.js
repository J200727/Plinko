class Particle{
    constructor(alyssa,angela,r){
        var options={
            restitution:0.4
        }
        this.r=rthis.body=Bodies.circle(alyssa,angela,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }

display() {

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
}

}; 