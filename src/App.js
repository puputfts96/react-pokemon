// import logo from './logo.svg';
import './App.css';
import Header from './container/header'; 
import Detail from './container/Detail'; 
// import Test from './container/testmodal'; 
import Home from './container/Home';
import PokemonPage from './container/PokemonPage';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/mypokemon" component={PokemonPage}/>
          {/* <Route path="/test" component={Test}/> */}
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
