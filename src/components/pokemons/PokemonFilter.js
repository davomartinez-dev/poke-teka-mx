/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import capitalizeWord from '../../tools/capitalizeWord';

const PokemonFilter = ({ filter, changeFilter, pokeTypes }) => (
  <div id="category-filter">
    <label htmlFor="category">
      Type
      <select
        defaultValue={filter}
        onChange={e => changeFilter(e.target.value)}
      >
        <option key="All" value="All">
          All
        </option>
        {pokeTypes.map(cat => (
          <option key={cat} value={cat}>
            {capitalizeWord(cat)}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default PokemonFilter;

PokemonFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  pokeTypes: PropTypes.array.isRequired,
};
