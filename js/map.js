"use strict";

var map = new BMap.Map("map");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
window.setTimeout(function () {
    map.panTo(new BMap.Point(116.409, 39.918));
}, 2000);