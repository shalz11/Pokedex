export const getPokemonList = async(offset) =>{
const pokeList = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`)).json();

    return pokeList.results;

    // .then(response=>response.json())
    // .then(data => {
    //     //setPokemon(data.results);
    //     return data.results;
    //     //console.log(data.results);
    // })
    // .catch(error=>{
    //     console.log(error);
    // }))
}