var map;

function success(pos) {

    if (map === undefined) {
        map = L.map('mapid').setView([-31.777047456038183, -52.33118211089265], 15);
    } else {
        map.remove();
        map = L.map('mapid').setView([-31.777047456038183, -52.33118211089265], 15);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var myIcon = L.icon({
        iconUrl: './images/bus-stop.png',
        iconSize: [45, 45]
    });
    var myIcon2 = L.icon({
        iconUrl: './images/bus.png',
        iconSize: [30, 30]
    });
    odonto = new L.marker([-31.772279199215507, -52.3386275343313], { icon: myIcon }).addTo(map);
    map.addLayer(odonto);
    c2 = new L.marker([-31.77562913159106, -52.339572392053945], { icon: myIcon }).addTo(map);
    map.addLayer(c2);
    faurb = new L.marker([-31.779300111446638, -52.339398623288375], { icon: myIcon }).addTo(map);
    map.addLayer(faurb);
    cotada = new L.marker([-31.78055849793143, -52.335508869315355], { icon: myIcon }).addTo(map);
    map.addLayer(cotada);
    anglo = new L.marker([-31.780134837588736, -52.32377425579559], { icon: myIcon }).addTo(map);
    map.addLayer(anglo);

    bus = new L.marker([-31.777047456038183, -52.33118211089265], { icon: myIcon2 }).addTo(map);
    map.addLayer(bus);

}
function error(err) {
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 100
});

//navigator.geolocation.clearWatch(watchID);

