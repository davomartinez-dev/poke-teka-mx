import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';
import apiCallsInProgress from './apiStatusReducer';
import filter from './filterReducer';

const rootReducer = combineReducers({ pokemons, apiCallsInProgress, filter });

export default rootReducer;
