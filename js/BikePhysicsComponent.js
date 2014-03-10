var PhysicsComponent = require('./PhysicsComponent');

var BikePhysicsComponent = function(){
    PhysicsComponent.call(this);
    
    this.angle = 0;
    this.speed = 0.1;
};
BikePhysicsComponent.prototype = Object.create(PhysicsComponent.prototype);

BikePhysicsComponent.prototype.tick = function(bike){
    // this is where the movement magic happens!
    bike.x += this.speed * Math.cos(this.angle);
    bike.y += this.speed * Math.sin(this.angle);
};

module.exports = BikePhysicsComponent;
