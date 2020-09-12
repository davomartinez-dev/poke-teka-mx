/* eslint-disable no-useless-catch */
import * as types from './actionTypes';
import getPokemons from '../../api/pokeApi';

// Action Creators.

export const loadPokemonsSuccess = pokemons => ({ type: types.LOAD_POKEMONS_SUCCESS, pokemons });

// Thunks.

export const loadPokemons = () => async dispatch => {
  try {
    const pokemons = await getPokemons();
    dispatch(loadPokemonsSuccess(pokemons));
  } catch (error) {
    throw error;
  }
};
