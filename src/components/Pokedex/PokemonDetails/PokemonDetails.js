import { useEffect, useState } from 'react';
import PageTitle from './Details/PageTitle';
import Avatar from './Details/Avatar';
import PokeType from './Details/PokeType';
import PokeAbility from './Details/PokeAbility';
import Evolutions from './Details/Evolutions';
import PokeStats from './Details/PokeStats';
import {PacmanLoader} from 'react-spinners';


const PokemonDetails = ({match}) =>{
    const [pokeDetails, setPokeDetails] = useState();
    //const [pokeSpecies, setPokeSpecies] = useState();
    const [imgSrc, setImgSrc] = useState([]);

    const fetchPokemonDetail = async() =>{
        const details = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
        const data = await details.json();


        //const species = await fetch()
       
        setPokeDetails(data);
        setImgSrc(data.sprites.other.dream_world.front_default);
    }

    useEffect(() => {        
        fetchPokemonDetail();
    });   
    
    return(
        <div className="pokeDetail p-10">    
            <div className="grid grid-cols-2 gap-9">
                {
                pokeDetails ? [
                    <div className="col-span-2"><PageTitle title={pokeDetails.name}/></div>, 
                    <div><Avatar url={imgSrc} name={pokeDetails.name}/></div>,
                    <div><PokeAbility abilities={pokeDetails.abilities} height={pokeDetails.height} weight={pokeDetails.weight} types={pokeDetails.types}/></div>,
                    <div><PokeStats stats={pokeDetails.stats}/></div>,
                    // <div><PokeType types={pokeDetails.types}/></div>,
                    //<div className="col-span-2 border-2 border-gray-800"><Evolutions id={match.params.id}/></div>                    
                ]   : <PacmanLoader loading color="orange"/>
            }

            </div>                        
        </div>
    )
}

export default PokemonDetails;