/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import Spinner from '../common/Spinner';
import * as pokemonActions from '../../redux/actions/pokemonActions';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';
import PokemonSearch from './PokemonSearch';

const PokemonsPage = ({
  pokemons, loadPokemons, loading, changeFilter, filter, pokeTypes,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      loadPokemons().catch(error => {
        toast.error(`Loading pokemons fail: ${error.message}`, { autoClose: false });
      });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line max-len
    const results = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  const handleScroll = () => {
    // eslint-disable-next-line max-len
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    if (filter !== 'All' || searchTerm !== '') {
      setIsFetching(false);
      return;
    }
    loadPokemons().then(() => {
      setIsFetching(false);
      setSearchResults(pokemons);
    }).catch(error => {
      toast.error(`Loading pokemons fail: ${error.message}`, { autoClose: false });
    });
  }, [isFetching]);

  useEffect(() => () => {
  }, []);

  const pokeSelected = searchResults.length <= 0 ? pokemons : searchResults;
  const _pokemons = pokeSelected.reduce((result, e) => {
    if (filter === 'All' || e.types[0].type.name === filter) {
      result.push(e);
    }
    return result;
  }, []);

  return (
    <>
      {loading && isFetching === false
        ? <Spinner /> : (
          <>
            <PokemonFilter
              filter={filter}
              changeFilter={changeFilter}
              pokeTypes={pokeTypes}
            />
            <PokemonSearch value={searchTerm} changeSearch={handleChange} />
            <PokemonList pokemons={_pokemons} />
            {isFetching && <Spinner />}
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
