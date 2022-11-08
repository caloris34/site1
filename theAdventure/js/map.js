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


// TO DO:
//  - zoom with double click
//  - colors


// Create root and chart
var root = am5.Root.new("chartdiv");

// Define colors
var color_map = 0x2F3C42; // dark grey
var color_visitedCountry = 0xB49509; // dark yellow
var color_hover = 0x677935; // darker yellow
var color_background = 0x050c37; // dark blue

// Set themes
root.setThemes([
    am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
    am5map.MapChart.new(root, {
        panX: "rotateX",
        homeZoomLevel: 1.,
        projection: am5map.geoNaturalEarth1(),
        wheelY: "none",
        maxPanOut: 0.0
    })
);

// Appear with fade-in
chart.appear(1000, 100);

// Background
chart.chartContainer.set("background", am5.Rectangle.new(root, {
    fill: am5.color(color_background),
    fill: am5.color(0xffffff),
    fillOpacity: 1
}));

// var backgroundSeries = chart.series.unshift(
//     am5map.MapPolygonSeries.new(root, {})
// );

// // sea color
// backgroundSeries.mapPolygons.template.setAll({
//     fill: am5.color(0x113C52),
//     stroke: am5.color(0x113C52),
// });

// backgroundSeries.data.push({
//     geometry: am5map.getGeoRectangle(90, 180, -90, -180)
// });

// end Background


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
// end message overlay


// Create polygon series
var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
        // geoJSON: am5geodata_worldLow,
        geoJSON: am5geodata_worldHigh,
        // geoJSON: am5geodata_peruHigh,
        valueField: "value",
        calculateAggregates: true,
        exclude: ["AQ", "FK", "GS", "TF", "HM"],
        fill: am5.color(color_map)
    })
);
polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    templateField: "polygonSettings",
    interactive: true
})


// Zoom at homePoint
polygonSeries.events.on("datavalidated", function () {
    chart.goHome();
});



// Hover color
polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(color_hover),
});

console.log(polygonSeries)

// click event to open link
polygonSeries.mapPolygons.template.events.on("click", (ev) => {
    var clickedCountry = ev.target.dataItem.get("id");
    var clickedData = polygonSeries.getDataItemById(clickedCountry);
    var pageToOpen = clickedData.dataContext.description;

    if (pageToOpen in window) { // check if "description" is empty
        console.log("Not visited");
    } else {
        Promise.all([
            window.open(pageToOpen)
        ]);
    }
});


var usaSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        fill: am5.color(am5.color(color_map))
    })
);

usaSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    templateField: "polygonSettings",
    interactive: true
})


// list of visited countries and their links
polygonSeries.data.setAll([
    {
        id: "FR", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "BR", description: "../blog/BR_Brazil.php", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "IT", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "ES", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "GB", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "PT", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "MX", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "CO", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "PE", description: "blog/PE_Peru.html", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "GR", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "MA", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "DE", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "NO", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "SE", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "GE", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "AM", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "SG", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "TH", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "DO", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "IS", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "CZ", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "BE", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "NL", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "MY", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }]);


usaSeries.data.setAll([
    {
        id: "US-CA", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "US-NV", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }, {
        id: "US-AZ", description: "https://www.google.com", polygonSettings: { fill: am5.color(color_visitedCountry) }
    }
])