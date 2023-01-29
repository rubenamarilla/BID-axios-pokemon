import axios from "axios";
import React, { useState } from "react";


const PokemonAxios = () => {
  const [pokemones, setPokemones] = useState([]);

  const obtenerPokemones = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0').then(response=>{
    setPokemones(response.data.results);
    console.log(response.data);
  });
    
  }
  return (
    <>
      <button onClick={obtenerPokemones}>Fetch Pokemons</button>
      <ol>
        {
          pokemones.map((pokemon, i)=> <li key={i}>{pokemon.name}</li>)
        }
      </ol>
    </>
  )
}

export default PokemonAxios