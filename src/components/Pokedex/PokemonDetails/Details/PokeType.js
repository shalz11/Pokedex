const PokeType = (props)=>{
    
    const typeNames = props.types.map(item=>(item.type.name));
    
    return(
        <div>
            <p className="text-2xl font-semibold text-gray-800 mt-10 pb-5">Types</p>
            {
                typeNames.map((name,index)=>{
                    if (name ==='water')
                    {
                        return <button className="p-3 mx-2 rounded-xl capitalize bg-blue-500 text-white">
                                {name}
                            </button>
                    }
                    else if (name ==='grass')
                    { 
                        return <button className="p-3 mx-2 rounded-xl capitalize bg-green-500 text-white">
                           {name}
                        </button>
                    }
                    else if (name ==='poison')
                    { 
                        return <button className="p-3 mx-2 rounded-xl capitalize bg-red-500 text-white">
                           {name}
                        </button>
                    }
                    else if (name ==='fire')
                    { 
                        return <button className="p-3 mx-2 rounded-xl capitalize bg-yellow-600 text-white">
                           {name}
                        </button>
                    }
                    else 
                        return <button className="p-3 mx-2 border-2 border-gray-500 bg-transparent rounded-xl capitalize">{name}</button>;
                               
                })
            }            
        </div>
    )
}

export default PokeType;