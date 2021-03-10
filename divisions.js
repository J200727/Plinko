class divisions{
    constructor(alyssa,angela,sanjo,evanjo){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(alyssa,angela,sanjo,evanjo,options);
        this.sanjo=sanjo;
        this.evanjo=evanjo;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTRE);
        fill("white");
        rect(position.x,position.y,this.sanjo,this.evanjo);
    
    }
}