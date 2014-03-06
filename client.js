var BABYLON = require('./lib/babylon');

// Get the Canvas element from our HTML below
var canvas = document.getElementById("renderCanvas");
// Load BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);

// Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
//var light1 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);

//var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
//light0.diffuse = new BABYLON.Color3(1, 1, 1);
//light0.specular = new BABYLON.Color3(1, 1, 1);
//light0.groundColor = new BABYLON.Color3(0, 0, 0);

var light1 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, -1, 0), scene);
light1.diffuse = new BABYLON.Color3(255, 0, 0);
light1.specular = new BABYLON.Color3(0, 255,0);
light1.groundColor = new BABYLON.Color3(0, 0, 255);

// var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);
var box = BABYLON.Mesh.CreateBox("Box", 3.0, scene);

// Attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// Once the scene is loaded, just register a render loop to render it
engine.runRenderLoop(function () {
scene.render();
});