$(function () {

    $.getJSON('js/data/North_east.json', function (geojson) {
        $('#region-left').highcharts('Map', {
            crs: { 
                type: "name", 
                properties: {
                    "name": "urn:ogc:def:crs:EPSG:32630" 
                } 
            },
            "hc-transform": {
                "default": { 
                    "crs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over +no_defs", 
                    } 
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            title : {
                text : ''
            },
            legend : {
                enabled: false
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series: [{
                type: 'map',
                nullColor: '#4368ab',
                mapData: geojson,
                name: 'Random data',
                data: [{
                    "name":"Newcastle",
                    "lat": 54.9778,
                    "lon": -1.6129
                }]
            }]
        });
    });
});