/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../redux/actions/pokemonActions';
import PokemonList from './PokemonsList';

const PokemonsPage = ({ pokemons, loadPokemons }) => {
  useEffect(() => {
    if (pokemons.length === 0) {
      loadPokemons().catch(error => {
        // eslint-disable-next-line no-alert
        alert(`Loading pokemons failed ${error}`);
      });
    }
  }, [pokemons]);

  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  );
};

PokemonsPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loadPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  loadPokemons: bindActionCreators(pokemonActions.loadPokemons, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
