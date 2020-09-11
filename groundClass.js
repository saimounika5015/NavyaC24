
class Ground{

    constructor(x,y,w,h){

        this.body = body.rectangle(x,y,w,h,{isStatic: true});
        this.width = w;
        this.height = h;

        world.add(abWorld, this.body)

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(3);
        stroke("brown")
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);

    }

}