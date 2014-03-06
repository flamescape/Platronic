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
    if (this.inputComponent) {
        this.inputComponent.update(this.physicsComponent);
    }
    if (this.physicsComponent) {
        this.physicsComponent.update(this);
    }
    if (this.graphicsComponent) {
        this.graphicsComponent.update(this, this.physicsComponent);
    }
};

module.exports = Entity;
