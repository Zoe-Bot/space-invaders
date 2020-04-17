let ship;
let flowers = [];
let drops = [];

function setup() {
    //canvas
    createCanvas(600, 400);

    //objects
    ship = new Ship();
    //drop = new Drop(width / 2, height / 2);
    for(let i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    //background
    background(51);

    ship.show();
    ship.move(3);

    for(let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for(let j = 0; j < flowers.length; j++) {
            if(drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }
    }

    let edge = false;

    for(let i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if(flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }
    }

    if(edge) {
        for(let i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for(let i = drops.length - 1; i >= 0; i--) {
        if(drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }

}

function keyPressed() {
    if(key == ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }

}


