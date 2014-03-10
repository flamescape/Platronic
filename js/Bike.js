var Entity = require('./Entity')
  , BikeGraphicsComponent = require('./BikeGraphicsComponent')
  , BikePhysicsComponent = require('./BikePhysicsComponent')
  ;

var Bike = function() {
    this.x = 0;
    this.y = 0;

    this.graphicsComponent = new BikeGraphicsComponent();
    this.physicsComponent = new BikePhysicsComponent();
};
Bike.prototype = Object.create(Entity.prototype);

module.exports = Bike;
