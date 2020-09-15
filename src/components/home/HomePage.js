/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import navbarTab from '../themes';

const useStyles = makeStyles({
  button: {
    margin: '20px 0',
  },
  spanStyle: {
    fontSize: '12px',
    color: '#757575',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="jumbotron">
      <h1>Poke-Teka</h1>
      <p>This is the place where you can find information about your favorite Pokemon!</p>
      <img src="/home.jpg" width="100%" />
      <Button variant="contained" color="primary" className={classes.button}>
        <Link to="about" style={navbarTab}>
          Learn more
        </Link>
      </Button>
      <p>
        <span className={classes.spanStyle}>
          Created by
          <a href="https://www.linkedin.com/in/davideligarcia/" target="_blank" rel="noreferrer"> David García </a>
          Github:
          <a href="https://github.com/davitomix" target="_blank" rel="noreferrer"> @davitomix</a>
        </span>
        <br />
        <span className={classes.spanStyle}>Made with React, Redux, Coffe and Love.</span>
        <br />
        <span className={classes.spanStyle}>Photo by Vincent M.A. Janssen from Pexels</span>
      </p>
    </div>
  );
};

export default HomePage;
