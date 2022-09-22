


/* Create map instance */
var chart = am4core.create("chartdiv", am4maps.MapChart);

/* Set map definition */
chart.geodata = am4geodata_worldLow;

// Set projection
// chart.projection = new am4maps.projections.Mercator();
chart.projection = new am4maps.projections.Miller();
// chart.projection = new am4maps.projections.Orthographic();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// polygonSeries.panX = "rotateX"; 
// polygonSeries.panX = "translateX";



// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Add some custom data
polygonSeries.data = [{
    "id": "US",
    "color": am4core.color("#3F4B3B"),
    "description": "https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript"
}, {
    "id": "CA",
    "color": am4core.color("#3F4B3B"),
    "description": "Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montréal and Québec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls."
}, {
    "id": "MX",
    "color": am4core.color("#3F4B3B"),
    "description": "Mexico is a country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles. Ancient ruins such as Teotihuacán and the Mayan city of Chichén Itzá are scattered throughout the country, as are Spanish colonial-era towns. In capital Mexico City, upscale shops, renowned museums and gourmet restaurants cater to modern life."
}]

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
// polygonTemplate.fill = am4core.color("#5CAB7D");
polygonTemplate.fill = am4core.color("#000000");
polygonTemplate.propertyFields.fill = "color";
polygonTemplate.events.on("hit", function (ev) {
    var data = ev.target.dataItem.dataContext;
    var info = document.getElementById("info");
    if (data.name === "United States") {
        // window.location = data.description;
        window.open(data.description); // to open in another window
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

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
// hs.properties.fill = am4core.color("#5A9367");
hs.properties.fill = am4core.color("#FF0000");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();