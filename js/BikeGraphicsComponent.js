var BABYLON = require('./lib/babylon');

var BikeGraphicsComponent = function(colour, name){
    this.colour = colour;
    this.name = name;
};

BikeGraphicsComponent.prototype.update = function(bike){
    this.bikeModel.x = bike.x;
    this.bikeModel.y = bike.y;

};

module.exports = BikeGraphicsComponent;
