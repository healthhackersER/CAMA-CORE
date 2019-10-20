app.title = "CAMA";

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['MED','PAIN','Mood']
    },
    xAxis: [
        {
            type: 'category',
            data: ['MO','TUE','WED','THU','FR','SA','SU','MO','TUE','WED','THU','FR','SA','SU'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'X',
            min: 0,
            max: 10,
            interval: 50,
        },
        {
            type: 'value',
            name: 'Y',
            min: 0,
            max: 10,
            interval: 5,
        }
    ],
    dataZoom: [
            {
                show: true,
                start: 94,
                end: 100
            },
            {
                type: 'inside',
                start: 94,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
    series: [
        {
            name:'PAIN',
            type:'bar',
            data:[0, 0, 10, 0, 0, 2, 5, 3, 1, 7, 4, 3]
        },
        {
            name:'MED',
            type:'bar',
            data:[0, 2, 5, 6, 10, 10, 10, 10, 10, 10, 10, 10]
        },
        {
            name:'Mood',
            type:'line',
            yAxisIndex: 0,
            data:[3, 5, 2, 4, 6, 5, 8, 3, 2, 4, 10, 10]
        }
    ]
};
