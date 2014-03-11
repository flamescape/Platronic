var BABYLON = require('../lib/babylon');
var ServiceLocator = require('./ServiceLocator');

var GridGraphicsComponent = function(params) {
    params.diffuse = params.diffuse || 'img/grid_diffuse.png';
    params.emissive = params.emissive || 'img/grid_emissive.png';
    params.specular = params.specular || 'img/grid_specular.png';
    params.bump = params.bump || 'img/grid_bump.png';

    this.plane = BABYLON.Mesh.CreatePlane(null, params.size, ServiceLocator.get('scene'), false);
    
    this.position = Object.create(BABYLON.Vector3.prototype);
    this.rotation = Object.create(BABYLON.Vector3.prototype);
    
    BABYLON.Vector3.apply(this.position, params.position);
    BABYLON.Vector3.apply(this.rotation, params.rotation);
    
    this.material = new BABYLON.StandardMaterial('grid', ServiceLocator.get('scene'));
    this.material.diffuseTexture = new BABYLON.Texture(params.diffuse, ServiceLocator.get('scene'));
    this.material.emissiveTexture = new BABYLON.Texture(params.emissive, ServiceLocator.get('scene'));
    this.material.specularPower = 10;
    this.material.specularTexture = new BABYLON.Texture(params.specular, ServiceLocator.get('scene'));
    this.material.diffuseTexture.hasAlpha = false;
    this.material.backFaceCulling = true;
    this.material.bumpTexture = new BABYLON.Texture(params.bump, ServiceLocator.get('scene'));
    
    // glue it all together
    this.plane.position = this.position;
    this.plane.rotation = this.rotation;
    this.plane.material = this.material;
};

GridGraphicsComponent.prototype.update = function() {
    
};

module.exports = GridGraphicsComponent;
