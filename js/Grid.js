var GridGraphicsComponent = require('./GridGraphicsComponent');

var Grid = function(params){
    this.graphicsComponent = new GridGraphicsComponent(params);
};

Grid.prototype.update = function(){
    this.graphicsComponent.update(this);
};

module.exports = Grid;
