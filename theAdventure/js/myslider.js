let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "mouseDrag": true,
    "nav" : false,
    // "startIndex": 2,
    center: true,
    "rewind": false, // go back to first slide
    "loop": true,
    // "fixedWidth": 400,
    // "edgePadding": 500, // ????
    // "autoWidth": true,
    // "lazyload": true,
    // "arrowKeys": true,
    // "autoplay": true,
    // "autoplayHoverPause": true,
    // "autoplayTimeout": 1000,
    // "autoplayText": [
    //   "▶",
    //   "❚❚"
    // ],

    // "axis": "vertical",
    // "swipeAngle": false, // ????

    // controlsContainer: "#customize-controls",
    // controlsContainer: "#controls",

    prevButton : ".prev",
    nextButton : ".next",
    responsive : {
        1600: {
            items : 4,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter: 20
        },
        768: {
            items : 2,
            gutter: 20
        },        
        480: {
            items : 1
        }
    }
})