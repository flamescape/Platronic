var BABYLON = require('./lib/babylon')
  , Bike = require('./js/Bike')
  , ServiceLocator = require('./js/ServiceLocator')
  , PlatonicConstructor = require('./js/PlatonicConstructor')
  , BikeKeyboardInputComponent = require('./js/BikeKeyboardInputComponent')
  ;

var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);
ServiceLocator.provide('scene', scene);

var light0 = new BABYLON.PointLight('Omni0', new BABYLON.Vector3(0, 0, 50), scene);
light0.diffuse = new BABYLON.Color3(0.67, 0.67, 0.78);
light0.specular = new BABYLON.Color3(0.67, 0.67, 0.78);
light0.intensity = 0.5;

var camera = new BABYLON.ArcRotateCamera('Camera', 0, 0, 120, new BABYLON.Vector3(0, 0, 0), scene);
light0.parent = camera;
camera.alpha = Math.PI;

var cube = PlatonicConstructor(64);

var b = new Bike();
b.x = (Math.random() * 64)-32;
b.y = (Math.random() * 64)-32;
cube[0].addBike(b);

b.inputComponent = new BikeKeyboardInputComponent();

// Attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// Once the scene is loaded, just register a render loop to render it
engine.runRenderLoop(function () {
    scene.render();
    b.update();
});

window.addEventListener('resize', function() {
    engine.resize();
});
