class BallCannon {
    constructor(x, y){

        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.image = loadImage("./assets/cannonball.png");
        this.body = Bodies.circle(x, y, this.raio, options);
        World.add(world,this.body);
        this.trace = [];
    }

    show(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop();
        if(this.body.velocity.x > 0 && pos.x > 10){
            var positionn = [pos.x, pos.y];
            this.trace.push(positionn);

        }
        for(var i = 0; i<this.trace.length; i++){
            image(this.image, this.trace[i][0], this.trace[i][1], 5, 5);

        }

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