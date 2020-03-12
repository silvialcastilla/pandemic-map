 
const OPEN_STREET = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const madridCentro = L.latLng(40.4169019,-3.7056721)
const zoom = 12

const map = L.map('map')

map.setView(madridCentro, zoom)

L.tileLayer(OPEN_STREET).addTo(map)


const theBridge = L.latLng(40.4215143, -3.69486);
const neoland = L.latLng(40.4222658, -3.716275);
const upgradeHub = L.latLng(40.4587131, -3.6968837);
const ironhack = L.latLng(40.3925087, -3.700465);
const adalab = L.latLng(40.3983333, -3.6885223);
const keepCoding = L.latLng(40.4041493, -3.6920989);

const theBridgeMarker = L.marker(theBridge).addTo(map).bindPopup('The Bridge')
const neolandMarker = L.marker(neoland).addTo(map).bindPopup('Neoland')
const upgradeHubMarker = L.marker(upgradeHub).addTo(map).bindPopup('Upgrade Hub')
const ironhackMarker = L.marker(ironhack).addTo(map).bindPopup('Ironhack')
const adalabMarker = L.marker(adalab).addTo(map).bindPopup('Adalab')
const keepCodingMarker = L.marker(keepCoding).addTo(map).bindPopup('KeepCoding')

const theBridgeCircle = L.circle(theBridge, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const neolandCircle = L.circle(neoland, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const upgradeHubCircle = L.circle(upgradeHub, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
const ironhackCircle = L.circle(ironhack, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const adalabCircle = L.circle(adalab, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const keepCodingCircle = L.circle(keepCoding, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    theBridge, upgradeHub, neoland,  ironhack, adalab, keepCoding
]).addTo(map);