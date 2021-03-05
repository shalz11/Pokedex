import { useState, useEffect } from 'react';
//import local components
import Pokemon from './pokemon';
import {PacmanLoader} from 'react-spinners';

const PokemonList=()=>{
    const [pokemon, setPokemon] = useState();

    const showList = ()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response=>response.json())
        .then(data => {
            setPokemon(data);
            //console.log(data);
            //console.log('next url----',pokemon.next);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
        showList();
    }, [])

    //console.log('pokemon---',pokemon);
    return(
        <div className="pokemon-list">
            {pokemon ? 
          
                <Pokemon pokemonList={pokemon.results}/>
          
            :
            <PacmanLoader loading color="orange"/>
            }
        </div>
    )
}

export default PokemonList;