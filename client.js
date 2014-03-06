var BABYLON = require('./lib/babylon');

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0,0,0,0);

var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 50), scene);
light0.diffuse = new BABYLON.Color3(0.67, 0.95, 0.98);
light0.specular = new BABYLON.Color3(0.67, 0.95, 0.98);

var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 120, new BABYLON.Vector3(0, 0, 0), scene);
light0.parent = camera;
var p1 = BABYLON.Mesh.CreatePlane("p1", 64, scene, false);
var p2 = BABYLON.Mesh.CreatePlane("p2", 64, scene, false);
var p3 = BABYLON.Mesh.CreatePlane("p3", 64, scene, false);
var p4 = BABYLON.Mesh.CreatePlane("p4", 64, scene, false);
var p5 = BABYLON.Mesh.CreatePlane("p5", 64, scene, false);
var p6 = BABYLON.Mesh.CreatePlane("p5", 64, scene, false);

p1.position = new BABYLON.Vector3(0, 0, 32);
p2.position = new BABYLON.Vector3(0, 0, -32);
p3.position = new BABYLON.Vector3(32, 0, 0);
p4.position = new BABYLON.Vector3(-32, 0, 0);
p5.position = new BABYLON.Vector3(0, 32, 0);
p6.position = new BABYLON.Vector3(0, -32, 0);

p1.rotation = new BABYLON.Vector3(Math.PI, 0, 0);
p3.rotation = new BABYLON.Vector3(Math.PI, Math.PI/2, 0);
p4.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
p5.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
p6.rotation = new BABYLON.Vector3(3 * Math.PI / 2, 0, 0);

var materialGrid = new BABYLON.StandardMaterial("grid", scene);
materialGrid.diffuseTexture = new BABYLON.Texture("img/grid.svg", scene);
materialGrid.emissiveTexture = new BABYLON.Texture("img/grid_emiss.svg", scene);
materialGrid.diffuseTexture.hasAlpha = false;
materialGrid.backFaceCulling = true;

p1.material = materialGrid;
p2.material = materialGrid;
p3.material = materialGrid;
p4.material = materialGrid;
p5.material = materialGrid;
p6.material = materialGrid;

// Attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// Once the scene is loaded, just register a render loop to render it
engine.runRenderLoop(function () {
scene.render();
});