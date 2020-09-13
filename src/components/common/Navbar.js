import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={(
          <NavLink to="/" exact>
            Home
          </NavLink>
        )}
        />
        <Tab label={(
          <NavLink to="/pokemons">
            Pokemons
          </NavLink>
        )}
        />
        <Tab label={(
          <NavLink to="/about">
            About
          </NavLink>
        )}
        />
      </Tabs>
    </Paper>
  );
}
