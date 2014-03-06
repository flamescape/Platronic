var Grid = require('./Grid');

module.exports = function(size){
    var offset = size/2;
    return [
        new Grid({
            size: size,
            position: [0, 0, offset],
            rotation: [Math.PI, 0, 0]
        }),
        new Grid({
            size: size,
            position: [0, 0, -offset],
            rotation: [0, 0, 0]
        }),
        new Grid({
            size: size,
            position: [offset, 0, 0],
            rotation: [Math.PI, Math.PI/2, 0]
        }),
        new Grid({
            size: size,
            position: [-offset, 0, 0],
            rotation: [0, Math.PI/2, 0]
        }),
        new Grid({
            size: size,
            position: [0, offset, 0],
            rotation: [Math.PI/2, 0, 0]
        }),
        new Grid({
            size: size,
            position: [0, -offset, 0],
            rotation: [3 * Math.PI / 2, 0, 0]
        })
    ];
};
