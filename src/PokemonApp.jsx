import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const dispatch= useDispatch();
  const {isLoading,pokemons,page}= useSelector((state)=>state.pokemons);
  useEffect(()=>{
   dispatch(getPokemons());
  },[]);
  return (
    <>
    <h1>Pokemon</h1>
    <hr />
    <span>Loading: {isLoading ? 'true' : 'false'}</span>
    <ul>
        {pokemons.map((pokemon)=>{
          return <li key={pokemon.name}>{pokemon.name}</li>
        })}
    </ul>
    <button disabled={isLoading} onClick={()=>dispatch(getPokemons(page))}>
        Next page
    </button>
    </>
  )
}
