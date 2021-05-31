class Paper {
    constructor(x,y,w,h){
        var options = {
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.width = w;
        this.height = h;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}