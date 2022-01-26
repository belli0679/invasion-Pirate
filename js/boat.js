class Boat {
    constructor(x, y, lar, alt, boatPos){
        this.body = Bodies.rectangle(x, y, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.boatPosition = boatPos;
        this.image = loadImage("./assets/boat.png");
        World.add(world,this.body);
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