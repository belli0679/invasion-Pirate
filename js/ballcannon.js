class BallCannon {
    constructor(x, y){

        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.image = loadImage("./assets/cannonball.png");
        this.body = Bodies.circle(x, y, this.raio, options);
        World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop();
    }

    shoot(){
        
        var newAngulo = cannon.angulo - 28;
        newAngulo = newAngulo*(3.14/180);

        var velocydade = p5.Vector.fromAngle(newAngulo);
        velocydade.mult(0.5);

        Matter.Body.setStatic(this.body, false);
        
        Matter.Body.setVelocity(this.body, {x: velocydade.x*(180/3.14), y: velocydade.y*(180/3.14)});

    }
}