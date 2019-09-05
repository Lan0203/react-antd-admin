import React,{Component} from 'react';
import echarts from 'echarts';


class BasicBar extends Component{
    componentDidMount(){
        var myCharts=echarts.init(document.getElementById('basicBar'));
        var option = {
            tooltip:{
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月' ,'10月','11月','12月']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 次'
                }
            },
            series: [{
                data: [21, 11, 21, 22, 23, 20, 23, 22, 21, 23, 21, 22],
                type: 'bar'
            }]
        };
        myCharts.setOption(option);
    }
    render(){
        return(
            <div id='basicBar' style={{ width: '100%', height: '400px'}}></div>
        )
    }
    
}
export default BasicBar;