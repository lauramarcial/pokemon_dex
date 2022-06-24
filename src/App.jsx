import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Tarjetas';
import { getPokemon, getAllPokemon } from './services/Fetch';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])

  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <Navbar />
      <div>
          <>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
          </>
      </div>
    </>
  );
}

export default App;
