import React, { useEffect, useState } from 'react';

import { getAllPokemon, getPokemon } from './services/pokemonApi.js'

import Card from './components/Card';

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

  const loadingpokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }

  console.log(pokemonData)

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
          <ul>
            { pokemonData.map(pokemon => (
              <li>
                <Card pokemon={pokemon.data} />
              </li>
            )) }
          </ul>
        </>
      )
    }
    </div>
  );
}

export default App;
