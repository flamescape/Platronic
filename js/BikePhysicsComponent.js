var PhysicsComponent = require('./PhysicsComponent');

var BikePhysicsComponent = function(){
    PhysicsComponent.call(this);
    
    this.angle = 0;
    this.speed = 0.1;
};
BikePhysicsComponent.prototype = Object.create(PhysicsComponent.prototype);

BikePhysicsComponent.prototype.turnStep = Math.PI / 200;

BikePhysicsComponent.prototype.tick = function(bike, inputComponent){
    // this is where the movement magic happens!
    bike.x += this.speed * Math.cos(this.angle);
    bike.y += this.speed * Math.sin(this.angle);
    
    if (inputComponent && inputComponent.turningLeft) {
        this.angle += this.turnStep;
    } else if (inputComponent && inputComponent.turningRight) {
        this.angle -= this.turnStep;
    }
};

module.exports = BikePhysicsComponent;
