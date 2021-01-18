// import logo from './logo.svg';
import './App.css';
import Header from './container/header'; 
import Detail from './container/Detail'; 
// import Test from './container/testmodal'; 
import Home from './container/Home';
import PokemonPage from './container/PokemonPage';

import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <HashRouter  >
      <div className="App">
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/mypokemon" component={PokemonPage}/>
          {/* <Route path="/test" component={Test}/> */}
        </Switch>
      </div>
      </HashRouter>
  );
}

export default App;
