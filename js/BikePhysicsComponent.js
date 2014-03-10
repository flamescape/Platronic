var PhysicsComponent = require('./PhysicsComponent');

var BikePhysicsComponent = function(){
    PhysicsComponent.prototype.call(this);
    
    
};
BikePhysicsComponent.prototype = Object.create(PhysicsComponent.prototype);

BikePhysicsComponent.prototype.tick = function(){
    // this is where the movement magic happens!
};

module.exports = BikePhysicsComponent;
