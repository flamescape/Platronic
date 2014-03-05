var _ = require('underscore');

var Bike = function() {
    this._speed = 5;
    this._direction = 0; /* no direction */
};

Bike.prototype.speed = function(set) {
    if (_.isUndefined(set)) {
        return this._speed;
    } else {
        this._speed = set;
        return this;
    }
};

Bike.prototype.direction = function(set) {
    if (_.isUndefined(set)) {
        return this._direction;
    } else {
        this._direction = set;
        return this;
    }
};

Bike.prototype.tick = function() {
    var x = this.x,
        y = this.y;
        
    switch (this.direction) {
        case 1:
            y -= this._speed;
            break;
        case 2:
            x += this._speed;
            break;
        case 4:
            y += this._speed;
            break;
        case 8:
            x -= this._speed;
            break;
    }
    /*
    if (this.world.intersectsWall([this.x, this.y, x, y])) {
        this.crash();
    }
    */
};

module.exports = Bike;
