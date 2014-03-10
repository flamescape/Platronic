var BikeKeyboardInputComponent = function(){
    this.turningLeft = false;
    this.turningRight = false;
    
    var kh = this.keysHeld = {};
    window.addEventListener('keydown', function(e){
        kh[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e){
        kh[e.keyCode] = false;
    });
};

BikeKeyboardInputComponent.prototype.update = function(){
    this.turningLeft = this.keysHeld[65];
    this.turningRight = this.keysHeld[68];
};

module.exports = BikeKeyboardInputComponent;
