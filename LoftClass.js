
class Loft{

  constructor(x,y,width,height,ang){
      this.color = "green";
      var opt={

        restitution:0.8,
        friction:0.3, 
        density: 1.0}
      
      this.body = body.rectangle(x,y,width,height, opt);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,ang);
      world.add(abWorld, this.body);
  }

  display(){

      var pos = this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5)
      stroke("blue")
      rectMode(CENTER);
      fill(this.color);
      rect(0,0, this.width, this.height);
      pop();
      

  }
}
  