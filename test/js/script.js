/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

// Set themes
root.setThemes([
    am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
    am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1(),
        wheelY: "none",
        maxPanOut: 0.
    })
);

var backgroundSeries = chart.series.unshift(
    am5map.MapPolygonSeries.new(root, {})
);

// sea color
backgroundSeries.mapPolygons.template.setAll({
    fill: am5.color(0xd4f1f9),
    stroke: am5.color(0xd4f1f9),
});

backgroundSeries.data.push({
    geometry: am5map.getGeoRectangle(90, 180, -90, -180)
});


// Create curtain + message to show when wheel is used over chart without CTRL
var overlay = root.container.children.push(am5.Container.new(root, {
    width: am5.p100,
    height: am5.p100,
    layer: 100,
    visible: false
}));

var curtain = overlay.children.push(am5.Rectangle.new(root, {
    width: am5.p100,
    height: am5.p100,
    fill: am5.color(0x000000),
    fillOpacity: 0.3
}));

var message = overlay.children.push(am5.Label.new(root, {
    text: "Use CTRL + Scroll to zoom",
    fontSize: 30,
    x: am5.p50,
    y: am5.p50,
    centerX: am5.p50,
    centerY: am5.p50
}));

chart.events.on("wheel", function (ev) {
    if (ev.originalEvent.ctrlKey) {
        ev.originalEvent.preventDefault();
        chart.set("wheelY", "zoom");
    }
    else {
        chart.set("wheelY", "none");
        overlay.show();
        overlay.setTimeout(function () {
            overlay.hide()
        }, 800);
    }
});

// Create polygon series
var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
        // geoJSON: am5geodata_worldLow,
        geoJSON: am5geodata_worldHigh,
        // geoJSON: am5geodata_peruHigh,
        exclude: ["AQ", "FK", "GS", "TF", "HM"],
        fill: am5.color(0x095256)
    })
);

polygonSeries.mapPolygons.template.setAll({
    // tooltipText: "{name}",
    tooltipText: "{id}",
    interactive: true
});

// Hover color
polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0x677935)
});

// Add all blogs URLs
polygonSeries.data.setAll([
    { id: "BR", description: "https://www.youtube.com/" },
    { id: "US-AK", value: 626932 },
    { id: "US-WI", value: 5363675 },
    { id: "US-WY", value: 493782 }
]);

// polygonSeries.mapPolygons.template.events.on("click", function (ev) {
//     console.log("something happened ", ev);
// }, this);

// polygonSeries.mapPolygons.template.states.create("hit", {
// fill: am5.color(0xFF0000)
// });
// polygonSeries.events.on("hit", function (ev) {




polygonSeries.mapPolygons.template.events.on("click", function (ev) {
    var data = ev.target.dataItem.dataContext;
    var info = document.getElementById("info");
    if (data.name === "Brazil") {
        window.location = data.description;
        // window.open(data.description); // to open in another window
    }
    else {
        info.innerHTML = "<h3>" + data.name + " (" + data.id + ")</h3>";
        if (data.description) {
            info.innerHTML += data.description;
        }
        else {
            info.innerHTML += "<i>No description provided.</i>"
        }
    }
});