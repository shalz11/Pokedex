import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import local components
import Layout from './components/Layout/Layout';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetails from './components/Pokedex/PokemonDetails/PokemonDetails';
function App() {
  return (
    <Router>
    <div className="pokedex">
      <Layout>
        <Switch>
          <Route exact path="/" component={Pokedex}/>
          <Route path="/PokemonDetails/:id" component={PokemonDetails}/>
        </Switch>
      </Layout>      
    </div>
    </Router>
  );
}

export default App;
