var Entity = function() {
    
};

Entity.prototype.init = function(inputComponent, physicsComponent, graphicsComponent) {
    // common properties
    this.name = null;
    this.x = null;
    this.y = null;
    
    // components
    this.inputComponent = inputComponent;
    this.physicsComponent = physicsComponent;
    this.graphicsComponent = graphicsComponent;
};

Entity.prototype.update = function(){
    this.inputComponent.update(this.physicsComponent);
    this.physicsComponent.update(this);
    this.graphicsComponent.update(this, this.physicsComponent);
};

module.exports = Entity;
