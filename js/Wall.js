var Wall = function() {
    this.segments = [];
    
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
    
    if (distance > 3) {
        this.segments.push({
            x: x,
            y: y
        });
        this.lastX = x;
        this.lastY = y;
    }
};

module.exports = Wall;
