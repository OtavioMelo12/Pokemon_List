import React, { useEffect, useState } from 'react';

import { getAllPokemon, getPokemon } from './services/pokemonApi.js'

import { Container } from "./styles.js"

import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      await loadingpokemon(response.data.results);

      setLoading(false);
    }

    fetchData();
  },[])

  const next = async () => {
    if (!next) return;

    setLoading(true);
    let response = await getAllPokemon(nextUrl);
    await loadingpokemon(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    setLoading(false);
    console.log(prevUrl)
    console.log(nextUrl)

  }

  const prev = async () => {
    if(!prevUrl) return

    setLoading(true);
    let response = await getAllPokemon(prevUrl);
    await loadingpokemon(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    setLoading(false);
    console.log(prevUrl)
    console.log(nextUrl)

  }

  const loadingpokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <div>
      { loading 
      ? (
        <>
          <h1>Loading..</h1>
        </>
      ) 
      : (
        <>
          <Container>
            <Navbar />

            <div className="btn">
              <button onClick={prev}>Previous</button>
              <button onClick={next}>Next</button>
            </div>

            <div className="grid-container">
              {pokemonData.map((pokemon, i) => (
                <Card key={i} pokemon={pokemon} />
                ))}
            </div>

            <div className="btn">
              <button onClick={prev}>Previous</button>
              <button onClick={next}>Next</button>
            </div>

          </Container>
        </>
      )
    }
    </div>
  );
}

export default App;
