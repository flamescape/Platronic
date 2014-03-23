var Wall = function(bike) {
    this.segments = [];
    this.bike = bike;
    
    this.lastX = null;
    this.lastY = null;
};

Wall.prototype.update = function(x, y) {
    if (this.lastX === null || this.lastY === null) {
        this.lastX = x;
        this.lastY = y;
        return;
    }

    var distance = Math.sqrt(Math.pow(x - this.lastX, 2) + Math.pow(y - this.lastY, 2));
    
    if (distance > .2 && this.bike.isTurning()) {
        this.newSegment(x, y);
        this.lastX = x;
        this.lastY = y;
    }
};

Wall.prototype.newSegment = function(x, y) {
    this.segments.push({
        x: x,
        y: y
    });
};

module.exports = Wall;
