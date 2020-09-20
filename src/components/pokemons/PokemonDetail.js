/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Doughnut, Bar } from 'react-chartjs-2';
import { newPokemon } from '../../tools/mockData';
import capitalizeWord from '../../tools/capitalizeWord';
import navbarTab from '../themes';
import PokemonDetailTable from './PokemonDetailTable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  backButton: {
    margin: '20px 0',
  },
  ulStyle: {
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const setChartAttDefHpSp = (att, def, hp, speed) => ({
  labels: [
    'Attack',
    'Defense',
    'Hp',
    'Speed',
  ],
  datasets: [{
    data: [att, def, hp, speed],
    backgroundColor: [
      '#FF6384',
      '#FFCE56',
      '#3fdb63',
      '#36A2EB',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#FFCE56',
      '#3fdb63',
      '#36A2EB',
    ],
  }],
});

const setChartHeiWei = (height, weight) => ({
  datasets: [
    {
      label: 'Height',
      backgroundColor: 'rgba(48,63,159,0.2)',
      borderColor: 'rgba(48,63,159,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(48,63,159,0.4)',
      hoverBorderColor: 'rgba(48,63,159,1)',
      data: [height],
    },
    {
      label: 'Weight',
      backgroundColor: 'rgba(51,133,40,0.2)',
      borderColor: 'rgba(51,133,40,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(51,133,40,0.4)',
      hoverBorderColor: 'rgba(51,133,40,1)',
      data: [weight],
    },
  ],
});

const PokemonDetail = ({ pokemon }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>{capitalizeWord(pokemon.name)}</h1>
            <img src={pokemon.sprites.other['official-artwork'].front_default} height="400px" width="340px" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <img src={pokemon.sprites.back_default} height="200px" width="200px" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <img src={pokemon.sprites.front_default} height="200px" width="200px" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>Abilities</h2>
            <ul className={classes.ulStyle}>
              {pokemon.abilities.map(ability => (
                <li key={ability.ability.url}>{capitalizeWord(ability.ability.name)}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>Types</h2>
            <ul className={classes.ulStyle}>
              {pokemon.types.map(type => (
                <li key={type.type.url}>{capitalizeWord(type.type.name)}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Stats</h2>
          </Paper>
          <Paper className={classes.paper}>
            <PokemonDetailTable pokemon={pokemon} />
          </Paper>
          <Paper className={classes.paper}>
            <Doughnut data={setChartAttDefHpSp(pokemon.stats[0].base_stat, pokemon.stats[2].base_stat, pokemon.stats[1].base_stat, pokemon.stats[5].base_stat)} />
          </Paper>
          <Paper className={classes.paper}>
            <Bar
              data={setChartHeiWei(pokemon.height, pokemon.weight)}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" className={classes.backButton}>
        <Link to="/pokemons/" style={navbarTab}>Back</Link>
      </Button>
    </div>
  );
};

PokemonDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export function getPokemonByName(pokemons, name) {
  return pokemons.find(pokemon => pokemon.name === name) || null;
}

const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps.match.params;
  const pokemon = name && state.pokemons.length > 0
    ? getPokemonByName(state.pokemons, name)
    : newPokemon;
  return {
    pokemons: state.pokemons,
    pokemon,
  };
};

export default connect(mapStateToProps)(PokemonDetail);
