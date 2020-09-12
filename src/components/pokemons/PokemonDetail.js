/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newPokemon } from '../../tools/mockData';

const PokemonDetail = ({ pokemon }) => (
  <div className="jumbotron">
    <h1>Pokemon Details</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <li>{pokemon.name}</li>
    <li><img src={pokemon.sprites.front_default} height="100px" width="100px" /></li>
    <li><Link to="/pokemons/">Back</Link></li>
  </div>
);

PokemonDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export function getPokemonByName(pokemons, name) {
  return pokemons.find(pokemon => pokemon.name === name) || null;
}

const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps.match.params;
  const pokemon = name && state.pokemons.length > 0
    ? getPokemonByName(state.pokemons, name)
    : newPokemon;
  return {
    pokemons: state.pokemons,
    pokemon,
  };
};

export default connect(mapStateToProps)(PokemonDetail);
