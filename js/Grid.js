var GridGraphicsComponent = require('./GridGraphicsComponent');

var Grid = function(params){
    this.bikes = [];
    this.graphicsComponent = new GridGraphicsComponent(params);
};

Grid.prototype.addBike = function(bike){
    this.bikes.push(bike);
    bike.graphicsComponent.model.parent = this.graphicsComponent.plane;
};

Grid.prototype.update = function(){
    this.graphicsComponent.update(this.bikes);
};

module.exports = Grid;
