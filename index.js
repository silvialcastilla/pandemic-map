const madridCentro = L.latLng(40.4381311, -3.819623)
const theBridge = L.latLng(40.4215143, -3.69486);
const neoland = L.latLng(40.4222658, -3.716275);
const upgradeHub = L.latLng(40.4587131, -3.6968837);
const ironhack = L.latLng(40.3925087, -3.700465);
const adalab = L.latLng(40.3983333, -3.6885223);
const keepCoding = L.latLng(40.4041493, -3.6920989);

const zoom = 20

const myMap = L.map('mapid')
myMap.setView([madridCentro], zoom)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const theBridgeMarker = L.marker(theBridge).addTo(myMap).bindPopup('The Bridge')
const neolandMarker = L.marker(neoland).addTo(myMap).bindPopup('Neoland')
const upgradeHubMarker = L.marker(upgradeHub).addTo(myMap).bindPopup('Upgrade Hub')
const ironhackMarker = L.marker(ironhack).addTo(myMap).bindPopup('Ironhack')
const adalabMarker = L.marker(adalab).addTo(myMap).bindPopup('Adalab')
const keepCodingMarker = L.marker(keepCoding).addTo(myMap).bindPopup('KeepCoding')

const theBridgeCircle = L.circle(theBridge, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const neolandCircle = L.circle(neoland, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const upgradeHubCircle = L.circle(upgradeHub, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
const ironhackCircle = L.circle(ironhack, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const adalabCircle = L.circle(adalab, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const keepCodingCircle = L.circle(keepCoding, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    theBridge, neoland, upgradeHub, ironhack, adalab, keepCoding
]).addTo(mymap);