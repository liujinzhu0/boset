'use strict';

var map = new BMap.Map("map");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);
//平移缩放控件
/*map.addControl(new BMap.NavigationControl())
map.addControl(new BMap.ScaleControl())
map.addControl(new BMap.OverviewMapControl())
map.addControl(new BMap.MapTypeControl())
*/
var opts = {
	offset: new BMap.Size(150, 5)
};
map.addControl(new BMap.ScaleControl(opts));

var typeopts = {
	type: 'MAP_NAVIGATION_CONTROL_ZOOM'
};
map.addControl(new BMap.NavigationControl(typeopts));

function ZoomControl() {
	this.defaultAnchor = 'BMAP_ANCHOR_TOP_LEFT';
	this.defaultOffset = new BMap.Size(10, 10);
}

ZoomControl.prototype = new BMap.Control();