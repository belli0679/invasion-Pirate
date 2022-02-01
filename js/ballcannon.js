class BallCannon {
    constructor(x, y){

        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.speed = 0.05;
        this.image = loadImage("./assets/cannonball.png");
        this.animation = [this.image];
        this.fundou = false;
        this.body = Bodies.circle(x, y, this.raio, options);
        World.add(world,this.body);
        this.trace = [];
        
    }

    animater(){
        this.speed += 0.05;
    }

    show(){
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);
        push();
        imageMode(CENTER);
        image(this.animation[index], pos.x, pos.y, this.raio, this.raio);
        pop();
        if(this.body.velocity.x > 0 && pos.x > 10 && !this.fundou){
            var positionn = [pos.x, pos.y];
            this.trace.push(positionn);

        }
        for(var i = 0; i<this.trace.length; i++){
            image(this.image, this.trace[i][0], this.trace[i][1], 5, 5);

        }

    }

    eraser(index){ 
        this.fundou = true;
        Matter.Body.setVelocity(this.body, {x:0, y:0});
        this.animation = aguaAnime;
        this.speed = 0.05;
        this.raio = 150;
        setTimeout(() => {
            Matter.World.remove(world, this.body);
            delete ballas[index];
        }, 1000);

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