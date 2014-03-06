var GridGraphicsComponent = require('./GridGraphicsComponent');

var Grid = function(){
    this.graphicsComponent = new GridGraphicsComponent();
};

Grid.prototype.update = function(){
    this.graphicsComponent.update(this);
};

module.exports = Grid;
