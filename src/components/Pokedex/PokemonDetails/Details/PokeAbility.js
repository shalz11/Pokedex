import PokeType from './PokeType';

const PokeAbility = (props)=>{
    //console.log(props.abilities);
    return (
        <>
        <div className="rounded-xl w-full p-5 capitalize overflow-hidden bg-blue-400">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-white mb-1">Height</p>
                    <p className="text-xl font-normal font-mono">{props.height}'</p>
                </div>
                <div className="row-span-2">
                    <p className="text-white mb-1">Abilities</p>
                    <div className="text-xl font-normal font-mono list-none">
                    {
                        props.abilities.map((i,index)=>(
                        <li key={index}>{i.ability.name}</li>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <p className="text-white mb-1">Weight</p>
                    <p className="text-xl font-normal font-mono">{props.weight}lbs</p>
                </div>
            </div>          
        </div>
        <PokeType types={props.types}/>
        </>
    )
}

export default PokeAbility;