/* eslint-disable no-useless-catch */
import * as types from './actionTypes';
import getPokemons from '../../api/pokeApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

// Action Creators.
export const loadPokemonsSuccess = pokemons => ({ type: types.LOAD_POKEMONS_SUCCESS, pokemons });

// Thunks.
export const loadPokemons = () => async dispatch => {
  dispatch(beginApiCall());
  try {
    const pokemons = await getPokemons();
    dispatch(loadPokemonsSuccess(pokemons));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};
