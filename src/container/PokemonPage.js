import React, { useState, useEffect } from 'react';
import Posts from '../component/Posts';
import Pagination from '../component/Pagination';
import axios from 'axios';
// import './App.css';
import '../component/card.css';
import pokemonDatabase from "../pokemonDatabase";
import firebase from "../firebase";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const db = firebase.database().ref("/pokemons");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      var res=[];
      let ress={};
      var starCountRef = firebase.database().ref('pokemons/');
      var snapshot = await starCountRef.once('value');
      if(snapshot.exists()) {
        snapshot.forEach(function(childSnapshot) {  
          var val = childSnapshot.val();
          console.log(childSnapshot.key);
          ress={
            'name':val.name,
            'id':val.id, 
            'key':childSnapshot.key
          }
          res.push(ress);
        });
        setPokemon(res);

      } else { 
        res = [];
        setPokemon(res);
      }
      setLoading(false);
      return res;
    }
    fetchPosts();
  }, [currentPageUrl])
  

  if (loading) return "Loading..."
  
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Daftar Pokemon yang Tertangkap </h1>
      <div className='row'>
        <Posts posts={pokemon} loading={loading} page='mine'/>
      </div>
      
    </div>
  );
};

export default PokemonPage;
