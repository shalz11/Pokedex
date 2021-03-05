const PokemonTitle = ({name,url})=>{
    return(
        <div className="poke-title text-center bg-transparent border-0 group-hover:text-red-700 group-hover:text-xlg group-hover:font-bold">
        <button className="capitalize">{name}</button>
        </div>
    )
}

export default PokemonTitle;