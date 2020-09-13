/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import capitalizeWord from '../../tools/capitalizeWord';

const PokemonList = ({ pokemons }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Height</th>
        <th>Weight</th>
      </tr>
    </thead>
    <tbody>
      {pokemons.map(pokemon => (
        <tr key={pokemon.id}>
          <td>
            <img src={pokemon.sprites.front_default} height="100px" width="100px" />
          </td>
          <td>
            <Link to={`/pokemon/${pokemon.name}`}>{capitalizeWord(pokemon.name)}</Link>
          </td>
          <td>{pokemon.height}</td>
          <td>{pokemon.weight}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
