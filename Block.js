class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            friction:1,
        }
        this.x=x;
        this.y=y
        this.body=Bodies.rectangle(this.x,this.y,width,height,options)
        this.width=width
        this.height=height
        this.Visibility = 255;
        World.add(world,this.body)
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-105){
            score++
        }
    }
    display(){
    if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4)
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
      
    }
    else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        pop();
      }    
    }
}
