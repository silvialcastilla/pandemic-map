const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OTRO_MAPA = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';

const madridCentro = L.latLng(40.4259019,-3.7056721);
const zoom = 13;

const map = L.map('map');

map.setView(madridCentro, zoom);

L.tileLayer(OPEN_STREET_MAPS).addTo(map);
L.tileLayer(OTRO_MAPA).addTo(map);

const theBridge = L.latLng(40.4215143, -3.69486);
const neoland = L.latLng(40.4222658, -3.716275);
const upgradeHub = L.latLng(40.4587131, -3.6968837);
const ironhack = L.latLng(40.3925087, -3.700465);
const adalab = L.latLng(40.3983333, -3.6885223);
const keepCoding = L.latLng(40.4041493, -3.6920989);

const iconTheBridge = L.icon({
    iconUrl: 'thebridge.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [theBridge], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const iconNeoland = L.icon ({
    iconUrl: 'neoland.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [neoland], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const iconUpgradeHub = L.icon ({
    iconUrl: 'upgradehub.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [upgradeHub], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const iconIronhack = L.icon ({
    iconUrl: 'ironhack.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [ironhack], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const iconAdalab = L.icon ({
    iconUrl: 'adalab.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [adalab], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const iconKeepcoding = L.icon ({
    iconUrl: 'keepcoding.jpeg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [keepCoding], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const theBridgeMarker = L.marker(theBridge, {icon: iconTheBridge}).addTo(map).bindPopup('The Bridge');
const neolandMarker = L.marker(neoland, {icon: iconNeoland}).addTo(map).bindPopup('Neoland');
const upgradeHubMarker = L.marker(upgradeHub, {icon: iconUpgradeHub }).addTo(map).bindPopup('Upgrade Hub');
const ironhackMarker = L.marker(ironhack, {icon: iconIronhack}).addTo(map).bindPopup('Ironhack');
const adalabMarker = L.marker(adalab, {icon: iconAdalab}).addTo(map).bindPopup('Adalab');
const keepCodingMarker = L.marker(keepCoding, {icon: iconKeepcoding}).addTo(map).bindPopup('KeepCoding');

const theBridgeCircle = L.circle(theBridge, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

const neolandCircle = L.circle(neoland, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

const upgradeHubCircle = L.circle(upgradeHub, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);
const ironhackCircle = L.circle(ironhack, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

const adalabCircle = L.circle(adalab, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

const keepCodingCircle = L.circle(keepCoding, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

const polygon = L.polygon([
    theBridge, upgradeHub, neoland,  ironhack, adalab, keepCoding
]).addTo(map);

const markers = L.layerGroup([theBridgeMarker,neolandMarker,upgradeHubMarker,ironhackMarker,adalabMarker,keepCodingMarker]);
const circles = L.layerGroup([theBridgeCircle,neolandCircle,upgradeHubCircle,ironhackCircle,adalabCircle,keepCodingCircle]);

const openStreetMapsTileLayer = L.tileLayer(OPEN_STREET_MAPS);
const dibujitoTileLayer = L.tileLayer(OTRO_MAPA);


const baseMaps = {
	'basemap': openStreetMapsTileLayer,
	'othermap': dibujitoTileLayer
};
const overlayMaps = {
    'marcadores': markers,
    'circulos': circles,
    'poligono': polygon
};
L.control.layers(baseMaps,overlayMaps).addTo(map);





