$(function () {

    $.getJSON('js/data/ne_map.json', function (geojson) {

        var regionMap = Highcharts.geojson(geojson,'map')
            schemes = Highcharts.geojson(geojson,'mappoint');  

        $('#region-left').highcharts('Map', {

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
            tooltip: {
                enabled: true,
                formatter: function() {
                    return this.point.name
                },
                borderColor: "#000033",
                borderRadius: "3px",
                backgroundColor: "#0082ca",
                color: "#eaf5fb",
                shape: "square",
                style: {
                      color: "#eaf5fb",
                }
            },

            series: [{
                type: 'map',
                nullColor: '#b3daef',
                mapData: geojson,
                enableMouseTracking: true,
                borderColor: '#4368ab'
            },{
                type: 'mappoint',
                name: 'schemes',
                stickyTracking: false,
                data: [{
                    name: 'Scheme 1',
                    x: 424923,
                    y: -564176
                }],
                animation: false,
                dataLabels : {
                    enabled: false,
                },
                marker: {
                    radius: 6,
                    fillColor: '#4368ab',
                    lineColor: "#eaf5fb",
                    lineWidth: 3
                }
            }]
        });
    });
});

var stuff = `
                
            },
            {
                
                name: 'schemes',
                animation: false,
                data: schemes,
                joinBy: ['name', 'name'],
                dataLabels : {
                    enabled: false,
                },
                states: {
                    hover: {
                    }
                },
                marker: {
                    radius: 6,
                    fillColor: '#4368ab',
                    lineColor: "#eaf5fb",
                    lineWidth: 3
                },`