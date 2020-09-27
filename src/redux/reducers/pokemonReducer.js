import * as types from '../actions/actionTypes';
import initialState from './initialState';

const pokemonReducer = (state = initialState.pokemons, action) => {
  const keys = ['id'];
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return [...state, ...action.pokemons].filter(
        (s => o => (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join('|'))
        )(new Set()),
      );
    default:
      return state;
  }
};
export default pokemonReducer;
