import {useState} from 'react';
//import {Line} from 'react-chartjs-2';

const LineChartStats = ({name,stats}) =>{
    const [chartData, setChartData] = useState({});
    //console.log('stats data ----', stats);
    //const chartLabels = stats.map(item=>(item.stat.name));
    //const chartStatData = stats.map(item=>(item.base_stat));
    // const data = {
    //     labels: chartLabels,
    //     datasets:[
    //         {
    //             label: name+ ' stats',
    //             data: chartStatData
    //         }
    //     ]
    // }
    const data = {
        labels: ['hp','attack'],
        datasets:[
            {
                label: name+ ' stats',
                data: [40,80]
            }
        ]
    }
    setChartData(data);
    
        return (
        <div>
            {/* <Line data={chartData}/> */}
            Chart
        </div>
    )
}

export default LineChartStats;