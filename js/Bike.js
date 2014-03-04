var Bike = function(speed) {
    this.speed = speed || 5;
    this.direction = 0; /* no direction */
};

Bike.prototype.speed = function(set) {
    if (_.isUndefined(set)) {
        return this.speed;
    } else {
        this.speed = set;
        return this;
    }
};

Bike.prototype.tick = function() {
    var x = this.x,
        y = this.y;
        
    switch (this.direction) {
        case 1:
            y -= this.speed;
            break;
        case 2:
            x += this.speed;
            break;
        case 4:
            y += this.speed;
            break;
        case 8:
            x -= this.speed;
            break;
    }
    
    if (this.world.intersectsWall([this.x, this.y, x, y])) {
        this.crash();
    }
};

