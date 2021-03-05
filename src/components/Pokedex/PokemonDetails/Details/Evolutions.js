import {useEffect} from 'react';

const Evolutions = ({id})=>{
    //const[evolutionData, setEvolutionData] = useState();

    useEffect(() => {
        fetchPokeEvolutionData();
    });

    const fetchPokeEvolutionData= async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
        const data = await response.json();
        //console.log('evolutioin----',data);
    }

    return (
        <div className="evolution-wrapper">
            <p>Evolutions</p>
            <p>{id}</p>
        </div>
    )
}

export default Evolutions;