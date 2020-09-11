import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://pokeapi.co/api/v2/';

const getPokemonsArray = () => {
  const max = 200, min = 1;
  const pokeIdArray = [];
  let randId;
  for (let i = 0; i < 10; i++) {
    randId = Math.floor(Math.random() * (max - 1)) + min;
    pokeIdArray.push(randId);
  }
  return pokeIdArray;
}

export const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(baseUrl + `pokemon/${pokemon}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const getPokemons = async () => {
  return Promise.all(getPokemonsArray().map(pokeId => getPokemon(pokeId)));
};

export default getPokemons;
