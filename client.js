var BABYLON = require('./lib/babylon')
  , Grid = require('./js/Grid')
  , ServiceLocator = require('./js/ServiceLocator')
  ;

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);
ServiceLocator.provide('scene', scene);

var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 50), scene);
light0.diffuse = new BABYLON.Color3(0.67, 0.95, 0.98);
light0.specular = new BABYLON.Color3(0.67, 0.95, 0.98);

var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 120, new BABYLON.Vector3(0, 0, 0), scene);
light0.parent = camera;

new Grid({
    size: 64,
    position: [0, 0, 32],
    rotation: [Math.PI, 0, 0]
});
new Grid({
    size: 64,
    position: [0, 0, -32],
    rotation: [0, 0, 0]
});
new Grid({
    size: 64,
    position: [32, 0, 0],
    rotation: [Math.PI, Math.PI/2, 0]
});
new Grid({
    size: 64,
    position: [-32, 0, 0],
    rotation: [0, Math.PI/2, 0]
});
new Grid({
    size: 64,
    position: [0, 32, 0],
    rotation: [Math.PI/2, 0, 0]
});
new Grid({
    size: 64,
    position: [0, -32, 0],
    rotation: [3 * Math.PI / 2, 0, 0]
});

// Attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// Once the scene is loaded, just register a render loop to render it
engine.runRenderLoop(function () {
scene.render();
});