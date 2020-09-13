/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import capitalizeWord from '../../tools/capitalizeWord';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
  },
  label: {
    display: 'flex',
    width: '70%',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    margin: '0 10px',
  },
});

const PokemonFilter = ({ filter, changeFilter, pokeTypes }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label className={`mr-sm-2 ${classes.label}`} htmlFor="type">
        Type
        <select
          defaultValue={filter}
          onChange={e => changeFilter(e.target.value)}
          className={`form-control form-control-lg ${classes.form}`}
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
};

export default PokemonFilter;

PokemonFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  pokeTypes: PropTypes.array.isRequired,
};
