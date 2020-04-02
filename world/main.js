let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

let circleGroup = L.featureGroup().addTo(map);

L.control.layers({
    "OpenTopoMap": startLayer,
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Thunderforest.SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),
    "Stamen.Watercolor": L.tileLayer.provider("Stamen.Terrain"),
    "Esri.WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
    "MtbMap": L.tileLayer.provider("MtbMap"),
}, {
    "Thematische Darstellung": circleGroup
}).addTo(map);

// L.marker([0, 0]).addTo(map);

console.log(CONFIRMED)

let drawCircles = function (data) {
    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        // console.log(row[2],row[3]);
        let lat = row[2];
        let lng = row[3];
        let val = row[row.length - 1];
        // let mrk = L.marker([lat, lng]).addTo(map);
        // mrk.bindPopup(`${row[0]} ${row[1]}: ${val}`);

        let s = 0.5;
        let rad = Math.sqrt(val / Math.PI);
        let circle = L.circleMarker([lat, lng], {
            radius: rad
        }).addTo(circleGroup);
        circle.bindPopup(`${row[0]} ${row[1]}: ${val}`);    
    }
}

drawCircles(CONFIRMED);
drawCircles(RECOVERED);
drawCircles(DEATHS);