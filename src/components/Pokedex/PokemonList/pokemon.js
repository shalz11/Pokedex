//import InfiniteScroll from 'react-infinite-scroll-component';
import {Link} from 'react-router-dom';
//import { useInfiniteQuery } from 'react-query';
//import local components
import PokemonTitle from './PokemonTitle';
import PokemonAvatar from './PokemonAvatar';
import PokemonId from './PokemonId';

const Pokemon=({pokemonList})=>{   
    // console.log(pokemonList);
    return(
        <div className="list flex flex-wrap justify-evenly">            
            {
                pokemonList.map((poke,index)=>(
                    <Link to={`/PokemonDetails/${index+1}`} key={index}>
                        <div key={index+1} className="pokemon-box group w-48 h-56 p-2 m-3 cursor-pointer rounded-md transform hover:scale-110 motion-reduce:transform-none border-2 border-dotted border-indigo-300 hover:border-red-400">
                        <PokemonAvatar url={poke.url} name={poke.name}/>
                        <PokemonId pokeid={index+1}/>            
                        <PokemonTitle name={poke.name} url={poke.url}/>
                    </div>
                    </Link>
                ))
            }           
        </div>
    )
}

export default Pokemon;