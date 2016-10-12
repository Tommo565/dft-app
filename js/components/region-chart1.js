function regionChart1 (xaxisData, bcrData) {
        $('#region-right-top').highcharts({
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
                    text : 'Benefits & Costs',
                    style: {"font-weight":"bold",
                            "font-size": "14px",
                            "padding": 0,
                            "margin": 0}
                }, 
            legend : {
                    enabled: false,
                },
            xAxis: {
                categories: allNeSchemes["x-data"],
                crosshair: true,
                tickColor: null,
                title: {
                    text:''
                },
                labels: {
                  enabled: false
                }                
            },
            yAxis: {
                title: {
                    text: 'Benefit / Cost (£m)'
                },
                labels: {
                    formatter: function () {
                        return '£' + this.value + 'm';
                }            
            }
            },
            tooltip: {
                headerFormat: '<span style="font-size:14px;font-weight:bold">{point.key}</span><table>',
                pointFormat:  '<tr><td style="color:{series.color};padding:0"></td>' +
                              '<td style="padding:0"><b> £{point.y:.0f}m</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0,
                    borderWidth: 0,
                    groupPadding: 0.025
                }
            },
            series: [{
                name: 'Benefit / Cost',
                data: bcrData,
                color: '#006399',
                negativeColor: '#f2cfb9',
            }]
        });
    };
;


