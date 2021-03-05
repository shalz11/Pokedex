const PokeDetails = () => {
    return (
        <div className="details-page">
            <div className="title text-4xl text-center mb-4">Title</div>
            <div className="grid grid-cols-2 gap-2">
                <div className="img">img</div>
                <div className="abilities">Abilities</div>
                <div className="stats">stats</div>
                <div className="types">types</div>
                <div className="evolution col-span-2">Evolutions</div>

            </div>
            
        </div>
    )
}

export default PokeDetails
