/* eslint-disable no-debugger */
/* eslint-disable react/jsx-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PokemonsPage = ({ pokemons }) => (
  <>
    {pokemons.map(pokemon => (
      <>
        <span>{`|${pokemon.title}|`}</span>
        <br />
      </>
    ))}
  </>
);

PokemonsPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps)(PokemonsPage);
