//import matriz from "./matriz"

import { matriz } from "./layers/matriz";

var overlay;
function init() {
    var mapBounds = new L.LatLngBounds(
        new L.LatLng(23.83006105, -79.01609647),
        new L.LatLng(24.30739016, -78.47791518));
    var mapMinZoom = 8;
    var mapMaxZoom = 15;
  var map = L.map('map').setView([24.06872561,-78.74700582], 8);
  
  overlay = L.tileLayer('https://xave.world/flamapro/{z}/{x}/{y}.jpg', {
      minZoom: mapMinZoom, maxZoom: mapMaxZoom,
      bounds: mapBounds,
      attribution: 'undefined',opacity: 0.85
    }).addTo(map);
}

// configurar popup

function popup (feature,layer){
    if(feature.properties && feature.properties.tokenID){
        layer.bindPopup("<strong>TokenID: </strong>" + feature.properties.tokenID)
    }
}

//agregar capa en formato geojson
L.geoJson(matriz).addTo(map);

var terrasJS = L.geoJson(matriz,{
    onEachFeature: popup
}).addTo(map);