/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
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
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImg: {
    width: '68%',
    height: '68%',
  },
  name: {
    borderLeft: '5px solid #3F51B5',
    borderRight: '5px solid #3F51B5',
    borderBottom: '5px solid #3F51B5',
    width: '70%',
    textAlign: 'center',
    color: '#3F51B5',
    textDecoration: 'none',
  },
};

const PokemonList = ({ pokemons }) => {
  function handleScroll() {
    // eslint-disable-next-line max-len
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ul style={styles.ul}>
        {pokemons.map(pokemon => (
          <li key={pokemon.id} style={styles.li}>
            <Link to={`/pokemons/${pokemon.name}`} style={styles.name}><h2>{capitalizeWord(pokemon.name)}</h2></Link>
            <div style={styles.imgBox}>
              <img style={styles.mainImg} src={pokemon.sprites.other['official-artwork'].front_default} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
