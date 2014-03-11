var Grid = require('./Grid');

module.exports = function(size){
    var offset = size/2;
    return [
        new Grid({
            size: size,
            position: [0, offset, 0],
            rotation: [Math.PI/2, Math.PI/2, 0],
            diffuse: 'img/grid-debug_py.png'
        }),
        new Grid({
            size: size,
            position: [0, 0, offset],
            rotation: [Math.PI, 0, Math.PI],
            diffuse: 'img/grid-debug_pz.png'
        }),
        new Grid({
            size: size,
            position: [0, 0, -offset],
            rotation: [0, 0, 0],
            diffuse: 'img/grid-debug_nz.png'
        }),
        new Grid({
            size: size,
            position: [offset, 0, 0],
            rotation: [Math.PI, Math.PI/2, Math.PI],
            diffuse: 'img/grid-debug_px.png'
        }),
        new Grid({
            size: size,
            position: [-offset, 0, 0],
            rotation: [0, Math.PI/2, 0],
            diffuse: 'img/grid-debug_nx.png'
        }),
        new Grid({
            size: size,
            position: [0, -offset, 0],
            rotation: [3 * Math.PI/2, -Math.PI/2, 0],
            diffuse: 'img/grid-debug_ny.png'
        })
    ];
};
