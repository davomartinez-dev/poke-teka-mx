import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import navbarTab from '../themes';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Poke-Teka</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Button variant="contained" color="primary">
      <Link to="about" style={navbarTab}>
        Learn more
      </Link>
    </Button>
  </div>
);

export default HomePage;
