import {Line} from 'react-chartjs-2';

const PokeStats = (props)=>{
    const baseStatValues = props.stats.map(i=>i.base_stat);
    const statNames = props.stats.map(i=>i.stat.name);
    
    const data = {
        labels: statNames,
        datasets:[
            {
                label: 'Pokemon stat',
                data: baseStatValues
            }
        ]
    };
    
    
    return  (
        <div className="border-2 border-gray-500 rounded-xl p-5">
        <p>Pokemon Stat</p>
        <Line data={data}/>        
        </div>
    )
}

export default PokeStats;