/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { newPokemon } from '../../tools/mockData';
import capitalizeWord from '../../tools/capitalizeWord';
import navbarTab from '../themes';

const PokemonDetail = ({ pokemon }) => (
  <div className="jumbotron">
    <h1>{capitalizeWord(pokemon.name)}</h1>
    <li><img src={pokemon.sprites.front_default} height="100px" width="100px" /></li>
    <li><img src={pokemon.sprites.back_default} height="100px" width="100px" /></li>
    <li>
      <Button variant="contained" color="primary">
        <Link to="/pokemons/" style={navbarTab}>Back</Link>
      </Button>
    </li>
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
