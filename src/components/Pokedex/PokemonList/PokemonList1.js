import { useState, useEffect } from 'react';
//import local components
import {getPokemonList} from '../../../API';
import Pokemon from './pokemon';

const PokemonList=()=>{
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    
    const scrollHandler = (event) =>{
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        // console.log('scrollTop-',scrollTop);
        // console.log('clientHeight-',clientHeight);
        // console.log('scrollHeight-',scrollHeight);
        if(scrollHeight - scrollTop === clientHeight){
            setOffset(prev=>prev+20);
            console.log('offset---',offset);
        }
    }

    useEffect(() => {
        const loadPokemonList = async()=>{
            setLoading(true);
            const newPokeList = await getPokemonList(offset);
            setPokemon((prev)=>[...prev, ...newPokeList]);
            setLoading(false);
        } 

        loadPokemonList();
    }, [offset])

    return(
        <div onScroll={scrollHandler} className="pokemon-list flex flex-wrap justify-evenly bg-green-200 h-80 overflow-auto">
            <Pokemon pokemonList={pokemon}/>
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default PokemonList;