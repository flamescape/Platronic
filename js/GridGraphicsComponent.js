var BABYLON = require('../lib/babylon');
var ServiceLocator = require('./ServiceLocator');

var GridGraphicsComponent = function(params){
    this.plane = BABYLON.Mesh.CreatePlane(null, params.size, ServiceLocator.get('scene'), false);
    
    this.position = Object.create(BABYLON.Vector3.prototype);
    this.rotation = Object.create(BABYLON.Vector3.prototype);
    
    BABYLON.Vector3.apply(this.position, params.position);
    BABYLON.Vector3.apply(this.rotation, params.rotation);
    
    this.material = new BABYLON.StandardMaterial("grid", ServiceLocator.get('scene'));
    this.material.diffuseTexture = new BABYLON.Texture("img/grid.svg", ServiceLocator.get('scene'));
    this.material.emissiveTexture = new BABYLON.Texture("img/grid_emiss.svg", ServiceLocator.get('scene'));
    this.material.specularPower = 10;
    this.material.specularTexture = new BABYLON.Texture("img/grid_spec.svg", ServiceLocator.get('scene'));
    this.material.diffuseTexture.hasAlpha = false;
    this.material.backFaceCulling = true;
    var bumpMaterial = new BABYLON.StandardMaterial("texture1", ServiceLocator.get('scene'));
    this.material.bumpTexture = new BABYLON.Texture("img/normalMap.jpg", ServiceLocator.get('scene'));
    
    // glue it all together
    this.plane.position = this.position;
    this.plane.rotation = this.rotation;
    this.plane.material = this.material;
};

GridGraphicsComponent.prototype.update = function() {
    
};

module.exports = GridGraphicsComponent;
