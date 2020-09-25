class Stone{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(170,565,25,25,options);
        this.wh = 50;

        this.image = loadImage("Plucking/stone.png");

        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.wh, this.wh );
        pop();
    }
}