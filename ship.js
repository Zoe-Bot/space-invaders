function Ship() {
    this.x = width / 2;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 60)
    }

    this.move = function(dir) {
        if(keyIsDown(RIGHT_ARROW)) {
            this.x += dir;
        }

        if(keyIsDown(LEFT_ARROW)) {
            this.x += dir * -1;
        }
    }
}