import { useEffect, useState } from 'react';

const PokemonAvatar = ({url, name})=>{
    const [imgSrc, setImgSrc] = useState({});    

    useEffect(() => {
        fetchImages();
    })
    
    const fetchImages = () =>{
        fetch(url)
        .then(response=>(response.json()))
        .then(result => {            
            setImgSrc(result.sprites.other.dream_world.front_default);               
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return(
        <div className="poke-avatar w-full h-40 bg-gray-100">
            <img src={imgSrc} alt={name} className="w-full h-full"/>
        </div>
    )
}

export default PokemonAvatar;