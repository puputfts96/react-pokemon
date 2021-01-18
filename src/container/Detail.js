import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../dist/css/bootstrap.min.css';
import '../component/card.css';

import ReactDOM from "react-dom";
import Modal from "../component/Modal";
import '../component/modal.css'
import pokemonDatabase from "../pokemonDatabase";

const Detail = (id) => {
    const ids=id.match.params.id;
    const [pokemon, setPokemon] = useState([]);
    const [moves, setMove] = useState([]);
    const [modals, setModals] = useState(false);
    const [types, setType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [namepokemon, setNamePokemon] = useState({'name':'', 'id':'', 'status':false});
    
    
    // const moves=[];
    useEffect(() => {
        const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ids+'/');
        setPokemon(res.data);
        setMove(res.data.moves);
        setType(res.data.types);
        setLoading(false);
        };

        fetchPosts();
    }, []);
    
    if (loading) return "Loading..."
    
    const catchPokemon = id => {
        alert('ketangkep pokemon id '+id);
        // setPokedex(state => state.filter(p => p.id != id))
    }
    const modalOpen= () => {
        setModals(true);
        console.log(modals)
        // return 
    }
    const modalClose= () => {
        setModals(false);
        console.log(modals)
    }

    const onChangeName= e => {
        // let ids=pokemon.id;
        let datasearch = {
            name: e.target.value,
            id: pokemon.id
        };
        // console.log(pokemonDatabase.getPokemons(datasearch))
        let datas=pokemonDatabase.getPokemons(datasearch);
        console.log(datas)
        if(!datas){
            setNamePokemon({
                    'name':e.target.value, 
                    'id':pokemon.id, 
                    'status': true
                }
            )
        }
        
    }

    const saveTutorial= e => {
        let data = {
          name: namepokemon.name,
          id: namepokemon.id
        };
        if(namepokemon.status){
            pokemonDatabase.create(data)
            .then(() => {
                console.log("Created new item successfully!");
                modalClose()
            })
            .catch((e) => {
                console.log(e);
            });
        }else{
            alert('nama dan pokemon ini sudah pernah didaftarkan');
        }
        
    }

  return (
      
    <div className='main-topic'>
        <div className="right-picture">
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} />
            <Button color="warning" variant='warning' className='buttoncatch' onClick={e=> modalOpen(e)}>Tangkap</Button>
        </div>
        {/* {console.log(modals)} */}
        <Modal show={modals} handleClose={e => modalClose(e)} 
        handleName={e=>onChangeName(e)} handleSave={e=>saveTutorial(e)}>
            
        </Modal>
        <div className="left-text">
            <h2>{pokemon.name}</h2> 
            <br></br>
            <h3>Types</h3>
            <div className='list'>
                <ul className="ullist">
                    {types.map((typ, index) =>
                        <li key={index}>{typ.type.name}</li>
                    )}
                </ul>
            </div>
            <br></br>
            <h3>Moves</h3>
            <div className='list'>
                <ul className="ullist">
                {moves.map((movs, index) =>
                    <li key={index}>{movs.move.name}</li>
                )}
                </ul>
            </div>
        </div>        
    </div>
  );
};

export default Detail;
