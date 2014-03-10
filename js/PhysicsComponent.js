var PhysicsComponent = function(){
    this._lastUpdate = Date.now();
    this._acc = 0;
};

PhysicsComponent.prototype.fps = 1000 / 60 << 0;

PhysicsComponent.prototype.tick = function(){
    // implemented by sub-prototypes
};

PhysicsComponent.prototype.update = function(){
    var now = Date.now();
    this._acc += (now - this._lastUpdate);
    this._lastUpdate = now;
    while (this._acc > this.fps) {
        this._acc -= this.fps;
        this.tick.apply(this, arguments);
    }
};

module.exports = PhysicsComponent;
