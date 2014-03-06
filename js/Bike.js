var _ = require('underscore')
  , Entity = require('./Entity')
  ;

var Bike = function() {

};
Bike.prototype = Object.create(Entity.prototype);

module.exports = Bike;
