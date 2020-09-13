import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Navbar from './common/Navbar';
import PageNotFound from './PageNotFound';
import PokemonsPage from './pokemons/PokemonsPage';
import PokemonDetail from './pokemons/PokemonDetail';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarTheme } from './themes';

const App = () => (
  <div className="container-fluid jumbotron">
    <ThemeProvider theme={NavbarTheme}>
      <Navbar />
    </ThemeProvider>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pokemons/:name" component={PokemonDetail} />
      <Route path="/pokemons" component={PokemonsPage} />
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
