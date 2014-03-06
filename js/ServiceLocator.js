var ServiceLocator = function(){
};

ServiceLocator.prototype.provide = function(name, service){
    this[name] = service;
};

ServiceLocator.prototype.get = function(name){
    return this[name];
};

module.exports = new ServiceLocator();
