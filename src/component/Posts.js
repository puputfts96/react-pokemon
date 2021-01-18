import React from 'react';
import Card from "./card";
import './card.css';

const Posts = ({ posts, loading, page }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  let texts='';
  let isHome=false;
  if (page!='home') {
    isHome=true;
  }
  {console.log(isHome)}

  return (
    <>
        {posts.map(post => (
            <div className='pokemon-item' key={post.id}>
              {!isHome ? (
                 <Card  name={post.name} ids={post.id} status={page} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + post.id + ".png"}/>
              ):(
                <Card  name={post.name} ids={post.key} status={page} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + post.id + ".png"}/>
              )}
            </div>
        ))}
    </>
  );
};

export default Posts;
