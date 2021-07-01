$(function() {
    if ($('#chart_Assets').length) {
        let chartAssets = {
            baseOption: {
                xAxis: [
                    {
                        data: ['2018', '2019','2020'],
                    }
                ],
                series: [
                    {
                        name: 'TOTAL ASSETS',
                        showBackground: true,
                        barWidth: '30',
                        data: [
                            {
                                value: 469.25,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 448.82,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 678.96,
                                itemStyle: {color: '#1294A6'}
                            }
                        ]
                    }
                ]
            },
        }
        chart.render('bar', 'chart_Assets', chartAssets);
    }

    if ($('#chart_Revenues').length) {
        let chartRevenue  = {
            baseOption: {
                xAxis: [
                    {
                        data: ['2018', '2019','2020'],
                    }
                ],
                series: [
                    {
                        name: 'TOTAL REVENUE',
                        barWidth: '30',
                        data: [
                            {
                                value: 469.25,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 448.82,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 678.96,
                                itemStyle: {color: '#1294A6'}
                            }
                        ]
                    }
                ]
            },
        }
        chart.render('bar', 'chart_Revenues', chartRevenue);
    }
    
    if ($('#chart_Profit').length) {
        let chartProfit = {
            baseOption: {
                xAxis: [
                    {
                        data: ['2561', '2562','2563'],
                    }
                ],
                series: [
                    {
                        name: 'NET PROFIT',
                        barWidth: '30',
                        data: [
                            {
                                value: 469.25,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 448.82,
                                itemStyle: {color: '#071866'}
                            },
                            {
                                value: 678.96,
                                itemStyle: {color: '#1294A6'}
                            }
                        ]
                    }
                ]
            },
        }
        chart.render('bar', 'chart_Profit', chartProfit);
    }

    if ($('#chart_shareholder').length) {
        var myChart_shareholder = echarts.init(document.getElementById('chart_shareholder'));

        
        var option_Assets_Desktop = {
            textStyle: {
                fontFamily: "Bai Jamjuree",
            },
            title: {
                text: "TOP SHAREHOLDERS",
                top: 40,
                left: "52.5%",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "#071866"
                },
            },
            tooltip: {
                trigger: "item",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderWidth: 0,
                borderRadius: 0,
                formatter: function (params) {
                    // marker is an HTML tag
                    var res = '<span class="text-blue font-weight-bold">' + params.name + '</span>' + '<br>' + '<span style="display:inline-block;margin-right:5px;top;5px;border-radius:0;width:16px;height:16px;background-color:' + params.color + ';' + '>' + params.marker + '</span>' + '<span style="line-height: 24px">' + params.value + '</span>';
                    // console.log(params, params.name, params.marker, params.value, params.color);
                    return res;
                },
            },
            legend: {
                top: 90,
                left: "52.5%",
                orient: "vertical",
                itemWidth: 16,
                itemHeight: 16,
                icon: "rect",
                textStyle: {
                    fontSize: 12,
                    padding: [1, 1, 1, 10]
                }
            },
            series: [
                {
                    type: "pie",
                    center: ["25%", "50%"],
                    radius: ["50%", "75%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "top"
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 1048,
                            name: "SAINTMED Public Company Limited. 1",
                            itemStyle: {
                                color: "#002842"
                            },
                        },
                        {
                            value: 735, 
                            name: "SAINTMED Public Company Limited. 2",
                            itemStyle: {
                                color: "#BEC8CF"
                            },
                        },
                        {
                            value: 580, 
                            name: "SAINTMED Public Company Limited. 3",
                            itemStyle: {
                                color: "#E4E8EB"
                            },
                        },
                        {
                            value: 484, 
                            name: "SAINTMED Public Company Limited. 4",
                            itemStyle: {
                                color: "#404142"
                            },
                        },
                        {
                            value: 450, 
                            name: "SAINTMED Public Company Limited. 5",
                            itemStyle: {
                                color: "#808080"
                            },
                        },
                        {
                            value: 300, 
                            name: "Other",
                            itemStyle: {
                                color: "#C8C8C8"
                            },
                        }
                    ]
                }
            ]
        }

        var option_Assets_Mobile = {
            textStyle: {
                fontFamily: "Bai Jamjuree",
            },
            title: {
                text: "TOP SHAREHOLDERS",
                textAlign: "auto",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#071866"
                },
            },
            tooltip: {
                trigger: "item",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderWidth: 0,
                borderRadius: 0,
                formatter: function (params) {
                    // marker is an HTML tag
                    var res = '<span class="text-blue font-weight-bold">' + params.name + '</span>' + '<br>' + '<span style="display:inline-block;margin-right:5px;top;5px;border-radius:0;width:16px;height:16px;background-color:' + params.color + ';' + '>' + params.marker + '</span>' + '<span style="line-height: 24px">' + params.value + '</span>';
                    // console.log(params, params.name, params.marker, params.value, params.color);
                    return res;
                },
            },
            legend: {
                left: 0,
                bottom: 20,
                orient: "horizontal",
                itemWidth: 16,
                itemHeight: 16,
                icon: "rect",
                textStyle: {
                    fontSize: 12,
                    padding: [1, 1, 1, 10]
                }
            },
            series: [
                {
                    type: "pie",
                    center: ["50%", "42%"],
                    radius: [75, 125],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "top"
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 1048,
                            name: "SAINTMED Public Company Limited. 1",
                            itemStyle: {
                                color: "#002842"
                            },
                        },
                        {
                            value: 735, 
                            name: "SAINTMED Public Company Limited. 2",
                            itemStyle: {
                                color: "#BEC8CF"
                            },
                        },
                        {
                            value: 580, 
                            name: "SAINTMED Public Company Limited. 3",
                            itemStyle: {
                                color: "#E4E8EB"
                            },
                        },
                        {
                            value: 484, 
                            name: "SAINTMED Public Company Limited. 4",
                            itemStyle: {
                                color: "#404142"
                            },
                        },
                        {
                            value: 450, 
                            name: "SAINTMED Public Company Limited. 5",
                            itemStyle: {
                                color: "#808080"
                            },
                        },
                        {
                            value: 300, 
                            name: "Other",
                            itemStyle: {
                                color: "#C8C8C8"
                            },
                        }
                    ]
                }
            ]
        };

        var option_Assets_Mobile_xs = {
            textStyle: {
                fontFamily: "Bai Jamjuree",
            },
            title: {
                text: "TOP SHAREHOLDERS",
                textAlign: "auto",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#071866"
                },
            },
            tooltip: {
                trigger: "item",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderWidth: 0,
                borderRadius: 0,
                formatter: function (params) {
                    // marker is an HTML tag
                    var res = '<span class="text-blue font-weight-bold">' + params.name + '</span>' + '<br>' + '<span style="display:inline-block;margin-right:5px;top;5px;border-radius:0;width:16px;height:16px;background-color:' + params.color + ';' + '>' + params.marker + '</span>' + '<span style="line-height: 24px">' + params.value + '</span>';
                    // console.log(params, params.name, params.marker, params.value, params.color);
                    return res;
                },
            },
            legend: {
                left: 0,
                bottom: 20,
                orient: "horizontal",
                itemWidth: 16,
                itemHeight: 16,
                icon: "rect",
                textStyle: {
                    fontSize: 12,
                    padding: [1, 1, 1, 10]
                }
            },
            series: [
                {
                    type: "pie",
                    center: ["50%", "35%"],
                    radius: [60, 110],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "top"
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 1048,
                            name: "SAINTMED Public Company Limited. 1",
                            itemStyle: {
                                color: "#002842"
                            },
                        },
                        {
                            value: 735, 
                            name: "SAINTMED Public Company Limited. 2",
                            itemStyle: {
                                color: "#BEC8CF"
                            },
                        },
                        {
                            value: 580, 
                            name: "SAINTMED Public Company Limited. 3",
                            itemStyle: {
                                color: "#E4E8EB"
                            },
                        },
                        {
                            value: 484, 
                            name: "SAINTMED Public Company Limited. 4",
                            itemStyle: {
                                color: "#404142"
                            },
                        },
                        {
                            value: 450, 
                            name: "SAINTMED Public Company Limited. 5",
                            itemStyle: {
                                color: "#808080"
                            },
                        },
                        {
                            value: 300, 
                            name: "Other",
                            itemStyle: {
                                color: "#C8C8C8"
                            },
                        }
                    ]
                }
            ]
        };

        
        if(window.matchMedia("(max-width: 575px)").matches){
            console.log('mobile_xs');
            myChart_shareholder.setOption(option_Assets_Mobile_xs);
        }
        else if(window.matchMedia("(max-width: 767px)").matches){
            console.log('mobile');
            myChart_shareholder.setOption(option_Assets_Mobile);
        }
        else {
            console.log('desktop');
            myChart_shareholder.setOption(option_Assets_Desktop);
        }
    }

    window.addEventListener('resize',function(){
        chart.resize();
    })
});