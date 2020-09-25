import * as types from '../actions/actionTypes';
import initialState from './initialState';

const pokemonReducer = (state = initialState.pokemons, action) => {
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return [...state, ...action.pokemons];
    default:
      return state;
  }
};
export default pokemonReducer;
