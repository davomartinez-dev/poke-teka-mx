/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import capitalizeWord from '../../tools/capitalizeWord';

const styles = {
  ul: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '5px solid #3F51B5',
    padding: 0,
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    borderBottom: '5px solid #3F51B5',
    borderLeft: '5px solid #3F51B5',
    borderRight: '5px solid #3F51B5',
    width: '100%',
  },
  name: {
    borderLeft: '5px solid #3F51B5',
    borderRight: '5px solid #3F51B5',
    borderBottom: '5px solid #3F51B5',
    width: '70%',
    textAlign: 'center',
  },
};

const PokemonList = ({ pokemons }) => (
  <ul style={styles.ul}>
    {pokemons.map(pokemon => (
      // eslint-disable-next-line max-len
      <li key={pokemon.id} style={styles.li}>
        <Link to={`/pokemons/${pokemon.name}`} style={styles.name}><h2>{capitalizeWord(pokemon.name)}</h2></Link>
        <img src={pokemon.sprites.other['official-artwork'].front_default} height="350px" width="300px" />
      </li>
    ))}
  </ul>
);

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
