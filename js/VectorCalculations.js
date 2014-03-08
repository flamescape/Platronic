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