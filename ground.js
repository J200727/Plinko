class Ground{
    constructor(x,yw,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=this.wthis.h=h;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTRE);
        fill("white");
        rect(position.x,position.y,this.w,this.h);
        
    }
}