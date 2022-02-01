class Boat {
    constructor(x, y, lar, alt, boatPos, boatAnimation){
        this.body = Bodies.rectangle(x, y, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.boatPosition = boatPos;
        this.speed = 0.05;
        this.image = loadImage("./assets/boat.png");
        this.animation = boatAnimation;
        World.add(world,this.body);
    }

    animater(){
        this.speed += 0.05;
    }

    eraser(index){ 
        this.animation = quebradoBoatis;
        this.speed = 0.05;
        this.lar = 300;
        this.alt = 300;
        this.bquebrado = true; 
        setTimeout(() => {
            Matter.World.remove(world, boatis[index].body);
            delete boatis[index];
        }, 2000);

    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.boatPosition, this.lar, this.alt);
        pop();
    }
}