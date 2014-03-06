var BABYLON = require('../lib/babylon');
var ServiceLocator = require('./ServiceLocator');

var BikeGraphicsComponent = function(colour, name){
    this.colour = colour;
    this.name = name;
    
    this.model = BABYLON.Mesh.CreateSphere(null, 4, 1, ServiceLocator.get('scene'));
    this.position = this.model.position;
};

BikeGraphicsComponent.prototype.update = function(bike){
    this.position.x = bike.x;
    this.position.y = bike.y;
    this.position.z = -1;
};

module.exports = BikeGraphicsComponent;
