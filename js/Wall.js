var BABYLON = require('../lib/babylon');
var ServiceLocator = require('./ServiceLocator');

var Wall = function() {
    this.segments = [];
    
    this.lastX = null;
    this.lastY = null;
    this.w = 1;
};

Wall.prototype.update = function(x, y) {
    if (this.lastX === null || this.lastY === null) {
        this.lastX = x;
        this.lastY = y;
        return;
    }

    var distance = Math.sqrt(Math.pow(x - this.lastX, 2) + Math.pow(y - this.lastY, 2));
    
    if (distance > .2) {
        this.newSegment(x, y);
        this.lastX = x;
        this.lastY = y;
    }
};

Wall.prototype.newSegment = function(x, y) {
    this.segments.unshift({
        x: x,
        y: y
    });

    this.renderNewSegment();
};

Wall.prototype.renderNewSegment = function() {
    if (this.segments.length < 2) {
        return null;
    }
    this.bufferNewSegment();       

    var left = new BABYLON.Mesh('left', ServiceLocator.get('scene'));
    //left.parent = 
    var leftPositions = [
        this.segments[0].y, 32, -this.segments[0].x,
        this.segments[0].y, 36, -this.segments[0].x,
        this.segments[1].y, 36, -this.segments[1].x,
        this.segments[1].y, 32, -this.segments[1].x,
    ];
    var normals = [
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1
    ];
    
    var leftUVs = [1, 0, 1, 1, 0, 1, 0, 0];
    /*var uvs = [
        1, 1,
        0, 1,
        0, 0,
        1, 0
    ];*/
    
    var indices = [];
    indices.push(0);
    indices.push(1);
    indices.push(2);

    indices.push(0);
    indices.push(2);
    indices.push(3);
    
    left.setVerticesData(leftPositions, BABYLON.VertexBuffer.PositionKind);
    left.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
    left.setVerticesData(leftUVs, BABYLON.VertexBuffer.UVKind);
    left.setIndices(indices);
    left.material = new BABYLON.StandardMaterial('path', ServiceLocator.get('scene'));
    left.material.opacityTexture = new BABYLON.Texture('img/path_opac.png', ServiceLocator.get('scene'));
    left.material.emissiveColor = new BABYLON.Color3(0, 1, 0);
    left.material.backFaceCulling = false;
};

Wall.prototype.bufferNewSegment = function() {
    if (this.segments.length < 2) {
        return null;
    }
    
    var m = this.slopeOf(this.segments[0], this.segments[1]);
    var mAngle = Math.atan(m);
    var flip = this.shouldFlip(this.segments[0], this.segments[1]) ? -1 : 1;
    
    this.segments[0].left = {
        x: this.segments[0].x - flip * this.w * Math.cos(mAngle + Math.PI / 2),
        y: this.segments[0].y - flip * this.w * Math.sin(mAngle + Math.PI / 2)
    };
    this.segments[0].right = {
        x: this.segments[0].x + flip * this.w * Math.cos(mAngle + Math.PI / 2),
        y: this.segments[0].y + flip * this.w * Math.sin(mAngle + Math.PI / 2)
    };
    
    if (this.segments.length === 2) {
        this.segments[1].right = {
            x: this.segments[1].x + flip * this.w * Math.cos(mAngle + Math.PI / 2),
            y: this.segments[1].y + flip * this.w * Math.sin(mAngle + Math.PI / 2)
        };
        this.segments[1].left = {
            x: this.segments[1].x - flip * this.w * Math.cos(mAngle + Math.PI / 2),
            y: this.segments[1].y - flip * this.w * Math.sin(mAngle + Math.PI / 2)
        };
    }

    if (this.segments.length > 2) {
        var a = Math.sqrt(Math.pow(this.segments[1].x - this.segments[0].x, 2) + Math.pow(this.segments[1].y - this.segments[0].y, 2));
        var b = Math.sqrt(Math.pow(this.segments[1].x - this.segments[2].x, 2) + Math.pow(this.segments[1].y - this.segments[2].y, 2));
        var c = Math.sqrt(Math.pow(this.segments[0].x - this.segments[2].x, 2) + Math.pow(this.segments[0].y - this.segments[2].y, 2));
        var angle = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b));
        var aM = (this.segments[1].y - this.segments[0].y) / (this.segments[1].x - this.segments[0].x);
        var bM = (this.segments[1].y - this.segments[2].y) / (this.segments[1].x - this.segments[2].x);
        // Angle of a and b in relation to x axis (radians):
        var aAngle = Math.atan(aM);
        var bAngle = Math.atan(bM);

        var offset = this.isRightTurn(this.segments[2], this.segments[1], this.segments[0]) ? aAngle : bAngle;
        var u = this.w / Math.sin(angle / 2);
        var uAngle = (angle / 2) - offset;
        var flip2 = 1;

        this.segments[1].right = {
            x: this.segments[1].x - u * flip2 * Math.cos(uAngle),
            y: this.segments[1].y + u * flip2 * Math.sin(uAngle)
        };

        if (Math.abs(this.slopeOf(this.segments[1].right, this.segments[0].right) - this.slopeOf(this.segments[1], this.segments[0])) > 0.05) {
            flip2 = -1;
            this.segments[1].right = {
                x: this.segments[1].x - u * flip2 * Math.cos(uAngle),
                y: this.segments[1].y + u * flip2 * Math.sin(uAngle)
            };
        }

        this.segments[1].left = {
            x: this.segments[1].x + u * flip2 * Math.cos(uAngle),
            y: this.segments[1].y - u * flip2 * Math.sin(uAngle)
        };
        
        if (isNaN(this.segments[1].left.x) || isNaN(this.segments[1].left.y) || isNaN(this.segments[0].left.x) || isNaN(this.segments[0].left.y)) {
            //console.log(this.segments[0], this.segments[1]);
        }
    }
};

Wall.prototype.slopeOf = function(pt1, pt2) {
    return (pt1.y - pt2.y) / (pt1.x - pt2.x);
};

Wall.prototype.shouldFlip = function(pt1, pt2) {
    return (pt1.x > pt2.x || pt1.x === pt2.x);
};

Wall.prototype.isRightTurn = function (p0, p1, p2) {
    var ax = p0.x - p1.x;
    var ay = p0.y - p1.y;

    var bx = p2.x - p1.x;
    var by = p2.y - p1.y;

    return ((ax * by - ay * bx) > 0);
};

module.exports = Wall;
