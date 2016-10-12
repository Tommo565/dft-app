// Highcharts Regions Map

function indexMap () {

    $.getJSON('js/data/uk-regions.json', function (geojson) {
        $('#index-center').highcharts('Map', {
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
            plotOptions : {
                map: {
                    tooltip: {
                        headerFormat: '',            // Gets rid of the annoying bullet
                        pointFormat: '{point.name}'  // Returns the name of the area
                    }
                },
                series: {
                    point : {
                        events : {
                            select : indexMapRenderer
                        }
                    }
                }
            },

            colorAxis: {
            },

            series : [{
                data : ukRegionData["region"],
                allowPointSelect: true,
                mapData: geojson,
                joinBy: ['NAME', 'name'],
                name: ' ',
                states: {
                    hover: {
                        color: '#b3daef'    
                    },
                    select: {
                        color: '#d25f15'
                    }
                },
                color:  '#4368ab',
                dataLabels: {
                    enabled: false
                },
            }]
        });
    });
};