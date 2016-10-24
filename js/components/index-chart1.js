function indexChart1 (xaxisData, investmentData, investmentColor, impactData, impactColor) {
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
                text : 'Investment vs. Impact (Contains dummy data)',
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
            categories: xaxisData,
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
        series: [{
            name: 'Investment',
            data: investmentData,
            pointWidth: 15,
            color: investmentColor
        },{
            name: 'Impact',
            data: impactData,
            pointWidth: 15,
            color: impactColor
        }]
    });
};
