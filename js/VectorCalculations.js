var moveTo = function (point, speed) {
    point.X += Math.cos(point.angle) * speed;
    point.Y += Math.sin(point.angle) * speed;
    return point;
}

function CCW(p1, p2, p3) {
    a = p1.X; b = p1.Y;
    c = p2.X; d = p2.Y;
    e = p3.X; f = p3.Y;
    return (f - b) * (c - a) > (d - b) * (e - a);
}

function isIntersect(p1, p2, p3, p4) {
    return (CCW(p1, p3, p4) != CCW(p2, p3, p4)) && (CCW(p1, p2, p3) != CCW(p1, p2, p4));
}