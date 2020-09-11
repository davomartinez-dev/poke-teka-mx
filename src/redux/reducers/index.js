import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';

const rootReducer = combineReducers({ pokemons });

export default rootReducer;
