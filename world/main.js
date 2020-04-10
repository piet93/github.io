let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [30, 0],
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

let drawCircles = function () {
    let data = CONFIRMED;
    let header = CONFIRMED[0];
    let index = header.length - 1;
    let options = document.querySelector("#pulldown").options;
    let value = options[options.selectedIndex].value;
    let label = options[options.selectedIndex].text;
    let color;
    //console.log(value,label,options);

    if (value === "confirmed") {
        data = CONFIRMED;
        color = "#0074D9"
    } else if (value === "deaths") {
        data = DEATHS;
        color = "#85144b"
    } else {
        data = RECOVERED
        color = "#3D9970"
    }
    
    // Datum & Thema anzeigen anzeigen
    document.querySelector("#datum").innerHTML = `am ${header[index]} - ${label}`;

    circleGroup.clearLayers();

    //console.log(data);
    for (let i = 1; i < data.length; i++) {
        let row = data[i];
        //console.log(row[2],row[3]);
        let reg = `${row[0]} ${row[1]}`;
        let lat = row[2];
        let lng = row[3];
        let val = row[index];
        //let mrk = L.marker([lat,lng]).addTo(map);
        //mrk.bindPopup(`${reg}: ${val}`);

        //A = r²*PI
        //r² = A/PI
        //r = WURZEL(A/PI)
        let s = 0.5;
        let r = Math.sqrt(val * s / Math.PI);
        let circle = L.circleMarker([lat, lng], {
            radius: r,
            color: color
        }).addTo(circleGroup);
        circle.bindPopup(`${reg}: ${val}`);
    }
};

document.querySelector("#pulldown").onchange = function () {
    drawCircles();
};

drawCircles();