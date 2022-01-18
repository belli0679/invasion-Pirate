class Cannon {
    constructor(x,y,lar,alt,angulo){
        this.x = x;
        this.y = y;
        this.lar = lar;
        this.alt = alt;
        this.angulo = angulo;

        this.baseCannon = loadImage("./assets/cannonBase.png");
        this.cannonImg = loadImage("./assets/canon.png");

    }

    show(){
        if(keyIsDown (RIGHT_ARROW) && this.angulo < 70){
            this.angulo += 1;

        }

        if(keyIsDown (LEFT_ARROW) && this.angulo > -30){
            this.angulo -= 1;

        }

        push();
        translate(this.x, this.y);
        rotate(this.angulo);
        imageMode(CENTER);
        image(this.cannonImg, 0, 0, this.lar, this.alt);
        pop();

        image(this.baseCannon, 70, 20, 200, 200);
        noFill();
    }
}