


var mymap = L.map('map').setView([0,0], 2.5);

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);

var markerd = {
    radius: 3,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var airports = $.getJSON("myports.geojson",function(data1){
		L.geoJson(data1, {
			pointToLayer : function(feature,latlng){
				var marker = L.circleMarker(latlng, markerd);
				marker.bindPopup(feature.properties.name + ",<br>" + feature.properties.municipality);
				marker.on('mouseover', function (e) {
					this.openPopup();
				});
				marker.on('mouseout', function (e) {
					this.closePopup();
				});
				return marker;

		}
	}).addTo(mymap);
		});







const LEBL = new L.LatLng(41.2971,2.07846);
const LEMD = new L.LatLng(40.471926,-3.56264);
const EGLL = new L.LatLng(51.4706,-0.461941);
const KBDL = new L.LatLng(41.9388999939,-72.68319702149999);
const KDEN = new L.LatLng(39.861698150635,-104.672996521);
const KPHX = new L.LatLng(33.435302,-112.005905);
const KSEA = new L.LatLng(47.449001,-122.308998);
const KSFO = new L.LatLng(37.61899948120117,-122.375);
const LFPG = new L.LatLng(49.012798,2.55);
const PHKO = new L.LatLng(19.738783,-156.045603);
const CYVR = new L.LatLng(49.193901062,-123.183998108);
const EHAM = new L.LatLng(52.308601,4.76389);

const design = {
	weight: 1,
	opacity: 1,
	color: 'yellow',
};

const inter = {
	weight: 1,
	opacity: 1,
	color: 'blue',
};

const sea = new L.Geodesic([[KSEA, PHKO],[KSEA, KPHX],[KSEA, KSFO],[KSEA, KDEN],[KSEA, KBDL]], design).addTo(mymap);

const lon = new L.Geodesic([[EGLL, LEBL]], inter).addTo(mymap);

const van = new L.Geodesic([[CYVR, LEMD],[CYVR, EGLL]], inter).addTo(mymap);

const mad = new L.Geodesic([[LEMD, EHAM]], inter).addTo(mymap);

const amst = new L.Geodesic([[EHAM, LFPG]], inter).addTo(mymap);

const par = new L.Geodesic([[LFPG, CYVR]], inter).addTo(mymap);

// = new L.Geodesic([[]]).addTo(mymap);
