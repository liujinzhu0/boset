"use strict";

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

var opts={
	offset:new BMap.Size(150,5)
}
map.addControl(new BMap.ScaleControl(opts))

var typeopts={
	type:'MAP_NAVIGATION_CONTROL_ZOOM'
}
map.addControl(new BMap.NavigationControl(typeopts))
*/
/*
 
 * s设置地图模式*/
/*var mapStyle={
	style:"midnight"
}
map.setMapStyle(mapStyle)*/
/*
 自定义控件
 * */
/*
 * 
function ZoomControl(){
	this.defaultAnchor='BMAP_ANCHOR_TOP_LEFT';
	this.defaultOffset=new BMap.Size(10,10);
}

ZoomControl.prototype=new BMap.Control();
ZoomControl.prototype.initialize=function(map){
	var div=document.createElement("div");
	div.appendChild(document.createTextNode("放大2级"));
	div.style.cursor="pointer"
	div.style.border="1px solid gray";
	div.style.backgroundColor="white"
	div.style.position="realitive"
	div.style.top="100px"
	div.style.left="50px"
	div.onclick=function(e){
		map.zoomTo(map.getZoom()+2)
	}
	
	map.getContainer().appendChild(div)
	return div;
	
	
}

var myZoomCtrl=new ZoomControl();

map.addControl(myZoomCtrl)
*/
//创建标注。
/*var mark=new BMap.Marker(point)
//将标注添加到地图中
map.addOverlay(mark)*/
/*
 
 * 编写自定义函数。创建标注
 * */
/*function addMarker(point,index){//创建图标对象
	var MyIcon=new BMap.Icon("../images/location.jpg",new BMap.Size(23,25),{
		//制定定位位置
		//当标注显示在地图上时，其所指向的地理位置距离图标左上
		//角各偏移10像素和25像素
		anchor:new BMap.Size(10,25),
		imageOffset:new BMap.Size(0,0-index*25)
	})
	var marker=new BMap.Marker(point,{icon:MyIcon});	
	marker.addEventListener("click",function(){
		
		
		alert("您点击了标注")
		
	})
	
	
	
	
	map.addOverlay(marker);
}

var bounds=map.getBounds();
var lngSpan=bounds.maxX-bounds.minX;
var latSpan=bounds.MaxY-bounds.MinY;

for(let i=0;i<10;i++){
	var point=new BMap.Point(bounds.minX + lngSpan * (Math.random()*0.7+0.15),
	bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));
	

		addMarker(point,i)
	
}

var polyline = new BMap.Polyline([
    new BMap.Point(116.399, 39.910),
    new BMap.Point(116.405, 39.920)
    ],
    {strokeColor:"blue", strokeWeight:1, strokeOpacity:0.5}
    );
map.addOverlay(polyline);*/
//定义一个自定义的覆盖物的构造函数
function SquareOverlay(center, length, color) {
	this._center = center;
	this._length = length;
	this._color = color;
}

SquareOverlay.prototype = new BMap.Overlay();
SquareOverlay.prototype.initialize = function (map) {
	this._map = map;
	var div = document.createElement("div");
	div.style.width = this._length + "px";
	div.style.height = this._length + "px";
	div.style.backgroundColor = this._color;
	map.getPanes().markerPane.appendChild(div);
	this._div = div;
	return div;
};
// 实现绘制方法   
SquareOverlay.prototype.draw = function () {
	// 根据地理坐标转换为像素坐标，并设置给容器    
	var position = this._map.pointToOverlayPixel(this._center);
	this._div.style.left = position.x - this._length / 2 + "px";
	this._div.style.top = position.y - this._length / 2 + "px";
};
// 实现显示方法    
SquareOverlay.prototype.show = function () {
	if (this._div) {
		this._div.style.display = "";
	}
};
// 实现隐藏方法  
SquareOverlay.prototype.hide = function () {
	if (this._div) {
		this._div.style.display = "none";
	}
};
// 添加自定义方法   
SquareOverlay.prototype.toggle = function () {
	if (this._div) {
		if (this._div.style.display == "") {
			this.hide();
		} else {
			this.show();
		}
	}
};
var mySquare = new SquareOverlay(map.getCenter(), 100, "red");
map.addOverlay(mySquare);