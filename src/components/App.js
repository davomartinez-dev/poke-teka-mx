import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import PokemonsPage from './pokemons/PokemonsPage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pokemons" component={PokemonsPage} />
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
