/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const PokemonsPage = ({ pokemons }) => (
  <>
    {pokemons.map(pokemon => (
      <span>{pokemon.name}</span>
    ))}
  </>
);

PokemonsPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonsPage;
