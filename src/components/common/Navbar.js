import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navbarTab from '../themes';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-around',
  },
  button: {
    padding: 0,
    width: '100%',
    height: 50,
  },
  navlink: {
    fontSize: '1.3em',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Button className={classes.button}>
            <NavLink className={classes.navlink} to="/" style={navbarTab} exact>
              Home
            </NavLink>
          </Button>

          <Button className={classes.button}>
            <NavLink className={classes.navlink} to="/pokemons" style={navbarTab}>
              Pokemons
            </NavLink>
          </Button>

          <Button className={classes.button}>
            <NavLink className={classes.navlink} to="/about" style={navbarTab}>
              About
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
