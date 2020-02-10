import axios from 'axios';

export async function getAllPokemon(url) {
  return axios.get(url);
}

export async function getPokemon(data) {
  return axios.get(data.url);
}