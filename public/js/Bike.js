
var Bike = function(){
    this.speed = 5;
    this.direction = 0; /* no direction */
};

Bike.prototype.tick = function(){
    switch (this.direction) {
        case 1:
            this.y -= this.speed;
            break;
        case 2:
            this.x += this.speed;
            break;
        case 4:
            this.y += this.speed;
            break;
        case 8:
            this.x -= this.speed;
            break;
    }
};

