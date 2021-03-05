import {Link} from 'react-router-dom';

const Layout = ({children})=>{
    return(
        <>
        <div className="header bg-gray-800 w-full text-center p-4 overflow-hidden">
            <Link to="/">
            <h2 className="text-4xl text-yellow-500">POKEDEX</h2>
            </Link>
        </div>
        <div className="pokedex-container max-w-5xl mx-auto my-10">
            {children}
        </div>    
        </>
    )
}

export default Layout;