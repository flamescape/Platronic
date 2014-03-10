var moveTo = function (point, speed) {
    point.X += Math.cos(point.angle) * speed;
    point.Y += Math.sin(point.angle) * speed;
    return point;
};

var CCW = function (p1, p2, p3) {
    return (p3.Y - p1.Y) * (p2.X - p1.X) > (p2.Y - p1.Y) * (p3.X - p1.X);
};

var isIntersect = function (p1, p2, p3, p4) {
    return (CCW(p1, p3, p4) !== CCW(p2, p3, p4)) && (CCW(p1, p2, p3) !== CCW(p1, p2, p4));
};
var findIntersect = function (p1, p2, p3, p4) {

    var s1_x = p2.X - p1.X;
    var s1_y = p2.Y - p1.Y;

    var s2_x = p4.X - p3.X;
    var s2_y = p4.Y - p3.Y;

    var s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
    var t = -(s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        // Collision detected
        var atX = x1 + (t * s1_x);
        var atY = y1 + (t * s1_y);
        return { X: atX, Y: atY };
    }
    // No collision
    return false; 
}