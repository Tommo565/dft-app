var chartRightBottom =  $(function () {
        $('#index-right-bottom').highcharts({
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
                    text : 'Impact Breakdown',
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
                title: {
                    text: 'Net Benefit Ratio'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: [{
                name: 'Economic',
                data: ukRegionData["region"][0]['economic'],
                pointWidth: 10,
                color: '#006399'
            }, {
                name: 'Environmental',
                data: ukRegionData["region"][0]['environmental'],
                pointWidth: 10,
                color: '#66b4df'
            }, {
                name: 'Social',
                data: ukRegionData["region"][0]['social'],
                pointWidth: 10,
                color: '#b3daef'
            }]
        });
    });
;