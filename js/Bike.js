var Entity = require('./Entity')
  , BikeGraphicsComponent = require('./BikeGraphicsComponent')
  ;

var Bike = function() {
    this.graphicsComponent = new BikeGraphicsComponent();
};
Bike.prototype = Object.create(Entity.prototype);

module.exports = Bike;
