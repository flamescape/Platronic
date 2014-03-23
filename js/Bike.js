var Entity = require('./Entity')
  , BikeGraphicsComponent = require('./BikeGraphicsComponent')
  , BikePhysicsComponent = require('./BikePhysicsComponent')
  , Wall = require('./Wall')
  ;

var Bike = function() {
    this.x = 0;
    this.y = 0;

    this.graphicsComponent = new BikeGraphicsComponent();
    this.physicsComponent = new BikePhysicsComponent();
    
    this.wall = new Wall(this);
};
Bike.prototype = Object.create(Entity.prototype);

Bike.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments);
    
    this.wall.update(this.x, this.y);
};

Bike.prototype.isTurning = function(){
    if (!this.inputComponent) {
        return;
    }
    
    return this.inputComponent.turningLeft || this.inputComponent.turningRight;
};

module.exports = Bike;
