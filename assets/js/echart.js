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
});