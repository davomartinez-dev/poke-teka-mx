/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import Spinner from '../common/Spinner';
import * as pokemonActions from '../../redux/actions/pokemonActions';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';

const PokemonsPage = ({
  pokemons, loadPokemons, loading, changeFilter, filter, pokeTypes,
}) => {
  useEffect(() => {
    if (pokemons.length === 0) {
      loadPokemons().catch(error => {
        toast.error(`Loading pokemons fail: ${error.message}`, { autoClose: false });
      });
    }
  }, [pokemons]);

  // eslint-disable-next-line no-underscore-dangle
  const _pokemons = pokemons.reduce((result, e) => {
    if (filter === 'All' || e.types[0].type.name === filter) {
      result.push(e);
    }
    return result;
  }, []);

  return (
    <>
      {loading
        ? <Spinner /> : (
          <>
            <PokemonFilter filter={filter} changeFilter={changeFilter} pokeTypes={pokeTypes} />
            <PokemonList pokemons={_pokemons} />
          </>
        )}
    </>
  );
};

PokemonsPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loadPokemons: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  pokeTypes: PropTypes.array.isRequired,
};

const filterTypes = pokemons => {
  const pokeTypes = pokemons.map(pokemon => (pokemon.types[0].type.name));
  return pokeTypes.filter((a, b) => pokeTypes.indexOf(a) === b);
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => {
  const pokeTypes = filterTypes(state.pokemons);
  const { filter } = state;
  return {
    pokemons: state.pokemons,
    loading: state.apiCallsInProgress > 0,
    pokeTypes,
    filter,
  };
};

const mapDispatchToProps = dispatch => ({
  loadPokemons: bindActionCreators(pokemonActions.loadPokemons, dispatch),
  changeFilter: bindActionCreators(pokemonActions.changeFilter, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
