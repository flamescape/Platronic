var BABYLON = require('./lib/babylon');

// Get the Canvas element from our HTML below
var canvas = document.getElementById("renderCanvas");
// Load BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);

// Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
//var light1 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 0), scene);

//var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
//light0.diffuse = new BABYLON.Color3(1, 1, 1);
//light0.specular = new BABYLON.Color3(1, 1, 1);
//light0.groundColor = new BABYLON.Color3(0, 0, 0);

/*
var light1 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, -1, 0), scene);
light1.diffuse = new BABYLON.Color3(.1, 1, 1);
light1.specular = new BABYLON.Color3(1, .1, 1);
light1.groundColor = new BABYLON.Color3(0, 0, 1);
*/

var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 0), scene);
light0.diffuse = new BABYLON.Color3(.67, .95, .98);
light0.specular = new BABYLON.Color3(.67, .95, 98);

var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 5, new BABYLON.Vector3(0, 0, 0), scene);
light0.parent = camera;
var p1 = BABYLON.Mesh.CreatePlane("p1", 64, scene, false);
var p2 = BABYLON.Mesh.CreatePlane("p2", 64, scene, false);
var p3 = BABYLON.Mesh.CreatePlane("p3", 64, scene, false);
var p4 = BABYLON.Mesh.CreatePlane("p4", 64, scene, false);

p1.position = new BABYLON.Vector3(0, 0, 32);
p2.position = new BABYLON.Vector3(0, 0, -32);
p3.position = new BABYLON.Vector3(32, 0, 0);
p4.position = new BABYLON.Vector3(-32, 0, 0);
p1.rotation = new BABYLON.Vector3(Math.PI, 0, 0);
p3.rotation = new BABYLON.Vector3(Math.PI, Math.PI/2, 0);
p4.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);

// Attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// Once the scene is loaded, just register a render loop to render it
engine.runRenderLoop(function () {
scene.render();
});