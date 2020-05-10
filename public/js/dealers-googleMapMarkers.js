function addMarkers(map){
var markers = [];
var Marker = google.maps.Marker;
var LatLng = google.maps.LatLng;
markers.push(new Marker({
	position: new LatLng(44.0551442, -121.2978986),
	map: map,
	title: 'Aunt Beru\\\s Oregon Souveniers',
}));
markers.push(new Marker({
	position: new LatLng(45.71581949999999, -123.9379636),
	map: map,
	title: 'Bruce\\\s Bric-a-Brac',
}));
markers.push(new Marker({
	position: new LatLng(45.52423109999999, -122.6804838),
	map: map,
	title: 'Oregon Novelties',
}));
markers.push(new Marker({
	position: new LatLng(44.5783906, -123.2677691),
	map: map,
	title: 'Oregon Goodies',
}));
markers.push(new Marker({
	position: new LatLng(45.5892013, -122.5934769),
	map: map,
	title: 'Oregon Grab-n-Fly',
}));
}