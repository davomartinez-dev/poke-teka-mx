import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

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
    color: '#3F51B5',
  },
  form: {
    width: '80%',
    margin: '0 10px',
  },
});

const PokemonSearch = ({ value, changeSearch }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label className={`mr-sm-2 ${classes.label}`} htmlFor="type">
        Search
        <input
          className={`form-control form-control-lg ${classes.form}`}
          type="text"
          value={value}
          placeholder="Pokemon name here! "
          onChange={changeSearch}
        />
      </label>
    </div>
  );
};

PokemonSearch.propTypes = {
  value: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
};

export default PokemonSearch;
