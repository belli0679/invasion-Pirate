class Boat {
    constructor(x, y, lar, alt, boatPos){
        this.body = Bodies.rectangle(x, y, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.boatPosition = boatPos;
        this.image = loadImage("./assets/boat.png");
        World.add(world,this.body);
    }

    eraser(index){ 
        setTimeout(() => {
            Matter.World.remove(world, boatis[index].body);
            delete boatis[index];
        }, 2000);

    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.lar, this.alt);
        pop();
    }
}