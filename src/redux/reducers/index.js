import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({ pokemons, apiCallsInProgress });

export default rootReducer;
