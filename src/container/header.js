import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom'


const header = () =>{
    return(
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Daftar Pokemon</NavLink></li>
                {/* <li><NavLink to="/detail/">About</NavLink></li> */}
                <li><NavLink to="/mypokemon/">Pokemonku</NavLink></li>
            </ul>
        </nav>
    )
}

export default header;