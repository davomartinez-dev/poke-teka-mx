/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';
import * as pokemonActions from '../../redux/actions/pokemonActions';
import PokemonList from './PokemonsList';

const PokemonsPage = ({ pokemons, loadPokemons, loading }) => {
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
      <h2>Pokemons</h2>
      {loading
        ? <Spinner /> : (
          <>
            <PokemonList pokemons={pokemons} />
          </>
        )}
    </>
  );
};

PokemonsPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loadPokemons: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  loading: state.apiCallsInProgress > 0,
});

const mapDispatchToProps = dispatch => ({
  loadPokemons: bindActionCreators(pokemonActions.loadPokemons, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
