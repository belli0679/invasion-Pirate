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