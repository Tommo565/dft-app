var chartRightTop = $(function () {
        $('#index-right-top').highcharts({
            chart: {
                type: 'column',
                spacing: [0,20,10,0],
                style: {
                    fontFamily: "Poppins"
                }
            },
            exporting: {
                    enabled: false
                },
            credits: {
                    enabled: false
                },
            title : {
                    text : 'Investment vs. Impact',
                    style: {"font-weight":"bold",
                            "font-size": "14px",
                            "padding": 0,
                            "margin": 0}
                }, 
            legend : {
                    enabled: true,
                    margin: 4,
                    padding:0
                },
            xAxis: {
                categories: ukRegionData["region"][0]["axis"],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Investment (£m)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b> £{point.y:.0f}m</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Projected Investment',
                data: ukRegionData["region"][0]["investment"],
                pointWidth: 15,
                color: '#006399'
            },{
                name: 'Impact',
                data: ukRegionData["region"][0]["impact-data"],
                pointWidth: 15,
                color: '#99cdea'
            }]
        });
    });
;