import React, { useState, useEffect } from 'react';
import Posts from '../component/Posts';
import Pagination from '../component/Pagination';
import axios from 'axios';
// import './App.css';
import '../component/card.css';

const Home = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel;
    const fetchPosts = async () => {
      setLoading(true)
      const res1= await axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        return res;
      });
      const details = await Promise.all(res1.data.results.map((el) => {
        return axios.get(el.url)
      }));
      const listpokemon=[];
      for (let index = 0; index < details.length; index++) {
        listpokemon.push(details[index].data);
      }
      setPokemon(listpokemon)
    }
    fetchPosts();
  }, [currentPageUrl])
  
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."
  
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Daftar Pokemon </h1>
      <div className='row'>
        <Posts posts={pokemon} loading={loading} page='home'/>
      </div>
      <div className='buttondiv'>
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </div>
      
    </div>
  );
};

export default Home;
