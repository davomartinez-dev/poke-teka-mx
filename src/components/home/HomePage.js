/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import navbarTab from '../themes';
import './HomePage.css';

const useStyles = makeStyles({
  button: {
    margin: '20px 0',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="jumbotron">
      <h1>Poke-Teka</h1>
      <p>This is an app where you can find information about your favorite Pokemons!</p>
      <img src="https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb" width="100%" />
      <Button variant="contained" color="primary" className={classes.button}>
        <Link to="about" style={navbarTab}>
          Learn more
        </Link>
      </Button>
      <p>
        <span className="span-style">
          Created by
          <a href="https://www.linkedin.com/in/davidelimartinez/" target="_blank" rel="noreferrer"> David Martínez </a>
          <br />
          Github:
          <a href="https://github.com/davomartinez-dev" target="_blank" rel="noreferrer"> @davomartinez-dev </a>
          <br />
          Twitter:
          <a href="https://twitter.com/davomartinezdev" target="_blank" rel="noreferrer"> @davomartinezdev </a>
        </span>
        <br />
        <span className="span-style">Made with React, Redux, Coffe and Love.</span>
        <br />
        <span className="span-style">Photo by Vincent M.A. Janssen from Pexels</span>
      </p>
    </div>
  );
};

export default HomePage;
